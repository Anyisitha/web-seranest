import { FC, useEffect } from "react";
import { StyledImagen1 } from "./Login.styles";
import { Container, Grid } from "@mui/material";
import useLocalComponents from "views/localComponents";
import useControllers from "controllers";
import {useHistory} from "react-router";

const Home: FC = (): JSX.Element => {
    const history = useHistory();

    /** Local Components */
    const { LoginCard } = useLocalComponents();

    /** Controllers */
    const { useScreenHooks } = useControllers();
    const { useLogin } = useScreenHooks();
    const { width, getWidth, token } = useLogin();

    /** Effects */
    useEffect(() => {
        const executePetition = async () => {
            await token !== "" && history.push("/dashboard");
            await getWidth();
        }

        executePetition().catch(err => console.log(err));
    }, [getWidth])

    return width >= 1280 ? (
        <Grid container>
            <Grid item md={6} className="flex justify-center items-center">
                <StyledImagen1 src={`${process.env.REACT_APP_ASSETS_URL}/images/login-principal-image.png`} alt="Imagen" />
            </Grid>
            <Grid item md={6} className="flex justify-center items-center">
                <LoginCard />
            </Grid>
        </Grid>
    ) : (
        <Container>
            <Grid item md={12} className="flex justify-center items-center">
                <StyledImagen1 src={`${process.env.REACT_APP_ASSETS_URL}/images/login-principal-image.png`} alt="Imagen" />
            </Grid>
            <Grid item md={12} className="flex justify-center items-center">
                <LoginCard />
            </Grid>
        </Container>
    )
}

export default Home;