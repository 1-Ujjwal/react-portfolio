import React from "react";

const About = () => {
  const frontendSkills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Responsive Design",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          About Me
        </h2>

        <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
          <p className="text-gray-300 mb-6">
            Passionate developer with strong attention to detail,
            problem-solving abilities. I strive to deliver high-quality
            applications. Additionally, I stay updated with the latest
            frameworks, tools, and industry best practices to develop optimized,
            high-performance solutions that meet user needs and align with
            business goals.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition cursor-pointer"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="md:grid-cols-2 gap-6 mt-8">
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
            <ul className="list-inside text-gray-300 space-y-4">
              <li>
                <strong>B.Tech in Information Technology</strong> (2021 - 2025){" "}
                <br /> Rajkiya Engineering College, Bijnor <br />
              </li>
              <li>
                <strong>Intermediate</strong> (2019 - 2020) <br /> Modern Era
                Public School, Bijnor <br />
                Percentage - 84%
              </li>
              <li>
                <strong>High School</strong> (2017 - 2018) <br /> Modern Era
                Public School, Bijnor <br />
                Percentage - 87%
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
