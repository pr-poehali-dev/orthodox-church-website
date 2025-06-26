import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ScheduleSection = () => {
  const schedule = [
    {
      day: "Понедельник - Пятница",
      services: [
        { time: "8:00", service: "Утреня, Литургия", icon: "Sunrise" },
        { time: "17:00", service: "Вечерня", icon: "Sunset" },
      ],
    },
    {
      day: "Суббота",
      services: [
        { time: "8:00", service: "Утреня, Литургия", icon: "Sunrise" },
        { time: "17:00", service: "Всенощное бдение", icon: "Moon" },
      ],
    },
    {
      day: "Воскресенье",
      services: [
        { time: "7:00", service: "Ранняя Литургия", icon: "Sun" },
        { time: "9:00", service: "Поздняя Литургия", icon: "Sunrise" },
        { time: "17:00", service: "Вечерня", icon: "Sunset" },
      ],
    },
  ];

  return (
    <section className="py-16 bg-orthodox-lightblue/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-cormorant text-3xl md:text-4xl font-bold text-orthodox-darkblue mb-4">
              Расписание богослужений
            </h2>
            <p className="font-opensans text-gray-700">
              Храм открыт ежедневно с 7:00 до 19:00
            </p>
          </div>

          <div className="space-y-6">
            {schedule.map((day, index) => (
              <Card key={index} className="border-orthodox-gold/20">
                <CardHeader>
                  <CardTitle className="font-cormorant text-xl text-orthodox-darkblue">
                    {day.day}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {day.services.map((service, serviceIndex) => (
                      <div
                        key={serviceIndex}
                        className="flex items-center justify-between py-2"
                      >
                        <div className="flex items-center">
                          <Icon
                            name={service.icon as any}
                            size={20}
                            className="text-orthodox-gold mr-3"
                          />
                          <span className="font-opensans text-gray-700">
                            {service.service}
                          </span>
                        </div>
                        <span className="font-opensans font-semibold text-orthodox-darkblue">
                          {service.time}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-8 border-orthodox-gold/20 bg-orthodox-cream/20">
            <CardContent className="p-6 text-center">
              <Icon
                name="Info"
                size={24}
                className="text-orthodox-gold mx-auto mb-3"
              />
              <p className="font-opensans text-gray-700">
                <strong>Важно:</strong> В праздничные дни расписание может
                изменяться. Актуальную информацию уточняйте по телефону или в
                социальных сетях храма.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
