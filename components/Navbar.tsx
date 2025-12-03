'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-gray-800 text-white p-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-xl font-bold">
          iframe Test App
        </div>
        <div className="flex gap-4">
          {/* <Link 
            href="/company" 
            className={`px-4 py-2 rounded transition-colors ${
              pathname === '/company' 
                ? 'bg-blue-600 hover:bg-blue-700' 
                : 'bg-gray-700 hover:bg-gray-600'
            }`}
          >
            Company Page
          </Link>
          <Link 
            href="/rfq" 
            className={`px-4 py-2 rounded transition-colors ${
              pathname === '/rfq' 
                ? 'bg-blue-600 hover:bg-blue-700' 
                : 'bg-gray-700 hover:bg-gray-600'
            }`}
          >
            RFQ Page
          </Link> */}
        </div>
      </div>
    </nav>
  );
}
