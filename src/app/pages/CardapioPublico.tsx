import { useEffect, useMemo, useState } from 'react';
import { MapPin, Phone, Clock, Instagram, Facebook, Globe } from 'lucide-react';
import { useParams } from 'react-router-dom';

interface CardapioPublicoProps {
  isPreview?: boolean;
}

interface Dish {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  featured?: boolean;
}

interface Category {
  id: number;
  name: string;
  dishes: Dish[];
}

export function CardapioPublico({ isPreview }: CardapioPublicoProps) {
  const [selectedCategory, setSelectedCategory] = useState<number>(1);

  const { slug } = useParams();

  const restaurantBySlug = useMemo(() => ({
    demo: {
      name: 'Restaurante Don Giovanni',
      description: 'Cozinha italiana tradicional com toques contemporâneos',
      address: 'Rua dos Pinheiros, 123 - Pinheiros, São Paulo - SP',
      phone: '(11) 3456-7890',
      hours: 'Ter-Dom: 12h-15h e 19h-23h',
      instagram: '@dongiovanni',
      facebook: 'dongiovanni',
      website: 'www.dongiovanni.com.br'
    },
    'sabor-da-vila': {
      name: 'Sabor da Vila',
      description: 'Comida brasileira caseira com ingredientes frescos',
      address: 'Av. Brasil, 456 - Vila Mariana, São Paulo - SP',
      phone: '(11) 3344-8899',
      hours: 'Seg-Sáb: 11h-22h',
      instagram: '@sabordavila',
      facebook: 'sabordavila',
      website: 'www.sabordavila.com.br'
    }
  }), []);

  const safeSlug = slug || 'demo';
  const restaurant = restaurantBySlug[safeSlug as keyof typeof restaurantBySlug] || restaurantBySlug.demo;
  const categories: Category[] = [
    {
      id: 1,
      name: 'Entradas',
      dishes: [
        {
          id: 1,
          name: 'Carpaccio de Salmão',
          description: 'Finas fatias de salmão fresco com alcaparras, azeite trufado e lascas de parmesão',
          price: 42.90,
          image: 'https://images.unsplash.com/photo-1580959375944-57be6d5dd97c?w=400&h=300&fit=crop',
          featured: true
        },
        {
          id: 2,
          name: 'Bruschetta Tradicional',
          description: 'Pão italiano tostado com tomates frescos, manjericão e azeite extra virgem',
          price: 28.90,
          image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=400&h=300&fit=crop'
        }
      ]
    },
    {
      id: 2,
      name: 'Massas',
      dishes: [
        {
          id: 3,
          name: 'Risoto de Cogumelos',
          description: 'Arroz arbóreo com mix de cogumelos frescos, parmesão e trufa branca',
          price: 65.90,
          image: 'https://images.unsplash.com/photo-1476124369491-c6476ebb3141?w=400&h=300&fit=crop',
          featured: true
        },
        {
          id: 4,
          name: 'Espaguete à Carbonara',
          description: 'Massa artesanal com molho cremoso de ovos, pecorino romano e pancetta crocante',
          price: 58.90,
          image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=400&h=300&fit=crop'
        }
      ]
    },
    {
      id: 3,
      name: 'Carnes',
      dishes: [
        {
          id: 5,
          name: 'Filé Mignon ao Molho Madeira',
          description: 'Medalhões grelhados ao ponto com molho madeira e batatas sautées',
          price: 89.90,
          image: 'https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=400&h=300&fit=crop',
          featured: true
        },
        {
          id: 6,
          name: 'Picanha na Brasa',
          description: 'Corte nobre na brasa servido com farofa, vinagrete e arroz',
          price: 95.90,
          image: 'https://images.unsplash.com/photo-1558030006-450675393462?w=400&h=300&fit=crop',
          featured: true
        }
      ]
    },
    {
      id: 4,
      name: 'Sobremesas',
      dishes: [
        {
          id: 7,
          name: 'Tiramisu',
          description: 'Clássico italiano com camadas de café, mascarpone e cacau',
          price: 32.90,
          image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop'
        },
        {
          id: 8,
          name: 'Petit Gateau',
          description: 'Bolinho de chocolate com recheio cremoso e sorvete de baunilha',
          price: 35.90,
          image: 'https://images.unsplash.com/photo-1578775887804-699de7086ff9?w=400&h=300&fit=crop'
        }
      ]
    }
  ];

  const selectedCategoryData = categories.find(cat => cat.id === selectedCategory);

  useEffect(() => {
    setSelectedCategory(categories[0]?.id || 1);
  }, [safeSlug]);

  const instagramUrl = `https://instagram.com/${restaurant.instagram.replace('@', '')}`;
  const facebookUrl = `https://facebook.com/${restaurant.facebook}`;
  const websiteUrl = restaurant.website.startsWith('http') ? restaurant.website : `https://${restaurant.website}`;

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <div
        className="h-48 bg-cover bg-center relative"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&h=400&fit=crop)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/70 to-[#0F172A]/50" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-8">
          <div className="text-center mb-6">
            <div className="w-20 h-20 bg-[#DC2626] rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-white shadow-lg">
              <span className="text-white font-bold text-3xl">🍽️</span>
            </div>
            <h1 className="font-['Poppins'] font-bold text-3xl md:text-4xl text-[#111827] mb-3">
              {restaurant.name}
            </h1>
            <p className="text-lg text-[#64748B] mb-6">
              {restaurant.description}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-start space-x-2">
              <MapPin className="w-5 h-5 text-[#DC2626] flex-shrink-0 mt-0.5" />
              <span className="text-[#64748B]">{restaurant.address}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-5 h-5 text-[#DC2626] flex-shrink-0" />
              <span className="text-[#64748B]">{restaurant.phone}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-[#DC2626] flex-shrink-0" />
              <span className="text-[#64748B]">{restaurant.hours}</span>
            </div>
          </div>

          <div className="flex items-center justify-center space-x-6 mt-6 pt-6 border-t border-[#E2E8F0]">
            <a href={instagramUrl} target="_blank" rel="noreferrer" className="flex items-center space-x-2 text-[#64748B] hover:text-[#DC2626] transition-colors">
              <Instagram className="w-5 h-5" />
              <span className="text-sm">{restaurant.instagram}</span>
            </a>
            <a href={facebookUrl} target="_blank" rel="noreferrer" className="flex items-center space-x-2 text-[#64748B] hover:text-[#DC2626] transition-colors">
              <Facebook className="w-5 h-5" />
              <span className="text-sm">{restaurant.facebook}</span>
            </a>
            <a href={websiteUrl} target="_blank" rel="noreferrer" className="flex items-center space-x-2 text-[#64748B] hover:text-[#DC2626] transition-colors">
              <Globe className="w-5 h-5" />
              <span className="text-sm">{restaurant.website}</span>
            </a>
          </div>
        </div>

        <div className="sticky top-0 z-20 bg-white rounded-xl shadow-md mb-6 p-2 overflow-x-auto">
          <div className="flex space-x-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors whitespace-nowrap ${
                  selectedCategory === category.id
                    ? 'bg-[#DC2626] text-white'
                    : 'text-[#64748B] hover:bg-[#F8FAFC]'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="pb-12">
          <h2 className="font-['Poppins'] font-bold text-2xl text-[#111827] mb-6">
            {selectedCategoryData?.name}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {selectedCategoryData?.dishes.map((dish) => (
              <div
                key={dish.id}
                className="bg-white rounded-xl shadow-sm border border-[#E2E8F0] overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="relative">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-48 object-cover"
                  />
                  {dish.featured && (
                    <div className="absolute top-3 right-3 bg-[#F59E0B] text-white px-3 py-1 rounded-full text-sm font-medium">
                      Destaque
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-medium text-lg text-[#111827] flex-1">
                      {dish.name}
                    </h3>
                    <span className="font-['Poppins'] font-bold text-xl text-[#DC2626] ml-4">
                      R$ {dish.price.toFixed(2).replace('.', ',')}
                    </span>
                  </div>
                  <p className="text-[#64748B] text-sm leading-relaxed">
                    {dish.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {!isPreview && (
        <div className="bg-[#0F172A] text-white py-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm text-gray-400">
              Cardápio criado com{' '}
              <a href="/" className="text-[#DC2626] hover:underline">
                Cardáp.io
              </a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
