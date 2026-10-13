import { habilidades } from "../data.js";

export default function Habilidades() {
  return (
    <section id="habilidades">
      <div className="wrap">
        <h2>Habilidades</h2>
        <p className="lead">Lo que uso en mis proyectos y lo que traigo de mi trabajo anterior.</p>
        <div className="hab">
          {habilidades.map((h) => (
            <div key={h.titulo}>
              <h3>{h.titulo}</h3>
              <p>{h.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
