import React, { useCallback } from 'react'
import Particles from 'react-tsparticles'
import particlesConfig from '../Config/particles-config'
import { loadSlim } from 'tsparticles-slim';

const ParticlesBackground = () => {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        await loadSlim(engine);
    }, []);
    
    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);
  return (
    <Particles
    options={particlesConfig}
    id="tsparticles"
    init={particlesInit}
    loaded={particlesLoaded}
  />
  )
}

export default ParticlesBackground