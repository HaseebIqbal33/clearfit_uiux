// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CaroselSlider from "../common/CaroselSlider";

const SliderSection = () => {
  const data = [
    {
      title: "Design Quality",
      description:
        "Excellent software development partner. Our final mobile app functionality performs very well. Their work methodology is top-notch",
      image: "./profilepic.png",
      author: "Scott McDonald",
      designation: " Project Manager, Fluttr",
    },
    {
      title: "Amazing Team",
      description:
        "Thank you clear fit tech for this amazing experience. I made a mobile app for my small business employees…  so flexible to work with.",
      image: "./profilepic.png",
      author: "Adam Rosen",
      designation: "Founder, RosenUS",
    },
    {
      title: "Motivated",
      description:
        "The ClearFit consultants we worked with to implement salesforce as our CRM tool were excellent… professional, knowledgeable and provided excellent guidance.  ",
      image: "./profilepic.png",
      author: "Michael Wander",
      designation: "Hiring Manager, Clear Digital Media",
    },
  ];

  return (
    <div
      className=" min-h-[500px]"
      style={{
        background: "url('skillspods_bg.png') repeat ",
      }}
    >
      <div className="container mx-auto p-6 md:p-20">
        <h1 className="text-white text-3xl text-center mb-14 tracking-widest">
          But don’t just take our word for it...
        </h1>
        <div className="">
          <CaroselSlider>
            {data?.map((item) => {
              return (
                <div className=" h-96 w-1/5 flex flex-col gap-0 ">
                  <div className="flex gap-4 bg-primary flex-col p-10 text-white tracking-widest text-left min-h-[300px]">
                    <h2 className="text-3xl ">{item?.title}</h2>
                    <p className="text-base font-normal">{item.description}</p>
                  </div>
                  <div className="flex items-center gap-4 p-10 text-white tracking-widest text-left">
                    <div className="bg-black w-72  rounded-full gap-2  flex items-center">
                      <img
                        src={item?.image}
                        className="h-12 gap-2 w-12 object-contain"
                      />
                      <div className="flex flex-col ">
                        <b>{item?.author}</b>
                        <span className="text_gradient text-xs">
                          {item?.designation}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </CaroselSlider>
        </div>
      </div>
    </div>
  );
};

export default SliderSection;
