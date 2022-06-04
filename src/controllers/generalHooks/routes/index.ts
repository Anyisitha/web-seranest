import {IRoutes} from "models/interfaces/routes.interfaces";
import useViews from "views";

const useRoutesHook = () => {
    // Views
    const {useScreens} = useViews();
    const {Register} = useScreens();

    const routesArray : IRoutes[] = [
        {
            Component: Register,
            path: "/register",
            name: "Register",
            exact: true
        }
    ]

    return {
        routesArray
    };
}

export default useRoutesHook;