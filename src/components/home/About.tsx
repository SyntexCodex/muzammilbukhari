import React, { useState } from "react";

const About = () => {
  // State for collapsible sections
  const [expandedSection, setExpandedSection] = useState("personal-info");
  const [expandedSubSection, setExpandedSubSection] = useState("education");

  // Skills data
  const skills = [
    { name: "JavaScript", level: 90 },
    { name: "React", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "TypeScript", level: 75 },
    { name: "HTML/CSS", level: 95 },
  ];

  // Education data
  const education = [
    {
      degree: "Master of Computer Science",
      institution: "Tech University",
      year: "2018-2020",
      description: "Specialized in Web Technologies and Software Engineering",
    },
    {
      degree: "Bachelor of Computer Science",
      institution: "Digital College",
      year: "2014-2018",
      description: "Focused on Programming and System Design",
    },
  ];

  // Experience data
  const experience = [
    {
      position: "Senior Full Stack Developer",
      company: "Tech Solutions Inc.",
      period: "2020-Present",
      description:
        "Leading development of enterprise web applications using MERN stack.",
    },
    {
      position: "Web Developer",
      company: "Digital Creations",
      period: "2018-2020",
      description:
        "Developed responsive websites and e-commerce solutions for clients.",
    },
  ];

  // Interests data
  const interests = [
    "Open Source Contributing",
    "Tech Blogging",
    "Hiking",
    "Photography",
    "Learning New Programming Languages",
  ];

  // Toggle section expansion
  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? "" : section);
  };

  // Toggle subsection expansion
  const toggleSubSection = (subsection: string) => {
    setExpandedSubSection(expandedSubSection === subsection ? "" : subsection);
  };

  // Sample code snippet for display
  const codeSnippet = `function initializeModelChunk<T>() {
  const value: T = parseModel(chunk);
  const initializedChunk: InitializedChunk<T> = {};
  initializedChunk._status = INITIALIZED;
  initializedChunk._value = value;
  return value;
}`;

  return (
    <section
      id="about"
      className="about-section w-full bg-[#011627] text-gray-300 min-h-screen"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="border-b border-gray-700 py-4 px-4">
          <h2 className="text-lg font-mono">michael-weaver</h2>
        </div>

        {/* About Me Title */}
        <div className="border-b border-gray-700 py-3 px-4">
          <h3 className="text-base font-mono">_about-me</h3>
        </div>

        {/* Personal Info Section */}
        <div className="border-b border-gray-700">
          <div
            className="flex items-center py-3 px-4 cursor-pointer hover:bg-gray-800"
            onClick={() => toggleSection("personal-info")}
          >
            <span
              className={`transform transition-transform ${
                expandedSection === "personal-info" ? "rotate-90" : ""
              }`}
            >
              ▶
            </span>
            <span className="ml-2 font-mono">personal-info</span>
          </div>

          {expandedSection === "personal-info" && (
            <div className="pl-6">
              {/* Bio Subsection */}
              <div
                className="flex items-center py-2 px-4 cursor-pointer hover:bg-gray-800"
                onClick={() => toggleSubSection("bio")}
              >
                <span className="mr-2">❯</span>
                <span className="inline-block w-4 h-4 bg-red-500 mr-2"></span>
                <span className="font-mono">bio</span>
              </div>

              {/* Interests Subsection */}
              <div
                className="flex items-center py-2 px-4 cursor-pointer hover:bg-gray-800"
                onClick={() => toggleSubSection("interests")}
              >
                <span className="mr-2">❯</span>
                <span className="inline-block w-4 h-4 bg-green-500 mr-2"></span>
                <span className="font-mono">interests</span>
              </div>

              {/* Education Subsection */}
              <div
                className="flex items-center py-2 px-4 cursor-pointer hover:bg-gray-800 bg-gray-800"
                onClick={() => toggleSubSection("education")}
              >
                <span className="mr-2">❯</span>
                <span className="inline-block w-4 h-4 bg-purple-500 mr-2"></span>
                <span className="font-mono">education</span>
              </div>

              {expandedSubSection === "education" && (
                <div className="pl-12">
                  <div className="py-2 px-4 cursor-pointer hover:bg-gray-800">
                    <span className="inline-block w-4 h-4 bg-gray-600 mr-2"></span>
                    <span className="font-mono">high-school</span>
                  </div>
                  <div className="py-2 px-4 cursor-pointer hover:bg-gray-800">
                    <span className="inline-block w-4 h-4 bg-gray-600 mr-2"></span>
                    <span className="font-mono">university</span>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Professional Info Section */}
        <div className="border-b border-gray-700">
          <div
            className="flex items-center py-3 px-4 cursor-pointer hover:bg-gray-800"
            onClick={() => toggleSection("professional-info")}
          >
            <span
              className={`transform transition-transform ${
                expandedSection === "professional-info" ? "rotate-90" : ""
              }`}
            >
              ▶
            </span>
            <span className="ml-2 font-mono">professional-info</span>
          </div>
        </div>

        {/* Hobbies Section */}
        <div className="border-b border-gray-700">
          <div
            className="flex items-center py-3 px-4 cursor-pointer hover:bg-gray-800"
            onClick={() => toggleSection("hobbies")}
          >
            <span
              className={`transform transition-transform ${
                expandedSection === "hobbies" ? "rotate-90" : ""
              }`}
            >
              ▶
            </span>
            <span className="ml-2 font-mono">hobbies</span>
          </div>
        </div>

        {/* Contacts Section */}
        <div className="border-b border-gray-700">
          <div
            className="flex items-center py-3 px-4 cursor-pointer hover:bg-gray-800"
            onClick={() => toggleSection("contacts")}
          >
            <span
              className={`transform transition-transform ${
                expandedSection === "contacts" ? "rotate-90" : ""
              }`}
            >
              ▶
            </span>
            <span className="ml-2 font-mono">contacts</span>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-4 text-sm">
          <p>
            I have 5 years of experience in web development lorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in.
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            officia deserunt mollit anim id est laborum.
          </p>
        </div>

        {/* Username and Details Section */}
        <div className="flex items-center p-4 border-t border-gray-700">
          <div className="w-10 h-10 rounded-full bg-gray-600 mr-3"></div>
          <div className="text-blue-400 mr-4 font-mono">@username</div>
          <div className="flex items-center mr-4">
            <span className="mr-1">💬</span>
            <span>details</span>
          </div>
          <div className="flex items-center">
            <span className="mr-1">⭐</span>
            <span>3</span>
          </div>
        </div>

        {/* Code Snippet */}
        <div className="p-4 border-t border-gray-700">
          <div className="bg-[#011627] rounded-md p-4 font-mono text-xs">
            <div>
              <span className="text-purple-400">function</span>{" "}
              <span className="text-blue-300">initializeModelChunk</span>
              <span className="text-yellow-300">&lt;T&gt;</span>() &#123;
            </div>
            <div className="pl-4">
              <span className="text-purple-400">const</span>{" "}
              <span className="text-blue-300">value</span>:{" "}
              <span className="text-yellow-300">T</span> ={" "}
              <span className="text-blue-300">parseModel</span>(chunk);
            </div>
            <div className="pl-4">
              <span className="text-purple-400">const</span>{" "}
              <span className="text-blue-300">initializedChunk</span>:{" "}
              <span className="text-yellow-300">InitializedChunk&lt;T&gt;</span>{" "}
              = &#123;&#125;;
            </div>
            <div className="pl-4">
              <span className="text-blue-300">initializedChunk</span>.
              <span className="text-blue-500">_status</span> ={" "}
              <span className="text-blue-500">INIT</span>;
            </div>
            <div className="pl-4">
              <span className="text-blue-300">initializedChunk</span>.
              <span className="text-blue-500">_value</span> ={" "}
              <span className="text-blue-300">value</span>;
            </div>
            <div className="pl-4">
              <span className="text-purple-400">return</span>{" "}
              <span className="text-blue-300">value</span>;
            </div>
            <div>&#125;</div>
          </div>
        </div>

        {/* Work Description */}
        <div className="p-4 border-t border-gray-700 relative">
          <div className="absolute top-2 right-2 text-xl cursor-pointer">×</div>
          <p className="text-sm">
            My work here was 5 months ago. It was for the project called "...".
            Some other text can be placed here.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-between p-4 border-t border-gray-700">
          <div className="text-sm">find me in:</div>
          <div className="flex space-x-2">
            <div className="w-8 h-8 bg-gray-700 flex items-center justify-center">
              𝕏
            </div>
            <div className="w-8 h-8 bg-gray-700 flex items-center justify-center">
              in
            </div>
            <div className="w-8 h-8 bg-gray-700 flex items-center justify-center">
              GH
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
