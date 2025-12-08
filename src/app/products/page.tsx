import Navigation from '@/components/Navigation';
import Products from '@/components/Products';
import CustomManufacturing from '@/components/CustomManufacturing';
import Footer from '@/components/Footer';

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <section className="pt-28 pb-4 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Our <span className="text-cyan-500">Products</span></h1>
            <p className="text-gray-700 mt-3 max-w-3xl">Explore our fermentation‑based API portfolio crafted with precision, purity and industry‑grade performance.</p>
          </div>
        </section>
        <Products />
        <CustomManufacturing />
      </main>
      <Footer />
    </div>
  );
}
