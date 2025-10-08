import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "#about", label: "О компании" },
    { href: "#products", label: "Продукция" },
    { href: "#advantages", label: "Преимущества" },
    { href: "#services", label: "Услуги" },
    { href: "#technology", label: "Технологии" },
    { href: "#contacts", label: "Контакты" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted relative">
      <header className="container mx-auto px-4 py-6 sticky top-0 bg-background/90 backdrop-blur-md z-50 border-b border-border/40">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Recycle" className="text-primary" size={32} />
            <h1 className="text-xl md:text-2xl font-bold text-primary">ООО «Экостек»</h1>
          </div>
          <nav className="hidden lg:flex gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-foreground hover:text-secondary transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
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

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/10 to-primary/5" />
          <div 
            className="absolute inset-0 opacity-20" 
            style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M30 15 L45 22.5 L45 37.5 L30 45 L15 37.5 L15 22.5 Z" fill="none" stroke="%237CB342" stroke-width="0.5" opacity="0.3"/%3E%3C/svg%3E")',
              backgroundSize: '60px 60px'
            }}
          />
        </div>
        <div className="container mx-auto px-4 py-16 md:py-24 animate-fade-in relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
              Экологичные поддоны: инновационные решения для современного бизнеса
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Превращаем отходы в высококачественные упаковочные решения с практически бесконечным циклом использования
            </p>
            
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white px-8 py-6 text-lg shadow-lg">
              <Icon name="Phone" className="mr-2" size={20} />
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>

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

      <section id="contacts" className="container mx-auto px-4 py-16 mb-16 animate-fade-in">
        <h3 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
          Контакты
        </h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <Card className="hover:shadow-lg transition-shadow border-2 border-secondary/20 hover:border-secondary">
            <CardContent className="p-6 text-center">
              <Icon name="Phone" className="text-secondary mx-auto mb-4" size={32} />
              <h4 className="font-bold text-primary mb-2">Телефон</h4>
              <a href="tel:+79154258800" className="text-muted-foreground hover:text-secondary transition-colors">
                +7 (915) 425-88-00
              </a>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow border-2 border-secondary/20 hover:border-secondary">
            <CardContent className="p-6 text-center">
              <Icon name="Globe" className="text-secondary mx-auto mb-4" size={32} />
              <h4 className="font-bold text-primary mb-2">Сайт</h4>
              <a href="http://www.ekostek.ru" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-secondary transition-colors">
                www.ekostek.ru
              </a>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow border-2 border-secondary/20 hover:border-secondary">
            <CardContent className="p-6 text-center">
              <Icon name="Mail" className="text-secondary mx-auto mb-4" size={32} />
              <h4 className="font-bold text-primary mb-2">Email</h4>
              <a href="mailto:info@ekostek.ru" className="text-muted-foreground hover:text-secondary transition-colors">
                info@ekostek.ru
              </a>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow border-2 border-secondary/20 hover:border-secondary">
            <CardContent className="p-6 text-center">
              <Icon name="MapPin" className="text-secondary mx-auto mb-4" size={32} />
              <h4 className="font-bold text-primary mb-2">Адрес</h4>
              <p className="text-muted-foreground text-sm">
                641700, Курганская обл., г. Катайск, ул. Матросова, д.1
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Icon name="Recycle" size={32} />
              <div>
                <p className="text-xl font-bold">ООО «Экостек»</p>
                <p className="text-sm opacity-80">Экологичные полимерные поддоны</p>
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-sm opacity-80 mb-2">© 2024-2025 ООО «Экостек»</p>
              <p className="text-xs opacity-60">Индустриальный парк «Катайск», Курганская область</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;