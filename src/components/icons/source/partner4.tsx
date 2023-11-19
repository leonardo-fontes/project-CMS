import { IconProps } from "..";

const Partner4 = ({
  size = 24,
  color = "#ffd239",
  className,
}: IconProps) => {
  return (
    <svg className={className}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size * 0.5}
      viewBox="0 0 150 27"
      fill={color}
    >
      <rect width="150" height="27" fill="url(#pattern0)" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use transform="scale(0.00666667 0.037037)" />
        </pattern>
        <image id="image0_406_848" width="150" height="27" />
      </defs>
    </svg>
  );
};

export default Partner4;
