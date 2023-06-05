import Letter from "./icons/letter";

interface EmailProps {
  color?: string;
  email: string;
  classNames?: string;
}

const EmailBox = ({
  color,
  email,
  classNames = "text-primary",
}: EmailProps) => {
  return (
    <div className="flex gap-4 items-center">
      <Letter color={color} />
      <span
        className={` ${classNames} text-base font-semibold uppercase text-widest`}
      >
        {email}
      </span>
    </div>
  );
};

export default EmailBox;
