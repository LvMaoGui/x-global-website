import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/home/Hero";
import { AboutSection } from "@/components/home/AboutSection";
import { RemittanceSection } from "@/components/home/RemittanceSection";
import { StablecoinSection } from "@/components/home/StablecoinSection";
import { ContactSection } from "@/components/home/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <AboutSection />
      <RemittanceSection />
      <StablecoinSection />
      <ContactSection />
      
      {/* Simple Footer Placeholder */}
      <footer className="bg-white border-t border-gray-100 py-12">
        <div className="container-custom text-center text-secondary text-sm">
          &copy; {new Date().getFullYear()} xGlobal. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
