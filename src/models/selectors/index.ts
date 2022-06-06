import useLoginSelectors from "./login";
import { useSelector } from "react-redux";

const useSelectors = () => {
    return {
        useSelector,
        useLoginSelectors
    };
}

export default useSelectors;