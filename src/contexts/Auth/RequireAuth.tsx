import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import {useNavigate } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";

export const RequireAuth = ({children} :  {children: JSX.Element}) => {

    const auth = useContext(AuthContext);
    //verificar o locastorage
    const navigate = useNavigate();
    if(!secureLocalStorage.getItem("token")) {
        navigate("/login")
    }

    return children;
}