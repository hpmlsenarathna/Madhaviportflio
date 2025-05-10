
import React from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="text-xl font-bold gradient-text">
              Madhavi Senarathna
            </Link>
            <p className="text-slate-light mt-2 text-sm">
              Software Engineer | Frontend Developer
            </p>
          </div>

          <div className="flex space-x-6 items-center">
            <a
              href="https://github.com/hpmlsenarathna"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="mailto:madhavi.lakmini2000@gmail.com"
              className="text-slate hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href="#" // Add LinkedIn URL here when available
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-sm text-slate-light">
            &copy; {new Date().getFullYear()} Lakmini Senarathna. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
