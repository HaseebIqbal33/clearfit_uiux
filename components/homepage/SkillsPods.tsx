import SkillPodsBox from "../common/SkillPodsBox";

const SkillsPods = () => {
  return (
    <div
      className="bg-black"
      style={{
        background: "url('skillspods_bg.png') repeat ",
      }}
    >
      <div className="container mx-auto flex gap-10 flex-col sm:p-20 p-10 w-full">
        <div className="uppercase mx-auto font-semibold justify-center items-center flex sm:flex-row flex-col  text-4xl text-center text-white">
          What are &nbsp;
          <SkillPodsBox text={"?"} />
        </div>
        <div className="font-light text-white text-xl  text-center tracking-widest flex flex-col ">
          <div className="flex gap-2 sm:flex-row flex-wrap justify-center">
            <img src="./circle.png" className="h-10 w-10" alt="" />
            <span className="uppercase w-28">SkillPods</span>
            <p>
              are diverse, agile, skilled “Dev Units” or “IT teams” tailored to
            </p>
          </div>
          <p>
            are diverse, agile, skilled “Dev Units” or “IT teams” tailored to
            deliver the value and features you want. They’re robust, smart teams
            that can thrive in any environment and handle any job or problem
            thrown at them
          </p>
        </div>
        <p className="font-light text-white text-xl text-center tracking-widest">
          <span className=" font-semibold">Seasoned software engineers</span>{" "}
          that can take a straight line to the solution you need aren’t easy to
          find. But we found them.
        </p>
        <p className="font-light text-white text-xl mx-auto  text-center tracking-widest max-w-[800px]">
          <span className="font-semibold">The best UX designers </span>that will
          design your website to look amazing. Moreover, your site will be
          user-friendly, intuitive, and lightning-fast.
        </p>
        <p className="font-light text-white text-xl  text-center tracking-widest">
          <span className="font-semibold">Top-tier project managers</span> that
          drive your project from conception to completion, with any necessary
          hand-holding along the way.
        </p>
        <p className=" font-light text-white text-3xl  text-center tracking-widest">
          Bottom line, we are hire SKILL
        </p>
      </div>
    </div>
  );
};

export default SkillsPods;
