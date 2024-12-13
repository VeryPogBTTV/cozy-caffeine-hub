import { useCart } from '../context/CartContext';
import { Button } from '../components/ui/button';
import Navbar from '../components/Navbar';

const Cart = () => {
  const { items, removeFromCart, updateQuantity } = useCart();

  const total = items.reduce((sum, item) => {
    const price = parseFloat(item.price.replace('₽', ''));
    return sum + price * item.quantity;
  }, 0);

  return (
    <div className="min-h-screen bg-coffee-background">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-bold text-coffee-primary mb-8">Корзина</h1>
        {items.length === 0 ? (
          <p className="text-coffee-text">Ваша корзина пуста</p>
        ) : (
          <div className="space-y-8">
            {items.map((item) => (
              <div key={item.id} className="flex items-center gap-4 bg-white p-4 rounded-lg shadow">
                <img src={item.image} alt={item.name} className="w-24 h-24 object-contain" />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-coffee-primary">{item.name}</h3>
                  <p className="text-coffee-text">{item.price}</p>
                </div>
                <div className="flex items-center gap-4">
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-20 px-3 py-2 border rounded-md"
                  />
                  <Button variant="destructive" onClick={() => removeFromCart(item.id)}>
                    Удалить
                  </Button>
                </div>
              </div>
            ))}
            <div className="flex justify-between items-center pt-8 border-t">
              <p className="text-2xl font-bold text-coffee-primary">
                Итого: ₽{total.toFixed(2)}
              </p>
              <Button>
                Оформить заказ
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;