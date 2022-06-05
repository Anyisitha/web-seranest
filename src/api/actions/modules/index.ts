import useProviders from "api/providers";
import { ICallback } from "models/interfaces/general.interfaces";
import { IGetModuleSection } from "models/interfaces/modules.interfaces";
import { Dispatch } from "redux";
import useStrings from "strings";

const useModulesActions = () => {
    /** Providers */
    const { useModulesProviders } = useProviders();
    const {
        getModules,
        getUserProgress,
        getModuleSections,
        setSection,
        getQuestions,
        setModule,
        saveSection
    } = useModulesProviders();

    // Strings
    const {useLoginTypes} = useStrings();
    const {USER_PROGRESS} = useLoginTypes();


    const actGetModules = (request: ICallback) => async(dispatch: Dispatch) => {
        const { onError, onSuccess } = request;
        try {
            const res = await getModules();
            const { data } = res.data;

            onSuccess && onSuccess(data);
        } catch (error) {
            onError && onError(error);
        }
    }

    const actGetUserProgress = (request: ICallback) => async(dispatch: Dispatch) => {
        const { onError, onSuccess } = request;
        try {
            const res = await getUserProgress();
            const { data } = res.data;

            dispatch({
                type: USER_PROGRESS,
                payload: data
            })

            onSuccess && onSuccess(data);
        } catch (error) {
            onError && onError(error);
        }
    }

    const actGetModuleSections = (request: IGetModuleSection) => async(dispatch: Dispatch) => {
        const { onError, onSuccess, id } = request;
        try {
            const res = await getModuleSections(id);
            const { data } = res.data;

            onSuccess && onSuccess(data);
        } catch (error) {
            onError && onError(error);
        }
    }

    const actSetSection = (request: IGetModuleSection) => async(dispatch: Dispatch) => {
        const { onError, onSuccess, id } = request;
        try {
            const res = await setSection(id);
            const { data } = res.data;

            onSuccess && onSuccess(data);
        } catch (error) {
            onError && onError(error);
        }
    }

    const actGetQuestions = (request: IGetModuleSection) => async(dispatch: Dispatch) => {
        const { onError, onSuccess, id } = request;
        try {
            const res = await getQuestions(id);
            const { data } = res.data;

            onSuccess && onSuccess(data);
        } catch (error) {
            onError && onError(error);
        }
    }

    const actSetModuleFinished = (request: ICallback) => async(dispatch: Dispatch) => {
        const { onError, onSuccess} = request;
        try {
            const res = await setModule();
            const { data } = res.data;

            onSuccess && onSuccess(data);
        } catch (error) {
            onError && onError(error);
        }
    }

    const actSetQuestion = (request: ICallback, question: any) => async(dispatch: Dispatch) => {
        const { onError, onSuccess} = request;
        try {
            console.log("preguntas: ", question)

            dispatch({
                type: "SET_QUESTION",
                payload: question
            });

            onSuccess && onSuccess();
        } catch (error) {
            onError && onError(error);
        }
    }

    const actSetQuestionNumber = (question: any) => async(dispatch: Dispatch) => {
        try {
            console.log(question)
            dispatch({
                type: "SET_QUESTION_NUMBER",
                payload: question
            })
        } catch (error) {
            console.log(error)
        }
    }

    const actSaveSection = (request: ICallback) => async(dispatch: Dispatch) => {
        const {onError,onSuccess} = request;
        try {
            await saveSection();

            onSuccess && onSuccess();
        }catch (e) {
            onError && onError(e);
        }
    }

    return {
        actGetModules,
        actGetUserProgress,
        actGetModuleSections,
        actSetSection,
        actGetQuestions,
        actSetModuleFinished,
        actSetQuestion,
        actSetQuestionNumber,
        actSaveSection
    };
}

export default useModulesActions;