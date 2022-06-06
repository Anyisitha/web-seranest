import useApi from "api";
import { IGetModuleSection } from "models/interfaces/modules.interfaces";
import { useCallback, useState } from "react";
import { useLocation, useParams } from "react-router";

const useModules = () => {
    /** Params */
    const { id } = useParams<{ id?: string; activity?: string; }>();
    const { state } = useLocation<{ description: string; }>();
    const { description } = state;

    /** States */
    const [sections, setSections] = useState<any>([]);
    const [showContent, setShowContent] = useState<boolean>(false);
    const [section, setSection] = useState<any>(0);
    const [questions, setQuestions] = useState<any>([]);

    /** Api */
    const { useActions } = useApi();
    const { dispatch, useModulesActions } = useActions();
    const { actGetModuleSections, actSetSection, actGetQuestions, actSaveSection } = useModulesActions();

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
        
        if (sectionSeach.content.type === "Test") {
            console.log(sectionSeach)
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
        // @ts-ignore
        dispatch(actSaveSection({
            onError: (error: any) => console.log(error),
            onSuccess: () => window.location.reload()
        }))
    }

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
        saveSection
    };
}

export default useModules;