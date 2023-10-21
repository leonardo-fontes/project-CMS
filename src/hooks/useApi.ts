import axios from "axios";

const api = axios.create({
    baseURL: "https://api.google.com"
});

export const useApi = () => ({
    validateToken: async (token: string) => {
        // retornar resposta falsa
        return {
            user: { id: 3, name: 'José', email: 'jose@gmail.com' },

        }
        const response = await api.post('/validate', { token });
        return response.data;
    },
    signin: async (email: string, password: string) => {
        // retornar resposta falsa
        return {
            user: { id: 3, name: 'José', email: 'jose@gmail.com' },
            token: '123456789'
        }

        const response = await api.post('/signin', { email, password });
        return response.data;
    },
    logout: async () => {
        // retornar resposta falsa
        return { status: true };
        const response = await api.post('/logout');
        return response.data;
    }
})