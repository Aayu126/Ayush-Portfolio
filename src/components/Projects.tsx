import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Utensils, GraduationCap } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Hotel & Restaurant Management System",
      description: "A comprehensive management system for hotels and restaurants featuring booking management, menu handling, and customer service tracking. Built with modern frontend technologies.",
      technologies: ["HTML5", "CSS3", "JavaScript", "React", "Responsive Design"],
      features: [
        "Booking management system",
        "Menu and inventory tracking",
        "Customer service portal",
        "Responsive design for all devices"
      ],
      icon: <Utensils className="w-8 h-8" />,
      color: "text-portfolio-orange",
      bgColor: "bg-portfolio-orange/10",
      status: "Completed"
    },
    {
      id: 2,
      title: "EduMind - Course Platform",
      description: "A modern online learning platform concept designed to provide seamless course browsing, enrollment, and learning experiences. Features clean UI and intuitive navigation.",
      technologies: ["React", "Tailwind CSS", "JavaScript", "UI/UX Design", "Figma"],
      features: [
        "Course catalog and browsing",
        "User enrollment system",
        "Interactive learning interface",
        "Modern and accessible design"
      ],
      icon: <GraduationCap className="w-8 h-8" />,
      color: "text-portfolio-blue",
      bgColor: "bg-portfolio-blue/10",
      status: "In Development"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-portfolio-gray-900 mb-4">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-portfolio-gray-600 max-w-2xl mx-auto">
            A showcase of my work in frontend development and UI design
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="card-portfolio overflow-hidden">
              {/* Project Header */}
              <div className="flex items-center space-x-4 mb-6">
                <div className={`p-3 rounded-lg ${project.bgColor}`}>
                  <div className={project.color}>
                    {project.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-portfolio-gray-900">
                    {project.title}
                  </h3>
                  <span className={`text-sm px-2 py-1 rounded-full ${
                    project.status === 'Completed' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Project Description */}
              <p className="text-portfolio-gray-600 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Key Features */}
              <div className="mb-6">
                <h4 className="font-semibold text-portfolio-gray-900 mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-portfolio-gray-600">
                      <div className="w-1.5 h-1.5 bg-portfolio-orange rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="font-semibold text-portfolio-gray-900 mb-3">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-portfolio-gray-100 text-portfolio-gray-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3 pt-4 border-t border-portfolio-gray-200">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex items-center space-x-2"
                  disabled
                >
                  <Github className="w-4 h-4" />
                  <span>View Code</span>
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex items-center space-x-2"
                  disabled
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Future Projects Note */}
        <div className="text-center mt-12">
          <Card className="bg-gradient-to-r from-portfolio-orange/5 to-portfolio-blue/5 p-8">
            <h3 className="text-xl font-bold text-portfolio-gray-900 mb-4">
              More Projects Coming Soon!
            </h3>
            <p className="text-portfolio-gray-600 max-w-2xl mx-auto">
              I'm constantly working on new projects and improving my skills. 
              Stay tuned for more exciting frontend development and UI design work!
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;