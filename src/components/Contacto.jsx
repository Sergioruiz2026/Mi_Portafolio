import { persona } from "../data.js";

export default function Contacto() {
  return (
    <section id="contacto" className="contacto">
      <div className="wrap">
        <h2>Contacto</h2>
        <p className="lead">Estoy disponible para entrevistas y para conversar sobre cargos junior.</p>
        <a className="big" href={`mailto:${persona.correo}`}>{persona.correo}</a>
        <ul className="datos">
          <li><a href={persona.github}>{persona.githubTexto}</a></li>
          <li><a href={persona.telefonoLink}>{persona.telefono}</a></li>
          <li>{persona.ubicacion}</li>
        </ul>
      </div>
    </section>
  );
}
