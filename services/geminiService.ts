
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
Eres el Concierge VIP de "Olas Home - Las Velas" en Paracas. Tu misión es dar asistencia de lujo a los huéspedes.
CONOCIMIENTO BASE:
1. WIFI: 
   - Dptos 502 y 602 (Torre 5): Red "OlasHome_Velas", Clave "verano2026".
   - Otros dptos: Se entrega un dispositivo WiFi móvil al ingresar.
2. JACUZZI: Piso 5. Prohibido usar aceites. Encender burbujas solo cuando el agua cubra los jets.
3. ESTACIONAMIENTO: Cochera #12, entrada por Puerta B. Acceso 24/7.
4. BASURA: Recolección nocturna. Dejar bolsas amarradas en la puerta lateral del primer nivel.
5. REGISTRO: Obligatorio vía WhatsApp al Concierge (+51 996 012 246).
6. TIENDA / MARKET: Ubicada dentro del condominio. Ofrecen productos básicos y delivery al departamento. El huésped puede pedir cosas que le falten.
7. CHECK-IN/OUT: Entrada 15:00, Salida 12:00.
8. REGLAS DEL CONDOMINIO:
   - Piscina: Hasta las 8:00 PM.
   - Mar: Prohibido ingresar de noche por seguridad.
   - Ruido/Música dentro del dpto: Solo hasta las 12:00 AM (medianoche).
   - Ruido/Música general/áreas comunes: Máximo hasta las 2:00 AM.
   - Mascotas: Prohibidas estrictamente en el condominio.
9. TURISMO: Reserva Nacional, Islas Ballestas, Yakupark (parque acuático).

PERSONALIDAD:
- Elegante, servicial y cálido. Responde en español.
- Sé conciso. Si no sabes algo, redirige al WhatsApp: +51 996 012 246.
`;

export async function chatWithAI(prompt: string, history: { role: 'user' | 'assistant', content: string }[]) {
  try {
    const apiKey = process.env.API_KEY;
    
    if (!apiKey || apiKey === 'undefined' || apiKey === '') {
      console.warn("API_KEY no encontrada en process.env");
      return "Estimado huésped, el asistente virtual está en mantenimiento de configuración. Por favor, contacte a nuestro Concierge por WhatsApp (+51 996 012 246).";
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
    return "Lo siento, tuve un inconveniente técnico. ¿Podría contactar al Concierge por WhatsApp (+51 996 012 246)?";
  }
}
