import useApi from "api";
import { ICallback } from "models/interfaces/general.interfaces";
import {useCallback, useEffect, useState} from "react";
import {useHistory} from "react-router";
import useModels from "../../../models";

const useDashboard = () => {
    /** States */
    const [modules, setModules] = useState<any>([]);
    const [userProgress, setUserProgress] = useState<any>([]);

    /** Api */
    const { useActions } = useApi();
    const { dispatch, useModulesActions } = useActions();
    const { actGetModules, actGetUserProgress, actSetModuleFinished } = useModulesActions();

    // Selectors
    const {useSelectors} = useModels();
    const {useSelector, useLoginSelectors} = useSelectors();
    const {loginSelectors} = useLoginSelectors();
    const {token} = useSelector(loginSelectors);

    /** Handlers */
    const getModules = useCallback(() => {
        const request: ICallback = {
            onError: (error: any) => console.log(error),
            onSuccess: (data: any) => setModules(data)
        }

        // @ts-ignore
        dispatch(actGetModules(request));
        // eslint-disable-next-line
    }, []);

    const getUserProgress = () => {
        const request: ICallback = {
            onError: (error: any) => console.log(error),
            onSuccess: (data: any) => setUserProgress(data)
        }

        // @ts-ignore
        dispatch(actGetUserProgress(request));
    }

    const history = useHistory();

    const saveModule = () => {
        // @ts-ignore
        dispatch(actSetModuleFinished({
            onError: (error: any) => console.log(error),
            onSuccess: () => history.push("/dashboard")
        }))
    }

    return {
        modules,
        userProgress,
        getModules,
        getUserProgress,
        saveModule
    }
}

export default useDashboard;