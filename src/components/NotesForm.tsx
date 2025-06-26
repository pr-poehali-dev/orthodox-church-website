import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Icon from "@/components/ui/icon";
import { toast } from "sonner";

const NotesForm = () => {
  const [noteType, setNoteType] = useState("health");
  const [names, setNames] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");
  const [donationAmount, setDonationAmount] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Записка принята! Она будет прочитана на ближайшей службе.");
    // Сброс формы
    setNames("");
    setEmail("");
    setPhone("");
    setComment("");
    setDonationAmount("");
  };

  const donationOptions = [
    { value: "50", label: "50 ₽" },
    { value: "100", label: "100 ₽" },
    { value: "200", label: "200 ₽" },
    { value: "500", label: "500 ₽" },
    { value: "1000", label: "1000 ₽" },
    { value: "custom", label: "Своя сумма" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orthodox-cream/20 via-white to-orthodox-gold/10 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Заголовок */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orthodox-gold/20 rounded-full mb-6">
              <Icon name="BookOpen" size={32} className="text-orthodox-gold" />
            </div>
            <h1 className="font-cormorant text-4xl md:text-5xl font-bold text-orthodox-darkblue mb-4">
              Подача записок
            </h1>
            <p className="font-opensans text-lg text-gray-700 max-w-2xl mx-auto">
              Подайте записку о здравии или упокоении. Все имена будут
              поминаться на Божественной литургии
            </p>
          </div>

          {/* Информационные карточки */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="border-2 border-orthodox-gold/20 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="bg-gradient-to-r from-orthodox-gold/10 to-orthodox-gold/5">
                <CardTitle className="font-cormorant text-2xl text-orthodox-darkblue flex items-center">
                  <div className="w-10 h-10 bg-orthodox-gold/20 rounded-full flex items-center justify-center mr-3">
                    <Icon
                      name="Heart"
                      size={20}
                      className="text-orthodox-gold"
                    />
                  </div>
                  О здравии
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="font-opensans text-gray-600 mb-4 leading-relaxed">
                  Молитвы о здоровье, благополучии и духовном состоянии живых
                  людей
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-orthodox-gold mr-2"
                    />
                    <span className="font-opensans">
                      Поминание на Божественной литургии
                    </span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-orthodox-gold mr-2"
                    />
                    <span className="font-opensans">
                      Молитвы о здравии и благополучии
                    </span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-orthodox-gold mr-2"
                    />
                    <span className="font-opensans">Духовная поддержка</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-orthodox-gold/20 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="bg-gradient-to-r from-orthodox-gold/10 to-orthodox-gold/5">
                <CardTitle className="font-cormorant text-2xl text-orthodox-darkblue flex items-center">
                  <div className="w-10 h-10 bg-orthodox-gold/20 rounded-full flex items-center justify-center mr-3">
                    <Icon
                      name="Cross"
                      size={20}
                      className="text-orthodox-gold"
                    />
                  </div>
                  О упокоении
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="font-opensans text-gray-600 mb-4 leading-relaxed">
                  Поминовение усопших и молитвы об упокоении их душ
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-orthodox-gold mr-2"
                    />
                    <span className="font-opensans">
                      Поминание на проскомидии
                    </span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-orthodox-gold mr-2"
                    />
                    <span className="font-opensans">
                      Молитвы об упокоении души
                    </span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-orthodox-gold mr-2"
                    />
                    <span className="font-opensans">
                      Поддержка близких усопшего
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Основная форма */}
          <Card className="border-2 border-orthodox-gold/30 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-orthodox-gold/15 to-orthodox-gold/10 border-b border-orthodox-gold/20">
              <CardTitle className="font-cormorant text-3xl text-orthodox-darkblue text-center flex items-center justify-center">
                <Icon
                  name="Edit3"
                  size={28}
                  className="mr-3 text-orthodox-gold"
                />
                Форма подачи записки
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Тип записки */}
                <div className="space-y-4">
                  <Label className="font-opensans text-lg font-semibold text-orthodox-darkblue">
                    Тип записки *
                  </Label>
                  <RadioGroup
                    value={noteType}
                    onValueChange={setNoteType}
                    className="flex flex-col sm:flex-row sm:space-x-8 space-y-4 sm:space-y-0"
                  >
                    <div className="flex items-center space-x-3 p-4 border-2 border-gray-200 rounded-lg hover:border-orthodox-gold/50 transition-colors">
                      <RadioGroupItem
                        value="health"
                        id="health"
                        className="text-orthodox-gold"
                      />
                      <Label
                        htmlFor="health"
                        className="font-opensans text-base cursor-pointer"
                      >
                        О здравии
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3 p-4 border-2 border-gray-200 rounded-lg hover:border-orthodox-gold/50 transition-colors">
                      <RadioGroupItem
                        value="repose"
                        id="repose"
                        className="text-orthodox-gold"
                      />
                      <Label
                        htmlFor="repose"
                        className="font-opensans text-base cursor-pointer"
                      >
                        О упокоении
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Имена */}
                <div className="space-y-4">
                  <Label
                    htmlFor="names"
                    className="font-opensans text-lg font-semibold text-orthodox-darkblue"
                  >
                    Имена для поминания *
                  </Label>
                  <Textarea
                    id="names"
                    placeholder="Укажите имена (желательно в церковном написании)&#10;Например: Александр, Мария, Николай"
                    value={names}
                    onChange={(e) => setNames(e.target.value)}
                    required
                    className="min-h-[120px] text-base"
                    rows={5}
                  />
                  <p className="text-sm text-gray-500 font-opensans bg-gray-50 p-3 rounded-lg">
                    💡 Укажите имена через запятую. Для записок о упокоении
                    добавьте "†" перед именем
                  </p>
                </div>

                {/* Контактная информация */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label
                      htmlFor="email"
                      className="font-opensans text-lg font-semibold text-orthodox-darkblue"
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
                      className="text-base py-3"
                    />
                  </div>
                  <div className="space-y-3">
                    <Label
                      htmlFor="phone"
                      className="font-opensans text-lg font-semibold text-orthodox-darkblue"
                    >
                      Телефон
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+7 (900) 123-45-67"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="text-base py-3"
                    />
                  </div>
                </div>

                {/* Сумма пожертвования */}
                <div className="space-y-4">
                  <Label className="font-opensans text-lg font-semibold text-orthodox-darkblue">
                    Сумма пожертвования
                  </Label>
                  <div className="space-y-4">
                    <Select
                      value={donationAmount}
                      onValueChange={setDonationAmount}
                    >
                      <SelectTrigger className="text-base py-3">
                        <SelectValue placeholder="Выберите сумму или укажите свою" />
                      </SelectTrigger>
                      <SelectContent>
                        {donationOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {donationAmount === "custom" && (
                      <Input
                        type="number"
                        placeholder="Укажите сумму в рублях"
                        className="text-base py-3"
                        min="1"
                      />
                    )}
                  </div>
                  <p className="text-sm text-gray-500 font-opensans bg-orthodox-gold/5 p-3 rounded-lg">
                    🙏 Пожертвования идут на содержание храма и
                    благотворительную деятельность
                  </p>
                </div>

                {/* Комментарий */}
                <div className="space-y-4">
                  <Label
                    htmlFor="comment"
                    className="font-opensans text-lg font-semibold text-orthodox-darkblue"
                  >
                    Комментарий
                  </Label>
                  <Textarea
                    id="comment"
                    placeholder="Дополнительные пожелания или обстоятельства"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="text-base"
                    rows={4}
                  />
                </div>

                {/* Кнопка отправки */}
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orthodox-gold to-orthodox-gold/90 hover:from-orthodox-gold/90 hover:to-orthodox-gold text-orthodox-darkblue font-opensans font-semibold py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Icon name="Send" size={20} className="mr-3" />
                  Подать записку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default NotesForm;
