
import { FixedBackground } from "@/components/fixed-background";
import { Navigation } from "@/components/navigation";
import { AboutSection } from "@/components/about-section";
import { Footer } from "@/components/footer";

export default function About() {
  return (
    <div className="font-sans text-white smooth-scroll overflow-x-hidden">
      <FixedBackground />
      <Navigation />
      
      <main className="relative z-10 min-h-screen">
        <div className="pt-32">
          <AboutSection />
        </div>
        <Footer />
      </main>
    </div>
  );
}
