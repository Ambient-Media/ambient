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
        <div className="flex space-x-2 md:space-x-4">
          <a 
            href="#about" 
            onClick={(e) => handleNavClick(e, 'about')}
            className="bento-box rounded-xl px-2 md:px-4 py-2 hover:text-golden transition-colors cursor-pointer text-sm md:text-base"
          >
            About
          </a>
          <a 
            href="#portfolio" 
            onClick={(e) => handleNavClick(e, 'portfolio')}
            className="bento-box rounded-xl px-2 md:px-4 py-2 hover:text-golden transition-colors cursor-pointer text-sm md:text-base"
          >
            Work
          </a>
          <a 
            href="/services"
            className="bento-box rounded-xl px-2 md:px-4 py-2 hover:text-golden transition-colors cursor-pointer text-sm md:text-base"
          >
            Services
          </a>
          <a 
            href="#contact" 
            onClick={(e) => handleNavClick(e, 'contact')}
            className="bento-box rounded-xl px-2 md:px-4 py-2 hover:text-golden transition-colors cursor-pointer text-sm md:text-base"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
