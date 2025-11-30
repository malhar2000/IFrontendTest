"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [embedUrl, setEmbedUrl] = useState("");
  const router = useRouter();

  const handleEmbed = (e: React.FormEvent) => {
    e.preventDefault();
    if (embedUrl.trim()) {
      const encodedUrl = encodeURIComponent(embedUrl.trim());
      router.push(`/embed?url=${encodedUrl}`);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">
            Welcome to iframe Test App
          </h1>
          <p className="text-xl mb-8 text-gray-600">
            Test iframes on different domains
          </p>
        </div>

        {/* Embed URL Box */}
        <div className="bg-white rounded-xl shadow-2xl p-8 mb-8 border border-gray-200">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Embed Content
          </h2>
          <p className="text-gray-600 mb-6">
            Enter a URL to embed and view it.
          </p>
          <form onSubmit={handleEmbed} className="space-y-4">
            <div>
              <label
                htmlFor="embedUrl"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Embed URL
              </label>
              <input
                id="embedUrl"
                type="url"
                value={embedUrl}
                onChange={(e) => setEmbedUrl(e.target.value)}
                placeholder="https://example.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-800"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all transform hover:scale-[1.02] font-semibold shadow-lg"
            >
              Embed
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
