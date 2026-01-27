
import React, { useState, useEffect, useRef } from 'react';
import { LOGO_URL, STORE_INFO } from '../constants';

interface WeatherData {
  temp: number;
  condition: string;
  icon: string;
}

export const Home: React.FC = () => {
  const [weather, setWeather] = useState<WeatherData | null>({
    temp: 30,
    condition: 'Cielo Despejado',
    icon: 'fa-sun text-yellow-400'
  });
  const [loadingWeather, setLoadingWeather] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // El clima se mantiene estático como soleado y caluroso por solicitud del usuario
  useEffect(() => {
    setLoadingWeather(false);
  }, []);

  // Manejo de reproducción automática con sonido forzado
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Intentar reproducir con sonido inmediatamente
    video.muted = false;
    video.volume = 1.0;

    const attemptPlay = async () => {
      try {
        await video.play();
        console.log("Reproducción iniciada con éxito y sonido.");
      } catch (error) {
        console.warn("Autoplay con sonido bloqueado por el navegador. Esperando interacción...");
        // Si falla, reproducimos en silencio para que al menos se vea
        video.muted = true;
        video.play();
      }
    };

    attemptPlay();

    const unlockAudio = () => {
      if (video) {
        video.muted = false;
        video.volume = 1.0;
        video.play().catch(() => {});
        document.removeEventListener('click', unlockAudio);
        document.removeEventListener('touchstart', unlockAudio);
      }
    };

    document.addEventListener('click', unlockAudio);
    document.addEventListener('touchstart', unlockAudio);

    return () => {
      document.removeEventListener('click', unlockAudio);
      document.removeEventListener('touchstart', unlockAudio);
    };
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
          <h1 className="font-serif text-5xl font-bold text-[#1B365D] mb-2 drop-shadow-md tracking-tight">Bienvenidos a Paracas</h1>
        </div>
      </div>

      {/* Featured Video Section */}
      <div className="px-6 -mt-24 relative z-10 flex justify-center">
        <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-black w-full max-w-[400px]">
          <video 
            ref={videoRef}
            src="https://res.cloudinary.com/drvs81bl0/video/upload/v1769461827/WhatsApp_Video_2026-01-26_at_3.34.25_PM_gpsvel.mp4"
            className="w-full h-auto block"
            playsInline
            controls
          ></video>
        </div>
      </div>
      <p className="text-[9px] text-center mt-3 text-[#C2A878] font-bold uppercase tracking-[0.2em] opacity-60">Experiencia Las Velas</p>

      {/* CONTENIDO PRINCIPAL - EL REGISTRO VA PRIMERO */}
      <div className="px-6 mt-8 space-y-8">
        
        {/* 🚨 Guest Registration Block - URGENTE / ROJO */}
        <div className="bg-red-50 p-6 rounded-3xl shadow-xl border-2 border-red-500 text-left relative overflow-hidden animate-in fade-in slide-in-from-top-4 duration-700">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <i className="fas fa-file-invoice text-7xl text-red-900"></i>
          </div>

          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white shadow-lg animate-pulse">
              <i className="fas fa-exclamation-circle text-xl"></i>
            </div>
            <div>
              <h3 className="font-serif text-xl text-red-900 font-bold">Registro Obligatorio</h3>
              <p className="text-[10px] uppercase tracking-widest text-red-600 font-black">Acción Inmediata Requerida</p>
            </div>
          </div>
          
          <div className="space-y-4 relative z-10">
            <p className="text-xs text-red-800 leading-relaxed font-semibold">
              Es indispensable realizar su registro con anticipación. Debe solicitar y completar el **documento Excel** que le enviaremos por WhatsApp. 
            </p>
            <p className="text-[11px] text-red-700 italic border-l-2 border-red-300 pl-3">
              "Sin este paso previo, el personal de garita no podrá autorizar su ingreso al condominio, causando retrasos innecesarios."
            </p>

            <a 
              href="https://wa.me/51996012246?text=Hola%20Olas%20Home%2C%20quisiera%20solicitar%20el%20documento%20Excel%20para%20mi%20registro%20de%20ingreso." 
              target="_blank" 
              rel="noopener noreferrer"
              className="group w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-5 rounded-2xl font-bold text-sm shadow-xl flex items-center justify-center gap-3 active:scale-[0.98] transition-all duration-300"
            >
              <i className="fab fa-whatsapp text-2xl"></i>
              SOLICITAR EXCEL DE REGISTRO
            </a>
            <p className="text-center text-[9px] text-red-400 font-bold uppercase tracking-widest">Evite contratiempos en garita</p>
          </div>
        </div>

        {/* Welcome Message */}
        <div className="space-y-6 text-center">
          <div className="inline-block px-4 py-1 bg-[#C2A878]/10 rounded-full">
             <p className="text-[10px] font-bold uppercase tracking-widest text-[#C2A878]">Bienvenido a Paracas</p>
          </div>
          
          <h2 className="font-serif text-3xl text-[#1B365D] leading-tight">Tu escapada al Caribe Peruano</h2>
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
        </div>

        {/* Store Block */}
        <div className="mt-4 bg-[#1B365D] p-6 rounded-3xl shadow-lg border border-[#C2A878]/30 text-left relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <i className="fas fa-shopping-cart text-6xl text-white"></i>
          </div>

          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-[#C2A878]">
              <i className="fas fa-shopping-basket text-lg"></i>
            </div>
            <div>
              <h3 className="font-serif text-lg text-white font-bold">Tienda Market & Delivery</h3>
              <p className="text-[10px] uppercase tracking-widest text-[#C2A878] font-bold">Servicio en el Condominio</p>
            </div>
          </div>
          
          <p className="text-xs text-white/80 leading-relaxed mb-6">
            ¿Le falta algo? Puede acercarse a la tienda ubicada dentro del condominio o solicitar un <strong>delivery directo a su departamento</strong>.
          </p>

          <a 
            href={STORE_INFO.whatsapp} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full bg-[#25D366] text-white py-4 rounded-2xl font-bold text-sm shadow-xl flex items-center justify-center gap-3 active:scale-[0.98] transition-all"
          >
            <i className="fab fa-whatsapp text-xl"></i>
            Hacer Pedido / Delivery
          </a>
        </div>

        {/* Clima Stático */}
        <div className="mt-4">
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
                  <i className={`fas ${weather.icon} text-4xl animate-spin-slow`}></i>
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
    </div>
  );
};
