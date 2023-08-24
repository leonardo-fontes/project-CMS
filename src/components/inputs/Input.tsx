import React from "react";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

const Input: React.FC<Props> = ({ className, label, ...props }) => {
  return (
    <div className="flex flex-col overflow-hidden gap-2">
      <label htmlFor={props.name}>{label}</label>
      <input className={`rounded-md h-8 ${className}`} {...props} />
    </div>
  );
};

export default Input;
