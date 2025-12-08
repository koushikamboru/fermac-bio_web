import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[calc(100vh-80px)] flex items-center justify-center">
      {/* Full-bleed hero background image (no overlays) */}
      <div className="absolute inset-0 -z-10">
        <Image src="/hero.png" alt="Hero background" fill className="object-cover" priority />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-40">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1
            className="text-white mb-6 leading-tight opacity-0 animate-slide-up animate-delay-1"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: '44px', lineHeight: 1.15, textAlign: 'center' }}
          >
            Powering The Future Of <span className="text-cyan-400">Biotechnology</span>
            <br />
            With Precision & Purpose
          </h1>

          {/* Subheading */}
          <p
            className="text-gray-100 mb-10 max-w-3xl mx-auto opacity-0 animate-slide-up animate-delay-100"
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: '18px', lineHeight: 1.6, textAlign: 'center' }}
          >
            Delivering World-Class Fermentation-Based APIs Through Advanced Research, Scalable Manufacturing,
            And A Commitment To Global Healthcare Excellence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-2 opacity-0 animate-slide-up animate-delay-200">
            <Link
              href="/products"
              className="bg-[#00BEDB] hover:bg-[#00aebd] text-[#FFFFFF] px-12 py-4 rounded-lg transition-colors shadow-lg"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '18px' }}
            >
              Explore Our Products
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-teal-800 text-white px-12 py-4 rounded-lg transition-colors"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '18px' }}
            >
              Contact Us
            </Link>
          </div>

          {/* Trust Badge */}
          <div className="mt-16 opacity-0 animate-slide-up animate-delay-300 mb-10">
            <p className="text-gray-200 text-md mb-4">Trusted By Global Healthcare Leaders</p>
            <h2 className="text-3xl sm:text-4xl md:text-3xl font-extrabold text-cyan-400">25+ Years Of Excellence</h2>
            <p
              className="text-gray-100 mt-3"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '18px', lineHeight: 1.6, textAlign: 'center' }}
            >
              Driving Innovation, Quality, And Breakthrough Solutions In
              <br />
              Fermentation-Based API Development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
