import { Card, CardContent } from "@mui/material";
import {
    StledCertificateContainer,
    StyledAvancedText1,
    StyledCertificate,
    StyledCertificateCard
} from "./CertificateCard.styles";
import {FC} from "react";

interface ICertificateCard {
    title: string;
    icon: string;
    disabled?: boolean;
    onClick?: () => void;
}

const CertificateCard : FC<ICertificateCard>= ({ title, icon, disabled, onClick }) => {
    console.log(disabled)
    return (
        <StyledCertificateCard disabled={disabled} onClick={() => (!disabled && onClick) && onClick}>
            <Card sx={{ width: "100%", height: 162, background: disabled ? "#e1e1e1" : "#ffffff" }}>
                <CardContent>
                    <StyledAvancedText1>{title}</StyledAvancedText1>
                    <StledCertificateContainer className="flex items-center bg-red">
                        <StyledCertificate
                            src={`${process.env.REACT_APP_ASSETS_URL}/images/icon-${icon}.png`}
                            width="73px"
                        />
                    </StledCertificateContainer>
                </CardContent>
            </Card>
        </StyledCertificateCard>
    )
}

export default CertificateCard;