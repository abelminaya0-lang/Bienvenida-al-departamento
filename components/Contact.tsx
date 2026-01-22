
import React, { useState } from 'react';
import { HOST_INFO, LOGO_URL } from '../constants';

export const Contact: React.FC = () => {
  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number>(0);
  const [submitted, setSubmitted] = useState(false);

  const handleRating = (rate: number) => {
    setRating(rate);
    setSubmitted(true);
    // En una aplicación real, esto se enviaría a una base de datos o Google Sheets
  };

  return (
    <div className="px-6 pt-8 pb-24">
      <h2 className="font-serif text-3xl mb-2 text-[#1B365D]">Contacto</h2>
      <p className="text-sm text-gray-500 mb-8">Estamos a su disposición para cualquier requerimiento.</p>

      {/* Concierge Card */}
      <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center space-y-5 mb-8">
        <div className="relative">
          <div className="w-24 h-24 rounded-full border-4 border-[#C2A878] p-1 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400" 
              alt="Concierge Olas Home" 
              className="w-full h-full rounded-full object-cover" 
            />
          </div>
          <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-[#FDFBF7] rounded-full p-1 border-2 border-[#C2A878]">
            <img src={LOGO_URL} alt="Olas Home" className="w-full h-full rounded-full object-cover" />
          </div>
        </div>
        
        <div>
          <h3 className="font-serif text-2xl font-bold text-[#1B365D]">{HOST_INFO.name}</h3>
          <p className="text-xs text-[#C2A878] font-bold uppercase tracking-[0.2em]">Concierge VIP</p>
        </div>
        
        <p className="text-sm text-gray-500 italic px-4">"Nuestra prioridad es que su única preocupación sea disfrutar del paisaje."</p>
        
        <div className="flex flex-col gap-3 w-full">
          <a 
            href={HOST_INFO.whatsapp} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full bg-[#25D366] text-white py-4 rounded-2xl flex items-center justify-center gap-3 shadow-lg hover:brightness-110 active:scale-95 transition-all"
          >
            <i className="fab fa-whatsapp text-2xl"></i>
            <span className="font-bold text-sm tracking-wide uppercase">Soporte</span>
          </a>
        </div>
      </div>

      {/* Airbnb Style Rating Block */}
      <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
        <h3 className="font-serif text-xl text-[#1B365D] mb-2">¿Cómo va su estadía?</h3>
        <p className="text-xs text-gray-400 mb-6">Su opinión nos ayuda a mantener nuestro estándar VIP.</p>
        
        {!submitted ? (
          <div className="flex items-center justify-center gap-2 mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                className="text-3xl focus:outline-none transition-transform active:scale-125"
                onClick={() => handleRating(star)}
                onMouseEnter={() => setHover(star)}
                onMouseLeave={() => setHover(0)}
              >
                <i className={`fa-star ${star <= (hover || rating) ? 'fas text-[#C2A878]' : 'far text-gray-200'}`}></i>
              </button>
            ))}
          </div>
        ) : (
          <div className="py-4 animate-in zoom-in duration-300">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-3">
              <i className="fas fa-check"></i>
            </div>
            <p className="text-sm font-bold text-[#1B365D]">¡Gracias por su calificación!</p>
            <p className="text-[10px] text-gray-400 mt-1">Haremos que su estadía sea perfecta.</p>
          </div>
        )}
      </div>

      <div className="mt-12 text-center pb-8">
        <img src={LOGO_URL} alt="Olas Home Footer" className="w-12 h-12 rounded-full opacity-30 grayscale mx-auto mb-2" />
        <p className="text-[10px] uppercase tracking-widest text-gray-400 font-medium">© 2024 Olas Homeparacas 2026</p>
      </div>
    </div>
  );
};
