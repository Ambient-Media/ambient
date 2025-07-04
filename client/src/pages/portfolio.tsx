
import { FixedBackground } from "@/components/fixed-background";
import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";

export default function Portfolio() {
  return (
    <div className="font-sans text-white smooth-scroll overflow-x-hidden">
      <FixedBackground />
      <Navigation />
      
      <main className="relative z-10 min-h-screen">
        <HeroSection />
      </main>
    </div>
  );
}
