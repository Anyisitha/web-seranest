import useControllers from "controllers";
import {
    Box,
    CardContent,
    Container,
    Grid, Modal,
    Paper
} from "@mui/material";
import useHelpers from "helpers";
import React, {useEffect, useState} from "react";
import useComponents from "views/components";
import {
    StyledButton,
    StyledCard,
    StyledContainer,
    StyledIcon,
    StyledImageCard,
    StyledMessageRemember,
    StyledSidebar,
    StyledTextCard,
    StyledTitleHeader
} from "./Dashboard.styles";
import useModels from "../../../models";

const Dashboard = () => {

    /** Controllers  */
    const {useScreenHooks} = useControllers();
    const {useDashboard} = useScreenHooks();
    const {
        modules,
        getModules,
        userProgress,
        getUserProgress,
        saveModule
    } = useDashboard();

    /** Effects */
    useEffect(() => {
        getModules();
        getUserProgress();
    }, [getModules, getUserProgress]);

    /** Helpers */
    const {useNavigationHelpers} = useHelpers();
    const {history} = useNavigationHelpers();

    /** Components */
    const {CircleProgress, CertificateCard} = useComponents();

    const [openModal, setOpenModal] = useState<boolean>(false);

    useEffect(() => {
        if(userProgress.moduleFinished === 0) return setOpenModal(true);
    }, [userProgress.moduleFinished])

    const ButtonComponent = ({index, description, id}: { index: number; description: string, id: number; }) => {
        console.log(index)
        if (userProgress.moduleFinished === (index + 1)) {
            return (
                <Grid item lg={12} className="flex justify-center">
                    <StyledButton onClick={() => history.push(`/module/${id}`, {description})}>Iniciar</StyledButton>
                </Grid>
            )
        } else if (userProgress.moduleFinished > (index + 1)) {
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
        if (userProgress.moduleFinished === (index + 1) ) {
            return (
                <StyledImageCard src={image} alt="test" disabled={false}/>
            )
        } else if (userProgress.moduleFinished > (index + 1)) {
            return (
                <StyledImageCard src={image} alt="test" disabled={false}/>
            )
        } else if (userProgress.moduleFinished < (index + 1)) {
            return (
                <StyledImageCard src={image} alt="test" disabled={true}/>
            )
        } else {
            return (
                <Grid item lg={12} className="flex justify-center">
                    <StyledImageCard src={image} alt="test" disabled={false}/>
                </Grid>
            )
        }
    }

    const {useSelectors} = useModels();
    const {useSelector, useLoginSelectors} = useSelectors();
    const {loginSelectors} = useLoginSelectors();
    const {user} = useSelector(loginSelectors)

    const handleCertificate = () => {
        window.open(`http://api-pdf.seranest-interactiva.com/api/generate/${user.fullname}/${user.document}/${user.document_type}`, "_blank")
    }

    const handleClose = async() => {
        await saveModule();
        setOpenModal(false);
        setTimeout(() => {
            window.location.reload();
        }, 1000);
    }

    return (
        <StyledContainer background={`${process.env.REACT_APP_ASSETS_URL}/images/background-login.jpeg`}>
            <Grid container>
                <StyledSidebar item lg={4} xl={4} md={4} sm={12} xs={12} notFullScreen className="pt-10">
                    <Container>
                        <Grid container className="gap-2 justify-center">
                            <Grid item lg={5} md={5} sm={5} xs={5} className="h-[162px]">
                                <CertificateCard icon="video" title="Introducción" onClick={() => setOpenModal(true)}/>
                            </Grid>
                            <Grid item lg={5} md={5} sm={5} xs={5} className="h-[162px]">
                                <CircleProgress percent={userProgress.percent} isBody={false}/>
                            </Grid>
                        </Grid>
                        <Grid container className="pt-3 gap-2 justify-center">
                            <Grid item lg={5} md={5} sm={5} xs={5} className="h-[162px]">
                                <CertificateCard
                                    title="Certificado"
                                    icon="certification"
                                    disabled={!(userProgress.percent === 100)}
                                    onClick={handleCertificate}
                                />
                            </Grid>
                            <Grid item lg={5} md={5} sm={5} xs={5} className="h-[162px]">
                                <CertificateCard
                                    title="Mis curos"
                                    icon="documents"
                                />
                            </Grid>
                        </Grid>
                    </Container>
                </StyledSidebar>
                <StyledSidebar item lg={8} xl={8} md={8} sm={12} xs={12} withOverflow notFullScreen={false} mdMargin className="pt-10">
                    <Container>
                        <StyledTitleHeader>Instructivo</StyledTitleHeader>
                        <Grid item lg={12} className="flex gap-8 items-center pt-10">
                            <div>
                                <StyledIcon
                                    src={`${process.env.REACT_APP_ASSETS_URL}/images/icon-new-certification.png`}
                                    alt="certification"
                                    width={window.innerWidth}
                                />
                            </div>
                            <div>
                                <StyledMessageRemember>
                                    Al final del curso, el anestesiólogo estará en capacidad de administrar de forma
                                    segura,
                                    anestesia general total endovenosa (TIVA), usando perfusores de TCI y de aplicar
                                    conceptos básicos de neuromonitoria.
                                </StyledMessageRemember>
                            </div>
                        </Grid>
                        <Grid item lg={12} className="flex gap-8 items-center pt-10">
                            <div>
                                <StyledIcon
                                    src={`${process.env.REACT_APP_ASSETS_URL}/images/icon-check.png`}
                                    alt="certification"
                                    width={window.innerWidth}
                                />
                            </div>
                            <div>
                                <StyledMessageRemember>
                                    Debe completar cada uno de los módulos y aprobar los exámenes que corresponden a cada uno de ellos.
                                </StyledMessageRemember>
                            </div>
                        </Grid>
                        <Grid item lg={12} className="flex gap-8 items-center pt-10">
                            <div>
                                <StyledIcon
                                    src={`${process.env.REACT_APP_ASSETS_URL}/images/icon-info.png`}
                                    alt="certification"
                                    width={window.innerWidth}
                                />
                            </div>
                            <div>
                                <StyledMessageRemember>
                                    Recuerde que a medida que complete un módulo, se desbloqueará el siguiente.
                                </StyledMessageRemember>
                            </div>
                        </Grid>
                        <Grid item lg={12} className="pb-10">
                            <Paper elevation={4} sx={{width: "97%"}}>
                                <StyledCard background={`${process.env.REACT_APP_ASSETS_URL}/images/background-login.jpeg`}>
                                    <CardContent>
                                        <Grid container className="justify-center items-center">
                                            {
                                                modules && modules.map((item: any, index: number) => {
                                                    console.log(item)
                                                    return (
                                                        <Grid item lg={4} md={4} sm={12} xs={12} key={index} className="px-3 pb-8">
                                                            <Grid item lg={12} className="text-center pb-3">
                                                                <Paper elevation={6}>
                                                                    <ImageComponent
                                                                        image={item.description}
                                                                        index={index}
                                                                    />
                                                                </Paper>
                                                            </Grid>
                                                            <Grid item lg={12} className="text-center mt-3">
                                                                <div style={{textOverflow: "ellipsis", whiteSpace: "nowrap", width: "100%", overflow: "hidden"}}>
                                                                    <StyledTextCard bold>{item.name}</StyledTextCard>
                                                                </div>
                                                            </Grid>
                                                            <Grid item lg={12} className="flex justify-center pt-5">
                                                                <ButtonComponent
                                                                    index={index}
                                                                    description={item.name}
                                                                    id={item.id}
                                                                />
                                                            </Grid>
                                                        </Grid>
                                                    )
                                                })
                                            }
                                        </Grid>
                                    </CardContent>
                                </StyledCard>
                            </Paper>
                        </Grid>
                    </Container>
                </StyledSidebar>
            </Grid>
            <Modal open={openModal}>
                <div className="flex justify-center items-center h-full w-full">
                    <video
                        src={`${process.env.REACT_APP_ASSETS_URL}/introducion.mp4`}
                        controls
                        width="50%"
                        height="50%"
                        onEnded={handleClose}
                    ></video>
                </div>
            </Modal>
        </StyledContainer>
    )
}

export default Dashboard;