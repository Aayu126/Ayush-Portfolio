import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import ayushProfile from "@/assets/ayush-profile.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-portfolio-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-portfolio-orange/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-portfolio-blue/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 relative inline-block">
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-white shadow-xl mx-auto">
              <img 
                src={ayushProfile} 
                alt="Ayush Vijay Chavan - Frontend Developer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-400 rounded-full border-4 border-white"></div>
          </div>

          {/* Main Content */}
          <div className="fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-portfolio-gray-900 mb-4">
              Hi! I Am{" "}
              <span className="text-gradient">Ayush Vijay Chavan</span>
            </h1>
            
            <h2 className="text-xl sm:text-2xl text-portfolio-gray-800 mb-6 font-medium">
              Frontend Developer & UI/UX Designer
            </h2>
            
            <p className="text-lg text-portfolio-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Crafting modern, responsive, and user-friendly web experiences. 
              Passionate about turning ideas into beautiful, functional digital solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                onClick={() => scrollToSection('projects')}
                className="btn-portfolio-primary"
              >
                View My Work
              </Button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="btn-portfolio-secondary"
              >
                Contact Me
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6">
              <a 
                href="https://github.com/Aayu126" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <Github className="w-6 h-6 text-portfolio-gray-700" />
              </a>
              <a 
                href="https://linkedin.com/in/ayush-chavan-b2557335b" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <Linkedin className="w-6 h-6 text-portfolio-blue" />
              </a>
              <a 
                href="mailto:ayushchavan1980@gmail.com"
                className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <Mail className="w-6 h-6 text-portfolio-orange" />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-portfolio-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;