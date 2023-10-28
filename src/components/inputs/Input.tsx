import React from "react";
import { UseFormRegister } from "react-hook-form";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
    label: string;
    name: string;
    containerClassName?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    register: UseFormRegister<any>;
};

const Input: React.FC<Props> = ({
    containerClassName,
    className,
    label,
    name,
    register,
    ...props
}) => {
    return (
        <div className={`flex flex-col gap-1 ${containerClassName}`}>
            <label htmlFor={name}>{label}</label>
            <input
                {...register(name)}
                {...props}
                className={`rounded-md mt-1 h-10 focus-visible:outline-none border-gray-3 font-light text-[14px] border-[1px]  
                            py-[23px] px-[23px] focus:shadow-input transition-all duration-500 placeholder:text-[#808080] 
                            ${className}`}
            />
        </div>
    );
};

export default Input;
