import {
    StyledButtonSection,
    StyledContainer,
    StyledContainerTab,
    StyledGrid,
    StyledNumberModule,
    StyledPaper,
    StyledSpan,
    StyledTab
} from "../../Modules.styles";
import {Container, Grid, Tooltip} from "@mui/material";
import React, {Fragment, useEffect} from "react";
import useControllers from "controllers";
import Questions from "../../Questions";
import useModels from "models";

const ModulesMobile = () => {
    /** Controllers */
    const {useScreenHooks} = useControllers();
    const {useModules, useDashboard} = useScreenHooks();
    const {userProgress, getUserProgress} = useDashboard();
    const {
        id,
        showContent,
        description,
        sections,
        section,
        questions,
        handlerShowContent,
        getModulesSections,
        saveSection
    } = useModules();

    /** Effects */
    useEffect(() => {
        getModulesSections();
        getUserProgress();
    }, [getModulesSections, section, getUserProgress])

    const { useSelectors } = useModels();
    const { useSelector, useLoginSelectors } = useSelectors();
    const { userProgressSelector } = useLoginSelectors();
    const { moduleFinished } = useSelector(userProgressSelector)

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

    return (
        <StyledContainer background={`${process.env.REACT_APP_ASSETS_URL}/images/background-login.jpeg`}>
            <Container>
                <Grid container>
                    <StyledContainerTab fullWidth>
                        <StyledTab item md={12}>
                            <StyledNumberModule>Módulo {id}</StyledNumberModule>
                        </StyledTab>
                    </StyledContainerTab>
                </Grid>
                <Grid container>
                    <StyledContainerTab fullWidth>
                        <StyledTab background={require('assets/images/ondas.png')} item md={12} isBody>
                            {
                                showContent ? (
                                    <div className="relative h-full">
                                        {
                                            section.content.type !== "Test" && (
                                                <span
                                                    className="text-white absolute z-[1] right-[5%] top-[3%] cursor-pointer"
                                                    onClick={saveSection}
                                                >
                                                    X
                                                </span>
                                            )
                                        }
                                        {
                                            section.content.type === "AV" ? (
                                                <iframe
                                                    src={section.content.content}
                                                    height="100%"
                                                    width="100%"
                                                    title="Av-iframe"
                                                    className="relative"
                                                >

                                                </iframe>
                                            ) : section.content.type === "Video" ? (
                                                <video
                                                    controls
                                                    id="video"
                                                    src={section.content.content}
                                                    height="100%"
                                                    width="100%"
                                                    style={{height: "100%"}}
                                                    onEnded={saveSection}
                                                ></video>
                                            ) : (
                                                <Grid item md={12} className="flex justify-center h-full">
                                                    <StyledPaper elevation={6} isMobile>
                                                        <Questions
                                                            module={id}
                                                            description={description}
                                                            questions={questions}
                                                            isMobile={true}
                                                        />
                                                    </StyledPaper>
                                                </Grid>
                                            )
                                        }
                                    </div>
                                ) : (
                                    <Fragment>
                                        <StyledSpan>{description}</StyledSpan>
                                        <Grid container className="items-center h-[65%] mt-16">
                                            {
                                                sections.map((item: any, index: number) => (
                                                    <>
                                                        {
                                                            moduleId && (parseInt(moduleFinished) > parseInt(moduleId)) ? (
                                                                    <StyledButtonSection
                                                                        disabled={false}
                                                                        completed={true}
                                                                        onClick={() => handlerShowContent(parseInt(moduleId))}
                                                                    >
                                                                        {item.name}
                                                                    </StyledButtonSection>
                                                            ) : (
                                                                    <Buttons name={item.name} id={item.id} index={index} />
                                                            )
                                                        }
                                                    </>
                                                ))
                                            }
                                        </Grid>
                                    </Fragment>
                                )
                            }
                        </StyledTab>
                    </StyledContainerTab>
                </Grid>
            </Container>
        </StyledContainer>
    );
}

export default ModulesMobile;