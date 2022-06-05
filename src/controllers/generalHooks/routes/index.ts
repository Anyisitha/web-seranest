import {IRoutes} from "models/interfaces/routes.interfaces";
import useViews from "views";

const useRoutesHook = () => {
    // Views
    const {useScreens, useLayouts} = useViews();
    const {Register, Login} = useScreens();

    /** Layouts */
    const {
        LoginLayout,
        DashboardLayout,
        LoginAdminLayout,
        AdminLayout
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
        }
    ]

    return {
        routesArray
    };
}

export default useRoutesHook;