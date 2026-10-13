export default function Encabezado({ nombre }) {
  return (
    <div className="wrap">
      <header className="top">
        <a className="logo" href="#inicio">{nombre}</a>
        <nav aria-label="Principal">
          <a href="#proyectos">Proyectos</a>
          <a href="#trayectoria">Trayectoria</a>
          <a href="#habilidades">Habilidades</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </header>
    </div>
  );
}
