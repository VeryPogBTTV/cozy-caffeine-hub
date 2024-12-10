import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative bg-coffee-primary text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Добро пожаловать в наше кафе
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            Откройте для себя мир изысканного кофе и уютной атмосферы
          </p>
          <div className="mt-10">
            <Link
              to="/#menu"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-coffee-primary bg-coffee-accent hover:bg-yellow-600 transition-colors"
            >
              Посмотреть меню
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
        <div className="w-4 h-8 bg-coffee-accent animate-coffee-steam opacity-50"></div>
      </div>
    </div>
  );
};

export default Hero;