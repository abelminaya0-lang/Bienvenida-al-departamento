
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
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder
    details: 'Por favor, no use aceites. Encienda las burbujas solo cuando el agua cubra los jets.'
  },
  {
    id: 'parking',
    name: 'Cochera #12',
    icon: 'fa-car',
    description: 'Espacio techado disponible 24/7.',
    details: 'Use el control remoto entregado en check-in. Ingrese por la puerta B.'
  },
  {
    id: 'trash',
    name: 'Gestión de Residuos',
    icon: 'fa-trash-can',
    description: 'Horarios de recolección y puntos de reciclaje.',
    details: 'La basura se retira de 8:00 AM a 10:00 AM en la puerta de servicio, ubicada en el primer piso.'
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
    id: 'mina',
    name: 'Playa La Mina',
    description: 'Una de las playas más hermosas del Perú, con aguas tranquilas de color turquesa y arena blanca.',
    distance: '25 min en auto',
    imageUrl: 'https://res.cloudinary.com/drvs81bl0/image/upload/v1769052770/Captura_de_pantalla_2026-01-21_223231_ui9wv9.png',
    link: 'https://www.peru.travel/es/atractivos/reserva-nacional-de-paracas'
  },
  {
    id: 'camellos',
    name: 'Paseo en Camello (Huacachina)',
    description: 'Una experiencia mágica en el desierto de Ica, cerca del famoso Oasis de Huacachina. Aunque requiere un viaje corto, es ideal para quienes buscan un toque exótico y fotos de ensueño en las dunas.',
    distance: '1h 15 min en auto',
    imageUrl: 'https://res.cloudinary.com/drvs81bl0/image/upload/v1769053464/Captura_de_pantalla_2026-01-21_224413_tzdwql.png',
    link: 'https://huacachina.com/es/que-hacer/paseo-en-camello/'
  }
];

export const HOST_INFO = {
  name: 'Olas Home Concierge',
  whatsapp: 'https://wa.me/51923236071?text=Hola%20Olas%20Home%2C%20estoy%20hospedado%20en%20Las%20Velas%20y%20necesito%20asistencia%20VIP.',
  emergency: 'Central Las Velas: +51 56 123456',
  email: 'stay@olashome.pe'
};

export const REGISTRATION_LINK = "https://docs.google.com/spreadsheets/d/your-id-here";
