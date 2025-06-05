
import React, { useState, useEffect } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Github, Mail, ExternalLink } from "lucide-react";

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
      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'education', 'contact'];
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

  const skills = [
    'AWS', 'Terraform', 'Jenkins', 'GitHub Actions', 'Docker', 'Kubernetes',
    'Ansible', 'Python', 'Bash', 'PowerShell', 'CloudWatch', 'OpenSearch',
    'GitLab CI/CD', 'Linux', 'Windows', 'RBAC', 'MFA', 'Azure Active Directory', 'GCP'
  ];

  return (
    <div className="min-h-screen bg-black text-white font-inter overflow-x-hidden">
      {/* Navigation - Dark with motion */}
      <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-300 ${
        isScrolled ? 'bg-black/70 shadow-lg shadow-blue-500/20' : 'bg-black/30'
      }`}>
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-center space-x-8">
            {[
              { id: 'hero', label: 'Home' },
              { id: 'about', label: 'About' },
              { id: 'skills', label: 'Skills' },
              { id: 'projects', label: 'Projects' },
              { id: 'experience', label: 'Experience' },
              { id: 'education', label: 'Education' },
              { id: 'contact', label: 'Contact' }
            ].map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 group ${
                  activeSection === id 
                    ? 'text-blue-400 border-b-2 border-blue-400' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section - Full screen with large avatar */}
      <section id="hero" className="relative h-screen w-full flex items-center justify-start overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="flex justify-center md:justify-start">
              <Avatar className="w-64 h-64 md:w-80 md:h-80 border-4 border-blue-400 shadow-2xl shadow-blue-500/50 animate-pulse">
                <AvatarImage src="/lovable-uploads/e3d7fb80-60f6-4a27-b75e-aeefb76b6d82.png" alt="Saketh Reddy Sadu" />
                <AvatarFallback className="text-6xl bg-gray-800 text-white">SR</AvatarFallback>
              </Avatar>
            </div>
            <div className="hidden md:block"></div>
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight animate-fade-in">
                Saketh Reddy Sadu
              </h1>
              <p className="text-md md:text-lg text-gray-300 mb-6 leading-relaxed max-w-md animate-fade-in" style={{animationDelay: '0.2s'}}>
                DevOps Engineer specializing in Cloud Infrastructure & Security
              </p>
              <div className="flex justify-center md:justify-start space-x-6 mt-4 animate-fade-in" style={{animationDelay: '0.4s'}}>
                <a
                  href="https://github.com/saketh-reddy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 hover:bg-blue-500/20 rounded-full transition-all duration-300 hover:scale-110 border border-white/20 hover:border-blue-400"
                  aria-label="GitHub"
                >
                  <Github size={24} className="text-white" />
                </a>
                <a
                  href="mailto:sakethsadu@gmail.com"
                  className="p-3 bg-white/10 hover:bg-blue-500/20 rounded-full transition-all duration-300 hover:scale-110 border border-white/20 hover:border-blue-400"
                  aria-label="Email"
                >
                  <Mail size={24} className="text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-8 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">About Me</h2>
          <div className="max-w-2xl mx-auto px-4 py-6 bg-gray-800 rounded-lg shadow-2xl hover:shadow-blue-500/20 transition-all duration-300">
            <p className="text-gray-300 text-lg leading-relaxed">
              DevOps Engineer with experience automating cloud infrastructure using Terraform, Jenkins, and GitHub Actions. 
              Skilled at designing secure IAM policies, optimizing AWS costs, and implementing CI/CD pipelines. 
              Passionate about real-time monitoring and security auditing to ensure high system reliability.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-8 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="relative bg-gray-800 rounded-sm px-3 py-2 hover:bg-gray-700 transition-all duration-300 group cursor-default"
                >
                  <span className="text-gray-300 text-sm">{skill}</span>
                  <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-blue-400 transition-all duration-500 group-hover:w-full"></div>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center">
              <div className="w-64 h-64 border-2 border-blue-400/30 rounded-full flex items-center justify-center">
                <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full animate-spin-slow"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-8 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">Selected Projects</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="p-4 bg-gray-800 border-gray-700 rounded-lg overflow-hidden transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30">
              <div className="aspect-video bg-gray-700 rounded-md flex items-center justify-center mb-4">
                <span className="text-gray-400 text-lg">CloudOps Dashboard</span>
              </div>
              <CardHeader className="px-4 py-4">
                <CardTitle className="text-xl text-white mb-2">
                  CloudOps Dashboard & IAM Monitoring (2024)
                </CardTitle>
              </CardHeader>
              <CardContent className="px-4 py-4">
                <p className="text-gray-300 leading-relaxed mb-3 text-sm">
                  Built IAM access monitoring with AWS Lambda and Python. Aggregated CloudTrail logs into OpenSearch for 
                  real-time auditing and triggered SNS alerts for security issues.
                </p>
                <a
                  href="https://github.com/saketh-reddy/CloudOpsDashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center gap-2 transition-colors duration-300 text-sm hover:underline"
                >
                  View on GitHub <ExternalLink size={16} />
                </a>
              </CardContent>
            </Card>

            <Card className="p-4 bg-gray-800 border-gray-700 rounded-lg overflow-hidden transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30">
              <div className="aspect-video bg-gray-700 rounded-md flex items-center justify-center mb-4">
                <span className="text-gray-400 text-lg">Go Web App on EKS</span>
              </div>
              <CardHeader className="px-4 py-4">
                <CardTitle className="text-xl text-white mb-2">
                  Go Web App on AWS EKS
                </CardTitle>
              </CardHeader>
              <CardContent className="px-4 py-4">
                <p className="text-gray-300 leading-relaxed mb-3 text-sm">
                  Dockerized a Go web app, deployed on AWS EKS with Kubernetes manifests. Automated Helm chart deployment 
                  and configured ALB Controller for public access.
                </p>
                <a
                  href="https://github.com/saketh-reddy/GoWebAppEKS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center gap-2 transition-colors duration-300 text-sm hover:underline"
                >
                  View on GitHub <ExternalLink size={16} />
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-8 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">Experience</h2>
          <div className="space-y-8">
            <div className="w-full bg-gray-800 rounded-lg p-4 shadow-2xl transform transition-all duration-300 hover:translate-x-2">
              <h3 className="text-xl text-white mb-1 font-semibold">AWS Cloud Test Engineer Intern @ Nurtur Energy</h3>
              <p className="text-xs text-gray-400 mb-2">May 2024 – Jul 2024 | Maryland Heights, MO</p>
              <ul className="space-y-2 text-gray-300 text-sm leading-relaxed">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Automated AWS monitoring with CloudWatch & SNS, reducing response times.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Developed IAM policies and Python/Bash scripts for least-privilege access.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Integrated OpenSearch for real-time security auditing.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Built IoT ingestion pipelines with secure role-based access.
                </li>
              </ul>
            </div>

            <div className="w-full bg-gray-800 rounded-lg p-4 shadow-2xl transform transition-all duration-300 hover:translate-x-2">
              <h3 className="text-xl text-white mb-1 font-semibold">AWS Cloud Operate @ Cognizant Technology Solutions</h3>
              <p className="text-xs text-gray-400 mb-2">Mar 2022 – Jul 2023 | Hyderabad, India</p>
              <ul className="space-y-2 text-gray-300 text-sm leading-relaxed">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Managed AWS IAM roles and user access, conducted periodic reviews.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Hardened security with IAM policies, MFA, and CloudTrail logging.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Implemented IaC with Terraform for consistent provisioning.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Investigated incidents using CloudWatch logs for continuous improvement.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-8 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">Education</h2>
          <div className="space-y-8">
            <div className="w-full bg-gray-800 rounded-lg p-4 shadow-2xl">
              <h3 className="text-xl text-white mb-1 font-semibold">MS in Information Systems @ Saint Louis University</h3>
              <p className="text-xs text-gray-400 mb-1">Aug 2024 – May 2025 | St. Louis, MO</p>
              <p className="text-sm text-gray-300 leading-relaxed">GPA: 8.04/10</p>
            </div>

            <div className="w-full bg-gray-800 rounded-lg p-4 shadow-2xl">
              <h3 className="text-xl text-white mb-1 font-semibold">B.Tech in ECE @ GITAM University</h3>
              <p className="text-xs text-gray-400 mb-1">Oct 2018 – Jun 2022 | Visakhapatnam, India</p>
              <p className="text-sm text-gray-300 leading-relaxed">GPA: 8.04/10</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-8 mb-8 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-4 text-center">Get In Touch</h2>
          <p className="text-gray-300 text-lg mx-auto max-w-2xl mb-4 leading-relaxed text-center">
            I'm open to new opportunities or collaborations. Let's connect!
          </p>
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Name *
              </label>
              <Input
                id="name"
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className={`bg-gray-800 text-white border-gray-600 rounded-md focus:ring-2 focus:ring-blue-400 focus:border-blue-400 ${formErrors.name ? 'border-red-500' : ''}`}
                required
                aria-label="Name"
              />
              {formErrors.name && (
                <p className="text-red-400 text-sm mt-1">{formErrors.name}</p>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email *
              </label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className={`bg-gray-800 text-white border-gray-600 rounded-md focus:ring-2 focus:ring-blue-400 focus:border-blue-400 ${formErrors.email ? 'border-red-500' : ''}`}
                required
                aria-label="Email"
              />
              {formErrors.email && (
                <p className="text-red-400 text-sm mt-1">{formErrors.email}</p>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message *
              </label>
              <Textarea
                id="message"
                placeholder="Your message (min 10 characters)"
                rows={4}
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                className={`bg-gray-800 text-white border-gray-600 rounded-md focus:ring-2 focus:ring-blue-400 focus:border-blue-400 resize-none ${formErrors.message ? 'border-red-500' : ''}`}
                required
              />
              {formErrors.message && (
                <p className="text-red-400 text-sm mt-1">{formErrors.message}</p>
              )}
            </div>
            <Button
              type="submit"
              disabled={!isFormValid()}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-4 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-blue-500/25"
              aria-label="Send Message"
            >
              Send Message
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center border-t border-gray-800 mt-8 bg-black">
        <p className="text-gray-500 text-sm">© 2025 Saketh Reddy Sadu. All rights reserved.</p>
        <div className="h-0.5 w-20 bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto mt-4 animate-pulse"></div>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Index;
