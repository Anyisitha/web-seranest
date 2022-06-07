import { FC } from "react";
import { ILoginLayoutProps } from "./LoginLayout.interface";
import useViews from "views";
import {
    StyledContainer,
    StyledMain,
    StyledSubContainer
} from "./LoginLayout.styles";

const LoginLayout: FC<ILoginLayoutProps> = ({ children }) => {
    /** Components */
    const { useComponents } = useViews();
    const { HeaderLogin, FooterLogin } = useComponents();

    return (
        <StyledContainer
            backgroundImage={`${process.env.REACT_APP_ASSETS_URL}/images/background-login.jpeg`}
        >
            <StyledSubContainer>
                    <HeaderLogin />
                    <StyledMain>{children}</StyledMain>
                    <FooterLogin />
            </StyledSubContainer>
        </StyledContainer>

    );
}

export default LoginLayout;