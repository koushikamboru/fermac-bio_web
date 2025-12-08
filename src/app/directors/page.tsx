import Navigation from '@/components/Navigation';
import DirectorsGrid from '@/components/DirectorsGrid';
import Footer from '@/components/Footer';

export default function DirectorsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <section className="pt-28 pb-8 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Board of <span className="text-cyan-500">Directors</span></h1>
            <p className="text-gray-700 mt-3 max-w-3xl">Our leadership combines deep technical knowledge, commercial experience and global networks to translate scientific excellence into reliable, scalable manufacturing.</p>
          </div>
        </section>
        <DirectorsGrid />
        <section className="pb-12">
          <div className="max-w-5xl mx-auto bg-cyan-50 border border-cyan-100 rounded-xl p-8 text-center">
            <h2 className="text-xl md:text-2xl font-semibold text-teal-900"><span className="text-cyan-500">Leadership</span> That Delivers</h2>
            <p className="text-gray-700 mt-3">Our directors enable FERMAC Bio to translate scientific excellence into reliable, scalable manufacturing.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
