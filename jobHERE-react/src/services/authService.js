import api from "../api/axios";
import { ENDPOINTS } from "../api/endpoints";

const authService = {


    login: async (credentials) => {
        const response = await api.post(ENDPOINTS.LOGIN, credentials);
        return response.data;
    },

    // an async function that takes userData as an argument and makes a POST request to the REGISTER endpoint with the userData as the request body. It returns the response data from the API call.

    //  it returns a promise.
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
        return response.datja;
    },

    createProfile:async(profileData)=>{
        return await api.post(ENDPOINTS.PROFILE,profileData)
    }
};

export default authService;


/*

services = middle  layer btw react and backend
an object that contains methods for making API calls related to authentication.


awaits => pause the execution of the function until the promise is resolved or rejected. It allows you to write asynchronous code in a synchronous manner, making it easier to read and understand.

*/