# CareerQuest API
1. Run `schema.sql` in the Supabase SQL editor.
2. `cp .env.example .env`, fill it in, then `pip install -r requirements.txt`.
3. `set -a; source .env; set +a; uvicorn main:app --reload` (docs at http://localhost:8000/docs).
In dev (no SMTP_HOST) verification and reset links are printed in the server console.

## RAG
1. Re-run `schema.sql` (it adds `rag_chunks` and `rate_limits`; safe to run again).
2. `python ingest.py` (needs `DATABASE_URL` in the environment) loads `knowledge.json`, built from the questionnaire.
3. Set `ANTHROPIC_API_KEY` for generated answers. Without it the API returns the matching passages only.
Retrieval is Postgres full-text search. To upgrade to embeddings, enable pgvector, add an `embedding` column, and rank by vector distance in `rag_ask`.
