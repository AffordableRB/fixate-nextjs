'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isSticky ? 'bg-primary shadow-lg' : 'bg-background'
      }`}
    >
      <nav className="container relative z-10 py-4 flex items-center justify-between h-20">
        <Link href="/" className="text-2xl font-display font-black" style={{ color: isSticky ? 'white' : 'var(--primary)' }}>
          Fixate
        </Link>

        <div className={`hidden md:flex items-center gap-8 ${isSticky ? 'text-white' : 'text-foreground'}`}>
          <Link
            href="/features"
            className={`font-display font-black uppercase text-sm transition-colors ${
              isSticky ? 'hover:text-white/80' : 'hover:text-primary'
            }`}
          >
            Features
          </Link>
          <Link
            href="/pricing"
            className={`font-display font-black uppercase text-sm transition-colors ${
              isSticky ? 'hover:text-white/80' : 'hover:text-primary'
            }`}
          >
            Pricing
          </Link>
          <Link
            href="/demo"
            className={`font-display font-black uppercase text-sm transition-colors ${
              isSticky ? 'hover:text-white/80' : 'hover:text-primary'
            }`}
          >
            Log In
          </Link>
        </div>

        <a
          href="https://fixate-app.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className={`font-display font-black uppercase text-sm px-6 py-2 transition-all ${
            isSticky
              ? 'bg-white text-primary hover:bg-white/90'
              : 'bg-primary text-white hover:bg-primary/90'
          }`}
        >
          Schedule Demo
        </a>
      </nav>
    </header>
   );
}
