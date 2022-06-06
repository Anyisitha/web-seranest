export interface ICallback {
    onSuccess: (data?: any) => void;
    onError: (error?: any) => void;
}