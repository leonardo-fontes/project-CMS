import React from "react";
import FormForgotPassword from "../components/forms/FormForgotPassword";

const ForgotPassword: React.FC = () => {
    return (
        <div className="w-full flex relative h-screen bg-gradient-to-br from-gradient to-primary">
            <FormForgotPassword />
            <div className="absolute w-11/12 left-[4%] md:left-[22%] top-[1.7rem] md:top-[1rem] lg:top-[10%] md:w-[500px] lg:left-[35%] lg:right-[50%]" />
        </div>
    );
};

export default ForgotPassword;
