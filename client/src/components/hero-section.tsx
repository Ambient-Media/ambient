import { smoothScrollTo } from "@/lib/utils";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 mt-[-69px] mb-[-69px]">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full max-w-7xl">
        {/* Hero Bento Box */}
        <div className="md:col-span-12 hero-bento rounded-3xl p-8 md:p-12 hero-fade-in">
          <div className="space-y-1">
            <h2 className="text-2xl md:text-4xl font-bold leading-tight text-white hero-title" style={{ fontFamily: 'Inknut Antiqua, serif' }}>
              <span className="text-golden">AMBIENT MEDIA</span>
            </h2>

            <div className="flex justify-center pt-4">
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
