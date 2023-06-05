import Banner from "@/components/homepage/Banner";
import ContactForm from "@/components/homepage/ContactForm";
import ContentSection from "@/components/homepage/ContentSection";
import CopyRight from "@/components/homepage/CopyRight";
import CrossFitContent from "@/components/homepage/CrossFitConent";
import Footer from "@/components/homepage/Footer";
import FormSection from "@/components/homepage/FormSection";
import GoodCodeContent from "@/components/homepage/GoodCodeSection";
import Header from "@/components/homepage/Header";
import HeroSection from "@/components/homepage/HeroSection";
import HeroSectionContent from "@/components/homepage/HeroSectionContent";
import NavBar from "@/components/homepage/NavBar";
import SecondBanner from "@/components/homepage/SecondBanner";
import SignatureSection from "@/components/homepage/SignatureSection";
import SkillsPods from "@/components/homepage/SkillsPods";
import SliderSection from "@/components/homepage/SliderSection";
import SocialMediaBanner from "@/components/homepage/SocialMediaBanner";

const Home = () => {
  return (
    <>
      <NavBar />
      {/* <Header /> */}
      <HeroSection />
      <HeroSectionContent />
      <GoodCodeContent />
      <Banner />
      <CrossFitContent />
      <SecondBanner />
      <SkillsPods />
      <SignatureSection />
      <Banner />
      <SliderSection />
      <ContentSection />
      <FormSection />
      <ContactForm />
      <SocialMediaBanner />
      <Footer />
      <CopyRight />
    </>
  );
};
export default Home;
