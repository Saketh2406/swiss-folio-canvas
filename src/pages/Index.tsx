
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
    <div className="min-h-screen bg-white font-inter">
      {/* Navigation - Ultra spaced with generous padding */}
      <nav className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm transition-all duration-300 ${
        isScrolled ? 'shadow-sm border-b border-gray-200' : ''
      }`}>
        <div className="max-w-4xl mx-auto px-8 py-6">
          <div className="flex justify-center space-x-12">
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
                className={`px-4 py-2 text-sm font-medium transition-all duration-300 hover:text-blue-500 ${
                  activeSection === id 
                    ? 'text-blue-500 border-b-2 border-blue-500 pb-1' 
                    : 'text-gray-600'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Ultra-narrow container with maximum whitespace */}
      <div className="max-w-3xl mx-auto px-8">
        {/* Hero Section - Massive spacing */}
        <section id="hero" className="pt-40 pb-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-center w-full">
            <div className="flex justify-center md:justify-start p-4">
              <Avatar className="w-48 h-48 transition-opacity duration-700 opacity-100">
                <AvatarImage src="/lovable-uploads/e3d7fb80-60f6-4a27-b75e-aeefb76b6d82.png" alt="Saketh Reddy Sadu" />
                <AvatarFallback className="text-4xl bg-gray-100 text-gray-600">SR</AvatarFallback>
              </Avatar>
            </div>
            <div className="hidden md:block"></div>
            <div className="text-center md:text-left px-4 py-4">
              <h1 className="text-6xl font-semibold text-gray-900 mb-6 leading-tight">Saketh Reddy Sadu</h1>
              <p className="text-2xl text-gray-600 mb-8 leading-relaxed max-w-lg">
                DevOps Engineer specializing in Cloud Infrastructure & Security
              </p>
              <div className="flex justify-center md:justify-start space-x-10 mt-4">
                <a
                  href="https://github.com/saketh-reddy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 transform hover:scale-125 transition-all duration-300 opacity-80 hover:opacity-100"
                  aria-label="GitHub"
                >
                  <Github size={28} />
                </a>
                <a
                  href="mailto:sakethsadu@gmail.com"
                  className="text-gray-600 hover:text-gray-900 transform hover:scale-125 transition-all duration-300 opacity-80 hover:opacity-100"
                  aria-label="Email"
                >
                  <Mail size={28} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About Section - Ultra spaced */}
        <section id="about" className="py-20">
          <h2 className="text-4xl font-semibold text-gray-900 mb-12 text-center">About Me</h2>
          <p className="text-xl text-gray-700 leading-loose max-w-2xl mx-auto text-center mb-8">
            DevOps Engineer with hands-on experience automating cloud infrastructure using Terraform, Jenkins, and GitHub Actions. 
            Skilled at designing secure IAM policies, optimizing AWS costs, and implementing continuous integration pipelines to 
            streamline deployments. Passionate about robust logging, monitoring, and real-time security audits to ensure system reliability.
          </p>
        </section>

        {/* Skills Section - Generous grid spacing */}
        <section id="skills" className="py-20">
          <h2 className="text-4xl font-semibold text-gray-900 mb-16 text-center">Skills & Expertise</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 max-w-4xl mx-auto justify-items-center">
            {skills.map((skill) => (
              <Badge
                key={skill}
                variant="outline"
                className="px-6 py-3 mb-4 text-center border-gray-300 text-gray-700 hover:bg-gray-50 transition-all duration-300 cursor-default text-base"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </section>

        {/* Projects Section - Ultra spaced cards */}
        <section id="projects" className="py-20">
          <h2 className="text-4xl font-semibold text-gray-900 mb-16 text-center">Selected Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="p-6 border border-gray-200 rounded-lg hover:shadow-xl transition-all duration-300">
              <div className="aspect-video bg-gray-100 rounded-md flex items-center justify-center mb-6">
                <span className="text-gray-500 text-lg">CloudOps Dashboard</span>
              </div>
              <CardHeader className="px-6 py-6">
                <CardTitle className="text-2xl font-semibold text-gray-900 mb-4">
                  CloudOps Dashboard & IAM Monitoring Automation (2024)
                </CardTitle>
              </CardHeader>
              <CardContent className="px-6 py-6">
                <p className="text-gray-700 leading-loose mb-6 text-lg">
                  Built IAM user access monitoring with AWS Lambda and Python to detect anomalies and enforce 
                  least-privilege roles. Aggregated CloudTrail logs into OpenSearch for real-time auditing and 
                  integrated SNS notifications for security rule violations.
                </p>
                <a
                  href="https://github.com/saketh-reddy/CloudOpsDashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700 font-medium inline-flex items-center gap-2 transition-colors duration-300 text-lg"
                >
                  View on GitHub <ExternalLink size={18} />
                </a>
              </CardContent>
            </Card>

            <Card className="p-6 border border-gray-200 rounded-lg hover:shadow-xl transition-all duration-300">
              <div className="aspect-video bg-gray-100 rounded-md flex items-center justify-center mb-6">
                <span className="text-gray-500 text-lg">Go Web App on EKS</span>
              </div>
              <CardHeader className="px-6 py-6">
                <CardTitle className="text-2xl font-semibold text-gray-900 mb-4">
                  DevOpsified Go Web App on AWS EKS
                </CardTitle>
              </CardHeader>
              <CardContent className="px-6 py-6">
                <p className="text-gray-700 leading-loose mb-6 text-lg">
                  Dockerized a Go web application and deployed it on AWS EKS. Configured Kubernetes manifests 
                  (Deployment, Service, Ingress) with NGINX Controller and ALB Controller. Automated Helm chart 
                  deployment and exposed the app via a custom domain.
                </p>
                <a
                  href="https://github.com/saketh-reddy/GoWebAppEKS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700 font-medium inline-flex items-center gap-2 transition-colors duration-300 text-lg"
                >
                  View on GitHub <ExternalLink size={18} />
                </a>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Experience Section - Ultra spaced timeline */}
        <section id="experience" className="py-20">
          <h2 className="text-4xl font-semibold text-gray-900 mb-16 text-center">Experience</h2>
          <div className="space-y-16 max-w-4xl mx-auto">
            <div className="border-l-6 border-blue-500 pl-8 mb-12 transition-opacity duration-700">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                AWS Cloud Test Engineer Intern @ Nurtur Energy
              </h3>
              <p className="text-sm text-gray-500 mb-6">May 2024 – Jul 2024 | Maryland Heights, Missouri, USA</p>
              <ul className="space-y-4 text-gray-700 text-lg leading-loose">
                <li className="flex items-start">
                  <span className="w-3 h-3 bg-gray-400 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                  Automated AWS infrastructure health monitoring with CloudWatch and SNS alerts, reducing outage response times.
                </li>
                <li className="flex items-start">
                  <span className="w-3 h-3 bg-gray-400 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                  Developed IAM policies and Python/Bash scripts for least-privilege access and secure service-to-service communication.
                </li>
                <li className="flex items-start">
                  <span className="w-3 h-3 bg-gray-400 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                  Integrated real-time access tracking and security logs into OpenSearch for thorough user auditing.
                </li>
                <li className="flex items-start">
                  <span className="w-3 h-3 bg-gray-400 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                  Designed IoT data ingestion pipelines with secure role-based access enforcement, demonstrating proficiency in infrastructure automation.
                </li>
              </ul>
            </div>

            <div className="border-l-6 border-blue-500 pl-8 mb-12 transition-opacity duration-700">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                AWS Cloud Operate @ Cognizant Technology Solutions
              </h3>
              <p className="text-sm text-gray-500 mb-6">Mar 2022 – Jul 2023 | Hyderabad, India</p>
              <ul className="space-y-4 text-gray-700 text-lg leading-loose">
                <li className="flex items-start">
                  <span className="w-3 h-3 bg-gray-400 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                  Managed AWS user accounts and IAM roles, conducted periodic access reviews to maintain compliance.
                </li>
                <li className="flex items-start">
                  <span className="w-3 h-3 bg-gray-400 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                  Hardened cloud security by implementing robust IAM policies, enforcing MFA, and logging via CloudTrail.
                </li>
                <li className="flex items-start">
                  <span className="w-3 h-3 bg-gray-400 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                  Deployed infrastructure-as-code using Terraform for standardized resource provisioning.
                </li>
                <li className="flex items-start">
                  <span className="w-3 h-3 bg-gray-400 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                  Investigated identity-related incidents using CloudWatch logs, contributing to continuous security improvements.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education Section - Ultra spaced */}
        <section id="education" className="py-20">
          <h2 className="text-4xl font-semibold text-gray-900 mb-16 text-center">Education</h2>
          <div className="space-y-16 max-w-4xl mx-auto">
            <div className="border-l-6 border-blue-500 pl-8 mb-12 transition-opacity duration-700">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Master of Science in Information Systems @ Saint Louis University
              </h3>
              <p className="text-sm text-gray-500 mb-4">Aug 2024 – May 2025 | St. Louis, MO</p>
              <p className="text-gray-700 text-lg leading-loose">GPA: 8.04/10</p>
            </div>

            <div className="border-l-6 border-blue-500 pl-8 mb-12 transition-opacity duration-700">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Bachelor of Technology in Electronics & Communication Engineering @ GITAM University
              </h3>
              <p className="text-sm text-gray-500 mb-4">Oct 2018 – Jun 2022 | Visakhapatnam, India</p>
              <p className="text-gray-700 text-lg leading-loose">GPA: 8.04/10</p>
            </div>
          </div>
        </section>

        {/* Contact Section - Ultra spaced form */}
        <section id="contact" className="py-20 mb-24">
          <h2 className="text-4xl font-semibold text-gray-900 mb-12 text-center">Get In Touch</h2>
          <p className="text-xl text-gray-700 text-center mb-16 leading-loose max-w-2xl mx-auto">
            I'm always open to discussing new opportunities or interesting projects. Feel free to say hello!
          </p>
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-8">
            <div className="mb-8">
              <label htmlFor="name" className="block text-lg font-medium text-gray-900 mb-4">
                Name *
              </label>
              <Input
                id="name"
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className={`text-lg py-6 ${formErrors.name ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500`}
                required
                aria-label="Name"
              />
              {formErrors.name && (
                <p className="text-red-500 text-base mt-2">{formErrors.name}</p>
              )}
            </div>
            <div className="mb-8">
              <label htmlFor="email" className="block text-lg font-medium text-gray-900 mb-4">
                Email *
              </label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className={`text-lg py-6 ${formErrors.email ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500`}
                required
                aria-label="Email"
              />
              {formErrors.email && (
                <p className="text-red-500 text-base mt-2">{formErrors.email}</p>
              )}
            </div>
            <div className="mb-8">
              <label htmlFor="message" className="block text-lg font-medium text-gray-900 mb-4">
                Message *
              </label>
              <Textarea
                id="message"
                placeholder="Your message (at least 10 characters)"
                rows={6}
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                className={`text-lg ${formErrors.message ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 resize-none`}
                required
              />
              {formErrors.message && (
                <p className="text-red-500 text-base mt-2">{formErrors.message}</p>
              )}
            </div>
            <Button
              type="submit"
              disabled={!isFormValid()}
              className="w-full bg-gray-900 hover:bg-gray-800 text-white font-medium py-6 text-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Send Message"
            >
              Send Message
            </Button>
          </form>
        </section>

        {/* Footer - Ultra spaced */}
        <footer className="py-12 text-center border-t-2 border-gray-200 mt-16">
          <p className="text-gray-500 text-sm">© 2025 Saketh Reddy Sadu. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
