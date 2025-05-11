import React from "react";
import { Mail, Github, Linkedin,  Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import SectionTitle from "@/components/ui/SectionTitle";

const ContactPage: React.FC = () => {
  const { toast } = useToast();

  const handleEmailClick = () => {
    window.location.href =
      "mailto:madhavi.lakmini2000@gmail.com?subject=Contact%20from%20Portfolio&body=Hi%20Madhavi,%0A%0AI%20found%20your%20portfolio%20and...";
    toast({
      title: "Email client opened",
      description: "Your message is ready to send via your email client.",
    });
  };

  return (
    <div className="min-h-screen">
      <section className="section-container">
        <SectionTitle
          title="Get in Touch"
          subtitle="Feel free to contact me for any opportunities or questions"
          centered={true}
        />

        <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold text-slate mb-6">
              Contact Information
            </h3>

 <div className="space-y-6">
  <div className="flex items-center">
    <Mail size={20} className="text-primary mr-3" />
    <div>
      <p className="font-medium text-slate">Email</p>
      <a
        href="mailto:madhavi.lakmini2000@gmail.com"
        className="text-slate-light hover:text-primary transition-colors"
      >
        madhavi.lakmini2000@gmail.com
      </a>
    </div>
  </div>

  <div className="flex items-center">
    <Github size={20} className="text-primary mr-3" />
    <div>
      <p className="font-medium text-slate">GitHub</p>
      <a
        href="https://github.com/hpmlsenarathna"
        target="_blank"
        rel="noopener noreferrer"
        className="text-slate-light hover:text-primary transition-colors"
      >
        github.com/hpmlsenarathna
      </a>
    </div>
  </div>

  <div className="flex items-center">
    <Linkedin size={20} className="text-primary mr-3" />
    <div>
      <p className="font-medium text-slate">LinkedIn</p>
      <a
        href="https://www.linkedin.com/in/madhavi-senarathna-75a345299/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-slate-light hover:text-primary transition-colors"
      >
        Connect with me on LinkedIn
      </a>
    </div>
  </div>

  <div className="flex items-center">
    <Phone size={20} className="text-primary mr-3" />
    <div>
      <p className="font-medium text-slate">Phone</p>
      <a
        href="tel:+94714182718"
        className="text-slate-light hover:text-primary transition-colors"
      >
        +94 71 418 2718
      </a>
    </div>
  </div>
</div>

            <div className="mt-10 pt-6 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-slate mb-3">
                Looking for opportunities
              </h3>
              <p className="text-slate-light">
                I'm currently open to new opportunities in software engineering and game development.
                Feel free to reach out if you think I'd be a good fit for your team!
              </p>
            </div>

            {/* Email Button */}
            <div className="mt-8">
              <Button
                onClick={handleEmailClick}
                className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300"
              >
                <Mail className="mr-2" />
                Send me an Email
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
