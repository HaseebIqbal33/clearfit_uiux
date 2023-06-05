const SignatureSection = () => {
  return (
    <div className="container mx-auto flex sm:flex-row flex-col  gap-14 p-4 sm:p-20">
      <div className="sm:w-1/5 w-full">
        <img src="./profile.png" className="h-36 w-36 object-contain" />
      </div>
      <div className="sm:w-4/5 w-full flex flex-col gap-20">
        <p className="font-medium text-3xl uppercase tracking-widest">
          The most important aspect of software development isn’t programming.
          It’s communication. Let’s talk.
        </p>
        <div className="flex justify-between items-center">
          <div className="flex gap-4">
            <b className="font-bold">Jason C. Maynard</b>
            <span>Founder</span>
          </div>
          <img src="./signature.png" className="h-28 w-28 object-contain" />
        </div>
      </div>
    </div>
  );
};

export default SignatureSection;
