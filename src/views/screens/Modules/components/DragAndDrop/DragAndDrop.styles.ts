import styled from "styled-components";
import {Grid} from "@mui/material";
import tw from "twin.macro";

export const StyledHeader = styled(Grid)`
  ${tw`flex justify-between`}
`;

export const StyledTitleActivity = styled.img`
    ${tw``}
`;

export const StyledLogo = styled.img`
  ${tw`w-[50%]`}
`;

export const StyledNumberQuestion = styled.img`
  ${tw`w-full sm:w-[50%]`}
`;

export const StyledQuestion = styled.p`
  ${tw`text-sm sm:text-base ml-3`}
`;

export const StyledDropImage = styled.img`
  ${tw`w-[50%]`}
`;

export const StyledAnswer = styled.img`
  ${tw`w-[80%]`}
`;