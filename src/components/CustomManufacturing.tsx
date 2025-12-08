import Link from 'next/link';
import Image from 'next/image';

export default function CustomManufacturing() {
  return (
    <section className="relative py-20 bg-white">
      <div className="w-full flex justify-center">
        <div className="relative rounded-[32px] overflow-hidden" style={{ width: 1312, height: 475 }}>
          {/* background image */}
          <Image src="/hcontact.svg" alt="Custom manufacturing background" fill className="object-cover" priority />

          {/* overlay removed per request */}

          {/* blurred dark blobs */}
          <div className="absolute -left-20 -top-12 w-[474px] h-[455px] bg-[#002F3C] opacity-80 rounded-full filter blur-[160px]" />
          <div className="absolute left-[470px] top-[68px] w-[488px] h-[451px] bg-[#002F3C] opacity-80 rounded-full filter blur-[160px]" />
          <div className="absolute left-[890px] -top-[53px] w-[509px] h-[465px] bg-[#002F3C] opacity-80 rounded-full filter blur-[160px]" />

          {/* content */}
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-8">
            <h2 className="font-poppins font-bold text-[42px] leading-[38px] text-white tracking-[0.02em] drop-shadow-[0_3px_4px_rgba(0,0,0,0.68)]">
              Custom Manufacturing Solutions
            </h2>

            <p className="mt-6 text-[20px] font-inter font-semibold leading-[43px] text-white tracking-[0.02em] max-w-[961px]">
              In Addition To Our Core Products, We Offer Custom Manufacturing Services For Pharmaceutical Companies
              Looking To Develop Specialized Antibiotic Formulations.
            </p>

            <Link href="/contact" className="mt-10">
              <div className="inline-flex items-center bg-white/20 border border-white rounded-[12px] px-6 py-3 backdrop-blur-sm">
                <svg className="w-6 h-6 mr-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-white font-poppins font-semibold text-[26px] leading-[38px]">Contact Us</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
