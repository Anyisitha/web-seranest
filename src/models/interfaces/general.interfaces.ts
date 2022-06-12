export interface ICallback {
    onSuccess: (data?: any) => void;
    onError: (error?: any) => void;
}

export interface IDispatch {
    type: string;
    payload: any;
}