import { IconProps } from "..";

const Star= ({ size = 24, color = "#ffd239", className }: IconProps) => {
  return (
    <svg
      className={className}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={size}
      height={size}
      viewBox="0,0,256,256"
    >
      <g
        fill={color}
        fill-rule="nonzero"
        stroke="none"
        stroke-width="1"
        stroke-linecap="butt"
        stroke-linejoin="miter"
        stroke-miterlimit="10"
        stroke-dasharray=""
        stroke-dashoffset="0"
        font-family="none"
        font-weight="none"
        font-size="none"
        text-anchor="none"
        className="mix-blend-normal"
      >
        <g transform="scale(5.12,5.12)">
          <path d="M10.2,48.6c-0.2,0 -0.4,-0.1 -0.6,-0.2c-0.3,-0.2 -0.5,-0.7 -0.4,-1.1l4.4,-16.4l-13.2,-10.7c-0.4,-0.2 -0.5,-0.7 -0.4,-1.1c0.1,-0.4 0.5,-0.7 0.9,-0.7l17,-0.9l6.1,-15.9c0.2,-0.3 0.6,-0.6 1,-0.6c0.4,0 0.8,0.3 0.9,0.6l6.1,15.9l17,0.9c0.4,0 0.8,0.3 0.9,0.7c0.1,0.4 0,0.8 -0.3,1.1l-13.2,10.7l4.4,16.4c0.1,0.4 0,0.8 -0.4,1.1c-0.3,0.2 -0.8,0.3 -1.1,0l-14.3,-9.2l-14.3,9.2c-0.2,0.2 -0.3,0.2 -0.5,0.2z"></path>
        </g>
      </g>
    </svg>
  );
};

export default Star;
