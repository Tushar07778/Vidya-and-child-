import { GoogleGenerativeAI, SchemaType } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY || "");

export async function generateSuccessStory() {
  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      generationConfig: {
        responseMimeType: "application/json",
        responseSchema: {
          type: SchemaType.OBJECT,
          properties: {
            name: { type: SchemaType.STRING },
            age: { type: SchemaType.NUMBER },
            story: { type: SchemaType.STRING },
            achievement: { type: SchemaType.STRING }
          },
          required: ["name", "age", "story", "achievement"]
        }
      }
    });

    const result = await model.generateContent(
      "Create a short, inspiring fictional success story of a child from Vidya & Child NGO who overcame obstacles to achieve their dreams. Format as JSON with name, age, story, and achievement."
    );

    const text = result.response.text();
    if (!text) return null;
    return JSON.parse(text);
  } catch (error) {
    console.error("Failed to generate success story:", error);
    return null;
  }
}

export async function generateQuote() {
  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      generationConfig: {
        temperature: 0.9,
      }
    });

    const result = await model.generateContent(
      "Provide one short, powerful, and unique motivational quote about the power of education for underprivileged children."
    );

    return result.response.text()?.trim() || "Education is the bridge from despair to hope.";
  } catch (error) {
    console.error("Failed to generate quote:", error);
    return "Education is the bridge from despair to hope.";
  }
}
