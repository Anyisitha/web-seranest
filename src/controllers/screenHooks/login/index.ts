import { useCallback, useState } from "react";
import useModels from "models";

const useLogin = () => {
    /** Selectors */
    const {useSelectors} = useModels();
    const {useSelector, useLoginSelectors} = useSelectors();
    const {loginSelectors} = useLoginSelectors();
    const {token} = useSelector(loginSelectors);

    /** States */
    const [width, setWidth] = useState<number>(window.innerWidth);

    /** Handlers */
    const getWidth = useCallback(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));
    }, []);

    return {
        width,
        getWidth,
        token
    }
}

export default useLogin;