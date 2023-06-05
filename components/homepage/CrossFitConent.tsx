import HexagonBox from "../common/HexagonBox";
import SkillPodsImage from "../common/SkillPodsImage";

const CrossFitContent = () => {
  return (
    <div
      className=" h-auto min-h-[700px] sm:min-h-[500px] relative"
      style={{
        background: "url('white_background.png') ",
      }}
    >
      <div className="container mx-auto">
        <div className="flex justify-end container mx-auto p-4 md:p-28 ">
          <div className="w-full md:w-1/2 text-xl tracking-widest text-primary right-to-left">
            <h1 className="tracking-widest text-3xl uppercase">
              I need my project done fast. and{" "}
              <span className="text_gradient">good</span>
            </h1>
            <p className="">Slow is smooth. Smooth is fast</p>
            <p>Say goodbye to miscommunication and false starts</p>
            <p> Say goodbye to churning your budget</p>
            <p>ClearFit keep you ahead of the curve. Be fast. Be first</p>
          </div>
        </div>
        <div className=" flex items-center absolute  -bottom-10 flex-wrap  ">
          <div className="flex flex-col gap-4">
            <HexagonBox
              source={"./developers.svg"}
              text={"Engineers"}
              height=" h-44"
              width="w-44"
            />
            <HexagonBox
              source={"./ui.svg"}
              text={"UX DESIGNERS"}
              height="h-44"
              width="w-44"
            />
          </div>
          <div>
            <HexagonBox
              source={"./developers.svg"}
              text={"DEVELOPERS"}
              height="h-44"
              width="w-44"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrossFitContent;
