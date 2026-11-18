import AnimatedContent from '../components/reactbits/AnimatedContent/AnimatedContent';

const PASSOS = [
  { n: '01', t: 'Cadastre', d: 'Envie suas peças e os links da sua loja. É de graça no plano Free.' },
  { n: '02', t: 'Curadoria', d: 'A gente avalia cada peça antes de colocar no hub.' },
  { n: '03', t: 'Apareça', d: 'Sua marca entra nos canais: TikTok Shop, marketplaces, redes e grupos.' },
];

/** Cena clara final (como o painel branco do vídeo) + rodapé. */
export default function Contato() {
  return (
    <>
      <AnimatedContent wipe="up" distance={0} scrub={0.8} ease="none" threshold={0.05} className="slab-wrap">
        <section id="contato" className="slab slab-white">
          <div className="slab-in slab-in-col">
            <p className="eyebrow eyebrow-dark">— CONTATO</p>
            <h2 className="titulo titulo-dark">FALE COM A GENTE</h2>
            <ol className="passos">
              {PASSOS.map((p) => (
                <li key={p.n} className="glass glass-light">
                  <span>{p.n}</span>
                  <h3>{p.t}</h3>
                  <p>{p.d}</p>
                </li>
              ))}
            </ol>
            <a className="pill pill-ink" href="#">
              Falar no WhatsApp
            </a>
          </div>
          <p className="contato-gigante" aria-hidden="true">
            SOUSAYL
          </p>
        </section>
      </AnimatedContent>

      <footer className="rodape">
        <p>© 2026 sousa. Divulgação: o sousa pode receber comissão por compras feitas pelos links desta página.</p>
        <nav aria-label="Legal">
          <a href="#">Termos de Serviço</a>
          <a href="#">Privacidade</a>
          <a href="https://www.tiktok.com/@sousayl" target="_blank" rel="noopener noreferrer">
            TikTok @sousayl
          </a>
        </nav>
      </footer>
    </>
  );
}
