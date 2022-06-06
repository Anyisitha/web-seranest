import {useForm} from "react-hook-form";
import {useState} from "react";
import Swal from "sweetalert2";
import useApi from "api";
import {useHistory} from "react-router";

const useRegister = () => {
    // History
    const history = useHistory();

    // Api
    const {useActions} = useApi();
    const {dispatch, useRegisterActions} = useActions();
    const {actCreateUser} = useRegisterActions();

    // States
    const [checkboxSelected, setCheckboxSelected] = useState<string>("");
    const [especialityCheckbox, setEspecialityCheckbox] = useState<string>("");
    const [check1, setCheck1] = useState<boolean>(false);
    const [check2, setCheck2] = useState<boolean>(false);
    const [check3, setCheck3] = useState<boolean>(false);

    // Hook form
    const {
        control,
        setValue,
        formState: {isValid, errors},
        handleSubmit,
        reset
    } = useForm({mode: "onChange"});

    // Handlers
    const handleRegister = (data: any) => {
        if(!check2){
            Swal.fire({
                title: "Error: Politica de HABEAS data",
                text: "Debes aceptar nuestra politica de HABEAS data.",
                icon: "error"
            });
        }else if(!check3){
            Swal.fire({
                title: "Error: Revisa el documento de valor",
                text: "Debes aceptar el documento de transferencia de valor.",
                icon: "error"
            });
        }else{
            // @ts-ignore
            dispatch(actCreateUser({
                user: {...data, fullname: `${data.name} ${data.last_name}`},
                onSuccess: () => {
                    Swal.fire({
                        icon: "success",
                        title: "Bienvenido a Seranest!",
                        text: "Ahora puedes ingresar a nuestra plataforma con el correo electronico y contraseña que ingresaste"
                    }).then((res) => {
                        if(res.isConfirmed){
                            reset({
                                name: "",
                                last_name: "",
                                email: "",
                                document: "",
                                confirm_document: "",
                                document_type: "",
                                phone: "",
                                country: "",
                                city: ""
                            })
                            history.push("/");
                        }
                    });
                },
                onError: () => {
                    Swal.fire({
                        icon: "error",
                        title: "Ohhh no!",
                        text: "Ocurrio un problema al momento de crear el usuario intentalo de nuevo!"
                    })
                }
            }))
        }
        console.log(data);
    }

    return {
        control,
        checkboxSelected,
        setCheckboxSelected,
        setValue,
        setEspecialityCheckbox,
        especialityCheckbox,
        isValid,
        errors,
        check1,
        setCheck1,
        check2,
        setCheck2,
        check3,
        setCheck3,
        handleRegister,
        handleSubmit
    };
}

export default useRegister;