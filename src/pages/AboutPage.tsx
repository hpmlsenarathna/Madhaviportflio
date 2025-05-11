
import React from "react";
import SectionTitle from "@/components/ui/SectionTitle";
import SkillBadge from "@/components/ui/SkillBadge";
import profilePlaceholder from "../assets/profile-placeholder.png";

const AboutPage: React.FC = () => {
  const skills = {
    frontend: ["React.js", "Tailwind CSS", "HTML", "JavaScript", "Node.js"],
    backend: ["Java Spring Boot", "MySQL", "Node.js", "PostgreSQL", "Python"],
    gameDev: ["Unity", "C#"],
    tools: ["IntelliJ IDEA", "Figma", "GitHub"]
  };

  const projects = [
   
       {
         title: "PhysicsQuest - A Physics Learning Game",
         type: "Group Project",
         year: "2024",
         technologies: ["Unity", "C#"],
         description: "Developed interactive game features using Unity and C# by implementing game mechanics, animations, and user interactions for an engaging player experience."
       },
       {
         title: "MeowShot - A Physics-Based Slingshot Game",
         type: "Individual Project",
         year: "2024",
         technologies: ["Unity", "C#"],
         description: "Developed interactive game features using Unity and C# by implementing game mechanics, animations, and user interactions for an engaging player experience."
       },
       {
         title: "Short Expiry Drugs Management System",
         type: "Individual Project",
         year: "Ongoing",
         technologies: ["Next.js", "Node.js", "JavaScript", "PostgreSQL"],
         description: "Designed and developed a full-stack individual project using these tools and frameworks, implementing dynamic UI, state management, server-side rendering, and database integration"
       },
       {
         title: "Alvy - Python based chat app",
         type: "Individual Project",
         year: "2025",
         technologies: ["Python", "HTML", "CSS", "Flask", "WebSockets"],
         description: "Developed chat application called Alvy (Python/Flask/WebSockets) alongside my frontend skills (React/Tailwind/Figma)"
       },
       {
         title: "Sports Management System for Sport Centre",
         type: "Group Project",
         year: "2024",
         technologies: ["HTML", "TailwindCSS", "JavaScript", "React.js"],
         description: "Developed responsive and interactive user interfaces using modern web technologies including React.js, JavaScript, HTML5, and TailwindCSS"
       },
       {
         title: "Library Management System",
         type: "Group Project",
         year: "2024",
         technologies: ["HTML", "CSS", "JavaScript"],
         description: "Contributed to frontend development by building responsive and interactive user interfaces using these tools"
       },
       {
         title: "Patient Record-Keeping System for Apeksha Hospital",
         type: "Group Project",
         year: "Ongoing",
         technologies: ["React.js", "Node.js", "JavaScript", "HTML5", "TailwindCSS"],
         description: "Developed responsive and interactive user interfaces using modern web technologies including React.js, JavaScript, HTML5, and TailwindCSS"
       },
  ];

  return (
    <div className="min-h-screen">
      <section className="section-container">
        <SectionTitle 
          title="About Me" 
          subtitle="Learn more about my background, skills, and interests"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-skyblue/20 to-accent/20 rounded-xl blur-3xl"></div>
            <img
              src={profilePlaceholder}
              alt="Madhavi Senarathna"
              className="relative z-10 w-full max-w-md mx-auto rounded-xl shadow-xl"
            />
          </div>

          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold mb-4 text-slate">
              Hi, I'm <span className="gradient-text">Madhavi Senarathna</span>
            </h3>
            
            <p className="text-slate-light mb-4  text-justify">
              I'm an aspiring software engineer, frontend developer and game developer based in Sri Lanka.
              I'm passionate about creating engaging and interactive experiences
              through code, with a focus on frontend development and game design.
            </p>
            
            <p className="text-slate-light mb-4   text-justify">
              My journey in technology began during my undergraduate studies,
              where I discovered my love for problem-solving and creating digital
              experiences that users enjoy interacting with.
            </p>
            
            <p className="text-slate-light text-justify">
              When I'm not coding, you can find me exploring new game design concepts,
              learning about UI/UX principles, or experimenting with creative coding projects.
            </p>
          </div>
        </div>
      </section>

      <section className="section-container bg-gray-50">
        <SectionTitle 
          title="Education" 
          centered={true}
        />

        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="flex justify-between flex-wrap items-start">
              <div>
                <h3 className="text-xl font-bold text-slate">
                  Bachelor of Science(Hons) in Software Engineering                
                  </h3>
                <p className="text-slate-light">Sabaragamuwa University of Sri Lanka</p>
              </div>
              <span className="text-sm bg-slate-100 px-3 py-1 rounded-full text-slate">
                2022 - 2026
              </span>
            </div>
            
            <p className="mt-4 text-slate-light">
              Focused on software engineering, game development, and user interface design. 
              Completed projects in mobile app development, web development, and game design.
            </p>
            
            <h4 className="text-lg font-semibold text-slate mt-4">Key Courses:</h4>
            <ul className="list-disc list-inside text-slate-light mt-2">
              <li>Software Engineering Principles</li>
              <li>SDLC Principles</li>
              <li>Web Application Development</li>
              <li>User Experience Design</li>
              <li>Database Management Systems</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section-container">
        <SectionTitle 
          title="My Skills" 
          subtitle="A comprehensive list of technologies and tools I work with"
          centered={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-slate mb-4">Frontend Development</h3>
            <div className="flex flex-wrap">
              {skills.frontend.map((skill) => (
                <SkillBadge key={skill} name={skill} />
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-slate mb-4">Backend Development</h3>
            <div className="flex flex-wrap">
              {skills.backend.map((skill) => (
                <SkillBadge key={skill} name={skill} />
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-slate mb-4">Game Development</h3>
            <div className="flex flex-wrap">
              {skills.gameDev.map((skill) => (
                <SkillBadge key={skill} name={skill} />
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-slate mb-4">Tools & Software</h3>
            <div className="flex flex-wrap">
              {skills.tools.map((skill) => (
                <SkillBadge key={skill} name={skill} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-container bg-gray-50">
        <SectionTitle 
          title="Projects" 
          subtitle="A showcase of my recent work and experience"
          centered={true}
        />
        
        <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover-lift">
              <div className="flex flex-wrap justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-slate">{project.title}</h3>
                <div>
                  <span className="text-sm bg-slate-100 px-3 py-1 rounded-full text-slate mr-2">
                    {project.type}
                  </span>
                  <span className="text-sm bg-slate-100 px-3 py-1 rounded-full text-slate">
                    {project.year}
                  </span>
                </div>
              </div>
              
              <div className="mb-4 flex flex-wrap">
                {project.technologies.map((tech, i) => (
                  <span 
                    key={i} 
                    className="inline-block bg-accent/10 text-accent px-2 py-1 rounded text-xs mr-2 mb-2"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <p className="text-slate-light">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-container">
        <SectionTitle 
          title="Interests & Hobbies" 
          centered={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-md hover-lift text-center">
            <h3 className="text-xl font-semibold text-slate mb-3">Game Design</h3>
            <p className="text-slate-light">
              Exploring innovative game mechanics and creating engaging player experiences.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover-lift text-center">
            <h3 className="text-xl font-semibold text-slate mb-3">UI/UX Design</h3>
            <p className="text-slate-light">
              Crafting intuitive user interfaces and seamless user experiences.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover-lift text-center">
            <h3 className="text-xl font-semibold text-slate mb-3">Digital Art</h3>
            <p className="text-slate-light">
              Creating digital illustrations and exploring creative coding.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
