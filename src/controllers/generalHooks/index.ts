import useAssets from "./assets";
import useGeneral from "./general";
import useRoutesHook from "./routes";

const useGeneralHooks = () => {
  return {
      useRoutesHook,
      useGeneral,
      useAssets
  };
}

export default useGeneralHooks;