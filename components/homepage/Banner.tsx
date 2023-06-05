const Banner = () => {
  return (
    <div className=" bg-primary p-10">
      <div className="flex justify-between container mx-auto text-center">
        <div className="flex flex-wrap gap-6 items-center justify-center font-normal text-white text-2xl tracking-widest uppercase mx-auto ">
          <p className=" break-all">It’s Time to Get GOOD</p>
          <button
            className=" p-2 pl-3 pr-3 sm:w-80 w-full font-medium text-white tracking-widest"
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
  );
};

export default Banner;
