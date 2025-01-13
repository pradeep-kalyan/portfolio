import React from "react";

function Certifi() {
  return (
    <>
      <div className="container mx-auto p-8 bg-gray-900 min-h-screen text-white font-sans">
        <section className="mb-16 flex justify-center items-center flex-col">
          <h2 className="text-center p-4 font-dancing-script text-5xl text-cyan-400 tracking-wide">
            Certifications
          </h2>
          <ul className="mt-8 space-y-4 text-lg text-gray-300 list-disc list-inside">
            <li>AI-102 Exam (Microsoft)</li>
            <li>
              Gen AI Internship (Completed) – Flaunch Technologies Pvt Ltd
            </li>
            <li>GDG Core Member (2024-2025)</li>
            <li>AI/ML Lead – GDGoC</li>
            <li>Machine Learning with Python – IBM</li>
            <li>
              Build Guardrails for Your AI with Open Source – Cognitive Class
            </li>
            <li>
              Create Your Own Chatbot Website with Open Source LLMs – Cognitive
              Class
            </li>
            <li>Prompt Engineering for Everyone – Cognitive Class</li>
            <li>The Art of Prompt Engineering – Cognitive Class</li>
            <li>Python 101 for Data Science – Cognitive Class</li>
            <li>Learning Python for Data Science – Infosys</li>
            <li>DSA Masterclass – Linuxworld</li>
            <li>SQL and Relational Databases 101 – Cognitive Class</li>
            <li>Getting Started with Artificial Intelligence – Skills Build</li>
            <li>Workshop on Gen AIOps – Linuxworld</li>
            <li>Workshop on AI – Nxtwave</li>
            <li>Introduction to Copilot – Microsoft</li>
            <li>Python for Data Science</li>
            <li>Introduction to LLMs – Google</li>
          </ul>
        </section>

        <section className="mb-16 flex justify-center items-center flex-col">
          <h2 className="text-center p-4 font-dancing-script text-5xl text-cyan-400 tracking-wide">
            Achievements
          </h2>
          <div className="space-y-8 mt-8 w-full max-w-4xl">
            {/* Event Hosting & Speaking */}
            <div className="p-8 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-cyan-300 mb-4">
                Event Hosting & Speaking
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-lg text-gray-300">
                <li>
                  Hosted 10+ events as part of Google Developer Groups on Campus
                </li>
                <li>Spoke at 8+ events</li>
                <li>Hosted and spoke at 2 AI Tools Workshops</li>
                <li>Hosted 1 programming quiz hackathon</li>
              </ul>
            </div>

            {/* Gen AI Jams Ambassador */}
            <div className="p-8 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-cyan-300 mb-4">
                Gen AI Jams Ambassador
              </h3>
              <p className="text-lg text-gray-300">
                Led and successfully completed the Gen AI Jams initiative,
                showcasing leadership and team collaboration.
              </p>
            </div>

            {/* Notable Roles */}
            <div className="p-8 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-cyan-300 mb-4">
                Notable Roles
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-lg text-gray-300">
                <li>Current AI/ML Lead at Google Developer Groups on Campus</li>
                <li>
                  Gen AI Intern (Completed) at Flaunch Technologies Pvt Ltd
                </li>
                <li>GDG Core Member for 2024-2025</li>
                <li>Event Management & Feedbacks Core Team – GDGoC</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Certifi;
