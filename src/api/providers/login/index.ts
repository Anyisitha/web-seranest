import axios, {AxiosResponse} from "axios";
import {ILostPasswordProvider} from "models/interfaces/LostPassword.interfaces";
import {trackPromise} from "react-promise-tracker";

const useLoginProviders = () => {
    /**
     * This promise executes the request that performs the change of the user's password. (Eye the email must be
     * registered in the database).
     * @return AxiosResponse
     * @param data ILostPasswordProvider
     */
    const changePassword = (data: ILostPasswordProvider) => {
        return trackPromise(
            axios.post("/auth/change-password", data)
        );
    }

    return {
        changePassword,
    };
}

export default useLoginProviders;