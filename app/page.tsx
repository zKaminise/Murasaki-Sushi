import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ExperienceSection from "@/components/ExperienceSection";
import MenuDegustacaoSection from "@/components/MenuDegustacaoSection";
import FireSection from "@/components/FireSection";
import FeaturedDishes from "@/components/FeaturedDishes";
import DeliverySection from "@/components/DeliverySection";
import InstagramSection from "@/components/InstagramSection";
import LocationSection from "@/components/LocationSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ExperienceSection />
        <MenuDegustacaoSection />
        <FireSection />
        <FeaturedDishes />
        <DeliverySection />
        <InstagramSection />
        <LocationSection />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
