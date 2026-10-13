import { persona } from "../data.js";

export default function Hero() {
  return (
    <div className="hero">
      <div className="wrap hero-grid">
        <div className="hero-text">
          <h1>{persona.titular}</h1>
          <p>{persona.resumen}</p>
          <div className="cta">
            <a className="btn primary" href="#proyectos">Ver mis proyectos</a>
            <a className="btn" href={persona.cv} download>Descargar CV en PDF</a>
          </div>
        </div>
        <figure className="foto">
          <img src={persona.foto} width="720" height="720" alt={persona.fotoAlt} />
        </figure>
      </div>
    </div>
  );
}
