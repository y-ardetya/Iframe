import {
  Environment,
  Html,
  useGLTF,
  PresentationControls,
} from "@react-three/drei";

export default function Experience() {
  const machine = useGLTF("/c64_monitor.glb");

  return (
    <>
      <Environment preset="city" />
      <color attach="background" args={["#ffc4da"]} />
      <PresentationControls
        global
        polar={[-0.4, 0.2]}
        azimuth={[-1, 0.75]}
        config={{ mass: 2, tension: 400 }} 
        snap={{ mass: 4, tension: 400 }} 
      >
        <primitive
          object={machine.scene}
          scale={0.1}
          position={[1.71, -3.38, -1.87]}
          rotation={[0, -3.78, 0]}
        >
          <Html
            transform
            wrapperClass="htmlScreen"
            position={[0, 24.5, 18]}
            rotation={[0, Math.PI, 0]}
            distanceFactor={10.2}
          >
            <iframe src="https://merry-capybara-35d114.netlify.app/" />
          </Html>
        </primitive>
      </PresentationControls>
      
    </>
  );
}
