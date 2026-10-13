import { useEffect, useState } from "react";
import Encabezado from "./components/Encabezado.jsx";
import Hero from "./components/Hero.jsx";
import Proyectos from "./components/Proyectos.jsx";
import Trayectoria from "./components/Trayectoria.jsx";
import Habilidades from "./components/Habilidades.jsx";
import Contacto from "./components/Contacto.jsx";
import { persona } from "./data.js";

function getStoredTheme() {
  try {
    const saved = window.localStorage.getItem("theme");
    if (saved === "dark" || saved === "light") {
      return saved;
    }
  } catch {
    // Ignora errores de localStorage y usa el modo claro.
  }
  return "light";
}

export default function App() {
  const [theme, setTheme] = useState(getStoredTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);

    try {
      window.localStorage.setItem("theme", theme);
    } catch {
      // Si localStorage no está disponible, se mantiene el tema actual.
    }
  }, [theme]);

  return (
    <>
      <Encabezado nombre={persona.nombre} theme={theme} onToggle={() => setTheme((current) => (current === "dark" ? "light" : "dark"))} />
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
