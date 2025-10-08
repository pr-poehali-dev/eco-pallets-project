import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ContactsSection = () => {
  return (
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
  );
};

export default ContactsSection;
