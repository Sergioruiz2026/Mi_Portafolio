import Encabezado from "./components/Encabezado.jsx";
import Hero from "./components/Hero.jsx";
import Proyectos from "./components/Proyectos.jsx";
import Trayectoria from "./components/Trayectoria.jsx";
import Habilidades from "./components/Habilidades.jsx";
import Contacto from "./components/Contacto.jsx";
import { persona } from "./data.js";

export default function App() {
  return (
    <>
      <Encabezado nombre={persona.nombre} />
      <main id="inicio">
        <Hero />
        <Proyectos />
        <Trayectoria />
        <Habilidades />
        <Contacto />
      </main>
      <footer>
        <div className="wrap">{persona.nombre}, 2026.</div>
      </footer>
    </>
  );
}
