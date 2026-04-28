/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useSpring } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  ChevronRight,
  Code2,
  Palette,
  Layout,
  Terminal,
  ArrowUpRight,
  Menu,
  X
} from 'lucide-react';
import { useState, useEffect } from 'react';

const projects = [
  {
    title: "EcoSphere AI",
    category: "Development",
    description: "An AI-powered environmental monitoring dashboard with real-time data visualization.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    link: "#"
  },
  {
    title: "Nova Design System",
    category: "UI Design",
    description: "A comprehensive design system built for scalability and performance in modern web apps.",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1964&auto=format&fit=crop",
    link: "#"
  },
  {
    title: "Quantum Ledger",
    category: "Blockchain",
    description: "Secure and transparent transaction tracking system for enterprise supply chains.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2064&auto=format&fit=crop",
    link: "#"
  },
  {
    title: "Synth Audio Engine",
    category: "Tooling",
    description: "Low-latency browser-based synthesis engine for experimental music composition.",
    image: "https://images.unsplash.com/photo-1558403194-611308249627?q=80&w=2070&auto=format&fit=crop",
    link: "#"
  }
];

const expertise = [
  { icon: <Code2 className="w-6 h-6" />, title: "Full Stack Development", items: ["React", "TypeScript", "Node.js", "GraphQL"] },
  { icon: <Palette className="w-6 h-6" />, title: "Product Design", items: ["UI/UX", "Figma", "Design Systems", "Prototyping"] },
  { icon: <Layout className="w-6 h-6" />, title: "Creative Frontend", items: ["Motion Design", "Three.js", "Wait-Free UI", "A11y"] },
  { icon: <Terminal className="w-6 h-6" />, title: "Workflow Automation", items: ["CI/CD", "Tooling", "Shell Scripting", "Infrastructure"] },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen bg-brand-bg text-brand-ink selection:bg-brand-ink select-none overflow-x-hidden">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-brand-accent origin-left z-50"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav 
        className={`fixed top-0 w-full z-40 transition-all duration-300 ${
          scrolled ? 'bg-brand-bg/90 backdrop-blur-md geo-border-b py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-10 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl font-bold tracking-tighter flex items-center gap-1 uppercase"
          >
            AAJ<span className="text-gray-400">—</span>PORTFOLIO
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10 text-[10px] font-bold uppercase tracking-[0.2em]">
            {['Works', 'About', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-brand-muted hover:text-brand-ink transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-brand-ink"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 w-full bg-brand-bg border-b border-brand-line p-6 flex flex-col gap-4 md:hidden backdrop-blur-xl"
          >
            {['Expertise', 'Projects', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className="text-xl font-display py-2 border-b border-brand-line/50"
              >
                {item}
              </a>
            ))}
            <button className="w-full py-4 bg-brand-accent text-white font-bold mt-4">DOWNLOAD RESUME</button>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center border-b border-brand-line overflow-hidden pt-10">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-12 h-screen max-h-[900px]">
          {/* Rail */}
          <div className="hidden md:flex col-span-1 border-r border-brand-line flex-col items-center justify-center gap-12">
            <div className="rotate-[-90deg] whitespace-nowrap text-[8px] tracking-[0.6em] font-bold text-gray-400 uppercase">Awi Akbar — Portfolio</div>
            <div className="w-[1px] h-32 bg-brand-line"></div>
          </div>

          <div className="col-span-12 md:col-span-11 grid grid-cols-1 md:grid-cols-11">
            <div className="md:col-span-6 flex flex-col justify-center p-10 md:p-20 md:geo-border-r h-full">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="pill-tag w-fit mb-8">Creative Developer</div>
                <h1 className="text-7xl md:text-8xl lg:text-[100px] font-bold leading-[0.85] tracking-tighter mb-8">
                  Awi Akbar<br />Jaelani
                </h1>
                <p className="text-sm md:text-base text-brand-muted max-w-sm leading-relaxed mb-10 font-normal">
                  Crafting high-performance digital interfaces and visual experiences with technical precision and artistic intent. Based in Indonesia.
                </p>
                <div className="flex gap-4">
                  <a href="#projects" className="px-8 py-4 bg-brand-ink text-white text-[10px] font-bold uppercase tracking-widest hover:bg-gray-800 transition-all">
                    View Collective
                  </a>
                </div>
              </motion.div>
            </div>

            <div className="md:col-span-5 bg-gray-50 flex items-center justify-center p-10 relative overflow-hidden">
               <div className="w-4/5 h-4/5 border border-brand-line flex items-center justify-center relative">
                  <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-brand-ink"></div>
                  <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-brand-ink"></div>
                  <div className="text-center">
                    <div className="text-[140px] font-thin leading-none text-gray-200">26</div>
                    <div className="text-[10px] uppercase tracking-[0.4em] font-bold mt-[-20px] text-brand-ink opacity-40">Year Concept</div>
                  </div>
               </div>
               {/* Pattern */}
               <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                  <div className="grid grid-cols-4 grid-rows-4 h-full w-full gap-2">
                    {[...Array(16)].map((_, i) => (
                      <div key={i} className="border border-brand-ink rounded-full"></div>
                    ))}
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-24 border-b border-brand-line">
        <div className="max-w-7xl mx-auto px-10">
          <div className="grid grid-cols-12">
            <div className="col-span-12 md:col-span-3 mb-16 md:mb-0">
              <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400 mb-6">Core Services</h2>
              <p className="text-sm font-medium leading-relaxed max-w-[200px]">Technical precision meeting artistic vision.</p>
            </div>
            <div className="col-span-12 md:col-span-9 grid grid-cols-1 sm:grid-cols-2 gap-y-12 gap-x-20">
              {expertise.map((skill, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-brand-accent rounded-full" />
                    {skill.title}
                  </h3>
                  <p className="text-xs text-brand-muted mb-6 font-mono leading-loose">
                    {skill.items.join(' / ')}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="works" className="py-24 geo-border-b bg-white">
        <div className="max-w-7xl mx-auto px-10">
          <div className="mb-20">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400 mb-4">Selected Works</h2>
            <div className="flex justify-between items-end">
               <h3 className="text-5xl font-bold tracking-tighter">Case Studies</h3>
               <button className="text-[10px] font-bold uppercase tracking-widest border-b border-brand-ink pb-1">View Archives</button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-brand-line border border-brand-line">
            {projects.map((project, idx) => (
              <motion.div 
                key={idx}
                className="group bg-brand-surface p-10 hover:bg-gray-50 transition-colors"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <div className="aspect-[16/9] overflow-hidden mb-10 border border-brand-line bg-gray-100">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105" 
                  />
                </div>
                <div className="flex justify-between items-start">
                   <div>
                     <div className="text-[9px] font-bold uppercase tracking-[0.3em] text-brand-muted mb-4">{project.category}</div>
                     <h4 className="text-2xl font-bold tracking-tight mb-2 uppercase">{project.title}</h4>
                     <p className="text-xs text-brand-muted max-w-sm font-medium leading-relaxed">{project.description}</p>
                   </div>
                   <ArrowUpRight className="w-5 h-5 text-gray-300 group-hover:text-brand-ink transition-colors" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section id="contact" className="py-24 bg-brand-ink text-white">
        <div className="max-w-7xl mx-auto px-10">
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-12 lg:col-span-7">
               <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none mb-12 uppercase">
                 Start a<br />Collaboration
               </h2>
               <div className="space-y-6">
                 <a href="mailto:hello@awiakbar.com" className="text-2xl md:text-3xl font-light hover:opacity-70 transition-all flex items-center gap-4 group">
                    hello@awijaelani.co
                    <ArrowUpRight className="w-6 h-6 opacity-30 group-hover:opacity-100 transition-all" />
                 </a>
                 <div className="flex gap-10 pt-4">
                   {['LinkedIn', 'GitHub', 'Behance'].map((social, i) => (
                     <a key={i} href="#" className="text-[10px] font-bold uppercase tracking-[0.3em] hover:text-gray-400 transition-colors">
                        {social}
                     </a>
                   ))}
                 </div>
               </div>
            </div>
            
            <div className="col-span-12 lg:col-span-5 bg-white/5 border border-white/10 p-10 text-white">
               <form className="space-y-8">
                  <div className="space-y-2">
                    <label className="text-[9px] uppercase font-bold tracking-widest opacity-40">Brief Name</label>
                    <input type="text" className="w-full bg-transparent border-b border-white/20 py-3 outline-none focus:border-white transition-all text-sm" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] uppercase font-bold tracking-widest opacity-40">Mail Identifier</label>
                    <input type="email" className="w-full bg-transparent border-b border-white/20 py-3 outline-none focus:border-white transition-all text-sm" placeholder="your@email.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] uppercase font-bold tracking-widest opacity-40">The Vision</label>
                    <textarea rows={3} className="w-full bg-transparent border-b border-white/20 py-3 outline-none focus:border-white transition-all resize-none text-sm" placeholder="Project details" />
                  </div>
                  <button className="w-full py-5 bg-white text-black font-bold text-xs uppercase tracking-[0.3em] hover:bg-gray-200 transition-all">
                    Initiate Connection
                  </button>
               </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-brand-bg text-center text-gray-400 text-[8px] tracking-[0.6em] uppercase font-bold">
        <div className="max-w-7xl mx-auto px-10">
          AAJ—24 / Built with technical precision and artistic intent.
        </div>
      </footer>
    </div>
  );
}
