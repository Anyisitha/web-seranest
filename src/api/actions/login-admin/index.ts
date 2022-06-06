import useProviders from "api/providers";
import { ILoginAdminAction } from "models/interfaces/LoginAdmin.interfaces";
import { ICallback } from "models/interfaces/general.interfaces";
import useStrings from "strings";
import { Dispatch } from "redux";

const useLoginAdminActions = () => {
    /** Provider */
    const { useLoginAdminProviders } = useProviders();
    const { loginAdmin } = useLoginAdminProviders();

    /** Strings */
    const { useLoginTypes } = useStrings();
    const { LOGIN } = useLoginTypes();

    const actLoginAdmin = (request: ILoginAdminAction) => async(dispatch: Dispatch) => {
        const { onError, onSuccess, user } = request;
        try {
            const res = await loginAdmin(user);
            const { token, user: userFinal } = res.data.data;

            dispatch({
                type: LOGIN,
                payload: {
                    user: userFinal,
                    token
                }
            });

            onSuccess && onSuccess()
        } catch (error) {
            onError && onError(error);
        }
    }

    /**
     * This action is used from logout the user.
     * @return Dispatch.
     */
    const actLogout = (request: ICallback) => async(dispatch: Dispatch) => {
        // Destructuring of the request parameter.
        const { onSuccess, onError } = request;
        try {
            dispatch({
                type: LOGIN,
                payload: {
                    user: {},
                    token: ""
                }
            });

            onSuccess && onSuccess()
        } catch (e) {
            onError && onError(e);
        }
    }

    return {
        actLoginAdmin,
        actLogout
    };
}

export default useLoginAdminActions;