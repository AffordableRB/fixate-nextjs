"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("./Header"), {
  ssr: false,
});

function HeaderFallback() {
  return <div className="h-16 bg-white border-b border-gray-200" />;
}

export default function ClientHeader() {
  return (
    <Suspense fallback={<HeaderFallback />}>
      <Header />
    </Suspense>
  );
}
