import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Icon from "@/components/ui/icon";
import { toast } from "sonner";

const NotesForm = () => {
  const [noteType, setNoteType] = useState("health");
  const [names, setNames] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Записка принята! Она будет прочитана на ближайшей службе.");
    // Сброс формы
    setNames("");
    setEmail("");
    setPhone("");
    setComment("");
  };

  return (
    <section id="notes" className="py-16 bg-orthodox-cream/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-cormorant text-3xl md:text-4xl font-bold text-orthodox-darkblue mb-4">
              Подача записок
            </h2>
            <p className="font-opensans text-gray-700 max-w-2xl mx-auto">
              Подайте записку о здравии или упокоении. Все имена будут
              поминаться на Божественной литургии
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-orthodox-gold/20">
              <CardHeader>
                <CardTitle className="font-cormorant text-2xl text-orthodox-darkblue flex items-center">
                  <Icon
                    name="Heart"
                    size={24}
                    className="mr-3 text-orthodox-gold"
                  />
                  О здравии
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-opensans text-gray-600 mb-4">
                  Молитвы о здоровье, благополучии и духовном состоянии живых
                  людей
                </p>
                <ul className="font-opensans text-sm text-gray-600 space-y-1">
                  <li>• Поминание на Божественной литургии</li>
                  <li>• Молитвы о здравии и благополучии</li>
                  <li>• Духовная поддержка</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-orthodox-gold/20">
              <CardHeader>
                <CardTitle className="font-cormorant text-2xl text-orthodox-darkblue flex items-center">
                  <Icon
                    name="Cross"
                    size={24}
                    className="mr-3 text-orthodox-gold"
                  />
                  О упокоении
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-opensans text-gray-600 mb-4">
                  Поминовение усопших и молитвы об упокоении их душ
                </p>
                <ul className="font-opensans text-sm text-gray-600 space-y-1">
                  <li>• Поминание на проскомидии</li>
                  <li>• Молитвы об упокоении души</li>
                  <li>• Поддержка близких усопшего</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-8 border-orthodox-gold/20">
            <CardHeader>
              <CardTitle className="font-cormorant text-2xl text-orthodox-darkblue text-center">
                Форма подачи записки
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label className="font-opensans text-base font-semibold text-orthodox-darkblue mb-3 block">
                    Тип записки
                  </Label>
                  <RadioGroup
                    value={noteType}
                    onValueChange={setNoteType}
                    className="flex space-x-8"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="health" id="health" />
                      <Label htmlFor="health" className="font-opensans">
                        О здравии
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="repose" id="repose" />
                      <Label htmlFor="repose" className="font-opensans">
                        О упокоении
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label
                    htmlFor="names"
                    className="font-opensans text-base font-semibold text-orthodox-darkblue"
                  >
                    Имена для поминания *
                  </Label>
                  <Textarea
                    id="names"
                    placeholder="Укажите имена (желательно в церковном написании)&#10;Например: Александр, Мария, Николай"
                    value={names}
                    onChange={(e) => setNames(e.target.value)}
                    required
                    className="mt-2"
                    rows={4}
                  />
                  <p className="text-sm text-gray-500 mt-1 font-opensans">
                    Укажите имена через запятую. Для записок о упокоении
                    добавьте "†" перед именем
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label
                      htmlFor="email"
                      className="font-opensans text-base font-semibold text-orthodox-darkblue"
                    >
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="ваш@email.ru"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="phone"
                      className="font-opensans text-base font-semibold text-orthodox-darkblue"
                    >
                      Телефон
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+7 (900) 123-45-67"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="mt-2"
                    />
                  </div>
                </div>

                <div>
                  <Label
                    htmlFor="comment"
                    className="font-opensans text-base font-semibold text-orthodox-darkblue"
                  >
                    Комментарий
                  </Label>
                  <Textarea
                    id="comment"
                    placeholder="Дополнительные пожелания или обстоятельства"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="mt-2"
                    rows={3}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-orthodox-gold hover:bg-orthodox-gold/90 text-orthodox-darkblue font-opensans font-semibold py-3"
                >
                  <Icon name="Send" size={20} className="mr-2" />
                  Подать записку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default NotesForm;
