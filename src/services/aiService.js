// C:\ai-ym-portfolio\src\services\aiService.js
import { GoogleGenAI } from "@google/genai";

/**
 * Client-Side AI Intelligence Engine
 * Connects your live frontend directly to Google Gemini via environment variables.
 */
export const streamCareerScoutResponse = async (messageHistory, onChunkReceived) => {
  try {
    // 🛡️ SECURITY RETRIEVAL: Pull the key cleanly from Vite's local parameter vault
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

    if (!apiKey || apiKey === "your_local_private_gemini_key_here") {
      throw new Error("Missing valid API key configuration inside your .env parameters setup.");
    }

    // Initialize the official Google Gen AI Toolkit directly in the browser context
    const ai = new GoogleGenAI({ apiKey });

    // Re-map your UI messages to standard Gemini conversation formats
    const formattedContents = messageHistory.map(msg => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.content || "" }]
    }));

    const systemPrompt = `You are the "AI Career Scout" for Forward Moves. 
      Your goal is to help job seekers navigate the modern job market using real-time information.
      Cover ALL careers and industries. Use Google Search to find current job trends, 
      company news, and career advice across any field the user asks about.
      Always format responses using clean Markdown with clear headings and bold lists.
      CRITICAL: Whenever you mention a resource, website, or company, try to output its real, full website URL link.`;

    console.log("📡 Stream routing directly to Google Gemini with Live Search Grounding Active...");

    // 📡 FETCH LIVE GROUNDED SEARCH GENERATION
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: formattedContents,
      config: {
        systemInstruction: systemPrompt,
        tools: [{ googleSearch: {} }] // 🌐 Keeps Google Live Search integration fully active!
      },
    });

    const responseText = response.text || "";
    const metadata = response.candidates?.[0]?.groundingMetadata;
    let extractedSources = [];

    // Harvest citations from Google Grounding Metadata Chunks
    if (metadata && Array.isArray(metadata.groundingChunks)) {
      metadata.groundingChunks.forEach(chunk => {
        if (chunk.web?.uri) {
          extractedSources.push({
            title: chunk.web.title || "Live Verification Source",
            url: chunk.web.uri
          });
        }
      });
    }

    // Fallback Deep-Regex Plain-Text Scraper Linkifier
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const rawTextUrls = responseText.match(urlRegex) || [];
    rawTextUrls.forEach(url => {
      const cleanUrl = url.replace(/[.,)]+$/, "");
      extractedSources.push({
        title: "Live Market Reference Link",
        url: cleanUrl
      });
    });

    // Deduplicate any repeated references cleanly
    const uniqueSources = Array.from(new Map(extractedSources.map(item => [item.url, item])).values()).slice(0, 5);

    // Smooth visual text printing simulation block
    const words = responseText.split(" ");
    let currentResponse = "";

    for (let i = 0; i < words.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, 6)); 
      currentResponse += (i === 0 ? "" : " ") + words[i];
      // Synchronously feed the text updates and our source links matrix right back into your UI state
      onChunkReceived(currentResponse, uniqueSources);
    }

  } catch (error) {
    console.error("Direct Core Data Stream Crash:", error);
    onChunkReceived(
      `### ⚠️ Architecture Environment Link Failure\n\n` +
      `Unable to process direct AI engine verification.\n\n` +
      `**Reason:** ${error.message || "Unknown client stream exception"}\n\n` +
      `**How to fix:** Make sure your private key is pasted into your root \`.env\` file as \`VITE_GEMINI_API_KEY="AIzaSy..."\``,
      []
    );
  }
};