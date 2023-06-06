import SkillPodsBox from "../common/SkillPodsBox";

const SecondBanner = () => {
  return (
    <div className=" bg-primary p-14">
      <div className="flex xl:justify-between justify-end container mx-auto  text-center">
        <div className="flex flex-wrap gap-6 items-center justify-center font-normal md:w-auto xl:w-full text-white text-2xl tracking-widest uppercase  ">
          <div className=" flex xl:flex-row flex-col items-end">
            with our&nbsp;
            <SkillPodsBox />, we’re reDefining
            <span className="text_gradient">&nbsp; good.</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SecondBanner;
