
import React, { useState, useEffect } from 'react';

export const PoolSection: React.FC = () => {
  const poolImages = [
    "https://res.cloudinary.com/drvs81bl0/image/upload/v1769530617/maxresdefault_w5ynsq.jpg",
    "https://res.cloudinary.com/drvs81bl0/image/upload/v1769530617/7ba7b5c7-1f6f-49fe-ab9f-8218d7c2ab73_pqsaqa.jpg",
    "https://res.cloudinary.com/drvs81bl0/image/upload/v1769530616/584586444_m7avll.jpg",
    "https://res.cloudinary.com/drvs81bl0/image/upload/v1769530617/f0b34239-f765-43a2-a9f8-ac1d08b5a2fa_jpclpt.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Animación automática: cambia la foto cada 4 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % poolImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [poolImages.length]);

  return (
    <div className="px-6 pt-8 pb-12 bg-[#FDFBF7]">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 bg-[#1B365D]/5 rounded-full flex items-center justify-center text-[#C2A878]">
          <i className="fas fa-swimming-pool text-lg"></i>
        </div>
        <div>
          <h2 className="font-serif text-3xl text-[#1B365D]">Accesos a Piscinas</h2>
          <p className="text-[10px] uppercase tracking-widest text-[#C2A878] font-bold">Parte de tu estadía</p>
        </div>
      </div>

      <p className="text-sm text-gray-500 mb-6 leading-relaxed">
        Disfrute de nuestras refrescantes piscinas frente al mar. Un espacio diseñado para su total relajación y diversión familiar.
      </p>

      {/* Galería con Animación Automática */}
      <div className="relative mb-8 h-64 w-full rounded-3xl overflow-hidden shadow-xl border-4 border-white group">
        {poolImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
              index === currentIndex 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-105 pointer-events-none'
            }`}
          >
            <img 
              src={img} 
              alt={`Piscina ${index + 1}`} 
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        
        {/* Overlay degradado para texto o estilo */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>

        {/* Indicadores de posición (Dots) */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {poolImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all duration-300 rounded-full h-1.5 ${
                index === currentIndex ? 'bg-white w-6' : 'bg-white/40 w-1.5'
              }`}
              aria-label={`Ir a foto ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Info Card */}
      <div className="bg-white p-6 rounded-3xl shadow-sm border border-[#C2A878]/20 relative overflow-hidden">
        <div className="flex items-start gap-4">
          <div className="text-[#E63946] mt-1">
            <i className="fas fa-clock"></i>
          </div>
          <div>
            <h4 className="font-bold text-[#1B365D] text-sm mb-1">Horario de Uso</h4>
            <p className="text-xs text-gray-500 leading-relaxed">
              El uso de las piscinas está permitido únicamente hasta las <span className="font-bold text-[#1B365D]">8:00 PM</span>.
            </p>
          </div>
        </div>
        
        <div className="h-px bg-gray-100 my-4"></div>

        <div className="flex items-start gap-4">
          <div className="text-[#C2A878] mt-1">
            <i className="fas fa-id-card"></i>
          </div>
          <div>
            <h4 className="font-bold text-[#1B365D] text-sm mb-1">Acceso con Brazalete</h4>
            <p className="text-xs text-gray-500 leading-relaxed">
              Recuerde portar su brazalete de identificación en todo momento para el ingreso al área de piscinas.
            </p>
          </div>
        </div>

        {/* Decoración sutil */}
        <i className="fas fa-water absolute -right-4 -bottom-4 text-6xl text-blue-50 opacity-50"></i>
      </div>
    </div>
  );
};
