import useHeaderDashboard from "./HeaderDashboard";
import useLoginCard from "./LoginCard";
import useRegisterCard from "./RegisterCard";
import useQuestions from "./Questions";

const useComponentsHooks = () => {
    return {
        useLoginCard,
        useRegisterCard,
        useHeaderDashboard,
        useQuestions
    }
}

export default useComponentsHooks; 