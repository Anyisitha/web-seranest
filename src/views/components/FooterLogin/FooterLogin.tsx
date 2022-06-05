import { Grid } from "@mui/material"
import { StyledFoundationLogo } from "./FooterLogin.styles";

const FooterLogin = () => {
    return (
        <Grid item md={12} className="xl:absolute relative mt-8 bottom-0 flex justify-center xl:justify-end w-full xl:right-8">
            <StyledFoundationLogo
                src={`${process.env.REACT_APP_ASSETS_URL}/images/seranest-footer.png`}
                alt="Foundation Logo"
            />
        </Grid>
    );
}

export default FooterLogin;