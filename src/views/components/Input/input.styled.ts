import styled from "styled-components";
import tw from "twin.macro";
import { IStyledInputProps } from "./Input.interfaces";

export const StyledInputContent = styled.div.attrs({
    className: 'input-content'
})`
    ${tw`relative flex flex-col justify-center w-full`}
`;

export const StyledInputWithLabel = styled.div`
    ${tw`flex justify-center items-center`}
`;

export const StyledLabel = styled.label`
    ${tw`text-base mr-4 text-white`}
    font-family: "Gotham-medium";
    font-weight: 500;
`

export const ContainerInputComponent = styled.div<{ isGradiend?: boolean; isRounded?: boolean; widthFull?: boolean; isLine?: boolean;}>`
    ${tw`h-10 flex items-center px-3 `}
    ${({ isGradiend }) => isGradiend ? "background: linear-gradient(to right, #E54416, white)" : "background: white"
    };

    ${({ isLine }) => isLine ? tw`bg-transparent border-b border-white` : tw`bg-white box-border rounded-md`}
    
    ${({ isRounded }) => isRounded ? tw`rounded-3xl ` : ""
    };
    ${({ widthFull }) => widthFull ? tw`w-full` : tw`w-auto`}
    ${({ isRounded }) => isRounded ? "box-shadow: 2px 2px 3px #000 !important;" : "" }
`;

export const StyledInput = styled.input<IStyledInputProps>`
    ${tw`w-full text-sm font-medium border-transparent outline-none h-8 rounded-md top-5 bg-transparent`}
    ${({ isRounded }) => !isRounded ? "color: #000 !important;" : "color: #fff;"}
    ${({ isGradiend }) => !isGradiend && tw`text-white`}
    

    &::placeholder {
        ${tw`text-white`}
    }
    
`;

export const StyledIcon = styled.img`
    ${tw`h-5 mr-2`}
`

export const StyledMessageError = styled.span`
    ${tw`text-primary text-xs`}
`;