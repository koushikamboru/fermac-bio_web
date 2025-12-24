import Navigation from '@/components/Navigation';
import Products from '@/components/Products';
import Footer from '@/components/Footer';

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Products />
      </main>
      <Footer />
    </div>
  );
}
