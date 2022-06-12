import useHeaderDashboard from "./HeaderDashboard";
import useLoginCard from "./LoginCard";
import useRegisterCard from "./RegisterCard";
import useQuestions from "./Questions";
import useDragAndDrop from "./DragAndDrop";
import useLostPassword from "./LostPassword";

const useComponentsHooks = () => {
    return {
        useLoginCard,
        useRegisterCard,
        useHeaderDashboard,
        useQuestions,
        useDragAndDrop,
        useLostPassword
    }
}

export default useComponentsHooks; 