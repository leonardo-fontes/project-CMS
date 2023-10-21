import { User } from "../Auth/AuthContext";
import { useCallback, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import api, { SigninData } from "../../service/api";

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
    const [user, setUser] = useState<User | null>(null);

    const validateToken = useCallback(async () => {
        const storageData = localStorage.getItem("authToken");
        if (storageData) {
            const data = await api.validateToken(storageData);
            if (data.user) {
                setUser(data.user);
            }
        }
    }, []);

    useEffect(() => {
        validateToken();
    }, [validateToken]);

    const signin = async (data: SigninData) => {
        return await api.signin(data);
    };

    const signout = async () => {
        setUser(null);
        setToken("");
        await api.logout();
    };

    const setToken = (token: string) => {
        localStorage.setItem("authToken", token);
    };

    return (
        <AuthContext.Provider value={{ user, signin, signout }}>
            {children}
        </AuthContext.Provider>
    );
};
