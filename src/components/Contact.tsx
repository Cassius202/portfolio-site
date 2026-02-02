"use client";

import React, { useState, useEffect } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";
import { Send, User, Mail, MessageSquare } from "lucide-react";
import toast from "react-hot-toast";

// 1. Define the type for your form
interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  // 2. Persist form data with TypeScript type
  const [formData, setFormData] = useLocalStorage<ContactFormData>("contact_form_data", {
    name: "",
    email: "",
    message: "",
  });

  // Hydration fix: Ensure component is mounted before rendering localStorage values
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const loadingToast = toast.loading("Sending your message...");

    const form = event.currentTarget;
    const submissionData = new FormData(form);
    
    // Use NEXT_PUBLIC prefix for client-side env variables in Next.js
    submissionData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: submissionData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Message sent successfully!", { id: loadingToast });
        setFormData({ name: "", email: "", message: "" });
        form.reset();
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.", { id: loadingToast });
    }
  };

  if (!mounted) return null; // Prevents hydration flicker

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center p-6 mb-8">
      {/* Note: Toaster should be in layout.tsx, but I've kept logic clean here */}
      
      <div className="w-full max-w-2xl bg-white dark:bg-zinc-900 shadow-xl rounded-2xl p-8 border border-slate-200 dark:border-zinc-800">
        <h2 className="text-3xl font-bold text-center text-slate-950 dark:text-white font-myriad">
          Get In Touch
        </h2>
        <p className="text-center text-zinc-500 dark:text-zinc-400 mb-7 mt-2">
          Let&apos;s collaborate on your next project
        </p>

        <form onSubmit={onSubmit} className="space-y-6">
          {/* Name Field */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold flex items-center gap-2 text-zinc-700 dark:text-zinc-300">
              <User size={16} className="text-blue-500" /> Name
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="What is your name?"
              className="w-full px-4 py-2.5 rounded-lg border bg-transparent border-slate-300 dark:border-zinc-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white"
            />
          </div>

          {/* Email Field */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold flex items-center gap-2 text-zinc-700 dark:text-zinc-300">
              <Mail size={16} className="text-blue-500" /> Email
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="hello@email.com"
              className="w-full px-4 py-2.5 rounded-lg border bg-transparent border-slate-300 dark:border-zinc-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white"
            />
          </div>

          {/* Message Field */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold flex items-center gap-2 text-zinc-700 dark:text-zinc-300">
              <MessageSquare size={16} className="text-blue-500" /> Message
            </label>
            <textarea
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project ideas..."
              className="w-full px-4 py-2.5 rounded-lg border bg-transparent border-slate-300 dark:border-zinc-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="group flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all active:scale-95 w-full sm:w-max"
          >
            <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;