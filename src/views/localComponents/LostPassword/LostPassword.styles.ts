import { ImportExportRounded } from "@mui/icons-material";
import { Card, Button } from "@mui/material";
import styled from "styled-components";
import tw from "twin.macro";

export const StyledCard = styled(Card)`
    ${tw`w-[70%] py-10`}
    border-radius: 30px !important;
    background: url("${`${process.env.REACT_APP_ASSETS_URL}/images/background-register.png`}");
    background-size: contain;
    @media (max-width: 899px) {
        ${tw`w-full`}
    }
`

export const StyledInput = styled.input`
    ${tw`h-[2.5rem] w-full px-4 text-[rgba(48, 68, 144, 1)]`}
    background: transparent;
    border: 1px solid #fff;
    border-radius: 8px;
    font-family: "FuturaNDLight";
    &::placeholder {
        color: rgba(48, 68, 144, 1) !important;
    }
`

export const StyledTitleHeader = styled.title`
    ${tw`text-[rgba(48, 68, 144, 1)] font-bold text-[25px]`}
    font-family: "FuturaNDLight";
`

export const StyledButton = styled(Button)`
    ${tw`w-[200px]`}
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    border: 1px solid #fff;
    border-radius: 19px !important;
    background-image: linear-gradient(90deg, rgba(48, 68, 144, 1) 17%, rgba(29, 182, 253, 1) 58%, rgba(26, 118, 171, 0.6657213910955007) 100%);
    color: #fff !important;
`