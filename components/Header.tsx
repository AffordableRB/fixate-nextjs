"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="text-2xl font-bold fixate-blue">FIXATE</div>
        </Link>

        <nav className="flex items-center gap-8">
          <Link
            href="/features"
            className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
          >
            FEATURES
          </Link>
          <Link
            href="/pricing"
            className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
          >
            PRICING
          </Link>
          <a
            href="https://fixate-app.vercel.app/login"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
          >
            LOG IN
          </a>
          <a
            href="https://fixate-app.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 rounded font-medium bg-fixate-blue text-white hover:bg-opacity-90 transition-colors"
          >
            SCHEDULE DEMO
          </a>
        </nav>
      </div>
    </header>
   );
}
