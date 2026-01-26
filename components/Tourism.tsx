
import React, { useState } from 'react';
import { TOURIST_SPOTS, HOST_INFO } from '../constants';

export const Tourism: React.FC = () => {
  const [showCode, setShowCode] = useState(false);
  
  // Enlace de WhatsApp con el código incluido para la redención
  const DISCOUNT_WHATSAPP = `https://wa.me/51923236071?text=Hola%20Olas%20Home%2C%20tengo%20el%20c%C3%B3digo%20de%20descuento%20olas26%20para%20mi%20pr%C3%B3xima%20estad%C3%ADa.`;

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

      {/* Bloque Estratégico de Descuento */}
      <div className="mt-12 p-8 bg-gradient-to-br from-[#1B365D] to-[#25426e] rounded-3xl text-white relative overflow-hidden shadow-2xl border border-white/10">
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
              <i className="fas fa-gift text-[#C2A878]"></i>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C2A878]">Programa de Fidelidad</span>
          </div>
          
          <h4 className="font-serif text-2xl mb-3 leading-tight">10% de Descuento Especial</h4>
          <p className="text-xs opacity-80 mb-6 leading-relaxed">
            Valoramos su preferencia. Queremos que vuelva pronto o que sus seres queridos vivan esta misma experiencia.
          </p>

          {!showCode ? (
            <button 
              onClick={() => setShowCode(true)}
              className="w-full bg-[#C2A878] hover:bg-[#b39766] text-white px-6 py-4 rounded-2xl text-xs font-bold uppercase tracking-widest transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2"
            >
              <i className="fas fa-unlock-alt"></i>
              Obtener mi código de descuento
            </button>
          ) : (
            <div className="animate-in zoom-in-95 duration-300">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 text-center mb-4">
                <span className="text-[10px] uppercase tracking-[0.4em] opacity-60 block mb-1">Tu Código VIP</span>
                <span className="text-3xl font-serif font-bold tracking-[0.2em] text-[#C2A878]">olas26</span>
              </div>
              
              <div className="bg-white/5 p-4 rounded-xl border-l-2 border-[#C2A878] mb-6">
                <p className="text-[11px] leading-relaxed italic text-gray-200">
                  "Con este código podrá canjear su descuento en su próxima visita o recomendarlo a sus amigos y familiares para que ellos también disfruten del beneficio."
                </p>
              </div>

              <a 
                href={DISCOUNT_WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] text-white px-6 py-4 rounded-2xl text-xs font-bold uppercase tracking-widest transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2"
              >
                <i className="fab fa-whatsapp text-lg"></i>
                Validar código por WhatsApp
              </a>
            </div>
          )}
        </div>
        
        {/* Decoración de fondo */}
        <i className="fas fa-gem absolute -right-6 -bottom-6 text-9xl opacity-10 rotate-12"></i>
      </div>
      
      <p className="text-[10px] text-center mt-6 text-gray-400 italic">
        * Descuento exclusivo para reservas directas y recomendaciones.
      </p>
    </div>
  );
};
