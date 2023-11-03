import { IconProps } from "..";

const edit = ({
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
      viewBox="0 0 24 24"
      fill={color}
    >
      <path
        d="M3 17.25V21H6.75L17.81 9.94004L14.06 6.19004L3 17.25ZM20.71 7.04004C21.1 6.65004 21.1 6.02004 20.71 5.63004L18.37 3.29004C18.2775 3.19733 18.1676 3.12377 18.0466 3.07358C17.9257 3.02339 17.796 2.99756 17.665 2.99756C17.534 2.99756 17.4043 3.02339 17.2834 3.07358C17.1624 3.12377 17.0525 3.19733 16.96 3.29004L15.13 5.12004L18.88 8.87004L20.71 7.04004Z"
        fill="#515151"
      />
    </svg>
  );
};

export default edit;
