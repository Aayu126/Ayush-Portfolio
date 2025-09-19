import { Card } from "@/components/ui/card";
import { GraduationCap, MapPin, Target } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-portfolio-gray-900 mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-lg text-portfolio-gray-600 max-w-2xl mx-auto">
            A passionate developer on a journey to create meaningful digital experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Bio */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-portfolio-gray-900">
              My Journey
            </h3>
            <p className="text-portfolio-gray-600 leading-relaxed">
              I'm a motivated Frontend Developer and UI Designer currently pursuing my B.Tech in CSE (AI & ML) 
              at Sandip University, Nashik. My journey started from basic education in my village, and I've 
              grown into someone passionate about crafting responsive, intuitive, and aesthetically pleasing 
              user interfaces.
            </p>
            <p className="text-portfolio-gray-600 leading-relaxed">
              I specialize in frontend development with expertise in React, Tailwind CSS, and modern web 
              frameworks. My passion extends to UI/UX design, where I focus on creating user-friendly 
              experiences that bridge the gap between functionality and beauty.
            </p>
            <p className="text-portfolio-gray-600 leading-relaxed">
              I'm constantly learning and growing, with familiarity in debugging, deployment, and 
              full-stack fundamentals. I believe in continuous skill development and staying updated 
              with the latest technologies.
            </p>
          </div>

          {/* Right side - Info Cards */}
          <div className="space-y-6">
            <Card className="card-portfolio">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-portfolio-orange/10 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-portfolio-orange" />
                </div>
                <div>
                  <h4 className="font-semibold text-portfolio-gray-900 mb-1">Education</h4>
                  <p className="text-portfolio-gray-600">B.Tech CSE (AI & ML)</p>
                  <p className="text-sm text-portfolio-gray-500">Sandip University, Nashik</p>
                </div>
              </div>
            </Card>

            <Card className="card-portfolio">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-portfolio-blue/10 rounded-lg">
                  <MapPin className="w-6 h-6 text-portfolio-blue" />
                </div>
                <div>
                  <h4 className="font-semibold text-portfolio-gray-900 mb-1">Location</h4>
                  <p className="text-portfolio-gray-600">Nashik, Maharashtra, India</p>
                  <p className="text-sm text-portfolio-gray-500">Available for remote work</p>
                </div>
              </div>
            </Card>

            <Card className="card-portfolio">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-portfolio-purple/10 rounded-lg">
                  <Target className="w-6 h-6 text-portfolio-purple" />
                </div>
                <div>
                  <h4 className="font-semibold text-portfolio-gray-900 mb-1">Focus</h4>
                  <p className="text-portfolio-gray-600">Frontend Development & UI/UX Design</p>
                  <p className="text-sm text-portfolio-gray-500">Creating exceptional user experiences</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;