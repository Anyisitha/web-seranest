import styled from "styled-components";
import {Button, Card, Container, Grid} from "@mui/material";
import tw from "twin.macro";
import {IContainerContent} from "models/interfaces/Dashboard.interfaces";

export const StyledContainer = styled.div<{ background?: string; }>`
  ${tw`h-[calc(100vh - 113px)]`}
  background: url('${({background}) => background}') bottom right no-repeat;
  background-size: cover;

  @media (max-width: 899px) {
    ${tw`h-full`}
  }
`

export const StyledTitleHeader = styled.div`
  ${tw`text-[#00a2ff] text-[25px]`}
  font-family: "Montserrat", sans-serif;
  font-weight: 600;

  @media (max-width: 1024px) {
    ${tw`pt-10`}
  }
`

export const StyledSidebar = styled(Grid) <IContainerContent>`
  ${({isGap}) => isGap ? tw`gap-y-4` : ""}
  ${({isCentered}) => isCentered ? tw`flex justify-center items-center` : ""}
  ${({notFullScreen}) => !notFullScreen ? "height: calc(100vh - 113px)" : ""};
  
  @media (min-width: 900px){
    ${({withOverflow}) => withOverflow ? tw`overflow-auto` : tw`overflow-hidden`}
  }
  
  @media (max-width: 899px){
    ${({mdMargin}) => mdMargin ? tw`mb-10` : ""}
  }
`;

export const StyledContainerComponent = styled(Container)`
  ${tw`justify-center`}
  display: flex !important;
`

export const StyledMessageRemember = styled.span`
  ${tw``}
  font-family: "Montserrat", sans-serif;
`;

export const StyledIcon = styled.img<{ width: number; }>`
  ${({width}) => width >= 1024 ? tw`w-[40px]` : tw`w-[30px]`}
  max-width: none;
`;

export const StyledCard = styled(Card) <{ background?: string; }>`
  ${tw`mt-10 pt-8 px-8`}
  background: url('${({background}) => background}') bottom right no-repeat, #E54416 !important;
  background-size: cover !important;
`

export const StyledImageCard = styled.img<{ disabled: boolean }>`
  ${tw`w-full h-full`}
  ${({disabled}) => disabled ? "filter: grayscale(1)" : ""}
`;

export const StyledTextCard = styled.span<{ bold: boolean }>`
  ${tw`text-[#00a2ff] text-[12px] text-center mt-3`}
  font-family: "Montserrat", sans-serif;
  line-height: 0.5;
  font-weight: 600;
`;

export const StyledButton = styled(Button)`
  background-color: #090977 !important;
  color: #fff !important;
  font-weight: bold !important;
  text-transform: capitalize !important;
  padding-left: 2rem !important;
  padding-right: 2rem !important;
  ${tw`h-[35px]`}
`;