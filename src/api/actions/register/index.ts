import useProviders from "../../providers";
import {ICreateUserAction} from "models/interfaces/register.interfaces";
import {Dispatch} from "redux";

const useRegisterActions = () => {
    /** Providers */
    const { useRegisterProviders } = useProviders();
    const { createUser } = useRegisterProviders();

    /**
     * This function makes the call to the axios promise to be able to create the user in the database through the api.
     * @return void depending on the status of the response from the endpoint.
     * @param request ICreateUserAction interface.
     */
    const actCreateUser = (request: ICreateUserAction) => async (dispatch: Dispatch<{type: string; payload?: any;}>) => {
        const { user, onError, onSuccess } = request;
        try {
            await createUser(user);

            onSuccess && onSuccess();
        } catch (error) {
            onError && onError(error);
        }
    }

    return {
        actCreateUser,
    };
}

export default useRegisterActions;