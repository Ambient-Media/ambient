import { smoothScrollTo } from "@/lib/utils";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full max-w-7xl md:max-w-4xl">
        {/* Hero Bento Box */}
        <div className="md:col-span-12 hero-bento rounded-3xl p-6 md:p-8 hero-fade-in md:aspect-[2/1]">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-1 md:space-y-0 h-full md:h-auto">
            <h2 className="text-2xl md:text-4xl font-bold leading-tight text-white hero-title text-left" style={{ fontFamily: 'Inknut Antiqua, serif' }}>
              <span className="text-golden">AMBIENT MEDIA</span>
            </h2>

            <div className="pt-4 md:pt-0">
              <button 
                onClick={() => smoothScrollTo('portfolio')}
                className="bg-golden hover:bg-amber-600 text-slate-custom px-8 py-3 rounded-xl font-semibold transition-colors text-center hero-button"
              >
                View My Work
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
