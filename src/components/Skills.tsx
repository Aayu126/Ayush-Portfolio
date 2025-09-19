import { Card } from "@/components/ui/card";
import { 
  Code2, 
  Palette, 
  Database, 
  MessageCircle, 
  Lightbulb,
  Figma,
  Globe,
  Smartphone 
} from "lucide-react";

const Skills = () => {
  const skills = [
    {
      category: "Frontend Development",
      icon: <Code2 className="w-8 h-8" />,
      color: "text-portfolio-orange",
      bgColor: "bg-portfolio-orange/10",
      skills: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS", "Responsive Design"]
    },
    {
      category: "UI/UX Design",
      icon: <Palette className="w-8 h-8" />,
      color: "text-portfolio-blue",
      bgColor: "bg-portfolio-blue/10",
      skills: ["Figma", "User Interface Design", "User Experience", "Wireframing", "Prototyping"]
    },
    {
      category: "Programming",
      icon: <Database className="w-8 h-8" />,
      color: "text-portfolio-purple",
      bgColor: "bg-portfolio-purple/10",
      skills: ["Python", "Problem Solving", "Data Structures", "Algorithms", "Git"]
    },
    {
      category: "Soft Skills",
      icon: <MessageCircle className="w-8 h-8" />,
      color: "text-green-600",
      bgColor: "bg-green-100",
      skills: ["Communication", "Team Collaboration", "Time Management", "Creativity", "Learning"]
    }
  ];

  const tools = [
    { name: "Figma", icon: <Figma className="w-6 h-6" />, color: "text-purple-600" },
    { name: "React", icon: <Code2 className="w-6 h-6" />, color: "text-blue-600" },
    { name: "Tailwind", icon: <Palette className="w-6 h-6" />, color: "text-cyan-600" },
    { name: "JavaScript", icon: <Globe className="w-6 h-6" />, color: "text-yellow-600" },
    { name: "Python", icon: <Database className="w-6 h-6" />, color: "text-green-600" },
    { name: "Responsive", icon: <Smartphone className="w-6 h-6" />, color: "text-portfolio-orange" }
  ];

  return (
    <section id="skills" className="section-padding bg-portfolio-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-portfolio-gray-900 mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-lg text-portfolio-gray-600 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skills.map((skillGroup, index) => (
            <Card key={index} className="card-portfolio">
              <div className="flex items-center space-x-4 mb-6">
                <div className={`p-3 rounded-lg ${skillGroup.bgColor}`}>
                  <div className={skillGroup.color}>
                    {skillGroup.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-portfolio-gray-900">
                  {skillGroup.category}
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {skillGroup.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="card-skill"
                  >
                    <span className="text-sm font-medium text-portfolio-gray-700">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Tools Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-portfolio-gray-900 mb-8">
            Tools & Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`mb-2 ${tool.color}`}>
                  {tool.icon}
                </div>
                <span className="text-sm font-medium text-portfolio-gray-700">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;