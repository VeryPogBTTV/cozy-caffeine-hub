import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturedProducts from "../components/FeaturedProducts";

const Index = () => {
  return (
    <div className="min-h-screen bg-coffee-background">
      <Navbar />
      <Hero />
      <FeaturedProducts />
    </div>
  );
};

export default Index;