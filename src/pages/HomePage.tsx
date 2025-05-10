import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThreeScene from "@/components/3d/ThreeScene";

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12 animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Hi, I'm <span className="gradient-text">Madhavi</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-light mt-6">
                Aspiring Software Engineer | Frontend & Game Dev Enthusiast
              </p>
              <p className="mt-6 text-slate max-w-lg">
                I'm a software engineer, frontend developer and game developer based in Sri Lanka, passionate about 
                creating engaging digital experiences and solving problems through code.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link to="/projects">
                    View My Work <ArrowRight size={16} className="ml-2" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/contact">Get in Touch</Link>
                </Button>
              </div>
            </div>
            
            <div className="md:w-1/2 mt-12 md:mt-0">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-skyblue/20 to-accent/20 rounded-full blur-3xl"></div>
                <ThreeScene />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-slate-light mt-4 max-w-2xl mx-auto">
              Check out some of my recent work in game development and software engineering.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1 - PhysicsQuest */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover-lift">
              <div className="h-48 bg-gradient-to-r from-skyblue/30 to-accent/30 flex items-center justify-center">
                <span className="text-xl font-semibold text-slate">PhysicsQuest</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate">PhysicsQuest</h3>
                <p className="text-slate-light mt-2">
                  An educational mobile game designed to teach physics concepts through interactive challenges.
                </p>
                <div className="mt-6">
                  <Button asChild variant="outline">
                    <Link to="/projects">Learn More</Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Project 2 - MeowShot */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover-lift">
              <div className="h-48 bg-gradient-to-r from-skyblue/30 to-accent/30 flex items-center justify-center">
                <span className="text-xl font-semibold text-slate">MeowShot</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate">MeowShot</h3>
                <p className="text-slate-light mt-2">
                  A 2D puzzle game where a cartoon cat is launched via slingshot to hit targets.
                </p>
                <div className="mt-6">
                  <Button asChild variant="outline">
                    <Link to="/projects">Learn More</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button asChild>
              <Link to="/projects">
                View All Projects
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold">
              My <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-slate-light mt-4 max-w-2xl mx-auto">
              A quick overview of my technical expertise and tools I use regularly.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Frontend Skills */}
            <div className="bg-white p-8 rounded-xl shadow-md hover-lift">
              <h3 className="text-xl font-bold text-slate mb-4">Frontend</h3>
              <div className="flex flex-wrap">
                {["React.js", "Tailwind CSS", "HTML", "JavaScript"].map((skill) => (
                  <span
                    key={skill}
                    className="m-1 px-3 py-1 bg-gray-100 rounded-full text-sm text-slate-light"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend Skills */}
            <div className="bg-white p-8 rounded-xl shadow-md hover-lift">
              <h3 className="text-xl font-bold text-slate mb-4">Backend</h3>
              <div className="flex flex-wrap">
                {["Java Spring Boot", "MySQL"].map((skill) => (
                  <span
                    key={skill}
                    className="m-1 px-3 py-1 bg-gray-100 rounded-full text-sm text-slate-light"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Game Dev Skills */}
            <div className="bg-white p-8 rounded-xl shadow-md hover-lift">
              <h3 className="text-xl font-bold text-slate mb-4">Game Dev</h3>
              <div className="flex flex-wrap">
                {["Unity", "C#"].map((skill) => (
                  <span
                    key={skill}
                    className="m-1 px-3 py-1 bg-gray-100 rounded-full text-sm text-slate-light"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="outline">
              <Link to="/about">
                Learn More About Me
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-skyblue to-accent text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Let's Work Together</h2>
          <p className="mt-4 text-white/90 max-w-2xl mx-auto">
            I'm currently looking for new opportunities to work on exciting projects. 
            If you have a project in mind or just want to say hi, feel free to reach out!
          </p>
          <div className="mt-8">
            <Button asChild variant="secondary" size="lg">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
