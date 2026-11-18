import type { ReactNode } from 'react';
import AnimatedContent from '../components/reactbits/AnimatedContent/AnimatedContent';

interface RevealProps {
  children: ReactNode;
  className?: string;
  tilt?: number;
  blur?: number;
  distance?: number;
}

/** Entrada guiada pela rolagem: a seção chega inclinada e desfocada e assenta (como no vídeo). */
export default function Reveal({ children, className, tilt = 16, blur = 10, distance = 90 }: RevealProps) {
  return (
    <AnimatedContent
      className={className}
      distance={distance}
      tilt={tilt}
      blur={blur}
      scale={0.96}
      scrub={0.8}
      ease="none"
      threshold={0.1}
    >
      {children}
    </AnimatedContent>
  );
}
