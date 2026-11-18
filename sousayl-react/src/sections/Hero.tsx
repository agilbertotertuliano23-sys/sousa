import Counter from '../components/reactbits/Counter/Counter';
import { useInView } from '../useInView';
import Reveal from './Reveal';

const SEGMENTOS = [
  { nome: 'Loja social', cor: '#e1ea12', peso: 1 },
  { nome: 'Marketplaces', cor: '#e9e9ee', peso: 2 },
  { nome: 'Redes', cor: '#ff9a1f', peso: 1 },
  { nome: 'Loja própria', cor: '#7b7d86', peso: 1 },
  { nome: 'Grupos', cor: '#4d4f57', peso: 2 },
];

const KPIS = [
  { valor: 7, rotulo: 'canais de distribuição para a sua marca' },
  { valor: 4, rotulo: 'planos, do cadastro grátis à campanha' },
  { valor: 0, rotulo: 'reais para entrar: plano Free', prefixo: 'R$ ' },
  { valor: 3, rotulo: 'destaques na vitrine ao mesmo tempo' },
];

const CANAIS = [
  { nome: 'TikTok Shop', tipo: 'Loja social', acao: 'Comprar' },
  { nome: 'Mercado Livre', tipo: 'Marketplace', acao: 'Comprar' },
  { nome: 'Shopee', tipo: 'Marketplace', acao: 'Comprar' },
  { nome: 'Instagram', tipo: 'Rede', acao: 'Conferir' },
  { nome: 'Loja online', tipo: 'Loja própria', acao: 'Comprar' },
  { nome: 'Grupo WhatsApp', tipo: 'Grupo de ofertas', acao: 'Entrar' },
  { nome: 'Grupo Telegram', tipo: 'Grupo de ofertas', acao: 'Entrar' },
];

export default function Hero() {
  const [ref, seen] = useInView<HTMLElement>(0.2);

  return (
    <section id="inicio" ref={ref} className={`scene hero${seen ? ' is-in' : ''}`}>
      <Reveal tilt={10} blur={6} distance={40}>
        <div className="hero-top">
          <div>
            <p className="eyebrow">SOUSAYL · hub de boas escolhas</p>
            <div className="big-num">
              <Counter
                value={seen ? 100 : 0}
                prefix="R$ "
                fontSize="clamp(76px, 14vw, 210px)"
                fontWeight={700}
                textColor="#ececf1"
                duration={1.6}
                stagger={0.07}
              />
            </div>
            <p className="caption">
              é o teto das escolhas do sousa: peças que valem mais do que o preço, reunidas em um só lugar.
            </p>
          </div>

          <div className="seg">
            <div className="seg-bar" aria-hidden="true">
              {SEGMENTOS.map((s) => (
                <span key={s.nome} style={{ flexGrow: s.peso, background: s.cor }} />
              ))}
            </div>
            <ul className="seg-legenda">
              {SEGMENTOS.map((s) => (
                <li key={s.nome}>
                  <i style={{ background: s.cor }} />
                  {s.nome}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <ul className="kpis">
          {KPIS.map((k) => (
            <li key={k.rotulo}>
              <Counter
                value={seen ? k.valor : 0}
                prefix={k.prefixo}
                fontSize="clamp(30px, 3.6vw, 48px)"
                fontWeight={600}
                textColor="#ececf1"
                duration={1.1}
              />
              <p>{k.rotulo}</p>
            </li>
          ))}
        </ul>

        <div className="tabela" role="table" aria-label="Canais de distribuição">
          <div className="tabela-cab" role="row">
            <span>Canal</span>
            <span>Tipo</span>
            <span>Ação</span>
          </div>
          <div className="linha-amarela" aria-hidden="true" />
          {CANAIS.map((c) => (
            <a key={c.nome} className="tabela-linha" role="row" href="#propostas">
              <strong>{c.nome}</strong>
              <span>{c.tipo}</span>
              <span className="tabela-acao">
                {c.acao} <b aria-hidden="true">↗</b>
              </span>
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
