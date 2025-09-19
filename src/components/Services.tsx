import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Palette, Code, Smartphone, Zap, Users, Target } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Creating wireframes, prototypes, and user-friendly interfaces that provide exceptional user experiences and meet business objectives.",
      features: [
        "User Interface Design",
        "User Experience Research",
        "Wireframing & Prototyping",
        "Design Systems",
        "Responsive Design"
      ],
      color: "text-portfolio-orange",
      bgColor: "bg-portfolio-orange/10",
      borderColor: "border-portfolio-orange/20"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Frontend Development",
      description: "Building responsive, accessible, and visually appealing websites using modern technologies and best practices.",
      features: [
        "React Development",
        "Responsive Web Design",
        "Performance Optimization",
        "Cross-browser Compatibility",
        "Modern CSS & Tailwind"
      ],
      color: "text-portfolio-blue",
      bgColor: "bg-portfolio-blue/10",
      borderColor: "border-portfolio-blue/20"
    }
  ];

  const benefits = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Fast Delivery",
      description: "Quick turnaround times without compromising quality"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Collaborative",
      description: "Working closely with you throughout the process"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile-First",
      description: "Designing for all devices and screen sizes"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Goal-Oriented",
      description: "Focused on achieving your business objectives"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="section-padding bg-portfolio-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-portfolio-gray-900 mb-4">
            My <span className="text-gradient">Services</span>
          </h2>
          <p className="text-lg text-portfolio-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions for your digital needs
          </p>
        </div>

        {/* Main Services */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className={`card-portfolio border-2 ${service.borderColor} hover:border-opacity-50`}>
              <div className="flex items-center space-x-4 mb-6">
                <div className={`p-4 rounded-xl ${service.bgColor}`}>
                  <div className={service.color}>
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-portfolio-gray-900">
                  {service.title}
                </h3>
              </div>

              <p className="text-portfolio-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-3">
                <h4 className="font-semibold text-portfolio-gray-900">What's included:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-portfolio-gray-600">
                      <div className={`w-2 h-2 ${service.bgColor} rounded-full mr-3`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-portfolio-gray-900 text-center mb-8">
            Why Work With Me?
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-portfolio-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-portfolio-orange">
                    {benefit.icon}
                  </div>
                </div>
                <h4 className="font-semibold text-portfolio-gray-900 mb-2">
                  {benefit.title}
                </h4>
                <p className="text-sm text-portfolio-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button 
              onClick={scrollToContact}
              className="btn-portfolio-primary"
            >
              Start Your Project
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;