import { Container, Grid } from "@mui/material";
import { StyledBackground, StyledButton, StyledGridCenter, StyledPaper } from "../../RegisterCard.styles";
import useComponents from "views/components";
import useControllers from "controllers";

const RegisterCardDesktop = () => {
    /** Components */
    const { Input, Checkbox } = useComponents();

    /** Controllers */
    const { useComponentsHooks } = useControllers();
    const { useRegisterCard } = useComponentsHooks();
    const { control, isValid, handleSubmit, handleCreateUser, setValue } = useRegisterCard();

    return (
        <Container>
            <Grid item lg={12}>
                <StyledPaper elevation={6}>
                    <StyledBackground style={{ paddingTop: "7%" }}>
                        <Container style={{ width: "90%", marginBottom: "4%" }}>
                            <StyledGridCenter item lg={12}>
                                <Grid container>
                                    <Grid item lg={6} className="flex w-full items-center">
                                        <Grid item lg={3}>
                                            <label className="text-right font-bold text-white">Nombre: *</label>
                                        </Grid>
                                        <Grid item lg={9} className="flex justify-start w-full">
                                            <Input
                                                control={control}
                                                name="name"
                                                type="text"
                                                isRounded
                                                rules={{
                                                    required: {
                                                        value: true,
                                                        message: 'El campo es requerido'
                                                    }
                                                }}
                                            />
                                        </Grid>


                                    </Grid>
                                    <Grid item lg={6} className="flex w-full items-center">
                                        <Grid item lg={3}>
                                            <label className="text-left font-bold text-white">Apellidos: *</label>
                                        </Grid>
                                        <Grid item lg={9} className="flex justify-start w-full">
                                            <Input
                                                control={control}
                                                name="last_name"
                                                type="text"
                                                isRounded
                                                rules={{
                                                    required: {
                                                        value: true,
                                                        message: 'El campo es requerido'
                                                    }
                                                }}
                                            />
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </StyledGridCenter>
                            <StyledGridCenter item lg={12} moreTop>
                                <Grid container>
                                    <Grid item lg={6} className="flex w-full items-center">
                                        <Grid item lg={3}>
                                            <label className="text-right font-bold text-white">Operador logistico: *</label>
                                        </Grid>
                                        <Grid item lg={9} className="flex justify-start w-full">
                                            <Input
                                                control={control}
                                                name="city"
                                                type="text"
                                                isRounded
                                                rules={{
                                                    required: {
                                                        value: true,
                                                        message: 'El campo es requerido'
                                                    }
                                                }}
                                            />
                                        </Grid>


                                    </Grid>
                                    <Grid item lg={6} className="flex w-full items-center">
                                        <Grid item lg={3}>
                                            <label className="text-left font-bold text-white">Correo electronico: *</label>
                                        </Grid>
                                        <Grid item lg={9} className="flex justify-start w-full">
                                            <Input
                                                control={control}
                                                name="email"
                                                type="text"
                                                isRounded
                                                rules={{
                                                    required: {
                                                        value: true,
                                                        message: 'El campo es requerido'
                                                    }
                                                }}
                                            />
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </StyledGridCenter>
                            <StyledGridCenter item lg={12} moreTop>
                                <Grid container>
                                    <Grid item lg={6} className="flex w-full items-center">
                                        <Grid item lg={3}>
                                            <label className="text-right font-bold text-white">Contrasena: *</label>
                                        </Grid>
                                        <Grid item lg={9} className="flex justify-start w-full">
                                            <Input
                                                control={control}
                                                name="password"
                                                type="password"
                                                isRounded
                                                rules={{
                                                    required: {
                                                        value: true,
                                                        message: 'El campo es requerido'
                                                    }
                                                }}
                                            />
                                        </Grid>


                                    </Grid>
                                    <Grid item lg={6} className="flex w-full items-center">
                                        <Grid item lg={3}>
                                            <label className="text-left font-bold text-white">Confirmar contrasena: *</label>
                                        </Grid>
                                        <Grid item lg={9} className="flex justify-start w-full">
                                            <Input
                                                control={control}
                                                name="confirm_password"
                                                type="password"
                                                isRounded
                                                rules={{
                                                    required: {
                                                        value: true,
                                                        message: 'El campo es requerido'
                                                    }
                                                }}
                                            />
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </StyledGridCenter>
                        </Container>

                        <StyledGridCenter moreTop>
                            <span className="text-white">En el cumplimiento de la Ley 1581 de 2012 sobre Habeas Data, el régimen general de protección de datos personales y sobre <br />
                                manejo de los mismos, acepto los términos presentados por Roche. Conozca los términos y condiciones <a
                                    href="/" className="text-black"><b>aquí.</b></a> </span>
                        </StyledGridCenter>

                        <StyledGridCenter moreTop>
                            <StyledPaper elevation={6}>
                                <StyledButton
                                    disabled={!isValid}
                                    //@ts-ignore
                                    onClick={handleSubmit(handleCreateUser)}
                                >
                                    Enviar
                                </StyledButton>
                            </StyledPaper>
                        </StyledGridCenter>

                    </StyledBackground>
                </StyledPaper>
            </Grid>
        </Container>
    )
}

export default RegisterCardDesktop;