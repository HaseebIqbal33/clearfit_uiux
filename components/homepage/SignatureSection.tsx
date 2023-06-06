const SignatureSection = () => {
  return (
    <div className="container mx-auto flex md:flex-row flex-col-reverse  gap-4 p-10 md:p-20">
      <div className="sm:w-1/5 w-full ">
        <img
          src="./profile.png"
          className="h-36 w-36 object-contain -mt-32 md:-mt-0"
        />
      </div>
      <div className="sm:w-4/5 w-full flex flex-col gap-8">
        <p className="font-medium md:text-3xl text-base uppercase tracking-widest">
          The most important aspect of software development isn’t programming.{" "}
        </p>
        <p className="font-medium md:text-3xl text-base uppercase tracking-widest">
          It’s communication. Let’s talk.
        </p>
        <div className="flex justify-between gap-3 items-start md:items-center flex-col md:flex-row">
          <div className="flex gap-4">
            <b className="font-bold uppercase">Jason C. Maynard</b>
            <span>Founder</span>
          </div>
          <img
            src="./signature.png"
            className="h-28 w-28 object-contain z-10 ml-28 md:ml-0"
          />
        </div>
      </div>
    </div>
  );
};

export default SignatureSection;
