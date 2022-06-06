const useAssets = () => {
    const rocheLogo : string = require("assets/images/logo-roche.png");
    const certificado : string = require("assets/images/certificado-8.png");

    return {
        rocheLogo,
        certificado
    };
}

export default useAssets;