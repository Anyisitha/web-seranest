import useRegister from "./register";
import useLogin from "./login";
import useLoginAdmin from "./LoginAdmin";
import useAdmin from "./Admin";
import useDashboard from "./Dashboard";
import useModules from "./Modules";

const useScreenHooks = () => {
    return {
        useRegister,
        useLogin,
        useLoginAdmin,
        useAdmin,
        useDashboard,
        useModules
    };
}

export default useScreenHooks;