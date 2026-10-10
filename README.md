# CareerQuest full stack
- `backend/`: FastAPI + Supabase Postgres (see backend/README.md)
- `frontend/`: Next.js app (`cp .env.local.example .env.local`, `npm install`, `npm run dev` — or just `npm run dev` at the repo root)
Run the API on :8000 and the frontend on :3000. Dev emails (verify/reset links) print in the API console.

## New in this version
- Learning DNA Profiler (branching + ambiguous-answer follow-ups) built from lessgo.docx, with the references at the bottom of every section.
- Ask Yuki: RAG over the questionnaire (see backend/README.md; run `python ingest.py` once).
- API origin proxy in `frontend/next.config.mjs`; set `NEXT_PUBLIC_API_URL=/api` and, on Vercel, `API_ORIGIN`.
