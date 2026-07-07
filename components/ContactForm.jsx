"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("idle");
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const upd = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  async function submit(e) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  const field = "w-full rounded-xl border border-line bg-porcelain/50 px-4 py-3 text-ink outline-none transition focus:border-teal focus:bg-white";

  return (
    <form onSubmit={submit} className="space-y-5">
      <div>
        <label className="mb-1.5 block text-sm font-semibold text-deep">Име <span className="text-teal">*</span></label>
        <input required value={form.name} onChange={upd("name")} className={field} />
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-semibold text-deep">Имейл <span className="text-teal">*</span></label>
        <input required type="email" value={form.email} onChange={upd("email")} className={field} />
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-semibold text-deep">Телефон <span className="text-teal">*</span></label>
        <input required type="tel" value={form.phone} onChange={upd("phone")} className={field} />
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-semibold text-deep">Съобщение</label>
        <textarea rows={5} value={form.message} onChange={upd("message")} className={field} />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-full bg-teal px-8 py-3.5 font-bold text-white transition hover:bg-teal-hover disabled:opacity-60"
      >
        {status === "sending" ? "Изпращане…" : "Изпращане"}
      </button>

      {status === "sent" && (
        <p className="text-sm font-semibold text-teal">Благодарим! Съобщението е изпратено.</p>
      )}
      {status === "error" && (
        <p className="text-sm font-semibold text-red-600">Възникна грешка. Опитайте пак или позвънете.</p>
      )}
    </form>
  );
}