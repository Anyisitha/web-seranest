import useHeaderDashboard from "./HeaderDashboard";
import useLoginCard from "./LoginCard";
import useRegisterCard from "./RegisterCard";
import useQuestions from "./Questions";
import useDragAndDrop from "./DragAndDrop";

const useComponentsHooks = () => {
    return {
        useLoginCard,
        useRegisterCard,
        useHeaderDashboard,
        useQuestions,
        useDragAndDrop,
    }
}

export default useComponentsHooks; 