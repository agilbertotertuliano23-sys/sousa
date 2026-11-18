import promosHtml from '../promos.html?raw';
import Reveal from './Reveal';

/** Cards de distribuição: mesma marcação e CSS da página estática (promos.css). */
export default function Propostas() {
  return (
    <section id="propostas" className="scene proposals">
      <Reveal tilt={12} blur={8}>
        <p className="eyebrow">— CANAIS</p>
        <h2 className="titulo">PROPOSTAS DE DISTRIBUIÇÃO</h2>
        <p className="caption propostas-lead">
          Escolha onde a sua marca aparece. Você continua vendendo na própria loja ou no TikTok Shop; a gente leva a
          audiência até lá.
        </p>
        <div dangerouslySetInnerHTML={{ __html: promosHtml }} />
        <p className="nota">Valores sob proposta. Conteúdo patrocinado é identificado como PUBLI.</p>
      </Reveal>
    </section>
  );
}
