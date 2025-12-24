import React from 'react';

const products = [
  {
    name: 'FB01 – Premium Antibiotic A',
    description: 'High-purity fermentation-derived antibiotic for clinical use.',
  },
  {
    name: 'FB-02 – Advanced Antibiotic B',
    description: 'Precision fermentation product meeting global pharmacopeia standards.',
  },
  {
    name: 'FB-03 – Specialty API C',
    description: 'Complex secondary metabolite produced with optimized downstream processing.',
  },
];

export default function ProductsIntro() {
  return (
    <section className="pt-10 pb-4 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-poppins font-semibold text-[38px] leading-[44px] text-[#002F3C]">Our <span className="text-[#00BEDB]">Products</span></h1>
        <p className="mt-4 text-[22px] leading-9 text-[#3E3E3E] max-w-[1117px] mx-auto">Explore our fermentation‑based API portfolio, crafted with precision, purity, and industry‑grade performance. All products manufactured by specialty fermentation, stringent quality checks, and Optimized Downstream processing to ensure consistency, safety, Purity and Global compliance.</p>
      </div>

      {/* Cards row */}
      <div className="flex flex-col lg:flex-row items-stretch gap-6 justify-center mt-10 px-6">
        {products.map((product, index) => (
          <div key={index} className="relative w-full lg:w-[414px] h-[241px] bg-[#E9F6F8] border border-[#CBCACA] rounded-[12px] p-4 flex flex-col">
            <div className="text-[#7F7E7E] font-inter text-[16px]">{`FB0${index + 1}`}</div>
            <h3 className="font-poppins font-semibold text-[24px] leading-7 text-[#01495D] mt-2">{product.name}</h3>
            <p className="text-[#3F3D3D] text-[18px] leading-8 mt-3 max-w-[324px]">{product.description}</p>

            <div className="mt-auto flex items-center gap-4">
              <button className="w-[161px] h-[40px] rounded-[22px] flex items-center justify-center text-white font-inter font-semibold text-[16px]" style={{ background: 'linear-gradient(180deg, #002F3C 10.1%, #008498 100%)' }}>
                Request Spec
              </button>

              <button className="w-[127px] h-[40px] rounded-[22px] border border-[#002F3C] text-[#002F3C] font-inter font-semibold text-[16px]">Enquire</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
