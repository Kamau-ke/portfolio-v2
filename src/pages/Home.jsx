import FadeTransition from "../components/Faded";
import SkillBadge from '../components/SkillsBadge'
import Button from "../components/Button";
import projects from '../data/projects'
import { Link } from "react-router-dom";
import Profile from '../assets/images/profile.jpg'

function Home() {

    return (
      <FadeTransition>
        <div className="pt-24">
          <section className="min-h-[60vh] flex flex-col justify-center container mx-auto px-4 py-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <h1 className="text-4xl md:text-4xl font-bold mb-4">
                  <span className="text-blue-600">MERN Stack</span> Developer
                </h1>
                <p className="text-m text-gray-600 mb-6">
                  I build robust and scalable full-stack applications using MongoDB, Express, React, and Node.js. 
                  Passionate about creating elegant solutions to complex problems.
                </p>
                <div className="flex flex-wrap gap-4">
                    <Link to='/contact'>
                     <Button primary>
                    Get In Touch
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Button>
                    </Link>
                 
                    <Link to='/projects'>
                    <Button>
                    View My Work
                  </Button>
                    </Link>
                  
                </div>
                
                <div className="mt-8">
                  <p className="font-medium text-gray-700 mb-2">Tech Stack</p>
                  <div className="flex flex-wrap">
                    <SkillBadge skill="React" />
                    <SkillBadge skill="Node.js" />
                    <SkillBadge skill="MongoDB" />
                    <SkillBadge skill="Express" />
                    <SkillBadge skill="Tailwind CSS" />
                  </div>
                </div>
              </div>
              
              <div className="order-1 md:order-2 flex justify-center">
                <div className="relative">
                  <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
                    <img 
                      src={Profile} 
                      alt="profile" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                </div>
              </div>
            </div>
          </section>
          
          {/* Featured Projects Section */}
          <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-4">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold">Featured Projects</h2>
                <Link to="/projects" className="text-blue-600 hover:underline flex items-center">
                  View All
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {projects.slice(0, 2).map((project, idx) => (
                  <div 
                    key={idx} 
                    className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="h-48 bg-gray-200">
                      <img 
                        src={project.image || `/api/placeholder/800/400`} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-gray-600 mb-4">{project.description}</p>
                      <div className="flex flex-wrap mb-4">
                        {project.tech.slice(0, 3).map((tech, i) => (
                          <span key={i} className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded mr-2 mb-2">
                            {tech}
                          </span>
                        ))}
                        {project.tech.length > 3 && (
                          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                            +{project.tech.length - 3} more
                          </span>
                        )}
                      </div>
                      <div className="flex space-x-3">
                        {/* <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline flex items-center"
                        >
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          Live Demo
                        </a> */}
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:underline flex items-center"
                        >
                          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" 
                              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                              clipRule="evenodd" 
                            />
                          </svg>
                          Code
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </FadeTransition>
    );
  }

export default Home
