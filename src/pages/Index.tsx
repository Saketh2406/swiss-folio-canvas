import React, { useState, useEffect } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useToast } from "@/hooks/use-toast";
import { 
  Github, 
  Mail, 
  ExternalLink, 
  Award, 
  Users, 
  Code2, 
  Cloud, 
  Shield, 
  Settings, 
  Phone, 
  ChevronLeft, 
  ChevronRight, 
  Linkedin,
  Server,
  Database,
  Network,
  Zap,
  Box,
  Layers,
  GitBranch,
  Terminal,
  Monitor,
  BarChart3,
  Activity,
  Search,
  ShieldCheck,
  MapPin,
  Calendar,
  GraduationCap,
  Building2
} from "lucide-react";

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
      // Create mailto link with form data
      const subject = encodeURIComponent(`Portfolio Contact: Message from ${formData.name}`);
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
      const mailtoLink = `mailto:sakethsadu@gmail.com?subject=${subject}&body=${body}`;
      
      // Open default email client
      window.location.href = mailtoLink;
      
      toast({
        title: "Email client opened!",
        description: "Your default email application should now be open with the message pre-filled.",
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

  const projects = [
    {
      id: 1,
      title: "CloudOps Dashboard & IAM Monitoring Automation (2024)",
      description: "Developed IAM user access monitoring with AWS Lambda and Python to track anomalies and enforce least-privilege roles. Implemented audit log aggregation from IAM and CloudTrail using OpenSearch for real-time access tracking. Integrated multi-factor access audit and notification system using SNS for security rule violations.",
      link: "https://github.com/Saketh2406/CloudOpsDashboard",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
      alt: "CloudOps Dashboard interface showing monitoring data"
    },
    {
      id: 2,
      title: "DevOpsified Go Web App on AWS EKS",
      description: "Dockerized a Go-based web application and deployed it on AWS EKS using eksctl and Kubernetes best practices. Configured Deployment, Service, and Ingress resources with NGINX Ingress Controller and AWS Load Balancer. Streamlined infrastructure setup with YAML manifests and exposed the app via a custom domain.",
      link: "https://github.com/Saketh2406/GoWebAppEKS",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=400&fit=crop",
      alt: "Kubernetes deployment dashboard showing EKS cluster"
    },
    {
      id: 3,
      title: "Southwest Airlines Intelligent Operations Platform",
      description: "Designing a cloud-native operations command center platform using AWS services to improve Southwest Airlines' operational efficiency. Implementing real-time data analytics with AWS Kinesis, secure microservices architecture with EKS, and automated incident response workflows. Features include predictive maintenance alerts, flight optimization algorithms, and comprehensive security monitoring with CloudTrail and GuardDuty.",
      link: "https://github.com/Saketh2406/southwest-ops-platform",
      image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=800&h=400&fit=crop",
      alt: "Airline operations control center with multiple monitoring screens",
      inProgress: true
    },
    {
      id: 4,
      title: "T-Mobile DevOps Microservice Application",
      description: "A cloud-native microservice application built using Node.js and containerized with Docker, deployed on Amazon EC2, and managed with a full GitLab CI/CD pipeline. The project demonstrates core DevOps skills including infrastructure provisioning with Terraform, reverse proxy setup using NGINX, and automation using Ansible. Designed and deployed a RESTful microservice app on EC2 with automated builds and deployments.",
      link: "https://github.com/Saketh2406/tmobile-devops-microservice",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
      alt: "DevOps microservice architecture diagram"
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
      <div className="max-w-6xl mx-auto px-4 py-4">
        {/* Hero Section */}
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
                  href="tel:+13143350950"
                  className="text-gray-600 hover:text-gray-900 transform hover:scale-110 transition-all duration-200"
                  aria-label="Phone"
                >
                  <Phone size={36} />
                </a>
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
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {[
                  { name: 'IAM', icon: <Shield className="w-8 h-8" />, borderColor: 'border-blue-500' },
                  { name: 'EC2', icon: <Server className="w-8 h-8" />, borderColor: 'border-orange-500' },
                  { name: 'S3', icon: <Database className="w-8 h-8" />, borderColor: 'border-green-500' },
                  { name: 'VPC', icon: <Network className="w-8 h-8" />, borderColor: 'border-purple-500' },
                  { name: 'RDS', icon: <Database className="w-8 h-8" />, borderColor: 'border-indigo-500' },
                  { name: 'Lambda', icon: <Zap className="w-8 h-8" />, borderColor: 'border-yellow-500' },
                  { name: 'CloudFormation', icon: <Layers className="w-8 h-8" />, borderColor: 'border-red-500' },
                  { name: 'CloudWatch', icon: <Activity className="w-8 h-8" />, borderColor: 'border-pink-500' },
                  { name: 'SNS', icon: <Mail className="w-8 h-8" />, borderColor: 'border-teal-500' },
                  { name: 'SQS', icon: <Box className="w-8 h-8" />, borderColor: 'border-cyan-500' },
                  { name: 'EKS', icon: <Settings className="w-8 h-8" />, borderColor: 'border-emerald-500' },
                  { name: 'ELB', icon: <Network className="w-8 h-8" />, borderColor: 'border-amber-500' },
                  { name: 'Route 53', icon: <Search className="w-8 h-8" />, borderColor: 'border-rose-500' },
                  { name: 'CloudTrail', icon: <BarChart3 className="w-8 h-8" />, borderColor: 'border-violet-500' }
                ].map((skill) => (
                  <div
                    key={skill.name}
                    className={`bg-white border-2 ${skill.borderColor} rounded-2xl p-6 flex flex-col items-center space-y-3 hover:scale-105 transition-transform duration-200 cursor-default shadow-sm`}
                  >
                    <div className="text-gray-700">
                      {skill.icon}
                    </div>
                    <span className="text-sm font-medium text-gray-900 text-center">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Azure & GCP */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-800 text-center">Microsoft Azure</h3>
                <div className="grid grid-cols-1 gap-4">
                  {[
                    { name: 'Azure AD (Entra ID)', icon: <Shield className="w-8 h-8" />, borderColor: 'border-blue-600' },
                    { name: 'ADFS', icon: <Users className="w-8 h-8" />, borderColor: 'border-indigo-600' },
                    { name: 'SSO', icon: <ShieldCheck className="w-8 h-8" />, borderColor: 'border-purple-600' }
                  ].map((skill) => (
                    <div
                      key={skill.name}
                      className={`bg-white border-2 ${skill.borderColor} rounded-2xl p-6 flex flex-col items-center space-y-3 hover:scale-105 transition-transform duration-200 cursor-default shadow-sm`}
                    >
                      <div className="text-gray-700">
                        {skill.icon}
                      </div>
                      <span className="text-sm font-medium text-gray-900 text-center">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-800 text-center">Google Cloud Platform (GCP)</h3>
                <div className="grid grid-cols-1 gap-4">
                  {[
                    { name: 'Compute Engine', icon: <Server className="w-8 h-8" />, borderColor: 'border-green-600' },
                    { name: 'IAM', icon: <Shield className="w-8 h-8" />, borderColor: 'border-emerald-600' }
                  ].map((skill) => (
                    <div
                      key={skill.name}
                      className={`bg-white border-2 ${skill.borderColor} rounded-2xl p-6 flex flex-col items-center space-y-3 hover:scale-105 transition-transform duration-200 cursor-default shadow-sm`}
                    >
                      <div className="text-gray-700">
                        {skill.icon}
                      </div>
                      <span className="text-sm font-medium text-gray-900 text-center">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Infrastructure & DevOps */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-800 text-center">Infrastructure as Code & DevOps</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {[
                  { name: 'Terraform', icon: <Layers className="w-8 h-8" />, borderColor: 'border-purple-600' },
                  { name: 'CloudFormation', icon: <Cloud className="w-8 h-8" />, borderColor: 'border-orange-600' },
                  { name: 'Ansible', icon: <Settings className="w-8 h-8" />, borderColor: 'border-red-600' },
                  { name: 'Docker', icon: <Box className="w-8 h-8" />, borderColor: 'border-blue-600' },
                  { name: 'Kubernetes', icon: <Network className="w-8 h-8" />, borderColor: 'border-indigo-600' },
                  { name: 'Jenkins', icon: <GitBranch className="w-8 h-8" />, borderColor: 'border-gray-600' },
                  { name: 'GitHub Actions', icon: <Code2 className="w-8 h-8" />, borderColor: 'border-green-600' },
                  { name: 'GitLab CI/CD', icon: <GitBranch className="w-8 h-8" />, borderColor: 'border-orange-500' }
                ].map((skill) => (
                  <div
                    key={skill.name}
                    className={`bg-white border-2 ${skill.borderColor} rounded-2xl p-6 flex flex-col items-center space-y-3 hover:scale-105 transition-transform duration-200 cursor-default shadow-sm`}
                  >
                    <div className="text-gray-700">
                      {skill.icon}
                    </div>
                    <span className="text-sm font-medium text-gray-900 text-center">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Programming & Scripting */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-800 text-center">Programming & Scripting</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  { name: 'Python', icon: <Code2 className="w-8 h-8" />, borderColor: 'border-yellow-600' },
                  { name: 'Bash', icon: <Terminal className="w-8 h-8" />, borderColor: 'border-gray-700' },
                  { name: 'PowerShell', icon: <Terminal className="w-8 h-8" />, borderColor: 'border-blue-700' },
                  { name: 'Linux Administration', icon: <Monitor className="w-8 h-8" />, borderColor: 'border-green-700' },
                  { name: 'Git', icon: <GitBranch className="w-8 h-8" />, borderColor: 'border-orange-700' }
                ].map((skill) => (
                  <div
                    key={skill.name}
                    className={`bg-white border-2 ${skill.borderColor} rounded-2xl p-6 flex flex-col items-center space-y-3 hover:scale-105 transition-transform duration-200 cursor-default shadow-sm`}
                  >
                    <div className="text-gray-700">
                      {skill.icon}
                    </div>
                    <span className="text-sm font-medium text-gray-900 text-center">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Monitoring & Observability */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-800 text-center">Monitoring & Observability</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  { name: 'OpenSearch', icon: <Search className="w-8 h-8" />, borderColor: 'border-teal-600' },
                  { name: 'Prometheus', icon: <BarChart3 className="w-8 h-8" />, borderColor: 'border-orange-600' },
                  { name: 'Grafana', icon: <Activity className="w-8 h-8" />, borderColor: 'border-orange-500' },
                  { name: 'ELK Stack', icon: <Database className="w-8 h-8" />, borderColor: 'border-yellow-700' },
                  { name: 'Nginx', icon: <Server className="w-8 h-8" />, borderColor: 'border-green-600' },
                  { name: 'Load Balancing', icon: <Network className="w-8 h-8" />, borderColor: 'border-purple-600' }
                ].map((skill) => (
                  <div
                    key={skill.name}
                    className={`bg-white border-2 ${skill.borderColor} rounded-2xl p-6 flex flex-col items-center space-y-3 hover:scale-105 transition-transform duration-200 cursor-default shadow-sm`}
                  >
                    <div className="text-gray-700">
                      {skill.icon}
                    </div>
                    <span className="text-sm font-medium text-gray-900 text-center">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Security & Compliance */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-800 text-center">Security & Compliance</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  { name: 'RBAC', icon: <Shield className="w-8 h-8" />, borderColor: 'border-red-600' },
                  { name: 'MFA', icon: <ShieldCheck className="w-8 h-8" />, borderColor: 'border-red-500' },
                  { name: 'PIM', icon: <Users className="w-8 h-8" />, borderColor: 'border-pink-600' },
                  { name: 'Conditional Access', icon: <Shield className="w-8 h-8" />, borderColor: 'border-rose-600' },
                  { name: 'Backup & Disaster Recovery', icon: <Database className="w-8 h-8" />, borderColor: 'border-indigo-700' },
                  { name: 'Incident Response', icon: <Activity className="w-8 h-8" />, borderColor: 'border-red-700' }
                ].map((skill) => (
                  <div
                    key={skill.name}
                    className={`bg-white border-2 ${skill.borderColor} rounded-2xl p-6 flex flex-col items-center space-y-3 hover:scale-105 transition-transform duration-200 cursor-default shadow-sm`}
                  >
                    <div className="text-gray-700">
                      {skill.icon}
                    </div>
                    <span className="text-sm font-medium text-gray-900 text-center">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Project Management */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-800 text-center">Project Management & Collaboration</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  { name: 'Agile/Scrum', icon: <Users className="w-8 h-8" />, borderColor: 'border-gray-600' },
                  { name: 'Confluence', icon: <Settings className="w-8 h-8" />, borderColor: 'border-blue-600' },
                  { name: 'JIRA', icon: <BarChart3 className="w-8 h-8" />, borderColor: 'border-blue-700' },
                  { name: 'ServiceNow', icon: <Settings className="w-8 h-8" />, borderColor: 'border-green-600' }
                ].map((skill) => (
                  <div
                    key={skill.name}
                    className={`bg-white border-2 ${skill.borderColor} rounded-2xl p-6 flex flex-col items-center space-y-3 hover:scale-105 transition-transform duration-200 cursor-default shadow-sm`}
                  >
                    <div className="text-gray-700">
                      {skill.icon}
                    </div>
                    <span className="text-sm font-medium text-gray-900 text-center">{skill.name}</span>
                  </div>
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
                  <CardTitle className="text-lg font-semibold text-gray-900 leading-tight">
                    {achievement.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Projects Section with Carousel */}
        <section id="projects" className="py-12">
          <h2 className="text-3xl font-semibold text-gray-900 mb-12 text-center">Selected Projects</h2>
          <div className="relative max-w-5xl mx-auto">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {projects.map((project) => (
                  <CarouselItem key={project.id} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                    <Card className="hover:shadow-lg transition-shadow duration-200 border-gray-200 h-full relative">
                      {project.inProgress && (
                        <Badge 
                          className="absolute top-4 right-4 z-10 bg-yellow-100 text-yellow-800 border-yellow-300"
                        >
                          In Progress
                        </Badge>
                      )}
                      <div className="aspect-video bg-gray-100 rounded-t-lg overflow-hidden">
                        <img 
                          src={project.image} 
                          alt={project.alt}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle className="text-lg font-semibold text-gray-900 leading-tight">
                          {project.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="flex-1 flex flex-col">
                        <p className="text-gray-700 leading-relaxed mb-4 flex-1">
                          {project.description}
                        </p>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center gap-1 transition-colors duration-200 mt-auto"
                          aria-label={`View ${project.title} on GitHub`}
                        >
                          View on GitHub <ExternalLink size={16} />
                        </a>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious 
                className="absolute -left-12 top-1/2 -translate-y-1/2 bg-white border-gray-300 hover:bg-gray-50"
                aria-label="Previous project"
              />
              <CarouselNext 
                className="absolute -right-12 top-1/2 -translate-y-1/2 bg-white border-gray-300 hover:bg-gray-50"
                aria-label="Next project"
              />
            </Carousel>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-12 text-center">Experience</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="hover:shadow-lg transition-shadow duration-200 border-gray-200">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-semibold text-gray-900">
                        AWS Cloud Test Engineer Intern
                      </CardTitle>
                      <p className="text-lg text-blue-600 font-medium">Nurtur Energy</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-sm">
                    Internship
                  </Badge>
                </div>
                <div className="flex items-center space-x-4 text-gray-600 mt-2">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">May 2024 – Jul 2024</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">Maryland Heights, Missouri, USA</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                    Automated AWS infrastructure health monitoring using CloudWatch and SNS alerts, reducing outage response times and supporting real-time system reliability.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                    Developed IAM policies and crafted Python/Bash scripts for least-privilege access and secure service-to-service communication, aligning with rigorous security practices.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                    Integrated real-time access tracking and security logs into OpenSearch for comprehensive user behavior auditing, reinforcing compliance measures.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                    Designed and maintained IoT data ingestion pipelines with secure role-based access enforcement, demonstrating proficiency in infrastructure automation and continuous integration principles.
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-200 border-gray-200">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-semibold text-gray-900">
                        AWS Cloud Operate
                      </CardTitle>
                      <p className="text-lg text-green-600 font-medium">Cognizant Technology Solutions Corporation</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-sm">
                    Full-time
                  </Badge>
                </div>
                <div className="flex items-center space-x-4 text-gray-600 mt-2">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">Mar 2022 – Jul 2023</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">Hyderabad, India</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                    Managed user accounts and IAM roles across AWS environments, conducting periodic access reviews to maintain compliance with security frameworks.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                    Enhanced cloud security posture by implementing robust IAM policies, enforcing MFA, and logging activities via CloudTrail to uphold industry-standard practices.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                    Facilitated infrastructure-as-code deployments using Terraform for consistent and automated resource provisioning.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                    Investigated identity-related incidents leveraging CloudWatch metrics and logs, contributing to a zero-trust security approach and continuous operational improvements.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-12 text-center">Education</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="hover:shadow-lg transition-shadow duration-200 border-gray-200">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-semibold text-gray-900">
                        Master of Science in Information Systems
                      </CardTitle>
                      <p className="text-lg text-purple-600 font-medium">Saint Louis University</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-sm">
                    Master's
                  </Badge>
                </div>
                <div className="flex items-center space-x-4 text-gray-600 mt-2">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">Aug 2024 – May 2025</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">St. Louis, MO</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <p className="text-gray-700">
                    Advanced coursework in information systems, database management, and enterprise architecture.
                  </p>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">GPA</p>
                    <p className="text-lg font-semibold text-gray-900">8.04/10</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-200 border-gray-200">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-semibold text-gray-900">
                        Bachelor of Technology in Electronics and Communication Engineering
                      </CardTitle>
                      <p className="text-lg text-orange-600 font-medium">GITAM Deemed to be University</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-sm">
                    Bachelor's
                  </Badge>
                </div>
                <div className="flex items-center space-x-4 text-gray-600 mt-2">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">Oct 2018 – Jun 2022</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">Visakhapatnam, India</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <p className="text-gray-700">
                    Comprehensive study of electronics, communication systems, signal processing, and digital circuits.
                  </p>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">GPA</p>
                    <p className="text-lg font-semibold text-gray-900">8.04/10</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 mb-20">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">Let's Connect</h2>
          <p className="text-lg text-gray-700 text-center mb-12">
            Feel free to reach out through any of these channels
          </p>
          <div className="max-w-lg mx-auto">
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center justify-center space-x-4 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                <Mail className="w-6 h-6 text-gray-600" />
                <div className="text-center">
                  <p className="text-sm text-gray-500 mb-1">Email</p>
                  <a 
                    href="mailto:sakethsadu@gmail.com"
                    className="text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors duration-200"
                  >
                    sakethsadu@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center justify-center space-x-4 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                <Phone className="w-6 h-6 text-gray-600" />
                <div className="text-center">
                  <p className="text-sm text-gray-500 mb-1">Phone</p>
                  <a 
                    href="tel:+13143350950"
                    className="text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors duration-200"
                  >
                    +1 (314) 335-0950
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-center justify-center space-x-4 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                <Linkedin className="w-6 h-6 text-gray-600" />
                <div className="text-center">
                  <p className="text-sm text-gray-500 mb-1">LinkedIn</p>
                  <a 
                    href="https://linkedin.com/in/saketh-reddy-sadu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors duration-200"
                  >
                    linkedin.com/in/saketh-reddy-sadu
                  </a>
                </div>
              </div>
            </div>
          </div>
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
