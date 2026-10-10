'use client';
import { useState } from 'react';
import { ArrowLeft, ArrowRight, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useProgress } from '@/components/providers/progress-provider';
import { useNav } from '@/components/quest/common';
import { DNA_PARTS } from '@/lib/data/dna';
import { BRANCH_DIM, DIMS, RECON, ambiguity, careerFit, depth, profile, stageOf } from '@/lib/dna';

const choice = 'w-full h-auto justify-start whitespace-normal text-left py-3';

export function ProfilerView() {
  const { progress, dispatch } = useProgress();
  const { go } = useNav();
  const [begun, setBegun] = useState(false);
  const st = progress.dna;
  const started = Object.keys(st.answers).length > 0;
  const stage = stageOf(st);
  const back = started && stage.kind !== 'done' ? <Button variant="ghost" size="sm" onClick={() => dispatch({ type: 'dnaBack' })}><ArrowLeft />Back</Button> : null;

  if (!started && !begun) return <section className="sensei-panel">
    <h2>The Learning DNA Profiler</h2>
    <p>Seven short stories and about 10 to 15 decisions. Each choice shows how you think, and later questions adapt to your earlier answers. There are no right answers.</p>
    <Button onClick={() => setBegun(true)}>Begin <ArrowRight /></Button>
  </section>;

  if (stage.kind === 'scenario') {
    const s = stage.s, part = DNA_PARTS.find(p => p.n === s.part)!;
    return <section className="sensei-panel">
      <div className="chip" style={{ marginBottom: 10 }}>Part {part.n} of 7 · {part.title}{s.parent ? ' · Follow-up' : ''}</div>
      {part.intro && s.id.endsWith('.1') && <p><em>{part.intro}</em></p>}
      <h2>{s.title}</h2>
      {s.narrative.map((t, i) => <p key={i}><em>{t}</em></p>)}
      <h3 style={{ margin: '14px 0 10px' }}>{s.prompt}</h3>
      <div style={{ display: 'grid', gap: 8 }}>{s.options.map(o => <Button key={o.id} variant="outline" className={choice} onClick={() => dispatch({ type: 'dnaAnswer', id: s.id, option: o.id })}><strong>{o.id}</strong>&nbsp;{o.text}</Button>)}</div>
      <details style={{ marginTop: 14, fontSize: 13 }}><summary style={{ cursor: 'pointer' }}>Why we ask this</summary>
        <p>{s.rationale}</p>
        {s.refs.length > 0 && <p>Sources: {s.refs.map(n => <a key={n} href={`#ref-${n}`} style={{ textDecoration: 'underline', marginRight: 8 }}>[{n}]</a>)}</p>}
      </details>
      <div style={{ marginTop: 12 }}>{back}</div>
    </section>;
  }

  if (stage.kind === 'recon') return <section className="sensei-panel">
    <div className="chip" style={{ marginBottom: 10 }}>Quick check</div>
    <h2>Some of your answers pull in different directions</h2>
    <p><em>You notice that in group settings you read people well, but when making personal decisions you prefer to work alone. Which statement resonates more?</em></p>
    <div style={{ display: 'grid', gap: 8 }}>{RECON.map((r, i) => <Button key={i} variant="outline" className={choice} onClick={() => dispatch({ type: 'dnaSet', patch: { recon: i } })}>{r.text}</Button>)}</div>
    <div style={{ marginTop: 12 }}>{back}</div>
  </section>;

  if (stage.kind === 'tie') return <section className="sensei-panel">
    <div className="chip" style={{ marginBottom: 10 }}>Tie-breaker</div>
    <h2>Two strengths are almost level</h2>
    <p>Your answers rate <strong>{DIMS[stage.a].label}</strong> and <strong>{DIMS[stage.b].label}</strong> about equally. Which sounds more like you?</p>
    <div style={{ display: 'grid', gap: 8 }}>{[stage.a, stage.b].map(k => <Button key={k} variant="outline" className={choice} onClick={() => dispatch({ type: 'dnaSet', patch: { tie: k } })}>{DIMS[k].blurb}</Button>)}</div>
    <div style={{ marginTop: 12 }}>{back}</div>
  </section>;

  const p = profile(st), fit = careerFit(st), d = depth(st), amb = ambiguity(st);
  return <section className="sensei-panel">
    <h2>Your Learning DNA</h2>
    <p>Each bar is your score out of the points available from the questions you answered. Order reflects career weighting. This is a starting point, not a verdict.</p>
    <div style={{ display: 'grid', gap: 8, margin: '14px 0' }}>{p.map(r => <div key={r.key}>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13 }}><span>{DIMS[r.key].label}</span><span>{r.asked ? `${Math.round(r.norm * 100)}% · ${r.asked} question${r.asked > 1 ? 's' : ''}` : 'not assessed'}{d.byDim[r.key] ? ` · depth ${d.byDim[r.key]! + 1}` : ''}</span></div>
      <div style={{ height: 8, borderRadius: 4, background: 'var(--border)' }}><div style={{ width: `${r.norm * 100}%`, height: '100%', borderRadius: 4, background: 'currentColor', opacity: 0.75 }} /></div>
    </div>)}</div>
    <h3>Closest career families</h3>
    <ol style={{ paddingLeft: 20, margin: '8px 0 14px' }}>{fit.slice(0, 3).map(f => <li key={f.name}><strong>{f.name}</strong> · {f.riasec} · {Math.round(f.fit * 100)}% match</li>)}</ol>
    <p style={{ fontSize: 13 }}>Branching depth: you reached {d.reached} of {Object.keys(BRANCH_DIM).length} follow-up paths; deeper paths make that dimension's score more reliable.
      {st.recon !== null || st.tie ? ' We also asked a clarifying question where your answers were ambiguous.' : amb.tie ? '' : ''}</p>
    <div className="flex gap-3 flex-wrap" style={{ marginTop: 12 }}>
      <Button onClick={() => go('mentor')}>Ask Yuki about my results <ArrowRight /></Button>
      <Button variant="outline" onClick={() => go('careers')}>Explore careers</Button>
      <Button variant="ghost" onClick={() => dispatch({ type: 'dnaReset' })}><RotateCcw />Retake</Button>
    </div>
  </section>;
}

