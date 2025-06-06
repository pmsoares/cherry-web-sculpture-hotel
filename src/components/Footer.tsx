
import { useLanguage } from '@/contexts/LanguageContext';
import { Instagram, MapPin } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Hotel Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-cherry-gradient rounded-full"></div>
              <span className="font-serif text-xl font-bold">Cherry Sculpture Hotel</span>
            </div>
            <p className="text-gray-300 mb-4">
              Uma experiência única de hospitalidade na Serra da Estrela, onde o luxo encontra a autenticidade da montanha.
            </p>
            <div className="flex items-center space-x-2 text-gray-300">
              <MapPin className="w-4 h-4" />
              <span>Vila do Paul, Covilhã, Portugal</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Início</a></li>
              <li><a href="/restaurant" className="text-gray-300 hover:text-white transition-colors">Restaurante</a></li>
              <li><a href="/rooms" className="text-gray-300 hover:text-white transition-colors">Quartos</a></li>
              <li><a href="/paul" className="text-gray-300 hover:text-white transition-colors">Vila do Paul</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors">Contactos</a></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Contacto</h3>
            <div className="space-y-2 text-gray-300">
              <p>+351 275 000 000</p>
              <p>info@cherrycovilha.pt</p>
              <div className="flex items-center space-x-4 mt-4">
                <a 
                  href="https://www.instagram.com/cherryhotel" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Cherry Sculpture Hotel. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
