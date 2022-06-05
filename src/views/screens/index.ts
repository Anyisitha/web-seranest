import {lazy} from "react";

const Register = lazy(() => import("./Register"));

const useScreens = () => {
  return {
      Register
  };
}

export default useScreens;