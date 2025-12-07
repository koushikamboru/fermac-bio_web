import Link from 'next/link';
import Image from 'next/image';

export default function Navigation() {
  return (
    <nav className="bg-white border-b border-gray-200 fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center mr-2">
                <span className="text-white text-2xl font-bold">F</span>
              </div>
              <div className="flex flex-col">
                <span className="text-gray-900 text-xl font-bold leading-tight">FERMAC</span>
                <span className="text-cyan-400 text-xl font-bold leading-tight">BIO</span>
              </div>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link href="#home" className="text-gray-700 hover:text-cyan-500 font-medium transition-colors">
              HOME
            </Link>
            <Link href="#about" className="text-gray-700 hover:text-cyan-500 font-medium transition-colors">
              ABOUT US
            </Link>
            <Link href="#products" className="text-gray-700 hover:text-cyan-500 font-medium transition-colors">
              PRODUCTS
            </Link>
            <Link href="#directors" className="text-gray-700 hover:text-cyan-500 font-medium transition-colors">
              DIRECTORS
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-cyan-500 font-medium transition-colors">
              CONTACT US
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-cyan-500">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
