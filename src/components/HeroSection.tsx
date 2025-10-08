import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
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
  );
};

export default HeroSection;
