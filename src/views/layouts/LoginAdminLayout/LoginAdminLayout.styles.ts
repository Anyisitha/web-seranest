import styled from "styled-components";
import tw from "twin.macro";

export const StyledContainer = styled.div.attrs({
    className: "login-admin-layout-container"
})`
    ${tw`flex items-center justify-center`}
    background: linear-gradient(to right, #c3c3c1, #fff);
    height: 100vh;
`;

