const mod = await import("./dist/server/server.js");
const paths = ["/", "/robots.txt", "/sitemap.xml"];
for (const p of paths) {
  const res = await mod.default.fetch(new Request(`https://topri.io${p}`));
  const body = await res.text();
  const out = p === "/" ? "index.html" : p.slice(1);
  await Bun.write(`static-out/${out}`, body);
  console.log(p, res.status, res.headers.get("content-type"), body.length);
}
