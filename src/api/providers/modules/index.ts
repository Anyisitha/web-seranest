import axios from "axios";
import useModels from "models";
import { trackPromise } from "react-promise-tracker";

const useModulesProviders = () => {
    /** Selectors */
    const { useSelectors } = useModels();
    const { useSelector, useLoginSelectors } = useSelectors();
    const { loginSelectors } = useLoginSelectors();
    const { token } = useSelector(loginSelectors);

    const getModules = () => trackPromise(axios.get("/module/get-modules", { headers: { Authorization: `Bearer ${token}` } }));
    const getUserProgress = () => trackPromise(axios.get("/module/get-user-progress", { headers: { Authorization: `Bearer ${token}` } }));
    const getModuleSections = (id?: string) => trackPromise(axios.get(`/module/get-module-section/${id}`, { headers: { Authorization: `Bearer ${token}` } }));
    const setSection = (id?: string) => trackPromise(axios.post(`/module/set-module`, { id }, { headers: { Authorization: `Bearer ${token}` } }));
    const getQuestions = (id?: string) => trackPromise(axios.get(`/module/get-questions/${id}`, { headers: { Authorization: `Bearer ${token}` } }));
    const setModule = () => trackPromise(axios.get(`/module/set-modules-final`, { headers: { Authorization: `Bearer ${token}` } }));

    /**
     * This function is used from send request for update the status of module (section) of the end user.
     * @return Promise<AxiosResponse>.
     */
    const saveSection = () => {
        return trackPromise(axios.get("/module/save-section", {
            headers: { Authorization: `Bearer ${token}` }
        }))
    }
    return {
        getModules,
        getUserProgress,
        getModuleSections,
        setSection,
        getQuestions,
        setModule,
        saveSection
    }
}

export default useModulesProviders;