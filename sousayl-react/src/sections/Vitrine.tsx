import GradualBlur from '../components/reactbits/GradualBlur/GradualBlur';
import Reveal from './Reveal';

const TILES = [
  { src: '/img/hoodie.webp', nome: 'Moletom Blueprint' },
  { src: '/img/manta.webp', nome: 'Manta acolchoada' },
  { src: '/img/pilha.webp', nome: 'Camisetas básicas' },
  { src: '/img/editorial.webp', nome: 'Seleção do sousa' },
  { src: '/img/lojas/tiktok-shop-roupas.webp', nome: 'TikTok Shop' },
  { src: '/img/lojas/shopee-roupas.webp', nome: 'Shopee' },
  { src: '/img/lojas/instagram-roupas.webp', nome: 'Instagram' },
  { src: '/img/lojas/whatsapp-roupas.webp', nome: 'WhatsApp' },
];

/** Plano em perspectiva que se deita ao rolar, com borda desfocada em cima e embaixo. */
export default function Vitrine() {
  return (
    <section id="vitrine" className="scene">
      <Reveal tilt={34} blur={12} distance={140}>
        <div className="vitrine-cab">
          <p className="eyebrow">— VITRINE</p>
          <h2 className="titulo">TUDO EM UM SÓ LUGAR</h2>
        </div>
        <div className="vitrine-stage">
          <ul className="vitrine-grid">
            {TILES.map((t) => (
              <li key={t.nome}>
                <img src={t.src} alt="" loading="lazy" />
                <span>{t.nome}</span>
              </li>
            ))}
          </ul>
          <GradualBlur position="top" height="7rem" strength={3} layers={6} curve="bezier" />
          <GradualBlur position="bottom" height="7rem" strength={3} layers={6} curve="bezier" />
        </div>
      </Reveal>
    </section>
  );
}
