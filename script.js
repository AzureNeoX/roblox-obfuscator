export default function handler(req, res) {
  const { c } = req.query;
  if (!c) return res.status(400).send("-- error: missing ?c=");
  try {
    const decoded = Buffer.from(c, "base64").toString("utf-8");
    res.setHeader("Content-Type", "text/plain");
    res.send(decoded);
  } catch (e) {
    res.status(400).send("-- error: invalid base64");
  }
}