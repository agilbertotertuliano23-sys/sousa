import Backdrop from './sections/Backdrop';
import Header from './sections/Header';
import Hero from './sections/Hero';
import Canais from './sections/Canais';
import Marcas from './sections/Marcas';
import Escolhas from './sections/Escolhas';
import Vitrine from './sections/Vitrine';
import Propostas from './sections/Propostas';
import Contato from './sections/Contato';

export default function App() {
  return (
    <>
      <Backdrop />
      <Header />
      <main>
        <Hero />
        <Canais />
        <Marcas />
        <Escolhas />
        <Vitrine />
        <Propostas />
        <Contato />
      </main>
    </>
  );
}
