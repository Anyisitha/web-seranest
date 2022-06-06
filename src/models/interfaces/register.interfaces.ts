import {ICallback} from "./general.interfaces";

export interface IUserData {
    fullname: string;
    email: string;
    document_type: string;
    document: string;
    nationality: string;
    country: string;
    city: string;
    address: string;
    password: string;
    name?: string;
    last_name?: string;
}

export interface ICreateUserAction extends ICallback {
    user: IUserData;
}