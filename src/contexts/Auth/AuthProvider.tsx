import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import api, { SigninData } from "../../service/api";
import secureLocalStorage from "react-secure-storage";
import { useLocation, useNavigate } from "react-router-dom";

export const AuthProvider = ({
    children,
}: {
    children: JSX.Element | JSX.Element[];
}) => {
    const [user, setUser] = useState<string | null>(null);
    const { pathname } = useLocation();
    const navigate = useNavigate();

    // persist user
    useEffect(() => {
        const user = secureLocalStorage.getItem("user");
        setUser(user as string);
    }, []);

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

    const signin = async (data: SigninData) => {
        const response = await api.signin(data);
        setUser(secureLocalStorage.getItem("user") as string);
        return response;
    };

    const signout = async () => {
        setUser(null);
        secureLocalStorage.removeItem("token");
        secureLocalStorage.removeItem("user");
    };

    return (
        <AuthContext.Provider value={{ user, signin, signout }}>
            {children}
        </AuthContext.Provider>
    );
};
