export default function handler(req, res) {
  console.log("Somebody visited /api/hello 🚀");
  res.status(200).json({ message: "Hello from Vercel!" });
}
