
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
Eres el Concierge VIP de "Olas Home - Las Velas" en Paracas. Tu misión es dar asistencia de lujo a los huéspedes.
CONOCIMIENTO BASE:
1. WIFI: Red "OlasHome_Velas", Clave "paracas2024" (5G alta velocidad).
2. JACUZZI: Piso 5. Prohibido usar aceites. Encender burbujas solo cuando el agua cubra los jets.
3. ESTACIONAMIENTO: Cochera #12, entrada por Puerta B.
4. BASURA: Recolección de 8:00 AM a 10:00 AM en la puerta de servicio (Piso 1).
5. REGISTRO: Obligatorio vía WhatsApp al Concierge (+51 923 236 071).
6. CHECK-IN/OUT: Entrada 15:00, Salida 12:00.
7. TURISMO: Reserva Nacional, Islas Ballestas, Playa La Mina. Camellos solo en Ica (1h 15min).

PERSONALIDAD:
- Elegante, servicial y cálido. Responde en español.
- Sé conciso. Si no sabes algo, redirige al WhatsApp: +51 923 236 071.
`;

export async function chatWithAI(prompt: string, history: { role: 'user' | 'assistant', content: string }[]) {
  try {
    const apiKey = process.env.API_KEY;
    
    if (!apiKey || apiKey === 'undefined' || apiKey === '') {
      console.warn("API_KEY no encontrada en process.env");
      return "Estimado huésped, el asistente virtual está en mantenimiento de configuración (Falta API_KEY). Por favor, contacte a nuestro Concierge por WhatsApp (+51 923 236 071) para asistencia inmediata.";
    }

    const ai = new GoogleGenAI({ apiKey });
    
    const contents = history.map(msg => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.content }]
    }));

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
      },
    });

    const text = response.text;
    return text || "No pude generar una respuesta. Por favor, intente de nuevo.";
    
  } catch (error: any) {
    console.error("Error en chatWithAI:", error);
    
    if (error.message?.includes("API_KEY")) {
      return "Error de autenticación: La llave de acceso a la IA es inválida. Contacte al administrador.";
    }
    
    return "Lo siento, tuve un inconveniente técnico al procesar su solicitud. ¿Podría repetirme la pregunta o contactar al Concierge por WhatsApp?";
  }
}
