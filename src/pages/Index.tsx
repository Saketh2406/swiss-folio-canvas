
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ExternalLink, Download, MapPin, Calendar, Building2, GraduationCap, Code, Database, Globe, Server, Cloud, Wrench } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-gray-900">Sai Teja</div>
            <nav className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
              <a href="#skills" className="text-gray-700 hover:text-blue-600 transition-colors">Skills</a>
              <a href="#projects" className="text-gray-700 hover:text-blue-600 transition-colors">Projects</a>
              <a href="#experience" className="text-gray-700 hover:text-blue-600 transition-colors">Experience</a>
              <a href="#education" className="text-gray-700 hover:text-blue-600 transition-colors">Education</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <img
              src="/lovable-uploads/e3d7fb80-60f6-4a27-b75e-aeefb76b6d82.png"
              alt="Sai Teja"
              className="w-48 h-48 rounded-full mx-auto object-cover shadow-lg"
            />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Hi, I'm <span className="text-blue-600">Sai Teja</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            A passionate Full Stack Developer with expertise in modern web technologies and cloud solutions.
            I love creating innovative digital experiences that make a difference.
          </p>
          <div className="flex justify-center space-x-4 mb-8">
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
            <Button variant="outline">
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Button>
          </div>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Github className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I'm a dedicated developer with a passion for creating efficient, scalable, and user-friendly applications.
              With experience in both frontend and backend technologies, I enjoy tackling complex problems and
              turning ideas into reality.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">My Journey</h3>
              <p className="text-gray-600 mb-6">
                Started my journey in web development with a curiosity about how things work behind the scenes.
                Over the years, I've evolved from writing simple HTML pages to building complex full-stack applications
                using modern frameworks and cloud technologies.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Code className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">Clean, maintainable code</span>
                </div>
                <div className="flex items-center">
                  <Database className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">Database design & optimization</span>
                </div>
                <div className="flex items-center">
                  <Cloud className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">Cloud architecture & deployment</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <img
                src="/lovable-uploads/3f2821ca-341d-4a8d-9a5a-e06f77c06882.png"
                alt="About"
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
            <p className="text-xl text-gray-600">The tools and technologies I work with</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-orange-500">
              <div className="flex flex-col items-center text-center">
                <Globe className="h-8 w-8 text-orange-500 mb-3" />
                <span className="font-medium text-gray-700">HTML</span>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-blue-500">
              <div className="flex flex-col items-center text-center">
                <Code className="h-8 w-8 text-blue-500 mb-3" />
                <span className="font-medium text-gray-700">CSS</span>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-yellow-500">
              <div className="flex flex-col items-center text-center">
                <Code className="h-8 w-8 text-yellow-500 mb-3" />
                <span className="font-medium text-gray-700">JavaScript</span>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-blue-400">
              <div className="flex flex-col items-center text-center">
                <Code className="h-8 w-8 text-blue-400 mb-3" />
                <span className="font-medium text-gray-700">React</span>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-green-500">
              <div className="flex flex-col items-center text-center">
                <Server className="h-8 w-8 text-green-500 mb-3" />
                <span className="font-medium text-gray-700">Node.js</span>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-purple-500">
              <div className="flex flex-col items-center text-center">
                <Database className="h-8 w-8 text-purple-500 mb-3" />
                <span className="font-medium text-gray-700">MongoDB</span>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-red-500">
              <div className="flex flex-col items-center text-center">
                <Database className="h-8 w-8 text-red-500 mb-3" />
                <span className="font-medium text-gray-700">MySQL</span>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-indigo-500">
              <div className="flex flex-col items-center text-center">
                <Code className="h-8 w-8 text-indigo-500 mb-3" />
                <span className="font-medium text-gray-700">Python</span>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-pink-500">
              <div className="flex flex-col items-center text-center">
                <Code className="h-8 w-8 text-pink-500 mb-3" />
                <span className="font-medium text-gray-700">Java</span>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-teal-500">
              <div className="flex flex-col items-center text-center">
                <Cloud className="h-8 w-8 text-teal-500 mb-3" />
                <span className="font-medium text-gray-700">AWS</span>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-gray-500">
              <div className="flex flex-col items-center text-center">
                <Wrench className="h-8 w-8 text-gray-500 mb-3" />
                <span className="font-medium text-gray-700">Git</span>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-cyan-500">
              <div className="flex flex-col items-center text-center">
                <Server className="h-8 w-8 text-cyan-500 mb-3" />
                <span className="font-medium text-gray-700">Docker</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600">Some of my recent work</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  T-Mobile DevOps Microservice Application
                  <div className="flex space-x-2">
                    <Button size="sm" variant="ghost">
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="ghost">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </CardTitle>
                <CardDescription>
                  A cloud-native microservice application built using Node.js and containerized with Docker, deployed on Amazon EC2, and managed with a full GitLab CI/CD pipeline.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm text-gray-700 mb-2">🔧 Tools & Technologies:</h4>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge variant="secondary">Node.js</Badge>
                      <Badge variant="secondary">Express.js</Badge>
                      <Badge variant="secondary">Docker</Badge>
                      <Badge variant="secondary">GitLab CI/CD</Badge>
                      <Badge variant="secondary">Terraform</Badge>
                      <Badge variant="secondary">Ansible</Badge>
                      <Badge variant="secondary">AWS EC2</Badge>
                      <Badge variant="secondary">NGINX</Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-gray-700 mb-2">🔍 Key Highlights:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Designed and deployed a RESTful microservice app on EC2</li>
                      <li>• Configured NGINX as a reverse proxy for clean routing</li>
                      <li>• Built a CI/CD pipeline using .gitlab-ci.yml for automated builds</li>
                      <li>• Wrote Terraform scripts for one-click EC2 provisioning</li>
                      <li>• Used Ansible for remote configuration management</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  E-Commerce Platform
                  <div className="flex space-x-2">
                    <Button size="sm" variant="ghost">
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="ghost">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </CardTitle>
                <CardDescription>
                  A full-stack e-commerce solution with React frontend and Node.js backend
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">MongoDB</Badge>
                  <Badge variant="secondary">Stripe API</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Task Management App
                  <div className="flex space-x-2">
                    <Button size="sm" variant="ghost">
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="ghost">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </CardTitle>
                <CardDescription>
                  A collaborative task management application with real-time updates
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Socket.io</Badge>
                  <Badge variant="secondary">Express</Badge>
                  <Badge variant="secondary">PostgreSQL</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Work Experience</h2>
            <p className="text-xl text-gray-600">My professional journey</p>
          </div>
          
          <div className="space-y-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Building2 className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">Senior Full Stack Developer</h3>
                        <p className="text-blue-600 font-medium">Tech Solutions Inc.</p>
                      </div>
                      <div className="flex items-center text-gray-500 mt-2 md:mt-0">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span className="text-sm">Jan 2022 - Present</span>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-500 mt-2">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">San Francisco, CA</span>
                    </div>
                    <p className="text-gray-600 mt-4">
                      Lead development of scalable web applications using React and Node.js. 
                      Architected microservices infrastructure and mentored junior developers.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <Building2 className="h-6 w-6 text-green-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">Full Stack Developer</h3>
                        <p className="text-green-600 font-medium">Digital Innovations Ltd.</p>
                      </div>
                      <div className="flex items-center text-gray-500 mt-2 md:mt-0">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span className="text-sm">Jun 2020 - Dec 2021</span>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-500 mt-2">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">New York, NY</span>
                    </div>
                    <p className="text-gray-600 mt-4">
                      Developed and maintained multiple client projects using modern web technologies. 
                      Collaborated with design teams to implement responsive user interfaces.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Building2 className="h-6 w-6 text-purple-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">Junior Developer</h3>
                        <p className="text-purple-600 font-medium">StartUp Ventures</p>
                      </div>
                      <div className="flex items-center text-gray-500 mt-2 md:mt-0">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span className="text-sm">Jan 2019 - May 2020</span>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-500 mt-2">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">Austin, TX</span>
                    </div>
                    <p className="text-gray-600 mt-4">
                      Started my professional journey building responsive websites and learning 
                      full-stack development practices in a fast-paced startup environment.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
            <p className="text-xl text-gray-600">My academic background</p>
          </div>
          
          <div className="space-y-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <GraduationCap className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">Master of Science in Computer Science</h3>
                        <p className="text-blue-600 font-medium">Stanford University</p>
                      </div>
                      <div className="flex items-center text-gray-500 mt-2 md:mt-0">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span className="text-sm">2017 - 2019</span>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-500 mt-2">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">Stanford, CA</span>
                    </div>
                    <p className="text-gray-600 mt-4">
                      Specialized in Software Engineering and Distributed Systems. 
                      Thesis on "Scalable Microservices Architecture for Cloud Applications".
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <GraduationCap className="h-6 w-6 text-green-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">Bachelor of Science in Information Technology</h3>
                        <p className="text-green-600 font-medium">University of California, Berkeley</p>
                      </div>
                      <div className="flex items-center text-gray-500 mt-2 md:mt-0">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span className="text-sm">2013 - 2017</span>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-500 mt-2">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">Berkeley, CA</span>
                    </div>
                    <p className="text-gray-600 mt-4">
                      Graduated Magna Cum Laude with focus on Web Development and Database Systems. 
                      Active member of the Computer Science Student Association.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600">Let's discuss your next project</p>
          </div>
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                  </div>
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">
              © 2024 Sai Teja. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
