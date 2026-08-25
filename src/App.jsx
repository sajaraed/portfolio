import React, { useState, useEffect } from 'react';
import profileImg from './assets/profile.png';

export default function App() {
  const [lang, setLang] = useState('en');

  // تأثير ظهور العناصر عند التمرير (Scroll Animation)
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const t = {
    en: {
      navAbout: "About", navSkills: "Skills", navProjects: "Projects", navExp: "Experience", navContact: "Contact",
      badge: "Available for Opportunities ✨",
      greeting: "Hello, I'm ",
      name: "Saja Alwahedi.",
      roleLine1: "Front-End",
      roleLine2: "Developer & UI",
      roleLine3: "Enthusiast",
      bio: "Computer Science graduate and a Front-End developer specializing in building modern, responsive, and interactive web applications using React.js and Tailwind CSS.",
      viewProjects: "View Projects",
      contactBtn: "Contact me",
      toolkitTitle: "A practical, modern toolkit.",
      toolkitSub: "The technologies and tools I use to build scalable web apps.",
      trackTitle: "A short, focused track record.",
      trackSub: "My academic background, training, and experience timeline.",
      projectsTitle: "Featured projects.",
      projectsSub: "Designed to scale, engineered for performance.",
      liveDemo: "Live Demo",
      code: "Source Code",
      eduBadge: "Al-Azhar University of Gaza",
      eduSub: "B.Sc. in Computer Science — Very Good (85.77%)",
      letBuild: "Let's build something.",
      letBuildSub: "Have a project in mind or want to collaborate? Feel free to reach out.",
      formName: "Name",
      formEmail: "Email",
      formMessage: "Message",
      sendMsg: "Send message",
      footer: "© 2026 Saja Alwahedi. All rights reserved."
    },
    ar: {
      navAbout: "عني", navSkills: "المهارات", navProjects: "المشاريع", navExp: "الخبرة", navContact: "تواصل معي",
      badge: "متاحة للفرص المهنية ✨",
      greeting: "مرحباً، أنا ",
      name: "سجى الوحيدي.",
      roleLine1: "مطورة واجهات",
      roleLine2: "أمامية ومصممة",
      roleLine3: "تطبيقات الويب",
      bio: "خريجة علوم حاسوب ومطورة واجهات أمامية متخصصة في بناء تطبيقات ويب عصرية، متجاوبة، وتفاعلية باستخدام React.js و Tailwind CSS.",
      viewProjects: "عرض المشاريع",
      contactBtn: "تواصل معي",
      toolkitTitle: "أدوات عملية وعصرية.",
      toolkitSub: "التقنيات والأساليب التي أستخدمها لبناء واجهات ويب تفاعلية ومرنة.",
      trackTitle: "مسيرة مهنية وأكاديمية مركزة.",
      trackSub: "خلاصة دراستي الأكاديمية والتدريب العملي.",
      projectsTitle: "أبرز المشاريع.",
      projectsSub: "مشاريع مصممة بدقة لتقديم أداء عالي وتجربة مستخدم سلسة.",
      liveDemo: "معاينة مباشرة",
      code: "الكود المصدري",
      eduBadge: "جامعة الأزهر بغزة",
      eduSub: "بكالوريوس علوم الحاسوب — معدل جيد جداً (85.77%)",
      letBuild: "لنبدأ العمل معاً.",
      letBuildSub: "لديك مشروع قيد الإعداد أو ترغب بالتعاون؟ يسعدني جداً تواصلك.",
      formName: "الاسم",
      formEmail: "البريد الإلكتروني",
      formMessage: "الرسالة",
      sendMsg: "إرسال الرسالة",
      footer: "© 2026 سجى الوحيدي. جميع الحقوق محفوظة."
    }
  };

  const currentT = t[lang];

  // المهارات بنظام النشر والنسب المئوية مثل التصميم تماماً
  const skillCategories = [
    {
      title: "Frontend",
      percentage: "95%",
      skills: ["React.js", "JavaScript", "Tailwind CSS", "HTML5", "CSS3", "Responsive UI"]
    },
    {
      title: "Programming",
      percentage: "90%",
      skills: ["Java", "C++", "Python", "Algorithms"]
    },
    {
      title: "Web Tools & APIs",
      percentage: "88%",
      skills: ["REST APIs", "Vite", "Leaflet.js", "Open-Meteo", "LocalStorage"]
    },
    {
      title: "Version Control & DB",
      percentage: "85%",
      skills: ["Git", "GitHub", "VS Code", "SQL", "Oracle"]
    }
  ];

  const projects = [
    {
      title: "Glass Weather Dashboard",
      desc: lang === 'en' ? "A modern weather dashboard featuring Glassmorphism design, dark/light themes, and interactive maps." : "لوحة تحكم للطقس بتصميم زجاجي عصري مع خرائط تفاعلية ودعم كامل للوضع الداكن.",
      tech: ["HTML5", "Tailwind v4", "JavaScript", "Leaflet API"],
      demo: "https://sajaraed.github.io/glass-weather-dashboard/",
      github: "https://github.com/sajaraed/glass-weather-dashboard"
    },
    {
      title: "Coffee & Desserts Store App",
      desc: lang === 'en' ? "An integrated e-commerce app built with React.js featuring interactive shopping cart and product filtering." : "تطبيق متجر إلكتروني متكامل للقهوة والحلويات باستخدام React.js وسلة تسوق تفاعلية.",
      tech: ["React.js", "Tailwind CSS", "JavaScript"],
      demo: "https://sajaraed.github.io/coffee-app/",
      github: "https://github.com/sajaraed/coffee-app"
    },
    {
      title: "BS Luxury Hotel Website",
      desc: lang === 'en' ? "An interactive luxury hotel website featuring high responsiveness and smooth scroll animations." : "موقع فندق فاخر تفاعلي بتصميم عالي التجاوب مع مؤثرات حركية سلسة.",
      tech: ["HTML5", "Tailwind CSS", "JavaScript"],
      demo: "https://sajaraed.github.io/hotel-bs/",
      github: "https://github.com/sajaraed/hotel-bs"
    },
    {
      title: "Interactive Notes App",
      desc: lang === 'en' ? "A task and note management app using Masonry Grid layout with filtering and local storage." : "تطبيق لإدارة الملاحظات والمهام بأسلوب Masonry Grid مع خيارات الفلترة والتخزين المحلي.",
      tech: ["HTML5", "CSS3", "JavaScript"],
      demo: "https://sajaraed.github.io/notes-app/",
      github: "https://github.com/sajaraed/notes-app"
    }
  ];

  return (
    <div className="bg-[#090a0f] text-slate-100 min-h-screen selection:bg-cyan-500 selection:text-white font-sans overflow-x-hidden" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      
      {/* 1. Navbar العلوي */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#090a0f]/80 backdrop-blur-xl border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-lg shadow-lg shadow-cyan-500/20">
              S
            </div>
            <span className="font-bold text-lg tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              Saja Alwahedi
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm text-slate-400 font-medium">
            <a href="#about" className="hover:text-cyan-400 transition-colors">{currentT.navAbout}</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">{currentT.navSkills}</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">{currentT.navProjects}</a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors">{currentT.navExp}</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">{currentT.navContact}</a>
          </div>

          <div className="flex items-center gap-3">
            <button onClick={() => setLang(lang === 'en' ? 'ar' : 'en')} className="px-3 py-1.5 rounded-xl border border-slate-800 bg-slate-900/90 text-cyan-400 text-xs font-bold hover:border-cyan-500/50 transition-all">
              🌐 {lang === 'en' ? 'AR' : 'EN'}
            </button>
          </div>
        </div>
      </nav>

      {/* 2. Hero Section */}
      <section id="about" className="max-w-7xl mx-auto px-6 pt-36 pb-20 flex flex-col lg:flex-row items-center justify-between gap-16">
        <div className="w-full lg:w-7/12 scroll-animate opacity-0 translate-y-10 transition-all duration-700">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            {currentT.badge}
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold mb-6 leading-[1.1] tracking-tight">
            {currentT.greeting}<br />
            <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-500 bg-clip-text text-transparent">
              {currentT.roleLine1}
            </span><br />
            <span className="text-slate-200">{currentT.roleLine2}</span><br />
            <span className="text-slate-400 text-3xl sm:text-5xl">{currentT.roleLine3}</span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg mb-10 max-w-xl leading-relaxed">
            {currentT.bio}
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-sm shadow-xl shadow-cyan-500/20 hover:opacity-90 transition-all">
              {currentT.viewProjects}
            </a>
            <a href="#contact" className="px-7 py-3.5 rounded-xl border border-slate-800 bg-slate-900/50 text-slate-300 font-semibold text-sm hover:border-cyan-500/50 transition-all">
              {currentT.contactBtn}
            </a>
          </div>
        </div>

{/* صورة الشخصية تماماً بنمط الشاب */}
<div className="w-full lg:w-5/12 flex justify-center">
          <div className="relative group scroll-animate opacity-0 translate-y-10 transition-all duration-700">
            <div className="absolute -inset-2 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-[2.5rem] blur-xl opacity-40 group-hover:opacity-70 transition duration-500"></div>
            <div className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-[2rem] border border-slate-800 bg-gradient-to-b from-slate-900 to-[#0b0e14] overflow-hidden p-3 shadow-2xl">
              <img src={profileImg} alt="Saja Alwahedi" className="w-full h-full object-cover object-top rounded-2xl" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl backdrop-blur-md bg-slate-950/80 border border-slate-800/80 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-cyan-400">Saja Alwahedi</div>
                  <div className="text-[10px] text-slate-400">Front-End Developer</div>
                </div>
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Toolkit & Skills Section (نفس شبكة الكروت والنسب) */}
      <section id="skills" className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-12 scroll-animate opacity-0 translate-y-10 transition-all duration-700">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 tracking-tight">{currentT.toolkitTitle}</h2>
          <p className="text-slate-400 text-sm">{currentT.toolkitSub}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="p-6 rounded-3xl border border-slate-800/80 bg-slate-900/40 hover:border-cyan-500/40 transition-all scroll-animate opacity-0 translate-y-10 duration-700" style={{ transitionDelay: `${idx * 100}ms` }}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-cyan-400 text-sm">{cat.title}</h3>
                <span className="text-xs font-mono text-slate-500 bg-slate-800/60 px-2 py-0.5 rounded-md">{cat.percentage}</span>
              </div>
              <div className="w-full bg-slate-800/60 h-1.5 rounded-full mb-5 overflow-hidden">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-600 h-full rounded-full" style={{ width: cat.percentage }}></div>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s, sIdx) => (
                  <span key={sIdx} className="text-[11px] px-2.5 py-1 rounded-lg border border-slate-800 bg-slate-950/50 text-slate-300 font-medium">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Track Record (الخبرة والتعليم) */}
      <section id="experience" className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-12 scroll-animate opacity-0 translate-y-10 transition-all duration-700">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 tracking-tight">{currentT.trackTitle}</h2>
          <p className="text-slate-400 text-sm">{currentT.trackSub}</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="p-8 rounded-3xl border border-slate-800/80 bg-slate-900/40 scroll-animate opacity-0 translate-y-10 transition-all duration-700">
            <div className="text-cyan-400 font-mono text-xs mb-2">2025 — 2026</div>
            <h3 className="text-lg font-bold mb-1">Front-End Developer Intern</h3>
            <p className="text-xs text-slate-400 mb-4">Tech Code | Gaza (120 Training Hours)</p>
            <p className="text-sm text-slate-300 leading-relaxed">
              {lang === 'en' ? "Built responsive UI components using modern technologies, applied Git/GitHub workflows, and optimized cross-device web performance." : "بناء مكونات واجهات مستخدم متجاوبة باستخدام التقنيات الحديثة وتطبيق إدارة المشاريع عبر Git & GitHub."}
            </p>
          </div>
          <div className="p-8 rounded-3xl border border-slate-800/80 bg-slate-900/40 scroll-animate opacity-0 translate-y-10 transition-all duration-700 delay-150">
            <div className="text-cyan-400 font-mono text-xs mb-2">2022 — 2026</div>
            <h3 className="text-lg font-bold mb-1">B.Sc. in Computer Science</h3>
            <p className="text-xs text-slate-400 mb-4">Al-Azhar University – Gaza</p>
            <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
              {lang === 'en' ? 'Very Good — 85.77%' : 'جيد جداً — 85.77%'}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Featured Projects (المشاريع المميزة بنظام البطاقات) */}
      <section id="projects" className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-12 scroll-animate opacity-0 translate-y-10 transition-all duration-700">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 tracking-tight">{currentT.projectsTitle}</h2>
          <p className="text-slate-400 text-sm">{currentT.projectsSub}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="p-7 rounded-3xl border border-slate-800/80 bg-slate-900/40 hover:border-cyan-500/50 transition-all flex flex-col justify-between group scroll-animate opacity-0 translate-y-10 duration-700" style={{ transitionDelay: `${idx * 150}ms` }}>
              <div>
                <div className="h-40 rounded-2xl bg-gradient-to-br from-slate-950 to-slate-900 border border-slate-800/60 mb-6 flex items-center justify-center relative overflow-hidden group-hover:border-cyan-500/30 transition-colors">
                  <span className="text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    {project.title.split(' ')[0]}
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-2 text-cyan-400 group-hover:translate-x-1 transition-transform">{project.title}</h3>
                <p className="text-slate-400 text-xs sm:text-sm mb-6 leading-relaxed">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t, tIdx) => (
                    <span key={tIdx} className="text-[11px] px-2.5 py-1 rounded-lg bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 font-mono">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-800/80">
                <a href={project.demo} target="_blank" rel="noreferrer" className="flex-1 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white text-xs font-semibold text-center transition-all shadow-lg shadow-cyan-500/20">
                  {currentT.liveDemo} 🚀
                </a>
                <a href={project.github} target="_blank" rel="noreferrer" className="flex-1 py-2.5 rounded-xl border border-slate-800 bg-slate-900 hover:border-cyan-400 text-slate-300 text-xs font-semibold text-center transition-all">
                  {currentT.code} 💻
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Contact Section (نموذج التواصل مطابق تماماً للتصميم) */}
      <section id="contact" className="max-w-7xl mx-auto px-6 py-20 scroll-animate opacity-0 translate-y-10 transition-all duration-700">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-8 sm:p-12 rounded-3xl border border-slate-800/80 bg-slate-900/30 backdrop-blur-md">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">{currentT.letBuild}</h2>
            <p className="text-slate-400 text-sm mb-8 leading-relaxed">{currentT.letBuildSub}</p>
            
            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3 text-slate-300">
                <span className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">✉️</span>
                <span>sajaraed302@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <span className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">📱</span>
                <span>+970 56 897 8513</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <span className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">📍</span>
                <span>Gaza, Palestine</span>
              </div>
            </div>
          </div>

          <form onSubmit={(e) => { e.preventDefault(); alert(lang === 'ar' ? 'تم استلام رسالتك بنجاح!' : 'Message sent successfully!'); }} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1.5">{currentT.formName}</label>
              <input type="text" required className="w-full px-4 py-3 rounded-xl border border-slate-800 bg-slate-950/60 text-slate-200 text-sm focus:border-cyan-500 focus:outline-none transition-colors" placeholder="Name" />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1.5">{currentT.formEmail}</label>
              <input type="email" required className="w-full px-4 py-3 rounded-xl border border-slate-800 bg-slate-950/60 text-slate-200 text-sm focus:border-cyan-500 focus:outline-none transition-colors" placeholder="email@example.com" />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1.5">{currentT.formMessage}</label>
              <textarea rows="4" required className="w-full px-4 py-3 rounded-xl border border-slate-800 bg-slate-950/60 text-slate-200 text-sm focus:border-cyan-500 focus:outline-none transition-colors resize-none" placeholder="Your message..."></textarea>
            </div>
            <button type="submit" className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-sm shadow-xl shadow-cyan-500/20 hover:opacity-90 transition-all">
              {currentT.sendMsg} 🚀
            </button>
          </form>
        </div>
      </section>

      {/* 7. Footer */}
      <footer className="py-8 text-center border-t border-slate-900 text-xs text-slate-500">
        <p>{currentT.footer}</p>
      </footer>

    </div>
  );
}