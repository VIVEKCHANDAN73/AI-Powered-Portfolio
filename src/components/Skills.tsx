// Skills.tsx
import React from "react";

const skills = [
  "Python",
  "FastAPI",
  "Django",
  "React",
  "Next.js",
  "AWS",
  "TensorFlow",
  "Docker",
  "CI/CD",
];

export default function Skills() {
  return (
    <div className="mt-4">
      <h3 className="text-xl font-semibold mb-3">Skills:</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
