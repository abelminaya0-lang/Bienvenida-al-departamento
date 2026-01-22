
import React, { useState, useRef, useEffect } from 'react';
import { chatWithAI } from '../services/geminiService';
import { Message } from '../types';

export const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: '¡Hola! Soy su Concierge Virtual. ¿En qué puedo asistirle hoy?' }
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
      setMessages(prev => [...prev, { role: 'assistant', content: "Lo siento, tengo problemas de conexión. Por favor, contacte al host." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 right-6 w-14 h-14 bg-[#1B365D] text-white rounded-full shadow-2xl flex items-center justify-center z-50 hover:scale-110 active:scale-95 transition-all"
      >
        <div className="relative">
          <i className={`fas ${isOpen ? 'fa-times' : 'fa-comment-dots'} text-xl`}></i>
          {!isOpen && (
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#C2A878] border-2 border-[#1B365D] rounded-full"></span>
          )}
        </div>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-40 right-6 left-6 md:left-auto md:w-[350px] bg-white rounded-3xl shadow-2xl z-50 overflow-hidden flex flex-col border border-gray-100 animate-in slide-in-from-bottom-5 duration-300">
          <div className="bg-[#1B365D] p-5 text-white flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                <i className="fas fa-magic text-[#C2A878] text-xs"></i>
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest">IA Concierge</h3>
                <p className="text-[8px] opacity-60 uppercase font-bold tracking-tighter">Olas Home Las Velas</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="opacity-40 hover:opacity-100">
              <i className="fas fa-minus"></i>
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-5 space-y-4 h-80 bg-[#FDFBF7]">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3.5 rounded-2xl text-[12px] leading-relaxed shadow-sm ${
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
                <div className="bg-white border border-gray-100 p-3 rounded-2xl rounded-tl-none shadow-sm flex space-x-1">
                  <div className="w-1 h-1 bg-gray-300 rounded-full animate-bounce"></div>
                  <div className="w-1 h-1 bg-gray-300 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                  <div className="w-1 h-1 bg-gray-300 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 bg-white border-t border-gray-100 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="¿Cómo uso el jacuzzi?"
              className="flex-1 bg-gray-50 border-none rounded-xl px-4 py-2.5 text-xs focus:ring-1 focus:ring-[#C2A878] outline-none"
            />
            <button 
              onClick={handleSend}
              className="w-10 h-10 bg-[#1B365D] text-white rounded-xl flex items-center justify-center shadow-md active:scale-90 transition-all"
            >
              <i className="fas fa-paper-plane text-xs"></i>
            </button>
          </div>
        </div>
      )}
    </>
  );
};
