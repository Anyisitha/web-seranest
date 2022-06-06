import {Button, Grid, Paper} from "@mui/material";
import styled from "styled-components";
import tw from "twin.macro";

export const StyledBackground = styled.div`
    ${tw`w-full bg-[#ffffff75] rounded-lg p-10`}

    @media (max-width: 500px){
        ${tw`p-4`}
    }
`

export const StyledLabel = styled.span`
    ${tw`text-white text-lg font-semibold flex items-center mr-6`}
    font-family: "Gotham";
`

export const StyledGridCenter = styled(Grid)<{moreTop?: boolean;}>`
    ${tw`flex justify-center items-center`}
    ${({moreTop}) => moreTop ? tw`pt-6` : ""}
`

export const StyledPaper = styled(Paper)`
    background: transparent !important;
      @media (max-width: 500px) {
        ${tw`w-full`}
      }
`

export const StyledButton = styled(Button)<{disabled?: boolean;}>`
  ${tw`w-48`}
  background: linear-gradient(to right, #E54416, #ffffff);
  font-weight: bold !important;
  letter-spacing: 1px !important;
  font-size: 1.25rem !important;
  line-height: 1.75rem !important;
  color: #ffffff !important;
  ${({ disabled }) => disabled ? "opacity: 0.7" : "opacity: 1"};
  
  @media (max-width: 1279px) {
    ${tw`w-full`}
  }
`;