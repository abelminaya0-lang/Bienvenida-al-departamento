
import React from 'react';

export const Location: React.FC = () => {
  const MAP_LINK = "https://maps.app.goo.gl/54LDXoWxQDHCKa329";
  const LOCATION_IMAGE = "https://res.cloudinary.com/drvs81bl0/image/upload/v1769052314/Captura_de_pantalla_2026-01-21_222454_vwjuq3.png";
  
  const handleOpenMaps = () => {
    window.open(MAP_LINK, '_blank');
  };

  return (
    <div className="px-6 pt-8 pb-20">
      <h2 className="font-serif text-3xl mb-2 text-[#1B365D]">Ubicación & Acceso</h2>
      <p className="text-sm text-gray-500 mb-8">Condominio Las Velas, Nuevo Paracas.</p>

      {/* Hero Location Image */}
      <div className="rounded-3xl overflow-hidden shadow-lg border-4 border-white mb-8 relative group cursor-pointer" onClick={handleOpenMaps}>
        <img 
          src={LOCATION_IMAGE} 
          alt="Vista Condominio Las Velas" 
          className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1B365D]/60 to-transparent flex items-end p-6">
          <div className="text-white">
            <p className="text-[10px] font-bold uppercase tracking-widest opacity-80 mb-1">Tu destino</p>
            <p className="text-sm font-serif">Condominio Las Velas</p>
          </div>
        </div>
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-md">
           <i className="fas fa-expand-arrows-alt text-[#1B365D] text-xs"></i>
        </div>
      </div>

      <div className="space-y-6">
        <div className="flex gap-4">
          <div className="w-10 h-10 bg-[#C2A878]/10 rounded-full flex items-center justify-center text-[#C2A878] shrink-0">
            <i className="fas fa-id-badge"></i>
          </div>
          <div>
            <h4 className="font-bold text-sm text-[#1B365D]">Brazalete Obligatorio</h4>
            <p className="text-xs text-gray-500">Es indispensable portar su **brazalete** en todo momento al ingresar o salir del condominio y para circular por las áreas comunes.</p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="w-10 h-10 bg-[#C2A878]/10 rounded-full flex items-center justify-center text-[#C2A878] shrink-0">
            <i className="fas fa-car"></i>
          </div>
          <div>
            <h4 className="font-bold text-sm text-[#1B365D]">Cochera a Espaldas (#12)</h4>
            <p className="text-xs text-gray-500">Ubicada justo detrás de los departamentos. Disponible 24/7 sin restricción de horario: puede entrar y salir las veces que desee (día, noche o madrugada).</p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="w-10 h-10 bg-[#C2A878]/10 rounded-full flex items-center justify-center text-[#C2A878] shrink-0">
            <i className="fas fa-user-shield"></i>
          </div>
          <div>
            <h4 className="font-bold text-sm text-[#1B365D]">Asistencia Permanente</h4>
            <p className="text-xs text-gray-500">Contará siempre con el apoyo del personal de garita para facilitar su entrada y salida del condominio en cualquier momento.</p>
          </div>
        </div>

        <button 
          onClick={handleOpenMaps}
          className="w-full bg-[#1B365D] text-white py-4 rounded-2xl font-bold text-sm shadow-xl flex items-center justify-center gap-3 active:scale-[0.98] transition-all hover:bg-[#152a4a]"
        >
          <i className="fas fa-location-arrow"></i>
          Abrir en Google Maps
        </button>
      </div>
    </div>
  );
};
