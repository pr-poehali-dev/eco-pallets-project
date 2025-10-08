import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const AboutSection = () => {
  return (
    <section id="about" className="relative overflow-hidden py-16">
      <div className="absolute inset-0 forest-bg opacity-40" />
      <div className="container mx-auto px-4 animate-fade-in relative z-10">
        <h3 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
          О компании
        </h3>
      
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <Card className="border-2 border-secondary/20">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Icon name="Target" className="text-secondary" size={32} />
                <h4 className="text-2xl font-bold text-primary">Миссия и становление</h4>
              </div>
              
              <p className="text-foreground mb-4 leading-relaxed">
                Революция в упаковочной индустрии началась в <strong>октябре 2024 года</strong>, когда мы поставили перед собой амбициозную задачу — создать инновационное решение, которое изменит представление о традиционной упаковке.
              </p>
              
              <p className="text-foreground leading-relaxed">
                Наша компания родилась на стыке двух глобальных вызовов: потребности рынка в долговечных упаковочных решениях и острой экологической проблемы утилизации трудноперерабатываемых пластиков.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-2 border-secondary/20">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Icon name="MapPin" className="text-secondary" size={32} />
                <h4 className="text-2xl font-bold text-primary">Локация и преимущества</h4>
              </div>
              
              <p className="text-foreground mb-4 leading-relaxed">
                Стратегическое расположение в индустриальном парке <strong>«Катайск»</strong> стало ключевым фактором успеха нашего проекта.
              </p>
              
              <ul className="space-y-3">
                <li className="flex gap-2">
                  <Icon name="CheckCircle2" className="text-secondary flex-shrink-0 mt-1" size={20} />
                  <span className="text-foreground">Налоговые льготы и государственная поддержка</span>
                </li>
                <li className="flex gap-2">
                  <Icon name="CheckCircle2" className="text-secondary flex-shrink-0 mt-1" size={20} />
                  <span className="text-foreground">Оптимальная логистика для сырья и рынков сбыта</span>
                </li>
                <li className="flex gap-2">
                  <Icon name="CheckCircle2" className="text-secondary flex-shrink-0 mt-1" size={20} />
                  <span className="text-foreground">Квалифицированные специалисты</span>
                </li>
                <li className="flex gap-2">
                  <Icon name="CheckCircle2" className="text-secondary flex-shrink-0 mt-1" size={20} />
                  <span className="text-foreground">Развитая инфраструктура</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20">
            <CardContent className="p-8">
              <h4 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
                <Icon name="TrendingUp" className="text-secondary" size={24} />
                История развития
              </h4>
              <ul className="space-y-3">
                <li className="flex gap-2 items-start">
                  <Icon name="Calendar" className="text-secondary flex-shrink-0 mt-1" size={18} />
                  <span className="text-foreground">Основание компании в 2024 году</span>
                </li>
                <li className="flex gap-2 items-start">
                  <Icon name="Award" className="text-secondary flex-shrink-0 mt-1" size={18} />
                  <span className="text-foreground">Статус резидента индустриального парка</span>
                </li>
                <li className="flex gap-2 items-start">
                  <Icon name="Cpu" className="text-secondary flex-shrink-0 mt-1" size={18} />
                  <span className="text-foreground">Внедрение передовых технологий производства</span>
                </li>
                <li className="flex gap-2 items-start">
                  <Icon name="Zap" className="text-secondary flex-shrink-0 mt-1" size={18} />
                  <span className="text-foreground">Постоянное совершенствование процессов</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20">
            <CardContent className="p-8">
              <h4 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
                <Icon name="Heart" className="text-secondary" size={24} />
                Наши ценности
              </h4>
              <ul className="space-y-3">
                <li className="flex gap-2 items-start">
                  <Icon name="Leaf" className="text-secondary flex-shrink-0 mt-1" size={18} />
                  <span className="text-foreground">Экологическая ответственность</span>
                </li>
                <li className="flex gap-2 items-start">
                  <Icon name="Lightbulb" className="text-secondary flex-shrink-0 mt-1" size={18} />
                  <span className="text-foreground">Инновационные технологии</span>
                </li>
                <li className="flex gap-2 items-start">
                  <Icon name="Shield" className="text-secondary flex-shrink-0 mt-1" size={18} />
                  <span className="text-foreground">Качество продукции</span>
                </li>
                <li className="flex gap-2 items-start">
                  <Icon name="Users" className="text-secondary flex-shrink-0 mt-1" size={18} />
                  <span className="text-foreground">Забота о клиентах</span>
                </li>
                <li className="flex gap-2 items-start">
                  <Icon name="Building" className="text-secondary flex-shrink-0 mt-1" size={18} />
                  <span className="text-foreground">Социальная ответственность</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
