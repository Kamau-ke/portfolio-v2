import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
function Navbar() {
    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    
    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 10);
      };
      
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    const navClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow py-2' : 'bg-white/80 backdrop-blur-sm py-4'
    }`;
    
    const linkClasses = (path) => `
      relative px-3 py-2 font-medium transition-all duration-200 
      ${location.pathname === path ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}
      after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-blue-600
      after:transition-all after:duration-300
      ${location.pathname === path ? 'after:w-full' : 'after:w-0 hover:after:w-full'}
    `;
    
    return (
      <nav className={navClasses}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="text-xl font-bold text-blue-600">Welcome</Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link to="/" className={linkClasses('/')}>Home</Link>
            <Link to="/projects" className={linkClasses('/projects')}>Projects</Link>
            <Link to="/about" className={linkClasses('/about')}>About</Link>
            <Link to="/contact" className={linkClasses('/contact')}>Contact</Link>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden flex items-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="container mx-auto px-4 py-2 space-y-1">
              <Link to="/" 
                className={`block px-3 py-2 rounded ${location.pathname === '/' ? 'bg-blue-50 text-blue-600' : 'text-gray-700'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link to="/projects" 
                className={`block px-3 py-2 rounded ${location.pathname === '/projects' ? 'bg-blue-50 text-blue-600' : 'text-gray-700'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Projects
              </Link>
              <Link to="/about" 
                className={`block px-3 py-2 rounded ${location.pathname === '/about' ? 'bg-blue-50 text-blue-600' : 'text-gray-700'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link to="/contact" 
                className={`block px-3 py-2 rounded ${location.pathname === '/contact' ? 'bg-blue-50 text-blue-600' : 'text-gray-700'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    );
  }

export default Navbar