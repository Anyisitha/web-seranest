import {FC} from "react";
import {ICheckboxRegisterProps} from "./CheckboxRegister.interfaces";
import {Grid} from "@mui/material";
import {StyledCheckbox, StyledLabel} from "./CheckboxRegister.styles";

const CheckboxRegister: FC<ICheckboxRegisterProps> = ({
  onChange,
  label,
  checked,
  isFull,
    isMinimum
}) => {
    return (
        <Grid container>
            <Grid item className="flex items-center" xl="auto" lg="auto" md={3} sm={3} xs={3}>
                <StyledCheckbox
                    onChange={onChange}
                    type="checkbox"
                    checked={checked}
                    className="lg:mr-2"
                    isMinimum={isMinimum}
                />
            </Grid>
            <Grid item xl={isFull ? 11 : 9} lg={isFull ? 11 : 9} md={9} sm={9} xs={9} className="flex items-center">
                <StyledLabel dangerouslySetInnerHTML={{__html: label}}></StyledLabel>
            </Grid>
        </Grid>
    );
}

export default CheckboxRegister;