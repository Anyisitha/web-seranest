import {Container, Grid} from "@mui/material";
import useControllers from "controllers";
import React/**, { Fragment, useEffect }*/, {useEffect} from "react";
import {
    StyledButtonSection,
    StyledContainer,
    StyledContainerTab,
    StyledGrid,
    StyledNumberModule,
    StyledSpan,
    // StyledSpan,
    StyledTab
} from "./Modules.styles";
// import Questions from "./Questions";
// import ModulesMobile from "./components/Mobile/Modules.Mobile";
// import useModels from "models";
import DragAndDrop from "./components/DragAndDrop";
import _ from "lodash";
import Video from "./components/Video";
import Iframe from "./components/Iframe/Iframe";
import Questions from "./Questions";

// const Module = () => {
//     /** Controllers */
//     const { useGeneralHooks, useScreenHooks } = useControllers();
//     const { useGeneral } = useGeneralHooks();
//     const { width } = useGeneral();
//     const { useModules, useDashboard } = useScreenHooks();
//     const { id, sections, getModulesSections, saveSection, description, handlerShowContent, showContent, section, handleSetSection, questions } = useModules();
//     const { getUserProgress, userProgress } = useDashboard();
//
//     const { useSelectors } = useModels();
//     const { useSelector, useLoginSelectors } = useSelectors();
//     const { userProgressSelector } = useLoginSelectors();
//     const { moduleFinished } = useSelector(userProgressSelector)
//
//     /** Effects */
//     useEffect(() => {
//         const executePetitions = async () => {
//             await getUserProgress();
//         }
//
//         executePetitions();
//     }, [])
//
//     useEffect(() => {
//         getModulesSections();
//         // eslint-disable-next-line
//     }, [id]);
//
//     const moduleId = id;
//     const Buttons = ({ index, id, name }: { index: number; id: number; name: string; }) => {
//         if (index > userProgress.sectionFinished) {
//             return (
//                 <Tooltip title="Contenido no activo">
//                     <StyledButtonSection
//                         disabled={true}
//                         completed={false}
//                     >
//                         {name}
//                     </StyledButtonSection>
//                 </Tooltip>
//             )
//         } else if (index === userProgress.sectionFinished + 1) {
//             return (
//                 <StyledButtonSection
//                     disabled={false}
//                     completed={false}
//                     onClick={() => handlerShowContent(id)}
//                 >
//                     {name}
//                 </StyledButtonSection>
//             )
//         } else {
//             return (
//                 <>
//                     <StyledButtonSection
//                         disabled={index > userProgress.sectionFinished}
//                         completed={index < userProgress.sectionFinished}
//                         onClick={() => {
//                             handlerShowContent(id)
//                         }}
//                     >
//                         {name}
//                     </StyledButtonSection>
//                 </>
//
//             )
//         }
//     }
//
//     return
//
//     width >= 1024 ? (
//         <StyledContainer background={`${process.env.REACT_APP_ASSETS_URL}/images/background-login.jpeg`}>
//             <Container>
//                 <Grid container>
//                     <StyledContainerTab>
//                         <StyledTab item md={12}>
//                             <StyledNumberModule>Contenido Módulo {id}</StyledNumberModule>
//                         </StyledTab>
//                     </StyledContainerTab>
//                 </Grid>
//                 <Grid container>
//                     <StyledContainerTab fullWidth>
//                         <StyledTab background={`${process.env.REACT_APP_ASSETS_URL}/images/background-login.jpeg`} item md={12} isBody>
//                             {
//                                 showContent ? (
//                                     <Fragment>
//                                         {
//                                             section.content[0].type === "AV" ? (
//                                                 <iframe
//                                                     src={section.content[0].content}
//                                                     height="100%"
//                                                     width="100%"
//                                                     title="Av-iframe"
//                                                 ></iframe>
//                                             ) : section.content[0].type === "Video" ? (
//
//                                             ) : (
//                                                 <Grid item md={12} className="flex justify-center h-full">
//                                                     <StyledPaper elevation={6}>
//                                                         <Questions
//                                                             module={id}
//                                                             description={description}
//                                                             questions={questions}
//                                                             isMobile={false}
//                                                         />
//                                                     </StyledPaper>
//                                                 </Grid>
//                                             )
//                                         }
//                                     </Fragment>
//                                 ) : (
//                                     <Fragment>
//
//                                         <StyledSpan>{description}</StyledSpan>
//                                         <Grid container className="items-center mt-16">
//                                             {
//                                                 sections.map((item: any, index: number) => (
//                                                     <>
//                                                         {
//                                                             moduleId && (parseInt(moduleFinished) > parseInt(moduleId)) ? (
//                                                                 <StyledGrid item md={12} className="flex justify-center my-8">
//
//                                                                     <StyledButtonSection
//                                                                         disabled={false}
//                                                                         completed={true}
//                                                                         onClick={() => handlerShowContent(parseInt(moduleId))}
//                                                                     >
//                                                                         {item.name}
//                                                                     </StyledButtonSection>
//                                                                 </StyledGrid>
//                                                             ) : (
//                                                                 <StyledGrid item md={12} className="flex justify-center my-8">
//                                                                     <Buttons name={item.name} id={item.id} index={index} />
//                                                                 </StyledGrid>
//                                                             )
//                                                         }
//                                                     </>
//
//                                                 ))
//                                             }
//                                         </Grid>
//                                     </Fragment>
//                                 )}
//                         </StyledTab>
//                     </StyledContainerTab>
//                 </Grid>
//             </Container >
//         </StyledContainer >
//     ) : (
//         <ModulesMobile />
//     )
// }

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
    }, [getUserProgress, getModulesSections])

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
                                            section.content[0].type === "Actividad interactiva " ? (
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