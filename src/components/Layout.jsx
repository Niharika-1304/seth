import Navbar from './Navbar';
import Footer from './Footer';
import AIChat from './AIChat';
import { useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const location = useLocation();
  const isContactPage = location.pathname === '/contact';

  return (
    <div className="min-h-screen flex flex-col">
      {!isContactPage && <Navbar />}
      <main className="flex-grow">
        {children}
      </main>
      {!isContactPage && <Footer />}
      <AIChat />
    </div>
  );
};

export default Layout;
