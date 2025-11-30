'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function EmbedPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [embedUrl, setEmbedUrl] = useState<string | null>(null);

  useEffect(() => {
    const url = searchParams.get('url');
    if (url) {
      setEmbedUrl(decodeURIComponent(url));
    } else {
      // Redirect to home if no URL provided
      router.push('/');
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
    <div className="h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-md border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={() => router.push('/')}
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors text-gray-700 font-medium"
          >
            ← Back
          </button>
          <h1 className="text-xl font-semibold text-gray-800">Embedded Content</h1>
        </div>
        <div className="text-sm text-gray-600 truncate max-w-md">
          {embedUrl}
        </div>
      </header>

      {/* Embedded Content - Full Screen */}
      <div className="flex-1 overflow-hidden">
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

