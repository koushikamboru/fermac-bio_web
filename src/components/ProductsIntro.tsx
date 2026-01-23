import Link from 'next/link';
import React from 'react';

export default function ProductsIntro() {
  return (
    <section className="pt-10 pb-4 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-poppins font-semibold text-[38px] leading-[44px] text-[#002F3C]">Our <span className="text-[#00BEDB]">Products</span></h1>
        <p className="mt-4 text-[22px] leading-9 text-[#3E3E3E] max-w-[1117px] mx-auto">Explore our fermentation‑based API portfolio, crafted with precision, purity, and industry‑grade performance. All products manufactured by specialty fermentation, stringent quality checks, and Optimized Downstream processing to ensure consistency, safety, Purity and Global compliance.</p>
      </div>

      {/* Simplified CTA row for homepage: single Explore button that navigates to /products */}
      <div className="flex justify-center mt-10 px-6">
        <Link
          href="/products"
          className="bg-[#00BEDB] hover:bg-[#00aebd] text-white px-10 py-4 rounded-[10px] font-inter font-semibold text-[18px] shadow-lg"
        >
          Explore Products
        </Link>
      </div>
    </section>
  );
}
