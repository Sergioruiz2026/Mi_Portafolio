export default function BotonTema({ theme, onToggle }) {
  const dark = theme === "dark";

  return (
    <button
      type="button"
      className="theme-toggle"
      aria-label={dark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      title={dark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      onClick={onToggle}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        {dark ? (
          <path d="M12 3.75v1.5M12 18.75v1.5M5.64 5.64l1.06 1.06M17.3 17.3l1.06 1.06M3.75 12h1.5M18.75 12h1.5M5.64 18.36l1.06-1.06M17.3 6.7l1.06-1.06M12 7.5a4.5 4.5 0 1 1 0 9a4.5 4.5 0 0 1 0-9Z" />
        ) : (
          <path d="M16.5 12.75A5.25 5.25 0 0 1 11.25 7.5a5.25 5.25 0 1 0 5.25 5.25Z" />
        )}
      </svg>
    </button>
  );
}
