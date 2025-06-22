
import { FixedBackground } from "@/components/fixed-background";
import { Navigation } from "@/components/navigation";
import { PortfolioSection } from "@/components/portfolio-section";
import { Footer } from "@/components/footer";

export default function Work() {
  return (
    <div className="font-sans text-white smooth-scroll overflow-x-hidden">
      <FixedBackground />
      <Navigation />
      
      <main className="relative z-10 min-h-screen">
        <div className="pt-32">
          <PortfolioSection />
        </div>
        <Footer />
      </main>
    </div>
  );
}
