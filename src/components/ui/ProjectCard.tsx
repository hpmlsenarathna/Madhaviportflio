
import React from "react";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

export interface Project {
  id: number;
  title: string;
  year: string;
  role: string;
  description: string;
  techStack: string[];
  contributions: string[];
  githubUrl: string;
  demoUrl: string;
  imageUrl?: string;
}

interface ProjectCardProps {
  project: Project;
  onOpenDetails: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenDetails }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover-lift">
      <div className="h-48 bg-gray-200 relative">
        {project.imageUrl ? (
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-r from-skyblue/30 to-accent/30 flex items-center justify-center">
            <span className="text-xl font-semibold text-slate">{project.title}</span>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold text-slate">{project.title}</h3>
          <span className="text-sm bg-slate-100 px-2 py-1 rounded-full text-slate">
            {project.year}
          </span>
        </div>
        
        <p className="text-slate-light mt-2 text-sm line-clamp-3">
          {project.description}
        </p>
        
        <div className="mt-4 flex flex-wrap gap-2">
          {project.techStack.slice(0, 3).map((tech, index) => (
            <span 
              key={index} 
              className="text-xs px-2 py-1 bg-gray-100 rounded-full text-slate-light"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 3 && (
            <span className="text-xs px-2 py-1 bg-gray-100 rounded-full text-slate-light">
              +{project.techStack.length - 3}
            </span>
          )}
        </div>
        
        <div className="mt-6 flex items-center justify-between">
          <Button 
            variant="outline" 
            onClick={onOpenDetails}
          >
            View Details
          </Button>
          
          <a 
            href={project.githubUrl} 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-slate hover:text-primary transition-colors"
          >
            <Github size={18} />
            <span className="ml-1 text-sm">GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
