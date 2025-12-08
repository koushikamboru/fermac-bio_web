import Navigation from '@/components/Navigation';
import AboutIntro from '@/components/AboutIntro';
import Features from '@/components/Features';
import TrustSection from '@/components/TrustSection';
import Partners from '@/components/Partners';
import Products from '@/components/Products';
import CustomManufacturing from '@/components/CustomManufacturing';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <AboutIntro />
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
