const FormSection = () => {
  return (
    <div className="bg-primary">
      <div className="container mx-auto p-10">
        <h1
          className="text-center text-white text-4xl tracking-widest font-normal mb-4
        "
        >
          Let’s chat & develop your
        </h1>

        <div className=" flex justify-between flex-wrap gap-4">
          <div className="bg-sliver_black w-80 flex gap-2 flex-col p-2 rounded-xl">
            <span className="text-white text-sm">Date</span>
            <input
              type="text"
              className="bg-sliver_black text-white text-base"
              value={"Mon, 27 July 2022"}
            />
          </div>
          <div className="bg-sliver_black w-80 flex gap-2 flex-col p-2 rounded-xl">
            <span className="text-white text-sm">From</span>
            <input
              type="text"
              className="bg-sliver_black text-white text-base"
              value={"07:00 AM"}
            />
          </div>

          <div className="bg-sliver_black w-80 flex gap-2 flex-col p-2 rounded-xl">
            <span className="text-white text-sm">To</span>
            <input
              type="text"
              className="bg-sliver_black text-white text-base"
              value={"12:00 AM"}
            />
          </div>

          <button
            className=" p-2 pl-3 pr-3 w-80 font-semibold tracking-widest text-white"
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
