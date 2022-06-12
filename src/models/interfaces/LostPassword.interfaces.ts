import {ICallback} from "./general.interfaces";

export interface ILostPasswordProvider {
    email: string;
    password: string;
}

export interface ILostPasswordAction extends ICallback {
    data: ILostPasswordProvider,
}

export interface ILostPasswordData extends ILostPasswordProvider {
    confirm_password: string;
}