const products = [
  {
    id: 1,
    name: "Эспрессо",
    description: "Классический итальянский кофе",
    price: "₽60",
    weight: "99г",
    image: "/lovable-uploads/7dbe2750-2854-48e2-9427-3ed28b07b63a.png"
  },
  {
    id: 2,
    name: "Лимонад",
    description: "Освежающий напиток",
    price: "₽129",
    weight: "340г",
    image: "/lovable-uploads/cd8af56f-4453-447b-9e52-af3914da5a97.png"
  },
  {
    id: 3,
    name: "Капучино",
    description: "Эспрессо с молочной пенкой",
    price: "₽209",
    weight: "340г",
    image: "/lovable-uploads/eb60e16e-b580-485b-a86d-95422e7dc461.png"
  },
  {
    id: 4,
    name: "Латте",
    description: "Кофе с молоком и нежной пенкой",
    price: "₽209",
    weight: "340г",
    image: "/lovable-uploads/7dbe2750-2854-48e2-9427-3ed28b07b63a.png"
  },
  {
    id: 5,
    name: "Флэт Уайт",
    description: "Двойной эспрессо с молоком",
    price: "₽199",
    weight: "250г",
    image: "/lovable-uploads/7dbe2750-2854-48e2-9427-3ed28b07b63a.png"
  },
  {
    id: 6,
    name: "Маффин",
    description: "Свежая домашняя выпечка",
    price: "₽149",
    weight: "50г",
    image: "/lovable-uploads/262f7b91-4ca1-4327-9701-3bc909f28926.png"
  },
  {
    id: 7,
    name: "Эклер классический",
    description: "Французский десерт с кремом",
    price: "₽109",
    weight: "60г",
    image: "/lovable-uploads/262f7b91-4ca1-4327-9701-3bc909f28926.png"
  },
  {
    id: 8,
    name: "Кукис с темным шоколадом",
    description: "Печенье с кусочками шоколада",
    price: "₽99",
    weight: "60г",
    image: "/lovable-uploads/262f7b91-4ca1-4327-9701-3bc909f28926.png"
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
            <div 
              key={product.id}
              className="bg-coffee-background rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;