import Counter from '../components/reactbits/Counter/Counter';
import Grainient from '../components/reactbits/Grainient/Grainient';
import AnimatedContent from '../components/reactbits/AnimatedContent/AnimatedContent';
import { useInView } from '../useInView';

const PLANOS = [
  { nome: 'Free', preco: 0, largura: 3, nota: 'Cadastro e página da marca' },
  { nome: 'Destaque', preco: 149, largura: 15, nota: 'Posições promocionais' },
  { nome: 'Pro', preco: 399, largura: 40, nota: 'Vitrine dedicada' },
  { nome: 'Premium', preco: 999, largura: 100, nota: 'Editorial e banner' },
];

/** Cena de cortina amarela: entra por baixo (wipe) com shader de gradiente granulado ao fundo. */
export default function Marcas() {
  const [ref, seen] = useInView<HTMLElement>(0.35);

  return (
    <AnimatedContent wipe="up" distance={0} scrub={0.8} ease="none" threshold={0.05} className="slab-wrap">
      <section id="marcas" ref={ref} className={`slab${seen ? ' is-in' : ''}`}>
        <Grainient
          className="slab-shader"
          colors={['#cbd400', '#e1ea12', '#f1f53a', '#d6df05']}
          type="linear"
          angle={35}
          speed={0.5}
          flow={0.6}
          silk={0.25}
          grainAmount={0.12}
          interactive={false}
          clickSwirl={false}
          dpr={1}
        />
        <div className="slab-in">
          <div className="slab-text">
            <p className="eyebrow eyebrow-dark">— PARA MARCAS</p>
            <h2 className="titulo titulo-dark">ENTRE NO HUB</h2>
            <ul className="slab-stats">
              <li>
                <span>cadastro grátis, sujeito à curadoria</span>
                <Counter value={seen ? 0 : 1} prefix="R$ " fontSize="clamp(30px, 3.4vw, 46px)" fontWeight={600} textColor="#101200" />
              </li>
              <li>
                <span>planos para escolher</span>
                <Counter value={seen ? 4 : 0} fontSize="clamp(30px, 3.4vw, 46px)" fontWeight={600} textColor="#101200" />
              </li>
              <li>
                <span>canais para distribuir</span>
                <Counter value={seen ? 7 : 0} fontSize="clamp(30px, 3.4vw, 46px)" fontWeight={600} textColor="#101200" />
              </li>
            </ul>
            <p className="nota-dark">Valores iniciais para validação comercial. Sem promessa de vendas ou de visitas.</p>
          </div>

          <div className="panel-dark" aria-label="Planos">
            <p className="panel-titulo">Investimento por plano</p>
            {PLANOS.map((p, i) => (
              <div key={p.nome} className="panel-linha">
                <div className="panel-cab">
                  <span>{p.nome}</span>
                  <Counter
                    value={seen ? p.preco : 0}
                    prefix="R$ "
                    fontSize={15}
                    fontWeight={600}
                    textColor="#ececf1"
                    duration={1 + i * 0.15}
                  />
                </div>
                <div className="panel-trilho">
                  <span style={{ width: seen ? `${p.largura}%` : '0%', transitionDelay: `${i * 0.12}s` }} />
                </div>
                <small>{p.nota}</small>
              </div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedContent>
  );
}
