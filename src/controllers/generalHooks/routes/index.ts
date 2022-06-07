import {IRoutes} from "models/interfaces/routes.interfaces";
import useViews from "views";

const useRoutesHook = () => {
    // Views
    const {useScreens, useLayouts} = useViews();
    const {Register, Login, Dashboard, Modules} = useScreens();

    /** Layouts */
    const {
        LoginLayout,
        DashboardLayout,
    } = useLayouts();

    const routesArray : IRoutes[] = [
        {
            Component: Register,
            path: "/register",
            name: "Register",
            exact: true
        },
        {
            Component: Login,
            path: "/",
            name: "Login",
            exact: true,
            layout: LoginLayout
        },
        {
            Component: Dashboard,
            path: "/dashboard",
            name: "Dashboard",
            layout: DashboardLayout,
            exact: true
        },
        {
            Component: Modules,
            path: "/module/:id",
            name: "Module",
            layout: DashboardLayout,
            exact: true
        },
    ]

    return {
        routesArray
    };
}

export default useRoutesHook;