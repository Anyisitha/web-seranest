import { Container, Grid, Modal } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import {
    StyledButton,
    StyledContainerQuestions,
    StyledDescription,
    StyledModal,
    StyledQuestion,
    StyledSpan,
    StyledTitle
} from "./questions.styles";
import useControllers from "controllers";

interface IQuestionsProps {
    module?: number | string;
    description?: string;
    questions: any;
    isMobile: boolean;
}

const Questions = ({ module, description, questions, isMobile }: IQuestionsProps) => {
    /** States */
    const [showQuestions, setShowQuestion] = useState<boolean>(false);

    /** Controllers */
    const { useComponentsHooks } = useControllers();
    const { useQuestions } = useComponentsHooks();
    const { validateQuestion, handleChange, selectedQuestion, question, resetTest, answers } = useQuestions(questions);

    /** Effects*/
    useEffect(() => {
        setTimeout(() => {
            setShowQuestion(true);
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
                                        showQuestions ? (
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
                                            </Fragment>
                                        )
                                    }
                                </Container>
                            ) : (
                                <Fragment>
                                    <StyledQuestion>{`${selectedQuestion.id}. ${selectedQuestion.question}`}</StyledQuestion>
                                    <div className="">
                                        <ol type="A" className="mt-8">
                                            {

                                                selectedQuestion.answers.map((item: any, index: number) => {

                                                    if (index === 0) {
                                                        return (
                                                            <Grid container className="items-center gap-2 pt-5" key={index}>
                                                                <StyledSpan
                                                                    onClick={() => validateQuestion(item.is_correct, selectedQuestion.id, correctAnswer.answers, questions)}
                                                                >
                                                                    <b className="text-[#304490] font-bold">A. </b>{item.answers}
                                                                </StyledSpan>
                                                            </Grid>
                                                        )
                                                    } else if (index === 1) {
                                                        return (
                                                            <Grid container className="items-center gap-2 pt-5" key={index}>
                                                                <StyledSpan
                                                                    onClick={() => validateQuestion(item.is_correct, selectedQuestion.id, correctAnswer.answers, questions)}
                                                                >
                                                                    <b className="text-[#304490] font-bold">B. </b>{item.answers}
                                                                </StyledSpan>
                                                            </Grid>
                                                        )
                                                    } else if (index === 2) {
                                                        return (
                                                            <Grid container className="items-center gap-2 pt-5" key={index}>
                                                                <StyledSpan
                                                                    onClick={() => validateQuestion(item.is_correct, selectedQuestion.id, correctAnswer.answers, questions)}
                                                                >
                                                                    <b className="text-[#304490] font-bold">C. </b>{item.answers}
                                                                </StyledSpan>
                                                            </Grid>
                                                        )
                                                    } else {
                                                        return (
                                                            <Grid container className="items-center gap-2 pt-5" key={index}>
                                                                <StyledSpan
                                                                    onClick={() => validateQuestion(item.is_correct, selectedQuestion.id, correctAnswer.answers, questions)}
                                                                >
                                                                    <b className="text-[#304490] font-bold">D. </b>{item.answers}
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
                                                <StyledTitle>Cuestionario modulo {module}</StyledTitle>
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