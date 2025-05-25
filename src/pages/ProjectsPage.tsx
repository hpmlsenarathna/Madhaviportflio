import React, { useState } from "react";
import SectionTitle from "@/components/ui/SectionTitle";
import ProjectCard, { Project } from "@/components/ui/ProjectCard";
import ProjectModal from "@/components/ui/ProjectModal";
import ProjectsDecoration from "@/components/3d/ProjectsDecoration";

const ProjectsPage: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects: Project[] = [
    {
      id: 1,
      title: "Short Expiry Drugs Management System",
      year: "Ongoing",
      role: "Full Stack Developer (Solo Project)",
      description: " A full-stack solution for managing short-expiry pharmaceutical drugs, with dynamic UI, database integration, and expiry filtering.",
      techStack: [" React, React Router, React-Bootstrap / Tailwind, JavaScript, Node.js, Express.js, PostgreSQL, Prisma, Postman"],
      contributions: [
       "Led the design and development of a full-stack inventory management system for Avissawella DGH indoor pharmacy.",
"Built and integrated frontend and backend modules to efficiently manage drug stock, order processing, and inventory records.",
"Implemented features for real-time tracking and monitoring of short-expiry drugs to enhance pharmacy operations.",
      ],
      githubUrl: "https://github.com/hpmlsenarathna/Short_Expiery_ManagementApp",
      demoUrl: ""
    },

    {
      id: 2,
      title: "MeowShot",
      year: "2024",
      role: "Solo Developer",
      description: "A 2D puzzle game where a cartoon cat is launched via slingshot to hit targets. Designed with playful physics and animation.",
      techStack: ["Unity", "C#"],
      contributions: [
        "Led the complete design and development of the game from concept to deployment.",
"Implemented core gameplay mechanics and integrated physics-based interactions for realistic behavior.",
"Designed intuitive UI/UX and built a responsive frontend interface to enhance user engagement.",
 ],
      githubUrl: "https://github.com/hpmlsenarathna/MeowShot",
      demoUrl: "https://www.linkedin.com/posts/madhavi-senarathna-75a345299_meowshot-physicsgame-unity3d-activity-7293854071684243457-8JTD?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEghnfYBCJbCDRojd4O5MLN71ormYbkkNsk",
            
    },
     {
      id: 3,
      title: "PhysicsQuest",
      year: "2024",
      role: "Game Developer (Group Project)",
      description: "An educational mobile game designed with four mini-games to teach physics concepts like friction, energy, and fluid pressure through interactive challenges.",
      techStack: ["Unity", "C#"],
      contributions: [
        "I developed a custom physics-based minigame module for a mobile physics simulation game.",
        "I contributed to the design of the main project’s UI to improve usability and engagement.",
         "My work enhanced the game’s educational value by making physics concepts more interactive and accessible.",
      ],
      githubUrl: "https://github.com/hpmlsenarathna/PhysicsQuest",
      demoUrl: "https://www.linkedin.com/posts/madhavi-senarathna-75a345299_miniproject-physicsquest-gamedevelopment-activity-7293852459922247680-AHND?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEghnfYBCJbCDRojd4O5MLN71ormYbkkNsk",    
    },
    {
      id: 4,
      title: "Sports Management System for Sport Centre",
      year: "2024",
      role: "Frontend Developer (Group Project)",
      description: "A web application for managing sports center activities including scheduling and registrations.",
      techStack: [" JavaScript , HTML, Tailwind CSS, React.js"],
      contributions: [
        "Developed a responsive and interactive user interface for a centralized campus sports management platform.",
        "Focused on enhancing user experience by streamlining navigation and improving accessibility to sports activity information.",
        "Contributed to frontend development by implementing clean layouts, dynamic components, and mobile-friendly design.",],
      githubUrl: "https://github.com/VDDayarathne/SMS_frontend",
      demoUrl: "https://www.linkedin.com/posts/madhavi-senarathna-75a345299_sportsmanagement-javaspringboot-reactjs-activity-7293884034709893120-4Pi9?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEghnfYBCJbCDRojd4O5MLN71ormYbkkNsk",
      
    },
    {
      id: 5,
      title: "Patient Record-Keeping System for Apeksha Hospital",
      year: "Ongoing",
      role: "Frontend Developer (Group Project)",
      description: "A hospital record system to manage patient histories and appointments using modern web technologies.",
      techStack: [" JavaScript,  React.js, Tailwind CSS, HTML"],
      contributions: [
        "I developed both the frontend and backend of the Patient Record System for Apeksha Hospital.",
         "My focus was on creating a responsive and user-friendly interface to ensure ease of use for hospital staff.",
          "I also implemented efficient data management techniques to enhance the accessibility and reliability of patient records.",
      ],
      githubUrl: "https://github.com/mtsachintha/apeksha",
      demoUrl: ""
    },
    {
      id: 6,
      title: "Alvy - Python Chat App",
      year: "2025",
      role: "Full Stack Developer (Solo Project)",
      description: "A Python-based real-time chat application built using Flask and WebSockets.",
      techStack: [" Python, HTML, Tailwind CSS"],
      contributions: [
        "Developed a real-time chat application in Python using Flask and WebSockets for seamless multi-user communication.",
"Implemented efficient message handling and user session management to ensure reliability and performance.",
"Designed a responsive and user-friendly frontend interface to enhance user experience.",
      ],
      githubUrl: "https://github.com/hpmlsenarathna/Alvy",
      demoUrl: ""
    }
  ];

  const handleOpenProjectDetails = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen">
      <section className="section-container">
        <SectionTitle 
          title="My Projects" 
          subtitle="Explore my work in game development and software engineering"
        />
        
        <ProjectsDecoration />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenDetails={() => handleOpenProjectDetails(project)}
            />
          ))}
        </div>
      </section>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default ProjectsPage;