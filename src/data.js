export const persona = {
  nombre: "Sergio Ruiz Espinoza",
  titular: "Creo aplicaciones para cuidar a las personas y proteger sus datos.",
  resumen:
    "Soy estudiante de Ingeniería en Informática en INACAP. Antes de programar pasé 13 años liderando tiendas; hoy construyo aplicaciones en Python y JavaScript, con seguridad y pruebas desde el inicio.",
  correo: "sergio.ruiz.espinoza2026@gmail.com",
  telefono: "+56 9 9713 1557",
  telefonoLink: "tel:+56997131557",
  ubicacion: "Quilpué, Región de Valparaíso, Chile",
  github: "https://github.com/Sergioruiz2026",
  githubTexto: "github.com/Sergioruiz2026",
  cv: "/CV_Sergio_Ruiz_Espinoza.pdf",
  foto: "/foto.jpg",
  fotoAlt: "Retrato de Sergio Ruiz Espinoza con traje oscuro, corbata azul y lentes",
};

export const proyectos = [
  {
    nombre: "Pulsso",
    tecnologias: "JavaScript, Node.js, HTML y CSS, GitHub Actions",
    enDesarrollo: true,
    puntos: [
      "App de apoyo emocional para personas de todas las edades que pasan por un momento de bajón o depresión.",
      "Detecta cuando el usuario lleva mucho tiempo sin conectarse y le pregunta si está bien.",
      "Si el usuario lo acepta, avisa a sus contactos de referencia para que puedan acompañarlo.",
    ],
    enlace: "https://github.com/Sergioruiz2026/PULSSO2.1",
  },
  {
    nombre: "TeCuido",
    tecnologias: "App con componente de servidor",
    enDesarrollo: true,
    puntos: [
      "Ayuda a adultos mayores y adultos en general a llevar el control de sus consultas médicas, medicamentos y horas de exámenes.",
      "Alarmas y recordatorios para tomar los remedios y llegar a las citas.",
      "Próximamente: geolocalización y conexión con Uber para pedir traslados de forma más simple.",
    ],
    enlace: "https://github.com/Sergioruiz2026/TeCuido",
  },
  {
    nombre: "Viajes Aventura",
    tecnologias: "Python, API web con Uvicorn, SQLite, pytest",
    enDesarrollo: false,
    puntos: [
      "Administra destinos, paquetes, clientes y reservas, en consola y en la web.",
      "Protege los datos: contraseñas con Argon2id, RUT y teléfono cifrados con Fernet, sesiones con cookie HttpOnly y datos sensibles ocultos en los logs.",
      "Incluye documentación de instalación y pruebas automatizadas.",
    ],
    enlace: "https://github.com/Sergioruiz2026/Viajeaventura",
  },
  {
    nombre: "EcoTech Solutions",
    tecnologias: "Python, SQLite, programación orientada a objetos, unittest",
    enDesarrollo: false,
    puntos: [
      "Sistema de gestión de empleados, proyectos, departamentos y horas, con acceso por roles de administrador, gerente y operador.",
      "Contraseñas con PBKDF2, bloqueo tras intentos fallidos y registro de auditoría.",
      "Genera informes en PDF y Excel, ocultando salarios y correos según el rol, y consulta APIs externas de clima, tipo de cambio y geolocalización.",
    ],
    enlace: "https://github.com/Sergioruiz2026/EcoTech_Solutions",
  },
  {
    nombre: "Sitio web de una escuela de patinaje",
    tecnologias: "Escuela de patinaje artístico en patines de 4 ruedas",
    enDesarrollo: true,
    puntos: [
      "Página web para dar a conocer la escuela y facilitar el contacto con quienes quieren inscribirse.",
    ],
    enlace: null,
  },
];

export const trayectoria = [
  {
    periodo: "1997 – 2001",
    titulo: "Escuela de Grumetes y Academia Politécnica Naval",
    detalle: "Técnico Nivel Superior en Mecánica de Combustión Interna, titulado en 2001.",
    actual: false,
  },
  {
    periodo: "2011 – 2024",
    titulo: "Jefe de local, Calzados Ferracini",
    detalle:
      "Entré como vendedor part time y llegué a jefe de local en Belloto, Calama, Puerto Montt y Viña del Mar: caja, inventario, metas de venta y equipo.",
    actual: false,
  },
  {
    periodo: "2026",
    titulo: "Ingeniería en Informática, INACAP",
    detalle:
      "Estudio y publico mis proyectos en GitHub. Busco mi primera oportunidad en desarrollo de software o soporte TI.",
    actual: true,
  },
];

export const habilidades = [
  { titulo: "Programación", texto: "Python, JavaScript, Node.js, programación orientada a objetos. React con Vite (nivel básico)." },
  { titulo: "Datos y APIs", texto: "SQLite, SQL, consumo de APIs externas y API web con Uvicorn." },
  { titulo: "Seguridad", texto: "Control de acceso por roles, hash de contraseñas (PBKDF2, Argon2id), cifrado con Fernet y validación de entradas." },
  { titulo: "Calidad y herramientas", texto: "Pruebas con unittest y pytest, Git y GitHub, informes en PDF y Excel." },
  { titulo: "Trabajo en equipo", texto: "Liderazgo de equipos, atención al cliente, control de inventario y de caja." },
  { titulo: "Ofimática e idiomas", texto: "Microsoft Excel (básico). Inglés (básico)." },
];
