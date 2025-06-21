export function Footer() {
  const socialLinks = [
    { name: "LinkedIn", href: "#" },
    { name: "Behance", href: "#" },
    { name: "Dribbble", href: "#" },
    { name: "Instagram", href: "#" }
  ];

  return (
    <footer className="py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="bento-box rounded-3xl p-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div>
              <h3 className="text-2xl font-bold font-serif text-white">Alex Chen</h3>
              <p className="text-gray-300">Creative Designer & Visual Storyteller</p>
            </div>
            
            <div className="flex space-x-6">
              {socialLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href} 
                  className="text-gray-300 hover:text-golden transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Alex Chen Design. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
