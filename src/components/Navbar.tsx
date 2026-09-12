import logoText from '../assets/logo-text.png';

interface NavbarProps {
  onScrollToSection: (id: string) => void;
}

export const Navbar = ({ onScrollToSection }: NavbarProps) => {
  const navLinks = [
    { name: 'Home', id: 'home', active: true },
    { name: 'Technologies', id: 'technologies', active: false },
    { name: 'Projects', id: 'projects', active: false },
    { name: 'About', id: 'about', active: false },
    { name: 'Contact', id: 'contact', active: false },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-12 items-center h-20">
          
          <div className="col-span-3 grid items-center cursor-pointer" onClick={() => onScrollToSection('home')}>
            <img src={logoText} alt="DevStack Logo" className="h-9 w-auto object-contain justify-self-start" />
          </div>

          <nav className="col-span-6 justify-self-center grid grid-flow-col auto-cols-max gap-8 items-center">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => onScrollToSection(link.id)}
                className={`text-sm font-medium transition-colors cursor-pointer ${
                  link.active
                    ? 'text-[#8360c3] font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {link.name}
              </button>
            ))}
          </nav>

          <div className="col-span-3 justify-self-end grid grid-flow-col auto-cols-max gap-4 items-center">
            <button className="text-slate-600 hover:text-slate-900 text-sm font-medium px-4 py-2 transition-colors cursor-pointer">
              Sign In
            </button>
            <button className="bg-gradient-to-r from-[#2ebf91] to-[#8360c3] hover:opacity-95 text-white text-sm font-semibold px-6 py-2.5 rounded-full shadow-md shadow-[#8360c3]/20 transition-all cursor-pointer">
              Sign Up
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};
