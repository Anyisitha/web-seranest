import useGeneralHooks from "./generalHooks";
import useScreenHooks from "./screenHooks";

const useControllers = () => {
  return {
      useGeneralHooks,
      useScreenHooks,
  };
}

export default useControllers;