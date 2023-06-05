const SecondBanner = () => {
  return (
    <div className=" bg-primary p-14">
      <div className="flex justify-between container mx-auto text-center">
        <div className="flex flex-wrap gap-6 items-center justify-center font-normal text-white text-2xl tracking-widest uppercase mx-auto ">
          <div className=" break-all flex sm:flex-row  flex-col">
            with our &nbsp;
            <div className="flex gap-2 flex-row ">
              <img src="./circle.png" alt="" />
              <span>SkillPods</span>
            </div>{" "}
            , we’re reDefining
            <span className="text_gradient">&nbsp; good.</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SecondBanner;
