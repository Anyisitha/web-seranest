import { Container, Grid, Tooltip } from "@mui/material";
import useControllers from "controllers";
import React, { Fragment, useEffect } from "react";
import {
    StyledButtonSection,
    StyledContainer,
    StyledContainerTab,
    StyledGrid,
    StyledNumberModule,
    StyledPaper,
    StyledSpan,
    StyledTab
} from "./Modules.styles";
import Questions from "./Questions";
import ModulesMobile from "./components/Mobile/Modules.Mobile";
import useModels from "models";

const Module = () => {
    /** Controllers */
    const { useGeneralHooks, useScreenHooks } = useControllers();
    const { useGeneral } = useGeneralHooks();
    const { width } = useGeneral();
    const { useModules, useDashboard } = useScreenHooks();
    const { id, sections, getModulesSections, saveSection, description, handlerShowContent, showContent, section, handleSetSection, questions } = useModules();
    const { getUserProgress, userProgress } = useDashboard();

    const { useSelectors } = useModels();
    const { useSelector, useLoginSelectors } = useSelectors();
    const { userProgressSelector } = useLoginSelectors();
    const { moduleFinished } = useSelector(userProgressSelector)

    /** Effects */
    useEffect(() => {
        const executePetitions = async () => {
            await getUserProgress();
        }

        executePetitions();
    }, [])

    useEffect(() => {
        getModulesSections();
        // eslint-disable-next-line
    }, [id]);

    const moduleId = id;
    const Buttons = ({ index, id, name }: { index: number; id: number; name: string; }) => {
        if (index > userProgress.sectionFinished) {
            return (
                <Tooltip title="Contenido no activo">
                    <StyledButtonSection
                        disabled={true}
                        completed={false}
                    >
                        {name}
                    </StyledButtonSection>
                </Tooltip>
            )
        } else if (index === userProgress.sectionFinished + 1) {
            return (
                <StyledButtonSection
                    disabled={false}
                    completed={false}
                    onClick={() => handlerShowContent(id)}
                >
                    {name}
                </StyledButtonSection>
            )
        } else {
            return (
                <>
                    <StyledButtonSection
                        disabled={index > userProgress.sectionFinished}
                        completed={index < userProgress.sectionFinished}
                        onClick={() => {
                            handlerShowContent(id)
                        }}
                    >
                        {name}
                    </StyledButtonSection>
                </>

            )
        }
    }

    return width >= 1024 ? (
        <StyledContainer background={`${process.env.REACT_APP_ASSETS_URL}/images/background-login.jpeg`}>
            <Container>
                <Grid container>
                    <StyledContainerTab>
                        <StyledTab item md={12}>
                            <StyledNumberModule>Contenido Módulo {id}</StyledNumberModule>
                        </StyledTab>
                    </StyledContainerTab>
                </Grid>
                <Grid container>
                    <StyledContainerTab fullWidth>
                        <StyledTab background={`${process.env.REACT_APP_ASSETS_URL}/images/background-login.jpeg`} item md={12} isBody>
                            {
                                showContent ? (
                                    <Fragment>
                                        {
                                            section.content[0].type === "AV" ? (
                                                <iframe
                                                    src={section.content[0].content}
                                                    height="100%"
                                                    width="100%"
                                                    title="Av-iframe"
                                                ></iframe>
                                            ) : section.content[0].type === "Video" ? (
                                                <video
                                                    controls
                                                    id="video"
                                                    src={section.content[0].content}
                                                    height="100%"
                                                    width="100%"
                                                    style={{ height: "100%" }}
                                                    onEnded={saveSection}
                                                ></video>
                                            ) : (
                                                <Grid item md={12} className="flex justify-center h-full">
                                                    <StyledPaper elevation={6}>
                                                        <Questions
                                                            module={id}
                                                            description={description}
                                                            questions={questions}
                                                            isMobile={false}
                                                        />
                                                    </StyledPaper>
                                                </Grid>
                                            )
                                        }
                                    </Fragment>
                                ) : (
                                    <Fragment>

                                        <StyledSpan>{description}</StyledSpan>
                                        <Grid container className="items-center mt-16">
                                            {
                                                sections.map((item: any, index: number) => (
                                                    <>
                                                        {
                                                            moduleId && (parseInt(moduleFinished) > parseInt(moduleId)) ? (
                                                                <StyledGrid item md={12} className="flex justify-center my-8">

                                                                    <StyledButtonSection
                                                                        disabled={false}
                                                                        completed={true}
                                                                        onClick={() => handlerShowContent(parseInt(moduleId))}
                                                                    >
                                                                        {item.name}
                                                                    </StyledButtonSection>
                                                                </StyledGrid>
                                                            ) : (
                                                                <StyledGrid item md={12} className="flex justify-center my-8">
                                                                    <Buttons name={item.name} id={item.id} index={index} />
                                                                </StyledGrid>
                                                            )
                                                        }
                                                    </>

                                                ))
                                            }
                                        </Grid>
                                    </Fragment>
                                )}
                        </StyledTab>
                    </StyledContainerTab>
                </Grid>
            </Container >
        </StyledContainer >
    ) : (
        <ModulesMobile />
    )
}

export default Module;