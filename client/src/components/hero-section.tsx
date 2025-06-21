import { smoothScrollTo } from "@/lib/utils";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full max-w-7xl">
        {/* Hero Bento Box */}
        <div className="md:col-span-8 bento-box rounded-3xl p-8 md:p-12">
          <div className="space-y-6">
            <h2 className="text-5xl md:text-7xl font-bold font-serif leading-tight text-white">
              Creative
              <span className="text-golden"> Designer</span>
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
        
        {/* Stats Bento Box */}
        <div className="md:col-span-4 bento-box rounded-3xl p-6">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">Impact</h3>
            <div className="space-y-4">
              <div>
                <div className="text-3xl font-bold text-golden">150+</div>
                <div className="text-gray-300">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-golden">50+</div>
                <div className="text-gray-300">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-golden">5</div>
                <div className="text-gray-300">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
