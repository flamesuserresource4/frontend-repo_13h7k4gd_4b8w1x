import React, { useEffect, useMemo, useState } from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Templates from './components/Templates';
import Contact from './components/Contact';
import { Moon, Sun } from 'lucide-react';

function App() {
  const [lang, setLang] = useState('en');
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add('dark');
    else root.classList.remove('dark');
  }, [dark]);

  const t = useMemo(
    () => ({
      en: {
        navTemplates: 'Templates',
        navContact: 'Contact',
        language: 'Language',
        light: 'Light',
        dark: 'Dark',
        footer: 'Created by MasBas',
      },
      id: {
        navTemplates: 'Template',
        navContact: 'Kontak',
        language: 'Bahasa',
        light: 'Terang',
        dark: 'Gelap',
        footer: 'Dibuat oleh MasBas',
      },
    })[lang],
    [lang]
  );

  const whatsappNumber = '+6281234567890';

  const openWhatsApp = () => {
    const url = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}`;
    window.open(url, '_blank');
  };

  const scrollToTemplates = () => {
    const el = document.getElementById('templates');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top bar with branding, language, and dark mode */}
      <header className="sticky top-0 z-50 w-full border-b border-foreground/10 bg-background/70 backdrop-blur">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-extrabold text-lg tracking-tight">Basscode Studio</a>
          <div className="flex items-center gap-2">
            <nav className="hidden md:flex items-center gap-1 mr-2">
              <a href="#templates" className="px-3 py-2 rounded-lg hover:bg-foreground/5 text-sm">{t.navTemplates}</a>
              <a href="#contact" className="px-3 py-2 rounded-lg hover:bg-foreground/5 text-sm">{t.navContact}</a>
            </nav>
            <select
              aria-label={t.language}
              value={lang}
              onChange={(e) => setLang(e.target.value)}
              className="h-9 rounded-lg border border-foreground/15 bg-background px-2 text-sm"
            >
              <option value="en">EN</option>
              <option value="id">ID</option>
            </select>
            <button
              onClick={() => setDark((d) => !d)}
              className="ml-1 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-foreground/15 hover:bg-foreground/5"
              aria-label={dark ? t.light : t.dark}
              title={dark ? t.light : t.dark}
            >
              {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </header>

      <main>
        <Hero lang={lang} onConsult={openWhatsApp} onViewTemplates={scrollToTemplates} />
        <Services lang={lang} />
        <Templates lang={lang} />
        <Contact lang={lang} whatsappNumber={whatsappNumber} />
      </main>

      <footer className="border-t border-foreground/10 mt-8">
        <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-foreground/70">
          <a href="https://masbas.netlify.app/" target="_blank" rel="noreferrer" className="hover:underline">
            {t.footer}
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
