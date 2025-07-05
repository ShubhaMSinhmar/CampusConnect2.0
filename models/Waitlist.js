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
    rollNumber: String,
    reason: String,
    feedback: String,
  },
  { timestamps: true }
);

// Add compound unique index
WaitlistSchema.index({ college: 1, rollNumber: 1 }, { unique: true });

export default mongoose.models.Waitlist ||
  mongoose.model("Waitlist", WaitlistSchema);
