import ContactSection from "@/components/shared/ContactSection";
import HeroSection from "@/components/shared/HeroSection";
import PricingSection from "@/components/shared/PricingSection";
import { WhyChooseUsSection } from "@/components/shared/WhyChooseUsSection";

const page = () => {
  return (
    <>
      <HeroSection />
      <PricingSection />
      <WhyChooseUsSection />
      <ContactSection />
    </>
  );
};

export default page;
