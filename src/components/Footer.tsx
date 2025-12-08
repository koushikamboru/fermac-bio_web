import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#002F3C] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <div className="mr-3">
                <Image src="/logo/footer logo 1.svg" alt="FERMAC BIO" width={48} height={48} />
              </div>
              <div className="flex flex-col">
                <span className="text-white text-xl font-bold leading-tight">FERMAC</span>
                <span className="text-cyan-400 text-xl font-bold leading-tight">BIO</span>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
              Leading Biotechnology Company Specializing In Antibiotics Manufacturing 
              Through Advanced Fermentation Processes.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-10 h-10 bg-teal-800 hover:bg-teal-700 rounded-full flex items-center justify-center transition-colors">
                <Image src="/icons/mage_linkedin.svg" alt="LinkedIn" width={20} height={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-teal-800 hover:bg-teal-700 rounded-full flex items-center justify-center transition-colors">
                <Image src="/icons/icon-park-outline_twitter.svg" alt="X / Twitter" width={20} height={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-teal-800 hover:bg-teal-700 rounded-full flex items-center justify-center transition-colors">
                <Image src="/icons/ri_instagram-fill.svg" alt="Instagram" width={20} height={20} />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  Our Products
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  News & Media
                </Link>
              </li>
            </ul>
          </div>

          {/* Products & Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Products & Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/products" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  Our Products
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  Custom Manufacturing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  Quality Assurance
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  Research & Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <div className="w-5 h-5 mr-3 mt-1 flex-shrink-0">
                  <Image src="/icons/ic_baseline-phone.svg" alt="phone" width={20} height={20} />
                </div>
                <span className="text-sm">+91 40 2345 6789</span>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 mr-3 mt-1 flex-shrink-0">
                  <Image src="/icons/ic_twotone-email.svg" alt="email" width={20} height={20} />
                </div>
                <span className="text-sm">info@fermacbio.com</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm">
                  FBPL Biotechnology Complex<br />
                  Phase-II, Patancheru, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-teal-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>© 2024 FBPL Biotechnology. All Rights Reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="hover:text-cyan-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-cyan-400 transition-colors">
                Terms Of Services
              </Link>
              <Link href="#" className="hover:text-cyan-400 transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
