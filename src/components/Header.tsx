
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const menuItems = [
    { path: '/', label: t('nav.home') },
    { path: '/restaurant', label: t('nav.restaurant') },
    { path: '/rooms', label: t('nav.rooms') },
    { path: '/contact', label: t('nav.contact') },
    { path: '/paul', label: t('nav.paul') },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-cherry-gradient rounded-full"></div>
            <span className="font-serif text-xl font-bold text-primary">
              Cherry Sculpture Hotel
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item.path) ? 'text-primary border-b-2 border-primary' : 'text-foreground'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Language & Book Button */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setLanguage('pt')}
                className={`text-sm px-2 py-1 rounded ${
                  language === 'pt' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground'
                }`}
              >
                PT
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`text-sm px-2 py-1 rounded ${
                  language === 'en' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground'
                }`}
              >
                EN
              </button>
            </div>
            <Button 
              asChild 
              className="cherry-gradient text-white hover:opacity-90 transition-opacity"
            >
              <a href="https://hotels.cloudbeds.com/pt-br/reservation/BvhPRl" target="_blank" rel="noopener noreferrer">
                {t('nav.book')}
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block w-5 h-0.5 bg-foreground transition-all ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
              <span className={`block w-5 h-0.5 bg-foreground mt-1 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-5 h-0.5 bg-foreground mt-1 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive(item.path) ? 'text-primary' : 'text-foreground'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setLanguage('pt')}
                    className={`text-sm px-3 py-1 rounded ${
                      language === 'pt' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground'
                    }`}
                  >
                    PT
                  </button>
                  <button
                    onClick={() => setLanguage('en')}
                    className={`text-sm px-3 py-1 rounded ${
                      language === 'en' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground'
                    }`}
                  >
                    EN
                  </button>
                </div>
                <Button 
                  asChild 
                  size="sm"
                  className="cherry-gradient text-white hover:opacity-90 transition-opacity"
                >
                  <a href="https://hotels.cloudbeds.com/pt-br/reservation/BvhPRl" target="_blank" rel="noopener noreferrer">
                    {t('nav.book')}
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
