import CopyRight from "../homepage/CopyRight";
import Footer from "../homepage/Footer";
import NavBar from "../homepage/NavBar";

interface LayoutProps {
  children: JSX.Element;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
      <CopyRight />
    </>
  );
};

export default Layout;
