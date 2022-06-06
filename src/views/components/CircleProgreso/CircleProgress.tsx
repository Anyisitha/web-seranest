import {CardContent} from "@mui/material";
import {
    StyledAvancedText,
    StyledCard,
    StyledCircleProgress,
    StyledNumber,
    StyledPercentContainer,
    StyledSpan,
    StyledSvg
} from "./CircleProgress.styles";

interface ICircleProgressProps {
    percent: number;
    isBody: boolean;
    isFull?: boolean;
}

const CircleProgress = ({ percent, isBody, isFull }: ICircleProgressProps) => {
    return (
        <StyledCircleProgress>
            <StyledCard >
                <CardContent>
                    <StyledSpan><StyledAvancedText>Avance</StyledAvancedText> Proceso</StyledSpan>
                    <StyledPercentContainer>
                        <StyledSvg percent={percent}>
                            <circle cx={43} cy={43} r={38} />
                            <circle cx={43} cy={43} r={38} />
                        </StyledSvg>
                        <StyledNumber>
                            <h2>{percent}%</h2>
                        </StyledNumber>
                    </StyledPercentContainer>
                </CardContent>
            </StyledCard>
        </StyledCircleProgress>
    )
}

export default CircleProgress;  