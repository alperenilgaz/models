import React from 'react'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { ContactShadows, Environment, OrbitControls } from '@react-three/drei'
import Ligament from '../../../public/Ligament'


const Pelvis = () => {
  const isSmallScreen = window.matchMedia('(max-width: 768px)').matches
  const canvasStyle = {
    width: isSmallScreen ? '200px' : '100%',
    height: isSmallScreen ? '200px' : '500px',
    backgroundColor: isSmallScreen ? 'transparent':'rgba(0, 0, 0, 0.8)',
    marginLeft: isSmallScreen ? '100px':''
    
  };
  return (
    <>
    <div className="container">
    <div  className="header">
      <h2>Ligament</h2>
        <span>1- M.Bulbospongiosus</span>        
        <span>2- M.İschiocavernosus</span>        
        <span>3- M.Puborectalis</span>        
        <span>4- M.Pubococcygeus</span>        
        <span>5- M.İliococcygeus</span>        
        <span>6- Bartholin bezi</span>        
        <span>7- Vestibuler bez</span>        
        <span>9- Pectinal ligament (Cooper)</span>        
        <span>11- Ligamentum sacrospinale</span>        
    </div>
    
  </div>
    <button onClick={() => {
      window.scrollTo({
        top:0,
        behavior:"smooth"
      })
    }}>Pelvis Modeli görmek için basınız</button>
    <Canvas>
    <ambientLight intensity={1.5}/>
    <OrbitControls enableZoom={true} />
    <Suspense fallback={null}>
      <Ligament/>
    </Suspense>
          <Environment preset='sunset'/>
          <ContactShadows position={[0,-5.5,0]} opacity={0.5} scale={20} blur={1} far={10} resolution={256} color="#000000"/>
        </Canvas>
    </>
  )
}

export default Pelvis