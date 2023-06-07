interface HexgonProps {
  source: any;
  text: string;
  height?: string;
  width?: string;
}

const HexagonBox = ({
  source,
  text,
  height = "h-1/3",
  width = "w-1/3",
}: HexgonProps) => {
  return (
    <div className="polygon_wrapper ">
      <div className="relative">
        <img
          src="/polygon.png"
          className="sm:h-52 sm:w-52 w-36 h-36  object-contain"
        />
        <div className="absolute top-0 flex justify-center items-center flex-col bottom-0 left-0 right-0">
          <img src={source} className={`${height} ${width}`} />
          <span className=" text-xs">{text}</span>
        </div>
      </div>
    </div>
  );
};
export default HexagonBox;
