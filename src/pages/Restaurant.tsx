
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Restaurant = () => {
  const { t } = useLanguage();

  const galleryImages = [
    'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80',
    'https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80',
    'https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80',
    'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80',
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-96 mt-16 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=800&q=80"
          alt="Cherry Restaurant"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4">
              {t('restaurant.title')}
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              {t('restaurant.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Restaurant Description */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8 text-primary">
              Uma Experiência Gastronómica Única
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              O Cherry Restaurant oferece uma cozinha de excelência que celebra os sabores regionais da Serra da Estrela, 
              harmoniosamente combinados com técnicas culinárias contemporâneas. Com vista panorâmica sobre as montanhas, 
              cada refeição torna-se uma experiência sensorial completa.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              O nosso chef cria pratos que contam a história da região, utilizando ingredientes locais de primeira qualidade 
              e apresentando-os de forma inovadora, sempre respeitando as tradições gastronómicas locais.
            </p>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
              Os Nossos Menus
            </h2>
            
            <Tabs defaultValue="daily" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="daily">{t('restaurant.menu.daily')}</TabsTrigger>
                <TabsTrigger value="carta">{t('restaurant.menu.carta')}</TabsTrigger>
              </TabsList>
              
              <TabsContent value="daily" className="space-y-6">
                <Card>
                  <CardContent className="p-8">
                    <h3 className="font-serif text-2xl font-semibold mb-6 text-primary">Menu do Dia</h3>
                    <div className="space-y-4">
                      <div className="border-b pb-4">
                        <h4 className="font-semibold text-lg mb-2">Entrada</h4>
                        <p className="text-muted-foreground">Sopa de castanha com croutons de broa de centeio</p>
                      </div>
                      <div className="border-b pb-4">
                        <h4 className="font-semibold text-lg mb-2">Prato Principal</h4>
                        <p className="text-muted-foreground">Cabrito assado no forno com batatas a murro e grelos salteados</p>
                        <p className="text-muted-foreground mt-2">ou</p>
                        <p className="text-muted-foreground">Bacalhau com broa em crosta de queijo da serra</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-2">Sobremesa</h4>
                        <p className="text-muted-foreground">Tigelada da casa com doce de cereja</p>
                      </div>
                    </div>
                    <div className="mt-6 text-center">
                      <span className="text-2xl font-bold text-primary">€35 por pessoa</span>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="carta" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-serif text-xl font-semibold mb-4 text-primary">Entradas</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span>Queijo da Serra com mel</span>
                          <span className="font-semibold">€12</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Presunto ibérico</span>
                          <span className="font-semibold">€15</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Chouriço de porco preto</span>
                          <span className="font-semibold">€10</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-serif text-xl font-semibold mb-4 text-primary">Pratos Principais</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span>Cabrito da Serra</span>
                          <span className="font-semibold">€28</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Truta grelhada</span>
                          <span className="font-semibold">€22</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Entrecosto no forno</span>
                          <span className="font-semibold">€25</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
            {t('common.gallery')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="group overflow-hidden rounded-lg">
                <img
                  src={image}
                  alt={`Restaurant ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reservation CTA */}
      <section className="py-20 cherry-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
            Reserve a Sua Mesa
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Desfrute de uma experiência gastronómica única no Cherry Restaurant. 
            Reserve agora a sua mesa e saboreie o melhor da gastronomia regional.
          </p>
          <Button 
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-primary transition-colors px-8 py-3"
            asChild
          >
            <a href="https://hotels.cloudbeds.com/pt-br/reservation/BvhPRl" target="_blank" rel="noopener noreferrer">
              Reservar Mesa
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Restaurant;
