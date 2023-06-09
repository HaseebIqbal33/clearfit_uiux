import HexagonBox from "../common/HexagonBox";

const CrossFitContent = () => {
  return (
    <div className=" h-auto min-h-[700px] sm:min-h-[500px] relative bg_responsive">
      <div className="bg_white_left_to_right  min-h-[700px] sm:min-h-[500px]">
        <div className="container mx-auto lg:px-20 px-0">
          <div className="flex justify-end container mx-auto p-8  lg:p-28 ">
            <div className="w-full md:w-1/2 text-xl tracking-widest text-primary right-to-left">
              <h1 className="tracking-widest md:text-3xl text-xl uppercase font-semibold mb-5  ">
                I need my project done fast
                <p className="uppercase leading-loose">
                  and
                  <span className="text_gradient"> good</span>
                </p>
              </h1>
              <p className="text-base md:text-xl mb-2">
                Slow is smooth. Smooth is fast
              </p>
              <p className="text-base md:text-xl mb-2">
                Say goodbye to miscommunication and false starts
              </p>
              <p className="text-base md:text-xl mb-2">
                Say goodbye to churning your budget
              </p>
              <p className="text-base md:text-xl mb-2">
                ClearFit keep you ahead of the curve
              </p>
              <p className="text-base md:text-xl mb-2">Be fast. Be first</p>
            </div>
          </div>
          <div className=" flex items-center absolute md:-bottom-14 -bottom-5 flex-wrap  ">
            <div className="flex flex-col gap-4">
              <HexagonBox
                source={"./engineers.svg"}
                text={"Engineers"}
                height=" h-20"
                width="w-20"
              />
              <HexagonBox
                source={"./ui.svg"}
                text={"UX DESIGNERS"}
                height=" h-20"
                width="w-20"
              />
            </div>
            <div>
              <HexagonBox
                source={"./developers.svg"}
                text={"DEVELOPERS"}
                height="h-20"
                width="w-20"
              />
            </div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default CrossFitContent;
