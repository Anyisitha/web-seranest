import useApi from "api";
import { ICallback } from "models/interfaces/general.interfaces";
import { useCallback, useState } from "react";
import {useHistory} from "react-router";

const useDashboard = () => {
    /** States */
    const [modules, setModules] = useState<any>([]);
    const [userProgress, setUserProgress] = useState<any>([]);

    /** Api */
    const { useActions } = useApi();
    const { dispatch, useModulesActions } = useActions();
    const { actGetModules, actGetUserProgress, actSetModuleFinished } = useModulesActions();

    /** Handlers */
    const getModules = useCallback(() => {
        const request: ICallback = {
            onError: (error: any) => console.log(error.data.message),
            onSuccess: (data: any) => setModules(data)
        }

        // @ts-ignore
        dispatch(actGetModules(request));
        // eslint-disable-next-line
    }, [dispatch]);

    const getUserProgress = useCallback(() => {
        const request: ICallback = {
            onError: (error: any) => console.log(error.data.message),
            onSuccess: (data: any) => setUserProgress(data)
        }

        // @ts-ignore
        dispatch(actGetUserProgress(request));
        // eslint-disable-next-line
    }, [dispatch]);

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