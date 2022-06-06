import styled from "styled-components";
import tw from "twin.macro";

export const StyledContainer = styled.div`
    ${tw`flex justify-center items-center text-white font-bold mx-4`}
    
    @media (max-width: 1279px){
      ${tw`justify-start`}
    }
`;

export const StyledInput = styled.input`
    ${tw`w-[30px] h-[30px] mr-3`}
    box-shadow: 2px 2px 3px #000;
    border-radius: 20px;
`;