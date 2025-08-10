import React from "react";

const About = () => {
  // Skills data
  const skills = [
    { name: "JavaScript", level: 90 },
    { name: "React", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "TypeScript", level: 75 },
    { name: "HTML/CSS", level: 95 },
  ];

  return (
    <section
      id="about"
      className="about-section container mx-auto px-4 md:px-6 py-16 md:py-24"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-text-primary">
          About <span className="text-theme-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* About text */}
          <div className="space-y-4">
            <p className="text-text-secondary">
              I&rsquo;m a passionate full-stack developer with over 5 years of
              experience creating web applications. I specialize in JavaScript
              technologies across the stack and have a strong foundation in
              modern frameworks.
            </p>
            <p className="text-text-secondary">
              My approach to development focuses on writing clean, maintainable
              code that delivers exceptional user experiences. I enjoy solving
              complex problems and continuously learning new technologies.
            </p>
            <p className="text-text-secondary">
              When I&rsquo;m not coding, you can find me exploring new hiking
              trails, reading tech blogs, or experimenting with new recipes in
              the kitchen.
            </p>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-text-primary">
              My Skills
            </h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-text-secondary">{skill.name}</span>
                    <span className="text-text-tertiary">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-ui-secondary rounded-full h-2">
                    <div
                      className="bg-theme-primary h-2 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
