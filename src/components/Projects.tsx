// components/Projects.tsx
"use client";
import { Card, CardContent } from "@/components/ui/card";

const projects = [
  {
    title: "AI Chatbot",
    stack: ["FastAPI", "OpenAI", "React"],
    result: "Handled 10k+ queries/month",
    thumbnail: "/chatbot.png"
  },
  {
    title: "Automation Platform",
    stack: ["Python", "Prefect", "Docker"],
    result: "Reduced manual work by 40%",
    thumbnail: "/automation.png"
  }
];

export default function Projects() {
  return (
    <section className="grid md:grid-cols-2 gap-6 p-6">
      {projects.map((p, i) => (
        <Card key={i} className="cursor-pointer hover:shadow-xl transition">
          <CardContent>
            <img src={p.thumbnail} alt={p.title} className="rounded-xl mb-4"/>
            <h2 className="text-xl font-semibold">{p.title}</h2>
            <p className="text-sm text-gray-500">{p.stack.join(", ")}</p>
            <p className="mt-2">{p.result}</p>
            <button className="mt-3 text-blue-500">Ask AI →</button>
          </CardContent>
        </Card>
      ))}
    </section>
  );
}
