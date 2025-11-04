import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';

const DEFAULT_WHATSAPP = '+6281234567890';

const Contact = ({ lang, whatsappNumber = DEFAULT_WHATSAPP }) => {
  const t = {
    en: {
      heading: 'Consultation & Order',
      description: 'Tell us about your project. We will respond via WhatsApp.',
      name: 'Your Name',
      email: 'Email (optional)',
      type: 'Project Type',
      budget: 'Budget Range',
      message: 'Brief Description',
      submit: 'Send to WhatsApp',
      consult: 'Consult via WhatsApp',
    },
    id: {
      heading: 'Konsultasi & Pemesanan',
      description: 'Ceritakan proyek Anda. Kami akan merespons via WhatsApp.',
      name: 'Nama Anda',
      email: 'Email (opsional)',
      type: 'Jenis Proyek',
      budget: 'Kisaran Budget',
      message: 'Deskripsi Singkat',
      submit: 'Kirim ke WhatsApp',
      consult: 'Konsultasi via WhatsApp',
    },
  }[lang];

  const [form, setForm] = useState({ name: '', email: '', type: '', budget: '', message: '' });

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const buildWhatsAppLink = (prefill = false) => {
    const base = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}`;
    if (!prefill) return base;
    const text = `Hello Basscode Studio%0A%0A` +
      `Name: ${encodeURIComponent(form.name)}%0A` +
      (form.email ? `Email: ${encodeURIComponent(form.email)}%0A` : '') +
      (form.type ? `Project: ${encodeURIComponent(form.type)}%0A` : '') +
      (form.budget ? `Budget: ${encodeURIComponent(form.budget)}%0A` : '') +
      (form.message ? `%0A${encodeURIComponent(form.message)}` : '');
    return `${base}?text=${text}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = buildWhatsAppLink(true);
    window.open(url, '_blank');
  };

  return (
    <section id="contact" className="max-w-3xl mx-auto px-6 py-16 md:py-24">
      <div className="rounded-2xl border border-foreground/10 bg-background/60 p-6 md:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">{t.heading}</h2>
            <p className="mt-2 text-foreground/70">{t.description}</p>
          </div>
          <a
            href={buildWhatsAppLink(false)}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 text-white px-4 py-2 font-medium hover:opacity-90 transition"
          >
            <MessageCircle className="h-5 w-5" /> {t.consult}
          </a>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-1">
            <label className="text-sm text-foreground/70">{t.name}</label>
            <input
              name="name"
              required
              value={form.name}
              onChange={onChange}
              className="mt-1 w-full rounded-lg border border-foreground/15 bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-primary/40"
              placeholder={t.name}
            />
          </div>
          <div className="md:col-span-1">
            <label className="text-sm text-foreground/70">{t.email}</label>
            <input
              name="email"
              value={form.email}
              onChange={onChange}
              className="mt-1 w-full rounded-lg border border-foreground/15 bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-primary/40"
              placeholder={t.email}
            />
          </div>
          <div className="md:col-span-1">
            <label className="text-sm text-foreground/70">{t.type}</label>
            <input
              name="type"
              value={form.type}
              onChange={onChange}
              className="mt-1 w-full rounded-lg border border-foreground/15 bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-primary/40"
              placeholder="Landing / Company / Restaurant / Personal / School / SaaS"
            />
          </div>
          <div className="md:col-span-1">
            <label className="text-sm text-foreground/70">{t.budget}</label>
            <input
              name="budget"
              value={form.budget}
              onChange={onChange}
              className="mt-1 w-full rounded-lg border border-foreground/15 bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-primary/40"
              placeholder="$500 - $3000"
            />
          </div>
          <div className="md:col-span-2">
            <label className="text-sm text-foreground/70">{t.message}</label>
            <textarea
              name="message"
              rows={4}
              value={form.message}
              onChange={onChange}
              className="mt-1 w-full rounded-lg border border-foreground/15 bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-primary/40"
              placeholder={t.message}
            />
          </div>
          <div className="md:col-span-2 flex justify-end">
            <button
              type="submit"
              className="inline-flex items-center rounded-lg bg-primary text-primary-foreground px-5 py-3 font-medium hover:opacity-90 transition"
            >
              {t.submit}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
