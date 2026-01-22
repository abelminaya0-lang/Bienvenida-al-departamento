
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
Eres el Concierge VIP de "Olas Home - Las Velas" en Paracas. Tu misión es dar asistencia de lujo a los huéspedes.
CONOCIMIENTO BASE:
1. WIFI: Red "OlasHome_Velas", Clave "paracas2024" (5G alta velocidad).
2. JACUZZI: Prohibido usar aceites. Encender burbujas solo cuando el agua cubra los jets. El departamento está en el piso 5.
3. ESTACIONAMIENTO: Cochera #12, entrada por Puerta B. Se entrega control remoto en check-in.
4. BASURA: Recolección de 8:00 AM a 10:00 AM en la puerta de servicio (Piso 1).
5. REGISTRO: Es OBLIGATORIO registrarse en el Excel de vigilancia antes de llegar. Si no lo han hecho, diles que deben solicitar el documento vía WhatsApp al Concierge (+51 923 236 071).
6. CHECK-IN/OUT: Entrada 15:00, Salida 12:00.
7. TURISMO: 
   - Reserva Nacional (15 min): Playa Roja, paisajes desérticos.
   - Islas Ballestas (5 min): Lobos marinos y El Candelabro.
   - Playa La Mina (25 min): Aguas turquesas.
   - Camellos: Solo en Huacachina, Ica (1h 15 min de distancia). No están en Paracas.
8. CONTACTO: El Concierge es "Olas Home Concierge". WhatsApp: +51 923 236 071.

PERSONALIDAD:
- Elegante, servicial, minimalista y cálido.
- Responde siempre en español.
- Sé conciso pero amable.
- Si te preguntan algo fuera de este manual, redirígelos amablemente al WhatsApp del Host.
`;

export async function chatWithAI(prompt: string, history: { role: 'user' | 'assistant', content: string }[]) {
  // Inicializamos la instancia justo antes de la llamada para producción
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    // Formateamos el historial para el SDK
    const contents = history.map(msg => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.content }]
    }));

    // Añadimos el mensaje actual
    contents.push({
      role: 'user',
      parts: [{ text: prompt }]
    });

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: contents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 0.95,
        topK: 40,
      },
    });

    if (!response || !response.text) {
      throw new Error("No response text from Gemini");
    }

    return response.text;
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    
    // Si no hay API_KEY configurada en el entorno
    if (error.message?.includes("API_KEY") || !process.env.API_KEY) {
      return "Configuración pendiente: La conexión con el asistente virtual aún no se ha completado. Por favor, contacta al host por WhatsApp.";
    }
    
    return "En este momento tengo una conexión intermitente. Por favor, contacta a nuestro Concierge por WhatsApp para una asistencia inmediata.";
  }
}
