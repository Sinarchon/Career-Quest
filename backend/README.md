# CareerQuest API
1. Run `schema.sql` in the Supabase SQL editor.
2. `cp .env.example .env`, fill it in, then `pip install -r requirements.txt`.
3. `set -a; source .env; set +a; uvicorn main:app --reload` (docs at http://localhost:8000/docs).
In dev (no SMTP_HOST) verification and reset links are printed in the server console.
