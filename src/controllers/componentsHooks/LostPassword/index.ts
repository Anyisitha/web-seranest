import {useForm} from "react-hook-form";
import Swal from "sweetalert2";
import useApi from "api";
import {ILostPasswordData} from "models/interfaces/LostPassword.interfaces";

const useLostPassword = (onClose: () => void) => {
    /** Use form */
    const {control, handleSubmit} = useForm({mode: "onChange"});

    /** Api */
    const {useActions} = useApi();
    const {dispatch, useLoginActions} = useActions();
    const {actChangePassword} = useLoginActions();

    /** Handlers */

    /**
     * This function executes the action to be able to change the password.
     * @return void
     */
    const handleChangePassword = (data: ILostPasswordData) => {
        if(data.password === data.confirm_password){
            // @ts-ignore
            dispatch(actChangePassword({
                data: {email: data.email, password: data.password},
                onSuccess: () => {
                    onClose && onClose();
                    Swal.fire({
                        icon: "success",
                        title: "Cambio de contrasena exitoso!",
                        text: "Perfecto, ya que pudiste cambiar la contrasena ahora puedes ingresar a nuestra plataforma."
                    }).then(res => {
                        if(res.isConfirmed) return window.location.reload();
                    })
                },
                onError: (error: Error) => console.log(error)
            }));
        }else{
            Swal.fire({
                icon: "error",
                title: "Las contrasenas no coinciden.",
                text: "Rectifica tus contrasenas y acuerdate que las dos contrasenas deben coincidir"
            }).catch(err => console.log(err));
        }
    }

    return {
        control,
        handleSubmit,
        handleChangePassword,
    };
}

export default useLostPassword;