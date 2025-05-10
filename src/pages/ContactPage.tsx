import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import SectionTitle from "@/components/ui/SectionTitle";

const ContactPage: React.FC = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    
    // Reset form
    const form = e.target as HTMLFormElement;
    form.reset();
  };
  
  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <section className="section-container">
        <div className="mb-16">
          <SectionTitle 
            title="Get in Touch" 
            subtitle="Feel free to contact me for any opportunities or questions"
            centered={true}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information Section */}
          <div className="animate-fade-in">
            <div className="bg-white p-8 rounded-xl shadow-lg h-full border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="p-2 bg-blue-50 rounded-full mr-4">
                    <Mail size={20} className="text-blue-600" aria-label="Email" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-700">Email</p>
                    <a 
                      href="mailto:madhavi.lakmini2000@gmail.com" 
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      madhavi.lakmini2000@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-2 bg-blue-50 rounded-full mr-4">
                    <Github size={20} className="text-blue-600" aria-label="GitHub" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-700">GitHub</p>
                    <a 
                      href="https://github.com/hpmlsenarathna" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      github.com/hpmlsenarathna
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-2 bg-blue-50 rounded-full mr-4">
                    <Linkedin size={20} className="text-blue-600" aria-label="LinkedIn" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-700">LinkedIn</p>
                    <a 
                      href="https://www.linkedin.com/in/madhavi-senarathna-75a345299/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      linkedin.com/in/madhavi-senarathna
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Looking for opportunities</h3>
                <p className="text-gray-600">
                  I'm currently open to new opportunities in software engineering, frontend development and game development. 
                  Feel free to reach out if you think I'd be a good fit for your team!
                </p>
              </div>
            </div>
          </div>
          
          {/* Contact Form Section */}
          <div className="animate-fade-in [animation-delay:200ms]">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <Input 
                    id="name" 
                    placeholder="Your name" 
                    required 
                    className="focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Your email address" 
                    required 
                    className="focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <Input 
                    id="subject" 
                    placeholder="Subject of your message" 
                    required 
                    className="focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Your message" 
                    rows={6} 
                    required 
                    className="focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </Button>
                
                <p className="text-xs text-gray-500 text-center mt-2">
                  I'll respond to your message as soon as possible.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;