import Navigation from '@/components/Navigation';
import DirectorsGrid from '@/components/DirectorsGrid';
import Footer from '@/components/Footer';

export default function DirectorsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <section className="pt-28 pb-8 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-teal-900">Board Of <span className="text-cyan-500">Directors</span></h1>
            <p className="text-gray-700 mt-3 max-w-3xl mx-auto">Our leadership combines deep technical knowledge, commercial experience and global networks to translate scientific excellence into reliable, scalable manufacturing.</p>
          </div>
        </section>
        <DirectorsGrid />
        <section className="pb-12 px-4">
          <div className="w-full flex justify-center">
            <div className="bg-[#E9F6F8] rounded-[32px]" style={{ width: 1312, height: 342 }}>
              <div className="w-full h-full relative">
                <h2 className="absolute left-1/2" style={{ top: 42, transform: 'translateX(-50%)' }}>
                  <span className="font-inter font-semibold text-[36px] leading-[36px] tracking-[0.02em] text-[#00BEDB]">Leadership</span>
                  <span className="font-inter font-semibold text-[36px] leading-[36px] tracking-[0.02em] text-[#173233]"> That Delivers</span>
                </h2>

                <p className="absolute left-1/2 text-center" style={{ top: 126, width: 935, transform: 'translateX(-50%)' }}>
                  <span className="font-inter font-medium text-[24px] leading-[40px] text-[#373737] tracking-[0.02em]">Our Directors Combine Deep Technical Knowledge, Commercial Experience, And Global Networks-Enabling </span>
                  <span className="font-inter font-medium text-[24px] leading-[40px] text-[#373737] tracking-[0.02em]">Fermac Bio To Translate Scientific Excellence Into Reliable, Scalable Manufacturing.</span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
