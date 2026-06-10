import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

// Ingest hidden system environmental credentials safely
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Initialize the formal Google GenAI SDK wrapper
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

app.post('/api/scout', async (req, res) => {
  try {
    const { messages } = req.body;
    if (!messages || messages.length === 0) {
      return res.status(400).json({ error: "No historical message payload received." });
    }

    // Isolate the latest raw string query entry dropped by the user
    const lastUserQuery = messages[messages.length - 1].content;

    // Call the exact live model model using formal structured object notation
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [{ role: "user", parts: [{ text: lastUserQuery }] }],
      config: {
        systemInstruction: `You are the "AI Career Scout" for Forward Moves. 
        Your goal is to help job seekers navigate the modern job market using real-time information.
        Use Google Search grounding to provide deep, detailed 2026 strategies, open job roles, salary figures, and active career roadmaps across any field the user asks about.
        Make your responses highly informative, robust, and split into clean, natural paragraphs just like Google AI Studio.`,
        tools: [{ googleSearch: {} }], // Live web search grounding activation switch
      },
    });

    // Extract the raw text stream safely by running validation fallbacks
    let textPayload = "";
    if (response && response.text) {
      textPayload = response.text;
    } else if (response && response.candidates?.[0]?.content?.parts?.[0]?.text) {
      textPayload = response.candidates[0].content.parts[0].text;
    } else {
      textPayload = "We successfully ran the data search grounding engine but could not construct a text layout string.";
    }

    // Extract citation hyperlinks safely matching the Google grounding schema specs
    let sources = [];
    try {
      const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks;
      if (chunks && Array.isArray(chunks)) {
        sources = chunks.map(chunk => ({
          title: chunk.web?.title || "Verified Career Reference",
          url: chunk.web?.uri || ""
        })).filter(s => s.url);
      }
    } catch (e) {
      console.warn("Grounding chunk data parsing skipped:", e);
    }

    // Return the response properties matching the expectations of your frontend fetch block
    res.json({
      content: textPayload,
      sources: sources.slice(0, 5) // Return the top 5 live citations
    });

  } catch (error) {
    console.error("❌ BACKEND PIPELINE EXECUTION CRASH:", error);
    res.status(500).json({ error: "The remote inference engine model threw a communication glitch." });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Forward Moves AI Backend Router listening on port ${PORT}`);
});