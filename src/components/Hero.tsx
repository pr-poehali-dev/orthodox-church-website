import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-orthodox-lightblue to-white py-16">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-orthodox-darkblue mb-6">
            Подача записок и заказ треб онлайн
          </h2>
          <p className="font-opensans text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Православный храм Святого Николая Чудотворца приглашает верующих
            подать записки о здравии и упокоении, заказать требы через удобную
            онлайн-форму
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              className="bg-orthodox-gold hover:bg-orthodox-gold/90 text-orthodox-darkblue font-opensans font-semibold px-8 py-3"
              onClick={() =>
                document
                  .getElementById("notes")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <Icon name="FileText" size={20} className="mr-2" />
              Подать записку
            </Button>
            <Button
              variant="outline"
              className="border-orthodox-gold text-orthodox-darkblue hover:bg-orthodox-gold/10 font-opensans font-semibold px-8 py-3"
              onClick={() =>
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <Icon name="Calendar" size={20} className="mr-2" />
              Заказать требу
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="animate-fade-in">
              <div className="w-16 h-16 bg-orthodox-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" size={24} className="text-orthodox-gold" />
              </div>
              <h3 className="font-cormorant text-xl font-semibold text-orthodox-darkblue mb-2">
                Круглосуточно
              </h3>
              <p className="font-opensans text-gray-600">
                Подавайте записки в любое время
              </p>
            </div>

            <div className="animate-fade-in">
              <div className="w-16 h-16 bg-orthodox-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={24} className="text-orthodox-gold" />
              </div>
              <h3 className="font-cormorant text-xl font-semibold text-orthodox-darkblue mb-2">
                Конфиденциально
              </h3>
              <p className="font-opensans text-gray-600">
                Ваши данные защищены
              </p>
            </div>

            <div className="animate-fade-in">
              <div className="w-16 h-16 bg-orthodox-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Heart" size={24} className="text-orthodox-gold" />
              </div>
              <h3 className="font-cormorant text-xl font-semibold text-orthodox-darkblue mb-2">
                С молитвой
              </h3>
              <p className="font-opensans text-gray-600">
                Каждая записка читается на службе
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
