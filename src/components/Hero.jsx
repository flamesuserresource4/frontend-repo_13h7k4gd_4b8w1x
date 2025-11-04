import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

const Hero = ({ lang, onConsult, onViewTemplates }) => {
  const t = {
    en: {
      title: 'Basscode Studio',
      subtitle: 'We craft modern, fast, and beautiful websites for brands that want to stand out.',
      ctaConsult: 'Consult via WhatsApp',
      ctaTemplates: 'View Templates',
    },
    id: {
      title: 'Basscode Studio',
      subtitle: 'Kami membuat website modern, cepat, dan indah untuk brand yang ingin tampil menonjol.',
      ctaConsult: 'Konsultasi via WhatsApp',
      ctaTemplates: 'Lihat Template',
    },
  }[lang];

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />

      <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-24 md:pt-36 md:pb-32">
        <div className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-background/60 backdrop-blur px-3 py-1 text-xs md:text-sm">
          <Rocket className="h-4 w-4 text-primary" />
          <span className="text-foreground/70">Basscode Studio</span>
        </div>
        <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
          {t.title}
        </h1>
        <p className="mt-4 md:mt-6 max-w-2xl text-base md:text-lg text-foreground/70">
          {t.subtitle}
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <button
            onClick={onConsult}
            className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-5 py-3 font-medium shadow hover:opacity-90 transition"
          >
            {t.ctaConsult}
          </button>
          <button
            onClick={onViewTemplates}
            className="inline-flex items-center justify-center rounded-lg border border-foreground/15 bg-background/70 px-5 py-3 font-medium hover:bg-foreground/5 transition"
          >
            {t.ctaTemplates}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
