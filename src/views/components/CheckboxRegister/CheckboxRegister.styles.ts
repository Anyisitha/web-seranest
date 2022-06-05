import styled from "styled-components";
import tw from "twin.macro";

export const StyledCheckbox = styled.input<{isMinimum?: boolean;}>`
  ${tw`border-0`}
  ${({isMinimum}) => isMinimum ? tw`w-[18px] h-[18px]` : tw`w-[38px] h-[38px]`}
  background: linear-gradient(to right, #ffffff, #e6e6e6) !important;
  box-shadow: 6px 4px 5px 0 #bebebe;
  border-radius: 11px;
`;

export const StyledLabel = styled.label`
  ${tw`text-[#112b82] inline-block mb-0`}
  font-family: 'FuturaNDLight';
`;