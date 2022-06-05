import styled from "styled-components";
import tw from "twin.macro";

export const StyledContainerRegister = styled.section<{background: string}>`
  ${tw`overflow-auto h-full`}
  background: url('${({background}) => background}');
  background-size: contain;
`;

export const StyledLogoSeranest = styled.img`
  ${tw`w-[239px] h-[146px]`}
`;

export const StyledDescription = styled.span`
  ${tw`text-[20px]`}
  font-family: "FuturaNDLight";
`;

export const StyledLabel = styled.label`
  ${tw`text-[#112b82] inline-block mb-0`}
  font-family: 'FuturaNDLight';
`;

export const StyledButton = styled.button<{disabled: boolean}>`
  ${({disabled}) => disabled ? tw`opacity-50` : tw`opacity-100`}
`