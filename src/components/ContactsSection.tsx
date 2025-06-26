import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ContactsSection = () => {
  return (
    <section id="contacts" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-cormorant text-3xl md:text-4xl font-bold text-orthodox-darkblue mb-4">
              Контакты
            </h2>
            <p className="font-opensans text-gray-700">
              Свяжитесь с нами для получения дополнительной информации
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-orthodox-gold/20">
              <CardHeader>
                <CardTitle className="font-cormorant text-2xl text-orthodox-darkblue flex items-center">
                  <Icon
                    name="MapPin"
                    size={24}
                    className="mr-3 text-orthodox-gold"
                  />
                  Адрес храма
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start">
                  <Icon
                    name="Home"
                    size={20}
                    className="text-orthodox-gold mr-3 mt-1"
                  />
                  <div>
                    <p className="font-opensans text-gray-700">
                      г. Москва, ул. Православная, д. 15
                    </p>
                    <p className="font-opensans text-sm text-gray-500">
                      м. Сокольники, 5 минут пешком
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Icon
                    name="Clock"
                    size={20}
                    className="text-orthodox-gold mr-3"
                  />
                  <p className="font-opensans text-gray-700">
                    Открыт ежедневно с 7:00 до 19:00
                  </p>
                </div>

                <Button
                  variant="outline"
                  className="w-full border-orthodox-gold text-orthodox-darkblue hover:bg-orthodox-gold/10"
                >
                  <Icon name="Navigation" size={20} className="mr-2" />
                  Показать на карте
                </Button>
              </CardContent>
            </Card>

            <Card className="border-orthodox-gold/20">
              <CardHeader>
                <CardTitle className="font-cormorant text-2xl text-orthodox-darkblue flex items-center">
                  <Icon
                    name="Phone"
                    size={24}
                    className="mr-3 text-orthodox-gold"
                  />
                  Связь с храмом
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <Icon
                    name="Phone"
                    size={20}
                    className="text-orthodox-gold mr-3"
                  />
                  <div>
                    <p className="font-opensans font-semibold text-gray-700">
                      +7 (495) 123-45-67
                    </p>
                    <p className="font-opensans text-sm text-gray-500">
                      Церковная лавка, дежурный
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Icon
                    name="Mail"
                    size={20}
                    className="text-orthodox-gold mr-3"
                  />
                  <div>
                    <p className="font-opensans text-gray-700">
                      info@hram-nikolay.ru
                    </p>
                    <p className="font-opensans text-sm text-gray-500">
                      Общие вопросы
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Icon
                    name="MessageCircle"
                    size={20}
                    className="text-orthodox-gold mr-3"
                  />
                  <div>
                    <p className="font-opensans text-gray-700">@hram_nikolay</p>
                    <p className="font-opensans text-sm text-gray-500">
                      Telegram канал
                    </p>
                  </div>
                </div>

                <div className="pt-4 space-y-2">
                  <Button className="w-full bg-orthodox-gold hover:bg-orthodox-gold/90 text-orthodox-darkblue font-opensans">
                    <Icon name="MessageCircle" size={20} className="mr-2" />
                    Написать в WhatsApp
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-orthodox-gold text-orthodox-darkblue hover:bg-orthodox-gold/10"
                  >
                    <Icon name="Send" size={20} className="mr-2" />
                    Telegram канал
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-8 border-orthodox-gold/20 bg-orthodox-cream/20">
            <CardContent className="p-8 text-center">
              <h3 className="font-cormorant text-2xl font-bold text-orthodox-darkblue mb-4">
                Настоятель храма
              </h3>
              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <div className="w-24 h-24 bg-orthodox-gold/20 rounded-full flex items-center justify-center">
                  <Icon name="User" size={32} className="text-orthodox-gold" />
                </div>
                <div className="text-center md:text-left">
                  <h4 className="font-cormorant text-xl font-semibold text-orthodox-darkblue mb-2">
                    Протоиерей Николай Петров
                  </h4>
                  <p className="font-opensans text-gray-700 mb-2">
                    Настоятель храма с 2010 года
                  </p>
                  <p className="font-opensans text-sm text-gray-600">
                    Духовное окормление, таинства, консультации
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
