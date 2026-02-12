"use client";

import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">Error</h1>
        <p className="text-2xl text-gray-600 mb-8">Something went wrong</p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="px-6 py-3 bg-fixate-blue text-white rounded font-semibold hover:bg-opacity-90 transition"
          >
            Try again
          </button>
          <Link
            href="/"
            className="px-6 py-3 border-2 border-fixate-blue text-fixate-blue rounded font-semibold hover:bg-gray-50 transition"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
