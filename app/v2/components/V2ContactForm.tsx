"use client";

import { useState } from "react";

interface FormState {
  name: string;
  email: string;
  message: string;
}

type Status = "idle" | "loading" | "success" | "error";

export default function V2ContactForm() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        const data = await res.json();
        setStatus("error");
        setErrorMsg(data?.error ?? "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please check your connection and try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-8">
      {/* Name + Email row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="contact-name"
            className="text-[12px] uppercase tracking-widest text-v2-primary-alt font-v2-mono"
          >
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder="John Doe"
            required
            className="bg-transparent border-b border-v2-outline-variant-alt py-4 focus:outline-none transition-colors text-v2-on-surface placeholder:text-v2-outline-alt/50"
            style={{
              fontFamily: "var(--font-manrope)",
              borderColor: "rgba(70, 69, 84, 0.6)",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#c0c1ff")}
            onBlur={(e) => (e.target.style.borderColor = "rgba(70, 69, 84, 0.6)")}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="contact-email"
            className="text-[12px] uppercase tracking-widest text-v2-primary-alt font-v2-mono"
          >
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="john@example.com"
            required
            className="bg-transparent border-b border-v2-outline-variant-alt py-4 focus:outline-none transition-colors text-v2-on-surface placeholder:text-v2-outline-alt/50"
            style={{
              fontFamily: "var(--font-manrope)",
              borderColor: "rgba(70, 69, 84, 0.6)",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#c0c1ff")}
            onBlur={(e) => (e.target.style.borderColor = "rgba(70, 69, 84, 0.6)")}
          />
        </div>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="contact-message"
          className="text-[12px] uppercase tracking-widest text-v2-primary-alt font-v2-mono"
        >
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="How can I help you?"
          rows={4}
          required
          className="bg-transparent border-b border-v2-outline-variant-alt py-4 focus:outline-none transition-colors text-v2-on-surface placeholder:text-v2-outline-alt/50 resize-none"
          style={{
            fontFamily: "var(--font-manrope)",
            borderColor: "rgba(70, 69, 84, 0.6)",
          }}
          onFocus={(e) => (e.target.style.borderColor = "#c0c1ff")}
          onBlur={(e) => (e.target.style.borderColor = "rgba(70, 69, 84, 0.6)")}
        />
      </div>

      {/* Submit */}
      <div className="pt-4">
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full md:w-auto px-10 py-4 rounded-lg uppercase tracking-widest transition-all duration-300 active:scale-95 flex items-center justify-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed"
          style={{
            background: "#c0c1ff",
            color: "#1000a9",
            fontFamily: "var(--font-jetbrains)",
            fontWeight: "500",
            boxShadow: status === "loading" ? "none" : "0 0 0 rgba(192,193,255,0)",
          }}
          onMouseEnter={(e) => {
            if (status !== "loading") {
              (e.currentTarget as HTMLButtonElement).style.boxShadow =
                "0 0 25px rgba(192,193,255,0.4)";
            }
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 0 rgba(192,193,255,0)";
          }}
        >
          {status === "loading" ? (
            <>
              <span className="material-symbols-outlined text-[18px] animate-spin">refresh</span>
              Sending...
            </>
          ) : (
            <>
              Submit Message
              <span className="material-symbols-outlined text-[18px]">send</span>
            </>
          )}
        </button>
      </div>

      {/* Status messages */}
      {status === "success" && (
        <div
          className="flex items-center gap-3 px-5 py-4 rounded-xl border"
          style={{
            background: "rgba(76,215,246,0.08)",
            border: "1px solid rgba(76,215,246,0.3)",
          }}
        >
          <span className="material-symbols-outlined text-v2-primary">check_circle</span>
          <p className="text-v2-primary text-sm font-v2-body">
            Message sent successfully! I&apos;ll get back to you soon.
          </p>
        </div>
      )}
      {status === "error" && (
        <div
          className="flex items-center gap-3 px-5 py-4 rounded-xl border"
          style={{
            background: "rgba(255,180,171,0.08)",
            border: "1px solid rgba(255,180,171,0.3)",
          }}
        >
          <span className="material-symbols-outlined text-v2-error">error</span>
          <p className="text-v2-error text-sm font-v2-body">
            {errorMsg}
          </p>
        </div>
      )}
    </form>
  );
}
