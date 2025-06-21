import { smoothScrollTo } from "@/lib/utils";

export function Navigation() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, elementId: string) => {
    e.preventDefault();
    smoothScrollTo(elementId);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-6">
      <div className="flex justify-between items-center">
        <div className="bento-box rounded-2xl px-6 py-3">
          <h1 className="text-xl font-bold font-serif">Ambient Media</h1>
        </div>
        <div className="hidden md:flex space-x-4">
          <a 
            href="#about" 
            onClick={(e) => handleNavClick(e, 'about')}
            className="bento-box rounded-xl px-4 py-2 hover:text-golden transition-colors cursor-pointer"
          >
            About
          </a>
          <a 
            href="#portfolio" 
            onClick={(e) => handleNavClick(e, 'portfolio')}
            className="bento-box rounded-xl px-4 py-2 hover:text-golden transition-colors cursor-pointer"
          >
            Work
          </a>
          <a 
            href="/services"
            className="bento-box rounded-xl px-4 py-2 hover:text-golden transition-colors cursor-pointer"
          >
            Services
          </a>
          <a 
            href="#contact" 
            onClick={(e) => handleNavClick(e, 'contact')}
            className="bento-box rounded-xl px-4 py-2 hover:text-golden transition-colors cursor-pointer"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
