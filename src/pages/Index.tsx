
import React, { useState, useEffect } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Github, Mail, ExternalLink, Award, Users, Code2, Cloud, Shield, Settings, Phone } from "lucide-react";

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

  const awsSkills = [
    'IAM', 'EC2', 'S3', 'VPC', 'RDS', 'Lambda', 'CloudFormation', 'CloudWatch', 
    'SNS', 'SQS', 'EKS', 'ELB', 'Route 53', 'CloudTrail'
  ];

  const azureSkills = [
    'Azure AD (Entra ID)', 'ADFS', 'SSO'
  ];

  const gcpSkills = [
    'Compute Engine', 'IAM'
  ];

  const iacDevOpsSkills = [
    'Terraform', 'CloudFormation', 'Ansible', 'Docker', 'Kubernetes (EKS, Helm)',
    'Jenkins', 'GitHub Actions', 'GitLab CI/CD'
  ];

  const programmingSkills = [
    'Python', 'Bash', 'PowerShell', 'Linux Administration', 'Git'
  ];

  const monitoringSkills = [
    'OpenSearch', 'Prometheus', 'Grafana', 'ELK Stack', 'Nginx', 'Load Balancing',
    'Auto Scaling', 'Monitoring & Logging'
  ];

  const securitySkills = [
    'RBAC', 'MFA', 'PIM', 'Conditional Access', 'Backup & Disaster Recovery',
    'Incident Response'
  ];

  const managementSkills = [
    'Agile/Scrum', 'Confluence', 'JIRA', 'ServiceNow'
  ];

  const certifications = [
    {
      name: "AWS Cloud Practitioner",
      status: "Certified",
      description: "Foundational understanding of AWS cloud concepts and services"
    }
  ];

  const achievements = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Cost Optimization Initiative",
      description: "Reduced AWS infrastructure costs by 35% through resource optimization and right-sizing"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Collaboration",
      description: "Led cross-functional teams in implementing DevOps best practices across multiple projects"
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Automation Excellence",
      description: "Automated 90% of manual deployment processes, reducing deployment time from hours to minutes"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm transition-all duration-200 ${
        isScrolled ? 'shadow-sm border-b border-gray-200' : ''
      }`}>
        <div className="max-w-4xl mx-auto px-6 py-4">
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
      <div className="max-w-6xl mx-auto px-6">
        {/* Hero Section - Updated with new photo and floating text */}
        <section id="hero" className="pt-24 pb-20 relative overflow-hidden">
          {/* Floating text elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-32 left-8 text-blue-100 text-sm font-medium animate-pulse">
              <Cloud className="w-6 h-6 inline mr-2" />
              Cloud Infrastructure
            </div>
            <div className="absolute top-48 right-12 text-green-100 text-sm font-medium animate-pulse delay-1000">
              <Settings className="w-6 h-6 inline mr-2" />
              DevOps Automation
            </div>
            <div className="absolute bottom-32 left-16 text-purple-100 text-sm font-medium animate-pulse delay-2000">
              <Shield className="w-6 h-6 inline mr-2" />
              Security Best Practices
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[70vh] relative z-10">
            {/* Left Column - Content */}
            <div className="space-y-8 lg:pr-8">
              <div className="space-y-6">
                <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                  Saketh Reddy Sadu
                </h1>
                <h2 className="text-2xl lg:text-3xl text-gray-600 leading-relaxed font-medium">
                  DevOps Engineer specializing in Cloud Infrastructure & Security
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed max-w-lg">
                  Experienced in automating cloud infrastructure, implementing security best practices, and optimizing system reliability through modern DevOps methodologies.
                </p>
              </div>
              
              <div className="flex space-x-6 pt-6">
                <a
                  href="https://github.com/Saketh2406"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 transform hover:scale-110 transition-all duration-200"
                  aria-label="GitHub"
                >
                  <Github size={36} />
                </a>
                <a
                  href="mailto:sakethsadu@gmail.com"
                  className="text-gray-600 hover:text-gray-900 transform hover:scale-110 transition-all duration-200"
                  aria-label="Email"
                >
                  <Mail size={36} />
                </a>
                <a
                  href="tel:3143350950"
                  className="text-gray-600 hover:text-gray-900 transform hover:scale-110 transition-all duration-200"
                  aria-label="Phone"
                >
                  <Phone size={36} />
                </a>
              </div>
              
              <div className="space-y-3 pt-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-gray-600" />
                  <a 
                    href="mailto:sakethsadu@gmail.com"
                    className="text-lg text-gray-700 hover:text-blue-600 transition-colors duration-200"
                  >
                    sakethsadu@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-gray-600" />
                  <a 
                    href="tel:3143350950"
                    className="text-lg text-gray-700 hover:text-blue-600 transition-colors duration-200"
                  >
                    (314) 335-0950
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Professional Photo */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-96 h-[500px] lg:w-[450px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  <img 
                    src="/lovable-uploads/3f2821ca-341d-4a8d-9a5a-e06f77c06882.png" 
                    alt="Saketh Reddy Sadu - Professional DevOps Engineer" 
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-100 rounded-full opacity-60 animate-pulse"></div>
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-gray-100 rounded-full opacity-40 animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 -right-4 w-16 h-16 bg-green-100 rounded-full opacity-50 animate-pulse delay-2000"></div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">About Me</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed text-center mb-8">
              DevOps Engineer with experience in automating cloud infrastructure using IaC tools like Terraform and Jenkins. 
              Demonstrated expertise in managing secure environments, optimizing cloud expenditures, and enforcing robust IAM policies.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed text-center">
              Proven ability in implementing continuous integration pipelines and infrastructure automation to streamline deployments 
              and enhance system reliability across AWS, Azure, and GCP platforms.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-16 text-center">Skills & Expertise</h2>
          
          <div className="space-y-12">
            {/* AWS Skills */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-800 text-center">Amazon Web Services (AWS)</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {awsSkills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="py-3 px-4 text-center border-blue-200 text-blue-700 hover:bg-blue-50 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Azure & GCP */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-800 text-center">Microsoft Azure</h3>
                <div className="grid grid-cols-1 gap-4">
                  {azureSkills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="py-3 px-4 text-center border-indigo-200 text-indigo-700 hover:bg-indigo-50 transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-800 text-center">Google Cloud Platform (GCP)</h3>
                <div className="grid grid-cols-1 gap-4">
                  {gcpSkills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="py-3 px-4 text-center border-green-200 text-green-700 hover:bg-green-50 transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Infrastructure & DevOps */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-800 text-center">Infrastructure as Code & DevOps</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {iacDevOpsSkills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="py-3 px-4 text-center border-purple-200 text-purple-700 hover:bg-purple-50 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Programming & Scripting */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-800 text-center">Programming & Scripting</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {programmingSkills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="py-3 px-4 text-center border-orange-200 text-orange-700 hover:bg-orange-50 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Monitoring & Observability */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-800 text-center">Monitoring & Observability</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {monitoringSkills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="py-3 px-4 text-center border-teal-200 text-teal-700 hover:bg-teal-50 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Security & Compliance */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-800 text-center">Security & Compliance</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {securitySkills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="py-3 px-4 text-center border-red-200 text-red-700 hover:bg-red-50 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Project Management */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-800 text-center">Project Management & Collaboration</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {managementSkills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="py-3 px-4 text-center border-gray-300 text-gray-700 hover:bg-gray-100 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="py-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-12 text-center">Certifications</h2>
          <div className="flex justify-center">
            <Card className="hover:shadow-lg transition-shadow duration-200 border-gray-200 max-w-sm">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-lg font-semibold text-gray-900">{certifications[0].name}</CardTitle>
                <Badge 
                  variant="default"
                  className="mx-auto mt-2 bg-green-100 text-green-800"
                >
                  {certifications[0].status}
                </Badge>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm text-center leading-relaxed">{certifications[0].description}</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="py-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-12 text-center">Key Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-200 border-gray-200 text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                    {achievement.icon}
                  </div>
                  <CardTitle className="text-lg font-semibold text-gray-900">{achievement.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-12">
          <h2 className="text-3xl font-semibold text-gray-900 mb-12 text-center">Selected Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-200 border-gray-200">
              <div className="aspect-video bg-gray-100 rounded-t-lg flex items-center justify-center">
                <span className="text-gray-500">CloudOps Dashboard</span>
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  CloudOps Dashboard & IAM Monitoring Automation (2024)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Developed IAM user access monitoring with AWS Lambda and Python to track anomalies and enforce 
                  least-privilege roles. Implemented audit log aggregation from IAM and CloudTrail using OpenSearch 
                  for real-time access tracking. Integrated multi-factor access audit and notification system using 
                  SNS for security rule violations.
                </p>
                <a
                  href="https://github.com/saketh-reddy/CloudOpsDashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center gap-1 transition-colors duration-200"
                >
                  View on GitHub <ExternalLink size={16} />
                </a>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-200 border-gray-200">
              <div className="aspect-video bg-gray-100 rounded-t-lg flex items-center justify-center">
                <span className="text-gray-500">Go Web App on EKS</span>
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  DevOpsified Go Web App on AWS EKS
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Dockerized a Go-based web application and deployed it on AWS EKS using eksctl and Kubernetes 
                  best practices. Configured Deployment, Service, and Ingress resources with NGINX Ingress 
                  Controller and AWS Load Balancer. Streamlined infrastructure setup with YAML manifests and 
                  exposed the app via a custom domain.
                </p>
                <a
                  href="https://github.com/saketh-reddy/GoWebAppEKS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center gap-1 transition-colors duration-200"
                >
                  View on GitHub <ExternalLink size={16} />
                </a>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-12">
          <h2 className="text-3xl font-semibold text-gray-900 mb-12 text-center">Experience</h2>
          <div className="space-y-12 max-w-3xl mx-auto">
            <div className="border-l-4 border-blue-600 pl-6 opacity-100 transition-opacity duration-500">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                AWS Cloud Test Engineer Intern @ Nurtur Energy
              </h3>
              <p className="text-sm text-gray-500 mb-4">May 2024 – Jul 2024 | Maryland Heights, Missouri, USA</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                  Automated AWS infrastructure health monitoring using CloudWatch and SNS alerts, reducing outage response times and supporting real-time system reliability.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                  Developed IAM policies and crafted Python/Bash scripts for least-privilege access and secure service-to-service communication, aligning with rigorous security practices.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                  Integrated real-time access tracking and security logs into OpenSearch for comprehensive user behavior auditing, reinforcing compliance measures.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                  Designed and maintained IoT data ingestion pipelines with secure role-based access enforcement, demonstrating proficiency in infrastructure automation and continuous integration principles.
                </li>
              </ul>
            </div>

            <div className="border-l-4 border-blue-600 pl-6 opacity-100 transition-opacity duration-500">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                AWS Cloud Operate @ Cognizant Technology Solutions Corporation
              </h3>
              <p className="text-sm text-gray-500 mb-4">Mar 2022 – Jul 2023 | Hyderabad, India</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                  Managed user accounts and IAM roles across AWS environments, conducting periodic access reviews to maintain compliance with security frameworks.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                  Enhanced cloud security posture by implementing robust IAM policies, enforcing MFA, and logging activities via CloudTrail to uphold industry-standard practices.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                  Facilitated infrastructure-as-code deployments using Terraform for consistent and automated resource provisioning.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                  Investigated identity-related incidents leveraging CloudWatch metrics and logs, contributing to a zero-trust security approach and continuous operational improvements.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-12">
          <h2 className="text-3xl font-semibold text-gray-900 mb-12 text-center">Education</h2>
          <div className="space-y-8 max-w-3xl mx-auto">
            <div className="border-l-4 border-blue-600 pl-6 opacity-100 transition-opacity duration-500">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Master of Science in Information Systems @ Saint Louis University
              </h3>
              <p className="text-sm text-gray-500 mb-2">Aug 2024 – May 2025 | St. Louis, MO</p>
              <p className="text-gray-700">GPA: 8.04/10</p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6 opacity-100 transition-opacity duration-500">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Bachelor of Technology in Electronics and Communication Engineering @ GITAM Deemed to be University
              </h3>
              <p className="text-sm text-gray-500 mb-2">Oct 2018 – Jun 2022 | Visakhapatnam, India</p>
              <p className="text-gray-700">GPA: 8.04/10</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 mb-20">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">Get In Touch</h2>
          <p className="text-lg text-gray-700 text-center mb-12">
            I'm always open to discussing new opportunities or interesting projects. Feel free to say hello!
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
                aria-label="Name"
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
                aria-label="Email"
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
                placeholder="Your message (at least 10 characters)"
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
        <footer className="py-8 text-center border-t border-gray-200">
          <p className="text-gray-500">© 2025 Saketh Reddy Sadu. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
