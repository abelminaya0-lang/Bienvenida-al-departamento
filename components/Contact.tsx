
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
    { role: 'assistant', content: '¡Hola! Soy tu asistente de Olas Home. ¿En qué puedo ayudarte con tu estadía hoy?' }
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
      setMessages(prev => [...prev, { role: 'assistant', content: "Lo siento, tuve un problema de conexión. Por favor contacta al host directamente." }]);
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
        <p className="text-sm text-gray-500">Estamos a su disposición para cualquier requerimiento.</p>
      </div>

      {/* Concierge Card */}
      <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center space-y-4 mb-6">
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
          <p className="text-[10px] text-[#C2A878] font-bold uppercase tracking-widest">Atención Personalizada</p>
        </div>
        
        <a 
          href={HOST_INFO.whatsapp} 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full bg-[#25D366] text-white py-3 rounded-2xl flex items-center justify-center gap-3 shadow-md hover:brightness-105 active:scale-95 transition-all text-sm font-bold uppercase tracking-wide"
        >
          <i className="fab fa-whatsapp text-xl"></i>
          WhatsApp Directo
        </a>
      </div>

      {/* Integrated AI Assistant Section */}
      <div className="bg-white rounded-3xl shadow-lg border border-[#C2A878]/20 overflow-hidden mb-8 flex flex-col h-[450px]">
        <div className="bg-[#1B365D] p-4 text-white flex items-center gap-3">
          <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
            <i className="fas fa-robot text-xs text-[#C2A878]"></i>
          </div>
          <div>
            <h3 className="text-sm font-bold">Asistente Virtual 24/7</h3>
            <p className="text-[9px] opacity-60 uppercase tracking-tighter">Responde dudas sobre el departamento</p>
          </div>
        </div>
        
        {/* Chat Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/50">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] p-3 rounded-2xl text-xs leading-relaxed shadow-sm ${
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
              <div className="bg-white border border-gray-100 p-3 rounded-2xl rounded-tl-none flex space-x-1">
                <div className="w-1.5 h-1.5 bg-[#C2A878] rounded-full animate-bounce"></div>
                <div className="w-1.5 h-1.5 bg-[#C2A878] rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                <div className="w-1.5 h-1.5 bg-[#C2A878] rounded-full animate-bounce [animation-delay:-0.3s]"></div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-3 bg-white border-t border-gray-100 flex gap-2">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="¿Cuál es la clave del WiFi?"
            className="flex-1 bg-gray-50 border-none rounded-xl px-4 py-2 text-xs focus:ring-1 focus:ring-[#C2A878] outline-none"
          />
          <button 
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="w-10 h-10 bg-[#1B365D] text-white rounded-xl flex items-center justify-center disabled:opacity-30 transition-opacity"
          >
            <i className="fas fa-paper-plane text-xs"></i>
          </button>
        </div>
      </div>

      {/* Rating Block */}
      <div className="bg-[#FDFBF7] p-8 rounded-3xl border border-dashed border-[#C2A878]/30 text-center">
        <h3 className="font-serif text-lg text-[#1B365D] mb-1">¿Cómo va su estadía?</h3>
        <p className="text-[10px] text-gray-400 mb-6 uppercase tracking-widest font-bold">Feedback VIP</p>
        
        {!submitted ? (
          <div className="flex items-center justify-center gap-3 mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                className="text-2xl transition-transform hover:scale-110 active:scale-125"
                onClick={() => handleRating(star)}
                onMouseEnter={() => setHover(star)}
                onMouseLeave={() => setHover(0)}
              >
                <i className={`fa-star ${star <= (hover || rating) ? 'fas text-[#C2A878]' : 'far text-gray-300'}`}></i>
              </button>
            ))}
          </div>
        ) : (
          <div className="py-2 animate-in zoom-in duration-300">
            <p className="text-xs font-bold text-[#1B365D]">¡Gracias por su calificación!</p>
            <p className="text-[10px] text-[#C2A878] mt-1">Haremos que su experiencia sea perfecta.</p>
          </div>
        )}
      </div>

      <div className="mt-12 text-center pb-8">
        <img src={LOGO_URL} alt="Olas Home Footer" className="w-10 h-10 rounded-full opacity-20 grayscale mx-auto mb-2" />
        <p className="text-[8px] uppercase tracking-[0.3em] text-gray-400 font-medium">© 2024 Olas Home • Las Velas Paracas</p>
      </div>
    </div>
  );
};
