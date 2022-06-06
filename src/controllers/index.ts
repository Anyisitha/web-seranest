import useComponentsHooks from "./componentsHooks";
import useGeneralHooks from "./generalHooks";
import useScreenHooks from "./screenHooks";

const useControllers = () => {
  return {
      useGeneralHooks,
      useScreenHooks,
      useComponentsHooks
  };
}

export default useControllers;