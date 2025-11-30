"use client";

import { useState } from "react";

export default function RfqPage() {
  const [iframeUrl, setIframeUrl] = useState("https://example.com");

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">RFQ Page</h1>
        <p className="text-gray-600 mb-6">
          This page demonstrates iframe embedding for RFQ (Request for Quote)
          content from different domains.
        </p>

        <div className="mb-4">
          <label
            htmlFor="url-input"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            iframe URL:
          </label>
          <div className="flex gap-2">
            <input
              id="url-input"
              type="text"
              value={iframeUrl}
              onChange={(e) => setIframeUrl(e.target.value)}
              className="flex-1 px-4 py-2 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter URL to load in iframe"
            />
            <button
              onClick={() => setIframeUrl("")}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              Clear
            </button>
          </div>
          <div className="mt-2 flex gap-2 flex-wrap">
            <button
              onClick={() => setIframeUrl("https://example.com")}
              className="px-3 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700"
            >
              Example.com
            </button>
            <button
              onClick={() => setIframeUrl("https://www.w3.org")}
              className="px-3 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700"
            >
              W3C
            </button>
            <button
              onClick={() => setIframeUrl("https://developer.mozilla.org")}
              className="px-3 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700"
            >
              MDN Web Docs
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-4">
          <div className="mb-2 text-sm text-gray-500">
            Loading:{" "}
            <span className="font-mono">{iframeUrl || "No URL set"}</span>
          </div>
          {iframeUrl ? (
            <iframe
              src={iframeUrl}
              className="w-full h-[600px] border-2 border-gray-300 rounded"
              title="RFQ iframe"
              sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
            />
          ) : (
            <div className="w-full h-[600px] border-2 border-gray-300 rounded flex items-center justify-center bg-gray-50">
              <p className="text-gray-400">Enter a URL above to load content</p>
            </div>
          )}
        </div>

        <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-sm text-yellow-800">
            <strong>Note:</strong> Some websites prevent embedding in iframes
            using X-Frame-Options or Content-Security-Policy headers. If you see
            a blank iframe, the site may be blocking iframe embedding.
          </p>
        </div>
      </div>
    </div>
  );
}
