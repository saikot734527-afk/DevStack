import logoText from '../assets/logo-text.png';

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-100 text-slate-500 text-xs mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Block */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center">
              <img src={logoText} alt="DevStack Logo" className="h-8 w-auto object-contain" />
            </div>

            <p className="text-slate-400 text-xs max-w-xs leading-relaxed">
              Curated tools, technologies, and resources for developers building modern software.
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-4 pt-2">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-900 transition-colors font-medium">
                GitHub
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-900 transition-colors font-medium">
                Twitter
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-900 transition-colors font-medium">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Link Group 1: Product */}
          <div className="space-y-3">
            <h4 className="text-slate-900 font-bold text-xs uppercase tracking-wider">PRODUCT</h4>
            <ul className="space-y-2 text-slate-500">
              <li><a href="#home" className="hover:text-slate-900 transition-colors">Home</a></li>
              <li><a href="#technologies" className="hover:text-slate-900 transition-colors">Technologies</a></li>
              <li><a href="#projects" className="hover:text-slate-900 transition-colors">Projects</a></li>
            </ul>
          </div>

          {/* Link Group 2: Company */}
          <div className="space-y-3">
            <h4 className="text-slate-900 font-bold text-xs uppercase tracking-wider">COMPANY</h4>
            <ul className="space-y-2 text-slate-500">
              <li><a href="#about" className="hover:text-slate-900 transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a></li>
              <li><a href="#contact" className="hover:text-slate-900 transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Link Group 3: Legal */}
          <div className="space-y-3">
            <h4 className="text-slate-900 font-bold text-xs uppercase tracking-wider">LEGAL</h4>
            <ul className="space-y-2 text-slate-500">
              <li><a href="#home" className="hover:text-slate-900 transition-colors">Privacy Policy</a></li>
              <li><a href="#home" className="hover:text-slate-900 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-12 border-t border-slate-100 flex flex-row items-center justify-between text-slate-400">
          <p>© {new Date().getFullYear()} DevStack. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <a href="#home" className="hover:text-slate-600 transition-colors">Privacy</a>
            <a href="#home" className="hover:text-slate-600 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
