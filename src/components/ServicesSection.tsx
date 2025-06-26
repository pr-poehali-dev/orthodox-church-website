import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ServicesSection = () => {
  const services = [
    {
      icon: "Candle",
      title: "Молебен",
      description: "Благодарственный или просительный молебен",
      price: "от 500 ₽",
      duration: "20-30 мин",
    },
    {
      icon: "Cross",
      title: "Панихида",
      description: "Заупокойная служба по усопшим",
      price: "от 800 ₽",
      duration: "30-40 мин",
    },
    {
      icon: "Droplets",
      title: "Освящение",
      description: "Освящение дома, автомобиля, предметов",
      price: "от 1000 ₽",
      duration: "индивидуально",
    },
    {
      icon: "Heart",
      title: "Сорокоуст",
      description: "40-дневное поминание о здравии или упокоении",
      price: "от 300 ₽",
      duration: "40 дней",
    },
    {
      icon: "Users",
      title: "Венчание",
      description: "Таинство венчания (требуется собеседование)",
      price: "от 3000 ₽",
      duration: "1-1.5 часа",
    },
    {
      icon: "Baby",
      title: "Крещение",
      description: "Таинство крещения (требуется огласительная беседа)",
      price: "от 2000 ₽",
      duration: "1 час",
    },
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-cormorant text-3xl md:text-4xl font-bold text-orthodox-darkblue mb-4">
              Церковные требы
            </h2>
            <p className="font-opensans text-gray-700 max-w-2xl mx-auto">
              Заказ церковных служб и треб. Для уточнения деталей и записи на
              конкретное время свяжитесь с нами по телефону
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-orthodox-gold/20 hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <CardTitle className="font-cormorant text-xl text-orthodox-darkblue flex items-center">
                    <div className="w-10 h-10 bg-orthodox-gold/20 rounded-full flex items-center justify-center mr-3">
                      <Icon
                        name={service.icon as any}
                        size={20}
                        className="text-orthodox-gold"
                      />
                    </div>
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-opensans text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <div className="flex justify-between items-center text-sm font-opensans">
                    <span className="text-orthodox-gold font-semibold">
                      {service.price}
                    </span>
                    <span className="text-gray-500">{service.duration}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-orthodox-gold/20 bg-orthodox-cream/20">
            <CardContent className="p-8 text-center">
              <Icon
                name="Phone"
                size={32}
                className="text-orthodox-gold mx-auto mb-4"
              />
              <h3 className="font-cormorant text-2xl font-bold text-orthodox-darkblue mb-4">
                Заказ треб по телефону
              </h3>
              <p className="font-opensans text-gray-700 mb-6 max-w-2xl mx-auto">
                Для заказа церковных служб и уточнения деталей обращайтесь к
                дежурному священнику. Мы поможем выбрать подходящее время и
                ответим на все вопросы.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-orthodox-gold hover:bg-orthodox-gold/90 text-orthodox-darkblue font-opensans font-semibold">
                  <Icon name="Phone" size={20} className="mr-2" />
                  +7 (495) 123-45-67
                </Button>
                <Button
                  variant="outline"
                  className="border-orthodox-gold text-orthodox-darkblue hover:bg-orthodox-gold/10 font-opensans"
                >
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Написать в WhatsApp
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
