import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaMagic, FaLaptopCode, FaRobot, FaMobileAlt, FaDraftingCompass, FaReact, FaNodeJs, FaPython, FaFigma, FaExternalLinkAlt, FaPaperPlane } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript } from 'react-icons/si';
import emailjs from '@emailjs/browser';

function App() {
  
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs.sendForm(
      'service_fe2bikb',   // আপনার EmailJS Service ID
      'template_zvqtw38',  // আপনার EmailJS Template ID
      form.current,
      'K0LINmy0bheIchtR1'    // আপনার EmailJS Public Key
    )
    .then((result) => {
        setIsSent(true);
        setIsLoading(false);
        form.current.reset();
        setTimeout(() => setIsSent(false), 5000);
    }, (error) => {
        console.log(error.text);
        setIsLoading(false);
        alert("Something went wrong! Please try again.");
    });
  };

  const projects = [
    {
      title: "Farm2Home",
      category: "AI & Web App",
      desc: "An AI-integrated delivery service aimed at helping farmers connect directly with consumers.",
      tech: ["React", "Python", "AI"],
    },
    {
      title: "Roktomitro",
      category: "Web Platform",
      desc: "A blood donation organization website to manage donors and facilitate urgent blood requirements.",
      tech: ["React", "Tailwind", "Node.js"],
    },
    {
      title: "Mouja Finder",
      category: "Web Application",
      desc: "A dedicated land record search website designed to make finding property details easier.",
      tech: ["JavaScript", "Tailwind", "API"],
    },
    {
      title: "BornoCalc",
      category: "Utility Tool",
      desc: "A Bengali calculator web application created with a user-friendly interface.",
      tech: ["HTML", "CSS", "JS"],
    }
  ];

  return (
    <div className="min-h-screen bg-darkBg relative selection:bg-brandPurple selection:text-white font-sans overflow-hidden">
      
      {/* Background Glow Effects */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-purple-glow blur-[120px] -z-10"></div>
      <div className="absolute top-[80vh] left-[-10vw] w-[40vw] h-[40vh] bg-purple-glow blur-[120px] -z-10 opacity-60"></div>
      <div className="absolute top-[180vh] right-[-10vw] w-[40vw] h-[40vh] bg-purple-glow blur-[120px] -z-10 opacity-50"></div>

      {/* Navbar - (Href added for smooth scrolling) */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl bg-cardGlass backdrop-blur-md border border-white/10 rounded-full px-8 py-4 flex justify-between items-center z-50 shadow-lg">
        <div className="text-xl font-bold tracking-widest text-white cursor-pointer" onClick={() => window.scrollTo(0,0)}>
          REMON<span className="text-brandPurple">.</span>
        </div>
        <ul className="hidden md:flex space-x-8 text-sm text-gray-300">
          <li><a href="#home" className="hover:text-brandPink cursor-pointer transition">Home</a></li>
          <li><a href="#about" className="hover:text-brandPink cursor-pointer transition">About</a></li>
          <li><a href="#services" className="hover:text-brandPink cursor-pointer transition">Services</a></li>
          <li><a href="#projects" className="hover:text-brandPink cursor-pointer transition">My Projects</a></li>
        </ul>
        <a href="#contact" className="bg-gradient-to-r from-brandPurple to-brandPink px-6 py-2 rounded-full text-sm font-semibold hover:scale-105 transition-transform shadow-[0_0_15px_rgba(214,66,208,0.5)] text-white">
          Contact
        </a>
      </nav>

      {/* 1. Hero Section */}
      <main id="home" className="max-w-6xl mx-auto px-6 pt-40 pb-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-screen">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <p className="text-yellow-400 text-sm tracking-wider mb-4 uppercase flex items-center gap-2"><FaMagic /> Welcome to my world</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">Rokon Uz Zaman Remon</span>
          </h1>
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brandPurple to-brandPink mb-6">
            Web Developer & AI Enthusiast
          </h2>
          <p className="text-gray-400 text-sm md:text-base mb-8 max-w-md leading-relaxed">
            Passionate about building future-ready digital experiences. I transform complex ideas into seamless, intelligent, and visually appealing web applications.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-10">
            {/* My Projects & Download CV Buttons */}
            <a href="#projects" className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-300 transition shadow-[0_0_15px_rgba(255,255,255,0.3)] inline-block">
              My Projects
            </a>
            <a href="/Remon_CV.pdf" download="Remon_CV.pdf" className="border border-white/20 text-white px-8 py-3 rounded-full hover:bg-white/10 transition inline-block">
              Download CV
            </a>
          </div>

          {/* Social Links - (Replace # with your real profile links) */}
          <div className="flex space-x-4 text-gray-400">
            <a href="https://github.com/rokonuzzamanremon03" target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-full hover:text-brandPink hover:bg-white/10 transition border border-white/5"><FaGithub size={20} /></a>
            <a href="https://linkedin.com/in/rokonuzzamanremon03" target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-full hover:text-brandPink hover:bg-white/10 transition border border-white/5"><FaLinkedin size={20} /></a>
            <a href="https://twitter.com/rokonuzzaman03" target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-full hover:text-brandPink hover:bg-white/10 transition border border-white/5"><FaTwitter size={20} /></a>
            <a href="https://facebook.com/rokonuzzaman.remon03" target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-full hover:text-brandPink hover:bg-white/10 transition border border-white/5"><FaFacebook size={20} /></a>
          </div>
        </motion.div>

        {/* 3D Avatar Image */}
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative flex justify-center items-center mt-10 md:mt-0">
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute w-72 h-80 border-2 border-brandPurple rounded-3xl opacity-30"></motion.div>
          <div className="absolute w-72 h-80 border-4 border-brandPink rounded-3xl -rotate-6 opacity-40"></div>
          
          <div className="w-64 h-80 bg-gradient-to-tr from-brandPurple/40 to-transparent rounded-2xl z-10 flex items-center justify-center border border-white/10 backdrop-blur-md overflow-hidden text-center text-sm text-gray-300 shadow-[0_0_50px_rgba(155,44,250,0.4)] relative">
            <div className="absolute inset-0 bg-black/10"></div>
            {/* Image Tag for Avatar */}
            <img src="/avatar.png" alt="3D Avatar" className="w-full h-full object-cover relative z-20" />
          </div>
        </motion.div>
      </main>

      {/* 2. About Me Section */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-24">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true, margin: "-100px" }} className="bg-cardGlass backdrop-blur-lg border border-white/5 rounded-3xl p-10 md:p-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <div className="flex justify-center relative">
            <div className="absolute w-64 h-64 bg-gradient-to-br from-brandPink to-brandPurple rounded-full blur-2xl opacity-40"></div>
            <div className="w-64 h-64 bg-darkBg border-[6px] border-cardGlass rounded-[40px] rotate-12 flex items-center justify-center relative z-10 overflow-hidden shadow-2xl transition-transform hover:rotate-0 duration-500">
               {/* Real Photo Tag */}
               <img src="/profile.png" alt="Rokon Uz Zaman Remon" className="w-full h-full object-cover" />
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold mb-6 text-white">About me</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Welcome to my portfolio! I'm a passionate Web Developer and AI Enthusiast dedicated to creating seamless and visually engaging digital experiences. I specialize in designing intuitive interfaces that enhance usability, alongside integrating smart AI functionalities to build robust, modern solutions.
            </p>
            <div className="flex items-start gap-4 bg-white/5 p-4 rounded-xl border border-white/10 mb-8">
              <FaMagic className="text-brandPink text-xl mt-1 shrink-0" />
              <p className="text-sm text-gray-300 italic">
                "I am deeply committed to my work, investing creativity and precision into every project to ensure a unique and effective user experience."
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Core Skills</h4>
              <div className="flex flex-wrap gap-4">
                {[ { icon: <FaReact />, color: "text-[#61DAFB]" }, { icon: <SiJavascript />, color: "text-[#F7DF1E]" }, { icon: <SiTailwindcss />, color: "text-[#38B2AC]" }, { icon: <FaNodeJs />, color: "text-[#339933]" }, { icon: <FaPython />, color: "text-[#3776AB]" }, { icon: <FaFigma />, color: "text-[#F24E1E]" } ].map((skill, index) => (
                  <div key={index} className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl hover:bg-white/10 hover:scale-110 transition-all cursor-pointer">
                    <span className={skill.color}>{skill.icon}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 3. Services Section */}
      <section id="services" className="max-w-6xl mx-auto px-6 py-24 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <h3 className="text-3xl font-bold mb-2">Services</h3>
          <p className="text-gray-400 text-sm mb-16">Transforming ideas into intuitive digital experiences</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Web Development", desc: "Building fast, responsive, and engaging websites tailored to your needs.", icon: <FaLaptopCode />, highlight: true },
            { title: "AI Integration", desc: "Implementing smart AI solutions to automate and enhance digital platforms.", icon: <FaRobot />, highlight: false },
            { title: "App Design", desc: "Crafting seamless and user-friendly mobile app interfaces.", icon: <FaMobileAlt />, highlight: false },
            { title: "UI/UX & Prototyping", desc: "Creating intuitive architectures and wireframes for better flow.", icon: <FaDraftingCompass />, highlight: false }
          ].map((service, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true, margin: "-50px" }} className={`p-8 rounded-3xl text-left transition-all duration-300 hover:-translate-y-2 cursor-pointer border ${ service.highlight ? "bg-gradient-to-br from-brandPurple to-brandPink border-transparent shadow-[0_10px_30px_rgba(155,44,250,0.3)]" : "bg-cardGlass backdrop-blur-md border-white/5 hover:border-brandPurple/50" }`}>
              <div className={`text-4xl mb-6 ${service.highlight ? "text-white" : "text-brandPink"}`}>{service.icon}</div>
              <h4 className="text-xl font-bold mb-3 text-white">{service.title}</h4>
              <p className={`text-sm ${service.highlight ? "text-white/90" : "text-gray-400"}`}>{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. My Projects Section */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-24 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <h3 className="text-3xl font-bold mb-2">My Projects</h3>
          <p className="text-gray-400 text-sm mb-16">Discover the projects that showcase my passion for tech and innovation</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true, margin: "-50px" }} className="group bg-cardGlass border border-white/5 rounded-3xl p-6 text-left hover:border-brandPurple/50 transition-all duration-300 overflow-hidden relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-brandPurple to-brandPink opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 rounded-3xl z-0"></div>
              
              <div className="relative z-10 flex justify-between items-start mb-6">
                <div>
                  <span className="px-3 py-1 bg-white/10 text-brandPink text-xs rounded-full inline-block mb-3 border border-white/5">
                    {project.category}
                  </span>
                  <h4 className="text-2xl font-bold text-white mb-2">{project.title}</h4>
                </div>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-brandPurple transition-colors border border-white/10">
                  <FaExternalLinkAlt size={14} />
                </a>
              </div>
              <p className="text-gray-400 text-sm mb-6 h-10">{project.desc}</p>
              
              <div className="flex gap-2 flex-wrap">
                {project.tech.map((tech, i) => (
                  <span key={i} className="text-xs font-semibold text-gray-300 bg-black/30 px-3 py-1.5 rounded-md border border-white/5">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. Contact Section */}
      <section id="contact" className="max-w-4xl mx-auto px-6 py-24">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="bg-cardGlass backdrop-blur-md border border-white/10 rounded-3xl p-10 md:p-16 relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-brandPink rounded-full blur-[100px] opacity-20"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Let's Create Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandPurple to-brandPink">Amazing</span> Together
              </h3>
              <p className="text-gray-400 text-sm mb-8">Got an idea? Need a functional website or an AI solution? Just drop a message and let's start talking.</p>
            </div>
            
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div>
                <label className="text-sm text-gray-400 mb-1 block">Name</label>
                <input type="text" name="user_name" required placeholder="Your name" className="w-full bg-darkBg border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brandPurple transition-colors" />
              </div>
              <div>
                <label className="text-sm text-gray-400 mb-1 block">Email</label>
                <input type="email" name="user_email" required placeholder="Your email address" className="w-full bg-darkBg border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brandPurple transition-colors" />
              </div>
              <div>
                <label className="text-sm text-gray-400 mb-1 block">Message</label>
                <textarea name="message" required rows="4" placeholder="How can I help you?" className="w-full bg-darkBg border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brandPurple transition-colors resize-none"></textarea>
              </div>
              
              <button type="submit" disabled={isLoading} className={`w-full bg-gradient-to-r from-brandPurple to-brandPink text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}>
                {isLoading ? "Sending..." : <><FaPaperPlane /> Send Message</>}
              </button>
              
              {isSent && (
                <p className="text-green-400 text-sm mt-2 text-center bg-green-400/10 py-2 rounded-lg border border-green-400/20">
                  Thanks for reaching out! I'll get back to you soon.
                </p>
              )}
            </form>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 border-t border-white/5 mt-10">
        <p className="text-gray-500 text-sm">© 2026 Rokon Uz Zaman Remon. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default App;