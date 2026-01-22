
import React from 'react';
import { TOURIST_SPOTS } from '../constants';

export const Tourism: React.FC = () => {
  return (
    <div className="px-6 pt-8 pb-20">
      <h2 className="font-serif text-3xl mb-2 text-[#1B365D]">Explora Paracas</h2>
      <p className="text-sm text-gray-500 mb-8">Nuestros lugares favoritos en la reserva.</p>

      <div className="grid gap-6">
        {TOURIST_SPOTS.map((spot) => (
          <div key={spot.id} className="group relative rounded-3xl overflow-hidden shadow-md bg-white border border-gray-100">
            <div className="h-48 overflow-hidden">
              <img 
                src={spot.imageUrl} 
                alt={spot.name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-5">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-[#1B365D] text-lg">{spot.name}</h3>
                <span className="bg-[#C2A878]/10 text-[#C2A878] text-[10px] px-2 py-1 rounded-full font-bold uppercase tracking-wider">
                  {spot.distance}
                </span>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed mb-4">
                {spot.description}
              </p>
              {spot.link && (
                <a 
                  href={spot.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#C2A878] text-xs font-bold uppercase tracking-widest inline-flex items-center gap-2 hover:opacity-70 transition-opacity"
                >
                  Ver más detalles <i className="fas fa-arrow-right"></i>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 p-6 bg-gradient-to-br from-[#1B365D] to-[#2a4e80] rounded-3xl text-white">
        <h4 className="font-serif text-xl mb-2">Tour Privado en Yate</h4>
        <p className="text-xs opacity-80 mb-4">Pregunte por nuestros tours exclusivos a las Islas Ballestas al atardecer.</p>
        <button className="bg-white text-[#1B365D] px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider">
          Reservar ahora
        </button>
      </div>
    </div>
  );
};
