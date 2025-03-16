"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full flex items-center justify-between px-8 py-4 bg-black/80 sticky top-0 z-50"
    >
      <div className="text-yellow-500 font-bold text-x1">About Me</div>
      <ul className="flex gap-6 text-white">
        <li>
          <a href="#hero">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skill">Skill</a>
        </li>
        <li>
          <a href="#portofolio">Portofolio</a>
        </li>
        <li>
          <a href="#resume">Resume</a>
        </li>
        {/* <li>
          <a href="#blog">Blog</a>
        </li> */}
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </motion.nav>
  );
}
