import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ServicesSection = () => {
  return (
    <section id="services" className="relative overflow-hidden py-16">
      <div className="absolute inset-0 pallet-pattern opacity-20" />
      <div className="container mx-auto px-4 animate-fade-in relative z-10">
        <h3 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
          Услуги
        </h3>
      
        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="border-2 border-secondary/20">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Icon name="Briefcase" className="text-secondary" size={32} />
                <h4 className="text-2xl font-bold text-primary">Комплексное обслуживание</h4>
              </div>
              
              <ul className="space-y-3">
                <li className="flex gap-3 items-start">
                  <Icon name="Calculator" className="text-secondary flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-medium text-foreground">Индивидуальный расчет потребностей</p>
                    <p className="text-sm text-muted-foreground">Анализ требований и подбор оптимального решения</p>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <Icon name="Palette" className="text-secondary flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-medium text-foreground">Разработка специальных решений</p>
                    <p className="text-sm text-muted-foreground">Изготовление по индивидуальным параметрам</p>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <Icon name="Truck" className="text-secondary flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-medium text-foreground">Доставка по всей России</p>
                    <p className="text-sm text-muted-foreground">Быстрая и надёжная логистика</p>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <Icon name="Warehouse" className="text-secondary flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-medium text-foreground">Складское хранение</p>
                    <p className="text-sm text-muted-foreground">Готовые решения для складирования</p>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <Icon name="Wrench" className="text-secondary flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-medium text-foreground">Сервисное обслуживание</p>
                    <p className="text-sm text-muted-foreground">Поддержка на всех этапах эксплуатации</p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="border-2 border-secondary/20">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Icon name="Plus" className="text-secondary" size={32} />
                <h4 className="text-2xl font-bold text-primary">Дополнительные сервисы</h4>
              </div>
              
              <ul className="space-y-3">
                <li className="flex gap-3 items-start">
                  <Icon name="Calendar" className="text-secondary flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-medium text-foreground">Аренда поддонов</p>
                    <p className="text-sm text-muted-foreground">Гибкие условия аренды для разных потребностей</p>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <Icon name="Recycle" className="text-secondary flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-medium text-foreground">Утилизация старой тары</p>
                    <p className="text-sm text-muted-foreground">Экологичная переработка использованной тары</p>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <Icon name="MessageCircle" className="text-secondary flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-medium text-foreground">Техническое консультирование</p>
                    <p className="text-sm text-muted-foreground">Экспертная помощь в выборе решений</p>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <Icon name="GraduationCap" className="text-secondary flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-medium text-foreground">Обучение персонала</p>
                    <p className="text-sm text-muted-foreground">Подготовка к работе с нашей продукцией</p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
