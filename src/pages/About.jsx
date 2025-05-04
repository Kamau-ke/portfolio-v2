import React from 'react'
import FadeTransition from '../components/Faded';
import SkillBadge from '../components/SkillsBadge';
import skills from '../data/skills'
import Button from '../components/Button';
function About() {
    return (
      <FadeTransition>
        <div className="pt-24">
          <section className="container mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-2">About <span className="text-blue-600">Me</span></h1>
            <p className="text-gray-600 mb-8">My journey, experience, and what drives me</p>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h2 className="text-xl font-semibold mb-4 text-blue-600 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    My Story
                  </h2>
                  <p className="text-gray-700 mb-3">
                    I'm a passionate full-stack developer with a focus on the MERN stack. My journey in web development 
                    began 4 years ago when I built my first React application. Since then, I've been hooked on creating 
                    intuitive and performant web experiences.
                  </p>
                  <p className="text-gray-700 mb-3">
                    With a background in computer science and self-taught expertise in modern web technologies, 
                    I combine technical knowledge with creative problem-solving to build applications that users love.
                  </p>
                  <p className="text-gray-700">
                    I'm constantly learning and exploring new technologies to stay at the forefront of web development. 
                   
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h2 className="text-xl font-semibold mb-4 text-blue-600 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Experience
                  </h2>
                  
                  <div className="space-y-4">
   
                    <div className="border-l-2 border-gray-300 pl-4 pb-2">
                      <div className="flex justify-between items-start">
                        <h3 className="font-medium">Full Stack Developer</h3>
                        <span className="text-sm bg-gray-100 text-gray-700 px-2 py-0.5 rounded">2023 - current</span>
                      </div>
                      <p className="text-gray-500 text-sm">Freelance developer</p>
                      <p className="text-gray-600 mt-1">
                        Developing and maintaining MERN stack applications.
                      </p>
                    </div>
                    
                    <div className="border-l-2 border-gray-300 pl-4">
                      <div className="flex justify-between items-start">
                        <h3 className="font-medium">Web Developer intern</h3>
                        <span className="text-sm bg-gray-100 text-gray-700 px-2 py-0.5 rounded">2022</span>
                      </div>
                      <p className="text-gray-500 text-sm">Muranga University</p>
                      <p className="text-gray-600 mt-1">
                        Created responsive websites and implemented front-end designs using HTML, CSS, and JavaScript.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h2 className="text-xl font-semibold mb-4 text-blue-600 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                    Education
                  </h2>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium">Bachelor of Science in Computer Technology</h3>
                        <p className="text-gray-500 text-sm">Meru University of Science and Technology</p>
                      </div>
                      <span className="text-sm bg-blue-100 text-blue-700 px-2 py-0.5 rounded">2019 - 2023</span>
                    </div>
                    
                    {/* <div>
                      <h3 className="font-medium">Web Development Bootcamp</h3>
                      <p className="text-gray-500 text-sm">CodeCamp Academy</p>
                      <span className="text-sm inline-block mt-1 bg-gray-100 text-gray-700 px-2 py-0.5 rounded">2018</span>
                    </div> */}
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-1 space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h2 className="text-xl font-semibold mb-4 text-blue-600 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    Skills
                  </h2>
                  
                  {skills.map((skillGroup, idx) => (
                    <div key={idx} className="mb-4">
                      <h3 className="font-medium text-gray-700 mb-2">{skillGroup.category}</h3>
                      <div className="flex flex-wrap">
                        {skillGroup.items.map((skill, i) => (
                          <SkillBadge key={i} skill={skill} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h2 className="text-xl font-semibold mb-4 text-blue-600 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                    Interests
                  </h2>
                  
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <span className="text-blue-600 mr-2">▹</span>
                      <span className="text-gray-700">Open Source Contributing</span>
                    </div>
                    
                
                    <div className="flex items-center">
                      <span className="text-blue-600 mr-2">▹</span>
                      <span className="text-gray-700">Tech Writing</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-blue-600 mr-2">▹</span>
                      <span className="text-gray-700">Hiking & Photography</span>
                    </div>
                  </div>
                </div> */}
                
                <div className="bg-blue-600 p-6 rounded-lg shadow-sm text-white">
                  <h2 className="text-xl font-semibold mb-4 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Get In Touch
                  </h2>
                  <p className="mb-4 text-blue-100">
                    Interested in working together? Feel free to reach out via email or connect with me on social media.
                  </p>
                  <Button href="/contact" className="bg-white text-blue-600 hover:bg-blue-50 w-full justify-center">
                    Contact Me
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </FadeTransition>
    );
  }
export default About