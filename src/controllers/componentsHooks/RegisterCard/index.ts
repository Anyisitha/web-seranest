import {useForm} from "react-hook-form";
import {ICreateUserAction, IUserData} from "models/interfaces/register.interfaces";
import Swal from "sweetalert2";
import {useHistory} from "react-router";
import useApi from "api";

const useRegisterCard = () => {
    /** History Hook */
    const history = useHistory();

    /** Api */
    const { useActions } = useApi();
    const { dispatch, useRegisterActions } = useActions();
    const { actCreateUser } = useRegisterActions();

    /** Form Hook */
    const {control, handleSubmit, formState: {isValid}, setValue} = useForm({mode: "onChange"});

    /** Handlers */

    /**
     * This function executes the function that sends the request to register the user.
     * @param data IUserData interface.
     * @return void.
     */
    const handleCreateUser = (data: IUserData) => {
        const user = {
            ...data,
            fullname: `${data.name} ${data.last_name}`
        };

        const request: ICreateUserAction = {
            user: user,
            onError: (error: any) => console.log(error),
            onSuccess: () => {
                Swal.fire({
                    icon: "success",
                    title: "Registro exitoso!",
                    text: "Gracias por registrarte ahora te redirigimos a la pagina de ingreso para que puedas ingresar a la plataforma con las mismas credenciales que ingresaste para registrarte."
                }).then(r => history.push("/"));
            }
        }

        // @ts-ignore
        dispatch(actCreateUser(request));
    }

    return {
        control,
        isValid,
        handleSubmit,
        handleCreateUser,
        setValue
    };
}

export default useRegisterCard;