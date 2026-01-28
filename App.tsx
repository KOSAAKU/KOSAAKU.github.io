import React, { useState, useEffect } from 'react';
import { DATA } from './constants';
import { Language } from './types';
import { FadeIn } from './components/FadeIn';
import { Logo } from './components/Logos';

// --- Icons ---
const Icons = {
  ArrowRight: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  ),
  ArrowUpRight: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5L19.5 4.5m0 0H8.25m11.25 0v11.25" />
    </svg>
  ),
  Mail: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  ),
  Github: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  ),
  Linkedin: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  ),
  Download: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
    </svg>
  )
};

// --- Components ---

const GridBackground = () => (
  <div className="fixed inset-0 pointer-events-none z-0 flex justify-center w-full max-w-[1400px] mx-auto px-6 sm:px-12 md:px-16">
    <div className="w-full h-full border-l border-r border-neutral-100 grid grid-cols-4">
      <div className="border-r border-neutral-100/50 h-full"></div>
      <div className="border-r border-neutral-100/50 h-full"></div>
      <div className="border-r border-neutral-100/50 h-full"></div>
      <div className="h-full"></div>
    </div>
  </div>
);

const SectionLabel = ({ index, label }: { index: string; label: string }) => (
  <FadeIn className="sticky top-32 z-10 mix-blend-difference">
    <div className="flex items-center gap-4">
      <span className="font-mono text-xs text-neutral-400">({index})</span>
      <span className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-900">{label}</span>
    </div>
  </FadeIn>
);

