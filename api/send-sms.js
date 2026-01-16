/**
 * Vercel Serverless Function
 * POST /api/send-sms
 */
export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      res.status(405).json({ success: false, message: "Method Not Allowed" });
      return;
    }

    // Robust JSON body parse
    let bodyObj = req.body;
    if (!bodyObj || typeof bodyObj === "string") {
      const chunks = [];
      await new Promise((resolve, reject) => {
        req.on("data", (c) => chunks.push(c));
        req.on("end", resolve);
        req.on("error", reject);
      });
      const raw = Buffer.concat(chunks).toString("utf8") || (typeof bodyObj === "string" ? bodyObj : "");
      try { bodyObj = raw ? JSON.parse(raw) : {}; } catch { bodyObj = { raw }; }
    }

    const upstream = await fetch("http://canyone2302.cafe24app.com/send-sms", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bodyObj),
    });

    const text = await upstream.text();
    res.status(upstream.status);
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.send(text);
  } catch (err) {
    res.status(500).json({ success: false, message: String(err?.message || err) });
  }
}
