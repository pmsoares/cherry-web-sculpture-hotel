
import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const HeroCarousel = () => {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80',
      title: t('promo.weekend'),
      description: t('promo.weekend.desc'),
      cta: t('common.book.now')
    },
    {
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80',
      title: t('promo.romantic'),
      description: t('promo.romantic.desc'),
      cta: t('common.learn.more')
    },
    {
      image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80',
      title: t('promo.family'),
      description: t('promo.family.desc'),
      cta: t('common.book.now')
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Video/Images */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            {t('hero.title')}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 opacity-90 animate-fade-in">
            {t('hero.subtitle')}
          </p>
          
          {/* Current Slide Content */}
          <div className="mb-8 animate-fade-in">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-4 text-gold-300">
              {slides[currentSlide].title}
            </h2>
            <p className="text-lg mb-6 opacity-90">
              {slides[currentSlide].description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              className="cherry-gradient text-white hover:opacity-90 transition-opacity px-8 py-3 text-lg"
              asChild
            >
              <a href="https://hotels.cloudbeds.com/pt-br/reservation/BvhPRl" target="_blank" rel="noopener noreferrer">
                {slides[currentSlide].cta}
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-black transition-colors px-8 py-3 text-lg"
            >
              {t('hero.cta')}
            </Button>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 text-white animate-float">
        <div className="text-sm opacity-75 mb-2">Scroll</div>
        <div className="w-px h-8 bg-white/50 mx-auto"></div>
      </div>
    </section>
  );
};

export default HeroCarousel;
