import bannerImage from '../assets/banner-stack.png';

interface HeroProps {
  onExploreClick: () => void;
  onLearnMoreClick: () => void;
}

export const Hero = ({ onExploreClick, onLearnMoreClick }: HeroProps) => {
  return (
    <section id="home" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Text Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              Build Your Ideal <br />
              <span className="bg-gradient-to-r from-[#2ebf91] to-[#8360c3] bg-clip-text text-transparent">
                Development Stack
              </span>
            </h1>

            <p className="text-slate-500 text-base sm:text-lg max-w-xl font-normal leading-relaxed">
              Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
            </p>

            <div className="flex flex-row items-center gap-4 pt-2">
              <button
                onClick={onExploreClick}
                className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#2ebf91] to-[#8360c3] hover:opacity-95 text-white font-semibold text-sm shadow-md shadow-[#8360c3]/20 transition-all cursor-pointer"
              >
                Explore Technologies
              </button>

              <button
                onClick={onLearnMoreClick}
                className="px-8 py-3.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-medium text-sm transition-all cursor-pointer"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Right Banner Image Graphic */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md">
              <img
                src={bannerImage}
                alt="DevStack Graphic"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
