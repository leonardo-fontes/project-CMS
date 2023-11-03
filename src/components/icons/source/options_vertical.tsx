import { IconProps } from "..";

const option_vertical = ({ size = 24, color = "#ffd239", className }: IconProps) => {
  return (
    <svg className={className}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
    >
      <g id="actions/option_vertical">
        <g id="Icon">
          <path
            d="M10 12C10 13.1046 10.8954 14 12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12Z"
            fill="#4D555E"
          />
          <path
            d="M10 6C10 7.10457 10.8954 8 12 8C13.1046 8 14 7.10457 14 6C14 4.89543 13.1046 4 12 4C10.8954 4 10 4.89543 10 6Z"
            fill="#4D555E"
          />
          <path
            d="M10 18C10 19.1046 10.8954 20 12 20C13.1046 20 14 19.1046 14 18C14 16.8954 13.1046 16 12 16C10.8954 16 10 16.8954 10 18Z"
            fill="#4D555E"
          />
        </g>
      </g>
    </svg>
  );
};

export default option_vertical;
