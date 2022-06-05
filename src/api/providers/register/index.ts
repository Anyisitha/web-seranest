import {IUserData} from "models/interfaces/register.interfaces";
import axios, {AxiosResponse} from "axios";
import {trackPromise} from "react-promise-tracker";

const useRegisterProviders = () => {
    /**
     * This function created the user.
     * @return AxiosResponse with the result of request.
     * @param data IUserData interface.
     */
    const createUser = (data: IUserData) : Promise<AxiosResponse> => trackPromise(axios.post("/auth/register", data));

    return {
        createUser
    };
}

export default useRegisterProviders;