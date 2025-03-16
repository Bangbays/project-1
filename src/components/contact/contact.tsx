"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-8 bg-black">
      <h2 className="text-3x1 text-yellow-500 font-bold mb-8 text-center">Contact Me</h2>

      <div className="flex flex-col md:flex-row gap-8">
        <motion.div
          className="flex-1 bg-[#1a1a1a] p-6 rounded"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-x1 text-white font-semibold mb-4">Address</h3>
          <p className="text-gray-400 mb-2">
            Perumahan Kota Alam Taman Beber N10 Beber Kabupaten Cirebon
          </p>
          <p className="text-gray-400 mb-2">Phone: 087821075323</p>
          <p className="text-gray-400 mb-2">Email: amirullahakbar@gmail.com</p>
        </motion.div>

        <motion.div
          className="flex-1 bg-[#1a1a1a] p-6 rounded"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Name"
              className="p-2 rounded bg-black border border-gray-700 focus:outline-none focus:border-yellow-500 text-white"
            />
            <textarea
              placeholder="Message"
              className="p-2 rounded bg-black border border-gray-700 focus:outline-none focus:border-yellow-500 text-white"
              rows={5}
            />
            <button
              type="submit"
              className="bg-yellow-500 text-black px-6 py-2 font-semibold rounded hover:bg-yellow-600 transition self-start"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
