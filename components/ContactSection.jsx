"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Send,
  MessageSquare,
  Loader2,
} from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "tharindupraveen522@gmail.com",
    href: "mailto:tharindupraveen522@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Sri Lanka",
    href: "#",
  },
  {
    icon: FaLinkedinIn,
    label: "LinkedIn",
    value: "Connect with me",
    href: "https://linkedin.com/in/tharindu-praveen",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "View repositories",
    href: "https://github.com/tharindu-praveen",
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setLoading(true);
    setStatus({
      type: "",
      message: "",
    });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to send message.");
      }

      setStatus({
        type: "success",
        message: data.message || "Message sent successfully.",
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message || "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#050505] py-24 text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_25%,rgba(220,38,38,0.15),transparent_28%),linear-gradient(to_bottom,#070707,#050505)]" />
      <div className="absolute inset-0 hero-grid opacity-[0.045]" />

      <div className="relative z-10 mx-auto w-[92%] max-w-[1400px]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-12 flex flex-col justify-between gap-8 lg:flex-row lg:items-end"
        >
          <div>
            <div className="mb-5 flex items-center gap-4">
              <span className="font-tech text-xs font-medium uppercase tracking-[0.35em] text-red-500">
                Contact
              </span>
              <div className="h-[1px] w-16 bg-red-600/70" />
              <div className="h-2 w-2 rounded-full bg-red-600" />
            </div>

            <h2 className="font-tech max-w-4xl text-4xl font-semibold tracking-[-0.04em] text-zinc-100 md:text-6xl">
              Let’s build something useful, reliable and future-ready.
            </h2>
          </div>

          <p className="max-w-md text-base leading-8 text-zinc-400">
            Have a project, idea, collaboration, or opportunity? Send me a
            message and let’s start the conversation.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left contact panel */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="relative overflow-hidden border border-white/10 bg-white/[0.025] p-7 md:p-8"
          >
            <div className="absolute right-[-20%] top-[-20%] h-80 w-80 rounded-full bg-red-600/10 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-[3px] w-full bg-gradient-to-r from-red-600 via-red-500 to-transparent" />

            <div className="relative z-10">
              <p className="font-tech text-xs uppercase tracking-[0.32em] text-red-500">
                Open to Opportunities
              </p>

              <h3 className="font-tech mt-5 text-3xl font-semibold tracking-[-0.04em] text-zinc-100 md:text-5xl">
                Have an idea that needs software, automation or technical
                thinking?
              </h3>

              <p className="mt-6 text-base leading-8 text-zinc-400">
                I’m interested in full-stack development, web applications,
                business systems, automation concepts, robotics, and practical
                technology solutions.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {contactLinks.map((item) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      className="group border border-white/10 bg-black/25 p-4 transition hover:border-red-600/40 hover:bg-white/[0.035]"
                    >
                      <div className="mb-4 flex h-11 w-11 items-center justify-center border border-white/10 bg-black/30 text-red-500 transition group-hover:border-red-600/40">
                        <Icon size={19} />
                      </div>

                      <p className="font-tech text-xs uppercase tracking-[0.25em] text-zinc-500">
                        {item.label}
                      </p>

                      <p className="mt-2 text-sm text-zinc-300">
                        {item.value}
                      </p>
                    </a>
                  );
                })}
              </div>

              <div className="mt-8 border border-white/10 bg-black/25 p-5">
                <div className="flex items-center gap-3">
                  <MessageSquare size={18} className="text-red-500" />
                  <p className="font-tech text-xs uppercase tracking-[0.28em] text-zinc-400">
                    Response
                  </p>
                </div>

                <p className="mt-3 text-sm leading-7 text-zinc-400">
                  I usually prefer clear project details, goals, timeline and
                  expected outcome before starting a collaboration.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, delay: 0.08, ease: "easeOut" }}
            className="relative overflow-hidden border border-white/10 bg-white/[0.025] p-7 md:p-8"
          >
            <div className="absolute right-[-20%] top-[-30%] h-96 w-96 rounded-full bg-red-600/10 blur-3xl" />

            <form onSubmit={handleSubmit} className="relative z-10">
              <div className="mb-8 flex items-center justify-between gap-4">
                <div>
                  <p className="font-tech text-xs uppercase tracking-[0.32em] text-red-500">
                    Message Console
                  </p>
                  <h3 className="font-tech mt-2 text-3xl font-medium tracking-[-0.04em] text-zinc-100">
                    Send a message
                  </h3>
                </div>

                <div className="flex h-14 w-14 items-center justify-center border border-red-600/40 bg-red-600/10 text-red-500">
                  <Send size={24} />
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="font-tech text-xs uppercase tracking-[0.25em] text-zinc-500">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                    className="mt-3 w-full border border-white/10 bg-black/30 px-4 py-4 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-red-600/60"
                  />
                </div>

                <div>
                  <label className="font-tech text-xs uppercase tracking-[0.25em] text-zinc-500">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                    className="mt-3 w-full border border-white/10 bg-black/30 px-4 py-4 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-red-600/60"
                  />
                </div>
              </div>

              <div className="mt-5">
                <label className="font-tech text-xs uppercase tracking-[0.25em] text-zinc-500">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project / Opportunity / Collaboration"
                  className="mt-3 w-full border border-white/10 bg-black/30 px-4 py-4 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-red-600/60"
                />
              </div>

              <div className="mt-5">
                <label className="font-tech text-xs uppercase tracking-[0.25em] text-zinc-500">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={7}
                  placeholder="Tell me about your project or opportunity..."
                  className="mt-3 w-full resize-none border border-white/10 bg-black/30 px-4 py-4 text-sm leading-7 text-white outline-none transition placeholder:text-zinc-600 focus:border-red-600/60"
                />
              </div>

              <div className="mt-7 flex flex-col gap-4 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="max-w-md text-xs leading-6 text-zinc-500">
                    This form sends your message directly through the portfolio
                    backend API.
                  </p>

                  {status.message && (
                    <p
                      className={`mt-3 text-sm ${
                        status.type === "success"
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {status.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="font-tech group inline-flex w-fit items-center gap-3 border border-red-600/50 bg-red-600/10 px-6 py-3 text-sm font-medium text-red-500 transition hover:bg-red-600 hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <ArrowUpRight
                        size={16}
                        className="transition group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
                      />
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}