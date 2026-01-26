
import React, { useState } from 'react';
import { HOST_INFO, LOGO_URL } from '../constants';

export const Contact: React.FC = () => {
  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number>(0);
  const [submitted, setSubmitted] = useState(false);

  const handleRating = (rate: number) => {
    setRating(rate);
    setSubmitted(true);
  };

  return (
    <div className="px-6 pt-8 pb-24">
      <div className="mb-8">
        <h2 className="font-serif text-3xl mb-2 text-[#1B365D]">Contacto & Asistencia</h2>
        <p className="text-sm text-gray-500">Servicio personalizado 24/7 durante su estadía.</p>
      </div>

      {/* Concierge Card */}
      <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center space-y-6 mb-12">
        <div className="relative">
          <div className="w-24 h-24 rounded-full border-2 border-[#C2A878] p-1 overflow-hidden">
            <img 
              src="https://res.cloudinary.com/drvs81bl0/image/upload/v1769462754/Dise%C3%B1o_sin_t%C3%ADtulo_24_q4zcyl.png" 
              alt="Concierge Olas Home" 
              className="w-full h-full rounded-full object-cover" 
            />
          </div>
          <div className="absolute -bottom-1 -right-1 w-10 h-10 bg-white rounded-full p-1 shadow-md border border-gray-100">
            <img src={LOGO_URL} alt="Olas Home" className="w-full h-full rounded-full object-cover" />
          </div>
        </div>
        
        <div>
          <h3 className="font-serif text-2xl font-bold text-[#1B365D]">{HOST_INFO.name}</h3>
          <p className="text-[10px] text-[#C2A878] font-bold uppercase tracking-[0.3em] mt-1">Concierge Services</p>
        </div>

        <p className="text-xs text-gray-500 leading-relaxed max-w-[250px]">
          Estamos aquí para asegurar que su estadía en Las Velas sea perfecta. Contáctenos para cualquier requerimiento especial.
        </p>
        
        <a 
          href={HOST_INFO.whatsapp} 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full bg-[#25D366] text-white py-4 rounded-2xl flex items-center justify-center gap-3 shadow-lg hover:brightness-105 active:scale-95 transition-all text-sm font-bold uppercase tracking-widest"
        >
          <i className="fab fa-whatsapp text-xl"></i>
          Atención por WhatsApp
        </a>

        <div className="grid grid-cols-1 w-full gap-3 pt-4 border-t border-gray-50">
          <div className="flex items-center justify-center gap-2 text-[10px] text-gray-400 font-medium">
            <i className="fas fa-envelope text-[#C2A878]"></i>
            {HOST_INFO.email}
          </div>
          <div className="flex items-center justify-center gap-2 text-[10px] text-gray-400 font-medium">
            <i className="fas fa-phone-alt text-[#C2A878]"></i>
            {HOST_INFO.emergency}
          </div>
        </div>
      </div>

      {/* Satisfaction Rating */}
      <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center">
        <p className="text-[10px] text-[#C2A878] font-bold uppercase tracking-[0.2em] mb-2">Su opinión nos importa</p>
        <h3 className="font-serif text-lg text-[#1B365D] mb-6">¿Cómo califica su estadía hasta ahora?</h3>
        
        {!submitted ? (
          <div className="flex items-center justify-center gap-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                className="text-2xl transition-all hover:scale-125"
                onClick={() => handleRating(star)}
                onMouseEnter={() => setHover(star)}
                onMouseLeave={() => setHover(0)}
              >
                <i className={`fa-star ${star <= (hover || rating) ? 'fas text-[#C2A878]' : 'far text-gray-200'}`}></i>
              </button>
            ))}
          </div>
        ) : (
          <div className="py-2 animate-in fade-in zoom-in duration-500">
            <div className="w-12 h-12 bg-[#C2A878]/10 text-[#C2A878] rounded-full flex items-center justify-center mx-auto mb-3">
              <i className="fas fa-check"></i>
            </div>
            <p className="text-xs font-bold text-[#1B365D]">¡Gracias por su valoración!</p>
            <p className="text-[10px] text-gray-400 mt-1">Trabajamos para que su experiencia sea inolvidable.</p>
          </div>
        )}
      </div>

      <div className="mt-12 text-center pb-8 opacity-40">
        <img src={LOGO_URL} alt="Olas Home Footer" className="w-8 h-8 rounded-full grayscale mx-auto mb-2" />
        <p className="text-[8px] uppercase tracking-[0.4em] text-gray-400">© 2024 Olas Home VIP Services</p>
      </div>
    </div>
  );
};
