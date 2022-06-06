import { Grid } from "@mui/material";
import { IHeaderLogin } from "models/interfaces/HeaderLogin.interfaces";
import { FC } from "react";
import { StyledLogo } from "./HeaderLogin.styles";

const HeaderLogin : FC<IHeaderLogin> = ({ isCentered }) => {
    return (
        <Grid item md={12} className={ isCentered ? "flex justify-center" : ""}>
            <StyledLogo
                src={`${process.env.REACT_APP_ASSETS_URL}/images/logo-seranest.png`}
                alt="Logo Roche"
            />
        </Grid>
    );
}

export default HeaderLogin;