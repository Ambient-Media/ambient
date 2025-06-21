export function PortfolioSection() {
  const portfolioItems = [
    {
      id: 1,
      title: "Zenith Brand Identity",
      description: "Complete brand overhaul including logo, typography, and visual guidelines for a tech startup.",
      image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      tags: ["Branding", "Logo Design"]
    },
    {
      id: 2,
      title: "FinFlow App Design",
      description: "Mobile-first UI/UX design for a financial planning application with focus on user experience.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      tags: ["UI/UX", "Mobile"]
    },
    {
      id: 3,
      title: "Artisan Website",
      description: "E-commerce website design for a luxury handcrafted goods brand with emphasis on storytelling.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      tags: ["Web Design", "E-commerce"]
    },
    {
      id: 4,
      title: "Bloom Packaging",
      description: "Sustainable packaging design for organic skincare products with eco-friendly materials.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      tags: ["Packaging", "Print"]
    },
    {
      id: 5,
      title: "Solar Campaign",
      description: "Integrated marketing campaign for renewable energy company including digital and print materials.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      tags: ["Campaign", "Digital"]
    },
    {
      id: 6,
      title: "Urban Stories",
      description: "Custom illustration series for urban development project highlighting community stories.",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      tags: ["Illustration", "Art"]
    }
  ];

  return (
    <section id="portfolio" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Portfolio Header */}
        <div className="bento-box rounded-3xl p-8 mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4 text-white">Featured Work</h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            A curated selection of projects that showcase my approach to solving complex design challenges with creative solutions.
          </p>
        </div>
        
        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item) => (
            <div key={item.id} className="bento-box rounded-3xl overflow-hidden portfolio-card cursor-pointer">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-48 object-cover" 
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                <p className="text-gray-300 mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="bg-golden/20 text-golden px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
