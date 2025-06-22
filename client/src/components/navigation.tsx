
import { useState } from "react";
import { ContactModal } from "./contact-modal";
import logoImage from "../assets/logo.png";

export function Navigation() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 p-6">
        <div className="flex justify-center items-center w-full">
          <div className="flex space-x-2 md:space-x-4">
            <a 
              href="/"
              className="logo-container relative flex items-center justify-center p-1 cursor-pointer"
            >
              <div className="logo-glow-ring"></div>
              <img 
                src={logoImage} 
                alt="Ambient Media" 
                className="logo-image relative z-10 h-8 w-8 rounded-full object-cover"
              />
            </a>
            <a 
              href="/work"
              className="bento-box rounded-xl px-2 md:px-4 py-2 hover:text-golden transition-colors cursor-pointer text-sm md:text-base"
            >
              Work
            </a>
            <a 
              href="/about"
              className="bento-box rounded-xl px-2 md:px-4 py-2 hover:text-golden transition-colors cursor-pointer text-sm md:text-base"
            >
              About
            </a>
            <a 
              href="/services"
              className="bento-box rounded-xl px-2 md:px-4 py-2 hover:text-golden transition-colors cursor-pointer text-sm md:text-base"
            >
              Services
            </a>
            <button 
              onClick={() => setIsContactModalOpen(true)}
              className="bento-box rounded-xl px-2 md:px-4 py-2 hover:text-golden transition-colors cursor-pointer text-sm md:text-base"
            >
              Contact
            </button>
          </div>
        </div>
      </nav>

      <ContactModal 
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </>
  );
}
