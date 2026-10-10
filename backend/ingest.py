"""Load knowledge.json into rag_chunks. Run once after schema.sql, and again whenever knowledge.json changes."""
import asyncio, json, os, asyncpg

def load_env():
    p = os.path.join(os.path.dirname(__file__), ".env")
    if "DATABASE_URL" not in os.environ and os.path.exists(p):
        for line in open(p, encoding="utf-8"):
            k, _, v = line.strip().partition("=")
            if k and not k.startswith("#"): os.environ.setdefault(k, v)

async def main():
    load_env()
    chunks = json.load(open(os.path.join(os.path.dirname(__file__), "knowledge.json"), encoding="utf-8"))
    c = await asyncpg.connect(os.environ["DATABASE_URL"], statement_cache_size=0)
    async with c.transaction():
        await c.execute("truncate rag_chunks restart identity")
        await c.executemany("insert into rag_chunks(title, content) values($1, $2)", [(x["title"], x["text"]) for x in chunks])
    await c.close()
    print(f"Ingested {len(chunks)} chunks")

asyncio.run(main())
