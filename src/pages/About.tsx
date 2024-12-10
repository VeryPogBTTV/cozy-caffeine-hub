import React from "react";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <div className="min-h-screen bg-coffee-background">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-coffee-primary text-center mb-12">О нас</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-coffee-primary mb-4">Наше кредо</h2>
              <p className="text-coffee-text">
                Мы верим, что каждая чашка кофе - это история, которую мы рассказываем через аромат и вкус. 
                Наша миссия - создавать незабываемые моменты для наших гостей, предлагая им исключительный кофе 
                и уютную атмосферу.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-coffee-primary mb-4">Наши ценности</h2>
              <ul className="list-disc list-inside space-y-2 text-coffee-text">
                <li>Качество без компромиссов</li>
                <li>Устойчивое развитие и забота об окружающей среде</li>
                <li>Инновации в кофейном деле</li>
                <li>Создание сообщества любителей кофе</li>
                <li>Постоянное совершенствование и обучение</li>
              </ul>
            </section>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold text-coffee-primary mb-4">Колесо вкусов кофе SCA</h2>
            <p className="text-coffee-text mb-4">
              Колесо вкусов кофе SCA - это профессиональный инструмент, который помогает определить 
              и описать различные вкусовые характеристики кофе. Мы используем его для того, чтобы 
              наши бариста могли точно определить и передать вкусовой профиль каждого сорта кофе.
            </p>
            <img 
              src="/lovable-uploads/11ae4c06-64ce-4bfa-8a34-14c2cc2a1b7c.png" 
              alt="SCA Coffee Flavor Wheel" 
              className="w-full rounded-lg shadow-lg"
            />
            <p className="text-sm text-coffee-text mt-2 italic">
              Источник: Specialty Coffee Association (SCA)
            </p>
          </div>
        </div>

        <div className="mt-16 max-w-3xl mx-auto text-center">
          <p className="text-coffee-text text-lg leading-relaxed">
            Здесь мы верим в то, что идеальная чашка кофе — это сочетание высококачественных зерен, мастерства бариста и уютной атмосферы. 
            Мы используем только лучшие сорта кофе, и наши бариста с удовольствием помогут вам выбрать напиток по вашему вкусу. 
            Посетите нас и убедитесь сами!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;