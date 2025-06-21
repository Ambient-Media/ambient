export function ServicesSection() {
  const services = [
    {
      icon: "🎨",
      title: "Brand Identity",
      description: "Logo design, typography, color palettes, and comprehensive brand guidelines.",
      price: "From $2,500"
    },
    {
      icon: "💻",
      title: "Web Design",
      description: "Responsive websites, landing pages, and digital experiences that convert.",
      price: "From $3,500"
    },
    {
      icon: "📱",
      title: "UI/UX Design",
      description: "Mobile apps, dashboards, and digital products with exceptional user experience.",
      price: "From $4,000"
    },
    {
      icon: "📦",
      title: "Print Design",
      description: "Packaging, brochures, business cards, and marketing materials that make an impact.",
      price: "From $1,500"
    }
  ];

  return (
    <section id="services" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Services Header */}
          <div className="lg:col-span-5 bento-box rounded-3xl p-8">
            <h2 className="text-4xl font-bold font-serif mb-6 text-white">Services</h2>
            <p className="text-xl text-gray-200 mb-8">
              From concept to completion, I offer comprehensive design solutions tailored to your unique needs and goals.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-golden rounded-full"></div>
                <span className="text-gray-300">Strategic Design Thinking</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-golden rounded-full"></div>
                <span className="text-gray-300">User-Centered Approach</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-golden rounded-full"></div>
                <span className="text-gray-300">Brand Consistency</span>
              </div>
            </div>
          </div>
          
          {/* Services Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bento-box rounded-3xl p-6">
                <div className="w-12 h-12 bg-golden/20 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-golden text-2xl">{service.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <div className="text-golden font-semibold">{service.price}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
