import styled from "styled-components";
import tw from "twin.macro";

export const StyledCertificateCard = styled.div.attrs({})<{ isBody?: boolean }>`
  ${tw`drop-shadow-2xl w-full h-[162px]`}
`

export const StyledAvancedText1 = styled.b`
  ${tw`text-[#00a2ff] text-[12px]`}
  font-family: "Montserrat", sans-serif;
`

export const StyledCertificate = styled.img.attrs({
    className: "certificate"
})`
`

export const StledCertificateContainer = styled.div`
  ${tw`flex justify-center items-center h-full mt-4`}
`