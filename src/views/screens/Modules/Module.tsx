import {Container, Grid} from "@mui/material";
import useControllers from "controllers";
import React, {useEffect} from "react";
import {
    StyledButtonSection,
    StyledContainer,
    StyledContainerTab,
    StyledGrid,
    StyledNumberModule,
    StyledSpan,
    StyledTab
} from "./Modules.styles";
import DragAndDrop from "./components/DragAndDrop";
import _ from "lodash";
import Video from "./components/Video";
import Iframe from "./components/Iframe/Iframe";
import Questions from "./Questions";


const Module = () => {
    /** Controllers */
    const {useScreenHooks} = useControllers();
    const {useModules, useDashboard} = useScreenHooks();
    const {getUserProgress, userProgress} = useDashboard();
    const {moduleFinished, sectionFinished} = userProgress;
    const {
        id,
        showContent,
        description,
        sections,
        handlerShowContent,
        getModulesSections,
        section,
        saveSection,
        questions,
        saveModule
    } = useModules();

    /** Effects */
    useEffect(() => {
        getUserProgress();
        getModulesSections();
    }, [])

    return (
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
                        <StyledTab background={`${process.env.REACT_APP_ASSETS_URL}/images/background-login.jpeg`} item
                                   md={12} isBody>
                            {
                                showContent ? (
                                    <>
                                        {
                                            section.content[0].type === "Actividad Interactiva" ? (
                                                <DragAndDrop/>
                                            ) : section.content[0].type === "Video" ? (
                                                <Video
                                                    onEnded={saveSection}
                                                    url={section.content[0].content}
                                                />
                                            ) : section.content[0].type === "pdf" ? (
                                                <Iframe
                                                    onClick={saveModule}
                                                    url={section.content[0].content}
                                                />
                                            ) : (
                                                <Grid item md={12} className="flex justify-center h-full">
                                                    <Questions
                                                        module={id}
                                                        description={description}
                                                        questions={questions}
                                                        isMobile={false}
                                                    />
                                                </Grid>
                                            )
                                        }
                                    </>
                                ) : (
                                    <>
                                        <StyledSpan>{description}</StyledSpan>
                                        <Grid container className="items-center mt-16 h-[45%]">
                                            {
                                                _.map(sections, (item: any, index: number) => (
                                                        <>
                                                            {
                                                                id && parseInt(moduleFinished) > parseInt(id) ? (
                                                                    <StyledGrid
                                                                        item
                                                                        md={12}
                                                                        xs={12}
                                                                        className="flex justify-center my-8"
                                                                        key={index}
                                                                    >

                                                                        <StyledButtonSection
                                                                            disabled={false}
                                                                            completed={true}
                                                                            onClick={() => handlerShowContent(item.id)}
                                                                        >
                                                                            {item.name}
                                                                        </StyledButtonSection>
                                                                    </StyledGrid>
                                                                ) : (
                                                                    <StyledGrid
                                                                        item
                                                                        md={12}
                                                                        xs={12}
                                                                        className="flex justify-center my-8"
                                                                        key={index}
                                                                    >

                                                                        <StyledButtonSection
                                                                            disabled={index > sectionFinished}
                                                                            completed={index < sectionFinished}
                                                                            onClick={() => handlerShowContent(item.id)}
                                                                        >
                                                                            {item.name}
                                                                        </StyledButtonSection>
                                                                    </StyledGrid>
                                                                )
                                                            }
                                                        </>
                                                    )
                                                )
                                            }
                                        </Grid>
                                    </>
                                )
                            }
                        </StyledTab>
                    </StyledContainerTab>
                </Grid>
            </Container>
        </StyledContainer>
    );
}

export default Module;