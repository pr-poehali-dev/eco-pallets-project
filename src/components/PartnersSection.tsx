import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const PartnersSection = () => {
  return (
    <section className="container mx-auto px-4 py-16 animate-fade-in relative z-10">
      <Card className="bg-gradient-to-r from-secondary to-secondary/80 border-0 text-white">
        <CardContent className="p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <Icon name="Users" className="mx-auto mb-4" size={48} />
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Наши партнёры
              </h3>
              <p className="text-lg opacity-90">
                Нам доверяют ведущие компании различных отраслей
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Icon name="Building2" size={24} />
                <span className="font-medium">Производственные холдинги</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Icon name="Truck" size={24} />
                <span className="font-medium">Логистические компании</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Icon name="Warehouse" size={24} />
                <span className="font-medium">Складские комплексы</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Icon name="ShoppingCart" size={24} />
                <span className="font-medium">Торговые сети</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Icon name="Sprout" size={24} />
                <span className="font-medium">Сельхоз предприятия</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Icon name="Package" size={24} />
                <span className="font-medium">Упаковочная индустрия</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default PartnersSection;
