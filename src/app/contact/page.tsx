import Navigation from '@/components/Navigation';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-transparent">
      <Navigation />
      <main>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
