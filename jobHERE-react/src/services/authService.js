import api from "../api/axios";
import { ENDPOINTS } from "../api/endpoints";

const authService = {
    login: async (credentials) => {
        const response = await api.post(ENDPOINTS.LOGIN, credentials);
        return response.data;
    },

    register: async (userData) => {
        const response = await api.post(ENDPOINTS.REGISTER, userData);
        return response.data;
    },

    logout: async () => {
        const response = await api.post(ENDPOINTS.LOGOUT);
        return response.data;
    },

    getProfile: async () => {
        const response = await api.get(ENDPOINTS.PROFILE);
        return response.data;
    },
};

export default authService;


/*

services = middle  layer btw react and backend
an object that contains methods for making API calls related to authentication.



*/