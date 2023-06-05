// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SliderSection = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
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
          <Slider {...settings}>
            <div className=" h-96 w-1/5 flex flex-col gap-0">
              <div className="flex gap-4 bg-primary flex-col p-10 text-white tracking-widest text-left">
                <h2 className="text-3xl ">Design Quality</h2>
                <p className="text-base font-normal">
                  Excellent software development partner. Our final mobile app
                  functionality performs very well. Their work methodology is
                  top-notch
                </p>
              </div>
              <div className="flex items-center gap-4 p-10 text-white tracking-widest text-left">
                <div className="bg-black w-72 flex rounded-full gap-2">
                  <img
                    src="./profile.png"
                    className="h-12 gap-2 w-12 object-contain"
                  />
                  <div className="flex flex-col ">
                    <b>Scott McDonald</b>
                    <span className="text_gradient text-xs">
                      Project Manager, Fluttr
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className=" h-96 w-1/5 flex flex-col gap-0">
              <div className="flex gap-4 bg-primary flex-col p-10 text-white tracking-widest text-left">
                <h2 className="text-3xl ">Amazing Team</h2>
                <p className="text-base font-normal">
                  Excellent software development partner. Our final mobile app
                  functionality performs very well. Their work methodology is
                  top-notch
                </p>
              </div>
              <div className="flex items-center gap-4 p-10 text-white tracking-widest text-left">
                <div className="bg-black w-72 flex rounded-full gap-2">
                  <img
                    src="./profile.png"
                    className="h-12 gap-2 w-12 object-contain"
                  />
                  <div className="flex flex-col ">
                    <b>Scott McDonald</b>
                    <span className="text_gradient text-xs">
                      Project Manager, Fluttr
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className=" h-96 w-1/5 flex flex-col gap-0">
              <div className="flex gap-4 bg-primary flex-col p-10 text-white tracking-widest text-left">
                <h2 className="text-3xl ">Motivated</h2>
                <p className="text-base font-normal">
                  Excellent software development partner. Our final mobile app
                  functionality performs very well. Their work methodology is
                  top-notch
                </p>
              </div>
              <div className="flex items-center gap-4 p-10 text-white tracking-widest text-left">
                <div className="bg-black w-72 flex rounded-full gap-2">
                  <img
                    src="./profile.png"
                    className="h-12 gap-2 w-12 object-contain"
                  />
                  <div className="flex flex-col ">
                    <b>Scott McDonald</b>
                    <span className="text_gradient text-xs">
                      Project Manager, Fluttr
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default SliderSection;
