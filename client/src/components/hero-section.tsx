import { smoothScrollTo } from "@/lib/utils";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full max-w-7xl">
        {/* Hero Bento Box */}
        <div className="md:col-span-12 bento-box rounded-3xl p-8 md:p-12">
          <div className="space-y-6">
            <h2 className="text-5xl md:text-7xl font-bold font-serif leading-tight text-white">
              <span className="text-golden">AMBIENT MEDIA</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl">
              Transforming ideas into compelling visual experiences that connect, inspire, and drive results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                onClick={() => smoothScrollTo('portfolio')}
                className="bg-golden hover:bg-amber-600 text-slate-custom px-8 py-3 rounded-xl font-semibold transition-colors text-center"
              >
                View My Work
              </button>
              <button 
                onClick={() => smoothScrollTo('contact')}
                className="border border-white/30 hover:bg-white/10 px-8 py-3 rounded-xl font-semibold transition-colors text-center text-white"
              >
                Let's Talk
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
