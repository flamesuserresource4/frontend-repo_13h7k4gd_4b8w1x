import React from 'react';

const templatesData = [
  {
    key: 'cafe',
    name: 'Café / Restaurant',
    desc: 'Elegant menu showcase, reservations, and promotions.',
    img: 'https://images.unsplash.com/photo-1559333084-5d4f39dbcd05?q=80&w=1200&auto=format&fit=crop',
    demo: 'https://example.com/demo-cafe',
  },
  {
    key: 'landing',
    name: 'Landing Page',
    desc: 'High-converting hero, features, and CTA-focused layout.',
    img: 'https://images.unsplash.com/photo-1551281044-8d8d0d8b22fa?q=80&w=1200&auto=format&fit=crop',
    demo: 'https://example.com/demo-landing',
  },
  {
    key: 'company',
    name: 'Company Profile',
    desc: 'Professional, credible, and informative pages.',
    img: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop',
    demo: 'https://example.com/demo-company',
  },
  {
    key: 'personal',
    name: 'Personal Website / Portfolio',
    desc: 'Minimal, clean layout to highlight your work.',
    img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
    demo: 'https://example.com/demo-portfolio',
  },
  {
    key: 'school',
    name: 'School / Education',
    desc: 'Structured information architecture for institutions.',
    img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop',
    demo: 'https://example.com/demo-school',
  },
  {
    key: 'saas',
    name: 'Startup / SaaS',
    desc: 'Modern, product-first layout with feature highlights.',
    img: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop',
    demo: 'https://example.com/demo-saas',
  },
];

const Templates = ({ lang }) => {
  const t = {
    en: { heading: 'Template Showcase', demo: 'Live Demo' },
    id: { heading: 'Koleksi Template', demo: 'Demo Langsung' },
  }[lang];

  return (
    <section id="templates" className="max-w-6xl mx-auto px-6 py-16 md:py-24">
      <h2 className="text-2xl md:text-3xl font-bold">{t.heading}</h2>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {templatesData.map((tpl) => (
          <div key={tpl.key} className="rounded-xl overflow-hidden border border-foreground/10 bg-background/60">
            <div className="aspect-[16/10] overflow-hidden">
              <img src={tpl.img} alt={tpl.name} className="w-full h-full object-cover hover:scale-[1.03] transition-transform" />
            </div>
            <div className="p-5">
              <h3 className="font-semibold text-lg">{tpl.name}</h3>
              <p className="mt-2 text-sm text-foreground/70">{tpl.desc}</p>
              <div className="mt-4">
                <a
                  href={tpl.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-lg border border-foreground/15 px-4 py-2 hover:bg-foreground/5 transition"
                >
                  {t.demo}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Templates;
