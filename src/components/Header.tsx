import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-orthodox-gold/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-orthodox-gold rounded-full flex items-center justify-center">
              <Icon
                name="Church"
                size={24}
                className="text-orthodox-darkblue"
              />
            </div>
            <div>
              <h1 className="font-cormorant text-2xl font-bold text-orthodox-darkblue">
                Храм Святого Николая
              </h1>
              <p className="text-sm text-gray-600 font-opensans">
                Онлайн записки и требы
              </p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <a
              href="#home"
              className="font-opensans text-orthodox-darkblue hover:text-orthodox-gold transition-colors"
            >
              Главная
            </a>
            <a
              href="#services"
              className="font-opensans text-orthodox-darkblue hover:text-orthodox-gold transition-colors"
            >
              Службы
            </a>
            <a
              href="#notes"
              className="font-opensans text-orthodox-darkblue hover:text-orthodox-gold transition-colors"
            >
              Записки
            </a>
            <a
              href="#contacts"
              className="font-opensans text-orthodox-darkblue hover:text-orthodox-gold transition-colors"
            >
              Контакты
            </a>
          </nav>

          <Button className="md:hidden" variant="ghost" size="icon">
            <Icon name="Menu" size={24} />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
