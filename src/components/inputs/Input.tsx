import React from "react";
import { UseFormRegister } from "react-hook-form";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
    label: string;
    name: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    register: UseFormRegister<any>;
};

const Input: React.FC<Props> = ({
    className,
    label,
    name,
    register,
    ...props
}) => {
    return (
        <div className="flex flex-col gap-1">
            <label htmlFor={name}>{label}</label>
            <input
                {...register(name)}
                {...props}
                className={`rounded-md h-10 focus-visible:outline-none border-[#ADADAD] font-light text-[14px] border-[1px]  
                            py-[25px] px-[25px] focus:shadow-input focus:border-[#4285F4] transition-all duration-500 placeholder:text-[#808080] 
                            ${className}`}
            />
        </div>
    );
};

export default Input;
