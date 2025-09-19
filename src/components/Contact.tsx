import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Linkedin, Github, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await emailjs.send(
        "service_j69ytax", // Service ID
        "template_2pc1gkb", // Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "N0hG87ChMdd4_D1ol" // Public Key
      );

      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });

    } catch (error) {
      console.error("EmailJS error:", error);
      toast({
        title: "Error",
        description: "Something went wrong while sending your message.",
        variant: "destructive",
      });
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      info: "ayushchavan1980@gmail.com",
      link: "mailto:ayushchavan1980@gmail.com",
      color: "text-portfolio-orange",
      bgColor: "bg-portfolio-orange/10"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      info: "+91 8421663088",
      link: "tel:+918421663088",
      color: "text-portfolio-blue",
      bgColor: "bg-portfolio-blue/10"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      info: "Mumbai, Maharashtra, India",
      link: "#",
      color: "text-portfolio-purple",
      bgColor: "bg-portfolio-purple/10"
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-6 h-6" />,
      name: "LinkedIn",
      url: "https://linkedin.com/in/ayush-chavan-b2557335b",
      color: "text-blue-600 hover:text-blue-700"
    },
    {
      icon: <Github className="w-6 h-6" />,
      name: "GitHub",
      url: "https://github.com/Aayu126",
      color: "text-gray-700 hover:text-gray-900"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-portfolio-gray-900 mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-lg text-portfolio-gray-600 max-w-2xl mx-auto">
            Ready to start your project? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-portfolio-gray-900 mb-6">
              Let's Connect
            </h3>
            <p className="text-portfolio-gray-600 mb-8 leading-relaxed">
              I'm always excited to discuss new projects, creative ideas, or opportunities to 
              be part of your vision. Whether you have a project in mind or just want to chat 
              about frontend development and design, I'd love to hear from you!
            </p>

            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <Card key={index} className="card-portfolio">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-lg ${contact.bgColor}`}>
                      <div className={contact.color}>{contact.icon}</div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-portfolio-gray-900">{contact.title}</h4>
                      <a href={contact.link} className="text-portfolio-gray-600 hover:text-portfolio-orange transition-colors">
                        {contact.info}
                      </a>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div>
              <h4 className="font-semibold text-portfolio-gray-900 mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${social.color}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="card-portfolio">
            <h3 className="text-xl font-bold text-portfolio-gray-900 mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-portfolio-gray-700 mb-2">
                    Your Name
                  </label>
                  <Input id="name" name="name" type="text" required value={formData.name} onChange={handleInputChange} placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-portfolio-gray-700 mb-2">
                    Email Address
                  </label>
                  <Input id="email" name="email" type="email" required value={formData.email} onChange={handleInputChange} placeholder="john@example.com" />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-portfolio-gray-700 mb-2">
                  Subject
                </label>
                <Input id="subject" name="subject" type="text" required value={formData.subject} onChange={handleInputChange} placeholder="Project Inquiry" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-portfolio-gray-700 mb-2">
                  Message
                </label>
                <Textarea id="message" name="message" required value={formData.message} onChange={handleInputChange} placeholder="Tell me about your project..." rows={5} />
              </div>
              <Button type="submit" className="btn-portfolio-primary w-full">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;