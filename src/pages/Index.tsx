
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroCarousel from '@/components/HeroCarousel';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  const { t } = useLanguage();

  const features = [
    {
      title: t('restaurant.title'),
      description: t('restaurant.subtitle'),
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80',
      link: '/restaurant'
    },
    {
      title: t('rooms.title'),
      description: t('rooms.subtitle'),
      image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80',
      link: '/rooms'
    },
    {
      title: t('paul.title'),
      description: t('paul.subtitle'),
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80',
      link: '/paul'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <HeroCarousel />

      {/* Welcome Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-primary">
              Bem-vindos ao Cherry Sculpture Hotel
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed">
              Localizado na pitoresca vila do Paul, na Covilhã, o nosso hotel oferece uma experiência única que combina o luxo contemporâneo com a autenticidade da Serra da Estrela. Cada detalhe foi pensado para proporcionar momentos inesquecíveis aos nossos hóspedes.
            </p>
            <Button 
              size="lg"
              className="cherry-gradient text-white hover:opacity-90 transition-opacity"
              asChild
            >
              <a href="https://hotels.cloudbeds.com/pt-br/reservation/BvhPRl" target="_blank" rel="noopener noreferrer">
                {t('nav.book')}
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-semibold mb-3 text-primary">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {feature.description}
                  </p>
                  <Button variant="outline" asChild>
                    <a href={feature.link}>{t('common.learn.more')}</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 cherry-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
            Reserve a Sua Estadia Hoje
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Descubra o que torna o Cherry Sculpture Hotel um destino único na Serra da Estrela. Reserve agora e crie memórias inesquecíveis.
          </p>
          <Button 
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-primary transition-colors px-8 py-3"
            asChild
          >
            <a href="https://hotels.cloudbeds.com/pt-br/reservation/BvhPRl" target="_blank" rel="noopener noreferrer">
              {t('nav.book')}
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
