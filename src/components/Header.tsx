import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Icon from "@/components/ui/icon";

interface HeaderProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  navItems: Array<{ href: string; label: string }>;
}

const Header = ({ isOpen, setIsOpen, navItems }: HeaderProps) => {
  return (
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
  );
};

export default Header;
