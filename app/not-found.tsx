import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <p className="text-2xl text-gray-600 mb-8">Page not found</p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-fixate-blue text-white rounded font-semibold hover:bg-opacity-90 transition"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
