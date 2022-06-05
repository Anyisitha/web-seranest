import styled from "styled-components";
import tw from "twin.macro";

export const StyledInput = styled.input`
  ${tw`border-0 rounded-xl block w-full font-normal text-[#495057]`}
  background: linear-gradient(to right, #ffffff, #e6e6e6);
  box-shadow: 6px 4px 5px 0 #bebebe;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
`;

export const StyledLabel = styled.label`
  ${tw`text-[#112b82] inline-block mb-0`}
  font-family: 'FuturaNDLight';
`;

export const StyledInputLine = styled.input`
  ${tw`w-full`}
  border: none;
  border-bottom: 1px dotted #000;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  background: transparent;
`;

export const StyledMessageError = styled.span`
    ${tw`text-red-700 text-xs`}
`;