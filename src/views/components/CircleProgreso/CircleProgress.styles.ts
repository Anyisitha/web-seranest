import styled from "styled-components";
import tw from "twin.macro";
import { Card } from "@mui/material";

export const StyledCircleProgress = styled.div`
    ${tw`pb-8 drop-shadow-2xl w-full`};
`

export const StyledCard = styled(Card)`
    ${tw`w-full h-[162px]`}
`

export const StyledPercentContainer = styled.div`
    ${tw`flex justify-center items-center relative`}
`

export const StyledSvg = styled.svg<{percent: number;}>`
    ${tw`relative w-[100px] h-[100px]`};
    transform: rotate(-85deg);

    circle {
        ${tw`w-full h-full`}
        fill: none;
        stroke: #c3c3c1;
        stroke-width: 2.5;
        stroke-linecap: round !important;
        transform: translate(5px, 5px);

        &:nth-child(2){
            stroke-dashoffset: calc(440 - (440 * ${({ percent }) => percent} / 1.8) / 100);
            stroke: #00a2ff;
            stroke-dasharray: 440;
            stroke-width: 5;
        }
    }
`

export const StyledNumber = styled.div`
    ${tw`absolute top-0 left-0 w-full h-full flex justify-center items-center`}
    border-radius: 50%;

    h2 {
        ${tw`text-[#00a2ff] font-normal text-[20px]`}
        transition: 0.5s;
        font-family: "Montserrat", sans-serif;
    }
`

export const StyledAvancedText = styled.b`
  ${tw`text-[#00a2ff] text-[15px]`};
  font-family: "Montserrat", sans-serif;

  @media (max-width: 500px){
    ${tw`text-[10px]`}
  }
`

export const StyledSpan = styled.span`
    ${tw`text-[15px]`};
    font-family: "Montserrat", sans-serif;
    
  @media (max-width: 500px){
    ${tw`text-[10px]`}
  }
`;