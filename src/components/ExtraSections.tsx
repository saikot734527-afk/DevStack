import { FolderGit2, Users, Mail, CheckCircle2 } from 'lucide-react';

export const ExtraSections = () => {
  return (
    <div className="space-y-24 py-12">
      
      {/* Projects Section */}
      <section id="projects" className="scroll-mt-24 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-rose-400">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Architectures</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white">Popular Stack Templates</h2>
          <p className="text-slate-400 text-sm">
            Production-ready starter architectures assembled using popular developer tech stacks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-900/70 backdrop-blur-md border border-slate-800 rounded-2xl p-6 space-y-4 hover:border-slate-700 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold">
              PERN
            </div>
            <h3 className="text-xl font-bold text-white">Full-Stack Web App</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              PostgreSQL, Express, React, and Node.js configured with TypeScript for enterprise scalability.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="text-xs px-2.5 py-1 rounded-md bg-slate-800 text-slate-300">PostgreSQL</span>
              <span className="text-xs px-2.5 py-1 rounded-md bg-slate-800 text-slate-300">React</span>
              <span className="text-xs px-2.5 py-1 rounded-md bg-slate-800 text-slate-300">Node.js</span>
            </div>
          </div>

          <div className="bg-slate-900/70 backdrop-blur-md border border-slate-800 rounded-2xl p-6 space-y-4 hover:border-slate-700 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-400 flex items-center justify-center font-bold">
              JAM
            </div>
            <h3 className="text-xl font-bold text-white">Modern SaaS Frontend</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Next.js, Tailwind CSS, and DaisyUI paired with Docker containers for rapid deployment.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="text-xs px-2.5 py-1 rounded-md bg-slate-800 text-slate-300">Next.js</span>
              <span className="text-xs px-2.5 py-1 rounded-md bg-slate-800 text-slate-300">Tailwind</span>
              <span className="text-xs px-2.5 py-1 rounded-md bg-slate-800 text-slate-300">Docker</span>
            </div>
          </div>

          <div className="bg-slate-900/70 backdrop-blur-md border border-slate-800 rounded-2xl p-6 space-y-4 hover:border-slate-700 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-violet-500/10 text-violet-400 flex items-center justify-center font-bold">
              API
            </div>
            <h3 className="text-xl font-bold text-white">High-Performance API</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Python, GraphQL, MongoDB, and Redis in-memory cache for ultra-low latency data handling.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="text-xs px-2.5 py-1 rounded-md bg-slate-800 text-slate-300">Python</span>
              <span className="text-xs px-2.5 py-1 rounded-md bg-slate-800 text-slate-300">GraphQL</span>
              <span className="text-xs px-2.5 py-1 rounded-md bg-slate-800 text-slate-300">Redis</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="scroll-mt-24 bg-slate-900/70 backdrop-blur-md border border-slate-800 rounded-3xl p-8 lg:p-12 space-y-6 relative overflow-hidden">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-rose-400">
            <Users className="w-3.5 h-3.5" />
            <span>About DevStack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
            Built to Eliminate Technology Selection Fatigue
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            DevStack was created for software engineers, tech leads, and students who want a clear, interactive platform to explore modern technologies and test custom tool combinations before writing a single line of boilerplate code.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            <div className="flex items-center space-x-2.5 text-slate-200 text-sm font-medium">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>Real-time Stack Selection</span>
            </div>
            <div className="flex items-center space-x-2.5 text-slate-200 text-sm font-medium">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>Type-Safe JSON Configuration</span>
            </div>
            <div className="flex items-center space-x-2.5 text-slate-200 text-sm font-medium">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>React-Toastify Instant Feedback</span>
            </div>
            <div className="flex items-center space-x-2.5 text-slate-200 text-sm font-medium">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>Clean UI Design</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="scroll-mt-24 space-y-8">
        <div className="bg-slate-900/70 backdrop-blur-md border border-slate-800 rounded-3xl p-8 lg:p-12 max-w-4xl mx-auto space-y-6 text-center">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-rose-400">
            <Mail className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white">Have Questions or Feedback?</h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto leading-relaxed">
            Reach out to our team for custom stack recommendations, feature requests, or collaboration opportunities.
          </p>

          <form onSubmit={(e) => e.preventDefault()} className="max-w-md mx-auto space-y-4 text-left">
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">Email Address</label>
              <input
                type="email"
                placeholder="dev@example.com"
                className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-rose-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">Message</label>
              <textarea
                rows={3}
                placeholder="Write your message here..."
                className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-rose-500"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-rose-500 to-violet-600 hover:opacity-95 text-white font-bold text-sm shadow-md shadow-rose-500/20 cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

    </div>
  );
};
