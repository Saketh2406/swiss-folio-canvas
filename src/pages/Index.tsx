
import React, { useState, useEffect } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Github, Linkedin, Twitter, ExternalLink } from "lucide-react";

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formErrors, setFormErrors] = useState({ name: '', email: '', message: '' });
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const validateForm = () => {
    const errors = { name: '', email: '', message: '' };
    let isValid = true;

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
      isValid = false;
    }

    if (!formData.message.trim()) {
      errors.message = 'Message is required';
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters';
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      toast({
        title: "Thank you!",
        description: "Your message has been sent.",
      });
      setFormData({ name: '', email: '', message: '' });
      setFormErrors({ name: '', email: '', message: '' });
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (formErrors[field as keyof typeof formErrors]) {
      setFormErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const isFormValid = () => {
    return formData.name.trim() && 
           formData.email.trim() && 
           /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) &&
           formData.message.trim().length >= 10;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-200 ${
        isScrolled ? 'shadow-sm border-b border-gray-100' : ''
      }`}>
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex justify-center space-x-8">
            {[
              { id: 'hero', label: 'Home' },
              { id: 'about', label: 'About' },
              { id: 'skills', label: 'Skills' },
              { id: 'projects', label: 'Projects' },
              { id: 'experience', label: 'Experience' },
              { id: 'contact', label: 'Contact' }
            ].map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`text-sm font-medium transition-all duration-200 hover:text-blue-600 ${
                  activeSection === id 
                    ? 'text-blue-600 border-b-2 border-blue-600 pb-1' 
                    : 'text-gray-600'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Container */}
      <div className="max-w-4xl mx-auto px-6">
        {/* Hero Section */}
        <section id="hero" className="pt-32 pb-20">
          <div className="text-center">
            <div className="mb-8 inline-block">
              <Avatar className="w-32 h-32 mx-auto animate-fade-in">
                <AvatarImage src="/placeholder.svg" alt="Your Photo" />
                <AvatarFallback className="text-3xl bg-gray-100">YN</AvatarFallback>
              </Avatar>
            </div>
            <h1 className="text-5xl font-semibold text-gray-900 mb-4">Your Name</h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Full-Stack Engineer • Open Source Enthusiast
            </p>
            <div className="flex justify-center space-x-6">
              {[
                { href: 'https://github.com/yourusername', icon: Github, label: 'GitHub' },
                { href: 'https://linkedin.com/in/yourusername', icon: Linkedin, label: 'LinkedIn' },
                { href: 'https://twitter.com/yourusername', icon: Twitter, label: 'Twitter' }
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 transform hover:scale-110 transition-all duration-200"
                  aria-label={label}
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">About Me</h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto text-center">
            I'm a software engineer specializing in modern web architectures, cloud infrastructure, 
            and performance-driven UX. I enjoy building scalable full-stack solutions and contributing 
            to open source projects that make a difference in the developer community.
          </p>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20">
          <h2 className="text-3xl font-semibold text-gray-900 mb-12 text-center">Skills & Expertise</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {[
              'JavaScript', 'React', 'Node.js', 'Python', 'TypeScript', 'AWS',
              'Docker', 'GraphQL', 'PostgreSQL', 'Redis', 'Kubernetes', 'Terraform'
            ].map((skill) => (
              <Badge
                key={skill}
                variant="outline"
                className="py-2 px-4 text-center border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors duration-200"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <h2 className="text-3xl font-semibold text-gray-900 mb-12 text-center">Selected Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'E-Commerce Platform',
                description: 'A full-stack e-commerce solution built with React, Node.js, and PostgreSQL. Features include real-time inventory management, payment processing, and admin analytics dashboard.',
                github: 'https://github.com/yourusername/ecommerce-platform'
              },
              {
                title: 'DevOps Automation Suite',
                description: 'Infrastructure-as-code toolkit using Terraform and Docker. Automates deployment pipelines and reduces infrastructure setup time by 70% across multiple cloud providers.',
                github: 'https://github.com/yourusername/devops-suite'
              }
            ].map((project, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-shadow duration-200 border-gray-200"
              >
                <div className="aspect-video bg-gray-100 rounded-t-lg flex items-center justify-center">
                  <span className="text-gray-500">Project Screenshot</span>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center gap-1 transition-colors duration-200"
                  >
                    View on GitHub <ExternalLink size={16} />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20">
          <h2 className="text-3xl font-semibold text-gray-900 mb-12 text-center">Experience</h2>
          <div className="space-y-12 max-w-3xl mx-auto">
            <div className="border-l-4 border-blue-600 pl-6 animate-fade-in">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Senior Software Engineer @ Tech Company
              </h3>
              <p className="text-sm text-gray-500 mb-4">Jan 2023 – Present</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                  Built and maintained CI/CD pipelines, reducing deployment time by 30%.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                  Implemented AWS infrastructure-as-code using Terraform, standardizing resource configs.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                  Collaborated with cross-functional teams to design microservices architecture.
                </li>
              </ul>
            </div>
            <div className="border-l-4 border-blue-600 pl-6 animate-fade-in">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Full-Stack Developer @ Another Company
              </h3>
              <p className="text-sm text-gray-500 mb-4">Jun 2022 – Dec 2022</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                  Developed responsive web applications using React and Node.js.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                  Optimized database queries, improving application performance by 40%.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">Get In Touch</h2>
          <p className="text-lg text-gray-700 text-center mb-12">
            I'm always open to discussing new opportunities. Feel free to say hello!
          </p>
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                Name *
              </label>
              <Input
                id="name"
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className={`${formErrors.name ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500`}
                required
              />
              {formErrors.name && (
                <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>
              )}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                Email *
              </label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className={`${formErrors.email ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500`}
                required
              />
              {formErrors.email && (
                <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
              )}
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                Message *
              </label>
              <Textarea
                id="message"
                placeholder="Your message, at least 10 characters"
                rows={4}
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                className={`${formErrors.message ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 resize-none`}
                required
              />
              {formErrors.message && (
                <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>
              )}
            </div>
            <Button
              type="submit"
              disabled={!isFormValid()}
              className="w-full bg-gray-900 hover:bg-gray-800 text-white font-medium py-3 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Send Message"
            >
              Send Message
            </Button>
          </form>
        </section>

        {/* Footer */}
        <footer className="py-12 text-center border-t border-gray-200">
          <p className="text-gray-600">© 2025 Your Name. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
