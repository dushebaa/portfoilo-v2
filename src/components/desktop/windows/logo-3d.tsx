import DraggableWindow from "src/components/shared/draggable";
import { DOCK_WINDOWS } from "../dock";
import { Canvas} from "@react-three/fiber";
import { Float, OrbitControls, useGLTF } from "@react-three/drei";

const Logo3DWindow = () => {
  const gltf = useGLTF("/ethereum_3d_logo.glb");
  const id = DOCK_WINDOWS.THREE;

  return (
    <DraggableWindow id={id}>
      <Canvas style={{
        width: "100%",
        height: "100%"
      }}>
        {/* controls */}
        <OrbitControls />

        {/* lights */}
        <pointLight intensity={4} position={[0, 4, 0]} color={[0, 0, 255]} />
        <pointLight intensity={4} position={[0, -4, 0]} color={[0, 0, 255]} />
        <pointLight intensity={2} position={[0, 0, 4]} color={[160, 32, 240]} />
        <pointLight
          intensity={2}
          position={[0, 0, -4]}
          color={[160, 32, 240]}
        />
        <pointLight intensity={2} position={[0, 4, 0]} color={[160, 32, 240]} />
        <pointLight
          intensity={2}
          position={[0, -4, 0]}
          color={[160, 32, 240]}
        />
        <pointLight intensity={2} position={[4, 0, 0]} color={[160, 32, 240]} />
        <pointLight
          intensity={2}
          position={[-4, 0, 0]}
          color={[160, 32, 240]}
        />
        <ambientLight intensity={5} />

        {/* models */}
        <Float floatIntensity={1} rotationIntensity={25}>
          <primitive scale={2} object={gltf.scene} position={[0, 0, 0]} />
        </Float>
      </Canvas>
    </DraggableWindow>
  );
};

useGLTF.preload('/ethereum_3d_logo.glb');

export default Logo3DWindow;
