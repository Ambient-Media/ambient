
import { FixedBackground } from "@/components/fixed-background";
import { Navigation } from "@/components/navigation";
import { PortfolioSection } from "@/components/portfolio-section";
import { AboutSection } from "@/components/about-section";
import { ServicesSection } from "@/components/services-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Work() {
  return (
    <div className="font-sans text-white smooth-scroll overflow-x-hidden">
      <FixedBackground />
      <Navigation />
      
      <main className="relative z-10 min-h-screen">
        <div className="pt-32">
          <PortfolioSection />
          <AboutSection />
          <ServicesSection />
          <ContactSection />
        </div>
        <Footer />
      </main>
    </div>
  );
}
