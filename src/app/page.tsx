'use client';

import React, { useState, useEffect } from 'react';
import { ChevronRight, Code, DollarSign, Globe, Award, Users, Clock, CheckCircle, Menu, X, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

export default function HHComputerSolutions() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollY, setScrollY] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [isScrollReady, setIsScrollReady] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Handle mounting and scroll effects - ONLY on client side with delay
  useEffect(() => {
    setIsMounted(true);
    setIsClient(true);
    
    // Add a longer delay to ensure hydration is completely finished
    const timer = setTimeout(() => {
      setIsScrollReady(true);
      
      const handleScroll = () => setScrollY(window.scrollY);
      window.addEventListener('scroll', handleScroll, { passive: true });
      
      return () => window.removeEventListener('scroll', handleScroll);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  // Calculate scroll effects - only apply if fully mounted and ready
  const logoOpacity = (isMounted && isClient && isScrollReady) ? Math.max(0.15, 1 - scrollY / 1800) : 1;
  const logoScale = (isMounted && isClient && isScrollReady) ? Math.max(0.3, 1 - scrollY / 2000) : 1;
  const contentOpacity = (isMounted && isClient && isScrollReady) ? Math.min(1, scrollY / 800) : 0;

  // Don't render anything until mounted to prevent hydration issues
  if (!isMounted) {
    return null;
  }

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  // Portfolio projects data
  const portfolioProjects = [
    {
      id: 1,
      title: "Bella Vista Burger Co.",
      category: "Demo E-commerce Restaurant",
      description: "Demo website showing a new trendy restaurant with full functionality of e-commerce on the platform. Features complete online ordering system.",
      features: ["Custom Shopping Cart", "Real-time Customization", "Payment Integration", "Mobile Responsive"],
      tech: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
      status: "Live Demo",
      url: "https://bella-vista-burger-website.vercel.app"
    },
    {
      id: 2,
      title: "Meridian Architecture Studio",
      category: "Demo Corporate Portfolio", 
      description: "Demo website showing a sleek professional framework for architecture firms. Not fully operational but demonstrates sophisticated design capabilities.",
      features: ["Portfolio Gallery", "Awards Section", "Project Showcase", "Professional Design"],
      tech: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
      status: "Live Demo",
      url: "https://meridian-architecture-studio.vercel.app"
    }
  ];

  // Services data
  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Custom Website Development",
      description: "Professional websites built from scratch using modern technologies like Next.js, React, and TypeScript.",
      features: ["Custom Design", "Responsive Layout", "Multiple Pages", "Links to Socials", "Maps Integration", "Ability to Get in Touch via Website"],
      serviceType: "Custom Website Development"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "E-commerce Solutions",
      description: "Complete online stores with shopping carts, payment processing, and inventory management.",
      features: ["Shopping Cart", "Payment Integration", "Menus", "Customisable Menu Items", "Order Tracking"],
      serviceType: "E-commerce Solutions"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Additional Services",
      description: "Advanced features and tools to enhance your business operations and customer experience.",
      features: ["AI Chat Bots", "Inventory Management", "Mailing Lists", "Scheduling", "Existing Website Redesign", "Mobile Optimisation"],
      serviceType: "Additional Services"
    }
  ];

  // Stats data
  const stats = [
    { number: "30m", label: "Maximum Email Response Time" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Available" },
    { number: "< 2s", label: "Average Load Time" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Fixed Logo Background */}
      <div 
        className="fixed inset-0 flex items-center justify-center pointer-events-none z-0"
        style={(isMounted && isClient && isScrollReady) ? {
          opacity: logoOpacity,
          transform: `scale(${logoScale})`,
          transition: 'opacity 0.1s ease-out, transform 0.1s ease-out'
        } : {
          opacity: 1,
          transform: 'scale(1)'
        }}
      >
        <img 
          src="/hh-logo-large.png" 
          alt="H&H Background Logo" 
          className="w-[800px] h-[800px] object-contain"
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10">
        {/* Header */}
        <header 
          className="fixed top-0 left-0 right-0 z-50 border-b border-gray-100 transition-all duration-300"
          style={(isMounted && isClient && isScrollReady) ? {
            backgroundColor: `rgba(255, 255, 255, ${Math.min(0.95, scrollY / 300)})`,
            backdropFilter: scrollY > 50 ? 'blur(10px)' : 'none'
          } : {
            backgroundColor: 'rgba(255, 255, 255, 0)',
            backdropFilter: 'none'
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              {/* Logo */}
              <button onClick={() => scrollToSection('home')} className="flex items-center space-x-3 group">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-lg overflow-hidden">
                  <img 
                    src="/hh-logo.png" 
                    alt="H&H Logo" 
                    className="w-11 h-11 object-contain"
                  />
                </div>
                <div>
                  <span className="text-xl font-bold text-gray-900">H&H Computer Solutions</span>
                  <p className="text-sm text-gray-600 font-medium">Professional Web Development</p>
                </div>
              </button>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-8">
                {['home', 'services', 'portfolio', 'about', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`relative text-sm font-medium transition-colors duration-300 ${
                      activeSection === section 
                        ? 'text-gray-900' 
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                    {activeSection === section && (
                      <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-gray-800 to-gray-600 rounded-full"></div>
                    )}
                  </button>
                ))}
              </nav>

              {/* CTA Button */}
              <button 
                onClick={() => scrollToSection('contact')}
                className="hidden md:flex items-center space-x-2 bg-gradient-to-r from-gray-800 to-gray-900 text-white px-6 py-3 rounded-xl font-medium hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </header>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 fixed top-20 left-0 right-0 z-40">
            <div className="px-4 py-4 space-y-4">
              {['home', 'services', 'portfolio', 'about', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left text-gray-600 hover:text-gray-900 py-2 font-medium"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
              <button 
                onClick={() => scrollToSection('contact')}
                className="w-full bg-gradient-to-r from-gray-800 to-gray-900 text-white px-6 py-3 rounded-xl font-medium mt-4"
              >
                Get Started
              </button>
            </div>
          </div>
        )}

        {/* Spacer for Logo */}
        <section className="h-screen"></section>

        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center bg-white">
          <div 
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
            style={(isMounted && isClient && isScrollReady) ? {
              opacity: contentOpacity,
              transform: `translateY(${Math.max(0, 50 - scrollY / 10)}px)`,
              transition: 'opacity 0.1s ease-out, transform 0.1s ease-out'
            } : {
              opacity: 0,
              transform: 'translateY(50px)'
            }}
          >
            <div className="inline-flex items-center space-x-2 bg-gray-100 rounded-full px-4 py-2 text-sm font-medium text-gray-700 mb-8">
              <Award className="w-4 h-4" />
              <span>Professional Web Development Services</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Premium Websites
              <span className="block bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                Built for Success
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed">
              We create sophisticated, high-performance websites that drive business growth. 
              From e-commerce platforms to corporate portfolios, we deliver excellence.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="group bg-gradient-to-r from-gray-800 to-gray-900 text-white px-8 py-4 rounded-xl font-medium text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              >
                <span>View Our Work</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                onClick={() => scrollToSection('contact')}
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-medium text-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-300"
              >
                Get Free Quote
              </button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive web development solutions tailored to your business needs
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 flex flex-col">
                  <div className="text-gray-800 mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-3 mb-6 flex-grow">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="border-t border-gray-100 pt-6 mt-auto">
                    <p className="text-sm text-gray-600 text-center mb-4">Get in touch for a quote</p>
                    <button 
                      onClick={() => {
                        const contactSection = document.getElementById('contact');
                        if (contactSection) {
                          const selectElement = contactSection.querySelector('select');
                          if (selectElement) {
                            selectElement.value = service.serviceType;
                          }
                          contactSection.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="w-full bg-gray-900 text-white py-3 rounded-xl font-medium hover:bg-gray-800 transition-colors duration-300"
                    >
                      Get Started
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Portfolio
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Demo websites showcasing our expertise across different industries and business types
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {portfolioProjects.map((project) => (
                <div key={project.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100">
                  {/* Project Content - No Image */}
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                        {project.category}
                      </span>
                      <span className="text-green-600 text-sm font-medium flex items-center space-x-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>{project.status}</span>
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                    
                    {/* Features */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {project.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* URL */}
                    <div className="border-t border-gray-100 pt-6">
                      <div className="text-sm text-gray-500 mb-2">Live Demo:</div>
                      <a 
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 font-medium hover:text-blue-800 transition-colors duration-300 underline"
                      >
                        {project.url.replace('https://', '')}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Why Choose H&H?
              </h2>
              <p className="text-2xl text-gray-600 mb-12 leading-relaxed font-medium">
                Turning websites from a vision to a strategic weapon
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Young & Enthusiastic Team</h3>
                  <p className="text-gray-600">Hungry, personable team of 2 people who are small business enthusiasts but afraid of no challenge.</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Constantly Reachable</h3>
                  <p className="text-gray-600">Direct access to our personal phones and emails at any time. We're always here when you need us.</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Skilled Computer Scientists</h3>
                  <p className="text-gray-600">Qualified computer scientists delivering quick, high-level, and competitively priced products.</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Lightning Fast Delivery</h3>
                  <p className="text-gray-600">Most projects completed within 2-4 days with regular updates and transparent communication.</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Modern Technology</h3>
                  <p className="text-gray-600">Built with the latest technologies including Next.js, React, and TypeScript for maximum performance.</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Ongoing Support</h3>
                  <p className="text-gray-600">We provide continuous maintenance, updates, and support to keep your website running smoothly.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Let's discuss your project and bring your vision to life
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Info */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Get in Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-gray-900">Charlie</div>
                      <div className="text-gray-600">+44 7557 352766</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-gray-900">Clarke</div>
                      <div className="text-gray-600">+44 7557 945136</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-gray-900">Email</div>
                      <a 
                        href="mailto:hhcomputersolutions@outlook.com"
                        className="text-blue-600 hover:text-blue-800 transition-colors duration-300 underline"
                      >
                        hhcomputersolutions@outlook.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-gray-900">Location</div>
                      <div className="text-gray-600">Available Worldwide</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <div className="block text-sm font-medium text-gray-700 mb-2">First Name</div>
                      <input 
                        type="text" 
                        id="firstName"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <div className="block text-sm font-medium text-gray-700 mb-2">Last Name</div>
                      <input 
                        type="text" 
                        id="lastName"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors"
                        placeholder="Smith"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <div className="block text-sm font-medium text-gray-700 mb-2">Email</div>
                    <input 
                      type="email" 
                      id="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <div className="block text-sm font-medium text-gray-700 mb-2">Project Type</div>
                    <select 
                      id="projectType"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors"
                    >
                      <option>Select a service</option>
                      <option>Custom Website Development</option>
                      <option>E-commerce Solutions</option>
                      <option>Additional Services</option>
                    </select>
                  </div>
                  
                  <div>
                    <div className="block text-sm font-medium text-gray-700 mb-2">Message</div>
                    <textarea 
                      rows={4}
                      id="message"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>
                  
                  <button 
                    type="button"
                    onClick={() => {
                      const firstName = (document.getElementById('firstName') as HTMLInputElement)?.value || '';
                      const lastName = (document.getElementById('lastName') as HTMLInputElement)?.value || '';
                      const email = (document.getElementById('email') as HTMLInputElement)?.value || '';
                      const projectType = (document.getElementById('projectType') as HTMLSelectElement)?.value || '';
                      const message = (document.getElementById('message') as HTMLTextAreaElement)?.value || '';
                      
                      const subject = `New Project Inquiry - ${projectType}`;
                      const body = `Hello H&H Computer Solutions,

I would like to inquire about your services.

Name: ${firstName} ${lastName}
Email: ${email}
Project Type: ${projectType}

Message:
${message}

Best regards,
${firstName} ${lastName}`;
                      
                      const mailtoLink = `mailto:hhcomputersolutions@outlook.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                      window.location.href = mailtoLink;
                    }}
                    className="w-full bg-gradient-to-r from-gray-800 to-gray-900 text-white py-4 rounded-xl font-medium text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Company Info */}
              <div className="md:col-span-2">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center overflow-hidden">
                    <img 
                      src="/hh-logo.png" 
                      alt="H&H Logo" 
                      className="w-9 h-9 object-contain"
                    />
                  </div>
                  <span className="text-xl font-bold">H&H Computer Solutions</span>
                </div>
                <p className="text-gray-400 leading-relaxed max-w-md">
                  Professional web development services that help businesses succeed online. 
                  From concept to deployment, we create websites that work.
                </p>
              </div>
              
              {/* Contact */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>Charlie: +44 7557 352766</li>
                  <li>Clarke: +44 7557 945136</li>
                  <li>
                    <a 
                      href="mailto:hhcomputersolutions@outlook.com"
                      className="hover:text-white transition-colors underline"
                    >
                      hhcomputersolutions@outlook.com
                    </a>
                  </li>
                  <li>Available Worldwide</li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
              <p>&copy; 2025 H&H Computer Solutions. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
