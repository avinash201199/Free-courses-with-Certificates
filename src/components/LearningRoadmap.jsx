// src/components/LearningRoadmap.jsx
import React, { useState } from "react";
import { generateLearningRoadmap } from "../hooks/geminiClient";

const LearningRoadmap = ({ courses }) => {
    const [goal, setGoal] = useState("");
    const [roadmap, setRoadmap] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleGenerate = async () => {
        if (!goal) return alert("Enter a learning goal!");
        if (!courses || !Array.isArray(courses) || courses.length === 0) {
            return alert("No courses available to generate roadmap.");
        }

        setLoading(true);
        setError("");
        try {
            console.log("Generating roadmap for:", goal);
            console.log("Available courses:", courses);
            const result = await generateLearningRoadmap(goal, courses);
            setRoadmap(result);
        } catch (err) {
            console.error("Error details:", err);
            setError(err.message || "Failed to generate roadmap.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-4 border rounded shadow">
            <h2 className="text-xl font-bold mb-2">AI Learning Roadmap</h2>

            <input
                type="text"
                placeholder="Your goal (e.g., Become Data Scientist)"
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                className="border p-2 rounded w-full mb-2"
            />

            <button
                onClick={handleGenerate}
                className="bg-blue-500 text-white px-4 py-2 rounded"
                disabled={loading}
            >
                {loading ? "Generating..." : "Generate Roadmap"}
            </button>

            {error && <p className="mt-2 text-red-500">{error}</p>}

            {roadmap && <pre className="mt-4 p-2 bg-gray-100 rounded">{roadmap}</pre>}
        </div>
    );
};

export default LearningRoadmap;
