import React from "react";
import heroImg from "/assets/websitepage1pic3.png";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-[#f9fbfc] via-[#f3f8f8] to-white text-gray-800">
      <section className="relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#002b45] via-[#003b5a] to-[#00bfa5] opacity-95"></div>

        <div className="absolute top-[-50px] right-[-100px] w-[400px] h-[400px] bg-[#00bfa5] opacity-30 rounded-full blur-3xl"></div>

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-24">
          <div className="max-w-xl text-white space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl lg:text-6xl font-bold leading-tight drop-shadow-md"
            >
              Empower Your Organization with
              <span className="text-[#00bfa5]"> People-Centric </span>
              Project Transformation
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-lg text-gray-200 leading-relaxed max-w-md"
            >
              PATH-HIVE redefines project management through innovation, collaboration, and human insight —
              building organizations that thrive on change.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="flex gap-4 pt-4"
            >
              <a
                href="/about"
                className="bg-[#00bfa5] text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transform transition"
              >
                Learn More
              </a>
              <a
             href="https://youtu.be/33tQNHDSlpk"
  target="_blank"
  rel="noopener noreferrer"
                className="border border-[#00bfa5] text-[#00bfa5] bg-white/10 backdrop-blur-md px-8 py-3 rounded-lg font-semibold hover:bg-[#00bfa5] hover:text-white hover:shadow-lg transition"
              >
                Watch Demo
              </a>
            </motion.div>
          </div>

          <motion.img
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            src={heroImg}
            alt="PATH-HIVE founder"
            className="mt-12 lg:mt-0 w-full max-w-md rounded-2xl shadow-2xl border border-white/10"
          />
        </div>
      </section>

      {/* 🌿 VALUES SECTION */}
      <section className="px-6 lg:px-20 py-20 bg-white text-gray-700 text-center">
        <h2 className="text-3xl font-semibold text-[#002b45] mb-12">
          The Heart of Transformation
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              title: "People First",
              desc: "Empower your internal talent and foster collaboration to unlock true potential.",
              icon: "👥",
            },
            {
              title: "Data + Insight",
              desc: "Bridge business, technology, and innovation with measurable, people-driven KPIs.",
              icon: "📊",
            },
            {
              title: "Sustainable Change",
              desc: "Create balanced growth strategies rooted in harmony, value, and continuous improvement.",
              icon: "🌱",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-gradient-to-b from-gray-50 to-white shadow-md hover:shadow-xl hover:-translate-y-1 transform transition"
            >
              <div className="text-4xl mb-4">{card.icon}</div>
              <h3 className="text-xl font-semibold text-[#002b45] mb-3">
                {card.title}
              </h3>
              <p className="text-gray-600">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ⚡ CTA */}
      <section className="bg-[#002b45] text-white py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#002b45] to-[#00bfa5] opacity-80"></div>
        <div className="relative z-10 px-6">
          <h3 className="text-3xl font-semibold mb-4">
            Ready to Transform Your Organization?
          </h3>
          <p className="mb-6 text-gray-200 max-w-2xl mx-auto">
            Join forward-thinking leaders leveraging PATH-HIVE to bridge people, processes, and technology for lasting impact.
          </p>
          <a
            href="/contact"
            className="bg-[#00bfa5] px-8 py-3 rounded-lg font-semibold hover:bg-[#00a68f] transition shadow-lg hover:shadow-xl"
          >
            Get Started Today
          </a>
        </div>
      </section>
    </div>
  );
}
