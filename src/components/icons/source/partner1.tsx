import { IconProps } from "..";

const Partner1= ({
  size = 24,
  color = "#ffd239",
  className,
}: IconProps) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill={color}
    >
      <rect width={size} height={size} fill="url(#pattern0)" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use transform="scale(0.0025)" />
        </pattern>
        <image id="image0_406_845" width="400" height="400" />
      </defs>
    </svg>
  );
};

export default Partner1;
