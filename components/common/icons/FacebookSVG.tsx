interface FPROPS {
  color: string;
  height: string;
  width: string;
}

const FacebookSVG = ({ color, height, width }: FPROPS) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 7.13309C0 10.6063 2.73413 13.4944 6.31002 14.0801V9.03445H4.41701V7.09408H6.31002V5.54144C6.31002 3.79494 7.52975 2.82504 9.25491 2.82504C9.80135 2.82504 10.3907 2.90247 10.9372 2.9799V4.76541H9.96983C9.04415 4.76541 8.83403 5.19214 8.83403 5.73588V7.09408H10.8532L10.5169 9.03445H8.83403V14.0801C12.4099 13.4944 15.144 10.6069 15.144 7.13309C15.144 3.26924 11.7366 0.108063 7.57202 0.108063C3.40741 0.108063 0 3.26924 0 7.13309Z"
        fill={color}
      />
    </svg>
  );
};
export default FacebookSVG;
