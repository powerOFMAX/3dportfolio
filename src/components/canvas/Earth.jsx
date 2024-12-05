import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"

import CanvasLoader from "../Loader"

const Earth = () => {
  const earth = useGLTF("./planet/earth.glb")

  return <primitive object={earth.scene} scale={1.8} position-y={0} rotation-y={0} />
}
const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          mixPolarAngle={Math.PI / 2}
        />
        <Earth />
        <ambientLight intensity={2} />
        <Preload all />
      </Suspense>
    </Canvas>
  )
}
export default EarthCanvas