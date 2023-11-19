import { IconProps } from "..";

const Partner3 = ({
  size = 24,
  color = "#ffd239",
  className,
}: IconProps) => {
  return (
    <svg className={className}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size * 0.5}
      viewBox="0 0 250 47"
      fill={color}
    >
      <rect width="250" height="46.6667" fill="url(#pattern0)" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use transform="scale(0.00333333 0.0178571)" />
        </pattern>
        <image id="image0_406_847" width="300" height="56" />
      </defs>
    </svg>
  );
};

export default Partner3;
