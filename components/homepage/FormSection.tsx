import SkillPodsBox from "../common/SkillPodsBox";

const FormSection = () => {
  return (
    <div className="bg-primary">
      <div className="container mx-auto p-10">
        <div className="text-center text-white text-4xl tracking-widest font-normal mb-8 flex justify-center">
          Let’s chat & develop your
        </div>

        <div className=" flex justify-between lg:justify-start xl:justify-center  flex-wrap gap-4">
          <div className="bg-sliver_black lg:w-72 w-full flex flex-row sm:flex-col gap-1 p-2 rounded-xl items-center sm:items-start h-16">
            <span className="text-white text-base font-semibold">Date</span>
            <input
              type="date"
              id="date"
              className="bg-sliver_black text-white text-sm w-full md:text-base date-input focus:outline-none "
            />
          </div>
          <div className="flex lg:gap-2 gap-2 justify-between w-full lg:w-auto">
            <div className="bg-sliver_black w-1/2 md:w-72 flex flex-row sm:flex-col gap-1  p-2 items-center sm:items-start rounded-xl  h-16 sm:w-full">
              <span className="text-white text-base font-semibold">From</span>
              <input
                type="time"
                className="bg-sliver_black text-white md:text-base  text-xs w-full focus:outline-none"
              />
            </div>

            <div className="bg-sliver_black w-1/2  md:w-72 flex flex-row sm:flex-col rounded-xl items-center sm:items-start gap-1 p-2 h-16 sm:w-full ">
              <span className="text-white text-base font-semibold ml-1">
                To
              </span>
              <input
                type="time"
                className="bg-sliver_black text-white md:text-base text-xs w-full focus:outline-none"
              />
            </div>
          </div>

          <button
            className=" p-3 pl-3 pr-3 lg:w-72 w-full font-semibold tracking-widest text-white"
            style={{
              background:
                "linear-gradient(96.73deg, #C1292A 27.66%, #D0631A 85.99%)",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.65)",
              borderRadius: "10px",
            }}
          >
            SCHEDULE NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormSection;
