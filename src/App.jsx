import { portfolioData, projectData } from './data';
import Navbar from './components/Navbar';
import Section from './components/Section';
import { Mail, MapPin, Phone, ExternalLink } from 'lucide-react';
import She from './assets/fullstack.png';
import Aish from './assets/aishu1.jpg';
import { motion } from "framer-motion";
import { useState } from 'react';
import ProjectModal from './components/ProjectModal';


export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-10 pt-20 pb-16 lg:pt-28 lg:pb-15">
        <div className="relative mx-auto">
          <motion.div
            className="hero-orb"
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            whileHover={{ scale: 1.08, rotateY: 12, rotateX: 10, y: -8 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto lg:px-8 portfolio-frame p-5 sm:p-7 hover:shadow-lg transition-shadow duration-300 min-h-[60vh] lg:min-h-[80vh] gap-6 lg:gap-8 relative overflow-hidden">
            <div className="w-full flex flex-col justify-center order-2 lg:order-1">
              <p className="text-base sm:text-lg color-white-600 mb-4 sm:mb-6">
                {portfolioData.greetings}
              </p>
              <div className="grid gap-3 sm:gap-4">
                <p className="text-base sm:text-lg color-white-600">
                  {portfolioData.selfTag}
                </p>
                <h1 className="zero-margin color-white-600 text-2xl sm:text-4xl lg:text-6xl font-bold leading-tight">
                  {portfolioData.name}
                </h1>
              </div>
              <p className="color-white-600 mt-5 sm:mt-6 max-w-2xl leading-relaxed text-sm sm:text-base lg:text-lg">
                {portfolioData.role} — {portfolioData.tagline}
              </p>
            </div>
            <div className="w-full flex justify-center items-center order-1 lg:order-2">
              {She && <img src={She} alt="Aishwarya" className="rounded-lg w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[420px] h-auto object-cover" height="300" width="300" />}
            </div>
          </div>
        </div>
      </section>

      <Section id="about">
        <div className='grid grid-cols-1 gap-6 xl:grid-cols-2 max-w-none'>
          <motion.div initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}>
            <div className="relative max-w-none">
              <motion.div
                className="about-orb"
                initial={{ opacity: 0, scale: 0.8, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                whileHover={{ scale: 1.08, rotateY: 12, rotateX: 10, y: -8 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.3 }}
              />
              <div className='animate-fade-up grid grid-cols-1 w-full portfolio-frame min-h-[60vh] sm:p-6 gap-5 max-w-none'>
                <div className='flex justify-center lg:justify-start'>
                  {Aish && <img src={Aish} alt="Aishwarya" className="rounded-lg w-full max-w-[220px] sm:max-w-[160px] h-auto object-cover"/>}
                </div>
                <div className='p-0'>
                  <p className="text-base sm:text-lg font-semibold mb-3 pb-5 uppercase">About me</p>
                  <p className="max-w-4xl text-sm sm:text-base leading-relaxed">
                    {portfolioData.about}
                  </p>
                </div>
                <div>
                  <p className="text-base sm:text-lg font-semibold mb-3 uppercase">My Projects</p>
                </div>
                <div id='projects' className='grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4'>
                  {projectData.map((project, index) => (
                    <div key={index} className="responsive-project-card hover:shadow-lg transition-shadow duration-300 flex flex-col border border-orange-500/30 bg-[#1a1513] shadow-2xl p-4 sm:p-6 rounded-2xl">
                      <h3 className="font-bold mb-3 text-sm sm:text-base">{project.title}</h3>
                      <p className="mb-6 text-xs sm:text-sm line-clamp-3 leading-relaxed">{project.category}</p>
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.technologies.map((tech, i) => (
                          <span key={i} className="text-[10px] sm:text-xs font-bold">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <a onClick={() => setSelectedProject(project)} className="inline-flex items-center text-xs sm:text-sm font-bold hover:text-gray-300 transition-colors mt-auto cursor-pointer">
                        View Details <ExternalLink size={16} className="ml-1.5" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}>
             {/* Skills Section */}
              <div id="skills" className='grid grid-cols-1 gap-4 -translate-y-0 lg:-translate-y-12 w-full portfolio-frame min-h-[60vh] p-4 sm:p-6 lg:p-8 animate-fade-up [animation-delay:200ms]'>
                <div className="pb-5">
                  <p className="text-base sm:text-lg font-semibold uppercase">My Skills</p>
                </div>
                <div className="space-y-4">
                  {Object.entries(portfolioData.skills).map(([category, skillList]) => (
                    <div key={category}>
                      <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wide text-gray-300 mb-2">
                        {category.replace(/([A-Z])/g, ' $1').trim()}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {skillList.map((skill, index) => (
                          <span key={`${category}-${index}`} className="responsive-skill-chip text-[10px] sm:text-xs px-2 py-1 rounded-full border border-orange-500/30 bg-[#1a1513] text-white">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <div className='contact-style mt-4 sm:mt-6'>
                <p className="mb-8 text-sm sm:text-base lg:text-lg leading-relaxed">
                  Available for leadership roles and enterprise consultancy opportunities. Connect with me to discuss how my expertise aligns with your organizational goals.
                </p>
                <div className="space-y-4 sm:space-y-5 flex flex-col justify-center items-center mt-4">
                  <div className="flex items-center margin-bottom-1 text-sm sm:text-base">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-3" />
                    <a href={`mailto:${portfolioData.email}`} className="hover:text-gray-300 font-small break-all" style={{ 'fontSize': '16px'}}>{portfolioData.email}</a>
                  </div>
                  <div className="flex items-center margin-bottom-1 text-sm sm:text-base">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-3" />
                    <span className="font-small" style={{ 'fontSize': '16px'}}>{portfolioData.phone}</span>
                  </div>
                  <div className="flex items-center margin-bottom-1 font-medium sm:text-base">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-3" />
                    <span className="font-small" style={{ 'fontSize': '16px'}}>{portfolioData.location}</span>
                  </div>
                </div>
              </div>
              </div>  
          </motion.div>
        </div>
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </Section>

      {/* Footer */}
      <footer className="text-white py-10 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-xs sm:text-sm font-medium text-center md:text-left">© {new Date().getFullYear()} {portfolioData.name}. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-6">
            {portfolioData.socials.map((social, index) => (
              <a key={index} href={social.url} className="text-gray-400 hover:text-gray-300 transition-colors text-xs sm:text-sm font-medium">
                {social.platform}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
