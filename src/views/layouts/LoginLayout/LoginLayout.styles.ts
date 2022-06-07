import styled from "styled-components";
import tw from "twin.macro";
import { IStyledContainer } from "./LoginLayout.interface";

export const StyledMain = styled.main.attrs({
    className: 'main-login-content'
})`
    ${tw`mt-4`}
`;

export const StyledContainer = styled.div.attrs({
    className: 'container-login'
}) <IStyledContainer>`
    ${tw`h-screen p-8`}
    ${({ backgroundImage }) => `background-image: url('${backgroundImage}')`};
    background-size: 100% 100%;
    background-repeat: no-repeat;   
    
    @media (max-width: 768px){
        ${tw`h-full`}
    }
    
`;

export const StyledSubContainer = styled.div`
    ${tw`relative h-full`}  
`;

