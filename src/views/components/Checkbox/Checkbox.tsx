import { Paper } from "@mui/material";
import { FC, Fragment } from "react";
import { StyledContainer, StyledInput } from "./Checkbox.styles";

interface ICheckbox {
    label: string;
    onChange: () => void;
}

const Checkbox: FC<ICheckbox> = ({ label, onChange }) => {
    return (
        <Fragment>
            <StyledContainer>
                <StyledInput
                    type="checkbox"
                    onChange={onChange}
                />
                <span dangerouslySetInnerHTML={{ __html: label}}></span>
            </StyledContainer>
        </Fragment>

    );
}

export default Checkbox;