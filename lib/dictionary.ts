export type Lang = "en" | "es";

const en = {
  lang: "en" as Lang,
  nav: {
    home: "Home",
    ourStory: "Our Story",
    gallery: "Gallery",
    ship: "The Ship",
    travel: "Travel",
    registry: "Registry",
    rsvp: "RSVP",
  },
  langToggle: { en: "EN", es: "ES", label: "Language" },

  hero: {
    kicker: "We're Getting Married At Sea",
    aboard: "Aboard an MSC Cruises Caribbean & Bahamas voyage",
  },

  welcome: {
    kicker: "Welcome",
    quote:
      "“We fell in love chasing new horizons, so we're setting sail with the people we love most to celebrate this new chapter. Come aboard and celebrate with us.”",
  },

  countdown: {
    kicker: "Counting Down To Set Sail",
    days: "Days",
    hours: "Hours",
    minutes: "Minutes",
    seconds: "Seconds",
  },

  details: {
    kicker: "The Details",
    title: "Cruise Details",
    cruiseLine: "Cruise Line",
    embarkation: "Embarkation",
    sailDates: "Sail Dates",
    duration: "Duration",
    durationValue: "4 Nights, Caribbean & Bahamas",
    travelLink: "Travel & Full Itinerary",
  },

  ctaBand: {
    kicker: "Kindly RSVP & Reserve Your Cabin",
    title: "We hope you'll set sail with us",
    button: "RSVP & Reserve Cabin",
  },

  connect: {
    kicker: "Stay Connected",
    title: "Join Our Facebook Group",
    body: "Join to stay updated on information about the cruise, wedding, excursions and other information.",
    button: "Join The Group",
  },

  ourStory: {
    kicker: "Est. 2021",
    title: "Our Story",
    subtitle: "Every love story is beautiful, but ours is our favorite.",
    milestones: [
      {
        year: "September 2021",
        title: "It Started With a Dance",
        copy: [
          "In September 2021, two strangers met on a dance floor in Middleburg, Florida. What started with a single dance turned into more dancing, talking, laughing, and getting to know each other. Neither of us knew it that night, but something had just begun.",
        ],
      },
      {
        year: "February 2022",
        title: "From Dancing to Dating",
        copy: [
          "A few months later, our connection grew into something neither of us could ignore. In February 2022, we officially started dating. What began with dancing quickly became shared adventures, countless memories, and a love that continued to grow.",
        ],
      },
      {
        year: "June 2026",
        title: "The Proposal",
        copy: [
          "After nearly five years of dancing through life together, we said yes to forever and became engaged in June 2026.",
          "And just like that first dance, we took another step into something new, together.",
        ],
      },
      {
        year: "June 2027",
        title: "Setting Sail",
        copy: [
          "Now, we're ready for our next adventure.",
          "Surrounded by the people we love most, we'll celebrate the beginning of our marriage somewhere between the sea and the sky.",
          "From one dance in Middleburg to saying “I do” out at sea, our story has brought us somewhere we never could have imagined.",
          "And this is only the beginning.",
        ],
      },
    ],
  },

  gallery: {
    kicker: "Moments",
    title: "Gallery",
    subtitle: "A few of our favorite memories together, with more to come after the big day.",
  },

  ship: {
    kicker: "Our Ship",
    subtitle: "A Seaside-class ship built for ocean views, sunny decks, and celebrating in style.",
    intro: "We'll be sailing aboard MSC Seashore, one of MSC's newest Seaside-class ships, known for wraparound sea-view promenades, floor-to-ceiling windows, and an outdoor deck built to make the most of every port day.",
    highlights: [
      {
        title: "Endless Ocean Views",
        copy: "Wraparound outdoor promenades and glass elevators keep the sea in view from almost anywhere onboard.",
      },
      {
        title: "Pools & Sun Decks",
        copy: "Multiple pools, whirlpools, and a waterpark area give everyone, kids included, plenty of ways to cool off.",
      },
      {
        title: "Dining & Entertainment",
        copy: "A variety of restaurants and bars, plus live entertainment most evenings.",
      },
      {
        title: "Relax & Unwind",
        copy: "A spa, casino, and lounges onboard for whenever you want to slow down.",
      },
    ],
    note: "Onboard venues and amenities are set by MSC Cruises and may change.",
    officialLink: "View Official Ship Details",
  },

  travel: {
    kicker: "Getting Here",
    title: "Travel & Itinerary",
    embarkKicker: "Embarkation",
    embarkPortLabel: "Departure Port",
    mapLink: "View Map",
    itineraryKicker: "Full Itinerary",
    itineraryTitle: "Caribbean & Bahamas",
    itineraryNote: "Information subject to change due to final availability of berth or anchorage.",
    tableHeaders: {
      day: "Day",
      date: "Date",
      port: "Port",
      arrival: "Arrival",
      departure: "Departure",
    },
    days: {
      sun: "Sunday",
      mon: "Monday",
      tue: "Tuesday",
      wed: "Wednesday",
      thu: "Thursday",
    },
  },

  registry: {
    kicker: "With Gratitude",
    title: "Registry",
    subtitle: "Your presence aboard is the greatest gift of all. For those who've asked, we've set up a Honeyfund below.",
    cardTitle: "Contribute To Our Honeyfund",
    cardBody: "Whether it's a little or a lot, every gift helps us kick off married life with new adventures. Thank you for being part of our story.",
    button: "Give A Gift",
    feeNote: "Heads up: Honeyfund adds an optional support fee at checkout. Feel free to click \"Support Honeyfund Gives\" and remove it, it won't affect your gift to us.",
  },

  rsvp: {
    kicker: "Join Us",
    title: "RSVP & Reserve Your Cabin",
    subtitle: "Cabins are limited, so please reply as soon as you're able.",
    cardKicker: "Respond Here",
    cardTitle: "Let Us Know You're Coming Aboard",
    body: "Please use the link below to RSVP and reserve your cabin, since it's the same form for both. It only takes a few minutes and helps us finalize our group booking.",
    button: "Open RSVP & Cabin Form",
    questions: "Questions? Reach out at",
  },

  footer: {
    facebook: "Facebook Group",
  },
};

