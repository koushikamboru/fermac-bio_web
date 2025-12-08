"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';


export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>('home');
  const pathname = usePathname();

  useEffect(() => {
    const routeMap: Record<string, string> = {
      '/': 'home',
      '/about': 'about',
      '/products': 'products',
      '/directors': 'directors',
      '/contact': 'contact',
    };

    const fromPath = routeMap[pathname || '/'] || 'home';

    // prefer hash when present (in-page anchors)
    let current = fromPath;
    if (typeof window !== 'undefined' && window.location.hash) {
      const h = window.location.hash.replace('#', '');
      if (h) current = h;
    }

    setActive(current);

    const onHash = () => {
      if (typeof window !== 'undefined') {
        const h = window.location.hash.replace('#', '');
        if (h) setActive(h);
      }
    };

    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, [pathname]);

  return (
    <nav className="fixed top-0 left-0 right-0 w-full z-50 bg-white/90 backdrop-blur-sm shadow-md border-b">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center">
              <div className="w-12 h-12 flex items-center justify-center mr-2">
                <Image src="/LOGO.png" alt="FERMAC BIO logo" width={44} height={44} className="rounded-full object-cover" />
              </div>
              <div className="flex flex-col leading-tight">
                <span
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '28px', lineHeight: 1 }}
                  className="text-[#002F3C]"
                >
                  FERMAC
                </span>
                <span
                    style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '28px', lineHeight: 1 }}
                  className="text-[#00BEDB]"
                >
                  BIO
                </span>
              </div>
            </Link>
          </div>

          {/* Center links (desktop) */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-8">
              <Link
                href="#home"
                onClick={() => setActive('home')}
                aria-current={active === 'home' ? 'page' : undefined}
                className={`uppercase tracking-wider pb-1 transition-colors duration-200 ${
                  active === 'home' ? 'text-[#002F3C] border-b-2 border-[#00BEDB]' : 'text-[#626262] hover:text-[#002F3C]'
                }`}
                style={{ fontFamily: '"Readex Pro", sans-serif', fontWeight: 550, fontSize: '18px' }}
              >
                HOME
              </Link>
              <Link
                href="#about"
                onClick={() => setActive('about')}
                aria-current={active === 'about' ? 'page' : undefined}
                className={`uppercase tracking-wider pb-1 transition-colors duration-200 ${
                  active === 'about' ? 'text-[#002F3C] border-b-2 border-[#00BEDB]' : 'text-[#626262] hover:text-[#002F3C]'
                }`}
                style={{ fontFamily: '"Readex Pro", sans-serif', fontWeight: 550, fontSize: '18px' }}
              >
                ABOUT US
              </Link>
              <Link
                href="#products"
                onClick={() => setActive('products')}
                aria-current={active === 'products' ? 'page' : undefined}
                className={`uppercase tracking-wider pb-1 transition-colors duration-200 ${
                  active === 'products' ? 'text-[#002F3C] border-b-2 border-[#00BEDB]' : 'text-[#626262] hover:text-[#002F3C]'
                }`}
                style={{ fontFamily: '"Readex Pro", sans-serif', fontWeight: 550, fontSize: '18px' }}
              >
                PRODUCTS
              </Link>
              <Link
                href="#directors"
                onClick={() => setActive('directors')}
                aria-current={active === 'directors' ? 'page' : undefined}
                className={`uppercase tracking-wider pb-1 transition-colors duration-200 ${
                  active === 'directors' ? 'text-[#002F3C] border-b-2 border-[#00BEDB]' : 'text-[#626262] hover:text-[#002F3C]'
                }`}
                style={{ fontFamily: '"Readex Pro", sans-serif', fontWeight: 550, fontSize: '18px' }}
              >
                DIRECTORS
              </Link>
              <Link
                href="#contact"
                onClick={() => setActive('contact')}
                aria-current={active === 'contact' ? 'page' : undefined}
                className={`uppercase tracking-wider pb-1 transition-colors duration-200 ${
                  active === 'contact' ? 'text-[#002F3C] border-b-2 border-[#00BEDB]' : 'text-[#626262] hover:text-[#002F3C]'
                }`}
                style={{ fontFamily: '"Readex Pro", sans-serif', fontWeight: 550, fontSize: '18px' }}
              >
                CONTACT US
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((s) => !s)}
              className="p-2 rounded-md text-[#002F3C] hover:bg-gray-100"
            >
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div className={`${open ? 'block' : 'hidden'} md:hidden bg-white w-full border-t shadow-sm`}>
        <div className="px-4 pt-3 pb-4">
          <nav className="flex flex-col divide-y">
            <Link
              href="#home"
              onClick={() => { setActive('home'); setOpen(false); }}
              aria-current={active === 'home' ? 'page' : undefined}
              className={`py-3 text-center uppercase ${active === 'home' ? 'text-[#002F3C] font-semibold' : 'text-[#626262] font-medium'}`}
              style={{ fontFamily: '"Readex Pro", sans-serif', fontWeight: 550, fontSize: '18px' }}
            >
              HOME
            </Link>
            <Link
              href="#about"
              onClick={() => { setActive('about'); setOpen(false); }}
              aria-current={active === 'about' ? 'page' : undefined}
              className={`py-3 text-center uppercase ${active === 'about' ? 'text-[#002F3C] font-semibold' : 'text-[#626262] font-medium'}`}
              style={{ fontFamily: '"Readex Pro", sans-serif', fontWeight: 550, fontSize: '18px' }}
            >
              ABOUT US
            </Link>
            <Link
              href="#products"
              onClick={() => { setActive('products'); setOpen(false); }}
              aria-current={active === 'products' ? 'page' : undefined}
              className={`py-3 text-center uppercase ${active === 'products' ? 'text-[#002F3C] font-semibold' : 'text-[#626262] font-medium'}`}
              style={{ fontFamily: '"Readex Pro", sans-serif', fontWeight: 550, fontSize: '18px' }}
            >
              PRODUCTS
            </Link>
            <Link
              href="#directors"
              onClick={() => { setActive('directors'); setOpen(false); }}
              aria-current={active === 'directors' ? 'page' : undefined}
              className={`py-3 text-center uppercase ${active === 'directors' ? 'text-[#002F3C] font-semibold' : 'text-[#626262] font-medium'}`}
              style={{ fontFamily: '"Readex Pro", sans-serif', fontWeight: 550, fontSize: '18px' }}
            >
              DIRECTORS
            </Link>
            <Link
              href="#contact"
              onClick={() => { setActive('contact'); setOpen(false); }}
              aria-current={active === 'contact' ? 'page' : undefined}
              className={`py-3 text-center uppercase ${active === 'contact' ? 'text-[#002F3C] font-semibold' : 'text-[#626262] font-medium'}`}
              style={{ fontFamily: '"Readex Pro", sans-serif', fontWeight: 550, fontSize: '18px' }}
            >
              CONTACT US
            </Link>
          </nav>
        </div>
      </div>
    </nav>
  );
}
