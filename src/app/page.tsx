import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import TrustSection from '@/components/TrustSection';
import Partners from '@/components/Partners';
import Products from '@/components/Products';
import CustomManufacturing from '@/components/CustomManufacturing';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Features />
        <TrustSection />
        <Partners />
        <Products />
        <CustomManufacturing />
      </main>
      <Footer />
    </div>
  );
}
