import styled from "styled-components";
import tw from "twin.macro";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from '@mui/icons-material/Search';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { Button, Container, Drawer } from "@mui/material";

export const StyledHeaderContainer = styled.div.attrs({
    className: 'header-container'
})`
    ${tw`bg-background-orange md:px-28 flex justify-between shadow-xl items-center`}

    @media (max-width: 500px) {
        ${tw``}
    }
`;

export const StyledLogo = styled.img.attrs({
    className: "logo-image",
    id: "logo"
})`
    ${tw`w-28 px-2 py-4`}
`;

export const StyledContainerItems = styled.div<{ isCentered?: boolean; }>`
    ${({ isCentered }) => isCentered ? tw`flex justify-center items-center` : ""}
`;

export const StyledWelcomeText = styled.span`
    ${tw`text-white font-bold text-lg`}
`;

export const StyledMenuIcon = styled(MenuIcon)`
    fill: #fff !important;
`;

export const StyledSearchIcon = styled(SearchIcon)`
    fill: #fff !important;
`;

export const StyledHomeIcon = styled(HomeOutlinedIcon)`
    fill: #fff !important;
`;

export const StyledContainerComponent = styled(Container)`
    ${tw`justify-between items-center`}
    display: flex !important;
`

export const StyledDrawer = styled(Drawer)`
    ${tw``}
`

export const StyledButtonDrawer = styled(Button)`
    background-color: #fff !important;
    color: #E54416 !important;
    text-transform: none !important;
    font-weight: bold !important;
    font-family: "Myriad Pro";
    ${tw`w-[80%]`}
`