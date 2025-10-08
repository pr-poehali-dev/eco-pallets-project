import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ProductsSection = () => {
  return (
    <section id="products" className="relative overflow-hidden py-16">
      <div className="absolute inset-0 pallet-pattern opacity-30" />
      <div className="container mx-auto px-4 animate-fade-in relative z-10">
        <h3 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
          Продукция
        </h3>
      
        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="border-2 border-secondary/20">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Icon name="Package" className="text-secondary" size={32} />
                <h4 className="text-2xl font-bold text-primary">Линейка полимерных поддонов</h4>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 bg-muted rounded-lg">
                  <h5 className="font-bold text-primary mb-2">Стандартные грузовые поддоны</h5>
                  <p className="text-sm text-muted-foreground">Размер: 1200×1000×150 мм</p>
                  <p className="text-sm text-muted-foreground">ТУ 22.29.29.190-001-89057872-2025</p>
                </div>
                
                <div className="p-4 bg-muted rounded-lg">
                  <h5 className="font-bold text-primary mb-2">Специализированные решения под заказ</h5>
                  <p className="text-sm text-muted-foreground">Любые размеры и формы с нанесением логотипа</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-2 border-secondary/20">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Icon name="Settings" className="text-secondary" size={32} />
                <h4 className="text-2xl font-bold text-primary">Технические характеристики</h4>
              </div>
              
              <ul className="space-y-3">
                <li className="flex gap-2">
                  <Icon name="Wrench" className="text-secondary flex-shrink-0 mt-1" size={20} />
                  <span className="text-foreground">Высокая прочность и износостойкость</span>
                </li>
                <li className="flex gap-2">
                  <Icon name="Droplet" className="text-secondary flex-shrink-0 mt-1" size={20} />
                  <span className="text-foreground">Устойчивость к влаге и химическим веществам</span>
                </li>
                <li className="flex gap-2">
                  <Icon name="Feather" className="text-secondary flex-shrink-0 mt-1" size={20} />
                  <span className="text-foreground">Легкость конструкции</span>
                </li>
                <li className="flex gap-2">
                  <Icon name="CheckCircle2" className="text-secondary flex-shrink-0 mt-1" size={20} />
                  <span className="text-foreground">Простота обслуживания</span>
                </li>
                <li className="flex gap-2">
                  <Icon name="Recycle" className="text-secondary flex-shrink-0 mt-1" size={20} />
                  <span className="text-foreground">Возможность многократной переработки</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
