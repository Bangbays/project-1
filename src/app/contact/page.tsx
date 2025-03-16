import React from "react";
import ContactForm from "@/components/contact-only/page";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-[#1a1a1a] p-6 rounded">
        <h2 className="text-3x1 text-yellow-500 font-bold mb-8">Contact Me</h2>
        <ContactForm />
      </div>
    </div>
  );
}
