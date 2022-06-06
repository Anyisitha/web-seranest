import { Control } from "react-hook-form";

export interface IInputProps {
    name: string;
    control: Control;
    rules?: any; 
    isGradiend?: boolean;
    icon?: string;
    placeholder?: string;
    type: string;
    className?: string;
    isRounded?: boolean;
    widthFull?: boolean;
    label?: string;
    isLine?: boolean;
    labelTop?: boolean;
}

export interface IStyledInputProps {
    name: string;
    isGradiend?: boolean;
    isRounded?: boolean;
    widthFull?: boolean;
    isLine?: boolean;
}