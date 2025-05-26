
import React from "react";
import SectionTitle from "@/components/ui/SectionTitle";
import SkillBadge from "@/components/ui/SkillBadge";
import profilePlaceholder from "../assets/profile-placeholder.png";

const AboutPage: React.FC = () => {
  const skills = {
    Programming_Languages : [ "Java", "JavaScript", "TypeScript", "C#", "C" ], 
    Frameworks_and_Libraries : ["React.js", "Tailwind CSS", "HTML", "React Router", "Node.js", "Express.js"],
     Tools_and_Technologies : ["Git", "GitHub", "Visual Studio Code", "Visual Studio", "Figma(for design thinking/prototyping)","Postman(for API testing)", "Unity(2020 LTS or newer)"],
     Databases : ["MySQL", "PostgreSQL", "Prisma(ORM for database interaction)"],
  };

  const projects = [
   
     
    {
         title: "Short Expiry Drugs Management System",
         type: "Individual Project",
         year: "Ongoing",
         technologies: [" React", "React Router", "React-Bootstrap / Tailwind", "JavaScript", "Node.js", "Express.js", "PostgreSQL", "Prisma", "Postman"],
         description: " Implemented a full-stack inventory management system for Avissawella DGH indoor pharmacy, leading both frontend and backend development to streamline drug stock tracking, order management, and short-expiry drug monitoring"
       },
       {
         title: "MeowShot - A Physics-Based Slingshot Game",
         type: "Individual Project",
         year: "2024",
         technologies: ["Unity", "C#"],
         description: " Responsible for the end-to-end design and development of the game, including gameplay mechanics, physics integration, UI/UX design, and frontend interface."
       },
 {
         title: "PhysicsQuest - A Physics Learning Game",
         type: "Group Project",
         year: "2024",
         technologies: ["Unity", "C#"],
         description: "Contributed to a mobile physics simulation game by integrating my own physics-based minigame as a module and assisting in designing the main project’s UI to enhance the overall user experience and educational value."
       },
       {
         title: "Sports Management System for Sport Centre",
         type: "Group Project",
         year: "2024",
         technologies: [" JavaScript ", "HTML", "Tailwind CSS", "React.js"],
         description: " Built the responsive and interactive UI for a unified platform managing campus sports activities, contributing to the frontend development to enhance user experience and centralize access to sports activity information."
       },
        {
         title: "Alvy - Python based chat app",
         type: "Individual Project",
         year: "2025",
         technologies: [ "Python", "HTML", "Tailwind CSS"],
         description: " Engineered a Python-based real-time chat application using Flask and WebSockets, focusing on message handling, user sessions, and a user-friendly frontend for smooth multi-user communication."
       },
       {
         title: "Patient Record-Keeping System for Apeksha Hospital",
         type: "Group Project",
         year: "Ongoing",
         technologies: ["JavaScript",  "React.js", "Tailwind CSS", "HTML"],
         description: " Developed both frontend and backend for Apeksha Hospital's Patient Record System, focusing on responsive UI and efficient data management to improve patient record accessibility."
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
            <h3 className="text-xl font-bold text-slate mb-4">Programming Languages</h3>
            <div className="flex flex-wrap">
              {skills.Programming_Languages.map((skill) => (
                <SkillBadge key={skill} name={skill} />
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-slate mb-4">Frameworks and Libraries</h3>
            <div className="flex flex-wrap">
              {skills.Frameworks_and_Libraries.map((skill) => (
                <SkillBadge key={skill} name={skill} />
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-slate mb-4">Tools and Technologies</h3>
            <div className="flex flex-wrap">
              {skills.Tools_and_Technologies.map((skill) => (
                <SkillBadge key={skill} name={skill} />
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-slate mb-4">Databases</h3>
            <div className="flex flex-wrap">
              {skills.Databases.map((skill) => (
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
