import Link from 'next/link';

export default function CustomManufacturing() {
  return (
    <section className="py-20 bg-gradient-to-br from-teal-900 via-teal-800 to-teal-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* DNA Background Pattern */}
        <div className="relative">
          <div className="absolute inset-0 opacity-10">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <circle cx="50" cy="50" r="30" fill="currentColor" className="text-cyan-400" />
              <circle cx="150" cy="50" r="30" fill="currentColor" className="text-pink-400" />
              <circle cx="50" cy="150" r="30" fill="currentColor" className="text-pink-400" />
              <circle cx="150" cy="150" r="30" fill="currentColor" className="text-cyan-400" />
            </svg>
          </div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Custom Manufacturing Solutions
            </h2>
            <p className="text-xl text-gray-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              In Addition To Our Core Products, We Offer Custom Manufacturing Services For Pharmaceutical 
              Companies Looking To Develop Specialized Antibiotic Formulations.
            </p>

            <Link 
              href="#contact"
              className="inline-flex items-center bg-white hover:bg-gray-100 text-teal-900 font-semibold px-8 py-4 rounded-lg transition-colors shadow-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
