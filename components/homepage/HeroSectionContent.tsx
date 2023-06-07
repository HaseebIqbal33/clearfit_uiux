import HexagonBox from "../common/HexagonBox";

const HeroSectionContent = () => {
  return (
    <>
      <div className=" bg-primary lg:px-20 px-0 ">
        <div className="flex md:justify-between justify-center container mx-auto items-center lg:flex-nowrap  flex-wrap relative -top-16 md:-top-28 gap-4 p-2 sm:p-0">
          <HexagonBox source="/react.svg" text="React" />
          <HexagonBox source="/trace.svg" text=".Net" />
          <HexagonBox source="/uxui.svg" text="UX/UI" />
          <HexagonBox source="/aws.svg" text="AWS" />
          <HexagonBox source="/node.svg" text="React" />
          <HexagonBox source="/native.svg" text="React native" />
        </div>
      </div>
      <div className=" bg-primary p-4 min-h-[100px]">
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
