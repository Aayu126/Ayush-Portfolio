import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Sparkles, Code2, Palette } from "lucide-react";
import ayushProfile from "@/assets/ayush-profile.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-portfolio-gray-50 via-white to-portfolio-orange/5">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary gradient orbs */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-portfolio-orange/20 to-portfolio-orange-light/10 rounded-full blur-3xl floating-element"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-portfolio-blue/15 to-portfolio-purple/10 rounded-full blur-3xl floating-element" style={{ animationDelay: '2s' }}></div>
        
        {/* Secondary decorative elements */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-portfolio-orange/10 rounded-full blur-2xl pulse-slow"></div>
        <div className="absolute bottom-1/3 left-1/3 w-24 h-24 bg-portfolio-blue/15 rounded-full blur-xl pulse-slow" style={{ animationDelay: '1s' }}></div>
        
        {/* Geometric shapes */}
        <div className="absolute top-20 right-20 w-8 h-8 border-2 border-portfolio-orange/30 rounded-lg rotate-45 floating-element"></div>
        <div className="absolute bottom-32 left-20 w-6 h-6 bg-portfolio-blue/20 rounded-full floating-element" style={{ animationDelay: '3s' }}></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_hsl(var(--portfolio-gray-200))_1px,_transparent_0)] opacity-30" style={{ backgroundSize: '50px 50px' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Enhanced Profile Section */}
          <div className="mb-12 relative inline-block scale-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-r from-portfolio-orange to-portfolio-blue rounded-full blur-2xl opacity-30 scale-110"></div>
              
              {/* Main profile image */}
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-white shadow-2xl mx-auto backdrop-blur-sm">
                <img 
                  src={ayushProfile} 
                  alt="Ayush Vijay Chavan - Frontend Developer"
                  className="w-full h-full object-cover"
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-portfolio-orange/10 to-transparent"></div>
              </div>
              
              {/* Enhanced status indicator */}
              <div className="absolute -bottom-3 -right-3 flex items-center justify-center">
                <div className="w-8 h-8 bg-green-400 rounded-full border-4 border-white shadow-lg relative">
                  <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-75"></div>
                </div>
              </div>
              
              {/* Floating skill icons */}
              <div className="absolute -top-4 -left-8 p-3 glass-card floating-element">
                <Code2 className="w-5 h-5 text-portfolio-orange" />
              </div>
              <div className="absolute -top-2 -right-12 p-3 glass-card floating-element" style={{ animationDelay: '1s' }}>
                <Palette className="w-5 h-5 text-portfolio-blue" />
              </div>
            </div>
          </div>

          {/* Enhanced Content */}
          <div className="space-y-8">
            {/* Greeting with sparkle */}
            <div className="fade-in flex items-center justify-center space-x-2" style={{ animationDelay: '0.4s' }}>
              <Sparkles className="w-6 h-6 text-portfolio-orange animate-pulse" />
              <span className="text-lg font-medium text-portfolio-gray-600">Hello, I'm</span>
              <Sparkles className="w-6 h-6 text-portfolio-blue animate-pulse" />
            </div>

            {/* Enhanced Main Heading */}
            <div className="fade-in" style={{ animationDelay: '0.6s' }}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-4">
                <span className="text-portfolio-gray-900">Ayush Vijay</span>
                <br />
                <span className="text-hero-gradient">Chavan</span>
              </h1>
            </div>
            
            {/* Enhanced Subtitle */}
            <div className="fade-in" style={{ animationDelay: '0.8s' }}>
              <h2 className="text-2xl sm:text-3xl text-portfolio-gray-700 font-semibold mb-2">
                Frontend Developer & UI/UX Designer
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-portfolio-orange to-portfolio-blue mx-auto rounded-full"></div>
            </div>
            
            {/* Enhanced Description */}
            <div className="fade-in" style={{ animationDelay: '1s' }}>
              <p className="text-xl text-portfolio-gray-600 max-w-3xl mx-auto leading-relaxed">
                Crafting modern, responsive, and user-friendly web experiences with passion and precision. 
                Transforming ideas into beautiful, functional digital solutions that make a difference.
              </p>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="fade-in flex flex-col sm:flex-row gap-6 justify-center items-center" style={{ animationDelay: '1.2s' }}>
              <Button 
                onClick={() => scrollToSection('projects')}
                className="btn-hero-primary group relative"
              >
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-portfolio-orange-light to-portfolio-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              </Button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="btn-hero-secondary"
              >
                Let's Connect
              </Button>
            </div>

            {/* Enhanced Social Links */}
            <div className="fade-in flex justify-center space-x-8" style={{ animationDelay: '1.4s' }}>
              <a 
                href="https://github.com/Aayu126" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group p-4 glass-card hover:bg-white/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <Github className="w-7 h-7 text-portfolio-gray-700 group-hover:text-portfolio-gray-900 transition-colors" />
              </a>
              <a 
                href="https://linkedin.com/in/ayush-chavan-b2557335b" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group p-4 glass-card hover:bg-white/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <Linkedin className="w-7 h-7 text-portfolio-blue group-hover:text-blue-600 transition-colors" />
              </a>
              <a 
                href="mailto:ayushchavan1980@gmail.com"
                className="group p-4 glass-card hover:bg-white/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <Mail className="w-7 h-7 text-portfolio-orange group-hover:text-portfolio-orange-dark transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 fade-in" style={{ animationDelay: '1.6s' }}>
          <div className="flex flex-col items-center space-y-2">
            <span className="text-sm text-portfolio-gray-500 font-medium">Scroll to explore</span>
            <div className="p-2 rounded-full border-2 border-portfolio-gray-300 animate-bounce hover:border-portfolio-orange transition-colors cursor-pointer">
              <ArrowDown className="w-5 h-5 text-portfolio-gray-400" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;