"use client";

import React from "react";

export default function ContactForm() {
  return (
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
  );
}
