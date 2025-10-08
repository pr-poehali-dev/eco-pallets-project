import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "#product", label: "О продукте" },
    { href: "#advantages", label: "Преимущества" },
    { href: "#individual", label: "Индивидуальный подход" },
    { href: "#contacts", label: "Контакты" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <header className="container mx-auto px-4 py-6 sticky top-0 bg-background/80 backdrop-blur-sm z-50 border-b border-border/40">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Recycle" className="text-primary" size={32} />
            <h1 className="text-2xl font-bold text-primary">ООО «Экостек»</h1>
          </div>
          <nav className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-foreground hover:text-secondary transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <Icon name="Menu" size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg text-foreground hover:text-secondary transition-colors font-medium py-2"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <section className="container mx-auto px-4 py-16 md:py-24 animate-fade-in">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm md:text-base">
            <span className="px-4 py-2 bg-secondary/20 text-secondary font-medium rounded-full">Экологичность</span>
            <span className="px-4 py-2 bg-secondary/20 text-secondary font-medium rounded-full">Надежность</span>
            <span className="px-4 py-2 bg-secondary/20 text-secondary font-medium rounded-full">Долговечность</span>
            <span className="px-4 py-2 bg-secondary/20 text-secondary font-medium rounded-full">Экономичность</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-primary mb-6 leading-tight">
            Экологичные полимерные поддоны
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Полимерные поддоны нового поколения на основе вторичного сырья
          </p>
          
          <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white px-8 py-6 text-lg">
            <Icon name="Phone" className="mr-2" size={20} />
            Связаться с нами
          </Button>
        </div>
      </section>

      <section id="product" className="container mx-auto px-4 py-16 animate-fade-in">
        <Card className="overflow-hidden border-2 border-secondary/20">
          <CardContent className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Icon name="Package" className="text-secondary" size={32} />
                  <h3 className="text-3xl font-bold text-primary">О продукте</h3>
                </div>
                
                <p className="text-lg text-foreground mb-6 leading-relaxed">
                  На технологическом оборудовании ООО «Экостек» в индустриальном парке «РИД Катайск» 
                  (Курганская область) производятся полимерные поддоны <strong>1200×1000×150 мм</strong>, 
                  в соответствии с <strong>ТУ 22.29.29.190-001-89057872-2025</strong>
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-secondary">
                    <Icon name="CheckCircle2" size={20} />
                    <span className="font-medium">Вторичное сырье</span>
                  </div>
                  <div className="flex items-center gap-2 text-secondary">
                    <Icon name="CheckCircle2" size={20} />
                    <span className="font-medium">Современное оборудование</span>
                  </div>
                  <div className="flex items-center gap-2 text-secondary">
                    <Icon name="CheckCircle2" size={20} />
                    <span className="font-medium">Соответствие ТУ</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-muted rounded-lg p-8 flex items-center justify-center min-h-[300px]">
                <div className="text-center">
                  <Icon name="Box" className="text-secondary mx-auto mb-4" size={80} />
                  <p className="text-2xl font-bold text-primary">1200×1000×150 мм</p>
                  <p className="text-muted-foreground mt-2">Стандартный типоразмер</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section id="advantages" className="container mx-auto px-4 py-16 animate-fade-in">
        <h3 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
          Преимущества наших поддонов
        </h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="hover:shadow-lg transition-shadow border-2 border-secondary/20 hover:border-secondary">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Leaf" className="text-secondary" size={32} />
              </div>
              <h4 className="text-xl font-bold text-primary mb-2">Экологичность</h4>
              <p className="text-muted-foreground">
                Производство из вторичного сырья, забота об окружающей среде
              </p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow border-2 border-secondary/20 hover:border-secondary">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" className="text-secondary" size={32} />
              </div>
              <h4 className="text-xl font-bold text-primary mb-2">Надежность</h4>
              <p className="text-muted-foreground">
                Высокое качество материалов и современные технологии производства
              </p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow border-2 border-secondary/20 hover:border-secondary">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" className="text-secondary" size={32} />
              </div>
              <h4 className="text-xl font-bold text-primary mb-2">Долговечность</h4>
              <p className="text-muted-foreground">
                Устойчивость к износу, длительный срок службы поддонов
              </p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow border-2 border-secondary/20 hover:border-secondary">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="DollarSign" className="text-secondary" size={32} />
              </div>
              <h4 className="text-xl font-bold text-primary mb-2">Экономичность</h4>
              <p className="text-muted-foreground">
                Оптимальное соотношение цены и качества продукции
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="individual" className="container mx-auto px-4 py-16 animate-fade-in">
        <Card className="bg-gradient-to-r from-secondary to-secondary/80 border-0 text-white">
          <CardContent className="p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <Icon name="Sparkles" className="mx-auto mb-6" size={48} />
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Индивидуальный подход к заказчику
              </h3>
              <p className="text-xl mb-8 leading-relaxed">
                Изготовим поддон <strong>любой формы и типоразмера</strong> с нанесением 
                логотипа по запросу клиента!
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-lg">
                <div className="flex items-center gap-2">
                  <Icon name="Ruler" size={24} />
                  <span>Любые размеры</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Shapes" size={24} />
                  <span>Любая форма</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Image" size={24} />
                  <span>Нанесение логотипа</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section id="contacts" className="container mx-auto px-4 py-16 mb-16 animate-fade-in">
        <h3 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
          Контакты
        </h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <Icon name="Phone" className="text-secondary mx-auto mb-4" size={32} />
              <h4 className="font-bold text-primary mb-2">Телефон</h4>
              <a href="tel:+79154258800" className="text-muted-foreground hover:text-secondary transition-colors">
                +7 (915) 425-88-00
              </a>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <Icon name="Globe" className="text-secondary mx-auto mb-4" size={32} />
              <h4 className="font-bold text-primary mb-2">Сайт</h4>
              <a href="http://www.ekostek.ru" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-secondary transition-colors">
                www.ekostek.ru
              </a>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <Icon name="Mail" className="text-secondary mx-auto mb-4" size={32} />
              <h4 className="font-bold text-primary mb-2">Email</h4>
              <a href="mailto:info@ekostek.ru" className="text-muted-foreground hover:text-secondary transition-colors">
                info@ekostek.ru
              </a>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <Icon name="MapPin" className="text-secondary mx-auto mb-4" size={32} />
              <h4 className="font-bold text-primary mb-2">Адрес</h4>
              <p className="text-muted-foreground text-sm">
                641700, Курганская область, г. Катайск, ул. Матросова, д.1
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Recycle" size={24} />
            <span className="text-xl font-bold">ООО «Экостек»</span>
          </div>
          <p className="text-sm opacity-80">
            © 2025 ООО «Экостек». Экологичные полимерные поддоны
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;