import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: "Эспрессо",
    description: "Классический итальянский кофе",
    price: "₽60",
    weight: "99г",
    image: "/lovable-uploads/8f52e8eb-6544-43b3-a79d-9ee23ba1c001.png"
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

const FeaturedProducts = () => {
  return (
    <section id="menu" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-coffee-primary text-center mb-12">
          Меню
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link 
              to={`/product/${product.id}`}
              key={product.id}
              className="bg-coffee-background rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 w-full">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-contain p-4"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-coffee-primary mb-2">
                  {product.name}
                </h3>
                <p className="text-coffee-text mb-4">
                  {product.description}
                </p>
                <div className="flex justify-between items-center">
                  <p className="text-coffee-primary font-bold text-lg">
                    {product.price}
                  </p>
                  <p className="text-coffee-text text-sm">
                    {product.weight}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;