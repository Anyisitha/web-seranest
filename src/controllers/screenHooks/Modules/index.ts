import useApi from "api";
import { IGetModuleSection } from "models/interfaces/modules.interfaces";
import {useCallback, useEffect, useState} from "react";
import {useHistory, useLocation, useParams} from "react-router";
import Swal from "sweetalert2";
import useModels from "../../../models";
import {ICallback} from "../../../models/interfaces/general.interfaces";

const useModules = () => {
    /** Params */
    const { id } = useParams<{ id?: string; activity?: string; }>();
    const { state } = useLocation<{ description: string; }>();
    const { description } = state;
    const history = useHistory();

    /** States */
    const [sections, setSections] = useState<any>([]);
    const [showContent, setShowContent] = useState<boolean>(false);
    const [section, setSection] = useState<any>(0);
    const [questions, setQuestions] = useState<any>([]);
    const [userProgress, setUserProgress] = useState<any>([]);

    /** Api */
    const { useActions } = useApi();
    const { dispatch, useModulesActions } = useActions();
    const { actGetModuleSections, actSetSection, actGetQuestions, actSaveSection, actSetModuleFinished, actGetUserProgress } = useModulesActions();

    // Selectors
    const {useSelectors} = useModels();
    const {useSelector, useLoginSelectors} = useSelectors();
    const {loginSelectors} = useLoginSelectors();
    const {token} = useSelector(loginSelectors);

    const getUserProgress = () => {
        const request: ICallback = {
            onError: (error: any) => console.log(error),
            onSuccess: (data: any) => setUserProgress(data)
        }

        // @ts-ignore
        dispatch(actGetUserProgress(request));
    }

    /** Callbacks */
    const getModulesSections = useCallback(() => {
        const request: IGetModuleSection = {
            id: id,
            onError: (error: any) => console.log(error),
            onSuccess: (data: any) => setSections(data)
        }

        // @ts-ignore
        dispatch(actGetModuleSections(request));
        // eslint-disable-next-line
    }, [dispatch, id])

    const handlerShowContent = (sectionSelected: number) => {
        setShowContent(true)
        let sectionSeach = sections.find((item: any) => item.id === sectionSelected)

        console.log(sectionSeach)
        
        if (sectionSeach.content[0].type === "Cuestionario") {
            const request: IGetModuleSection = {
                id: sectionSelected.toString(),
                onError: (error: any) => console.log(error),
                onSuccess: (data: any) => setQuestions(data)
            }

            // @ts-ignore
            dispatch(actGetQuestions(request));

            setSection(
                sections.find((item: any) => item.id === sectionSelected)
            )
        } else {
            setSection(
                sections.find((item: any) => item.id === sectionSelected)
            )
        }
    }

    /**
     * This function is used to be able to save the next step after the presentation view of the questionnaire.
     * @return void
     * @param id number
     */
    const handleSetSection = (id: number) => {
        const request: IGetModuleSection = {
            id: id.toString(),
            onError: (error: any) => console.log(error),
            onSuccess: (data) => console.log(data)
        }

        // @ts-ignore
        dispatch(actSetSection(request))
    }

    /**
     * This function is used for set the section completed.
     * @return void.
     */
    const saveSection = () => {
        if(id && (userProgress.moduleFinished <= id)) {
            // @ts-ignore
            dispatch(actSaveSection({
                onError: (error: any) => console.log(error),
                onSuccess: () => window.location.reload()
            }));
        }else{
            window.location.reload();
        }
    }

    const saveModule = () => {
        if(id && (userProgress.moduleFinished <= id)) {
            // @ts-ignore
            dispatch(actSetModuleFinished({
                onError: error => console.log(error),
                onSuccess: data => history.push("/dashboard")
            }))
        }else{
            window.location.reload();
        }

    }

    useEffect(() => {
        if(token === undefined){
            history.push("/")
        }
    }, [])
    return {
        id,
        sections,
        getModulesSections,
        description,
        showContent,
        handlerShowContent,
        section,
        handleSetSection,
        questions,
        saveSection,
        saveModule
    };
}

export default useModules;