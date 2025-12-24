import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import TrustSection from '@/components/TrustSection';
import Partners from '@/components/Partners';
import ProductsIntro from '@/components/ProductsIntro';
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
        <ProductsIntro />
      </main>
      <Footer />
    </div>
  );
}
