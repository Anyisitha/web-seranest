import {ComponentType} from "react";

export interface IRoutes {
    Component: ComponentType<any>;
    path: string;
    name: string;
    layout?: any;
    exact: true;
}