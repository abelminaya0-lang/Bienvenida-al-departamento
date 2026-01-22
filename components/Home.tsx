
import React, { useState, useEffect } from 'react';
import { LOGO_URL } from '../constants';

interface WeatherData {
  temp: number;
  condition: string;
  icon: string;
}

export const Home: React.FC = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loadingWeather, setLoadingWeather] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const lat = -13.8333;
        const lon = -76.2667;
        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
        );
        const data = await response.json();
        const current = data.current_weather;

        const getCondition = (code: number) => {
          if (code === 0) return { text: 'Cielo despejado', icon: 'fa-sun text-yellow-400' };
          if (code <= 3) return { text: 'Parcialmente nublado', icon: 'fa-cloud-sun text-gray-300' };
          if (code >= 45 && code <= 48) return { text: 'Neblina', icon: 'fa-smog text-gray-400' };
          if (code >= 51 && code <= 67) return { text: 'Llovizna/Lluvia', icon: 'fa-cloud-rain text-blue-400' };
          return { text: 'Despejado', icon: 'fa-sun text-yellow-400' };
        };

        const condition = getCondition(current.weathercode);

        setWeather({
          temp: Math.round(current.temperature),
          condition: condition.text,
          icon: condition.icon
        });
      } catch (error) {
        console.error("Error fetching weather:", error);
      } finally {
        setLoadingWeather(false);
      }
    };

    fetchWeather();
  }, []);

  return (
    <div className="pb-6">
      {/* Hero Section */}
      <div className="relative h-[550px] w-full overflow-hidden">
        <img 
          src="https://res.cloudinary.com/drvs81bl0/image/upload/v1768496786/WhatsApp_Image_2026-01-15_at_12.05.00_PM_kv7cr2.jpg" 
          alt="Olas Home Portada" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FDFBF7] via-[#FDFBF7]/20 to-transparent"></div>
        
        {/* Logo Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pt-12">
          <div className="mb-6 animate-in zoom-in-50 duration-700">
            <img 
              src={LOGO_URL} 
              alt="Olas Home" 
              className="w-36 h-36 rounded-full border-4 border-white shadow-2xl mx-auto object-cover"
            />
          </div>
          <h1 className="font-serif text-5xl font-bold text-[#1B365D] mb-2 drop-shadow-md tracking-tight">Bienvenidos</h1>
        </div>
      </div>

      {/* Welcome Message */}
      <div className="px-6 mt-4 space-y-6 text-center">
        <div className="inline-block px-4 py-1 bg-[#C2A878]/10 rounded-full">
           <p className="text-[10px] font-bold uppercase tracking-widest text-[#C2A878]">Bienvenido Paracas</p>
        </div>
        
        <h2 className="font-serif text-3xl text-[#1B365D] leading-tight">Su escapada en el Caribe peruano</h2>
        <p className="text-sm leading-relaxed text-gray-600 max-w-xs mx-auto">
          Disfrute de la exclusividad de Condominio Las Velas en Nuevo Paracas. Relájese este verano frente a una vista al mar inigualable.
        </p>
        
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="bg-white p-5 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <i className="fas fa-clock text-[#C2A878] mb-2 text-xl"></i>
            <span className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Check-in</span>
            <span className="text-sm font-semibold text-[#1B365D]">15:00 hrs</span>
          </div>
          <div className="bg-white p-5 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <i className="fas fa-sign-out-alt text-[#C2A878] mb-2 text-xl"></i>
            <span className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Check-out</span>
            <span className="text-sm font-semibold text-[#1B365D]">12:00 hrs</span>
          </div>
        </div>

        {/* Guest Registration Block */}
        <div className="mt-8 bg-white p-6 rounded-3xl shadow-lg border border-[#C2A878]/30 text-left relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-5">
            <i className="fas fa-file-invoice text-6xl text-[#1B365D]"></i>
          </div>

          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-[#1B365D]/5 rounded-full flex items-center justify-center text-[#1B365D]">
              <i className="fas fa-user-check text-lg"></i>
            </div>
            <div>
              <h3 className="font-serif text-lg text-[#1B365D] font-bold">Gestión de Registro</h3>
              <p className="text-[10px] uppercase tracking-widest text-[#C2A878] font-bold">Requisito Obligatorio</p>
            </div>
          </div>
          
          <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-6">
            <p className="text-xs text-amber-800 leading-relaxed">
              <i className="fas fa-exclamation-triangle mr-2 text-amber-500"></i>
              Es indispensable realizar su registro con tiempo. Esto nos permite enviar sus datos al conserje de Las Velas para que pueda ingresar sin ningún percance, sin ningún problema en garita.
            </p>
          </div>

          <div className="space-y-4">
            {/* Status Notice (Non-clickable) */}
            <div className="w-full bg-gray-50 border border-gray-200 text-gray-400 py-3 px-4 rounded-2xl flex items-center gap-3">
              <i className="fas fa-file-excel text-lg"></i>
              <span className="text-xs font-semibold">Documento de Registro (Excel)</span>
              <span className="ml-auto text-[10px] uppercase tracking-tighter">Pendiente</span>
            </div>
            
            {/* Action Button - WhatsApp with dynamic color effect */}
            <a 
              href="https://wa.me/51923236071?text=Hola%20Olas%20Home%2C%20quisiera%20solicitar%20el%20documento%20Excel%20para%20mi%20registro%20de%20ingreso." 
              target="_blank" 
              rel="noopener noreferrer"
              className="group w-full bg-[#1B365D] hover:bg-[#25D366] active:bg-[#25D366] text-white py-4 rounded-2xl font-bold text-sm shadow-xl flex items-center justify-center gap-3 active:scale-[0.98] transition-all duration-300"
            >
              <div className="w-7 h-7 bg-[#25D366] group-hover:bg-white rounded-full flex items-center justify-center transition-colors duration-300 shadow-sm">
                <i className="fab fa-whatsapp text-white group-hover:text-[#25D366] text-sm"></i>
              </div>
              Solicitar Documento
            </a>
          </div>
        </div>
      </div>

      {/* Real-time Weather Section */}
      <div className="px-6 mt-10">
        <div className="bg-[#1B365D] text-white p-6 rounded-3xl overflow-hidden relative shadow-xl min-h-[120px] flex flex-col justify-center">
          <div className="relative z-10">
            <h3 className="font-serif text-lg mb-2">Clima en Paracas</h3>
            {loadingWeather ? (
              <div className="flex items-center gap-4 animate-pulse">
                <div className="w-10 h-10 bg-white/20 rounded-full"></div>
                <div>
                  <div className="h-6 w-12 bg-white/20 rounded mb-1"></div>
                  <div className="h-3 w-24 bg-white/10 rounded"></div>
                </div>
              </div>
            ) : weather ? (
              <div className="flex items-center gap-4 animate-in fade-in duration-500">
                <i className={`fas ${weather.icon} text-4xl`}></i>
                <div>
                  <p className="text-2xl font-bold">{weather.temp}°C</p>
                  <p className="text-xs opacity-75">{weather.condition} • Condominio Las Velas</p>
                </div>
              </div>
            ) : (
              <p className="text-xs opacity-50 italic">Información no disponible temporalmente</p>
            )}
          </div>
          <i className="fas fa-sun absolute -right-4 -bottom-4 text-8xl opacity-10"></i>
        </div>
      </div>
    </div>
  );
};
