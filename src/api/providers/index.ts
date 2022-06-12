import useLoginAdminProviders from "./login-admin";
import useModulesProviders from "./modules";
import useRegisterProviders from "./register";
import useLoginProviders from "./login";

const useProviders = () => {
    return {
        useLoginAdminProviders,
        useModulesProviders,
        useRegisterProviders,
        useLoginProviders
    };
}

export default useProviders;