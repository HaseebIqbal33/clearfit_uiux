const HeroSection = () => {
  const texts = ["", " ", " "];
  return (
    <div className="min-h-[550px] sm:min-h-[550px] bg_responsive relative">
      <div className="bg_white  min-h-[550px] sm:min-h-[550px]">
        <div className="container mx-auto">
          <div className="flex items-center  ">
            <div className=" w-full  flex  gap-5 flex-col p-20">
              <div className="flex flex-col gap-0">
                <p className="tracking-widest font-medium text-primary sm:text-3xl text-2xl uppercase ">
                  When you’re building software.
                </p>
                <p className="tracking-widest font-medium text-primary  sm:text-3xl text-2xl uppercase ">
                  it needs to be{" "}
                  <span className="font-bold text_gradient">good.</span>
                </p>
              </div>
              <p className="tracking-widest font-medium text-primary  sm:text-3xl text-2xl uppercase sm:leading-extra-loose-80 leading-10">
                Stop settling for less.
              </p>

              <p className=" text-primary font-semibold  sm:text-xl text-sm tracking-widest uppercase leading-10 ">
                Schedule a call. It’s that simple.
              </p>
              <button
                className=" p-2 pl-3 pr-3 sm:w-80 w-full font-semibold  text-white tracking-widest"
                style={{
                  background:
                    "linear-gradient(96.73deg, #C1292A 27.66%, #D0631A 85.99%)",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.65)",
                  borderRadius: "10px",
                }}
              >
                GET IN TOUCH
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
