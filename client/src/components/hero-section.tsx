import { smoothScrollTo } from "@/lib/utils";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="flex justify-center">
        {/* Hero Bento Box */}
        <div className="hero-bento rounded-2xl p-4 md:p-6 hero-fade-in w-full max-w-sm md:max-w-lg">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-2 md:space-y-0 md:space-x-4">
            <h2 className="text-xl md:text-2xl font-bold leading-tight text-white hero-title text-left md:text-left" style={{ fontFamily: 'Inknut Antiqua, serif' }}>
              <span className="text-golden">AMBIENT MEDIA</span>
            </h2>

            <div className="pt-2 md:pt-0">
              <button 
                onClick={() => smoothScrollTo('portfolio')}
                className="bg-golden hover:bg-amber-600 text-slate-custom px-4 py-2 md:px-6 md:py-2 rounded-lg font-semibold transition-colors text-center hero-button text-sm md:text-base"
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
