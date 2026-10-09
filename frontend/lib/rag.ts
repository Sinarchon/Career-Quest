import { api } from '@/lib/api';

export type RagAnswer = { status: 'ok' | 'not_implemented'; answer: string | null; sources: { title: string; url?: string }[] };

/** Ask Yuki a grounded question. Wire this into the Sensei panel once /rag/ask is implemented. */
export const askYuki = (question: string) => api<RagAnswer>('/rag/ask', { method: 'POST', body: { question } });
