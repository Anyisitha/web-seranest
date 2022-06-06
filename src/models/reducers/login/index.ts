import useHelpers from "helpers";
import useInitialStates from "models/initialStates";
import useStrings from "strings";

const useLoginReducers = () => {
    /** Constructor */
    const { useCreateReducer } = useHelpers();
    const { createReducer } = useCreateReducer();

    /** Initial States */
    const { useLoginInitialStates } = useInitialStates();
    const { loginInitialState } = useLoginInitialStates();

    /** Strings */
    const { useLoginTypes } = useStrings();
    const { LOGIN, USER_PROGRESS } = useLoginTypes();

    const login = createReducer(loginInitialState, {
        [LOGIN](state: any, action: any){
            return {
                ...state,
                ...action.payload
            }
        }
    })

    const question = createReducer({}, {
        ["SET_QUESTION"](state: any, action: any){
            return {
                ...state,
                ...action.payload
            }
        }
    })

    const questionNumber = createReducer({ question: 0 }, {
        ["SET_QUESTION_NUMBER"](state: any, action: any){
            return {
                ...state,
                ...action.payload
            }
        }
    })

    const userProgress = createReducer({}, {
        [USER_PROGRESS](state: any, action: any){
            return {
                ...state,
                ...action.payload
            }
        }
    })

    return {
        login,
        question,
        questionNumber,
        userProgress
    };
}

export default useLoginReducers;