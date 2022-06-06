import {Card, CardContent, Grid} from "@mui/material";
import styled from "styled-components";
import tw from "twin.macro";

export const StyledCard = styled(Card)`
  ${tw`w-[50%]`};
  @media (max-width: 1540px) {
    ${tw`w-[60%]`}
  }

  @media (max-width: 768px) {
    ${tw`w-[80%] mb-16 mt-16`}
  }

  @media (max-width: 540px) {
    ${tw`w-full mb-16 mt-16`}
  }
`;

export const StyledCardContent = styled(CardContent)`
  padding: 0 !important;
`;
const image = "/images/background-header-login.png"
export const StyledHeaderCard = styled.div.attrs({
    className: 'card-header'
})<{ background?: string; }>`
  ${tw`px-8 text-white py-4`}
  background-image: url('${process.env.REACT_APP_ASSETS_URL}${image}');
  background-size: 100% 100%;
  background-position: center;
`;

export const StyledTitleHeader = styled.h1`
  ${tw`text-2xl`};
`;

export const StyledSubTitleHeader = styled.h3`
  ${tw`text-xl pt-4`}
`;

export const StyledInputContainer = styled.div`
  ${tw`my-3`}
`;

export const StyledPasswordLot = styled.span`
  ${tw`text-sm text-[#44baf1] text-center`}
  font-family: 'Montserrat';
  cursor: pointer;
`;

export const StyledTextPassword = styled(Grid)`
  ${tw`flex justify-center`}
  margin-top: 0.75rem;
  margin-bottom: 0.75rem;
`;

export const StyledButton = styled.button<{ isregister: boolean }>`
  ${tw` text-white w-60 md:w-64 py-2 rounded-md mb-2`}
  font-family: 'Montserrat';
  letter-spacing: 1px;
  transition: 0.7s all ease;
  background: rgb(48, 68, 144);

  &:hover {
    background: rgb(48, 68, 144);
    background: linear-gradient(90deg,
    rgba(48, 68, 144, 1) 17%,
    rgba(29, 182, 253, 1) 58%,
    rgba(26, 118, 171, 0.6657213910955007) 100%);
  }
`;




