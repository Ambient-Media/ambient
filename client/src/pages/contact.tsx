
import { FixedBackground } from "@/components/fixed-background";
import { Navigation } from "@/components/navigation";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Contact() {
  return (
    <div className="font-sans text-white smooth-scroll overflow-x-hidden">
      <FixedBackground />
      <Navigation />
      
      <main className="relative z-10 min-h-screen">
        <div className="pt-32">
          <ContactSection />
        </div>
        <Footer />
      </main>
    </div>
  );
}
