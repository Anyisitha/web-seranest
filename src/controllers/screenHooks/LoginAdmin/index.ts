import useApi from "api";
import useHelpers from "helpers";
import { ILoginAdmin, ILoginAdminAction } from "models/interfaces/LoginAdmin.interfaces";
import {useCallback, useEffect} from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useModels from "../../../models";

const useLoginAdmin = () => {
    /** Helpers */
    const { useNavigationHelpers } = useHelpers();
    const { history } = useNavigationHelpers();

    /** Api */
    const { useActions } = useApi();
    const { dispatch, useLoginAdminActions } = useActions();
    const { actLoginAdmin } = useLoginAdminActions();

    // Selectors
    const {useSelectors} = useModels();
    const {useSelector, useLoginSelectors} = useSelectors();
    const {loginSelectors} = useLoginSelectors();
    const {token} = useSelector(loginSelectors);

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
            onError: (error: any) => {
                console.log(error.response);
                Swal.fire({
                    icon: "error",
                    title: "Su contraseña es incorrecta",
                })
            }
        }

        dispatch<any>(actLoginAdmin(request));
        // eslint-disable-next-line
    }, [dispatch])

    const handleLoginAdmin = useCallback((data: ILoginAdmin) => {
        const request: ILoginAdminAction = {
            user: data,
            onSuccess: () => history.push("/dashboard"),
            onError: (error: any) => {
                if(error.response.status === 404) {
                    Swal.fire({
                        icon: "error",
                        title: "Usuario no encontrado!",
                        text: "Valida los datos y vuelve a intentarlo",
                    })
                }else{
                    Swal.fire({
                        icon: "error",
                        title: "Su usuario o contraseña son incorrectas",
                        text: "Valida tu contrasena y vuelve a intentarlo",
                    })
                }
            }
        }

        dispatch<any>(actLoginAdmin(request));
        // eslint-disable-next-line
    }, [dispatch])

    useEffect(() => {
        if(token === undefined){
            history.push("/")
        }
    }, [])

    return {
        control,
        handleSubmit,
        handleLogin,
        handleLoginAdmin
    }
}

export default useLoginAdmin;