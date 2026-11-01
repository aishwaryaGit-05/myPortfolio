import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { portfolioData } from './data';
import Navbar from './components/Navbar';
import Section from './components/Section';
import { Mail, MapPin, Phone, ExternalLink } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <p className="text-corporate-primary font-bold tracking-wide uppercase mb-4 text-sm">Professional Portfolio</p>
          <h1 className="text-5xl lg:text-7xl font-bold text-corporate mb-6 leading-tight">
            {portfolioData.name}
          </h1>
          <p className="text-xl lg:text-2xl text-gray-600 mb-10 max-w-2xl leading-relaxed">
            {portfolioData.role} — {portfolioData.tagline}
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="bg-corporate-primary hover:bg-corporate-accent text-white px-7 py-3 rounded-md font-semibold transition-colors">
              View Case Studies
            </a>
            <a href="#contact" className="border border-gray-300 hover:border-corporate-primary hover:text-corporate-primary px-7 py-3 rounded-md font-semibold transition-colors text-corporate">
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <Section id="about" title="Professional Summary" bg="bg-corporate-light">
        <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
          {portfolioData.about}
        </p>
      </Section>

      {/* Skills Section */}
      <Section id="skills" title="Core Competencies" bg="bg-white">
        <div className="flex flex-wrap gap-3">
          {portfolioData.skills.map((skill, index) => (
            <span key={index} className="px-4 py-2 bg-gray-50 text-corporate font-semibold text-sm rounded-md border border-gray-200">
              {skill}
            </span>
          ))}
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" title="Featured Projects" bg="bg-corporate-light">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.projects.map((project, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-7 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-3 text-corporate">{project.title}</h3>
              <p className="text-gray-600 mb-6 text-sm line-clamp-3 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((tech, i) => (
                  <span key={i} className="text-xs font-bold text-corporate-primary bg-blue-50 px-2.5 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
              <a href={project.link} className="inline-flex items-center text-sm font-bold text-corporate hover:text-corporate-primary transition-colors mt-auto">
                View Details <ExternalLink size={16} className="ml-1.5"/>
              </a>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" title="Contact Information" bg="bg-white">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-gray-600 mb-8 text-lg">
              Available for leadership roles and enterprise consultancy opportunities. Connect with me to discuss how my expertise aligns with your organizational goals.
            </p>
            <div className="space-y-5">
              <div className="flex items-center text-gray-700">
                <Mail className="w-5 h-5 mr-4 text-corporate-primary" />
                <a href={`mailto:${portfolioData.email}`} className="hover:text-corporate-primary font-medium">{portfolioData.email}</a>
              </div>
              <div className="flex items-center text-gray-700">
                <Phone className="w-5 h-5 mr-4 text-corporate-primary" />
                <span className="font-medium">{portfolioData.phone}</span>
              </div>
              <div className="flex items-center text-gray-700">
                <MapPin className="w-5 h-5 mr-4 text-corporate-primary" />
                <span className="font-medium">{portfolioData.location}</span>
              </div>
            </div>
          </div>
          
          <form className="space-y-4 bg-gray-50 p-8 rounded-lg border border-gray-200" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Name</label>
              <input type="text" className="w-full p-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-corporate-primary focus:border-transparent outline-none transition-all" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email</label>
              <input type="email" className="w-full p-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-corporate-primary focus:border-transparent outline-none transition-all" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Message</label>
              <textarea rows="4" className="w-full p-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-corporate-primary focus:border-transparent outline-none transition-all"></textarea>
            </div>
            <button type="submit" className="w-full bg-corporate-primary hover:bg-corporate-accent text-white py-3 rounded-md font-bold transition-colors mt-2">
              Send Message
            </button>
          </form>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-corporate text-white py-10 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm font-medium">© {new Date().getFullYear()} {portfolioData.name}. All rights reserved.</p>
          <div className="flex space-x-6">
            {portfolioData.socials.map((social, index) => (
              <a key={index} href={social.url} className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
                {social.platform}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

// function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
// }

// export default App
