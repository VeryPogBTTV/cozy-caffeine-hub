const products = [
  {
    id: 1,
    name: "Эспрессо",
    description: "Классический итальянский кофе",
    price: "₽60",
    weight: "99г"
  },
  {
    id: 2,
    name: "Лимонад",
    description: "Освежающий напиток",
    price: "₽129",
    weight: "340г"
  },
  {
    id: 3,
    name: "Капучино",
    description: "Эспрессо с молочной пенкой",
    price: "₽209",
    weight: "340г"
  },
  {
    id: 4,
    name: "Латте",
    description: "Кофе с молоком и нежной пенкой",
    price: "₽209",
    weight: "340г"
  },
  {
    id: 5,
    name: "Флэт Уайт",
    description: "Двойной эспрессо с молоком",
    price: "₽199",
    weight: "250г"
  },
  {
    id: 6,
    name: "Маффин",
    description: "Свежая домашняя выпечка",
    price: "₽149",
    weight: "50г"
  },
  {
    id: 7,
    name: "Эклер классический",
    description: "Французский десерт с кремом",
    price: "₽109",
    weight: "60г"
  },
  {
    id: 8,
    name: "Кукис с темным шоколадом",
    description: "Печенье с кусочками шоколада",
    price: "₽99",
    weight: "60г"
  },
  {
    id: 9,
    name: "Круассан классический",
    description: "Французская слоеная выпечка",
    price: "₽99",
    weight: "60г"
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
              className="bg-coffee-background rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold text-coffee-primary mb-2">
                {product.name}
              </h3>
              <p className="text-coffee-text mb-4">
                {product.description}
              </p>
              <div className="flex justify-between items-center">
                <p className="text-coffee-primary font-bold">
                  {product.price}
                </p>
                <p className="text-coffee-text text-sm">
                  {product.weight}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;