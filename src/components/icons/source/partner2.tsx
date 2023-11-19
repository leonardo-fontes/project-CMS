import { IconProps } from "..";

const Partner2 = ({
  size = 24,
  color = "#ffd239",
  className,
}: IconProps) => {
  return (
    <svg className={className}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size * 0.25}
      viewBox="0 0 120 47"
      fill={color}
    >
      <rect width="120" height="46.7257" fill="url(#pattern0)" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use transform="scale(0.00442478 0.0113636)" />
        </pattern>
        <image id="image0_406_846" width="226" height="88" />
      </defs>
    </svg>
  );
};

export default Partner2;
