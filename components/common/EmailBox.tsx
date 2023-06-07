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
      <a
        href={`mailto: ${email}`}
        className={` ${classNames} text-base font-semibold uppercase text-widest`}
      >
        {email}
      </a>
    </div>
  );
};

export default EmailBox;
