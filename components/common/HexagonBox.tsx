interface HexgonProps {
  source: any;
  text: string;
  height?: string;
  width?: string;
}

const HexagonBox = ({
  source,
  text,
  height = "h-40",
  width = "w-40",
}: HexgonProps) => {
  return (
    <div className="polygon_wrapper">
      <div
        className={`hexagon  ${
          height + " " + width
        }  flex justify-center items-center flex-col bg-white gap-2 rounded-3xl`}
      >
        <img src={source} className="h-12 w-12 object-contain  " />
        <p className="text-sm text-primary font-semibold">{text}</p>
      </div>
    </div>
  );
};
export default HexagonBox;
