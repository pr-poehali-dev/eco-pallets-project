import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const AdvantagesSection = () => {
  return (
    <section id="advantages" className="relative overflow-hidden py-16">
      <div className="absolute inset-0 forest-bg opacity-30" />
      <div className="container mx-auto px-4 animate-fade-in relative z-10">
        <h3 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
          Преимущества
        </h3>
      
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-2 border-secondary/20 hover:border-secondary transition-all hover:shadow-lg">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                <Icon name="TrendingUp" className="text-secondary" size={32} />
              </div>
              <h4 className="text-xl font-bold text-primary mb-4">Экономическая эффективность</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-secondary">•</span>
                  <span>Снижение затрат на 40% по сравнению с деревянными аналогами</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-secondary">•</span>
                  <span>Срок службы в 5-7 раз дольше традиционных поддонов</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-secondary">•</span>
                  <span>Минимизация расходов на обслуживание</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-secondary">•</span>
                  <span>Быстрая окупаемость инвестиций</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="border-2 border-secondary/20 hover:border-secondary transition-all hover:shadow-lg">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                <Icon name="Leaf" className="text-secondary" size={32} />
              </div>
              <h4 className="text-xl font-bold text-primary mb-4">Экологические преимущества</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-secondary">•</span>
                  <span>Производство из 100% переработанных материалов</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-secondary">•</span>
                  <span>Сохранение природных ресурсов</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-secondary">•</span>
                  <span>Снижение углеродного следа</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-secondary">•</span>
                  <span>Замкнутый цикл использования</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="border-2 border-secondary/20 hover:border-secondary transition-all hover:shadow-lg">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                <Icon name="ShieldCheck" className="text-secondary" size={32} />
              </div>
              <h4 className="text-xl font-bold text-primary mb-4">Производственные гарантии</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-secondary">•</span>
                  <span>Строгий контроль качества</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-secondary">•</span>
                  <span>Сертифицированное производство</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-secondary">•</span>
                  <span>Гарантия на продукцию</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-secondary">•</span>
                  <span>Техническая поддержка</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
