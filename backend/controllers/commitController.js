import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" });

export const generateCommitMessage = async (req, res) => {
  try {
    const { diffContent } = req.body;

    if (!diffContent) {
      return res.status(400).json({ error: "diffContent is required" });
    }

    const prompt = `Analyze this git diff and generate a conventional commit message. The message should have a type (e.g., feat, fix, chore), a concise subject, and a brief body explaining the changes. Important: The entire output must be plain text only, without any markdown formatting like backticks (\`\`\`) or asterisks (*). Diff:\n\n${diffContent}`;
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const generatedMessage = response.text();

    res.status(200).json({ message: generatedMessage });

  } catch (error) {
    console.error("Error calling Gemini API:", error);
    res.status(500).json({ error: "Failed to generate commit message" });
  }
};