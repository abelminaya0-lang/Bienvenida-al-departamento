
import React, { useState } from 'react';
import { HOST_INFO, LOGO_URL } from '../constants';

export const Contact: React.FC = () => {
  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number>(0);
  const [submitted, setSubmitted] = useState(false);
  const [showExtensionInfo, setShowExtensionInfo] = useState(false);

  const handleRating = (rate: number) => {
    setRating(rate);
    setSubmitted(true);
  };

  const EXTENSION_WHATSAPP = `https://wa.me/51996012246?text=Hola%20Olas%20Home%2C%20estoy%20disfrutando%20mucho%20mi%20estad%C3%ADa%20en%20Las%20Velas%20y%20me%20gustar%C3%ADa%20consultar%20la%20tarifa%20especial%20para%20quedarme%20una%20noche%20m%C3%A1s.`;

  return (
    <div className="px-6 pt-8 pb-24">
      <div className="mb-8">
        <h2 className="font-serif text-3xl mb-2 text-[#1B365D]">Contacto & Asistencia</h2>
        <p className="text-sm text-gray-500">Servicio personalizado 24/7 durante su estadía.</p>
      </div>

      {/* Concierge Card */}
      <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center space-y-6 mb-8">
        <div className="relative">
          <div className="w-24 h-24 rounded-full border-2 border-[#C2A878] p-1 overflow-hidden shadow-inner">
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

      {/* 🌟 Bloque Estratégico: Extender Estadía (One More Night) */}
      <div className="mb-8 relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-[#C2A878]/20 to-[#1B365D]/10 rounded-3xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
        <div 
          onClick={() => setShowExtensionInfo(!showExtensionInfo)}
          className="relative bg-white/60 backdrop-blur-md p-6 rounded-3xl border border-[#C2A878]/30 cursor-pointer transition-all active:scale-[0.98] overflow-hidden"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#1B365D] rounded-2xl flex items-center justify-center text-white shadow-lg">
              <i className="fas fa-moon text-xl animate-pulse"></i>
            </div>
            <div className="flex-1">
              <h4 className="font-serif text-lg text-[#1B365D] font-bold">¿Paracas te atrapa?</h4>
              <p className="text-[10px] uppercase tracking-widest text-[#C2A878] font-bold">Un día más de paraíso</p>
            </div>
            <i className={`fas fa-chevron-${showExtensionInfo ? 'up' : 'right'} text-[#C2A878] text-xs`}></i>
          </div>

          {showExtensionInfo && (
            <div className="mt-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-500">
              <p className="text-xs text-gray-600 leading-relaxed italic border-l-2 border-[#C2A878] pl-3">
                "A veces, el tiempo no es suficiente para tanta paz. Si siente que su alma pide una noche más frente al mar, tenemos un beneficio especial esperándole."
              </p>
              
              <div className="bg-[#1B365D]/5 p-4 rounded-2xl text-center">
                <span className="text-[9px] uppercase tracking-[0.2em] text-[#C2A878] font-bold block mb-1">Beneficio de Extensión</span>
                <p className="text-sm font-bold text-[#1B365D] mb-4">Descubra su tarifa VIP personalizada</p>
                
                <a 
                  href={EXTENSION_WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#1B365D] border-b-2 border-[#C2A878] pb-1 hover:text-[#C2A878] transition-colors"
                >
                  Consultar Disponibilidad con el Host <i className="fas fa-arrow-right text-[8px]"></i>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Satisfaction Rating */}
      <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center mb-8">
        <p className="text-[10px] text-[#C2A878] font-bold uppercase tracking-widest mb-2">Su opinión nos importa</p>
        <h3 className="font-serif text-lg text-[#1B365D] mb-6">¿Cómo califica su estadía?</h3>
        
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

      <div className="text-center opacity-40">
        <img src={LOGO_URL} alt="Olas Home Footer" className="w-8 h-8 rounded-full grayscale mx-auto mb-2" />
        <p className="text-[8px] uppercase tracking-[0.4em] text-gray-400">© 2024 Olas Home VIP Services</p>
      </div>
    </div>
  );
};
