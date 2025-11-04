import React from 'react';
import { MonitorSmartphone, Building2, Utensils, User, GraduationCap, Rocket } from 'lucide-react';

const Services = ({ lang }) => {
  const t = {
    en: {
      heading: 'Services',
      items: [
        { icon: MonitorSmartphone, title: 'Landing Page', desc: 'High-converting single-page websites.' },
        { icon: Building2, title: 'Company Profile', desc: 'Professional company websites to build trust.' },
        { icon: Utensils, title: 'Restaurant / Cafe Website', desc: 'Menus, reservations, and promotions in one place.' },
        { icon: User, title: 'Personal Portfolio Website', desc: 'Showcase your work and personal brand.' },
        { icon: GraduationCap, title: 'School / Education Website', desc: 'Informative and accessible education portals.' },
        { icon: Rocket, title: 'Startup / SaaS Website', desc: 'Modern marketing sites optimized for growth.' },
      ],
    },
    id: {
      heading: 'Layanan',
      items: [
        { icon: MonitorSmartphone, title: 'Landing Page', desc: 'Website satu halaman dengan konversi tinggi.' },
        { icon: Building2, title: 'Company Profile', desc: 'Website perusahaan profesional untuk membangun kepercayaan.' },
        { icon: Utensils, title: 'Website Restoran / Kafe', desc: 'Menu, reservasi, dan promosi dalam satu tempat.' },
        { icon: User, title: 'Website Portofolio Pribadi', desc: 'Tampilkan karya dan personal brand Anda.' },
        { icon: GraduationCap, title: 'Website Sekolah / Edukasi', desc: 'Portal edukasi yang informatif dan mudah diakses.' },
        { icon: Rocket, title: 'Website Startup / SaaS', desc: 'Situs marketing modern yang dioptimalkan untuk pertumbuhan.' },
      ],
    },
  }[lang];

  return (
    <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
      <h2 className="text-2xl md:text-3xl font-bold">{t.heading}</h2>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {t.items.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="group rounded-xl border border-foreground/10 bg-background/60 p-6 hover:border-foreground/20 transition">
            <div className="h-12 w-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="mt-4 font-semibold text-lg">{title}</h3>
            <p className="mt-2 text-sm text-foreground/70">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
