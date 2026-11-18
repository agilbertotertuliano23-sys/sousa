import Counter from '../components/reactbits/Counter/Counter';
import { useInView } from '../useInView';
import Phone from './Phone';
import Reveal from './Reveal';

export default function Canais() {
  const [ref, seen] = useInView<HTMLElement>(0.3);

  return (
    <section id="canais" ref={ref} className="scene">
      <Reveal>
        <div className="split">
          <div className="split-text">
            <p className="chip">
              <b>S</b> @sousayl
            </p>
            <h2 className="titulo">CANAIS</h2>
            <p className="caption">
              Onde a sua marca aparece: TikTok Shop, marketplaces, redes e grupos. Você segue vendendo na sua loja; a
              gente leva a audiência até lá.
            </p>

            <ul className="kpis kpis-3">
              <li>
                <Counter value={seen ? 7 : 0} fontSize="clamp(28px, 3.2vw, 42px)" fontWeight={600} textColor="#ececf1" />
                <p>canais</p>
              </li>
              <li>
                <Counter value={seen ? 4 : 0} fontSize="clamp(28px, 3.2vw, 42px)" fontWeight={600} textColor="#ececf1" />
                <p>planos</p>
              </li>
              <li>
                <Counter
                  value={seen ? 89 : 0}
                  prefix="R$ "
                  fontSize="clamp(28px, 3.2vw, 42px)"
                  fontWeight={600}
                  textColor="#ececf1"
                />
                <p>peça da semana</p>
              </li>
            </ul>

            <div className="glass-row">
              <article className="glass">
                <h3>Free</h3>
                <p>Cadastro de peças, página da marca e links externos.</p>
                <strong>R$ 0</strong>
              </article>
              <article className="glass glass-hi">
                <h3>Destaque</h3>
                <p>Posições promocionais e relatório de cliques.</p>
                <strong>
                  R$ 149<small>/mês</small>
                </strong>
              </article>
            </div>
          </div>

          <Phone src="/img/editorial.webp" alt="Seleção de roupas pretas sobre pedestais" caption="Seleção do sousa" />
        </div>
      </Reveal>
    </section>
  );
}
