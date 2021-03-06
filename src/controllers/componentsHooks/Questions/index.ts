import useApi from "api";
import useModels from "models";
import {useEffect, useState} from "react";
import {useHistory, useParams} from "react-router";
import Swal from "sweetalert2";

const useQuestions = (questions: any) => {
    /** History */
    const history = useHistory();
    const {id: moduleId} = useParams<{ id: string }>();

    /** Api */
    const {useActions} = useApi();
    const {dispatch, useModulesActions} = useActions();
    const {actSetQuestion, actSetQuestionNumber, actSaveSection, actGetUserProgress} = useModulesActions();

    /** States */
    const [responses, setResponses] = useState<any[]>([]);
    const [oportunity, setOportunity] = useState<number>(0);
    const [userProgress, setUserProgress] = useState<any>([]);
    const [showQuestions, setShowQuestion] = useState<{ image: string; open: boolean }>({image: "popup", open: true});

    /** Selectors */
    const {useSelectors} = useModels();
    const {useSelector, useLoginSelectors} = useSelectors();
    const {questionSelector, questionNumberSelector} = useLoginSelectors();
    const selectedQuestion = useSelector(questionSelector);
    const {question} = useSelector(questionNumberSelector);

    /** Handlers */

    /**
     * This function is used for set the section completed.
     * @return void.
     */
    const saveSection = () => {
        if (moduleId && (userProgress.moduleFinished <= moduleId)) {
            // @ts-ignore
            dispatch(actSaveSection({
                onError: (error: any) => console.log(error),
                onSuccess: () => window.location.reload()
            }))
        } else {
            window.location.reload();
        }

    }

    /**
     *  This function is used to make the change and the reaction of the system when selecting an answer.
     *  @param is_correct number.
     *  @param id number.
     *  @param questions any[].
     *  @return void
     */
    const validateQuestion = (is_correct: number, id: number, answer: string, questions: any[]) => {
        let percentCorrect: number = questions.length * 0.7;
        if (is_correct === 0 && oportunity === 0) {
            Swal.fire({
                icon: "error",
                title: "Respuesta Incorrecta!",
                text: "??Int??ntalo una vez m??s!"
            }).then(r => setOportunity(1));
        } else if (is_correct === 1 && oportunity === 0) {
            Swal.fire({
                icon: "success",
                title: "??Muy bien!",
                text: "Respuesta correcta"
            }).then(r => {
                setOportunity(0);
                setResponses([...responses, {question: id, correct: true}]);

                let index = null;
                let newQuestion = questions.find((item: any, ind: number) => {
                    index = ind;
                    return item.id === question + 1
                });

                if (newQuestion !== undefined) {
                    // @ts-ignore
                    dispatch(actSetQuestion({
                        onError: (error) => console.log(error),
                        onSuccess: () => {
                            //@ts-ignore
                            dispatch(actSetQuestionNumber({question: question + 1}))
                        }
                    }, {...newQuestion, index: index}))
                } else {
                    const totalResponses = responses.filter((item: any) => item.correct);
                    if (totalResponses.length + 1 >= percentCorrect) {
                        if (moduleId === "5") {
                            setShowQuestion({image: "isModule5", open: true});
                        }

                        setShowQuestion({image: "aaaa", open: true});

                        setTimeout(() => {
                            saveSection();
                            setShowQuestion({image: "", open: false})
                        }, 5000)

                    } else {
                        Swal.fire({
                            icon: "error",
                            title: "Vuelva a intentarlo para",
                            html: ` obtener su constancia
                                Tu nota fue de: <b>${totalResponses.length + 1}</b>
                            `
                        }).then(r => history.push("/dashboard"))
                    }
                }
            });
        }

        if (is_correct === 0 && oportunity === 1) {
            Swal.fire({
                icon: "error",
                title: "Respuesta Incorrecta!",
                html: `la respuesta correcta es: <b>${answer}</b>`
            }).then(r => {
                setOportunity(0);
                setResponses([...responses, {question: id, correct: false}]);
                let index = null;
                let newQuestion = questions.find((item: any, ind: number) => {
                    index = ind;
                    return item.id === question + 1
                });

                if (newQuestion !== undefined) {
                    // @ts-ignore
                    dispatch(actSetQuestion({
                        onError: (error) => console.log(error),
                        onSuccess: () => {
                            //@ts-ignore
                            dispatch(actSetQuestionNumber({question: question + 1}))
                        }
                    }, {...newQuestion, index: index}))
                } else {
                    const totalResponses = responses.filter((item: any) => item.correct);
                    if (totalResponses.length >= percentCorrect) {
                        if (moduleId === "5") {
                            setShowQuestion({image: "isModule5", open: true});
                        }
                        setShowQuestion({image: "aaaa", open: true});
                        setTimeout(() => {
                            saveSection();
                            setShowQuestion({image: "", open: false})
                        }, 5000)
                    } else {
                        Swal.fire({
                            icon: "error",
                            title: "Falto un poco mas!",
                            html: `Tranquilo(a) intentalo nuevamente para que puedas habilitar los siguientes modulos
                                Tu nota fue de: <b>${totalResponses.length}</b>
                            `
                        }).then(r => history.push("/dashboard"))
                    }
                }
            });
        } else if (is_correct === 1 && oportunity === 1) {
            Swal.fire({
                icon: "success",
                title: "??Muy bien!",
                text: "Respuesta correcta"
            }).then(r => {
                setOportunity(0);
                setResponses([...responses, {question: id, correct: true}]);

                let index = null;
                let newQuestion = questions.find((item: any, ind: number) => {
                    index = ind;
                    return item.id === question + 1
                });

                if (newQuestion !== undefined) {
                    // @ts-ignore
                    dispatch(actSetQuestion({
                        onError: (error) => console.log(error),
                        onSuccess: () => {
                            //@ts-ignore
                            dispatch(actSetQuestionNumber({question: question + 1}))
                        }
                    }, {...newQuestion, index: index}))
                } else {
                    const totalResponses = responses.filter((item: any) => item.correct);
                    if (totalResponses.length >= percentCorrect) {
                        if (moduleId === "5") {
                            setShowQuestion({image: "isModule5", open: true});
                        }
                        setShowQuestion({image: "aaaa", open: true});
                        setTimeout(() => {
                            saveSection();
                            setShowQuestion({image: "", open: false})
                        }, 5000)
                    } else {
                        Swal.fire({
                            icon: "error",
                            title: "Falto un poco mas!",
                            html: `Tranquilo(a) intentalo nuevamente para que puedas habilitar los siguientes modulos
                                Tu nota fue de: <b>${totalResponses.length}</b>
                            `
                        }).then(r => history.push("/dashboard"))
                    }
                }
            });
        }
    }

    /**
     * This function is used to be able to save the next step after the presentation view of the questionnaire.
     * @param questions Array
     */
    const handleChange = (questions: any[]) => {
        console.error(questions)
        let index = null;
        let firstQuestion = questions.find((item: any, ind: number) => {
            index = ind + 1
            return item.id === questions[0].id
        });

        // @ts-ignore
        dispatch(actSetQuestion({
            onError: (error: any) => console.log(error),
            onSuccess: () => {
                //@ts-ignore
                dispatch(actSetQuestionNumber({question: questions[0].id}));
            }
        }, {
            ...firstQuestion,
            index: index
        }));
    }

    /**
     * This function is used for reset the count of test.
     * @return void
     */
    const resetTest = () => {
        // @ts-ignore
        dispatch(actSetQuestionNumber({question: 0}));
    }

    useEffect(() => {
        // @ts-ignore
        dispatch(actGetUserProgress({
            onError: (error: any) => console.log(error.data.message),
            onSuccess: (data: any) => setUserProgress(data)
        }))
    }, [])

    return {
        validateQuestion,
        handleChange,
        question,
        selectedQuestion,
        resetTest,
        answers: selectedQuestion.answers,
        showQuestions,
        setShowQuestion
    }
}

export default useQuestions;