import useProviders from "api/providers";
import {ILostPasswordAction} from "models/interfaces/LostPassword.interfaces";
import {AxiosError} from "axios";
import {Dispatch} from "redux";
import {IDispatch} from "models/interfaces/general.interfaces";

const useLoginActions = () => {
    /** Providers */
    const {useLoginProviders} = useProviders();
    const {changePassword} = useLoginProviders();

    /**
     * This action executes the changePassword provider that will later execute the request for the password change.
     * @param request ILostPasswordAction
     * @return void
     */
    const actChangePassword = (request: ILostPasswordAction) => async (dispatch: Dispatch<IDispatch>) => {
        const {data, onSuccess, onError} = request;
        try {
            await changePassword(data);

            dispatch({
                type: "New data",
                payload: {}
            })

            onSuccess && onSuccess();
        }catch (error) {
            onError && onError(error);
        }
    }

    return {
        actChangePassword
    };
}

export default useLoginActions;