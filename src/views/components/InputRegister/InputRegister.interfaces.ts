import {Control} from "react-hook-form";

export interface IInputRegisterProps {
    control: Control;
    rules?: any;
    name: string;
    placeholder: string;
    label: string;
    type: string;
    isLine?: boolean;
    isFull?: boolean;
    disabled?: boolean;
}