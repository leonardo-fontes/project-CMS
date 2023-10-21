import axios from "axios";
import secureLocalStorage from "react-secure-storage";

export type SigninData = {
    email: string;
    password: string;
};

export type SignupData = SigninData & {
    first_name: string;
    last_name: string;
    username: string;
    birthdate: string;
    mobilelogin: string;
};

const apiV2 = axios.create({
    baseURL: "https://dev.acesseme.i9cloud.intercompany.com.br/backend-demo",
    headers: {
        x_ic_auth:
            "ca7f820238563a2471629e5c348d5b4dc54c1d590bd9e9ad1e64af28e24510a4",
    },
});

export default {
    validateToken: async (token: string) => {
        const response = await apiV2.post("/validate", { token });
        return response.data;
    },
    signin: async (data: SigninData) => {
        try {
            const response = await apiV2.post("/auth", data);
            apiV2.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${response.data.token}`;
            secureLocalStorage.setItem("token", response.data.token);
            return true;
        } catch (e) {
            return false;
        }
    },
    signup: async (data: SignupData) => {
        const response = await apiV2.post("/user", data);
        delete apiV2.defaults.headers.common.Authorization;
        secureLocalStorage.removeItem("token");
        return response.data;
    },
    logout: async () => {
        const response = await apiV2.post("/logout");
        return response.data;
    },
};
