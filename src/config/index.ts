import useInterceptor from "./interceptor";
import useStoreConfig from "./redux";

const useConfig = () => {
    return {
        useStoreConfig,
        useInterceptor
    };
}

export default useConfig;