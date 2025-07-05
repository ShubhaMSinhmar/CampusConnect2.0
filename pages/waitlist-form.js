"use client";
import { useState } from "react";
import {
  ArrowLeft,
  User,
  Mail,
  Phone,
  GraduationCap,
  Calendar,
  BookOpen,
  GitBranch,
  MessageSquare,
  Star,
} from "lucide-react";
import Link from "next/link";
import Navigation from "./components/navigation";

export default function WaitlistForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    year: "",
    course: "",
    branch: "",
    reason: "",
    feedback: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Something went wrong");

      setIsSubmitted(true);
    } catch (err) {
      console.error(err);
      alert("Submission failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <div className="bg-white rounded-3xl shadow-xl p-8 backdrop-blur-md border border-gray-200/50 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Welcome to the Waitlist!
            </h2>
            <p className="text-gray-600 mb-8">
              Thank you for joining CampusConnect! We&apos;ll notify you as soon
              as we launch. Get ready to revolutionize your campus experience.
            </p>
            <Link
              href="/"
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-12 px-4 bg-white">
      <Navigation />
      <div className="pb-12"></div>
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Link
            href="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-700  mb-8 transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>

          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 transition-colors duration-300">
            Join the{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Waitlist
            </span>
          </h1>
          <p className="text-xl text-gray-600 transition-colors duration-300">
            Be among the first to experience the future of campus networking
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-3xl shadow-xl p-8 backdrop-blur-md border border-gray-200/50 transition-all duration-300">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center transition-colors duration-300">
                <User className="w-5 h-5 mr-2 text-blue-600" />
                Personal Information
              </h3>

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2 transition-colors duration-300"
                >
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white  text-gray-900  placeholder-gray-500  transition-all duration-300"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2 transition-colors duration-300"
                >
                  Email Address <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white  text-gray-900  placeholder-gray-500  transition-all duration-300"
                    placeholder="your.email@college.edu"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2 transition-colors duration-300"
                >
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <div className="relative flex">
                  <span className="flex items-center px-3 bg-gray-100 border border-r-0 border-gray-300 rounded-l-xl text-gray-700 text-sm select-none">
                    +91
                  </span>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-r-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900 placeholder-gray-500 transition-all duration-300"
                    placeholder="7988-xxxxxx"
                  />
                </div>
              </div>
            </div>

            {/* Academic Information */}
            <div className="space-y-6 pt-6 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center transition-colors duration-300">
                <GraduationCap className="w-5 h-5 mr-2 text-blue-600" />
                Academic Information
              </h3>

              {/* College */}
              <div>
                <label
                  htmlFor="college"
                  className="block text-sm font-medium text-gray-700 mb-2 transition-colors duration-300"
                >
                  College/University <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="college"
                  name="college"
                  required
                  value={formData.college}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white  text-gray-900  placeholder-gray-500  transition-all duration-300"
                  placeholder="Enter your college name"
                />
              </div>

              {/* Year and Course Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Year */}
                <div>
                  <label
                    htmlFor="year"
                    className="block text-sm font-medium text-gray-700 mb-2 transition-colors duration-300"
                  >
                    Year of Study <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <select
                      id="year"
                      name="year"
                      required
                      value={formData.year}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white  text-gray-900  transition-all duration-300"
                    >
                      <option value="">Select Year</option>
                      <option value="1st Year">1st Year</option>
                      <option value="2nd Year">2nd Year</option>
                      <option value="3rd Year">3rd Year</option>
                      <option value="4th Year">4th Year</option>
                      <option value="Graduate">Graduate</option>
                      <option value="PhD">PhD</option>
                    </select>
                  </div>
                </div>
                {/* Course */}
                <div>
                  <label
                    htmlFor="course"
                    className="block text-sm font-medium text-gray-700 mb-2 transition-colors duration-300"
                  >
                    Course <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <BookOpen className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      id="course"
                      name="course"
                      required
                      value={formData.course}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900 placeholder-gray-500 transition-all duration-300"
                      placeholder="e.g., B.Tech, B.Sc, MBA"
                    />
                  </div>
                </div>
              </div>

              {/* Branch */}
              <div>
                <label
                  htmlFor="branch"
                  className="block text-sm font-medium text-gray-700 mb-2 transition-colors duration-300"
                >
                  Branch/Specialization <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <GitBranch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    id="branch"
                    name="branch"
                    required
                    value={formData.branch}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white  text-gray-900  placeholder-gray-500 transition-all duration-300"
                    placeholder="e.g., Computer Science, Mechanical, Business"
                  />
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="space-y-6 pt-6 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center transition-colors duration-300">
                <MessageSquare className="w-5 h-5 mr-2 text-blue-600" />
                Tell Us More
              </h3>

              {/* Reason for Joining */}
              <div>
                <label
                  htmlFor="reason"
                  className="block text-sm font-medium text-gray-700 mb-2 transition-colors duration-300"
                >
                  Why do you want to join CampusConnect?
                </label>
                <textarea
                  id="reason"
                  name="reason"
                  rows={4}
                  value={formData.reason}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900 placeholder-gray-500 transition-all duration-300 resize-none"
                  placeholder="Share your motivation for joining our platform..."
                />
              </div>

              {/* Feedback */}
              <div>
                <label
                  htmlFor="feedback"
                  className="block text-sm font-medium text-gray-700 mb-2 transition-colors duration-300"
                >
                  Any feedback or suggestions?
                </label>
                <textarea
                  id="feedback"
                  name="feedback"
                  rows={3}
                  value={formData.feedback}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900 placeholder-gray-500 transition-all duration-300 resize-none"
                  placeholder="Help us improve by sharing your thoughts..."
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                    Joining Waitlist...
                  </>
                ) : (
                  <>
                    <Star className="w-5 h-5 mr-2" />
                    Join the Waitlist
                  </>
                )}
              </button>
            </div>

            {/* Required Fields Note */}
            <p className="text-sm text-gray-500 text-center transition-colors duration-300">
              <span className="text-red-500">*</span> Required fields
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
