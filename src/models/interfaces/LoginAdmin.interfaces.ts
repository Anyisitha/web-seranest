import { ICallback } from "./general.interfaces";

export interface ILoginAdminLayoutProps {
    children: any;
}

export interface ILoginAdmin {
    email: string;
    password: string;
}

export interface ILoginAdminAction extends ICallback {
    user: ILoginAdmin;
}