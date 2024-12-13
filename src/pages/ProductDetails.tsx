import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Button } from '../components/ui/button';
import { useToast } from '../components/ui/use-toast';
import Navbar from '../components/Navbar';

const products = [
  {
    id: 1,
    name: "Эспрессо",
    description: "Классический итальянский кофе",
    price: "₽60",
    weight: "99г",
    image: "/lovable-uploads/8f52e8eb-6544-43b3-a79d-9ee23ba1c001.png",
    calories: "1 ккал",
    ingredients: "100% арабика",
    details: "Насыщенный вкус настоящего итальянского эспрессо"
  },
  {
    id: 2,
    name: "Лимонад",
    description: "Освежающий напиток",
    price: "₽129",
    weight: "340г",
    image: "/lovable-uploads/55b66ab5-21cf-494c-b55a-f51e11452f39.png"
  },
  {
    id: 3,
    name: "Капучино",
    description: "Эспрессо с молочной пенкой",
    price: "₽209",
    weight: "340г",
    image: "/lovable-uploads/1724ee80-84c8-434e-b270-a91711ed59e4.png"
  },
  {
    id: 4,
    name: "Латте",
    description: "Кофе с молоком и нежной пенкой",
    price: "₽209",
    weight: "340г",
    image: "/lovable-uploads/ffbc3834-f737-4e4f-bf24-19406cd57ad8.png"
  },
  {
    id: 5,
    name: "Флэт Уайт",
    description: "Двойной эспрессо с молоком",
    price: "₽199",
    weight: "250г",
    image: "/lovable-uploads/15ffcaf2-4f3e-40de-b922-494393cd679b.png"
  },
  {
    id: 6,
    name: "Маффин",
    description: "Свежая домашняя выпечка",
    price: "₽149",
    weight: "50г",
    image: "/lovable-uploads/f600dd2d-db7f-46f1-8af6-55b783cb7ca0.png"
  },
  {
    id: 7,
    name: "Эклер классический",
    description: "Французский десерт с кремом",
    price: "₽109",
    weight: "60г",
    image: "/lovable-uploads/6b63213a-c6b7-4545-994d-6108da9396fe.png"
  },
  {
    id: 8,
    name: "Кукис с темным шоколадом",
    description: "Печенье с кусочками шоколада",
    price: "₽99",
    weight: "60г",
    image: "/lovable-uploads/350bd96a-6f2e-45ca-8b95-1a14bdd20d57.png"
  },
  {
    id: 9,
    name: "Круассан классический",
    description: "Французская слоеная выпечка",
    price: "₽99",
    weight: "60г",
    image: "/lovable-uploads/8c3fdb82-e488-4d7c-aee8-eace6b894537.png"
  }
];

const ProductDetails = () => {
  const { id } = useParams();
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

  return (
    <div className="min-h-screen bg-coffee-background">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative h-96">
            <img 
              src={product.image} 
              alt={product.name}
              className="absolute inset-0 w-full h-full object-contain"
            />
          </div>
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-coffee-primary">{product.name}</h1>
            <p className="text-coffee-text">{product.description}</p>
            <div className="space-y-2">
              <p className="text-coffee-text"><strong>Цена:</strong> {product.price}</p>
              <p className="text-coffee-text"><strong>Вес:</strong> {product.weight}</p>
              <p className="text-coffee-text"><strong>Калории:</strong> {product.calories}</p>
              <p className="text-coffee-text"><strong>Состав:</strong> {product.ingredients}</p>
              <p className="text-coffee-text">{product.details}</p>
            </div>
            <div className="flex items-center gap-4">
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-20 px-3 py-2 border rounded-md"
              />
              <Button onClick={handleAddToCart}>
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
