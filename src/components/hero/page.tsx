"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-8 p-8 bg-black"
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex-1 text-center md:text-left"
      >
        <p className="text-yellow-500 mb-2">Hello, Welcome</p>
        <h1 className="text-4x1 md:text-5x1 font-bold mb-4">
          I'm Amirullah Akbar
        </h1>
        <p className="text-gray-300 mb-6">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
          voluptate, optio doloribus eligendi molestias dolorum accusamus iusto,
          corrupti nihil id deleniti, nesciunt hic. Quam quasi commodi inventore
          soluta adipisci omnis?
        </p>
        <Link
          href="/contact"
          className="bg-yellow-500 text-black px-6 py-2 font-semibold rounded hover:bg-yellow-600 transition inline-block"
        >
          Contact Me
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex-1 flex justify-center"
      >
        <Image
          src="/photo-2.png"
          alt="Photo-2"
          width={400}
          height={400}
          className="rounded-md"
        />
      </motion.div>
    </section>
  );
}
