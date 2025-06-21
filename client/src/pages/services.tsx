import { FixedBackground } from "@/components/fixed-background";
import { Navigation } from "@/components/navigation";
import { ServicesSection } from "@/components/services-section";
import { Footer } from "@/components/footer";

export default function Services() {
  return (
    <div className="font-sans text-white smooth-scroll overflow-x-hidden">
      <FixedBackground />
      <Navigation />
      
      <main className="relative z-10 min-h-screen">
        <div className="pt-32">
          <ServicesSection />
        </div>
        <Footer />
      </main>
    </div>
  );
}