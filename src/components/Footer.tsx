import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-orthodox-darkblue text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-orthodox-gold rounded-full flex items-center justify-center">
                  <Icon
                    name="Church"
                    size={20}
                    className="text-orthodox-darkblue"
                  />
                </div>
                <h3 className="font-cormorant text-xl font-bold">
                  Храм Святого Николая
                </h3>
              </div>
              <p className="font-opensans text-sm text-gray-300">
                Православный храм в честь Святителя Николая Чудотворца. Онлайн
                подача записок и заказ треб.
              </p>
            </div>

            <div>
              <h4 className="font-cormorant text-lg font-semibold mb-4">
                Быстрые ссылки
              </h4>
              <ul className="font-opensans text-sm space-y-2">
                <li>
                  <a
                    href="#home"
                    className="text-gray-300 hover:text-orthodox-gold transition-colors"
                  >
                    Главная
                  </a>
                </li>
                <li>
                  <a
                    href="#notes"
                    className="text-gray-300 hover:text-orthodox-gold transition-colors"
                  >
                    Подать записку
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-gray-300 hover:text-orthodox-gold transition-colors"
                  >
                    Заказать требу
                  </a>
                </li>
                <li>
                  <a
                    href="#contacts"
                    className="text-gray-300 hover:text-orthodox-gold transition-colors"
                  >
                    Контакты
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-cormorant text-lg font-semibold mb-4">
                Контакты
              </h4>
              <div className="font-opensans text-sm space-y-2 text-gray-300">
                <div className="flex items-center">
                  <Icon
                    name="Phone"
                    size={16}
                    className="mr-2 text-orthodox-gold"
                  />
                  +7 (495) 123-45-67
                </div>
                <div className="flex items-center">
                  <Icon
                    name="Mail"
                    size={16}
                    className="mr-2 text-orthodox-gold"
                  />
                  info@hram-nikolay.ru
                </div>
                <div className="flex items-center">
                  <Icon
                    name="MapPin"
                    size={16}
                    className="mr-2 text-orthodox-gold"
                  />
                  ул. Православная, д. 15
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-600 pt-8 text-center">
            <p className="font-opensans text-sm text-gray-300">
              © 2024 Храм Святого Николая Чудотворца. Все права защищены.
            </p>
            <p className="font-opensans text-xs text-gray-400 mt-2">
              Сайт создан с молитвой и верой
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
