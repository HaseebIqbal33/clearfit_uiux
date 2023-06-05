import { Content } from "next/font/google";
import HexagonBox from "../common/HexagonBox";
import SkillPodsImage from "../common/SkillPodsImage";

const HeroSectionContent = () => {
  return (
    <>
      <div className=" bg-primary ">
        <div className="flex justify-between container mx-auto items-center flex-wrap relative -top-20 gap-4 p-2 sm:p-0">
          <HexagonBox source="/react.svg" text="React" />
          <HexagonBox source="/trace.svg" text=".Net" />
          <HexagonBox source="/uxui.svg" text="React" />
          <HexagonBox source="/aws.svg" text="AWS" />
          <HexagonBox source="/node.svg" text="React" />
          <HexagonBox source="/native.svg" text="React native" />
        </div>
      </div>
      <div className=" bg-primary p-4">
        <div className="flex justify-between container mx-auto  text-left lg:text-center">
          <div className="flex  font-normal text-white text-2xl tracking-widest uppercase mx-auto gap-3 ">
            <div className=" break-all flex gap-2 items-start lg:items-center lg:flex-row flex-col text-silver_grey">
              Get the DEV team you deserve with ClearFit
              <div className="flex gap-2 ">
                <img src="./circle.png" alt="" />
                <span>SkillPods</span>
              </div>
              We&apos;re GOOD
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSectionContent;
