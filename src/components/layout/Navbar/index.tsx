import React, { useMemo } from "react";
import { useLocation } from "react-router-dom";
import Plataform from "./Plataform";
import Web from "./Web";

const Navbar: React.FC = () => {
    const { pathname } = useLocation();
    const Navbar = useMemo(
        () => (pathname.includes("plataform") ? Plataform : Web),
        [pathname],
    );
    return !pathname.includes("404-page") ? <Navbar /> : null;
};

export default Navbar;
