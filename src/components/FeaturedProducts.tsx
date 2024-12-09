const products = [
  {
    id: 1,
    name: "Эспрессо",
    description: "Насыщенный и крепкий одиночный шот чистой кофейной эссенции",
    price: "₽315"
  },
  {
    id: 2,
    name: "Капучино",
    description: "Идеальный баланс эспрессо, вспененного молока и пены",
    price: "₽405"
  },
  {
    id: 3,
    name: "Латте",
    description: "Мягкий эспрессо с пропаренным молоком и легкой пеной",
    price: "₽360"
  }
];

const FeaturedProducts = () => {
  return (
    <section id="menu" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-coffee-primary text-center mb-12">
          Популярные напитки
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
              <p className="text-coffee-primary font-bold">
                {product.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;