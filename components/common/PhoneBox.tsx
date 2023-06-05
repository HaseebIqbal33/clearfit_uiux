import Phone from "./icons/phone";
interface PProps {
  color?: string;
  phoneNumber: string;
  classNames?: string;
}

const PhoneBox = ({
  color,
  phoneNumber,
  classNames = "text-primary",
}: PProps) => {
  return (
    <div className="flex gap-4 items-center">
      <Phone color={color} />
      <span className={` ${classNames} text-base  font-semibold`}>
        {phoneNumber}
      </span>
    </div>
  );
};

export default PhoneBox;
