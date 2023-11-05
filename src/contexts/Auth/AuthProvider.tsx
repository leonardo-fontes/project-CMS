import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import api, { SigninData } from "../../service/api";
import secureLocalStorage from "react-secure-storage";
import { useLocation, useNavigate } from "react-router-dom";
import { UserProfile } from "../../types/User";

export const AuthProvider = ({
    children,
}: {
    children: JSX.Element | JSX.Element[];
}) => {
    const [user, setUser] = useState<UserProfile | string | null>(null);
    const { pathname } = useLocation();
    const navigate = useNavigate();

    // persist user
    useEffect(() => {
        if (!user && secureLocalStorage.getItem("user")) getUser();
    }, [user]);

    // validate user
    useEffect(() => {
        if (
            pathname.startsWith("/plataform") &&
            !(user || secureLocalStorage.getItem("user"))
        ) {
            navigate("/login");
        } else if (pathname === "/plataform") {
            navigate("/plataform/me");
        } else if (
            ["login", "register"].filter((page) => pathname.includes(page))
                .length &&
            (user || secureLocalStorage.getItem("user"))
        ) {
            navigate("/plataform");
        }
    }, [navigate, pathname, user]);

    const getUser = async () => {
        const user = await api.getUser();
        setUser(user);
    };

    const signin = async (data: SigninData) => {
        const response = await api.signin(data);
        getUser();
        return response;
    };

    const signout = async () => {
        secureLocalStorage.removeItem("token");
        secureLocalStorage.removeItem("user");
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, setUser, signin, signout }}>
            {children}
        </AuthContext.Provider>
    );
};
