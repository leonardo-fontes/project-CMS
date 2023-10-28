import axios, { AxiosError } from "axios";
import secureLocalStorage from "react-secure-storage";
import { CircleProfessionals } from "../types/CircleProfessionals";
import { RegisterData } from "../components/forms/FormRegister";
import { format } from "date-fns";

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

const token = secureLocalStorage.getItem("token");

const api = axios.create({
    baseURL: "https://acesseme.i9cloud.intercompany.com.br/nodered",
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        Authorization: token ? `Bearer ${token}` : null,
    },
});

export default {
    validateToken: async (token: string) => {
        const response = await api.post("/validate", { token });
        return response.data;
    },
    signin: async (data: SigninData) => {
        try {
            const response = await api.post("/auth", data);
            api.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${response.data.token}`;
            secureLocalStorage.setItem("token", response.data.token);
            secureLocalStorage.setItem("user", response.data.id);
            return true;
        } catch (e) {
            return false;
        }
    },
    register: async (data: RegisterData) => {
        const time_created = format(new Date(), "dd/MM/yyyy HH:mm:ss");
        const body = {
            type: "user",
            username: data.username,
            email: data.email,
            name: data.name,
            password: data.password,
            time_created,
            photo_profile: "",
            photo_cover: "",
            infos_about: {
                about: "",
                beapart: "",
                biography: "",
                birthdate: data.birthdate,
                cause: "",
                commercialpartner: "",
                disability: null,
                gender: "",
                interests: "",
                location: "",
                mobilelogin: data.mobilelogin,
                profession: "",
                studies: "",
                challenge: null,
                adaptations: null,
                social_networks: null,
                theinterests: "",
            },
        };
        try {
            const response = await api.post("/crud/v1/users", body);
            console.log(response.data);
            return true;
        } catch (e) {
            return false;
        }
    },
    async getUser() {
        try {
            const user = secureLocalStorage.getItem("user");
            const response = await api.get(`/crud/v1/users/${user}`);
            const life = await api.get(`/crud/v1/${user}/life/_id/50/0`);
            const circleProfessionals = (
                await api.get<CircleProfessionals[]>(
                    `/crud/v1/${user}/circles/_id/50/0`,
                )
            ).data.filter(({ subtype }) => subtype === "circles_professionals");
            return {
                ...response.data,
                life: life.data,
                circleProfessionals,
            };
        } catch (err) {
            const error = err as AxiosError;
            return { error: error.message };
        }
    },
};
