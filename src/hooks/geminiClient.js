import axios from "axios";

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

export const generateLearningRoadmap = async (goal, courses) => {
  if (!GEMINI_API_KEY) {
    console.warn("Gemini API key missing");
    throw new Error("API key not configured");
  }

  try {
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`,
      {
        contents: [
          {
            parts: [
              {
                text: `You are an AI learning assistant,remove * symbols in text.Create a learning roadmap for someone who wants to "${goal}".
                    Available courses: ${JSON.stringify(courses, null, 2)},
                     make it short short and consice,
                    add resources for roadmap,
                    Format the response as:

                    Guidelines:
                    important :remove the * symbols from text.
                    make it consice and short.
                    1. Divide the roadmap by Month and Week.
                    2. For each week, include:
                    - Objective: What the learner should achieve by the end of the week.
                    - Topics: Key subjects, concepts, or skills to study.
                    - Hands-on Mini-Project: A small project or exercise to practice skills.
                    3. Output in format with clear bullet points.
                    4. Use simple, actionable, and practical language suitable for beginners.
                    5. Optional: Include motivational tips or learning advice at the end of each month.
                    6. Avoid vague suggestions; make every week actionable.

                    Example Output Format:

                    Month 1:
                    - Week 1:
                    - Objective: [Objective here]
                    - Topics: [Topics here]
                    - Mini-Project: [Mini-project here]
                    - Week 2:
                    ...

                    Month 2:
                    - Week 1:
                    ...
`
              }
            ]
          }
        ]
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    console.log("API Response:", response.data); // Debug

    if (!response.data || !response.data.candidates?.[0]?.content?.parts?.[0]?.text) {
      throw new Error("Invalid response from API");
    }

    return response.data.candidates[0].content.parts[0].text;
  } catch (error) {
    console.error("API Error:", error.response?.data || error.message);
    throw new Error(error.response?.data?.error?.message || "Failed to generate roadmap");
  }
};
