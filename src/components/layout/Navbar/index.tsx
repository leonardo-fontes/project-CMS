import React from "react";
import { useLocation } from "react-router-dom";
import Plataform from "./Plataform";
import Web from "./Web";

const Navbar: React.FC = () => {
    const { pathname } = useLocation();
    return pathname.includes("plataform") || pathname.includes("empresa") ? <Plataform /> : <Web />;
};

export default Navbar;
