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
}

const CertificateCard : FC<ICertificateCard>= ({ title, icon }) => {
    return (
        <StyledCertificateCard>
            <Card sx={{ width: "100%", height: 162 }}>
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