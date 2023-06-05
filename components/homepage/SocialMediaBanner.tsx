import FacebookSVG from "../common/icons/FacebookSVG";
import InstaSVG from "../common/icons/InstaSVG";
import LinkedinSVG from "../common/icons/LinkedinSVG";
import TwitterSVG from "../common/icons/TwitterSVG";

const SocialMediaBanner = () => {
  return (
    <div className=" bg-black p-10">
      <div className="flex justify-between container mx-auto text-center">
        <div className="flex flex-wrap gap-6 items-center justify-center font-normal text-white text-2xl tracking-widest uppercase mx-auto ">
          <p className=" break-all text-silver_grey">Follow us on social</p>
          <div className="flex gap-5">
            <FacebookSVG color="#D9D9D9" height="24" width="24" />
            <TwitterSVG color="#D9D9D9" height="24" width="24" />
            <LinkedinSVG color="#D9D9D9" height="24" width="24" />
            <InstaSVG color="#D9D9D9" height="24" width="24" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default SocialMediaBanner;
