'use client';
import { useEffect, useRef, useState, type ReactNode } from 'react';
import { ArrowLeft, ArrowRight, BookOpen, Brain, Check, Compass, LayoutGrid, Lightbulb, PenLine, RotateCcw, Shapes, Sprout, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useProgress } from '@/components/providers/progress-provider';
import { useNav } from '@/components/quest/common';
import { DNA_PARTS } from '@/lib/data/dna';
import { BRANCH_DIM, DIMS, RECON, ambiguity, careerFit, depth, profile, stageOf } from '@/lib/dna';

// One icon per part, matching what that part is actually about.
const PART_ICONS = [Compass, LayoutGrid, Users, BookOpen, Lightbulb, PenLine, Shapes];
const PART_TONES = ['qt-1', 'qt-2', 'qt-3', 'qt-4'];
const partTone = (n: number) => PART_TONES[(n - 1) % PART_TONES.length];

/** Choice cards. Shows the pick before the next question replaces it. */
function Options({ options, onPick }: { options: { id: string; text: string }[]; onPick: (id: string) => void }) {
  const [chosen, setChosen] = useState<string | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);
  const pick = (id: string) => {
    if (chosen) return;
    setChosen(id);
    const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    timer.current = setTimeout(() => onPick(id), still ? 0 : 420);
  };
  return <div className="q-options" role="group" aria-label="Choose what you would do">
    {options.map((o, i) => (
      <button type="button" key={o.id} disabled={!!chosen} onClick={() => pick(o.id)}
        className={`q-option${chosen === o.id ? ' chosen' : ''}${chosen && chosen !== o.id ? ' dim' : ''}`}
        style={{ animationDelay: `${i * 55}ms` }}>
        <span className="q-mark" aria-hidden="true"><Check /></span>
        <span>{o.text}</span>
      </button>
    ))}
  </div>;
}

