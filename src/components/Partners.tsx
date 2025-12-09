export default function Partners() {
  const partners = [
    { name: "Bransum Labs", icon: "🏢" },
    { name: "Fleming Labs", icon: "🏢" },
    { name: "Company-3", icon: "🏢" },
    { name: "Company-4", icon: "🏢" }
  ];

  return (
    <section className="py-20 bg-[#E9F6F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Trusted <span className="text-cyan-500">Partners</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We Work With Research Centers And International API Suppliers To Bring Rapid, High-Quality Solutions To Market.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="bg-teal-900 hover:bg-teal-800 p-8 rounded-lg transition-colors cursor-pointer group"
            >
              <div className="flex flex-col items-center justify-center text-center h-full">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                  {partner.icon}
                </div>
                <h3 className="text-white font-semibold text-lg">
                  {partner.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
