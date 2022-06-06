import axios from "axios";
import { useCallback, useEffect } from "react";

const useInterceptor = () => {
    

    /** Handlers */
    const handleRequestSuccess = useCallback((request: any) => {
        request.headers["accept"] = "application/json";
        return request;
    }, []);

    const handleRequestError = useCallback(async (error: string) => {
        console.log(`Request error => ${error}`);
        throw error;
    }, []);

    const handleResponseSuccess = useCallback((response: any) => {
        return response;
    }, []);

    const handleResponseError = useCallback(async (error: string) => {
        console.log(`Request error => ${error}`);
        throw error;
    }, []);


    /** Effects */
    useEffect(() => {
        axios.defaults.baseURL = process.env.REACT_APP_API_URL;
        axios.interceptors.request.use(handleRequestSuccess, handleRequestError);
        axios.interceptors.response.use(handleResponseSuccess, handleResponseError);
    }, [
        handleRequestSuccess,
        handleRequestError,
        handleResponseSuccess,
        handleResponseError,
    ]);
}

export default useInterceptor;