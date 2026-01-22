
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
Eres el Asistente Virtual VIP de "Olas Home - Las Velas" en Paracas, Perú.
Tu objetivo es ayudar a los huéspedes con información sobre su estadía.
Detalles importantes:
- La propiedad tiene WiFi (Red: OlasHome_Velas, Clave: paracas2024).
- El Jacuzzi está disponible pero requiere cuidado (no aceites).
- El registro en el Excel de vigilancia es OBLIGATORIO antes de llegar.
- Estamos cerca de la Reserva de Paracas y el puerto para las Islas Ballestas.
- Los camellos NO están en Paracas, se encuentran en Huacachina (Ica), a 1 hora y 15 minutos de distancia.
- Habla siempre de forma elegante, servicial y minimalista.
- Si no sabes algo, pide que contacten al host vía WhatsApp.
- Responde siempre en español.
`;

export async function chatWithAI(prompt: string, history: { role: 'user' | 'assistant', content: string }[]) {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    return response.text || "Lo siento, tuve un problema al procesar tu solicitud. Por favor contacta al host.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Mi conexión está un poco inestable frente al mar. ¿Podrías intentar de nuevo o contactar al host?";
  }
}
