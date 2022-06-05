import { Card, CardContent, Grid } from "@mui/material";
import styled from "styled-components";
import tw from "twin.macro";

export const StyledCard = styled(Card)`
    ${tw`w-[50%]`}

    @media (max-width: 1540px){
        ${tw`w-[60%]`}
    }

    @media (max-width: 768px){
        ${tw`w-[80%] mb-16 mt-16`}
    }

    @media (max-width: 540px){
        ${tw`w-full mb-16 mt-16`}
    }
`;

export const StyledCardContent = styled(CardContent)`
    padding: 0 !important;
`;

export const StyledHeaderCard = styled.div.attrs({
    className: 'card-header'
})<{background?: string;}>`
    ${tw`bg-[#FF931E] px-8 text-white py-4`}
`;

export const StyledTitleHeader = styled.h1`
    ${tw`text-2xl`}
    font-family: "Gotham-medium";
`;

export const StyledSubTitleHeader = styled.h3`
    ${tw`text-xl pt-4`}
    font-family: "Gotham-medium";
`;

export const StyledInputContainer = styled.div`
    ${tw`my-3`}
`;

export const StyledPasswordLot = styled.span`
    ${tw`text-sm text-background-orange text-center`}
    font-family: 'Montserrat';
    cursor: pointer;
`;

export const StyledTextPassword = styled(Grid)`
    ${tw`flex justify-center`}
    margin-top: 0.75rem;
    margin-bottom: 0.75rem;
`;

export const StyledButton = styled.button<{isregister:boolean}>`
    ${tw`bg-background-orange text-white w-60 md:w-64 py-2 rounded-md mb-2`}
    font-family: 'Montserrat';
    letter-spacing: 1px;
`;




