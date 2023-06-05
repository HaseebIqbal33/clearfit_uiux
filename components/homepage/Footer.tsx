import EmailBox from "../common/EmailBox";
import PhoneBox from "../common/PhoneBox";

const Footer = () => {
  const links = [
    "Home",
    "About",
    "Services",
    "Portfolio",
    "Pricing",
    "Contact",
    "News",
    "Technologies",
    "Case Study",
    "Terms",
  ];
  return (
    <div className="bg-primary">
      <div className="container mx-auto flex justify-between flex-col lg:flex-row  p-14 bg-primary gap-10">
        <div className="lg:w-1/3 w-full bg-primary flex gap-8 flex-col lg:p-10 p-2">
          <h2 className="text-4xl font-bold text-white">ClearFit</h2>
          <p className="text-base text-white max-w-[300px] tracking-widest">
            Clear Fit software consulting can help your business over the finish
            line.Any software project or cloud architecture we can handle it
            with ease.
          </p>
          <PhoneBox
            color="#C1292A"
            phoneNumber="614. 470. 4134"
            classNames="text-white"
          />
          <EmailBox
            color="#C1292A"
            email="info@clearfitllc.com"
            classNames="text-white"
          />
        </div>
        <div className="lg:w-1/3 w-full  lg:p-10 p-2">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-2">
              <h2 className="break-all text-silver_grey  text-2xl">
                SUBSCRIBE TO OUR BLOG
              </h2>
              <hr className=" w-48" />
            </div>

            <input
              type="text"
              placeholder="Enter Email..."
              className="bg-sliver_black text-white text-base pt-3 pl-3 h-14 rounded-lg"
            />
            <div className="flex flex-col gap-2">
              <h2 className="break-all text-silver_grey  text-2xl">
                GETTING HERE
              </h2>
              <hr className=" w-48" />
              <p className="break-all text-silver_grey font-normal text-xl">
                + VIEW MAP
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 w-full  lg:p-10 p-2">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-2">
              <h2 className="break-all text-silver_grey  text-2xl">Links</h2>
              <hr className=" w-40" />
            </div>
            <div
              className="flex flex-wrap justify-around w-80 gap-0"
              style={{ lineHeight: "50px" }}
            >
              {links.map((item, index) => {
                return (
                  <a className=" w-40 text-white cursor-pointer" key={index}>
                    {item}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
