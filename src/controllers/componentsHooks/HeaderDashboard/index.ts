import { useEffect, useState } from "react";

const useHeaderDashboard = () => {
    /** States */
    const [width, setWidth] = useState<number>(window.innerWidth);
    const [openDrawer, setOpenDrawer] = useState<boolean>(false);

    /** Handlers */
    const handlerOpenDrawer = (state: boolean) => setOpenDrawer(state);
    
    /** Effects */
    useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));
    }, []);

    return {
        width,
        openDrawer,
        handlerOpenDrawer
    };
}

export default useHeaderDashboard;