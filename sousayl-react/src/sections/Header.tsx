export default function Header() {
  return (
    <header className="topo">
      <a className="topo-logo" href="#inicio" aria-label="SOUSAYL, topo">
        <span className="topo-mark">S</span>
        <span>SOUSAYL</span>
      </a>
      <nav className="topo-nav" aria-label="Seções">
        <a href="#inicio">Números</a>
        <a href="#canais">Canais</a>
        <a href="#marcas">Para marcas</a>
        <a href="#escolhas">Escolhas</a>
        <a href="#propostas">Canais</a>
      </nav>
      <a className="pill" href="#contato">Divulgar marca</a>
    </header>
  );
}
