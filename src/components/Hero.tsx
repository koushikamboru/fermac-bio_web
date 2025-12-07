import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-teal-800 via-teal-700 to-teal-900 pt-32 pb-20 overflow-hidden">
      {/* DNA Helix Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute right-0 top-1/4 w-96 h-96">
          <svg viewBox="0 0 200 400" className="w-full h-full">
            <path d="M100,0 Q150,50 100,100 T100,200 T100,300 T100,400" 
                  stroke="#00D4FF" strokeWidth="2" fill="none" opacity="0.3"/>
            <path d="M100,0 Q50,50 100,100 T100,200 T100,300 T100,400" 
                  stroke="#FF6B9D" strokeWidth="2" fill="none" opacity="0.3"/>
            {/* DNA base pairs */}
            {[...Array(20)].map((_, i) => (
              <line key={i} x1="70" y1={i * 20} x2="130" y2={i * 20} 
                    stroke="#00D4FF" strokeWidth="1" opacity="0.2"/>
            ))}
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Powering The Future Of <span className="text-cyan-400">Biotechnology</span>
            <br />
            With Precision & Purpose
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-100 mb-10 max-w-3xl mx-auto">
            Delivering World-Class Fermentation-Based APIs Through Advanced Research, Scalable Manufacturing,
            And A Commitment To Global Healthcare Excellence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="#products"
              className="bg-cyan-400 hover:bg-cyan-500 text-white font-semibold px-8 py-4 rounded-lg transition-colors shadow-lg w-full sm:w-auto"
            >
              Explore Our Products
            </Link>
            <Link 
              href="#contact"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-teal-800 text-white font-semibold px-8 py-4 rounded-lg transition-colors w-full sm:w-auto"
            >
              Contact Us
            </Link>
          </div>

          {/* Trust Badge */}
          <div className="mt-16">
            <p className="text-gray-200 text-sm mb-4">Trusted By Global Healthcare Leaders</p>
            <h2 className="text-4xl md:text-5xl font-bold text-cyan-400">25+ Years Of Excellence</h2>
            <p className="text-gray-100 mt-3 text-base md:text-lg">
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
