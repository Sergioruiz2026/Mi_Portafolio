import Proyecto from "./Proyecto.jsx";
import { proyectos } from "../data.js";

export default function Proyectos() {
  return (
    <section id="proyectos">
      <div className="wrap">
        <h2>Proyectos</h2>
        <p className="lead">Cinco proyectos propios. Los repositorios están en GitHub.</p>
        {proyectos.map((p) => (
          <Proyecto key={p.nombre} proyecto={p} />
        ))}
      </div>
    </section>
  );
}
