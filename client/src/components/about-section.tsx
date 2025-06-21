export function AboutSection() {
  return (
    <section id="about" className="py-12 md:py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Profile Info Box */}
          <div className="md:col-span-4 bento-box rounded-3xl p-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-2">Ambient Media</h3>
              <p className="text-gray-300 mb-6">Creative Director & Designer</p>
              <div className="space-y-3">
                <div className="text-golden font-semibold">5+ Years Experience</div>
                <div className="text-gray-300">Based in San Francisco</div>
                <div className="text-gray-300">Specializing in Visual Storytelling</div>
              </div>
            </div>
          </div>
          
          {/* About Content Bento Box */}
          <div className="md:col-span-8 bento-box rounded-3xl p-8">
            <h2 className="text-4xl font-bold font-serif mb-6 text-white">About Me</h2>
            <div className="space-y-4 text-lg text-gray-200">
              <p>
                With over 5 years of experience in creative design, I specialize in crafting visual narratives that resonate with audiences and drive business success. My approach combines strategic thinking with aesthetic excellence.
              </p>
              <p>
                I've had the privilege of working with startups, established brands, and creative agencies, helping them tell their stories through compelling design solutions that stand out in today's competitive landscape.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-golden/20 rounded-xl flex items-center justify-center mx-auto mb-2">
                  <span className="text-golden text-xl">🎨</span>
                </div>
                <div className="text-sm text-gray-300">Brand Design</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-golden/20 rounded-xl flex items-center justify-center mx-auto mb-2">
                  <span className="text-golden text-xl">💻</span>
                </div>
                <div className="text-sm text-gray-300">Digital Design</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-golden/20 rounded-xl flex items-center justify-center mx-auto mb-2">
                  <span className="text-golden text-xl">📱</span>
                </div>
                <div className="text-sm text-gray-300">UI/UX</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-golden/20 rounded-xl flex items-center justify-center mx-auto mb-2">
                  <span className="text-golden text-xl">📸</span>
                </div>
                <div className="text-sm text-gray-300">Photography</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
