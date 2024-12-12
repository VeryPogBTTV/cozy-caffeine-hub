import Navbar from "../components/Navbar";
import { Phone } from "lucide-react";

const Contacts = () => {
  return (
    <div className="min-h-screen bg-coffee-background">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-coffee-primary mb-8">Контакты</h1>
        
        <div className="space-y-8">
          {/* Hotline */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center gap-2 mb-2">
              <Phone className="text-coffee-primary" />
              <h2 className="text-xl font-semibold text-coffee-primary">Горячая линия</h2>
            </div>
            <p className="text-lg text-coffee-text">8-800-555-35-35</p>
          </div>

          {/* Cities */}
          <div className="space-y-6">
            {/* Omsk */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-coffee-primary mb-4">Омск</h2>
              <div className="space-y-2">
                <p className="text-coffee-text">
                  ТЦ Festival City<br />
                  ул. 70 лет Октября, 19<br />
                  <span className="text-sm">ежедневно с 08:00 до 23:00</span>
                </p>
              </div>
            </div>

            {/* Kazan */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-coffee-primary mb-4">Казань</h2>
              <div className="space-y-2">
                <p className="text-coffee-text">
                  Kazan Mall<br />
                  Павлюхина, 91<br />
                  <span className="text-sm">ежедневно с 8:00 до 23:00</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;