import { CardActions, Container } from "@mui/material";
// import CuadroAmarillo from "assets/images/cuadro-amarillo.png";
import useControllers from "controllers";
import { Link } from "react-router-dom";
import useComponents from "views/components";
import useLocalComponents from "views/localComponents";
import {
    StyledButton,
    StyledCard,
    StyledCardContent,
    StyledHeaderCard,
    StyledInputContainer,
    StyledPasswordLot,
    StyledSubTitleHeader,
    StyledTextPassword,
    StyledTitleHeader
} from "./LoginCard.styled";
import {useState} from "react";

const LoginCard = () => {
    /** Components */
    const { Input } = useComponents();

    /** States */
    const [openModal, setOpenModal] = useState<boolean>(false);

    /** Local Components */
    const {LostPassword} = useLocalComponents();

    /** Controllers */
    const { useScreenHooks } = useControllers();
    const { useLoginAdmin } = useScreenHooks();
    const { control, handleLoginAdmin, handleSubmit } = useLoginAdmin();
    
    return (
        <StyledCard>
            <LostPassword
                open={openModal}
                onClose={() => setOpenModal(false)}
            />
            <StyledCardContent>
                <StyledHeaderCard background={require('assets/images/gitMovil.gif')}>
                    <StyledTitleHeader>Iniciar sesión</StyledTitleHeader>
                    <StyledSubTitleHeader>Bienvenido(a)</StyledSubTitleHeader>
                </StyledHeaderCard>
                <Container>
                    <StyledInputContainer>
                        <Input
                            name="email"
                            control={control}
                            rules={{
                                required: {
                                    value: true,
                                    message: "error el campo es requerido"
                                }
                            }}
                            isGradiend
                            icon="user"
                            placeholder="Nombre de usuario"
                            type="text"
                            widthFull
                        />
                    </StyledInputContainer>
                    <StyledInputContainer>
                        <Input
                            name="password"
                            control={control}
                            rules={{
                                required: {
                                    value: true,
                                    message: "error el campo es requerido"
                                }
                            }}
                            isGradiend
                            icon="password"
                            placeholder="Contraseña"
                            type="password"
                            widthFull
                        />
                    </StyledInputContainer>
                </Container>
                <StyledTextPassword item lg={12}>
                    <StyledPasswordLot onClick={() => setOpenModal(true)}>¿Olvidó su contraseña?</StyledPasswordLot>
                </StyledTextPassword>
            </StyledCardContent>
            <CardActions style={{ flexWrap: "wrap", justifyContent: "center", flexDirection: "column" }}>
                <Container>
                    <StyledTextPassword item lg={12}>
                        <Link to="/modulo1">
                            <StyledButton 
                                isregister={false}
                                // @ts-ignore
                                onClick={handleSubmit(handleLoginAdmin)}
                            >
                                Iniciar sesión
                            </StyledButton>
                        </Link>

                    </StyledTextPassword>
                    <StyledTextPassword item lg={12}>
                        <Link to="/register">
                            <StyledButton isregister>Registrarse</StyledButton>
                        </Link>
                    </StyledTextPassword>
                </Container>
            </CardActions>  
        </StyledCard>
    )
}

export default LoginCard;