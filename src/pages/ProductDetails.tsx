import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Button } from '../components/ui/button';
import { useToast } from '../components/ui/use-toast';
import Navbar from '../components/Navbar';
import { ChevronLeft, ChevronUp, ChevronDown } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Эспрессо",
    description: "Классический итальянский кофе",
    price: "₽60",
    weight: "99г",
    image: "/lovable-uploads/8f52e8eb-6544-43b3-a79d-9ee23ba1c001.png",
    calories: "2-5",
    energyValue: "очень низкая (практически отсутствует)"
  },
  {
    id: 2,
    name: "Лимонад",
    description: "Освежающий напиток",
    price: "₽129",
    weight: "340г",
    image: "/lovable-uploads/55b66ab5-21cf-494c-b55a-f51e11452f39.png",
    calories: "100-150",
    energyValue: "низкая-средняя"
  },
  {
    id: 3,
    name: "Капучино",
    description: "Эспрессо с молочной пенкой",
    price: "₽209",
    weight: "340г",
    image: "/lovable-uploads/1724ee80-84c8-434e-b270-a91711ed59e4.png",
    calories: "100-150",
    energyValue: "низкая-средняя"
  },
  {
    id: 4,
    name: "Латте",
    description: "Кофе с молоком и нежной пенкой",
    price: "₽209",
    weight: "340г",
    image: "/lovable-uploads/ffbc3834-f737-4e4f-bf24-19406cd57ad8.png",
    calories: "150-250",
    energyValue: "низкая-средняя"
  },
  {
    id: 5,
    name: "Флэт Уайт",
    description: "Двойной эспрессо с молоком",
    price: "₽199",
    weight: "250г",
    image: "/lovable-uploads/15ffcaf2-4f3e-40de-b922-494393cd679b.png",
    calories: "120-180",
    energyValue: "низкая-средняя"
  },
  {
    id: 6,
    name: "Маффин",
    description: "Свежая домашняя выпечка",
    price: "₽149",
    weight: "50г",
    image: "/lovable-uploads/f600dd2d-db7f-46f1-8af6-55b783cb7ca0.png",
    calories: "250-400",
    energyValue: "средняя-высокая"
  },
  {
    id: 7,
    name: "Эклер классический",
    description: "Французский десерт с кремом",
    price: "₽109",
    weight: "60г",
    image: "/lovable-uploads/6b63213a-c6b7-4545-994d-6108da9396fe.png",
    calories: "200-350",
    energyValue: "средняя-высокая"
  },
  {
    id: 8,
    name: "Кукис с темным шоколадом",
    description: "Печенье с кусочками шоколада",
    price: "₽99",
    weight: "60г",
    image: "/lovable-uploads/350bd96a-6f2e-45ca-8b95-1a14bdd20d57.png",
    calories: "100-150",
    energyValue: "средняя"
  },
  {
    id: 9,
    name: "Круассан классический",
    description: "Французская слоеная выпечка",
    price: "₽99",
    weight: "60г",
    image: "/lovable-uploads/8c3fdb82-e488-4d7c-aee8-eace6b894537.png",
    calories: "250-400",
    energyValue: "средняя-высокая"
  }
];

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { toast } = useToast();
  const [quantity, setQuantity] = useState(1);

  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return <div>Продукт не найден</div>;
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: quantity,
      image: product.image
    });
    toast({
      title: "Добавлено в корзину",
      description: `${product.name} (${quantity} шт.) добавлено в корзину`,
    });
  };

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decrementQuantity = () => {
    setQuantity(prev => Math.max(1, prev - 1));
  };

  const handleBack = () => {
    navigate('/');
    setTimeout(() => {
      const menuElement = document.getElementById('menu');
      if (menuElement) {
        menuElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-coffee-background">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Button 
          variant="ghost" 
          className="mb-8 text-coffee-primary hover:text-coffee-primary/80"
          onClick={handleBack}
        >
          <ChevronLeft className="mr-2 h-4 w-4" />
          Назад к меню
        </Button>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative h-96">
            <div className="absolute inset-0 bg-white rounded-lg shadow-lg p-4">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-coffee-primary">{product.name}</h1>
            <p className="text-coffee-text">{product.description}</p>
            <div className="space-y-2">
              <p className="text-coffee-text"><strong>Цена:</strong> {product.price}</p>
              <p className="text-coffee-text"><strong>Вес:</strong> {product.weight}</p>
              <p className="text-coffee-text"><strong>Калории:</strong> {product.calories} ккал</p>
              <p className="text-coffee-text"><strong>Энергетическая ценность:</strong> {product.energyValue}</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center border rounded-md">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={decrementQuantity}
                  className="text-coffee-primary hover:text-coffee-primary/80"
                >
                  <ChevronDown className="h-4 w-4" />
                </Button>
                <span className="w-12 text-center">{quantity}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={incrementQuantity}
                  className="text-coffee-primary hover:text-coffee-primary/80"
                >
                  <ChevronUp className="h-4 w-4" />
                </Button>
              </div>
              <Button onClick={handleAddToCart} className="bg-coffee-primary hover:bg-coffee-primary/90">
                Добавить в корзину
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;