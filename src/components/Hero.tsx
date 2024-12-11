const Hero = () => {
  const scrollToMenu = () => {
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-coffee-background min-h-[80vh] flex items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="relative">
          {/* Yellow accent line */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-coffee-accent"></div>
          
          {/* Coffee text shaped like a cup */}
          <h1 className="text-coffee-primary text-6xl sm:text-8xl font-bold mb-8 mt-4">
            COFFEE
          </h1>
          
          {/* Animated steam effect */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
            <div className="w-1 h-6 bg-coffee-accent rounded-full animate-coffee-steam"></div>
          </div>
        </div>

        <p className="text-coffee-text text-xl sm:text-2xl mt-8 max-w-2xl mx-auto">
          Испытайте идеальное сочетание ремесленного кофе в каждой чашке
        </p>
        
        <button 
          onClick={scrollToMenu}
          className="mt-8 px-8 py-3 bg-coffee-primary text-white rounded-full hover:bg-coffee-primary/90 transition-colors"
        >
          Посмотреть меню
        </button>
      </div>
    </div>
  );
};

export default Hero;