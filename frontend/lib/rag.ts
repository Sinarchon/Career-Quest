import { api } from '@/lib/api';

export type RagSource = { n: number; title: string; excerpt: string };
export type RagAnswer = { status: 'ok' | 'not_configured' | 'no_match'; answer: string | null; sources: RagSource[] };

/** Ask Yuki a question grounded in the Learning DNA questionnaire, its scoring rules and its references. */
export const askYuki = (question: string, profile: string) => api<RagAnswer>('/rag/ask', { method: 'POST', body: { question, profile } });
