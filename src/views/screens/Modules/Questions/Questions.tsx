import {Container, Grid, Modal} from "@mui/material";
import {Fragment, useEffect, useState} from "react";
import {
    StyledButton,
    StyledContainerQuestions,
    StyledDescription,
    StyledModal,
    StyledQuestion,
    StyledSpan, StyledSpanHover,
    StyledTitle
} from "./questions.styles";
import useControllers from "controllers";
import {useParams} from "react-router";

interface IQuestionsProps {
    module?: number | string;
    description?: string;
    questions: any;
    isMobile: boolean;
}

const Questions = ({module, description, questions, isMobile}: IQuestionsProps) => {
    /** Controllers */
    const {useComponentsHooks} = useControllers();
    const {useQuestions} = useComponentsHooks();
    const {validateQuestion, handleChange, selectedQuestion, question, resetTest, answers, showQuestions, setShowQuestion} = useQuestions(questions);

    const {id} = useParams<{ id: string }>();

    /** Effects*/
    useEffect(() => {
        setTimeout(() => {
            setShowQuestion({image: "", open: false});
        }, 7000)
    }, [question]);

    useEffect(() => {
        resetTest();
        // eslint-disable-next-line
    }, []);

    let correctAnswer = answers && answers.find((item: any) => {
        return item.is_correct === 1;
    });

    return (
        <Fragment>
            {
                !isMobile ? (
                    <StyledContainerQuestions
                        background={`${process.env.REACT_APP_ASSETS_URL}/images/background-login.jpeg`}
                        question={question}
                        isMobile={isMobile}
                    >
                        {
                            question === 0 ? (
                                <Container>
                                    {
                                        !showQuestions.open ? (
                                            <Fragment>
                                                <StyledTitle>Cuestionario modulo {module}</StyledTitle>
                                                <StyledDescription>{description}</StyledDescription>
                                                <Grid md={12} className="flex justify-center mt-6">
                                                    <StyledButton
                                                        onClick={() => handleChange(questions)}>Comenzar</StyledButton>
                                                </Grid>
                                            </Fragment>
                                        ) : (
                                            <Fragment>
                                                <Modal
                                                    open={showQuestions.open}
                                                >
                                                    <Grid item md={12}
                                                          className="flex justify-center items-center h-full">
                                                        <StyledModal
                                                            background={
                                                                showQuestions.image === "popup" ?
                                                                    `${process.env.REACT_APP_ASSETS_URL}/images/popup-questions.jpeg`
                                                                    : showQuestions.image === "isModule5" ?
                                                                        `${process.env.REACT_APP_ASSETS_URL}/images/constancia.jpeg`
                                                                        :
                                                                        `${process.env.REACT_APP_ASSETS_URL}/images/right-answer.png`
                                                            }>
                                                        </StyledModal>
                                                    </Grid>
                                                </Modal>
                                            </Fragment>
                                        )
                                    }
                                </Container>
                            ) : (
                                <Fragment>
                                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}
                                          className="flex justify-between pb-4">
                                        <Grid item lg={4} xl={4} className="flex items-center">
                                            <img src={`${process.env.REACT_APP_ASSETS_URL}/images/title-quiz-${id}.png`}
                                                 alt=""/>
                                        </Grid>
                                        <Grid item lg={4} xl={4} className="flex justify-end">
                                            <img src={`${process.env.REACT_APP_ASSETS_URL}/images/logo-seranest.png`}
                                                 alt="" width={window.innerWidth >= 1024 ? "35%" : "100%"}/>
                                        </Grid>
                                    </Grid>
                                    <Grid container>
                                        <Grid item xs={2} sm={2} md={2} lg={1} xl={1} className="flex items-center">
                                            <img
                                                src={`${process.env.REACT_APP_ASSETS_URL}/images/${selectedQuestion.question_number}-quiz-number.png`}
                                                width="70%"/>
                                        </Grid>
                                        <Grid item xs={10} sm={10} md={10} lg={11} xl={11}
                                              className="flex items-center">
                                            <StyledQuestion>{selectedQuestion.question}</StyledQuestion>
                                        </Grid>
                                    </Grid>
                                    <div className="">

                                        <ol type="A">
                                            {

                                                selectedQuestion.answers.map((item: any, index: number) => {

                                                    if (index === 0) {
                                                        return (
                                                            <Grid container className="items-center gap-2 pt-5"
                                                                  key={index}>
                                                                <StyledSpan
                                                                    onClick={() => validateQuestion(item.is_correct, selectedQuestion.id, correctAnswer.answers, questions)}
                                                                >
                                                                    <b className={"text-[#ffd913] font-bold"}>A. </b><StyledSpanHover>{item.answers}</StyledSpanHover>
                                                                </StyledSpan>
                                                            </Grid>
                                                        )
                                                    } else if (index === 1) {
                                                        return (
                                                            <Grid container className="items-center gap-2 pt-5"
                                                                  key={index}>
                                                                <StyledSpan
                                                                    onClick={() => validateQuestion(item.is_correct, selectedQuestion.id, correctAnswer.answers, questions)}
                                                                >
                                                                    <b className="text-[#ffd913] font-bold">B. </b><StyledSpanHover>{item.answers}</StyledSpanHover>
                                                                </StyledSpan>
                                                            </Grid>
                                                        )
                                                    } else if (index === 2) {
                                                        return (
                                                            <Grid container className="items-center gap-2 pt-5"
                                                                  key={index}>
                                                                <StyledSpan
                                                                    onClick={() => validateQuestion(item.is_correct, selectedQuestion.id, correctAnswer.answers, questions)}
                                                                >
                                                                    <b className="text-[#ffd913] font-bold">C. </b><StyledSpanHover>{item.answers}</StyledSpanHover>
                                                                </StyledSpan>
                                                            </Grid>
                                                        )
                                                    } else {
                                                        return (
                                                            <Grid container className="items-center gap-2 pt-5"
                                                                  key={index}>
                                                                <StyledSpan
                                                                    onClick={() => validateQuestion(item.is_correct, selectedQuestion.id, correctAnswer.answers, questions)}
                                                                >
                                                                    <b className="text-[#ffd913] font-bold">D. </b><StyledSpanHover>{item.answers}</StyledSpanHover>
                                                                </StyledSpan>
                                                            </Grid>
                                                        )
                                                    }
                                                })
                                            }
                                        </ol>
                                    </div>
                                    <Modal
                                        open={showQuestions.open}
                                    >
                                        <Grid item md={12}
                                              className="flex justify-center items-center h-full">
                                            <StyledModal
                                                background={
                                                    showQuestions.image === "popup" ?
                                                        `${process.env.REACT_APP_ASSETS_URL}/images/popup-questions.jpeg`
                                                        : showQuestions.image === "isModule5" ?
                                                            `${process.env.REACT_APP_ASSETS_URL}/images/constancia.jpeg`
                                                            :
                                                            `${process.env.REACT_APP_ASSETS_URL}/images/right-answer.png`
                                                }>
                                            </StyledModal>
                                        </Grid>
                                    </Modal>
                                </Fragment>
                            )
                        }
                    </StyledContainerQuestions>
                ) : (
                    <StyledContainerQuestions
                        question={question}
                        isMobile={isMobile}
                        background="https://eml.com.co/e-learning-roche/roche/images/fondo-cuestions1.jpg"
                    >
                        {
                            question === 0 ? (
                                <Container>
                                    {
                                        showQuestions ? (
                                            <Fragment>
                                                <StyledTitle>Cuestionario módulo {module}</StyledTitle>
                                                <StyledDescription>{description}</StyledDescription>
                                                <Grid md={12} className="flex justify-center mt-2 md:mt-6">
                                                    <StyledButton
                                                        onClick={() => handleChange(questions)}>Comenzar</StyledButton>
                                                </Grid>
                                            </Fragment>
                                        ) : (
                                            <Modal
                                                open={!showQuestions}
                                            >
                                                <Grid item md={12}
                                                      className="flex justify-center items-center h-full">
                                                    <StyledModal
                                                        background={"https://eml.com.co/e-learning-roche/roche/images/popup.png"}>
                                                        <div className="container">
                                                            <div className="loader">
                                                                <div className="rocket">
                                                                    <i className="fas fa-rocket"></i>
                                                                    <i className="fas fa-cloud"></i>
                                                                    <i className="fas fa-cloud"></i>
                                                                    <i className="fas fa-cloud"></i>
                                                                    <i className="fas fa-cloud"></i>
                                                                </div>
                                                                <span>
                                                                    <i></i>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </StyledModal>
                                                </Grid>
                                            </Modal>
                                        )
                                    }
                                </Container>
                            ) : (
                                <Fragment>
                                    <StyledQuestion>{`${selectedQuestion.id}. ${selectedQuestion.question}`}</StyledQuestion>
                                    <div className="pl-4">
                                        <ol type="A" className="mt-4">
                                            {

                                                selectedQuestion.answers.map((item: any, index: number) => {
                                                    if (index === 0) {
                                                        return (
                                                            <Grid container className="items-center gap-2" key={index}>
                                                                <StyledSpan
                                                                    onClick={() => validateQuestion(item.is_correct, selectedQuestion.id, correctAnswer.answers, questions)}
                                                                >
                                                                    <b className="text-primary font-bold">A. </b>{item.answers}
                                                                </StyledSpan>
                                                            </Grid>
                                                        )
                                                    } else if (index === 1) {
                                                        return (
                                                            <Grid container className="items-center gap-2" key={index}>
                                                                <StyledSpan
                                                                    onClick={() => validateQuestion(item.is_correct, selectedQuestion.id, correctAnswer.answers, questions)}
                                                                >
                                                                    <b className="text-primary font-bold">B. </b>{item.answers}
                                                                </StyledSpan>
                                                            </Grid>
                                                        )
                                                    } else if (index === 2) {
                                                        return (
                                                            <Grid container className="items-center gap-2" key={index}>
                                                                <StyledSpan
                                                                    onClick={() => validateQuestion(item.is_correct, selectedQuestion.id, correctAnswer.answers, questions)}
                                                                >
                                                                    <b className="text-primary font-bold">C. </b>{item.answers}
                                                                </StyledSpan>
                                                            </Grid>
                                                        )
                                                    } else {
                                                        return (
                                                            <Grid container className="items-center" key={index}>
                                                                <StyledSpan
                                                                    onClick={() => validateQuestion(item.is_correct, selectedQuestion.id, correctAnswer.answers, questions)}
                                                                >
                                                                    <b className="text-primary font-bold">D. </b>{item.answers}
                                                                </StyledSpan>
                                                            </Grid>
                                                        )
                                                    }
                                                })
                                            }
                                        </ol>
                                    </div>
                                </Fragment>
                            )
                        }

                    </StyledContainerQuestions>
                )
            }
        </Fragment>
    );
}

export default Questions;