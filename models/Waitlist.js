import mongoose from "mongoose";

const WaitlistSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    phone: String,
    college: String,
    year: String,
    course: String,
    branch: String,
    reason: String,
    feedback: String,
  },
  { timestamps: true }
);

export default mongoose.models.Waitlist || mongoose.model("Waitlist", WaitlistSchema);
