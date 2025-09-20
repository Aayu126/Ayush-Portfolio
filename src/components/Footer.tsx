import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      url: "https://github.com/Aayu126",
      label: "GitHub"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      url: "https://linkedin.com/in/ayush-chavan-b2557335b",
      label: "LinkedIn"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      url: "mailto:ayushchavan1980@gmail.com",
      label: "Email"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-portfolio-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">
              Ayush<span className="text-portfolio-orange">.</span>
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Frontend Developer & UI/UX Designer passionate about creating 
              beautiful, functional web experiences.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-portfolio-gray-800 rounded-lg hover:bg-portfolio-orange transition-colors duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'About', id: 'about' },
                { name: 'Skills', id: 'skills' },
                { name: 'Projects', id: 'projects' },
                { name: 'Services', id: 'services' }
              ].map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-300 hover:text-portfolio-orange transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact</h4>
            <div className="space-y-2 text-gray-300">
              <p>Mumbai, Maharashtra, India</p>
              <a 
                href="tel:+918421663088"
                className="block hover:text-portfolio-orange transition-colors"
              >
                +91 8421663088
              </a>
              <a 
                href="mailto:ayushchavan1980@gmail.com"
                className="block hover:text-portfolio-orange transition-colors"
              >
                ayushchavan1980@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-portfolio-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300 flex items-center justify-center space-x-1">
            <span>© {currentYear} Ayush Vijay Chavan.</span>
            <Heart className="w-4 h-4 text-portfolio-orange fill-current" />
            <span>❤️</span>
          </p>
        </div>
      </div>
    </footer>
  )
};

export default Footer;