import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-coffee-primary text-xl font-bold">CoffeeShop</Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden sm:flex sm:items-center">
            <Link to="/" className="px-3 py-2 text-coffee-text hover:text-coffee-primary">Главная</Link>
            <Link to="/about" className="px-3 py-2 text-coffee-text hover:text-coffee-primary">О нас</Link>
            <Link to="/contacts" className="px-3 py-2 text-coffee-text hover:text-coffee-primary">Контакты</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-coffee-text hover:text-coffee-primary"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className="block px-3 py-2 text-coffee-text hover:text-coffee-primary">Главная</Link>
            <Link to="/about" className="block px-3 py-2 text-coffee-text hover:text-coffee-primary">О нас</Link>
            <Link to="/contacts" className="block px-3 py-2 text-coffee-text hover:text-coffee-primary">Контакты</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;