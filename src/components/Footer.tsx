import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
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
  );
};

export default Footer;
