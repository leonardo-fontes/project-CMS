import { IconProps } from "..";

const Clear = ({ size = 12, color = "#800D0D", className }: IconProps) => {
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 12 12"
            fill="none"
        >
            <path
                d="M9.5 3.205L8.795 2.5L6 5.295L3.205 2.5L2.5 3.205L5.295 6L2.5 8.795L3.205 9.5L6 6.705L8.795 9.5L9.5 8.795L6.705 6L9.5 3.205Z"
                fill={color}
            />
        </svg>
    );
};

export default Clear;
