"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Skill() {
  const skill = [
    {
      title: "Front-end Development",
      skill:
        "HTML, CSS, JavaScript, React, Next.Js, Tailwind CSS, Responsive Design(onGoing)",
    },
    {
      title: "Back-end Development(onGoing)",
      skill:
        "Python, Java, Ruby, PHP, C++, MySQL, MongoDB, PostGreSQL, Laravel(onGoing All)",
    },
    {
      title: "Softskill",
      skill:
        "Public Speaking, Problem Solving, Time Management, Teamwork, Communication(interpersonal and intrapersonal)",
    },
  ];

  return (
    <section id="skill" className="py-16 px-8 bg-black">
      <h2 className="text-3x1 text-yellow-500 font-bold mb-8">My Skill</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {skill.map((skill, idx) => (
          <motion.div
            key={idx}
            className="bg-[#1a1a1a] p-6 rounded shadow"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
          >
            <h3 className="text-x1 text-white font-semibold mb-2">
              {skill.title}
            </h3>
            <p className="text-gray-400">{skill.skill}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
