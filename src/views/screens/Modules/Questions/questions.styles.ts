import { Button } from "@mui/material";
import { Box } from "@mui/system";
import styled from "styled-components";
import tw from "twin.macro";

export const StyledContainerQuestions = styled.div.attrs({
    className: "questions-container"
}) <{ background?: string; question: number; isMobile: boolean;}>`
    width: 100%;
  background: url('${({ background }) => background}') bottom right no-repeat, linear-gradient(to right, #c3c3c1, #fff);
  
    ${({ question }) => question === 0 ? tw`flex justify-center items-center` : tw`px-8 py-16 `}
    position: relative;
    ${({ isMobile }) => isMobile ? tw`h-[100%]` : tw`h-full`}
    ${({ isMobile }) => isMobile ? "background-size: contain;" : "background-size: 100% 100%;"}
  
    @media (max-width: 1024px){
        ${tw`py-4`}
    }
`;

export const StyledTitle = styled.h1`
    ${tw`text-primary font-bold text-[40px] text-center`}
    font-family: "Myriad Pro";
  
    @media (max-width: 500px) {
      ${tw`text-[20px]`}
    }
`

export const StyledDescription = styled.h3`
    ${tw`text-[30px] text-center`}
    font-family: "Myriad Pro";

      @media (max-width: 500px) {
        ${tw`text-[15px]`}
      }
`;

export const StyledButton = styled(Button)`
    ${tw`text-[20px] text-center`}
    font-family: "Myriad Pro";
    background: linear-gradient(to right, #F7931E, #F15A24);
    color: #fff !important;
    font-weight: bold !important;
    letter-spacing: 1px !important;
    width: 10rem;

    &:hover {
        background: linear-gradient(to left, #F7931E, #F15A24);
    }
  
    @media (max-width: 500px) {
        font-size: 10px !important;
    }
`;

export const StyledModal = styled(Box) <{ background?: string; }>`
    ${tw`bg-white w-[60%] h-[70%] relative`}
    ${({ background }) => `background: url('${background}')`};
    background-size: 100% 100%;
    
    @media (max-width: 1024px){
        ${tw`w-[80%] h-[30%]`}
    }
`

export const StyledQuestion = styled.h1`
    ${tw`text-primary font-bold text-[25px]`}
    font-family: "Myriad Pro";
    
    @media (max-width: 1024px){
        ${tw`text-[10px]`}
    }
`

export const StyledSpan = styled.span`
    font-family: "Myriad Pro";
    ${tw`text-xl`}
    
    @media (max-width: 1024px){
        ${tw`text-[10px]`}
        line-height: 1.5
    }
`