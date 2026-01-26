
import { ServiceItem, TouristSpot } from './types';

export const COLORS = {
  cream: '#FDFBF7',
  deepBlue: '#1B365D',
  sand: '#C2A878',
  wood: '#8B5E3C',
  urgent: '#E63946'
};

export const LOGO_URL = "https://res.cloudinary.com/drvs81bl0/image/upload/v1768496831/c7c65ce8-7e4e-4915-b240-b45698249057_j1m62p.jpg";

export const SERVICES: ServiceItem[] = [
  {
    id: 'rules',
    name: 'Reglas de Convivencia',
    icon: 'fa-clipboard-list',
    description: 'Normas importantes para una estadía armoniosa.',
    details: 'Para garantizar la mejor experiencia y el respeto entre vecinos, agradecemos cumplir con las siguientes normas del condominio:\n\n• Piscina: El uso de las piscinas está permitido únicamente hasta las 8:00 PM.\n• Seguridad: Por su seguridad, está estrictamente prohibido ingresar al mar durante la noche.\n• Música y Ruido: El volumen de la música alta está permitido solo hasta las 2:00 AM.\n• Mascotas: Está estrictamente prohibido el ingreso de animales al condominio bajo cualquier circunstancia.'
  },
  {
    id: 'wifi',
    name: 'WiFi 5G Alta Velocidad',
    icon: 'fa-wifi',
    description: 'Conexión estable para trabajo o streaming.',
    details: 'Red: OlasHome_Velas | Clave: paracas2024'
  },
  {
    id: 'jacuzzi',
    name: 'Jacuzzi Privado',
    icon: 'fa-hot-tub-person',
    description: 'Relájate con vista al mar. Instrucciones de uso seguro.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    details: 'Por favor, no use aceites. Encienda las burbujas solo cuando el agua cubra los jets.'
  },
  {
    id: 'parking',
    name: 'Cochera #12 (Acceso 24/7)',
    icon: 'fa-car',
    description: 'Ubicada a espaldas de los departamentos.',
    details: 'Puede utilizar el estacionamiento todo el tiempo que desee. Tiene total libertad para salir y regresar las veces que necesite, ya sea de madrugada, noche o día. El personal de garita le brindará apoyo constante en la entrada y salida. Es indispensable portar su brazalete al ingresar o salir del condominio.'
  },
  {
    id: 'trash',
    name: 'Gestión de Residuos',
    icon: 'fa-trash-can',
    description: 'Disposición de basura y limpieza.',
    details: 'Toda la basura es retirada. Durante la noche, puede bajarla al primer nivel y dejarla en la puerta exterior lateral del condominio. Es obligatorio que toda la basura esté en bolsas bien amarradas antes de retirarse del departamento o del condominio.'
  }
];

export const TOURIST_SPOTS: TouristSpot[] = [
  {
    id: 'reserva',
    name: 'Reserva Nacional de Paracas',
    description: 'Un desierto que se encuentra con el mar. Paisajes de Marte en la Tierra, incluyendo la famosa Playa Roja.',
    distance: '15 min en auto',
    imageUrl: 'https://res.cloudinary.com/drvs81bl0/image/upload/v1769052654/Captura_de_pantalla_2026-01-21_223039_gr1wqe.png',
    link: 'https://www.ytuqueplanes.com/destinos/ica/pisco/reserva-nacional-de-paracas'
  },
  {
    id: 'ballestas',
    name: 'Islas Ballestas',
    description: 'Navega para ver lobos marinos, pingüinos de Humboldt y el misterioso geoglifo El Candelabro.',
    distance: '5 min al puerto',
    imageUrl: 'https://res.cloudinary.com/drvs81bl0/image/upload/v1769052704/Captura_de_pantalla_2026-01-21_223132_wljnnp.png',
    link: 'https://es.wikipedia.org/wiki/Islas_Ballestas'
  },
  {
    id: 'yakupark',
    name: 'Yakupark',
    description: 'El parque acuático inflable mas grande de Sudamérica, lleno de adrenalina y diversión. Creemos que las personas merecen nuevas formas de diversión, vivir nuevas experiencias, salir de la rutina y recordar su infancia a través de una aventura acuática en Paracas.',
    distance: '10 min del condominio',
    imageUrl: 'https://res.cloudinary.com/drvs81bl0/image/upload/v1769463327/full-day-paracas-islas-ballestas-y-yakupark_gqk4cl.webp',
    link: 'https://yakupark.com/'
  },
  {
    id: 'camellos',
    name: 'Paseo en Camello (Huacachina)',
    description: 'Una experiencia mágica en el desierto de Ica, cerca del famoso Oasis de Huacachina. Aunque requiere un viaje corto, es ideal para quienes buscan un toque exótico.',
    distance: '1h 15 min en auto',
    imageUrl: 'https://res.cloudinary.com/drvs81bl0/image/upload/v1769053464/Captura_de_pantalla_2026-01-21_224413_tzdwql.png',
    link: 'https://huacachina.com/es/que-hacer/paseo-en-camello/'
  }
];

export const HOST_INFO = {
  name: 'Olas Home Concierge',
  whatsapp: 'https://wa.me/51923236071?text=Hola%20Olas%20Home%2C%20estoy%20hospedado%20en%20Las%20Velas%20y%20necesito%20asistencia%20VIP.',
  emergency: '+51 923 236 071',
  email: 'stay@olashome.pe'
};

export const REGISTRATION_LINK = "https://docs.google.com/spreadsheets/d/your-id-here";
