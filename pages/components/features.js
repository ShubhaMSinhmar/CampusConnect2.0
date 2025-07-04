"use client";

import Image from "next/image";
import { Home, Calendar, Search, MessageCircle, User } from "lucide-react";

const features = [
  {
    title: "Home Page",
    desc: "Welcome your campus community with an elegant, personalized landing experience.",
    details:
      "The Home Page serves as the command center of your student life. Get a dynamic snapshot of trending events, featured discussions, and personalized updates tailored to your interests. From quick actions to intelligent recommendations, this page makes sure you never miss a beat on campus. Engage faster, navigate smarter.",
    image: "/home.jpg",
    icon: Home,
  },
  {
    title: "Events Page",
    desc: "Discover, register, and stay informed about the most exciting campus events.",
    details:
      "Whether it’s a cultural fest, a tech workshop, or a startup hackathon — the Events Page brings everything to one place. Filter by interests, set reminders, and RSVP with one click. Get real-time updates, and event details, so you're always prepared. This page turns FOMO into JOMO (Joy of Missing Out — because now you choose what to attend).",
    image: "/events.jpg",
    icon: Calendar,
  },
  {
    title: "Discover Page",
    desc: "Explore curated opportunities, resources, and communities designed for students like you.",
    details:
      "The Discover Page brings your campus to life through engaging, short-form video highlights. From electrifying fests and insightful seminars to student-led initiatives, explore it all in one immersive feed. Like, comment, and share your favorite campus memories — personalized to your interests and student community.",
    image: "/discover.jpg",
    icon: Search,
  },
  {
    title: "Discussion Page",
    desc: "Engage in vibrant student-led discussions, Q&As, and collaborative planning.",
    details:
      "Post questions, share ideas, or just vibe in open threads — the Discussion Page is your go-to spot for real talk. Organize study groups, debate hot topics, and stay in the loop with threaded conversations, notifications, and polls. Built for collaboration and connection, it bridges the gap between students, clubs, and admins.",
    image: "/discussions.jpg",
    icon: MessageCircle,
  },
  {
    title: "Profile Page",
    desc: "Showcase your campus identity and customize your student experience.",
    details:
      "Your Profile is more than a bio — it’s a living portfolio of your college journey. Update preferences, manage notifications, and track your engagement footprint. Whether you’re networking or just staying organized, this is your space.",
    image: "/profile.jpg",
    icon: User,
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-blue-50 "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Powerful Features for{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Campus Life
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to connect, collaborate, and succeed in your
            academic journey
          </p>
        </div>

        {/* Features List */}
        <div className="space-y-16">
          {features.map((feature, index) => {
            const isEven = index % 2 === 0;
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className={`flex flex-col md:flex-row items-center justify-between rounded-3xl shadow-xl p-6 md:p-10 min-h-[300px] backdrop-blur-md bg-white/80 dark:bg-white/10 ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Text Section */}
                <div className="w-full md:w-1/2 text-center md:text-left mb-6 md:mb-0">
                  <div className="flex items-center justify-center md:justify-start mb-4">
                    <Icon className="w-6 h-6 text-blue-600 mr-2" />
                    <span className="text-sm font-semibold text-blue-600">
                      Screen {index + 1}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>

                  <p className="text-lg text-gray-600 mb-3 leading-relaxed">
                    {feature.desc}
                  </p>

                  <p className="text-base text-gray-500 max-w-md mx-auto md:mx-0 leading-relaxed">
                    {feature.details}
                  </p>
                </div>

                {/* Image Section */}
                <div className="w-full md:w-1/2 flex justify-center">
                  <div className="relative">
                    {/* Phone Frame */}
                      <div className="bg-black rounded-[1rem] overflow-hidden">
                        <Image
                          src={feature.image || "/placeholder.svg"}
                          alt={feature.title}
                          width={150}
                          height={200}
                          className="rounded-xl object-contain w-full h-auto"
                        />
                      </div>

                    {/* Floating Icon */}
                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
