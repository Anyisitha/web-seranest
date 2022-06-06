import useCreateSelector from "helpers/createSelector";

const useLoginSelectors = () => {
    /** Constructor */
    const { createSelector } = useCreateSelector();

    const loginSelectors = createSelector(
        (state: any) => state.login,
        (login: any) => login
    );

    const questionSelector = createSelector(
        (state: any) => state.question,
        (question: any) => question
    );

    const questionNumberSelector = createSelector(
        (state: any) => state.questionNumber,
        (questionNumber: any) => questionNumber
    );

    const userProgressSelector = createSelector(
        (state: any) => state.userProgress,
        (userProgress: any) => userProgress
    );

    return {
        loginSelectors,
        questionSelector,
        questionNumberSelector,
        userProgressSelector
    };
}

export default useLoginSelectors;