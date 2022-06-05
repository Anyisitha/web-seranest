import {Control} from "react-hook-form";

export interface ICheckboxRegisterProps {
    label: string;
    onChange: () => void;
    checked: boolean;
    isFull?: boolean;
    isMinimum?: boolean;
}