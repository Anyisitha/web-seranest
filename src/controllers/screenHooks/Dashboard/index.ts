import useApi from "api";
import { ICallback } from "models/interfaces/general.interfaces";
import { useCallback, useState } from "react";

const useDashboard = () => {
    /** States */
    const [modules, setModules] = useState<any>([]);
    const [userProgress, setUserProgress] = useState<any>([]);

    /** Api */
    const { useActions } = useApi();
    const { dispatch, useModulesActions } = useActions();
    const { actGetModules, actGetUserProgress } = useModulesActions();

    /** Handlers */
    const getModules = useCallback(() => {
        const request: ICallback = {
            onError: (error: any) => console.log(error.data.message),
            onSuccess: (data: any) => setModules(data)
        }

        // @ts-ignore
        dispatch(actGetModules(request));
    }, [dispatch]);

    const getUserProgress = useCallback(() => {
        const request: ICallback = {
            onError: (error: any) => console.log(error.data.message),
            onSuccess: (data: any) => setUserProgress(data)
        }

        // @ts-ignore
        dispatch(actGetUserProgress(request));
    }, [dispatch]);



    return {
        modules,
        userProgress,
        getModules,
        getUserProgress
    }
}

export default useDashboard;