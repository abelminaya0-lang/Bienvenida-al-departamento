
import React, { useState, useRef, useEffect } from 'react';
import { HOST_INFO, LOGO_URL } from '../constants';
import { chatWithAI } from '../services/geminiService';
import { Message } from '../types';

export const Contact: React.FC = () => {
  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number>(0);
  const [submitted, setSubmitted] = useState(false);
  
  // IA Chat State
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: '¡Bienvenido! Soy su Concierge Virtual de Olas Home. ¿En qué puedo asistirle hoy?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    try {
      const response = await chatWithAI(userMsg, messages);
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', content: "Lo sentimos, el servicio de IA no está disponible temporalmente. Use el botón de WhatsApp para atención inmediata." }]);
    } finally {
      setIsLoading(false);
    }
  };

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
      <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center space-y-4 mb-8">
        <div className="relative">
          <div className="w-20 h-20 rounded-full border-2 border-[#C2A878] p-1 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400" 
              alt="Concierge Olas Home" 
              className="w-full h-full rounded-full object-cover" 
            />
          </div>
          <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-white rounded-full p-1 shadow-md border border-gray-100">
            <img src={LOGO_URL} alt="Olas Home" className="w-full h-full rounded-full object-cover" />
          </div>
        </div>
        
        <div>
          <h3 className="font-serif text-xl font-bold text-[#1B365D]">{HOST_INFO.name}</h3>
          <p className="text-[10px] text-[#C2A878] font-bold uppercase tracking-widest">Concierge Services</p>
        </div>
        
        <a 
          href={HOST_INFO.whatsapp} 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full bg-[#25D366] text-white py-4 rounded-2xl flex items-center justify-center gap-3 shadow-lg hover:brightness-105 active:scale-95 transition-all text-sm font-bold uppercase tracking-widest"
        >
          <i className="fab fa-whatsapp text-xl"></i>
          Atención por WhatsApp
        </a>
      </div>

      {/* Integrated AI Assistant */}
      <div className="bg-white rounded-3xl shadow-xl border border-[#C2A878]/10 overflow-hidden mb-8 flex flex-col h-[500px]">
        {/* Header Chat */}
        <div className="bg-[#1B365D] p-4 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center">
              <i className="fas fa-magic text-sm text-[#C2A878]"></i>
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider">Olas Assistant</h3>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-[8px] font-bold uppercase tracking-widest opacity-60">IA Concierge Activa</span>
              </div>
            </div>
          </div>
          <i className="fas fa-ellipsis-v text-xs opacity-40"></i>
        </div>
        
        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-[#FDFBF7]/50">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] p-4 rounded-2xl text-[13px] leading-relaxed shadow-sm transition-all animate-in slide-in-from-bottom-2 duration-300 ${
                msg.role === 'user' 
                  ? 'bg-[#C2A878] text-white rounded-tr-none' 
                  : 'bg-white text-[#1B365D] border border-gray-100 rounded-tl-none'
              }`}>
                {msg.content}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white border border-gray-100 p-4 rounded-2xl rounded-tl-none flex space-x-1 shadow-sm">
                <div className="w-1.5 h-1.5 bg-[#C2A878] rounded-full animate-bounce"></div>
                <div className="w-1.5 h-1.5 bg-[#C2A878] rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                <div className="w-1.5 h-1.5 bg-[#C2A878] rounded-full animate-bounce [animation-delay:-0.3s]"></div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Bar */}
        <div className="p-4 bg-white border-t border-gray-100 flex gap-2">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="¿Cuál es la clave del WiFi?"
            className="flex-1 bg-gray-50 border-none rounded-xl px-4 py-3 text-xs focus:ring-1 focus:ring-[#C2A878] outline-none"
          />
          <button 
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="w-12 h-12 bg-[#1B365D] text-white rounded-xl flex items-center justify-center disabled:opacity-30 transition-all active:scale-90"
          >
            <i className="fas fa-paper-plane text-sm"></i>
          </button>
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
