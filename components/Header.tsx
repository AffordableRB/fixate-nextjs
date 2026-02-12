'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isSticky ? 'shadow-lg' : ''
      }`}
      style={{
        backgroundColor: isSticky ? 'var(--fixate-blue-sticky)' : 'var(--background)',
      }}
    >
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between h-20">
        <Link
          href="/"
          className="text-2xl font-display font-black tracking-tight"
          style={{ color: isSticky ? 'white' : 'var(--primary)' }}
        >
          Fixate
        </Link>

        {/* Desktop nav */}
        <div
          className={`hidden md:flex items-center gap-8 ${
            isSticky ? 'text-white' : 'text-foreground'
          }`}
        >
          <Link
            href="/features"
            className={`font-display font-bold uppercase text-sm tracking-wide transition-colors ${
              isSticky ? 'hover:text-white/80' : 'hover:text-primary'
            }`}
          >
            Features
          </Link>
          <Link
            href="/pricing"
            className={`font-display font-bold uppercase text-sm tracking-wide transition-colors ${
              isSticky ? 'hover:text-white/80' : 'hover:text-primary'
            }`}
          >
            Pricing
          </Link>
          <a
            href="https://fixate-app.vercel.app/login"
            target="_blank"
            rel="noopener noreferrer"
            className={`font-display font-bold uppercase text-sm tracking-wide transition-colors ${
              isSticky ? 'hover:text-white/80' : 'hover:text-primary'
            }`}
          >
            Log In
          </a>
        </div>

        <a
          href="https://fixate-app.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className={`hidden md:inline-block font-display font-bold uppercase text-sm px-6 py-2.5 transition-all btn-press ${
            isSticky
              ? 'bg-white text-primary hover:bg-white/90'
              : 'bg-primary text-white hover:opacity-90'
          }`}
        >
          Schedule Demo
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 transition-all ${
              isSticky ? 'bg-white' : 'bg-foreground'
            }`}
          />
          <span
            className={`block w-6 h-0.5 transition-all ${
              isSticky ? 'bg-white' : 'bg-foreground'
            }`}
          />
          <span
            className={`block w-6 h-0.5 transition-all ${
              isSticky ? 'bg-white' : 'bg-foreground'
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-card border-t border-border px-6 py-4 space-y-4">
          <Link
            href="/features"
            className="block font-display font-bold uppercase text-sm text-foreground"
            onClick={() => setMobileOpen(false)}
          >
            Features
          </Link>
          <Link
            href="/pricing"
            className="block font-display font-bold uppercase text-sm text-foreground"
            onClick={() => setMobileOpen(false)}
          >
            Pricing
          </Link>
          <a
            href="https://fixate-app.vercel.app/login"
            target="_blank"
            rel="noopener noreferrer"
            className="block font-display font-bold uppercase text-sm text-foreground"
          >
            Log In
          </a>
          <a
            href="https://fixate-app.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center font-display font-bold uppercase text-sm px-6 py-2.5 bg-primary text-white"
          >
            Schedule Demo
          </a>
        </div>
      )}
    </header>
  );
}
