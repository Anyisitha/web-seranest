import React, {FC, Fragment, useEffect} from "react";
import {CardContent, Container, Grid, Paper} from "@mui/material";
import {
    StyledButton,
    StyledCard,
    StyledIcon, StyledImageCard,
    StyledMessageRemember,
    StyledTextCard,
    StyledTitleHeader
} from "../../Dashboard.styles";
import useComponents from "views/components";
import useControllers from "controllers";
import useHelpers from "helpers";

/**
 * This functional constant is used from render the mobile content.
 * @return ComponentType<any>.
 */
const DashboardMobile: FC = () => {
    /** Components */
    const {CircleProgress, CertificateCard} = useComponents();

    /** Controllers */
    const {useScreenHooks} = useControllers();
    const {useDashboard} = useScreenHooks();
    const {
        getUserProgress,
        userProgress,
        getModules,
        modules
    } = useDashboard();

    /** Effects */
    useEffect(() => {
        getUserProgress();
        getModules();
        // eslint-disable-next-line
    }, []);

    /** Helpers */
    const {useNavigationHelpers} = useHelpers();
    const {history} = useNavigationHelpers();

    const ButtonComponent = ({ index, description, id }: { index: number; description: string, id: number; }) => {
        console.log(index)
        if (userProgress.moduleFinished === index.toString()) {
            return (
                <Grid item lg={12} className="flex justify-center">
                    <StyledButton onClick={() => history.push(`/module/${id}`, { description })}>Iniciar</StyledButton>
                </Grid>
            )
        } else if (userProgress.moduleFinished > index.toString()) {
            return (
                <Grid item lg={12} className="flex justify-center">
                    <StyledButton>Completado</StyledButton>
                </Grid>
            )
        } else {
            return (
                <Grid item lg={12} className="flex justify-center">
                </Grid>
            )
        }
    }

    const ImageComponent = ({image, index}: { image: string; index: number; }) => {
        if (userProgress.moduleFinished === index) {
            return (
                <StyledImageCard src={image} alt="test" disabled={false}/>
            )
        } else if (userProgress.moduleFinished > index) {
            return (
                <StyledImageCard src={image} alt="test" disabled={false}/>
            )
        } else if (userProgress.moduleFinished < index) {
            return (
                <Grid item lg={12} className="flex justify-center">
                    <StyledImageCard src={image} alt="test" disabled={true}/>
                </Grid>
            )
        } else {
            return (
                <Grid item lg={12} className="flex justify-center">
                    <StyledImageCard src={image} alt="test" disabled={false}/>
                </Grid>
            )
        }
    }

    return (
        <Fragment>
            <Grid container>
                <Grid xs={12} className="px-4">
                    <StyledTitleHeader>Módulos</StyledTitleHeader>
                </Grid>
            </Grid>
            <Container>
                <Grid container className="gap-4 flex justify-center">
                    <Grid xs={5}>
                        <CircleProgress percent={userProgress.percent} isBody={false}/>
                    </Grid>
                    <Grid xs={5}>
                        {/*<CertificateCard isBody/>*/}
                    </Grid>
                </Grid>
                <Grid container className="items-center" style={{flexWrap: "nowrap"}}>
                    <StyledIcon
                        src={require(`assets/images/icon-check.png`)}
                        alt="Check"
                        width={window.innerWidth}
                    />
                    <StyledMessageRemember>
                        Debe completar cada uno de los módulos y aprobar los exámenes que corresponden a cada uno de
                        ellos.
                    </StyledMessageRemember>
                </Grid>
                <Grid container className="pt-6 items-center" style={{flexWrap: "nowrap"}}>
                    <StyledIcon
                        src={require(`assets/images/icon-info.png`)}
                        alt="Check"
                        width={window.innerWidth}
                    />
                    <StyledMessageRemember>
                        Recuerde que a medida que complete un módulo, se desbloqueará el siguiente.
                    </StyledMessageRemember>
                </Grid>
                <Grid xs={12}>
                    <Paper elevation={4} sx={{width: "100%"}}>
                        <StyledCard background={require("assets/images/ondas-white.png")}>
                            <CardContent>
                                <Container>
                                    <Grid container>
                                        {
                                            modules && modules.map((item: any, index: number) => <Grid item md={6} xs={12}
                                                                                                       key={index}
                                                                                                       className="px-3 pb-8">
                                                    <Grid item lg={12} className="text-center pb-3">
                                                        <Paper elevation={6}>
                                                            <ImageComponent image={item.image} index={index}/>
                                                        </Paper>
                                                    </Grid>

                                                    <Grid item lg={12} className="text-center mt-3">
                                                        <StyledTextCard bold>Modulo {index + 1}</StyledTextCard>
                                                    </Grid>
                                                    <Grid item lg={12} className="text-center pb-3">
                                                        <StyledTextCard bold={false}
                                                                        dangerouslySetInnerHTML={{__html: item.name}}></StyledTextCard>
                                                    </Grid>
                                                    <ButtonComponent index={index} description={item.name} id={item.id}/>
                                                </Grid>
                                            )}
                                    </Grid>
                                </Container>

                            </CardContent>
                        </StyledCard>
                    </Paper>
                </Grid>
            </Container>

        </Fragment>
    );
}

export default DashboardMobile;