"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Portofolio() {
  const portofolioItems = [
    { src: "/portofolio-1.png", alt: "Portofolio 1" },
    { src: "/portofolio-2.png", alt: "Portofolio 2" },
    { src: "/portofolio-3.png", alt: "Portofolio 3" },
    // { src: "/portofolio-4.png", alt: "Portofolio 4" },
    // { src: "/portofolio-5.png", alt: "Portofolio 5" },
  ];

  return (
    <section id="portofolio" className="py-16 px-8 bg-black">
      <h2 className="text-3x1 text-yellow-500 font-bold mb-8">My Portofolio</h2>
      <p className="text-gray-300 mb-6 max-w-x1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero pariatur
        dolores eum, nisi minima magni amet unde impedit voluptatem ullam
        architecto, labore repellat tempora vitae placeat quis a reiciendis
        soluta.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {portofolioItems.map((item, idx) => (
          <motion.div
            key={idx}
            className="relative w-full h-60 border border-gray-700 rounded"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-contain"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
