import EmailBox from "../common/EmailBox";
import PhoneBox from "../common/PhoneBox";
import FacebookSVG from "../common/icons/FacebookSVG";
import InstaSVG from "../common/icons/InstaSVG";
import LinkedinSVG from "../common/icons/LinkedinSVG";
import TwitterSVG from "../common/icons/TwitterSVG";

const ContactForm = () => {
  return (
    <div
      className=" h-auto min-h-[700px] sm:min-h-[500px] relative"
      style={{
        background: "url('white_background.png') ",
      }}
    >
      <div className="container mx-auto flex md:flex-row flex-col p-10 md:p-28 gap-14 md:gap-6 ">
        <div className="md:w-1/2 w-full  flex flex-col gap-6">
          <h2 className="text-3xl uppercase text-primary ">Drop us a line.</h2>
          <p className="text-xl text-black font-medium max-w-[380px]">
            Staying ahead of your competition is hard. We know this challenge
            very well. Let&apos;s work together to find the solution that&apos;s
            right for you.
          </p>
          <PhoneBox color="#C1292A" phoneNumber="614. 470. 4134" />
          <EmailBox color="#C1292A" email="info@clearfitllc.com" />

          <div className="flex gap-5">
            <FacebookSVG color="#C1292A" height="24" width="24" />
            <TwitterSVG color="#C1292A" height="22" width="22" />
            <LinkedinSVG color="#C1292A" height="22" width="22" />
            <InstaSVG color="#C1292A" height="22" width="22" />
          </div>
        </div>
        <div className="md:w-1/2 w-full flex justify-center items-center">
          <div
            className="bg-white w-full md:w-4/5 mx-auto flex flex-col p-4 md:p-14 gap-6 rounded-xl"
            style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
          >
            <div className="flex flex-col gap-2 ">
              <label className="text-primary font-semibold">Name</label>
              <input
                type="text"
                className=" bg-grey h-16 rounded-md pt-4 pl-2"
                placeholder="Enter Name..."
              />
            </div>
            <div className="flex flex-col gap-2 ">
              <label className="text-primary font-semibold">Email</label>
              <input
                type="text"
                className=" bg-grey h-16 rounded-md pt-4 pl-2"
                placeholder="Enter Email..."
              />
            </div>
            <div className="flex flex-col gap-2 ">
              <label className="text-primary font-semibold">Message</label>
              <textarea
                placeholder="Enter Message..."
                className=" bg-grey h-36 rounded-md  pt-4 pl-2"
              ></textarea>
            </div>
            <button
              className=" p-2 pl-3 pr-3 lg:w-80 w-full text-center mx-auto font-semibold tracking-widest text-white"
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
    </div>
  );
};
export default ContactForm;
