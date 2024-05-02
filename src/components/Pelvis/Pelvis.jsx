import React from 'react'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { ContactShadows, Environment, OrbitControls } from '@react-three/drei'
import Kal from '../../../public/Kal'
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
      <h2>Pelvis Kemik</h2>
      <p> <b>Conjugata Obstetrica:</b> Apertura pelvis süperiorun en dar çapıdır. 
          9cm ise C/S endikasyonu vardır. 
          Direk ölçülmeyip Conjugata Diagonalisten 1.5 cm çıkarılarak ölçülür.

          <b>Conjugata Diagonalis:</b>
          Vaginal tuşe ile ölçülebilen tek çaptır. Yaklaşık olarak 12.5 cm'dir.

          <b>Diamater İnterspinosus:</b>
          Spina ischiadicumları birleştiren çap, pelvisin en dar çapıdır.

          <b>Diamater Transversa:</b>
          Pelvisin en geniş çapıdır.</p>
    </div>
    
  </div>
    <button onClick={() => {
      window.scrollTo({
        top:1300,
        behavior:"smooth"
      })
    }}>Ligament Modeli görmek için basınız</button>
    <Canvas>
    <ambientLight intensity={1.5}/>
    <OrbitControls enableZoom={true}/>
    <Suspense fallback={null}>
      <Kal/>
  
    </Suspense>
          <Environment preset='sunset'/>
          <ContactShadows position={[0,-1.5,0]} opacity={0.5} scale={20} blur={1} far={10} resolution={256} color="#000000"/>
        </Canvas>
    </>
  )
}

export default Pelvis