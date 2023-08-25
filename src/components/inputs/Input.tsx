import React from "react";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
    label: string;
};

const Input: React.FC<Props> = ({ className, label, ...props }) => {
    return (
        <div className="flex flex-col gap-1">
            <label htmlFor={props.name}>{label}</label>
            <input
                className={`rounded-md h-10 focus-visible:outline-none border-[#ADADAD] font-light text-[14px] border-[1px]  
                            py-[25px] px-[25px] focus:shadow-input focus:border-[#4285F4] transition-all duration-500 placeholder:text-[#808080] 
                            ${className}`}
                {...props}
            />
        </div>
    );
};

export default Input;
