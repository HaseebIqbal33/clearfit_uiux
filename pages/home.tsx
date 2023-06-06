import Layout from "@/components/common/layout";
import Banner from "@/components/homepage/Banner";
import ContactForm from "@/components/homepage/ContactForm";
import ContentSection from "@/components/homepage/ContentSection";
import CrossFitContent from "@/components/homepage/CrossFitConent";
import FormSection from "@/components/homepage/FormSection";
import GoodCodeContent from "@/components/homepage/GoodCodeSection";
import HeroSection from "@/components/homepage/HeroSection";
import HeroSectionContent from "@/components/homepage/HeroSectionContent";
import SecondBanner from "@/components/homepage/SecondBanner";
import SignatureSection from "@/components/homepage/SignatureSection";
import SkillsPods from "@/components/homepage/SkillsPods";
import SliderSection from "@/components/homepage/SliderSection";
import SocialMediaBanner from "@/components/homepage/SocialMediaBanner";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Home page</title>
      </Head>
      <Layout>
        <>
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
        </>
      </Layout>
    </>
  );
};
export default Home;
