import TiltedCard from '../components/reactbits/TiltedCard/TiltedCard';

interface PhoneProps {
  src: string;
  alt: string;
  caption?: string;
}

/** Celular em perspectiva: carcaça + tela com a imagem; inclina em direção ao cursor. */
export default function Phone({ src, alt, caption }: PhoneProps) {
  return (
    <div className="phone-wrap">
      <TiltedCard
        className="phone"
        imageSrc={src}
        altText={alt}
        captionText={caption}
        containerWidth="clamp(210px, 26vw, 330px)"
        containerHeight="clamp(430px, 54vw, 680px)"
        imageWidth="100%"
        imageHeight="100%"
        radius={44}
        rotateAmplitude={12}
        scaleOnHover={1.03}
        glare={0.35}
        floating
      />
    </div>
  );
}
