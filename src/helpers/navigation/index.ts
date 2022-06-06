import { useHistory } from "react-router";

const useNavigationHelpers = () => {
    /** History */
    const history = useHistory();

    return {
        history
    };
}

export default useNavigationHelpers;