import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-coffee-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-coffee-primary mb-8">О нас</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold text-coffee-primary mb-4">Наше кредо</h2>
              <p className="text-coffee-text">
                Мы стремимся создавать неповторимые кофейные впечатления, уделяя внимание каждой детали: от выбора зерен до подачи напитка.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold text-coffee-primary mb-4">Наши ценности</h2>
              <ul className="text-coffee-text text-left list-disc list-inside">
                <li>Качество без компромиссов</li>
                <li>Внимание к деталям</li>
                <li>Забота о госте</li>
                <li>Постоянное развитие</li>
                <li>Любовь к своему делу</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold text-coffee-primary mb-4">
                Вкусовое колесо SCA
              </h2>
              <p className="text-coffee-text mb-4">
                Мы используем профессиональное колесо вкусов SCA для точного описания характеристик кофе.
              </p>
              <img
                src="/coffee-flavor-wheel.png"
                alt="SCA Coffee Flavor Wheel"
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;