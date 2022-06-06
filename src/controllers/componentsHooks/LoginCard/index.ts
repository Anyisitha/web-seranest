import { useForm } from "react-hook-form";

const useLoginCard = () => {
    /** Use Form */
    const { control } = useForm({ mode: "onChange" });

    return {
        control
    }
}

export default useLoginCard; 