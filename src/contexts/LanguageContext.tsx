
import React, { createContext, useContext, useState } from 'react';

type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  pt: {
    // Navigation
    'nav.home': 'Início',
    'nav.restaurant': 'Restaurante',
    'nav.rooms': 'Quartos',
    'nav.contact': 'Contactos',
    'nav.paul': 'Vila do Paul',
    'nav.book': 'Reservar Agora',
    
    // Homepage
    'hero.title': 'Cherry Sculpture Hotel',
    'hero.subtitle': 'Uma experiência única na Serra da Estrela',
    'hero.cta': 'Descobrir Mais',
    
    // Promotions
    'promo.title': 'Ofertas Especiais',
    'promo.weekend': 'Escapadela de Fim de Semana',
    'promo.weekend.desc': 'Desfrute de 2 noites com pequeno-almoço incluído',
    'promo.romantic': 'Pacote Romântico',
    'promo.romantic.desc': 'Jantar a dois no Cherry Restaurant com vista panorâmica',
    'promo.family': 'Férias em Família',
    'promo.family.desc': 'Atividades para toda a família na Serra da Estrela',
    
    // Restaurant
    'restaurant.title': 'Cherry Restaurant',
    'restaurant.subtitle': 'Gastronomia de excelência com vista panorâmica',
    'restaurant.menu.daily': 'Menu Diário',
    'restaurant.menu.carta': 'Carta',
    
    // Rooms
    'rooms.title': 'Acomodações',
    'rooms.subtitle': 'Três tipologias únicas para uma estadia perfeita',
    'rooms.cherry.title': 'Cherry Room',
    'rooms.cherry.desc': 'Quartos elegantes com todas as comodidades modernas',
    'rooms.suite.title': 'Cherry Suite',
    'rooms.suite.desc': 'Suites espaçosas com área de estar e vista panorâmica',
    'rooms.sculpture.title': 'Cherry Sculpture',
    'rooms.sculpture.desc': 'A nossa suite premium com design único e luxo incomparável',
    
    // Contact
    'contact.title': 'Contactos',
    'contact.subtitle': 'Entre em contacto connosco',
    'contact.form.name': 'Nome',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Telefone',
    'contact.form.message': 'Mensagem',
    'contact.form.send': 'Enviar',
    'contact.awards': 'Prémios e Distinções',
    'contact.instagram': 'Siga-nos no Instagram',
    
    // Paul Village
    'paul.title': 'Vila do Paul',
    'paul.subtitle': 'Descubra a autenticidade da Serra da Estrela',
    'paul.attractions': 'Principais Atrações',
    
    // Common
    'common.learn.more': 'Saber Mais',
    'common.book.now': 'Reservar',
    'common.gallery': 'Galeria',
    'common.location': 'Localização',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.restaurant': 'Restaurant',
    'nav.rooms': 'Rooms',
    'nav.contact': 'Contact',
    'nav.paul': 'Paul Village',
    'nav.book': 'Book Now',
    
    // Homepage
    'hero.title': 'Cherry Sculpture Hotel',
    'hero.subtitle': 'A unique experience in Serra da Estrela',
    'hero.cta': 'Discover More',
    
    // Promotions
    'promo.title': 'Special Offers',
    'promo.weekend': 'Weekend Getaway',
    'promo.weekend.desc': 'Enjoy 2 nights with breakfast included',
    'promo.romantic': 'Romantic Package',
    'promo.romantic.desc': 'Dinner for two at Cherry Restaurant with panoramic view',
    'promo.family': 'Family Holidays',
    'promo.family.desc': 'Activities for the whole family in Serra da Estrela',
    
    // Restaurant
    'restaurant.title': 'Cherry Restaurant',
    'restaurant.subtitle': 'Excellence in gastronomy with panoramic views',
    'restaurant.menu.daily': 'Daily Menu',
    'restaurant.menu.carta': 'Menu',
    
    // Rooms
    'rooms.title': 'Accommodations',
    'rooms.subtitle': 'Three unique room types for a perfect stay',
    'rooms.cherry.title': 'Cherry Room',
    'rooms.cherry.desc': 'Elegant rooms with all modern amenities',
    'rooms.suite.title': 'Cherry Suite',
    'rooms.suite.desc': 'Spacious suites with living area and panoramic view',
    'rooms.sculpture.title': 'Cherry Sculpture',
    'rooms.sculpture.desc': 'Our premium suite with unique design and unparalleled luxury',
    
    // Contact
    'contact.title': 'Contact',
    'contact.subtitle': 'Get in touch with us',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Phone',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send',
    'contact.awards': 'Awards and Distinctions',
    'contact.instagram': 'Follow us on Instagram',
    
    // Paul Village
    'paul.title': 'Paul Village',
    'paul.subtitle': 'Discover the authenticity of Serra da Estrela',
    'paul.attractions': 'Main Attractions',
    
    // Common
    'common.learn.more': 'Learn More',
    'common.book.now': 'Book',
    'common.gallery': 'Gallery',
    'common.location': 'Location',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pt');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
