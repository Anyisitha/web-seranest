import { useState } from "react";
import { useForm } from "react-hook-form";

const useAdminModules = () => {
    /** Form Hooks */
    const { control, handleSubmit } = useForm({ "mode": "onChange" });

    /** States */
    const [data, setData] = useState<any>({});
    const [activeStep, setActiveStep] = useState<number>(1);

    /** Variables */
    const steps : any = [
        "Nombre del módulo",
        "Secciones del módulo",
    ];

    /** Handlers */
    const handleStep1 = (step1: any) => {
        setData({...data, name: step1.name});
        setActiveStep(activeStep + 1);
    }

    return {
        control,
        handleSubmit,
        steps,
        handleStep1,
        activeStep
    };
}

export default useAdminModules;