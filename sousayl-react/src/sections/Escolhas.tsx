import Counter from '../components/reactbits/Counter/Counter';
import { useInView } from '../useInView';
import Phone from './Phone';
import Reveal from './Reveal';

const PECAS = [
  { nome: 'Moletom Blueprint', preco: 89, loja: 'TikTok Shop', tag: 'Peça da semana' },
  { nome: 'Manta acolchoada', preco: 69, loja: 'Mercado Livre', tag: 'Look do mês' },
];

export default function Escolhas() {
  const [ref, seen] = useInView<HTMLElement>(0.3);

  return (
    <section id="escolhas" ref={ref} className="scene">
      <Reveal>
        <div className="split split-rev">
          <Phone src="/img/hoodie.webp" alt="Moletom preto com bordado discreto" caption="Moletom Blueprint" />

          <div className="split-text">
            <p className="chip">
              <b>S</b> @sousayl
            </p>
            <h2 className="titulo">ESCOLHAS</h2>
            <p className="caption">
              As peças que o sousa realmente usaria. Toque em uma peça para ir direto para a loja. Valores de exemplo.
            </p>

            <ul className="kpis kpis-2">
              {PECAS.map((p) => (
                <li key={p.nome}>
                  <Counter
                    value={seen ? p.preco : 0}
                    prefix="R$ "
                    fontSize="clamp(34px, 4vw, 56px)"
                    fontWeight={600}
                    textColor="#ececf1"
                  />
                  <p>
                    <b>{p.nome}</b>
                    <br />
                    {p.tag} · {p.loja}
                  </p>
                </li>
              ))}
            </ul>

            <a className="pill pill-solid" href="#propostas">
              Ver na loja
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
