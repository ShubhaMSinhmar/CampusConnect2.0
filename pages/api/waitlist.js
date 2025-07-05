import dbConnect from "@/lib/dbConnect";
import Waitlist from "@/models/Waitlist";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "POST") {
    try {
      const waitlistEntry = await Waitlist.create(req.body);
      res.status(201).json({ success: true, data: waitlistEntry });
    } catch (error) {
      res.status(400).json({ success: false, error: error.message });
    }
  } else {
    res.status(405).json({ success: false, message: "Method Not Allowed" });
  }
}
