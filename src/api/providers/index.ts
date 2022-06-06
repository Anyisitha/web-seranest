import useLoginAdminProviders from "./login-admin";
import useModulesProviders from "./modules";
import useRegisterProviders from "./register";

const useProviders = () => {
    return {
        useLoginAdminProviders,
        useModulesProviders,
        useRegisterProviders
    };
}

export default useProviders;