const LinkWithHover = ({ href, children, target }: { href: string; children?: React.ReactNode; target?: string }) => (
  <a 
    href={href} 
    target={target}
    className="relative inline-block text-lg text-black hover:text-neutral-700 transition-colors duration-300
               after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-px after:bottom-0 after:left-0 
               after:bg-black after:origin-bottom-right after:transition-transform after:duration-500 after:ease-[cubic-bezier(0.16,1,0.3,1)]
               hover:after:scale-x-100 hover:after:origin-bottom-left"
  >
    {children}
  </a>
);

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('fr');
  const t = DATA[lang];
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans selection:bg-black selection:text-white">
      
      {/* Background Architectural Grid */}
      <GridBackground />

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 flex justify-end px-6 sm:px-12 md:px-16 py-8 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${scrolled ? 'py-4 translate-y-0' : 'py-8'}`}>
        <div className={`
          flex items-center gap-1 pl-2 pr-2 py-1.5 rounded-full 
          bg-white/90 backdrop-blur-xl border border-neutral-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)]
          transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.02] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]
        `}>
          <button 
            onClick={() => setLang(l => l === 'fr' ? 'en' : 'fr')}
            className="px-3 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase hover:bg-neutral-100 transition-colors"
          >
            {lang}
          </button>
          <div className="w-px h-4 bg-neutral-200 mx-1"></div>
          <a href="mailto:f.ayaichia@ecole-ipssi.net" className="p-2 rounded-full hover:bg-neutral-100 text-neutral-600 hover:text-black transition-colors">
            <Icons.Mail className="w-4 h-4" />
          </a>
          <a href="https://github.com/KOSAAKU" target="_blank" rel="noreferrer" className="p-2 rounded-full hover:bg-neutral-100 text-neutral-600 hover:text-black transition-colors">
            <Icons.Github className="w-4 h-4" />
          </a>
          <a href="https://www.linkedin.com/in/faris-ayaichia-825a83284/" target="_blank" rel="noreferrer" className="p-2 rounded-full hover:bg-neutral-100 text-neutral-600 hover:text-black transition-colors">
            <Icons.Linkedin className="w-4 h-4" />
          </a>
        </div>
      </nav>

      <main className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-12 md:px-16">

        {/* --- HERO SECTION --- */}
        <section className="min-h-screen flex flex-col justify-end pb-24 md:pb-32 relative">
          <FadeIn delay={100} yOffset={20}>
            <div className="flex items-center gap-3 mb-8">
               <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="font-mono text-xs text-neutral-500 uppercase tracking-wider">
                {t.header.availability}
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={200} className="relative">
            <h1 className="text-[13vw] sm:text-[11vw] leading-[0.8] font-semibold tracking-tighter text-black -ml-[0.05em] select-none">
              FARIS
            </h1>
            <h1 className="text-[13vw] sm:text-[11vw] leading-[0.8] font-semibold tracking-tighter text-neutral-300 -ml-[0.05em] select-none">
              AYAICHIA
            </h1>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16 md:mt-24">
            <div className="md:col-start-3 md:col-span-2">
              <FadeIn delay={400}>
                <p className="text-xl md:text-2xl font-light text-neutral-600 leading-relaxed text-balance">
                  {t.header.description}
                </p>
                <div className="mt-8 pt-8 border-t border-neutral-100 flex items-center gap-6">
                   <span className="text-xs font-bold uppercase tracking-widest text-neutral-950">Fullstack Developer</span>
                   <span className="text-xs font-bold uppercase tracking-widest text-neutral-950">System & Network</span>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* --- EXPERIENCE SECTION --- */}
        <section id="experience" className="py-32 md:py-48 border-t border-black">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-0">
            <div className="md:col-span-1">
              <SectionLabel index="01" label={t.nav.experience} />
            </div>
            
            <div className="md:col-span-3 flex flex-col">
              {t.experience.map((job, i) => (
                <FadeIn key={i} delay={i * 150}>
                  <div className="group relative border-b border-neutral-200 py-12 md:py-16 hover:border-neutral-900 transition-colors duration-500">
                    <div className="grid grid-cols-1 md:grid-cols-8 gap-6">
                      {/* Period */}
                      <div className="md:col-span-2">
                        <span className="font-mono text-xs text-neutral-400 group-hover:text-neutral-900 transition-colors duration-300">
                          {job.period}
                        </span>
                      </div>
                      
                      {/* Logo + Content */}
                      <div className="md:col-span-6 grid grid-cols-[3rem_1fr] md:grid-cols-[4rem_1fr] gap-4 md:gap-6">
                        {/* Logo Container */}
                        <div className="w-12 h-12 md:w-14 md:h-14 p-2 bg-neutral-50 rounded-lg flex items-center justify-center text-neutral-400 group-hover:text-black group-hover:bg-neutral-100 transition-all duration-500">
                          <Logo name={job.logo} className="opacity-80 group-hover:opacity-100 transition-opacity" />
                        </div>

                        <div>
                          <h3 className="text-2xl md:text-3xl font-medium text-black mb-2 group-hover:translate-x-2 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                            {job.role}
                          </h3>
                          <div className="text-sm font-bold uppercase tracking-wide text-neutral-400 mb-6 group-hover:translate-x-2 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] delay-75">
                            {job.company}
                          </div>
                          <p className="text-lg text-neutral-600 font-light leading-relaxed max-w-xl group-hover:text-black transition-colors duration-300">
                            {job.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* --- SKILLS SECTION --- */}
        <section id="skills" className="py-32 md:py-48 border-t border-neutral-200">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-0">
            <div className="md:col-span-1">
              <SectionLabel index="02" label={t.nav.skills} />
            </div>

            <div className="md:col-span-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-16">
                {t.skills.map((category, i) => (
                  <FadeIn key={i} delay={i * 100}>
                    <div className="bg-neutral-50 p-8 md:p-10 border border-neutral-100 hover:border-neutral-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] h-full">
                      <h4 className="text-sm font-bold uppercase tracking-widest text-neutral-950 mb-8 border-b border-neutral-200 pb-4">
                        {category.title}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill) => (
                          <span key={skill} className="px-3 py-1.5 text-sm text-neutral-600 bg-white border border-neutral-200 hover:border-neutral-900 hover:text-black transition-colors duration-300 cursor-default">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* --- EDUCATION SECTION --- */}
        <section id="education" className="py-32 md:py-48 border-t border-neutral-200">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-0">
            <div className="md:col-span-1">
              <SectionLabel index="03" label={t.nav.education} />
            </div>

            <div className="md:col-span-3 space-y-16">
              {t.education.map((edu, i) => (
                <FadeIn key={i} delay={i * 100}>
                  <div className="grid grid-cols-1 md:grid-cols-8 gap-4 items-baseline group">
                    <div className="md:col-span-2">
                       <div className="inline-block px-2 py-1 bg-black text-white text-[10px] font-bold uppercase tracking-widest group-hover:bg-neutral-700 transition-colors">
                         {edu.period.split('—')[0].split(' ')[1] || '2025'}
                       </div>
                    </div>
                    
                    <div className="md:col-span-6 border-l border-neutral-200 pl-6 md:pl-12 py-2 group-hover:border-black transition-colors duration-500">
                      <div className="flex items-start gap-4 mb-2">
                         <div className="w-8 h-8 flex-shrink-0 text-neutral-300 group-hover:text-black transition-colors duration-500">
                            <Logo name={edu.logo} />
                         </div>
                         <div>
                            <h4 className="text-xl font-medium text-black">
                              {edu.degree}
                            </h4>
                            <p className="text-sm text-neutral-500 font-mono mt-1 mb-4">{edu.school}</p>
                         </div>
                      </div>
                      <p className="text-neutral-600 font-light max-w-lg">{edu.description}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* --- CONTACT HERO --- */}
        <section className="py-32 md:py-64 border-t border-black">
          <FadeIn>
            <div className="flex flex-col items-start">
               <span className="font-mono text-xs text-neutral-400 mb-8">(04) — {t.sectionTitles.contact.toUpperCase()}</span>
               
               <a href={`mailto:${t.contact.email}`} className="group relative block w-full">
                 <h2 className="text-[8vw] md:text-[6vw] font-bold tracking-tighter text-black leading-none group-hover:text-neutral-500 transition-colors duration-500">
                   Let's work <br/> together<span className="text-neutral-300">.</span>
                 </h2>
                 <div className="absolute top-1/2 right-0 md:right-32 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:-translate-x-12 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
                    <Icons.ArrowUpRight className="w-24 h-24 md:w-32 md:h-32 text-black" />
                 </div>
               </a>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-24 w-full border-t border-neutral-200 pt-12">
                 <div>
                   <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4">Coordinates</p>
                   <ul className="space-y-2">
                     <li>
                        <LinkWithHover href={`mailto:${t.contact.email}`}>
                          {t.contact.email}
                        </LinkWithHover>
                     </li>
                   </ul>
                 </div>
                 <div className="md:text-right">
                    <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4">Socials</p>
                    <div className="flex md:justify-end gap-6">
                      <LinkWithHover href="https://github.com/KOSAAKU" target="_blank">GitHub</LinkWithHover>
                      <LinkWithHover href="https://www.linkedin.com/in/faris-ayaichia-825a83284/" target="_blank">LinkedIn</LinkWithHover>
                    </div>
                 </div>
               </div>
            </div>
          </FadeIn>
        </section>

      </main>

      {/* --- FOOTER --- */}
      <footer className="w-full border-t border-neutral-100 bg-white relative z-10">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 md:px-16 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-950">Faris Ayaichia</p>
          <p className="text-[10px] font-mono text-neutral-400">Lyon, France — {new Date().getFullYear()}</p>
        </div>
      </footer>

    </div>
  );
};

export default App;