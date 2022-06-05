import { Grid } from "@mui/material";
import styled from "styled-components";
import tw from "twin.macro";

export const StyledContainer = styled.div.attrs({
    className: "admin-layout-container"
})`
    background: linear-gradient(to right, #c3c3c1, #fff);
    height: 100vh;
`;

export const StyledTab = styled(Grid)`
    ${tw`h-[50px] cursor-pointer`}

    &:hover {
        ${tw`text-primary font-bold`}
    }

    &:after {
        content: '';
        display: block;
        margin: auto;
        height: 1px;
        width: 0px;
        background: transparent;
        transition: width .5s ease, background-color .5s ease;
    }

    &:hover:after {
        ${tw`bg-background-orange`}
        width: 100%;
    }
`;