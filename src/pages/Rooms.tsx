
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Rooms = () => {
  const { t } = useLanguage();

  const roomTypes = [
    {
      title: t('rooms.cherry.title'),
      description: t('rooms.cherry.desc'),
      features: ['25m²', 'Vista jardim', 'Ar condicionado', 'Wi-Fi gratuito', 'TV LED', 'Casa de banho privativa'],
      image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80',
      price: 'Desde €95/noite'
    },
    {
      title: t('rooms.suite.title'),
      description: t('rooms.suite.desc'),
      features: ['45m²', 'Vista panorâmica', 'Área de estar', 'Varanda privada', 'Minibar', 'Amenities premium'],
      image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80',
      price: 'Desde €150/noite'
    },
    {
      title: t('rooms.sculpture.title'),
      description: t('rooms.sculpture.desc'),
      features: ['65m²', 'Suite presidencial', 'Jacuzzi privado', 'Terraço exclusivo', 'Serviço de quarto 24h', 'Design único'],
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80',
      price: 'Desde €250/noite'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-96 mt-16 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=800&q=80"
          alt="Hotel Rooms"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4">
              {t('rooms.title')}
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              {t('rooms.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {roomTypes.map((room, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <img
                    src={room.image}
                    alt={room.title}
                    className="w-full h-80 object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-primary">
                    {room.title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {room.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {room.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{room.price}</span>
                    <Button 
                      className="cherry-gradient text-white hover:opacity-90 transition-opacity"
                      asChild
                    >
                      <a href="https://hotels.cloudbeds.com/pt-br/reservation/BvhPRl" target="_blank" rel="noopener noreferrer">
                        {t('common.book.now')}
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
            Comodidades Incluídas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Wi-Fi Gratuito', desc: 'Internet de alta velocidade em todo o hotel' },
              { title: 'Pequeno-almoço', desc: 'Buffet completo com produtos regionais' },
              { title: 'Estacionamento', desc: 'Estacionamento privado gratuito' },
              { title: 'Concierge', desc: 'Serviço personalizado 24 horas' }
            ].map((amenity, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-lg mb-2 text-primary">{amenity.title}</h3>
                  <p className="text-muted-foreground text-sm">{amenity.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 cherry-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
            Encontre o Seu Quarto Perfeito
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Cada quarto foi cuidadosamente desenhado para proporcionar máximo conforto e uma experiência única na Serra da Estrela.
          </p>
          <Button 
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-primary transition-colors px-8 py-3"
            asChild
          >
            <a href="https://hotels.cloudbeds.com/pt-br/reservation/BvhPRl" target="_blank" rel="noopener noreferrer">
              Ver Disponibilidade
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Rooms;
