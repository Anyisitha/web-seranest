import { ILoginAdminLayoutProps } from "models/interfaces/LoginAdmin.interfaces";
import React, { FC } from "react";
import { StyledContainer } from "./LoginAdminLayout.styles";

const LoginAdminLayout: FC<ILoginAdminLayoutProps> = ({ children }) => {;

    return (
        <React.Fragment>
            <StyledContainer>
                {children}
            </StyledContainer>
        </React.Fragment>

    )
}

export default LoginAdminLayout;