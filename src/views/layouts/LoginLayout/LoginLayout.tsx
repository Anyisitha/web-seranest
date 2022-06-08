import React, { FC } from "react";
import { ILoginLayoutProps } from "./LoginLayout.interface";
import useViews from "views";
import {
    StyledContainer,
    StyledMain,
    StyledSubContainer
} from "./LoginLayout.styles";
import Particles from "react-tsparticles";
import {loadFull} from "tsparticles";
import Container from "react-tsparticles";

const LoginLayout: FC<ILoginLayoutProps> = ({ children }) => {
    /** Components */
    const { useComponents } = useViews();
    const { HeaderLogin, FooterLogin } = useComponents();

    const particlesInit = async (main: any) => {
        console.log(main);

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
    };

    const particlesLoaded = (container: Container) => {
        console.log(container);
    };

    return (
        <StyledContainer
            backgroundImage={`${process.env.REACT_APP_ASSETS_URL}/images/background-login.jpeg`}
        >
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={{
                    background: {
                        color: {
                            value: "transparent",
                        },
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 3,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#37b8f5",
                        },
                        links: {
                            color: "#304490",
                            distance: 110,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 2,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 5 },
                        },
                    },
                    detectRetina: true,
                }}
            />
            <StyledSubContainer>
                    <HeaderLogin />
                    <StyledMain>{children}</StyledMain>
                    <FooterLogin />
            </StyledSubContainer>
        </StyledContainer>

    );
}

export default LoginLayout;