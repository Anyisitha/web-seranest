import { Grid } from "@mui/material";
import { FC } from "react";
import { Controller } from "react-hook-form";
import { IInputProps } from "./Input.interfaces";
import { ContainerInputComponent, StyledIcon, StyledInput, StyledInputContent, StyledInputWithLabel, StyledLabel, StyledMessageError } from "./input.styled";

const Input: FC<IInputProps> = ({
    name,
    control,
    rules,
    isGradiend,
    icon,
    placeholder,
    type,
    className,
    isRounded,
    widthFull,
    label,
    isLine,
    labelTop
}) => {

    const InputComponent = (controlInput: any) => {
        const { field, fieldState } = controlInput;

        return (
            <StyledInputContent>
                {label && labelTop && <StyledLabel>{label}</StyledLabel>}
                <StyledInputWithLabel>
                    {label && !labelTop && (
                        <Grid item lg={4}>
                            <StyledLabel dangerouslySetInnerHTML={{ __html: label }}></StyledLabel>
                        </Grid>
                    )}

                    <Grid item lg={widthFull ? 12 : 8} md={12} sm={12} xs={12}>
                        <ContainerInputComponent
                            isGradiend={isGradiend}
                            isRounded={isRounded}
                            widthFull={widthFull}
                            isLine={isLine}
                        >

                            {
                                icon && (
                                    <StyledIcon
                                        src={require(`assets/images/icon-${icon}.png`)}
                                    />
                                )
                            }
                            <StyledInput
                                name={field.contrasena}
                                placeholder={placeholder}
                                type={type}
                                onChange={(e) => field.onChange(e)}
                                onBlur={(e) => field.onBlur(e)}
                                className={className}
                                value={field.value}
                                widthFull={widthFull}
                                isLine={isLine}
                            />
                        </ContainerInputComponent>
                    </Grid>

                </StyledInputWithLabel>

                <StyledMessageError>{fieldState.error && fieldState.error.message}</StyledMessageError>
            </StyledInputContent >
        )
    }

    return (
        <Controller
            name={name}
            control={control}
            rules={rules}
            render={InputComponent}
        />
    )
}

export default Input;