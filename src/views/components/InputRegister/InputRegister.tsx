import React, {FC} from "react";
import {Controller} from "react-hook-form";
import {IInputRegisterProps} from "./InputRegister.interfaces";
import {Grid} from "@mui/material";
import {StyledInput, StyledInputLine, StyledLabel, StyledMessageError} from "./InputRegister.styles";

const InputRegister: FC<IInputRegisterProps> = ({
                                                    control,
                                                    rules,
                                                    name,
                                                    placeholder,
                                                    type,
                                                    label,
                                                    isLine,
                                                    isFull,
                                                    disabled,
                                                    noLabel
                                                }) => {
    const InputComponent = (controlInput: any) => {
        const {field, fieldState} = controlInput;
        console.log(field.name)
        return (
            <Grid container>
                {
                    !noLabel && (
                        <Grid item xl={4} lg={4} md={12} sm={12} xs={12} className="flex items-center">
                            <StyledLabel>{label}</StyledLabel>
                        </Grid>
                    )
                }
                {
                    !noLabel ? (
                        <Grid item xl={isFull ? 8 : 7} lg={isFull ? 8 : 7} md={12} sm={12} xs={12} className="pl-2">
                            <StyledInput
                                name={fieldState.name}
                                placeholder={placeholder}
                                type={type}
                                onChange={(e) => field.onChange(e)}
                                value={field.value}
                                disabled={disabled}
                            />
                        </Grid>
                    ) : (
                        <Grid item xl={12} lg={12} md={12} sm={12} xs={12} className="pl-2">
                            <StyledInput
                                name={fieldState.name}
                                placeholder={placeholder}
                                type={type}
                                onChange={(e) => field.onChange(e)}
                                value={field.value}
                                disabled={disabled}
                            />
                        </Grid>
                    )
                }
            </Grid>
        );
    }

    const InputComponentLine = (controlInput: any) => {
        const {field, fieldState} = controlInput;

        return (
            <>
                <Grid container>
                    <Grid item xl={4} lg={4} md={12} sm={12} xs={12} className="flex items-center">
                        <StyledLabel>{label}</StyledLabel>
                    </Grid>
                    <Grid item xl={isFull ? 8 : 7} lg={isFull ? 8 : 7} md={12} sm={12} xs={12} className="pl-2">
                        <StyledInputLine
                            name={fieldState.name}
                            placeholder={placeholder}
                            type={type}
                            onChange={(e) => field.onChange(e)}
                            value={field.value}
                            disabled={disabled}
                        />
                    </Grid>
                </Grid>
                <StyledMessageError>{fieldState.error && fieldState.error.message}</StyledMessageError>
            </>
        );
    }

    return (
        <Controller
            control={control}
            rules={rules}
            name={name}
            render={
                isLine ? InputComponentLine : InputComponent
            }
        />
    )
}

export default InputRegister;