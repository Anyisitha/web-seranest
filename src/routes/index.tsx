import { map } from "lodash";
import {
    BrowserRouter as Router,
    Switch,
} from "react-router-dom";
import useAnonymousRoutes from "./AnonymousRoute";

const useRoutes = () => {
    /** Variables */
    const anonymousRoutes = useAnonymousRoutes();
    const routesResult = [...anonymousRoutes];

    return (
        <Router >
            <Switch>
                {map(routesResult)}
            </Switch>
        </Router>
    );
}

export default useRoutes;