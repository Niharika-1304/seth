import { Link } from 'react-router-dom';
import symbolLogo from '../assets/Symbol Final.png';
import textLogo from '../assets/Text Final.png';

const Footer = () => {
  return (
    <footer className="bg-neutral text-white py-16 overflow-hidden">
      <div className="container mx-auto px-8 relative">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="flex flex-col gap-6">
            <Link to="/" className="flex items-center -ml-4 w-[320px] h-32 relative z-10">
              <div className="relative flex items-center justify-center w-full h-full">
                <img 
                  src={symbolLogo} 
                  alt="" 
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[1000px] w-auto object-contain brightness-0 invert scale-125 pointer-events-none" 
                />
                <img 
                  src={textLogo} 
                  alt="CPG" 
                  className="h-[500px] w-auto object-contain absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 brightness-0 invert z-10 drop-shadow-[0_4px_8px_rgba(0,0,0,0.15)]" 
                />
              </div>
            </Link>
            <p className="max-w-[280px] text-[10px] uppercase tracking-[0.2em] leading-relaxed opacity-50 font-bold">
              Establish credibility immediately <br /> and orient the user within seconds.
            </p>
          </div>
          
          <div className="flex gap-24 md:gap-32 lg:ml-auto">
            <div className="flex flex-col gap-4">
              <h4 className="text-accent text-[10px] uppercase font-bold tracking-widest mb-2">Navigation</h4>
              <ul className="text-sm opacity-70 flex flex-col gap-2">
                <li><Link to="/" className="hover:text-accent transition-all">Home</Link></li>
                <li><Link to="/services" className="hover:text-accent transition-all">Services</Link></li>
                <li><Link to="/approach" className="hover:text-accent transition-all">Approach</Link></li>
                <li><Link to="/about" className="hover:text-accent transition-all">About</Link></li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-accent text-[10px] uppercase font-bold tracking-widest mb-2">Contact</h4>
              <ul className="text-sm opacity-70 flex flex-col gap-2">
                <li><Link to="/contact" className="hover:text-accent transition-all">Request Consultation</Link></li>
                {/* <li>Inquiry Intake Flow</li>  */}
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="text-accent text-[10px] uppercase font-bold tracking-widest mb-2">Legal</h4>
              <ul className="text-sm opacity-70 flex flex-col gap-2">
                <li><Link to="/privacy" className="hover:text-accent transition-all">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-accent transition-all">Terms & Services</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-white/10 text-center text-[10px] opacity-40 uppercase tracking-widest">
          &copy; 2026 CULINARY PROVISION GROUP. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
