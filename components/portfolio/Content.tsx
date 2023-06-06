const Content = () => {
  const data = [
    {
      title: "DiversiTea",
      image: "/portfolio/diversitea.png",
      links: ["web development", "lifestyle", "business", "web"],
    },
    {
      title: "Angels Eyewear",
      image: "/portfolio/angelseyewear.png",
      links: ["web development", "lifestyle", "business", "web"],
    },

    {
      title: "CBus",
      image: "/portfolio/cbus.png",
      links: ["web development", " lifestyle", "business", "web"],
    },
    {
      title: "Pierre John-Louis",
      image: "/portfolio/furniture.png",
      links: ["web development", " lifestyle", "business", "web"],
    },
    {
      title: "Vohnt",
      image: "/portfolio/vohut.png",
      links: ["web development", " lifestyle", "business", "web"],
    },
    {
      title: "The Furniture Store",
      image: "/portfolio/john.png",
      links: ["web development", " lifestyle", "business", "web"],
    },
    {
      title: "Cooley",
      image: "/portfolio/thomas.png",
      links: ["web development", " lifestyle", "business", "web"],
    },
    {
      title: "Simplelearn",
      image: "/portfolio/simplelearn.png",
      links: ["web development", " lifestyle", "business", "web"],
    },
    {
      title: "Thomas George",
      image: "/portfolio/cooley.png",
      links: ["web development", " lifestyle", "business", "web"],
    },
    {
      title: "Virtual Employee",
      image: "/portfolio/virtualemployee.png",
      links: ["web development", " lifestyle", "business", "web"],
    },
    {
      title: "Jess Garage",
      image: "/portfolio/jessgeorge.png",
      links: ["web development", " lifestyle", "business", "web"],
    },
    {
      title: "One Of",
      image: "/portfolio/oneof.png",
      links: ["web development", " lifestyle", "business", "web"],
    },
  ];

  return (
    <>
      <div
        className="bg-primary  p-2 flex justify-center "
        style={{
          borderImage: "linear-gradient(1turn,  #D0631A, #C1292A, #C1292A)",
          borderBottom: "4px solid transparent",
          borderImageSlice: "1",
          width: "100%",
        }}
      >
        <div className="text-white flex gap-10 max-w-[700px] tracking-widest">
          <a>WEB DEVELOPMENT</a>
          <a>ECOMMERCE</a>
          <a>RESPONSIVE</a>
          <a>SEO</a>
        </div>
      </div>
      {/* Cards section start here */}
      <div className="bg-grey">
        <div className="container mx-auto px-0 py-36 flex flex-wrap gap-14 md:justify-between justify-center ">
          {data?.map((item, index) => {
            return (
              <div className="relative md:h-80 md:w-80  h-72 w-72 " key={index}>
                <a className="absolute inset-0 cursor-pointer z-10 rounded-md  text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-90 duration-300">
                  <h1 className="tracking-widest  text-white text-3xl font-bold">
                    {item.title}
                  </h1>
                </a>

                <a href="#" className="relative">
                  <div className=" md:h-80 md:w-80 w-72 h-72  flex flex-wrap content-center">
                    <img src={item?.image} className="mx-auto  " alt="" />
                  </div>
                </a>
                <div className="flex gap-1 justify-between w-full text-primary tracking-widest mt-1">
                  <span className="after:content-['|']">ecommerce&nbsp;</span>
                  <span className="after:content-['|']">lifestyle&nbsp;</span>
                  <span className="after:content-['|']">business&nbsp;</span>
                  <span>web</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Content;
