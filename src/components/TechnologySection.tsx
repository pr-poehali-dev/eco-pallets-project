import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const TechnologySection = () => {
  return (
    <section id="technology" className="relative overflow-hidden py-16">
      <div className="absolute inset-0 forest-bg opacity-25" />
      <div className="container mx-auto px-4 animate-fade-in relative z-10">
        <h3 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
          Технологии производства
        </h3>
      
        <Card className="border-2 border-secondary/20 max-w-4xl mx-auto mb-8">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <Icon name="Factory" className="text-secondary" size={32} />
              <h4 className="text-2xl font-bold text-primary">Производственный процесс</h4>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="ClipboardCheck" className="text-secondary" size={28} />
                </div>
                <h5 className="font-bold text-primary mb-2">Контроль качества</h5>
                <p className="text-sm text-muted-foreground">На всех этапах производства</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Boxes" className="text-secondary" size={28} />
                </div>
                <h5 className="font-bold text-primary mb-2">Современные материалы</h5>
                <p className="text-sm text-muted-foreground">Высокое качество сырья</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Zap" className="text-secondary" size={28} />
                </div>
                <h5 className="font-bold text-primary mb-2">Инновационные методы</h5>
                <p className="text-sm text-muted-foreground">Передовые технологии обработки</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-secondary/20 bg-gradient-to-br from-secondary/5 to-background">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <Icon name="PackageOpen" className="text-secondary" size={32} />
              <h4 className="text-2xl font-bold text-primary">Материалы и компоненты</h4>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-3">
                <Icon name="CheckCircle2" className="text-secondary flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-medium text-foreground">Переработанные полимеры высшего качества</p>
                  <p className="text-sm text-muted-foreground mt-1">100% вторичное сырье</p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <Icon name="CheckCircle2" className="text-secondary flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-medium text-foreground">Композитные материалы</p>
                  <p className="text-sm text-muted-foreground mt-1">Для повышенной прочности</p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <Icon name="CheckCircle2" className="text-secondary flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-medium text-foreground">Специальные добавки</p>
                  <p className="text-sm text-muted-foreground mt-1">Улучшение характеристик продукции</p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <Icon name="CheckCircle2" className="text-secondary flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-medium text-foreground">Экологически безопасные компоненты</p>
                  <p className="text-sm text-muted-foreground mt-1">Забота об окружающей среде</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default TechnologySection;
