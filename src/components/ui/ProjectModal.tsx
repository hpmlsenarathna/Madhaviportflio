
import React from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Project } from "./ProjectCard";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  isOpen,
  onClose,
}) => {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex justify-between items-center">
            <span>{project.title}</span>
            <span className="text-base font-normal bg-slate-100 px-3 py-1 rounded-full text-slate">
              {project.year}
            </span>
          </DialogTitle>
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-slate hover:text-primary transition-colors"
          >
            <X size={24} />
          </button>
        </DialogHeader>

        <div className="mt-4">
          {project.imageUrl ? (
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-64 object-cover rounded-lg"
            />
          ) : (
            <div className="w-full h-64 bg-gradient-to-r from-skyblue/30 to-accent/30 rounded-lg flex items-center justify-center">
              <span className="text-2xl font-semibold text-slate">{project.title}</span>
            </div>
          )}

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h4 className="text-sm font-semibold text-slate">Role</h4>
              <p className="text-slate-light">{project.role}</p>
            </div>
            <div className="md:col-span-2">
              <h4 className="text-sm font-semibold text-slate">Tech Stack</h4>
              <div className="flex flex-wrap gap-2 mt-1">
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="text-xs px-2 py-1 bg-gray-100 rounded-full text-slate-light"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h4 className="text-sm font-semibold text-slate">Description</h4>
            <p className="text-slate-light mt-1">{project.description}</p>
          </div>

          <div className="mt-6">
            <h4 className="text-sm font-semibold text-slate">Contributions</h4>
            <ul className="list-disc list-inside text-slate-light mt-1">
              {project.contributions.map((contribution, index) => (
                <li key={index} className="mt-1">
                  {contribution}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <h4 className="text-sm font-semibold text-slate mb-2">Demo Video</h4>
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
              <iframe
                src={project.demoUrl.replace("view?usp=sharing", "preview")}
                title={`${project.title} demo`}
                allowFullScreen
                className="w-full h-64 border-0"
              ></iframe>
            </div>
          </div>

          <div className="flex justify-between items-center mt-8">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline">
                View on GitHub
              </Button>
            </a>
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>
                Watch Demo Video
              </Button>
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
