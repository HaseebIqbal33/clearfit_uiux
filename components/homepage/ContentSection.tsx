const ContentSection = () => {
  return (
    <div
      className=" h-auto min-h-[700px] sm:min-h-[500px] relative"
      style={{
        background: "url('white_background.png') ",
      }}
    >
      <div className="container mx-auto">
        <div className="flex justify-end container mx-auto pl-4 pr-4 md:p-28 pt-6 pt-6 ">
          <div className="w-full  text-xl tracking-widest text-primary right-to-left flex gap-14 flex-col">
            <div>
              <p className="tracking-widest text-3xl uppercase leading-relaxed">
                You’ve tried the rest. Now try the best
              </p>
              <p className="tracking-widest text-3xl uppercase leading-relaxed">
                It’s time we talk about your software project
              </p>
            </div>
            <div>
              <p className="tracking-widest text-3xl uppercase leading-relaxed">
                It’s overdue.
              </p>
              <p className="tracking-wider text-xl font-medium uppercase leading-relaxed ">
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
