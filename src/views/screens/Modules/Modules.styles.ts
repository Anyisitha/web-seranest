import {Button, Grid, Paper} from "@mui/material";
import styled from "styled-components";
import tw from "twin.macro";

export const StyledContainer = styled.div<{ background: string }>`
  ${tw`md:p-10 p-2`}
  ${({background}) => `background: url(${background})`};
  height: calc(100vh - 113px);

  @media (max-width: 1024px) {
    ${tw`flex items-center`}
  }
`;

export const StyledTab = styled(Grid)<{ background?: string; isBody?: boolean; }>`
  ${tw`py-4 px-4 relative`}
  background: url('${({background}) => background}') #fff bottom right no-repeat;
  background-size: 100% 110%;
  ${({isBody}) => isBody ? "height: calc(100vh - 235px);" : ""}
`;

export const StyledContainerTab = styled.div<{ fullWidth?: boolean }>`
  ${({fullWidth}) => fullWidth ? tw`w-full` : tw`w-[20%]`}
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 0%), 0px 4px 5px 0px rgb(0 0 0 / 18%), 0px 1px 10px 0px rgb(0 0 0 / 14%);
  @media (max-width: 1024px){
    ${tw`w-full`}
  }
`;

export const StyledNumberModule = styled.h1`
  ${tw`text-[18px] font-bold text-[#00a2ff]`}
  font-family: "Montserrat", sans-serif;
`;

export const StyledModuleName = styled.span`
  ${tw`text-xl`}
`;

export const StyledIframe = styled.iframe`
  height: 100%;
`

export const StyledButton = styled(Button)`
  position: absolute !important;
  bottom: 4%;
  right: 4%;
`

export const StyledButtonSection = styled(Button)<{ disabled: boolean; completed: boolean; }>`
  ${({completed}) => completed ? "background-color: #F7931E !important;" : "background: linear-gradient(90deg, rgba(48, 68, 144, 1) 17%, rgba(29, 182, 253, 1) 58%, rgba(26, 118, 171, 0.6657213910955007) 100%);"}
  color: #fff !important;
  width: 500px;
  font-family: "Montserrat", sans-serif !important;
  text-transform: none !important;
  ${tw`my-10`}
  ${({disabled}) => disabled ? "opacity: 0.8;" : "opacity: 1;"} @media(max-width: 1024 px) {
  ${tw`w-full`}
}
`

export const StyledSpan = styled.span`
  font-size: 1.2rem;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
`

export const StyledPaper = styled(Paper)<{ isMobile?: boolean; }>`
  ${({isMobile}) => !isMobile ? tw`w-[90%]` : tw`w-full flex items-center`}
  ${({isMobile}) => !isMobile ? "background: #fff;" : "background-color: #000 !important"}
`

export const StyledGrid = styled(Grid)`
  margin-top: 0.25rem !important;
  margin-bottom: 0.25rem !important;
`

