import { combineReducers } from "redux";
import useLoginReducers from "./login";

const useReducers = () => {
    const { login, question, questionNumber, userProgress } = useLoginReducers();

    return combineReducers({
        login,
        question,
        questionNumber,
        userProgress
    });
}

export default useReducers;