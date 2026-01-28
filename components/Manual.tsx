
import React, { useState } from 'react';
import { SERVICES } from '../constants';
import { ServiceItem } from '../types';

export const Manual: React.FC = () => {
  const [selected, setSelected] = useState<ServiceItem | null>(null);

  // Imágenes de referencia específicas para el manual
  const SERVICE_IMAGES: Record<string, string> = {
    trash: "https://res.cloudinary.com/drvs81bl0/image/upload/v1769624226/0cc37281-8559-4a54-bd86-1d288b7370ed_rnkanj.jpg"
  };

  return (
    <div className="px-6 pt-8 pb-20">
      <h2 className="font-serif text-3xl mb-2 text-[#1B365D]">Manual del departamento</h2>
      <p className="text-sm text-gray-500 mb-8">Todo lo que necesitas saber sobre el uso de las instalaciones.</p>

      <div className="space-y-4">
        {SERVICES.map((item) => (
          <div 
            key={item.id} 
            className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
          >
            <button 
              onClick={() => setSelected(selected?.id === item.id ? null : item)}
              className="w-full p-5 flex items-center justify-between group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#FDFBF7] rounded-xl flex items-center justify-center text-[#C2A878]">
                  <i className={`fas ${item.icon} text-xl`}></i>
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-[#1B365D] group-hover:text-[#C2A878] transition-colors">{item.name}</h3>
                  <p className="text-xs text-gray-400">{item.description}</p>
                </div>
              </div>
              <i className={`fas fa-chevron-${selected?.id === item.id ? 'up' : 'down'} text-gray-300 text-xs`}></i>
            </button>

            {selected?.id === item.id && (
              <div className="px-5 pb-6 animate-in slide-in-from-top-2">
                <div className="h-px bg-gray-100 mb-4"></div>
                
                {item.videoUrl && (
                  <div className="mb-4 rounded-xl overflow-hidden aspect-video bg-black shadow-inner border border-gray-100">
                    <iframe 
                      className="w-full h-full"
                      src={item.videoUrl} 
                      title={item.name}
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                    ></iframe>
                  </div>
                )}

                <div className="bg-[#FDFBF7] p-4 rounded-xl border border-[#C2A878]/20 mb-4">
                  <p className="text-sm text-[#1B365D] leading-relaxed font-medium whitespace-pre-line">
                    {item.details}
                  </p>
                  {item.id === 'wifi' && item.details?.includes('verano2026') && (
                    <button 
                      onClick={() => navigator.clipboard.writeText('verano2026')}
                      className="mt-3 text-xs font-bold text-[#C2A878] uppercase tracking-widest flex items-center gap-2 hover:opacity-70"
                    >
                      <i className="fas fa-copy"></i> Copiar Clave (502/602)
                    </button>
                  )}
                </div>

                {/* Imagen de referencia si existe */}
                {SERVICE_IMAGES[item.id] && (
                  <div className="mt-2 rounded-2xl overflow-hidden border-2 border-white shadow-md">
                    <p className="text-[10px] uppercase tracking-widest text-[#C2A878] font-bold mb-2 ml-1">Referencia Visual:</p>
                    <img 
                      src={SERVICE_IMAGES[item.id]} 
                      alt={`Referencia ${item.name}`} 
                      className="w-full h-auto object-cover"
                    />
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