const es: typeof en = {
  lang: "es",
  nav: {
    home: "Inicio",
    ourStory: "Nuestra Historia",
    gallery: "Galería",
    ship: "El Barco",
    travel: "Viaje",
    registry: "Mesa de Regalos",
    rsvp: "Confirmar",
  },
  langToggle: { en: "EN", es: "ES", label: "Idioma" },

  hero: {
    kicker: "Nos Casamos En Alta Mar",
    aboard: "A bordo de un crucero de MSC Cruises por el Caribe y las Bahamas",
  },

  welcome: {
    kicker: "Bienvenidos",
    quote:
      "“Nos enamoramos persiguiendo nuevos horizontes, y ahora zarpamos junto a las personas que más amamos para celebrar este nuevo capítulo. Acómpáñanos a bordo.”",
  },

  countdown: {
    kicker: "Cuenta Regresiva Para Zarpar",
    days: "Días",
    hours: "Horas",
    minutes: "Minutos",
    seconds: "Segundos",
  },

  details: {
    kicker: "Los Detalles",
    title: "Detalles Del Crucero",
    cruiseLine: "Línea De Crucero",
    embarkation: "Embarque",
    sailDates: "Fechas Del Viaje",
    duration: "Duración",
    durationValue: "4 Noches, Caribe y Bahamas",
    travelLink: "Viaje E Itinerario Completo",
  },

  ctaBand: {
    kicker: "Confirma Tu Asistencia Y Reserva Tu Cabina",
    title: "Esperamos que zarpes con nosotros",
    button: "Confirmar Y Reservar Cabina",
  },

  connect: {
    kicker: "Mantente Conectado",
    title: "Únete A Nuestro Grupo De Facebook",
    body: "Únete para mantenerte al tanto de consejos para empacar, coordinación de cabinas e información sobre excursiones y otros descuentos antes del crucero.",
    button: "Unirme Al Grupo",
  },

  ourStory: {
    kicker: "Desde 2021",
    title: "Nuestra Historia",
    subtitle: "Toda historia de amor es hermosa, pero la nuestra es nuestra favorita.",
    milestones: [
      {
        year: "Septiembre 2021",
        title: "Todo Comenzó Con Un Baile",
        copy: [
          "En septiembre de 2021, dos desconocidos se conocieron en una pista de baile en Middleburg, Florida. Lo que comenzó con un solo baile se convirtió en más bailes, conversaciones, risas y ganas de conocerse mejor. Ninguno de los dos lo sabía esa noche, pero algo especial acababa de comenzar.",
        ],
      },
      {
        year: "Febrero 2022",
        title: "Del Baile Al Noviazgo",
        copy: [
          "Unos meses después, nuestra conexión se convirtió en algo que ninguno de los dos podía ignorar. En febrero de 2022, comenzamos a salir oficialmente. Lo que empezó bailando pronto se transformó en aventuras juntos, incontables recuerdos y un amor que no dejó de crecer.",
        ],
      },
      {
        year: "Junio 2026",
        title: "El Compromiso",
        copy: [
          "Después de casi cinco años bailando juntos por la vida, dijimos que sí para siempre y nos comprometimos en junio de 2026.",
          "Y tal como aquel primer baile, dimos otro paso hacia algo nuevo, juntos.",
        ],
      },
      {
        year: "Junio 2027",
        title: "Nos Casamos",
        copy: [
          "Ahora, estamos listos para nuestra próxima aventura.",
          "Rodeados de las personas que más amamos, celebraremos el comienzo de nuestro matrimonio en algún lugar entre el mar y el cielo.",
          "Desde un baile en Middleburg hasta decir “sí, acepto” en alta mar, nuestra historia nos ha llevado a un lugar que nunca imaginamos.",
          "Y esto apenas comienza.",
        ],
      },
    ],
  },

  gallery: {
    kicker: "Momentos",
    title: "Galería",
    subtitle: "Algunos de nuestros recuerdos favoritos juntos, con más por venir después de la boda.",
  },

  ship: {
    kicker: "Nuestro Barco",
    subtitle: "Un barco clase Seaside diseñado para vistas al mar, cubiertas soleadas y celebrar con estilo.",
    intro: "Navegaremos a bordo del MSC Seashore, uno de los barcos más nuevos de MSC clase Seaside, conocido por sus paseos exteriores con vista al mar, ventanales de piso a techo y una cubierta pensada para aprovechar al máximo cada día de puerto.",
    highlights: [
      {
        title: "Vistas Al Mar Sin Fin",
        copy: "Paseos exteriores envolventes y elevadores de cristal mantienen el mar a la vista desde casi cualquier parte del barco.",
      },
      {
        title: "Piscinas Y Cubiertas",
        copy: "Varias piscinas, jacuzzis y un área de parque acuático para que todos, incluidos los niños, se refresquen.",
      },
      {
        title: "Gastronomía Y Entretenimiento",
        copy: "Una variedad de restaurantes y bares, además de entretenimiento en vivo casi todas las noches.",
      },
      {
        title: "Relajarse Y Desconectar",
        copy: "Spa, casino y salones a bordo para cuando quieras bajar el ritmo.",
      },
    ],
    note: "Las instalaciones y servicios a bordo son definidos por MSC Cruises y pueden cambiar.",
    officialLink: "Ver Detalles Oficiales Del Barco",
  },

  travel: {
    kicker: "Cómo Llegar",
    title: "Viaje E Itinerario",
    embarkKicker: "Embarque",
    embarkPortLabel: "Puerto De Salida",
    mapLink: "Ver Mapa",
    itineraryKicker: "Itinerario Completo",
    itineraryTitle: "Caribe Y Bahamas",
    itineraryNote: "La información está sujeta a cambios según la disponibilidad final de atraque o anclaje.",
    tableHeaders: {
      day: "Día",
      date: "Fecha",
      port: "Puerto",
      arrival: "Llegada",
      departure: "Salida",
    },
    days: {
      sun: "Domingo",
      mon: "Lunes",
      tue: "Martes",
      wed: "Miércoles",
      thu: "Jueves",
    },
  },

  registry: {
    kicker: "Con Gratitud",
    title: "Mesa De Regalos",
    subtitle: "Tu presencia a bordo es el mejor regalo de todos. Para quienes han preguntado, dejamos nuestro Honeyfund abajo.",
    cardTitle: "Contribuye A Nuestro Honeyfund",
    cardBody: "Ya sea poco o mucho, cada regalo nos ayuda a comenzar nuestra vida de casados con nuevas aventuras. Gracias por ser parte de nuestra historia.",
    button: "Dar Un Regalo",
    feeNote: "Nota: Honeyfund agrega una tarifa de apoyo opcional al pagar. Si prefieres, puedes hacer clic en \"Support Honeyfund Gives\" para quitarla, esto no afecta tu regalo.",
  },

  rsvp: {
    kicker: "Únete A Nosotros",
    title: "Confirma Tu Asistencia Y Reserva Tu Cabina",
    subtitle: "Las cabinas son limitadas, por favor responde lo antes posible.",
    cardKicker: "Responde Aquí",
    cardTitle: "Cuéntanos Que Vienes A Bordo",
    body: "Usa el enlace de abajo para confirmar tu asistencia y reservar tu cabina, ya que es el mismo formulario para ambos. Solo toma unos minutos y nos ayuda a finalizar nuestra reserva grupal.",
    button: "Abrir Formulario De Confirmación",
    questions: "¿Preguntas? Escríbenos a",
  },

  footer: {
    facebook: "Grupo De Facebook",
  },
};

export const dict = { en, es };
