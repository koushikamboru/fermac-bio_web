import Image from 'next/image';

export default function AboutIntro() {
  return (
    <section className="pt-20 pb-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title + Lede */}
        <div className="text-center mt-14">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#002F3C]">About <span className="text-cyan-500">FERMAC Bio</span> Private Limited</h1>
          <p style={{ fontFamily: 'Inter, sans-serif' }} className="mt-6 max-w-3xl mx-auto text-[18px] leading-8 text-[#3E3E3E] font-medium">
            Established in 2022, <span className="text-[#007FA2]">Fermac Bio</span> develops and produces premium fermentation-based Active
            Pharmaceutical Ingredients (APIs), focusing on antibiotics and complex secondary metabolites.
            Founded by Biotech, Pharma and Chemical Engineering Veteran Professionals, the company combines deep domain
            knowledge with modern R&D and cGMP manufacturing practices to bring first-in-India innovations to market.
          </p>
        </div>

        {/* Main grid: left text blocks / right hero image */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left column: numbered sections + manufacturing card */}
          <div className="space-y-8">
            <div>
              <h3 className="text-[24px] font-semibold text-black">1. Founding Expertise</h3>
              <p style={{ fontFamily: 'Inter, sans-serif' }} className="mt-3 text-[18px] leading-8 text-[#3E3E3E] font-medium">
                Founded by industry leaders with 25+ years of experience in R&D, Scaleup, Scale Down and Commercialization fermentation technologies, FERMAC’s leadership drives technical excellence and strategic growth.
              </p>
            </div>

            <div>
              <h3 className="text-[24px] font-semibold text-black">2. Research Infrastructure</h3>
              <p style={{ fontFamily: 'Inter, sans-serif' }} className="mt-3 text-[18px] leading-8 text-[#3E3E3E] font-medium">
                We Maintain State of Art Laboratories & Research centres for strain development, Screening, Process Optimization, Isolation & Purification, and analytical method development enabling rapid tech transfer and scale-up.
              </p>
            </div>

            <div>
              <h3 className="text-[24px] font-semibold text-black">3. Strategic Partnerships & Market Opportunity</h3>
              <p style={{ fontFamily: 'Inter, sans-serif' }} className="mt-3 text-[18px] leading-8 text-[#3E3E3E] font-medium">
                <span className="text-[#007FA2]">Fermac Bio</span> has strategic ties with Bransun Labs and Fleming Labs to combine deep R&D, Process Engineering Capabilities with fast commercial scaling and global market access. India’s reliance on
                imports for fermentation-based APIs creates a major opportunity — <span className="text-[#007FA2]">Fermac Bio</span> aims to
                become a leading domestic supplier for fermentation-based specialty APIs..
              </p>
            </div>

          </div>
          {/* Right column: hero image */}
          <div className="flex items-start justify-center">
            <div className="w-full max-w-md md:max-w-lg">
              <div className="rounded-2xl overflow-hidden border border-[#D6D6D6]">
                <Image src="/about.png" alt="Laboratory" width={900} height={700} className="object-cover w-full h-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
