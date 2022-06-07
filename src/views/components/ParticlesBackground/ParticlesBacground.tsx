import Particles from "react-tsparticles" 
import {particlesConfig} from "../config/particles-config";

console.log(particlesConfig)

const ParticlesBackground = () => {
    return (
        // @ts-ignore
        <Particles params={particlesConfig}>

        </Particles>    
    )
}

export default ParticlesBackground;