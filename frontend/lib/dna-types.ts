export type DimKey = 'logical' | 'spatial' | 'verbal' | 'inter' | 'intra' | 'bodily' | 'musical' | 'naturalistic' | 'existential' | 'fluid' | 'learning' | 'adapt' | 'creative';
export type DnaPart = { n: number; title: string; subtitle: string; intro: string };
export type DnaScenario = {
  id: string; part: number; title: string; narrative: string[]; prompt: string;
  options: { id: string; text: string }[];
  scores: Record<string, Partial<Record<DimKey, number>>>;
  rationale: string;
  /** Branch scenarios only appear when `parent` was answered with `option`. */
  parent: string | null; option: string | null;
  refs: number[];
};
export type Reference = { id: number; text: string; url: string };
export type DnaState = { answers: Record<string, string>; tie: DimKey | null; recon: number | null };
