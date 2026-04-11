import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import symbolLogo from '../assets/Symbol Final.png';
import textLogo from '../assets/Text Final.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine if we should use dark or light text based on scroll and page
  const isDarkHero = ['/', '/services', '/approach', '/about', '/privacy', '/terms'].includes(location.pathname);
  const navTextColor = (isDarkHero && !isScrolled) ? 'text-white' : 'text-primary';
  const navBg = isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-8';

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${navBg}`}>
      <div className="container mx-auto px-8 flex justify-between items-center">
        <Link to="/" className="flex items-center relative group w-[320px] h-20 ml-8">
          <div className="relative flex items-center justify-center w-full h-full text-center">
            {/* Massive sizing, but completely detached from the Navbar's layout flow */}
            <img 
              src={symbolLogo} 
              alt="" 
              className={`absolute top-0.5 left-1/2 -translate-x-1/2 -translate-y-[45%] h-[1000px] w-auto object-contain transition-all duration-1000 ${
                (isDarkHero && !isScrolled) ? 'brightness-0 invert' : ''
              }`} 
            />
            {/* The text logo perfectly centered over the massive symbol */}
            <img 
              src={textLogo} 
              alt="CPG" 
              className={`absolute top-0.5 left-1/2 -translate-x-1/2 -translate-y-[40%] h-[500px] w-auto object-contain transition-all duration-500 z-10 drop-shadow-[0_4px_8px_rgba(0,0,0,0.15)] ${
                (isDarkHero && !isScrolled) ? 'brightness-0 invert' : ''
              }`} 
            />
          </div>
        </Link>

        <div className={`flex items-center gap-12 text-[11px] font-black uppercase tracking-[0.2em] transition-colors duration-500 ${navTextColor}`}>
          <Link to="/services" className="hover:text-accent transition-all pb-1 border-b border-transparent hover:border-accent">
            Services
          </Link>
          <Link to="/approach" className="hover:text-accent transition-all pb-1 border-b border-transparent hover:border-accent">
            Approach
          </Link>
          <Link to="/about" className="hover:text-accent transition-all pb-1 border-b border-transparent hover:border-accent">
            About
          </Link>
          <Link to="/contact" className={`
            border px-8 py-3 transition-all duration-500 tracking-[0.3em] font-black
            ${(isDarkHero && !isScrolled) 
              ? 'border-white/40 hover:bg-white hover:text-primary hover:border-white' 
              : 'border-primary/20 hover:bg-primary hover:text-white hover:border-primary'}
          `}>
            Request Consultation
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
