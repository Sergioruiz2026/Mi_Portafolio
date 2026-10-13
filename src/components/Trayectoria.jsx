import { trayectoria } from "../data.js";

export default function Trayectoria() {
  return (
    <section id="trayectoria">
      <div className="wrap">
        <h2>Trayectoria</h2>
        <p className="lead">De la mecánica naval a la administración de tiendas, y ahora al desarrollo de software.</p>
        <ol className="ruta">
          {trayectoria.map((t) => (
            <li key={t.periodo} className={t.actual ? "ahora" : undefined}>
              <div className="anio">{t.periodo}</div>
              <div>
                <h3>{t.titulo}</h3>
                <p>{t.detalle}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
