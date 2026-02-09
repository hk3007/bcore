import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Torus, Icosahedron, Box, Cylinder } from '@react-three/drei';
import './BentoEcosystem.css';

const Shape = ({ type, color }) => {
  const meshRef = useRef();
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      switch (type) {
        case 'grants':
          meshRef.current.rotation.y = t * 0.5;
          break;
        case 'lab':
          meshRef.current.scale.setScalar(1 + Math.sin(t * 1.5) * 0.08);
          break;
        case 'research':
          meshRef.current.position.z = Math.sin(t) * 0.2;
          break;
        default:
          meshRef.current.rotation.y = t * 0.3;
      }
    }
  });

  // Olympic Gold and Silver Material Vibes
  const goldProps = { color: '#FFD700', metalness: 1, roughness: 0.2 };
  const crystalProps = { color: color, transmission: 0.7, thickness: 1, roughness: 0.1 };

  switch (type) {
    case 'grants': // The "Gold Standard"
      return <Icosahedron ref={meshRef} args={[1, 0]}><meshPhysicalMaterial {...goldProps} /></Icosahedron>;
    
    case 'lab': // Biological Precision
      return (
        <group ref={meshRef}>
          <Sphere args={[0.8, 64, 64]}><MeshDistortMaterial color={color} speed={3} distort={0.4} /></Sphere>
          <Torus args={[1.1, 0.02, 16, 100]} rotation={[Math.PI/2, 0, 0]}><meshBasicMaterial color={color} /></Torus>
        </group>
      );
    
    case 'research': // The "Track" - Layered Progress
      return (
        <group ref={meshRef} rotation={[0.5, 0.5, 0]}>
          <Box args={[1.8, 0.05, 1]} position={[0, 0.4, 0]}><meshStandardMaterial color={color} /></Box>
          <Box args={[1.8, 0.05, 1]} position={[0, 0, 0]}><meshStandardMaterial color={color} /></Box>
          <Box args={[1.8, 0.05, 1]} position={[0, -0.4, 0]}><meshStandardMaterial color={color} /></Box>
        </group>
      );
    
    case 'events': // The "Stadium/Globe"
      return <Sphere ref={meshRef} args={[1, 16, 16]}><meshStandardMaterial color={color} wireframe /></Sphere>;

    case 'newsletter': // Signal / Olympic Flame vibe
      return <Cylinder ref={meshRef} args={[0.5, 0.1, 1.5, 32]}><MeshDistortMaterial color={color} speed={4} distort={0.3} /></Cylinder>;

    case 'careers': // Human Potential
      return (
        <group ref={meshRef}>
          <Torus args={[0.8, 0.2, 16, 100]}><meshPhysicalMaterial {...crystalProps} /></Torus>
          <Sphere args={[0.3, 32, 32]}><meshStandardMaterial color="#fff" /></Sphere>
        </group>
      );

    default:
      return <Box ref={meshRef}><meshStandardMaterial color={color} /></Box>;
  }
};

const BentoCanvas = ({ type, color }) => (
  <div className="bento-3d-container">
    <Canvas camera={{ position: [0, 0, 3] }}>
      <ambientLight intensity={0.8} />
      <pointLight position={[10, 10, 10]} intensity={1.5} />
      <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} />
      <Float speed={3} rotationIntensity={1} floatIntensity={1.5}>
        <Shape type={type} color={color} />
      </Float>
    </Canvas>
  </div>
);

const BentoEcosystem = () => {
  return (
    <section className="olympic-bento-section">
      <div className="bento-header">
        <div className="olympic-badge">EXPLORE</div>
        <h2 className="bento-title">CORE <span className="text-thin">ECOSYSTEM</span></h2>
      </div>

      <div className="bento-grid">
        <Link to="/olympicresearchgrants" className="bento-item span-2 color-grants">
          <BentoCanvas type="grants" color="#0081C8" />
          <div className="bento-content">
            <span className="bento-meta">Excellence</span>
            <h3>BCORE Grants</h3>
            <p>Strategic funding for the next generation of Olympic athletes.</p>
          </div>
        </Link>

        <Link to="/HumanPerformanceLab" className="bento-item span-2 color-lab">
          <BentoCanvas type="lab" color="#EE334E" />
          <div className="bento-content">
            <span className="bento-meta">Science</span>
            <h3>Performance Lab</h3>
            <p>Advanced biomechanics and physiological testing.</p>
          </div>
        </Link>

        <Link to="#" className="bento-item color-research">
          <BentoCanvas type="research" color="#00A651" />
          <div className="bento-content">
            <span className="bento-meta">Insights</span>
            <h3>Research</h3>
          </div>
        </Link>

        <Link to="/upcomingevents" className="bento-item color-events">
          <BentoCanvas type="events" color="#FCB131" />
          <div className="bento-content">
            <span className="bento-meta">Global</span>
            <h3>Events</h3>
          </div>
        </Link>

        <Link to="#" className="bento-item color-newsletter">
          <BentoCanvas type="newsletter" color="#000000" />
          <div className="bento-content">
            <span className="bento-meta">Connect</span>
            <h3>Newsletter</h3>
          </div>
        </Link>

        <Link to="/careers" className="bento-item color-careers">
          <BentoCanvas type="careers" color="#0081C8" />
          <div className="bento-content">
            <span className="bento-meta">Talent</span>
            <h3>Careers</h3>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default BentoEcosystem;