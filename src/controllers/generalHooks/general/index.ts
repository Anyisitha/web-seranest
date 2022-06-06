import { useCallback, useEffect, useState } from "react";

const useGeneral = () => {

    /** States */
    const [width, setWidth] = useState<number>(window.innerWidth);

    /** Handlers */
    const getWidth = useCallback(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));
    }, []);

    /** Effects */
    useEffect(() => {
        getWidth();
    }, [getWidth]);

    return {
        width
    }
}

export default useGeneral;