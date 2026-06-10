// src/utils/aiService.js

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

export async function fetchAIResponse(prompt) {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }]
      })
    });

    if (!response.ok) throw new Error('Failed to fetch from Gemini');
    
    const data = await response.json();
    return data.candidates[0].content.parts[0].text;
  } catch (error) {
    console.error("AI Service Error:", error);
    return "I'm having trouble connecting to the AI right now.";
  }
}