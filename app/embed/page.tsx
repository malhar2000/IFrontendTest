"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function EmbedPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [embedUrl, setEmbedUrl] = useState<string | null>(null);

  useEffect(() => {
    const url = searchParams.get("url");
    if (url) {
      setEmbedUrl(decodeURIComponent(url));
    } else {
      // Redirect to home if no URL provided
      router.push("/");
    }
  }, [searchParams, router]);

  if (!embedUrl) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col bg-white">
      {/* Back Button */}
      <div className="absolute top-4 left-4 z-10">
        <button
          onClick={() => router.push("/")}
          className="font-bold rounded-xl p-3 border border-gray-200 bg-white hover:bg-gray-100 transition-colors text-gray-700 shadow-md"
        >
          ←
        </button>
      </div>

      {/* Embedded Content - Full Screen */}
      <div className="w-full h-full">
        <iframe
          src={embedUrl}
          className="w-full h-full border-0"
          title="Embedded Content"
          allow="fullscreen"
          allowFullScreen
        />
      </div>
    </div>
  );
}
