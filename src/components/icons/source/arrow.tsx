import { IconProps } from "..";

const Arrow = ({ size = 12, color = "#800D0D", className }: IconProps) => {
  return (
    <svg className={className}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
    >
      <path
        d="M9.99984 6L8.58984 7.41L13.1698 12L8.58984 16.59L9.99984 18L15.9998 12L9.99984 6Z"
        fill="black"
      />
    </svg>
  );
};

export default Arrow;
