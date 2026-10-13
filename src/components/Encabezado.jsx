import BotonTema from "./BotonTema.jsx";

export default function Encabezado({ nombre, theme, onToggle }) {
  return (
    <div className="wrap">
      <header className="top">
        <a className="logo" href="#inicio">{nombre}</a>
        <div className="top-actions">
          <nav aria-label="Principal">
            <a href="#proyectos">Proyectos</a>
            <a href="#trayectoria">Trayectoria</a>
            <a href="#habilidades">Habilidades</a>
            <a href="#contacto">Contacto</a>
          </nav>
          <BotonTema theme={theme} onToggle={onToggle} />
        </div>
      </header>
    </div>
  );
}
