import Letter from "../common/icons/letter";
import Phone from "../common/icons/phone";

const NavBar = () => {
  const images = [
    "./twitter.svg",
    "./facebook.svg",
    "./linkedin.svg",
    "./insta.svg",
  ];

  return (
    <nav className="bg-primary lg:px-20 px-0">
      <div className=" container mx-auto">
        <div className="flex justify-between h-11 items-center  p-2 sm:p-0">
          {/* Right part here */}
          <div className=" flex gap-1 sm:gap-10 ">
            <div className="gap-3 flex items-center ">
              <Letter />
              <a
                className="text-white text-xs font-normal hidden sm:block "
                href=" mailto:INFO@CLEARFITLLC.COM"
              >
                INFO@CLEARFITLLC.COM
              </a>
            </div>
            <div className="flex gap-3  items-center ">
              <Phone />
              <a
                className="text-white font-normal text-xs hidden sm:block"
                href="tel:614. 470. 4134"
              >
                614. 470. 4134
              </a>
            </div>
          </div>
          {/* left part here */}
          <div className="flex justify-between gap-5">
            {images.map((item, index) => {
              return <img src={item} alt="Not found" key={index} />;
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
