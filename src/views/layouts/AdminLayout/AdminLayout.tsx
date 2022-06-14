import { Grid } from "@mui/material";
import useControllers from "controllers";
import { FC, Fragment } from "react";
import HeaderDashboard from "views/components/HeaderDashboard";
import { StyledContainer, StyledTab } from "./AdminLayout.styles";

const AdminLayout : FC<{children: any;}> = ({ children }) => {
    /** Controllers */
    const { useGeneralHooks } = useControllers();
    const { useGeneral } = useGeneralHooks();
    const { width } = useGeneral();

    return (
        <Fragment>
            {
                width >= 1024 ? (
                    <StyledContainer>
                        <HeaderDashboard/>
                        <Grid container>
                            <Grid item md={3} className="p-8">
                                <StyledTab item md={12}>
                                    <span>Módulos</span>
                                </StyledTab>
                            </Grid>
                            <Grid item md={9}>
                                { children }
                            </Grid>
                        </Grid>
                    </StyledContainer>
                ) : (
                    <Fragment></Fragment>
                )
            }
        </Fragment>
    );
}

export default AdminLayout;