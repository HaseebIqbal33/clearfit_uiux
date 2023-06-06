import Layout from "@/components/common/layout";
import Content from "@/components/portfolio/Content";
import LogoSection from "@/components/portfolio/LogoSection";
import PortfolioBanner from "@/components/portfolio/PortfolioBanner";
import Head from "next/head";

const Portfolio = () => {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <Layout>
        <>
          <PortfolioBanner />
          <Content />
          {/* <LogoSection /> */}
        </>
      </Layout>
    </>
  );
};

export default Portfolio;
