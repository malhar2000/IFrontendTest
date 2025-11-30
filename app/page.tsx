import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center p-8">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">
          Welcome to iframe Test App
        </h1>
        <p className="text-xl mb-8 text-gray-600">
          Test iframes on different domains
        </p>
        <div className="flex gap-4 justify-center">
          <Link 
            href="/company"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Go to Company Page
          </Link>
          <Link 
            href="/rfq"
            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            Go to RFQ Page
          </Link>
        </div>
      </div>
    </div>
  );
}
