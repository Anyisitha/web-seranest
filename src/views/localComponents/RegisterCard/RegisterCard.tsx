import useControllers from "controllers";
import RegisterCardDesktop from "./components/Desktop";
import RegisterCardMobile from "./components/Mobile/RegisterCard.Mobile";

const RegisterCard = () => {
    /** Controllers */
    const { useGeneralHooks } = useControllers();
    const { useGeneral } = useGeneralHooks();
    const { width } = useGeneral();

    return width >= 1280 ? (
        <RegisterCardDesktop/>
    ) : (
        <RegisterCardMobile/>
    )
}

export default RegisterCard;