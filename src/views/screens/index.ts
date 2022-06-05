import {lazy} from "react";

const Register = lazy(() => import("./Register"));
const Login = lazy(() => import("./Login"));

const useScreens = () => {
  return {
      Register,
      Login
  };
}

export default useScreens;