export default function TrustSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Trusted By Healthcare Professionals <span className="text-cyan-500">Worldwide</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              With Over Two Decades Of Experience In Biotechnology Manufacturing, FBPL Has Established Itself As A Trusted 
              Partner In The International Healthcare Industry. Our State-Of-The-Art Facilities Utilize Advanced Fermentation 
              Technology To Produce High-Quality Antibiotics That Meet The Most Stringent International Standards.
            </p>
            <p className="text-gray-600 text-lg mb-8">
              Our Commitment To Innovation, Quality, And Sustainability Drives Us To Continuously Improve Our Processes And Develop 
              New Solutions That Address The Evolving Needs Of Healthcare Professionals Worldwide.
            </p>
          </div>

          {/* Right Stats */}
          <div className="grid grid-cols-2 gap-8">
            {/*<div className="bg-white p-8 rounded-xl shadow-lg text-center border border-gray-100">
              <div className="text-5xl font-bold text-cyan-500 mb-2">500+</div>
              <div className="text-gray-600 font-medium">Health Care Partners</div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center border border-gray-100">
              <div className="text-5xl font-bold text-cyan-500 mb-2">50+</div>
              <div className="text-gray-600 font-medium">Countries Served</div>
            </div>*/}
            <div className="bg-white p-8 rounded-xl shadow-lg text-center border border-gray-100">
              <div className="text-5xl font-bold text-cyan-500 mb-2">25+</div>
              <div className="text-gray-600 font-medium">Years Experience</div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center border border-gray-100">
              <div className="text-5xl font-bold text-cyan-500 mb-2">3</div>
              <div className="text-gray-600 font-medium">Core Products</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
