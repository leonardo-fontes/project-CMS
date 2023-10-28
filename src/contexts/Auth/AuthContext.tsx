import { createContext } from "react";
import { SigninData } from "../../service/api";

export type User = {
    id: number;
    name: string;
    email: string;
    password?: string;
};

export type AuthContextType = {
    user: string | null;
    signin: (data: SigninData) => Promise<boolean>;
    signout: () => void;
};

export const AuthContext = createContext<AuthContextType>(null!);
