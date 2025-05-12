import React, { useState } from "react";
import { Github, ExternalLink } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import ProjectCard, { Project } from "@/components/ui/ProjectCard";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import ProjectsDecoration from "@/components/3d/ProjectsDecoration";

const ProjectsPage: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects: Project[] = [
    {
      id: 1,
      title: "PhysicsQuest",
      year: "2024",
      role: "Game Developer (Group Project)",
      description: "An educational mobile game designed with four mini-games to teach physics concepts like friction, energy, and fluid pressure through interactive challenges.",
      techStack: ["Unity", "C#", "Figma"],
      contributions: [
        "Built UI with Figma, implemented mechanics and game logic using C#.",
        "Designed interactive tutorials for physics concepts.",
        "Implemented game progression system and achievements."
      ],
      githubUrl: "https://github.com/hpmlsenarathna/PhysicsQuest",
      demoUrl: "https://www.linkedin.com/posts/madhavi-senarathna-75a345299_miniproject-physicsquest-gamedevelopment-activity-7293852459922247680-AHND?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEghnfYBCJbCDRojd4O5MLN71ormYbkkNsk"
    },
    {
      id: 2,
      title: "MeowShot",
      year: "2024",
      role: "Solo Developer",
      description: "A 2D puzzle game where a cartoon cat is launched via slingshot to hit targets. Designed with playful physics and animation.",
      techStack: ["Unity", "C#"],
      contributions: [
        "Designed and developed entire game mechanics and visuals.",
        "Implemented physics-based interactions and character animations.",
        "Created level progression system with increasing difficulty."
      ],
      githubUrl: "https://github.com/hpmlsenarathna/MeowShot",
      demoUrl: "https://www.linkedin.com/posts/madhavi-senarathna-75a345299_meowshot-physicsgame-unity3d-activity-7293854071684243457-8JTD?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEghnfYBCJbCDRojd4O5MLN71ormYbkkNsk"
    },
    {
      id: 3,
      title: "Short Expiry Drugs Management System",
      year: "Ongoing",
      role: "Full Stack Developer (Solo Project)",
      description: "A full-stack solution for managing short-expiry pharmaceutical drugs, with dynamic UI, database integration, and expiry filtering.",
      techStack: ["Next.js", "Node.js", "JavaScript", "PostgreSQL"],
      contributions: [
        "Designed and implemented dynamic UI and backend logic.",
        "Integrated PostgreSQL for efficient expiry data tracking.",
        "Managed state with Redux and deployed on cloud platform."
      ],
      githubUrl: "https://github.com/hpmlsenarathna/Short_Expiery_ManagementApp",
      demoUrl: ""
    },
    {
      id: 4,
      title: "Sports Management System for Sport Centre",
      year: "2024",
      role: "Frontend Developer (Group Project)",
      description: "A web application for managing sports center activities including scheduling and registrations.",
      techStack: ["React.js", "JavaScript", "Tailwind CSS", "HTML"],
      contributions: [
        "Built responsive and interactive UI using React and Tailwind.",
        "Worked closely with backend to display live sports data.",
        "Implemented user registration and scheduling modules."
      ],
      githubUrl: "https://github.com/VDDayarathne/SMS_frontend",
      demoUrl: "https://www.linkedin.com/posts/madhavi-senarathna-75a345299_sportsmanagement-javaspringboot-reactjs-activity-7293884034709893120-4Pi9?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEghnfYBCJbCDRojd4O5MLN71ormYbkkNsk"
    },
    {
      id: 5,
      title: "Patient Record-Keeping System for Apeksha Hospital",
      year: "Ongoing",
      role: "Frontend Developer (Group Project)",
      description: "A hospital record system to manage patient histories and appointments using modern web technologies.",
      techStack: ["React.js", "Node.js"],
      contributions: [
        "Developed UI for medical staff to view/edit patient records.",
        "Integrated form handling and role-based access.",
        "Collaborated on secure data fetching from backend."
      ],
      githubUrl: "https://github.com/mtsachintha/apeksha",
      demoUrl: ""
    },
    {
      id: 6,
      title: "Library Management System",
      year: "2024",
      role: "Frontend Developer (Group Project)",
      description: "System to handle library book inventory, borrowing, and return tracking for academic use.",
      techStack: ["React.js", "HTML", "CSS", "JavaScript"],
      contributions: [
        "Developed user interfaces for book search and borrow modules.",
        "Helped implement responsive design and validations.",
        "Worked on integration with backend API services."
      ],
      githubUrl: "https://github.com/mtsachintha/Library-Frontend",
      demoUrl: "https://www.linkedin.com/posts/madhavi-senarathna-75a345299_webdevelopment-librarymanagement-studentproject-activity-7327576075130023936-QeTi?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEghnfYBCJbCDRojd4O5MLN71ormYbkkNsk"
    },
    {
      id: 7,
      title: "Alvy - Python Chat App",
      year: "2025",
      role: "Full Stack Developer (Solo Project)",
      description: "A Python-based real-time chat application built using Flask and WebSockets.",
      techStack: ["Python", "Flask", "HTML", "CSS"],
      contributions: [
        "Built real-time messaging system with Flask and WebSockets.",
        "Created clean UI with responsive layout.",
        "Added user authentication and message history."
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

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <div className="space-y-6">
              <DialogHeader>
                <DialogTitle className="text-2xl">{selectedProject.title}</DialogTitle>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>{selectedProject.year}</span>
                  <span>{selectedProject.role}</span>
                </div>
              </DialogHeader>

              <div className="prose max-w-none">
                <h3 className="text-lg font-semibold">Description</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {selectedProject.description}
                </p>

                <h3 className="text-lg font-semibold mt-6">Technologies Used</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {selectedProject.techStack.map((tech) => (
                    <span 
                      key={tech} 
                      className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <h3 className="text-lg font-semibold mt-6">My Contributions</h3>
                <ul className="space-y-2 mt-2">
                  {selectedProject.contributions.map((contribution, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>{contribution}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex gap-4 pt-6">
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary hover:underline"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View on GitHub
                    </a>
                  )}
                  {selectedProject.demoUrl && (
                    <a
                      href={selectedProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary hover:underline"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProjectsPage;