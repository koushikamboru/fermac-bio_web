import Link from 'next/link';

export default function Products() {
  const products = [
    {
      name: "FB01 – Premium Antibiotic A",
      description: "High-purity fermentation-derived antibiotic for clinical use.",
      features: [
        "Advanced Formulation",
        "High Bioavailability",
        "Extended Shelf Life",
        "Enhanced Stability",
        "WHO Approved"
      ],
      applications: "Respiratory Infections, Skin Infections, Urinary Tract Infections",
      icon: "🧬"
    },
    {
      name: "FB-02 – Advanced Antibiotic B",
      description: "Precision fermentation product meeting global pharmacopeia standards.",
      features: [
        "Broad Spectrum Activity",
        "Low Toxicity Profile",
        "Injectable Formulation",
        "Fast-Acting Relief"
      ],
      applications: "Tuberculosis Treatment, Severe Bacterial Infections, Hospital-Acquired Infections",
      icon: "💊"
    },
    {
      name: "FB-03 – Specialty API C",
      description: "Complex secondary metabolite produced with optimized downstream processing.",
      features: [
        "Extended Coverage",
        "Enhanced Stability",
        "Multiple Formulations",
        "Minimal Side Effects"
      ],
      applications: "Acne Treatment, Respiratory Infections, Sexually Transmitted Infections",
      icon: "🧪"
    }
  ];

  return (
    <section id="products" className="py-20 bg-white mt-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-poppins font-semibold text-[38px] leading-[44px] text-[#002F3C]">Our <span className="text-[#00BEDB]">Products</span></h1>
            <p className="mt-4 text-[22px] leading-9 text-[#3E3E3E] max-w-[1117px] mx-auto">Explore our fermentation‑based API portfolio, crafted with precision, purity, and industry‑grade performance. Each product undergoes advanced fermentation, stringent quality checks, and optimized downstream processing to ensure consistency, safety, and global compliance.</p>
          </div>

        {/* Removed short summary cards here to avoid duplication; showing detailed portfolio only */}

        {/* Product Portfolio Section */}
        <div className="mt-20 bg-white">
          <div className="text-center mb-8">
           {/* <h3 className="font-poppins font-semibold text-[38px] text-[#002F3C] mx-auto">Our Product Portfolio</h3>*/}
            <p className="mt-4 text-[22px] leading-9 text-[#3F3D3D] max-w-[860px] mx-auto">Discover our range of high-quality antibiotics, each manufactured using advanced fermentation technology and rigorous quality control processes.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Each product detailed card */}
            {products.map((p, i) => (
              <div key={i} className="bg-[#E9F6F8] border border-[#CFCFCF] rounded-[12px] p-4 flex flex-col h-full min-h-[420px]">
                <div className="w-12 h-12 bg-gradient-to-b from-[#002F3C] to-[#0094AB] rounded-md mx-auto mb-4" />
                <h4 className="text-[28px] font-inter font-semibold text-[#282828] text-center">{p.name.split('–')[0].trim() === `FB0${i+1}` ? p.name : p.name}</h4>
                <p className="text-[16px] leading-6 text-[#595959] mt-4">{p.description}</p>

                <div className="mt-6">
                  <div className="font-inter font-semibold text-[18px] text-[#484848]">Key Features :</div>
                  <ul className="mt-2 space-y-2 text-[16px] text-[#4E4E4E]">
                    {p.features.slice(0,4).map((f, idx) => <li key={idx}>• {f}</li>)}
                  </ul>
                </div>

                <div className="mt-6">
                  <div className="font-inter font-semibold text-[18px] text-[#484848]">Applications:</div>
                  <p className="text-[16px] text-[#595959] mt-2">{p.applications}</p>
                </div>

                <div className="mt-10 flex gap-4">
                  <Link
                    href={`/contact?product=${encodeURIComponent(p.name)}&action=request-spec`}
                    className="inline-block w-1/2 text-center py-3 rounded-md bg-gradient-to-b from-[#002F3C] to-[#007FA2] text-white font-inter font-semibold"
                  >
                    Request Spec
                  </Link>

                  <Link
                    href={`/contact?product=${encodeURIComponent(p.name)}&action=enquire`}
                    className="inline-block w-1/2 text-center py-3 rounded-md border border-[#002F3C] text-[#002F3C] font-inter font-semibold bg-white"
                  >
                    Enquire
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
