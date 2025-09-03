// AboutCard.tsx
import React from "react";
import Skills from "@/components/Skills"; // import your existing Skills component

export default async function AboutCard() {

  return (
    <section className="flex justify-center items-center py-16 bg-black-50">
      <div className="rounded-2xl shadow-lg p-8 max-w-3xl flex flex-col md:flex-row items-center gap-8">
        

        {/* Info */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4">Hi, I'm Vivek Chandan</h2>
          <p className="text-white-700 mb-4">
            I am a Python Developer and AI/ML Engineer with 5+ years of experience.
            I love building scalable applications, automating workflows, and
            exploring AI technologies.
          </p>
          <p className="text-white-700 mb-4">
            My expertise includes Python, FastAPI, Django, React, and AWS cloud.
            I enjoy applying AI & ML to solve real-world problems.
          </p>

          {/* Render existing Skills component */}
          <Skills />
        </div>
        {/* Profile Image */}
        <img
          src="/profile.jpg" // replace with your image path
          alt="Vivek Chandan"
          className="w-40 h-40 rounded-full object-cover"
        />
      </div>
    </section>
  );
}
