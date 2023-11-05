import { createContext } from "react";
import { SigninData } from "../../service/api";
import { UserProfile } from "../../types/User";

export type User = {
    id: number;
    name: string;
    email: string;
    password?: string;
};

export type AuthContextType = {
    user: UserProfile | string | null;
    setUser: React.Dispatch<React.SetStateAction<string | UserProfile | null>>;
    signin: (data: SigninData) => Promise<boolean>;
    signout: () => void;
};

export const AuthContext = createContext<AuthContextType>(null!);
