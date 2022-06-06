import {lazy} from "react";

const Register = lazy(() => import("./Register"));
const Login = lazy(() => import("./Login"));
const Dashboard = lazy(() => import("./Dashboard"));
const Modules = lazy(() => import("./Modules"));

const useScreens = () => {
  return {
      Register,
      Login,
      Dashboard,
      Modules
  };
}

export default useScreens;