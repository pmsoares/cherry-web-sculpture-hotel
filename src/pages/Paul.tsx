
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin } from 'lucide-react';

const Paul = () => {
  const { t } = useLanguage();

  const attractions = [
    {
      title: 'Centro Histórico do Paul',
      description: 'Descubra as ruas medievais e a arquitetura tradicional desta vila histórica.',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80',
      distance: '5 min a pé'
    },
    {
      title: 'Miradouro da Serra',
      description: 'Vista panorâmica sobre o vale da Covilhã e as montanhas da Serra da Estrela.',
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80',
      distance: '15 min de carro'
    },
    {
      title: 'Cascatas do Paul',
      description: 'Trilhos naturais que levam a belas cascatas e piscinas naturais.',
      image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80',
      distance: '20 min a pé'
    },
    {
      title: 'Penhas da Saúde',
      description: 'Estação de esqui e centro de desportos de montanha da Serra da Estrela.',
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80',
      distance: '25 min de carro'
    },
    {
      title: 'Museu de Lanifícios',
      description: 'História da indústria têxtil da Covilhã, patrimônio industrial único.',
      image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80',
      distance: '10 min de carro'
    },
    {
      title: 'Lagoa Comprida',
      description: 'Lago glaciar no coração da Serra da Estrela, perfeito para caminhadas.',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80',
      distance: '40 min de carro'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section with Video */}
      <section className="relative h-screen mt-16 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80"
          alt="Vila do Paul"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              {t('paul.title')}
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 opacity-90">
              {t('paul.subtitle')}
            </p>
            <Button 
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black transition-colors px-8 py-3"
            >
              {t('common.learn.more')}
            </Button>
          </div>
        </div>
      </section>

      {/* About Paul */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8 text-primary">
              Descubra a Magia do Paul
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              A Vila do Paul é uma pérola escondida na Serra da Estrela, onde a história se entrelaça com a natureza exuberante. 
              Esta aldeia histórica, situada nas encostas da montanha mais alta de Portugal Continental, oferece aos visitantes 
              uma experiência autêntica da cultura e tradições beirãs.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Com as suas casas de xisto, ruas empedradas e vistas deslumbrantes sobre o vale, o Paul é o ponto de partida 
              perfeito para explorar as maravilhas da Serra da Estrela, desde trilhos naturais a locais de interesse histórico 
              e cultural.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A proximidade à Covilhã, conhecida como a "Cidade da Neve", permite também descobrir a rica herança industrial 
              têxtil da região, enquanto se desfruta da hospitalidade calorosa das gentes da montanha.
            </p>
          </div>
        </div>
      </section>

      {/* Main Attractions */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
            {t('paul.attractions')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {attractions.map((attraction, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={attraction.image}
                    alt={attraction.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                    <MapPin className="w-3 h-3" />
                    <span>{attraction.distance}</span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-semibold mb-3 text-primary">
                    {attraction.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {attraction.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
            Atividades na Região
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Caminhadas', desc: 'Trilhos pela Serra da Estrela', icon: '🥾' },
              { title: 'Esqui', desc: 'Desportos de inverno nas Penhas da Saúde', icon: '⛷️' },
              { title: 'Gastronomia', desc: 'Sabores tradicionais da montanha', icon: '🍽️' },
              { title: 'Fotografia', desc: 'Paisagens deslumbrantes em cada estação', icon: '📸' }
            ].map((activity, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{activity.icon}</div>
                  <h3 className="font-serif text-lg font-semibold mb-2 text-primary">
                    {activity.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{activity.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Weather & Best Time */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-serif text-3xl font-bold mb-6 text-primary">
                Melhor Época para Visitar
              </h2>
              <div className="space-y-4">
                <div className="p-4 bg-background rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Primavera (Março - Maio)</h3>
                  <p className="text-muted-foreground">Temperatura amena, floração da montanha, ideal para caminhadas.</p>
                </div>
                <div className="p-4 bg-background rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Verão (Junho - Agosto)</h3>
                  <p className="text-muted-foreground">Clima quente, perfeito para atividades ao ar livre e piscinas naturais.</p>
                </div>
                <div className="p-4 bg-background rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Outono (Setembro - Novembro)</h3>
                  <p className="text-muted-foreground">Cores douradas, temperaturas agradáveis, época da vindima.</p>
                </div>
                <div className="p-4 bg-background rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Inverno (Dezembro - Fevereiro)</h3>
                  <p className="text-muted-foreground">Neve na serra, esqui, ambiente acolhedor junto à lareira.</p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="font-serif text-3xl font-bold mb-6 text-primary">
                Como Chegar
              </h2>
              <div className="space-y-4">
                <div className="p-4 bg-background rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">De Carro</h3>
                  <p className="text-muted-foreground">A25 até Covilhã, depois N339 em direção ao Paul (15 minutos)</p>
                </div>
                <div className="p-4 bg-background rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Comboio</h3>
                  <p className="text-muted-foreground">Linha da Beira Baixa até Covilhã, depois táxi ou transfer</p>
                </div>
                <div className="p-4 bg-background rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Avião</h3>
                  <p className="text-muted-foreground">Aeroporto de Lisboa (300km) ou Porto (300km)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 cherry-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
            Explore o Paul Connosco
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Deixe-se encantar pela beleza natural e cultural da Vila do Paul. O Cherry Sculpture Hotel é a sua base perfeita para descobrir todos os tesouros da Serra da Estrela.
          </p>
          <Button 
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-primary transition-colors px-8 py-3"
            asChild
          >
            <a href="https://hotels.cloudbeds.com/pt-br/reservation/BvhPRl" target="_blank" rel="noopener noreferrer">
              Planear a Sua Estadia
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Paul;
