import React from "react";
import { Outlet } from "react-router-dom";

const Plataform: React.FC = () => {
    return (
        <div className="w-full min-[1920px]:container bg-[#FAFBFC] min-[1920px]:mx-auto px-[60px] pt-[45px] pb-20 grid grid-cols-12 gap-8">
            <Outlet />
        </div>
    );
};

export default Plataform;
