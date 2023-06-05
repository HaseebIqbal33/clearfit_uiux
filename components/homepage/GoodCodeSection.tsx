const GoodCodeContent = () => {
  return (
    <div className="container mx-auto p-4 sm:p-16">
      <div className="flex sm:p-10 p-2 flex-col sm:flex-row justify-evenly gap-10 tracking-widest">
        {/* Left card */}
        <div className="flex items-center flex-col w-full sm:h-[400px] h-auto sm:w-[500px] bg-primary p-11 gap-8 justify-center  rounded-md">
          <h4 className="uppercase text-white font-normal text-3xl">
            i’M mAXED oUT.
          </h4>
          <p className=" text-white text-2xl font-medium text-center">
            I need someone <span className="font-bold text_gradient">GOOD</span>{" "}
            to do our heavy lifting.
          </p>
          <p className=" text-center text-silver_grey text-3xl font-light">
            (And I Don’t Have Time to Find Them)
          </p>
        </div>
        {/* Right card */}
        <div className="flex items-center flex-col  sm:h-[400px]  h-auto sm:w-[500px] bg-primary p-11 gap-8 justify-center  rounded-md">
          <h4 className="uppercase text-white font-normal text-3xl text-center">
            I Don’t Know What I Need.
          </h4>
          <p className=" text-white text-2xl font-medium text-center ">
            I need &nbsp;
            <span
              className="font-bold text_gradient"
              style={{ color: "#D0631A" }}
            >
              GOOD
            </span>{" "}
            advice
          </p>
          <p className="text-silver_grey font-normal text-3xl text-center font-light">
            (And I Don’t Know Who to Trust)
          </p>
        </div>
      </div>
      <h1 className="uppercase text-center text-primary text-5xl mt-6 mb-6 font-semibold">
        Good Code{" "}
      </h1>
    </div>
  );
};
export default GoodCodeContent;
