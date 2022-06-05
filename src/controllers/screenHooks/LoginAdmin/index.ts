import useApi from "api";
import useHelpers from "helpers";
import { ILoginAdmin, ILoginAdminAction } from "models/interfaces/LoginAdmin.interfaces";
import { useCallback } from "react";
import { useForm } from "react-hook-form";

const useLoginAdmin = () => {
    /** Helpers */
    const { useNavigationHelpers } = useHelpers();
    const { history } = useNavigationHelpers();

    /** Api */
    const { useActions } = useApi();
    const { dispatch, useLoginAdminActions } = useActions();
    const { actLoginAdmin } = useLoginAdminActions();

    /** Form Hooks */
    const {
        control,
        handleSubmit
    } = useForm({
        "mode": "onChange"
    });

    /** Handlers */
    const handleLogin = useCallback((data: ILoginAdmin) => {
        const request: ILoginAdminAction = {
            user: data,
            onSuccess: () => history.push("/admin"),
            onError: (error: any) => console.log(error)
        }

        dispatch<any>(actLoginAdmin(request));
    }, [dispatch])

    const handleLoginAdmin = useCallback((data: ILoginAdmin) => {
        const request: ILoginAdminAction = {
            user: data,
            onSuccess: () => history.push("/dashboard"),
            onError: (error: any) => console.log(error)
        }

        dispatch<any>(actLoginAdmin(request));
    }, [dispatch])

    return {
        control,
        handleSubmit,
        handleLogin,
        handleLoginAdmin
    }
}

export default useLoginAdmin;