
import React from "react";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionTitle from "@/components/ui/SectionTitle";
import resumePlaceholder from "../assets/resume-placeholder.pdf";

const ResumePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <section className="section-container">
        <SectionTitle 
          title="Resume" 
          subtitle="Download my resume or view it online"
        />

        <div className="max-w-4xl mx-auto">
          <div className="flex justify-end mb-6">
            <Button className="flex items-center gap-2">
              <Download size={16} />
              <a 
                href={resumePlaceholder} 
                download="Madhavi_Senarathna_Resume.pdf"
              >
                Download Resume
              </a>
            </Button>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <h2 className="text-3xl font-bold text-center mb-6">Lakmini Senarathna</h2>
            <p className="text-center text-slate-light mb-6">
              Software Engineer | Frontend Developer | Game Developer | Sri Lanka
            </p>
            
            <div className="text-center mb-6">
              <p className="text-slate">madhavi.lakmini2000@gmail.com</p>
              <p className="text-slate">https://github.com/hpmlsenarathna</p>
            </div>
            
            <hr className="my-6" />
            
            <div className="mb-8">
              <h3 className="text-xl font-bold text-slate mb-4">Education</h3>
              <div className="mb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold text-slate">Bachelor of Science(Hons) in Software Engineering</h4>
                    <p className="text-slate-light">Sabaragamuwa University of Sri Lanka</p>
                  </div>
                  <span className="text-sm text-slate-light">2022 - 2026</span>
                </div>
                <p className="text-slate-light mt-2">
                  Focused on software engineering, game development, and UI design.
                </p>
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold text-slate mb-4">Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-slate mb-2">Frontend Development</h4>
                  <p className="text-slate-light">React.js, Tailwind CSS, HTML, JavaScript</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate mb-2">Backend Development</h4>
                  <p className="text-slate-light">Java Spring Boot, MySQL</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate mb-2">Game Development</h4>
                  <p className="text-slate-light">Unity, C#</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate mb-2">Tools & Software</h4>
                  <p className="text-slate-light">IntelliJ IDEA, Figma, GitHub</p>
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold text-slate mb-4">Projects</h3>
              
              <div className="mb-6">
                <div className="flex justify-between items-start">
                  <h4 className="font-semibold text-slate">PhysicsQuest – A Physics Learning Game</h4>
                  <span className="text-sm text-slate-light">2024</span>
                </div>
                <p className="text-slate-light mt-1">Game Developer (Group Project)</p>
                <p className="text-slate-light mt-2">
                  An educational mobile game designed with four mini-games to teach physics concepts 
                  like friction, energy, and fluid pressure through interactive challenges.
                </p>
                <div className="mt-2">
                  <span className="text-sm font-medium text-slate">Tech Stack:</span>
                  <span className="text-slate-light"> Unity, C#, Figma</span>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between items-start">
                  <h4 className="font-semibold text-slate">MeowShot – A Physics-Based Slingshot Game</h4>
                  <span className="text-sm text-slate-light">2024</span>
                </div>
                <p className="text-slate-light mt-1">Solo Developer</p>
                <p className="text-slate-light mt-2">
                  A 2D puzzle game where a cartoon cat is launched via slingshot to hit targets. 
                  Designed with playful physics and animation.
                </p>
                <div className="mt-2">
                  <span className="text-sm font-medium text-slate">Tech Stack:</span>
                  <span className="text-slate-light"> Unity, C#</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-slate mb-4">Languages</h3>
              <div className="flex flex-col gap-2">
                <div>
                  <span className="font-medium text-slate">English:</span>
                  <span className="text-slate-light ml-2">Professional Proficiency</span>
                </div>
                <div>
                  <span className="font-medium text-slate">Sinhala:</span>
                  <span className="text-slate-light ml-2">Native</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8">
            <p className="text-slate-light text-sm">
              This is an online version of my resume. For the most up-to-date version, please download the PDF.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResumePage;
