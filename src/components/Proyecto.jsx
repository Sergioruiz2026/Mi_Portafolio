export default function Proyecto({ proyecto }) {
  const { nombre, tecnologias, enDesarrollo, puntos, enlace } = proyecto;
  return (
    <article className="proj">
      <div>
        <h3>{nombre}</h3>
        <p className="tec">{tecnologias}</p>
        {enDesarrollo && <span className="estado">En desarrollo</span>}
      </div>
      <div>
        <ul>
          {puntos.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
        {enlace && (
          <a className="ver" href={enlace}>Ver en GitHub</a>
        )}
      </div>
    </article>
  );
}
