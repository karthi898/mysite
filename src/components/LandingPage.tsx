import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Cpu, Zap, Database, Layout, Terminal, Check, CalendarDays } from 'lucide-react';
import { motion } from 'motion/react';

// Replace with your Calendly / Cal.com link once it's set up.
export const BOOKING_URL = "mailto:karthikshambuni@hotmail.com?subject=Discovery%20call%20request";

export default function LandingPage() {
  const skills = [
    { name: "OmniStudio", desc: "Expert in OmniScripts, FlexCards and Integration Procedures", icon: <Layout className="w-6 h-6 text-blue-400" /> },
    { name: "Salesforce", desc: "Certified developer with Apex & Lightning expertise", icon: <Database className="w-6 h-6 text-purple-400" /> },
    { name: "Web Development", desc: "HTML, CSS, JavaScript & LWC", icon: <Code className="w-6 h-6 text-emerald-400" /> },
    { name: "Integration", desc: "REST/SOAP APIs & Data Mapping", icon: <Zap className="w-6 h-6 text-amber-400" /> }
  ];

  const projects = [
    { title: "OmniStudio Toolkit", desc: "Utilities that accelerate Salesforce development and debugging." },
    { title: "Portfolio Website", desc: "Responsive site built with vanilla HTML, CSS and JavaScript featuring smooth scrolling." },
    { title: "Integration Layer", desc: "Middleware for connecting legacy systems with modern Salesforce APIs." }
  ];

  const services = [
    {
      name: "OmniStudio Health Check",
      price: "$300",
      unit: "fixed",
      desc: "A review of your OmniScripts, FlexCards and Integration Procedures with a prioritised fix list.",
      points: ["Performance & governor-limit review", "Best-practice and naming audit", "Written report + 1-hour walkthrough"],
    },
    {
      name: "Journey Build",
      price: "from $1,200",
      unit: "per journey",
      desc: "One end-to-end customer journey built with OmniScript and FlexCards, ready for UAT.",
      points: ["OmniScript + FlexCards", "DataRaptors & Integration Procedures", "Deployment and handover docs"],
      featured: true,
    },
    {
      name: "API Integration",
      price: "from $900",
      unit: "per integration",
      desc: "Connect Salesforce to an external system using Integration Procedures, Apex and REST/SOAP.",
      points: ["Named credentials & auth setup", "Data mapping and error handling", "Test coverage included"],
    },
    {
      name: "Vlocity → OmniStudio Migration",
      price: "Custom quote",
      unit: "after assessment",
      desc: "Move managed-package Vlocity components to standard OmniStudio with minimal disruption.",
      points: ["Component inventory & plan", "Migration and regression testing", "Team knowledge transfer"],
    },
    {
      name: "Monthly Support",
      price: "$600",
      unit: "per month",
      desc: "Ongoing help for fixes, small enhancements and questions from your team.",
      points: ["Up to 20 hours per month", "Priority response within 1 business day", "Cancel anytime"],
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-blue-500/30">
      {/* Hero Section */}
      <header id="home" className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[500px] bg-blue-600/5 blur-[120px] rounded-full -z-10" />
        
        <div className="max-w-5xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Available for OmniStudio projects
            </div>
            <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tight leading-[0.9]">
              Karthik <br />
              <span className="text-zinc-500">Shambuni</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl leading-relaxed">
              Salesforce & Software Engineer crafting thoughtful digital experiences.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <a 
              href={BOOKING_URL}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-medium transition-all shadow-lg shadow-blue-900/20"
            >
              Book a Free Call
            </a>
            <a 
              href="#services" 
              className="px-8 py-4 bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-zinc-300 rounded-full font-medium transition-all"
            >
              View Services
            </a>
          </motion.div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-24 px-6 border-y border-zinc-900">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-sm font-mono text-blue-500 uppercase tracking-widest">About</h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold">Building useful software with a product designer's eye.</h3>
            <p className="text-zinc-400 leading-relaxed text-lg">
              I'm a Salesforce OmniStudio specialist and software engineer who loves transforming ideas into streamlined applications. My background in design helps me build interfaces that feel as good as they look.
            </p>
            <ul className="space-y-3 text-zinc-300">
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                OmniScripts, FlexCards and Integration Procedures
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                Certified developer with Apex & Lightning expertise
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                HTML, CSS, JavaScript & LWC
              </li>
            </ul>
          </div>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative bg-zinc-900 border border-zinc-800 p-8 rounded-3xl aspect-square flex items-center justify-center">
              <Terminal className="w-32 h-32 text-blue-500/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-2">
                  <div className="text-4xl font-bold font-display">Salesforce</div>
                  <div className="text-zinc-500 font-mono text-sm">OmniStudio Specialist</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="space-y-4">
            <h2 className="text-sm font-mono text-blue-500 uppercase tracking-widest">Skills</h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold">Technical depth balanced with clean execution.</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, i) => (
              <div key={i} className="p-8 bg-zinc-900/50 border border-zinc-800 rounded-3xl hover:border-blue-500/50 transition-all group">
                <div className="w-12 h-12 bg-zinc-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {skill.icon}
                </div>
                <h4 className="text-xl font-display font-bold mb-2">{skill.name}</h4>
                <p className="text-zinc-500 text-sm leading-relaxed">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 border-t border-zinc-900">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="space-y-4">
            <h2 className="text-sm font-mono text-blue-500 uppercase tracking-widest">Services</h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold">Fixed-scope Salesforce OmniStudio packages.</h3>
            <p className="text-zinc-400 text-lg max-w-2xl">
              Clear scope, clear price. Not sure which fits? Book a free 20-minute call and we'll work it out.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div
                key={i}
                className={`flex flex-col p-8 rounded-3xl border transition-all ${
                  service.featured
                    ? "bg-blue-600/10 border-blue-500/50"
                    : "bg-zinc-900/50 border-zinc-800 hover:border-blue-500/50"
                }`}
              >
                {service.featured && (
                  <span className="self-start mb-4 px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-medium">Most popular</span>
                )}
                <h4 className="text-xl font-display font-bold">{service.name}</h4>
                <div className="mt-3 mb-4">
                  <span className="text-3xl font-display font-bold">{service.price}</span>
                  <span className="text-zinc-500 text-sm ml-2">{service.unit}</span>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">{service.desc}</p>
                <ul className="space-y-2 text-sm text-zinc-300 mb-8">
                  {service.points.map((point, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
                <a
                  href={BOOKING_URL}
                  className={`mt-auto text-center px-6 py-3 rounded-full font-medium transition-all ${
                    service.featured
                      ? "bg-blue-600 hover:bg-blue-500 text-white"
                      : "bg-zinc-800 hover:bg-zinc-700 text-zinc-200"
                  }`}
                >
                  Book a call
                </a>
              </div>
            ))}
          </div>
          <p className="text-zinc-500 text-sm">
            Prices in USD. Final quote confirmed after a short scoping call.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-zinc-900/30">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="space-y-4">
            <h2 className="text-sm font-mono text-blue-500 uppercase tracking-widest">Projects</h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold">Selected work shaped around speed, clarity and reliability.</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <div key={i} className="group relative bg-zinc-900 border border-zinc-800 p-8 rounded-3xl hover:bg-zinc-800/80 transition-all">
                <div className="space-y-4">
                  <h4 className="text-xl font-display font-bold">{project.title}</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed">{project.desc}</p>
                  <div className="pt-4 flex items-center gap-2 text-blue-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    View Project <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-sm font-mono text-blue-500 uppercase tracking-widest">Contact</h2>
            <h3 className="text-4xl md:text-6xl font-display font-bold">Let's create something amazing together.</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href={BOOKING_URL}
              className="flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-full transition-all text-lg font-medium text-white"
            >
              <CalendarDays className="w-6 h-6" />
              Book a Call
            </a>
            <a 
              href="mailto:karthikshambuni@hotmail.com"
              className="flex items-center gap-3 px-8 py-4 bg-zinc-900 border border-zinc-800 rounded-full hover:bg-zinc-800 transition-all text-lg font-medium"
            >
              <Mail className="w-6 h-6 text-blue-400" />
              Email Me
            </a>
            <a 
              href="https://www.linkedin.com/in/karthik-s88"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-zinc-900 border border-zinc-800 rounded-full hover:bg-zinc-800 transition-all text-lg font-medium"
            >
              <Linkedin className="w-6 h-6 text-blue-400" />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-zinc-900">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center text-[10px] font-bold">KS</div>
            <span className="text-zinc-400 text-sm font-medium">Karthik Shambuni</span>
          </div>
          <p className="text-zinc-600 text-sm">
            © 2026 karthikshambuni.in. Built with React & Gemini.
          </p>
        </div>
      </footer>
    </div>
  );
}

function ArrowRight(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
