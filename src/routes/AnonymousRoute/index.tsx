import useControllers from "controllers";
import {map} from "lodash";
import {IRoutes} from "models/interfaces/routes.interfaces";
import AnonymousRoute from "./AnonymousRoute";
import React from "react";

const useAnonymousRoutes = () => {
    /** Controllers */
    const {useGeneralHooks} = useControllers();
    const {useRoutesHook} = useGeneralHooks();
    const {routesArray} = useRoutesHook();

    return map(routesArray, (item: IRoutes, index: number) => (
        <AnonymousRoute {...item} key={index}/>
    ));
}

export default useAnonymousRoutes;