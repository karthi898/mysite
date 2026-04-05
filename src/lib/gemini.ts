import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.GEMINI_API_KEY;

export const getGeminiResponse = async (prompt: string) => {
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY is not configured");
  }

  const ai = new GoogleGenAI({ apiKey });
  
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
    config: {
      systemInstruction: "You are KayAI, a personalized automation agent for Karthik Shambuni. Your goal is to help users automate tasks, search for information (especially social media trends like Twitter/X), and provide concise summaries. When asked for 'top posts', use Google Search to find the most recent and relevant content. Always be professional, helpful, and efficient.",
      tools: [{ googleSearch: {} }],
    },
  });

  return {
    text: response.text || "No response generated.",
    sources: response.candidates?.[0]?.groundingMetadata?.groundingChunks?.map(chunk => ({
      title: chunk.web?.title,
      uri: chunk.web?.uri
    })).filter(s => s.uri) || []
  };
};
