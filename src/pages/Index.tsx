import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import ServicesSection from "@/components/ServicesSection";
import TechnologySection from "@/components/TechnologySection";
import PartnersSection from "@/components/PartnersSection";
import ContactsSection from "@/components/ContactsSection";
import Footer from "@/components/Footer";

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
      <Header isOpen={isOpen} setIsOpen={setIsOpen} navItems={navItems} />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <AdvantagesSection />
      <ServicesSection />
      <TechnologySection />
      <PartnersSection />
      <ContactsSection />
      <Footer />
    </div>
  );
};

export default Index;