export function ProfilerView() {
  const { progress, dispatch } = useProgress();
  const { go } = useNav();
  const [begun, setBegun] = useState(false);
  const st = progress.dna;
  const started = Object.keys(st.answers).length > 0;
  const stage = stageOf(st);
  // The furthest part reached, so the dots still read correctly on the recon/tie/result screens.
  const parts = Object.keys(st.answers).map(k => parseInt(k, 10));
  const furthest = parts.length ? Math.max(...parts) : 0;
  const current = stage.kind === 'scenario' ? stage.s.part : furthest;

  const frame = (body: ReactNode, tone: string) => (
    <div className="quest-frame">
      <header className="quest-bar">
        <div className="logo"><div className="logo-mark"><Sprout size={20} /></div><div>Career<span className="accent">Quest</span></div></div>
        <div className="quest-dots" role="img" aria-label={current ? `Part ${current} of ${DNA_PARTS.length}` : 'Not started'}>
          {DNA_PARTS.map(p => <i key={p.n} className={p.n === current ? 'now' : p.n < current ? 'done' : ''} />)}
        </div>
        <Button variant="ghost" size="sm" onClick={() => go('journey')}>Exit</Button>
      </header>
      <div className="quest-stage"><div className={`quest-panel ${tone}`}>{body}</div></div>
    </div>
  );

  if (!started && !begun) return frame(
    <section className="q-intro">
      <span className="q-chip"><Brain />The Learning DNA Profiler</span>
      <h1>Seven short stories. No right answers.</h1>
      <p>About 10 to 15 decisions, in seven parts. Each choice shows how you think, and later questions adapt to your earlier answers. Nothing here is timed and nothing is a test.</p>
      <Button onClick={() => setBegun(true)}>Begin <ArrowRight /></Button>
    </section>, 'qt-1');

  if (stage.kind === 'scenario') {
    const s = stage.s, part = DNA_PARTS.find(p => p.n === s.part)!, Icon = PART_ICONS[(part.n - 1) % PART_ICONS.length];
    const back = started ? <Button variant="ghost" size="sm" onClick={() => dispatch({ type: 'dnaBack' })}><ArrowLeft />Back</Button> : null;
    return frame(
      <section className="q-enter" key={s.id}>
        <span className="q-chip"><Icon />Part {part.n} of {DNA_PARTS.length} · {part.title}{s.parent ? ' · Follow-up' : ''}</span>
        {part.intro && s.id.endsWith('.1') && <p className="q-intro-note"><em>{part.intro}</em></p>}
        <h1 className="q-scene-title">{s.title}</h1>
        <div className="q-narrative">{s.narrative.map((t, i) => <p key={i}>{t}</p>)}</div>
        <h2 className="q-prompt">{s.prompt}</h2>
        <Options key={s.id} options={s.options} onPick={id => dispatch({ type: 'dnaAnswer', id: s.id, option: id })} />
        <details className="q-why"><summary>Why we ask this</summary>
          <p>{s.rationale}</p>
          {s.refs.length > 0 && <p>Sources: {s.refs.map(n => <a key={n} href={`#ref-${n}`} style={{ textDecoration: 'underline', marginRight: 8 }}>[{n}]</a>)}</p>}
        </details>
        <div className="q-foot">{back}</div>
      </section>, partTone(part.n));
  }

  if (stage.kind === 'recon') return frame(
    <section className="q-enter">
      <span className="q-chip">Quick check</span>
      <h1 className="q-scene-title">Some of your answers pull in different directions</h1>
      <div className="q-narrative"><p>You notice that in group settings you read people well, but when making personal decisions you prefer to work alone. Which statement resonates more?</p></div>
      <div className="q-options" role="group" aria-label="Choose the statement that resonates more">
        {RECON.map((r, i) => <button type="button" key={i} className="q-option" style={{ animationDelay: `${i * 55}ms` }} onClick={() => dispatch({ type: 'dnaSet', patch: { recon: i } })}><span className="q-mark" aria-hidden="true"><Check /></span><span>{r.text}</span></button>)}
      </div>
      <div className="q-foot"><Button variant="ghost" size="sm" onClick={() => dispatch({ type: 'dnaBack' })}><ArrowLeft />Back</Button></div>
    </section>, 'qt-1');

  if (stage.kind === 'tie') return frame(
    <section className="q-enter">
      <span className="q-chip">Tie-breaker</span>
      <h1 className="q-scene-title">Two strengths are almost level</h1>
      <div className="q-narrative"><p>Your answers rate <strong>{DIMS[stage.a].label}</strong> and <strong>{DIMS[stage.b].label}</strong> about equally. Which sounds more like you?</p></div>
      <div className="q-options" role="group" aria-label="Choose which sounds more like you">
        {[stage.a, stage.b].map((k, i) => <button type="button" key={k} className="q-option" style={{ animationDelay: `${i * 55}ms` }} onClick={() => dispatch({ type: 'dnaSet', patch: { tie: k } })}><span className="q-mark" aria-hidden="true"><Check /></span><span>{DIMS[k].blurb}</span></button>)}
      </div>
      <div className="q-foot"><Button variant="ghost" size="sm" onClick={() => dispatch({ type: 'dnaBack' })}><ArrowLeft />Back</Button></div>
    </section>, 'qt-1');

  const p = profile(st), fit = careerFit(st), d = depth(st), amb = ambiguity(st);
  return frame(
    <section className="q-enter">
      <span className="q-chip">Your results</span>
      <h1 className="q-scene-title">Your Learning DNA</h1>
      <div className="q-narrative"><p>Each bar is your score out of the points available from the questions you answered. Order reflects career weighting. This is a starting point, not a verdict.</p></div>
      <div style={{ display: 'grid', gap: 10, margin: '0 0 26px' }}>{p.map(r => <div key={r.key}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13 }}><span>{DIMS[r.key].label}</span><span>{r.asked ? `${Math.round(r.norm * 100)}% · ${r.asked} question${r.asked > 1 ? 's' : ''}` : 'not assessed'}{d.byDim[r.key] ? ` · depth ${d.byDim[r.key]! + 1}` : ''}</span></div>
        <div style={{ height: 8, borderRadius: 4, background: 'var(--border)' }}><div style={{ width: `${r.norm * 100}%`, height: '100%', borderRadius: 4, background: 'currentColor', opacity: 0.75 }} /></div>
      </div>)}</div>
      <h2 className="q-prompt">Closest career families</h2>
      <ol style={{ paddingLeft: 20, margin: '0 0 18px' }}>{fit.slice(0, 3).map(f => <li key={f.name}><strong>{f.name}</strong> · {f.riasec} · {Math.round(f.fit * 100)}% match</li>)}</ol>
      <p style={{ fontSize: 13, color: 'var(--muted-foreground)' }}>Branching depth: you reached {d.reached} of {Object.keys(BRANCH_DIM).length} follow-up paths; deeper paths make that dimension's score more reliable.
        {(st.recon !== null || st.tie) && ' We also asked a clarifying question where your answers were ambiguous.'}{!st.recon && !st.tie && amb.tie ? '' : ''}</p>
      <div className="q-foot flex gap-3 flex-wrap">
        <Button onClick={() => go('mentor')}>Ask Yuki about my results <ArrowRight /></Button>
        <Button variant="outline" onClick={() => go('careers')}>Explore careers</Button>
        <Button variant="ghost" onClick={() => dispatch({ type: 'dnaReset' })}><RotateCcw />Retake</Button>
      </div>
    </section>, 'qt-1');
}
