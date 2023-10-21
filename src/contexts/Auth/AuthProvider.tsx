import { User } from "../Auth/AuthContext";
import { useCallback, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import api from "../../service/api";

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

    const signin = async (email: string, password: string) => {
        const data = await api.signin(email, password);
        if (data.user && data.token) {
            setUser(data.user);
            setToken(data.Token);
            return true;
        }
        return false;
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
