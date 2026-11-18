import SideRays from '../components/reactbits/SideRays/SideRays';
import Noise from '../components/reactbits/Noise/Noise';

/** Fundo fixo: preto com feixes de luz amarela entrando pela direita + grão de filme. */
export default function Backdrop() {
  return (
    <div className="backdrop" aria-hidden="true">
      <SideRays
        origin="right"
        rayColor1="#e1ea12"
        rayColor2="#8a7a00"
        blend={0.5}
        intensity={1.1}
        spread={1.6}
        density={3}
        falloff={2.2}
        glow={1.2}
        speed={0.8}
        dust={0.3}
        followMouse={false}
        maxDevicePixelRatio={1.25}
      />
      <Noise opacity={0.09} blendMode="overlay" fixed />
    </div>
  );
}
