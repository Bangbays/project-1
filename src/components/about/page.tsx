"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-8 p-8 bg-black"
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="flex-1 flex justify-center"
      >
        <div className="relative w-64 h-64">
          <Image
            src="/photo-3.png"
            alt="photo-3"
            fill
            className="object-contain rounded-md"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="flex-1 text-center md:text-left"
      >
        <h2 className="text-yellow-500 text-x1 mb-2">About Me</h2>
        <p className="text-gray-300 mb-6">
          I'm someone who made a career switch from a graduate of UIN Sunan
          Kalijaga majoring in da'wah management to a fullstack developer. I
          want to increase my skills and abilities so that it can open up a
          career path that I can go through bigger.
        </p>
        <Link
          href="/contact"
          className="bg-yellow-500 text-black px-6 py-2 font-semibold rounded hover:bg-yellow-600 transition inline-block"
        >
          Contact Me
        </Link>
      </motion.div>
    </section>
  );
}
