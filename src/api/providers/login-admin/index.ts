import axios from "axios";
import { ILoginAdmin } from "models/interfaces/LoginAdmin.interfaces";
import { trackPromise } from "react-promise-tracker";

const useLoginAdminProviders = () => {
    const loginAdmin = (data: ILoginAdmin) => trackPromise(axios.post("/auth/login", data));

    return {
        loginAdmin,
    };
}

export default useLoginAdminProviders;