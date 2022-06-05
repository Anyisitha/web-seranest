import {useForm} from "react-hook-form";
import {useState} from "react";

const useRegister = () => {
    // States
    const [checkboxSelected, setCheckboxSelected] = useState<string>("");
    const [especialityCheckbox, setEspecialityCheckbox] = useState<string>("");
    const [check1, setCheck1] = useState<boolean>(false);
    const [check2, setCheck2] = useState<boolean>(false);
    const [check3, setCheck3] = useState<boolean>(false);

    // Hook form
    const {control, setValue, formState: {isValid, errors}, setError} = useForm({mode: "onChange"});

    return {
        control,
        checkboxSelected,
        setCheckboxSelected,
        setValue,
        setEspecialityCheckbox,
        especialityCheckbox,
        isValid,
        errors,
        setError,
        check1,
        setCheck1,
        check2,
        setCheck2,
        check3,
        setCheck3
    };
}

export default useRegister;