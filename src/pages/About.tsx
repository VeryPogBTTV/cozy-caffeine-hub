import React from "react";
import Navbar from "../components/Navbar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const About = () => {
  const scaFlavors = [
    {
      name: "Фруктовый",
      description: "Фруктовые нотки в кофе часто встречаются в зернах, произрастающих в странах Африки (например, Эфиопия и Кения). Эти профили характеризуются яркой кислотностью и свежими, сочными оттенками, напоминающими вкусы ягод, цитрусовых или фруктов."
    },
    {
      name: "Ореховый",
      description: "Ореховые нотки придают кофе теплоту и сладость. Эти профили часто встречаются в кофе из Центральной и Южной Америки (например, в Бразилии и Колумбии)."
    },
    {
      name: "Шоколадный",
      description: "Шоколадные нотки — одни из самых популярных вкусовых характеристик кофе. Они часто присутствуют в кофе из Латинской Америки и придают напитку насыщенность и сладость."
    },
    {
      name: "Карамельный",
      description: "Карамельный указывает на сладкие, карамельные ноты, часто связанные с легкой обжарки кофе и присущей ей сладостью. Эта сладость может быть как мягкой и сливочной, так и более интенсивной и почти жженой."
    },
    {
      name: "Пряный",
      description: "Пряные нотки добавляют кофе глубину и сложность, их можно найти в зернах, выращенных в Индонезии, Индии и Йемене."
    },
    {
      name: "Цветочный",
      description: "Цветочные нотки добавляют в кофе легкость и изысканность. Чаще всего их можно встретить в зернах светлой обжарки из Восточной Африки и Йемена."
    },
    {
      name: "Травяной",
      description: "Травяной указывает на присутствие землистых, немного горьковатых и пряных нот. Это могут быть нюансы зеленого чая, сена, или даже более специфических трав, таких как мята или тимьян (в зависимости от степени обжарки и сорта кофе)."
    },
    {
      name: "Цитрусовый",
      description: "Цитрусовый говорит о ярких кислых нотах, напоминающих различные цитрусовые фрукты. Это могут быть ноты лимона, лайма, грейпфрута или даже более сладких цитрусов, таких как апельсин или мандарин. Кислотность может быть как высокой, так и умеренной."
    }
  ];

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
              src="/lovable-uploads/b657b2e8-9530-4c00-96bd-bad3398a47eb.png" 
              alt="SCA Coffee Flavor Wheel" 
              className="w-full rounded-lg shadow-lg"
            />
            <p className="text-sm text-coffee-text mt-2 italic">
              Источник: Specialty Coffee Association (SCA)
            </p>
          </div>
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-coffee-text leading-relaxed mb-8">
              Здесь мы верим в то, что идеальная чашка кофе — это сочетание высококачественных зерен, 
              мастерства бариста и уютной атмосферы. Мы используем только лучшие сорта кофе, и наши 
              бариста с удовольствием помогут вам выбрать напиток по вашему вкусу. Посетите нас и 
              убедитесь сами!
            </p>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-coffee-primary mb-4">
                Основные вкусовые профили нашего кофе
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {scaFlavors.map((flavor, index) => (
                  <HoverCard key={index}>
                    <HoverCardTrigger asChild>
                      <div 
                        className="bg-coffee-background p-3 rounded-md text-coffee-text hover:bg-coffee-primary hover:text-white transition-colors duration-300 cursor-pointer"
                      >
                        {flavor.name}
                      </div>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80">
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold">{flavor.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {flavor.description}
                        </p>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;