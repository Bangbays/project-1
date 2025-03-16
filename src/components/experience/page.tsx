"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Experience() {
  const experience = [
    {
      date: "June 2019 - June 2021",
      role: "Customer Service Live Chat",
      tool: "Salesforce",
    },
    {
      date: "December 2021 - May 2024",
      role: "Agent Claim",
      tool: "Salesforce",
    },
  ];

  return (
    <section id="resume" className="py-16 px-8 bg-black">
      <h2 className="text-3x1 text-yellow-500 font-bold mb-8">My Experience</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {experience.map((exp, idx) => (
          <motion.div
            key={idx}
            className="bg-[#1a1a1a] p-6 rounded shadow"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
          >
            <p className="text-gray-500 mb-1">{exp.date}</p>
            <h3 className="text-x1 text-white font-semibold">{exp.role}</h3>
            <p className="text-yellow-500 mb-2">{exp.tool}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
