import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { totalItems } = useCart();

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-coffee-primary">
              Coffee Shop
            </Link>
          </div>

          <div className="hidden sm:flex sm:items-center">
            <Link to="/" className="px-3 py-2 text-coffee-text hover:text-coffee-primary">Главная</Link>
            <Link to="/about" className="px-3 py-2 text-coffee-text hover:text-coffee-primary">О нас</Link>
            <Link to="/contacts" className="px-3 py-2 text-coffee-text hover:text-coffee-primary">Контакты</Link>
            <Link to="/cart" className="px-3 py-2 text-coffee-text hover:text-coffee-primary relative">
              <ShoppingCart className="w-6 h-6" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-coffee-accent text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>

          <div className="sm:hidden flex items-center">
            <Link to="/cart" className="px-3 py-2 text-coffee-text hover:text-coffee-primary relative mr-2">
              <ShoppingCart className="w-6 h-6" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-coffee-accent text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {totalItems}
                </span>
              )}
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-coffee-text hover:text-coffee-primary focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/" className="block px-3 py-2 text-coffee-text hover:text-coffee-primary">Главная</Link>
              <Link to="/about" className="block px-3 py-2 text-coffee-text hover:text-coffee-primary">О нас</Link>
              <Link to="/contacts" className="block px-3 py-2 text-coffee-text hover:text-coffee-primary">Контакты</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;