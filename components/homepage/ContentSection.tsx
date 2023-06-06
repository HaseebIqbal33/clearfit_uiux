const ContentSection = () => {
  return (
    <div
      className=" h-auto min-h-[300px] sm:min-h-[500px] relative"
      style={{
        background: "url('white_background.png') ",
      }}
    >
      <div className="container mx-auto">
        <div className="flex justify-end container mx-auto p-4 md:p-28 ">
          <div className="w-full tracking-wides right-to-left flex gap-14 flex-col text-black">
            <div>
              <p className="tracking-widest text-xl  sm:text-3xl uppercase leading-relaxed">
                You’ve tried the rest.
              </p>
              <p className="tracking-widest text-xl  sm:text-3xl uppercase leading-relaxed">
                Now try the best
              </p>
            </div>
            <div>
              <p className="tracking-widest text-xl  sm:text-3xl uppercase leading-relaxed">
                It’s time we talk about your software project
              </p>
            </div>
            <div>
              <p className="tracking-widest text-xl  sm:text-3xl uppercase leading-relaxed">
                It’s overdue.
              </p>
              <p className="tracking-wider text-sm sm:text-base font-normal uppercase leading-relaxed text-sliver_black ">
                (Finally, get a good night’s sleep.)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSection;
