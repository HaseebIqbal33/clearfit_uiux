import Banner from "../homepage/Banner";
import CopyRight from "../homepage/CopyRight";
import Footer from "../homepage/Footer";
import NavBar from "../homepage/NavBar";

interface LayoutProps {
  children: string | JSX.Element;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <NavBar></NavBar>
      {children}
      <Footer></Footer>
      <CopyRight />
    </>
  );
};

export default Layout;
