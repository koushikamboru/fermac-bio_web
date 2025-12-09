import Navigation from '@/components/Navigation';
import Products from '@/components/Products';
import CustomManufacturing from '@/components/CustomManufacturing';
import Footer from '@/components/Footer';

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Products />
        <CustomManufacturing />
      </main>
      <Footer />
    </div>
  );
}
