import React, { useState, useEffect } from 'react';
import profileImg from './assets/profile.png';

export default function App() {
  const [lang, setLang] = useState('en');

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
      navAbout: "About", navSkills: "Skills", navExp: "Experience", navProjects: "Projects", navEdu: "Education", navContact: "Contact",
      letstalk: "Let's talk",
      badge: "Available for freelance & full-time roles",
      greeting: "Hello, I'm Saja.",
      roleLine1: "Front-End",
      roleLine2: "Developer",
      roleLine3: "& UI Enthusiast",
      bio: "I build responsive user interfaces, interactive web applications, and modern digital experiences using React.js, Tailwind CSS, and modern web technologies.",
      viewProjects: "View Projects",
      downloadCv: "Download CV",
      
      aboutTag: "ABOUT",
      aboutTitle: "Engineering ideas into real, intelligent products.",
      aboutDesc1: "I'm a Computer Science student and front-end focused developer based in Gaza, shipping responsive user interfaces that pair clean modern architecture with smooth interactive experiences. I care about clean code, intuitive UI/UX design, and web apps that quietly do the right thing for the people using it.",
      aboutDesc2: "Over the last few years I've built platforms for local projects, student applications and freelance clients — from interactive dashboards to full web stores — and I love turning a vague brief into a measurable result.",
      
      toolkitTitle: "A practical, modern toolkit.",
      toolkitSub: "The technologies I reach for to design, ship and scale reliable software.",
      trackTitle: "A short, focused track record.",
      trackSub: "Shipping real systems for real teams.",
      
      eduTag: "EDUCATION",
      eduTitle: "Academic foundation.",
      universityName: "Al-Azhar University – Gaza",
      degreeName: "B.Sc. in Computer Science",
      gradYearLabel: "Graduation year",
      gradeLabel: "Grade",
      gradeValue: "Very Good — 85.77%",

      projectsTitle: "Featured projects.",
      projectsSub: "A few systems I've designed, built and shipped end-to-end.",
      liveDemo: "Live Demo",
      github: "GitHub",
      letBuild: "Let's build something.",
      letBuildSub: "Have a project, role or idea in mind? I'd love to hear about it.",
      formName: "Name",
      formEmail: "Email",
      formMessage: "Message",
      sendMsg: "Send message",
      footer: "© 2026 Saja Alwahedi. All Rights Reserved."
    },
    ar: {
      navAbout: "عني", navSkills: "المهارات", navExp: "الخبرة", navProjects: "المشاريع", navEdu: "التعليم", navContact: "تواصل معي",
      letstalk: "دعنا نتحدث",
      badge: "متاحة للأعمال الحرّة والوظائف الدائمة",
      greeting: "مرحباً، أنا سجى.",
      roleLine1: "مطورة واجهات",
      roleLine2: "أمامية",
      roleLine3: "ومصممة ويب",
      bio: "أقوم ببناء واجهات مستخدم متجاوبة، وتطبيقات ويب تفاعلية وعصرية باستخدام React.js و Tailwind CSS وأحدث تقنيات الويب.",
      viewProjects: "عرض المشاريع",
      downloadCv: "تحميل السيرة الذاتية",
      
      aboutTag: "عني",
      aboutTitle: "تحويل الأفكار إلى منتجات حقيقية وذكية.",
      aboutDesc1: "أنا طالبة علوم حاسوب ومطورة واجهات أمامية مقيمة في غزة، أقوم بتطوير واجهات مستخدم متجاوبة تجمع بين التصميم العصري والأداء السلس. أهتم بكتابة كود نظيف، تصميم تجربة مستخدم بديهية، وتطبيقات ويب تقدم أفضل قيمة للمستخدمين.",
      aboutDesc2: "خلال السنوات الأخيرة، قمت ببناء منصات ومشاريع متعددة — بدءاً من لوحات التحكم التفاعلية وصولاً إلى المتاجر الإلكترونية — وأسعى دائماً لتحويل الأفكار البسيطة إلى نتائج مبهرة وملموسة.",
      
      toolkitTitle: "أدوات عملية وعصرية.",
      toolkitSub: "التقنيات التي أستخدمها لتصميم وتطوير برمجيات موثوقة وعالية الأداء.",
      trackTitle: "مسيرة مهنية مركزة.",
      trackSub: "تطوير أنظمة وتطبيقات حقيقية لفرق عمل متميزة.",
      
      eduTag: "التعليم",
      eduTitle: "الأساس الأكاديمي.",
      universityName: "جامعة الأزهر – غزة",
      degreeName: "بكالوريوس في علوم الحاسوب",
      gradYearLabel: "سنة التخرج",
      gradeLabel: "التقدير",
      gradeValue: "جيد جداً — 85.77%",

      projectsTitle: "أبرز المشاريع.",
      projectsSub: "مشاريع قمت بتصميمها، بنائها وإطلاقها من البداية للنهاية.",
      liveDemo: "معاينة مباشرة",
      github: "جيت هب",
      letBuild: "لنبدأ البناء.",
      letBuildSub: "لديك مشروع، دور وظيفي أو فكرة في ذهنك؟ يسعدني سماعها.",
      formName: "الاسم",
      formEmail: "البريد الإلكتروني",
      formMessage: "الرسالة",
      sendMsg: "إرسال الرسالة",
      footer: "© 2026 سجى الوحيدي. جميع الحقوق محفوظة."
    }
  };

  const currentT = t[lang];

  const skillCards = [
    {
      title: "Frontend",
      count: "5 skills",
      skills: [
        { name: "React.js", level: "96%" },
        { name: "Tailwind CSS", level: "95%" },
        { name: "HTML5", level: "97%" },
        { name: "JavaScript", level: "94%" },
        { name: "CSS3", level: "95%" }
      ]
    },
    {
      title: "Programming & Logic",
      count: "4 skills",
      skills: [
        { name: "Java", level: "88%" },
        { name: "C++", level: "85%" },
        { name: "Python", level: "80%" },
        { name: "Data Structures & Algorithms", level: "82%" }
      ]
    },
    {
      title: "Tools & Workflow",
      count: "4 skills",
      skills: [
        { name: "Git", level: "92%" },
        { name: "GitHub", level: "92%" },
        { name: "Vite", level: "90%" },
        { name: "VS Code", level: "95%" }
      ]
    },
    {
      title: "APIs & Storage",
      count: "4 skills",
      skills: [
        { name: "REST APIs", level: "88%" },
        { name: "LocalStorage", level: "95%" },
        { name: "SQL Databases", level: "85%" },
        { name: "Responsive UI Design", level: "95%" }
      ]
    }
  ];

  const projects = [
    {
      title: "Glass Weather Dashboard",
      desc: lang === 'en' ? "A modern weather dashboard featuring Glassmorphism design, dark/light themes, and interactive maps." : "لوحة تحكم للطقس بتصميم زجاجي عصري مع خرائط تفاعلية ودعم كامل للوضع الداكن.",
      tech: ["HTML5", "Tailwind CSS", "JavaScript", "Leaflet API"],
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
    <div className="bg-[#090a0f] text-slate-100 min-h-screen selection:bg-cyan-500 selection:text-white font-sans overflow-x-hidden relative" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      
      {/* خلفية شبكية */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293d15_1px,transparent_1px),linear-gradient(to_bottom,#1f293d15_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>

      {/* 1. Navbar العلوي */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#090a0f]/80 backdrop-blur-xl border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#about-hero" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-lg shadow-lg shadow-cyan-500/20 text-white">
              S
            </div>
            <span className="font-bold text-lg tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              Saja<span className="text-cyan-400">.dev</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-400 font-medium">
            <a href="#about-section" className="hover:text-cyan-400 transition-colors">{currentT.navAbout}</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">{currentT.navSkills}</a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors">{currentT.navExp}</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">{currentT.navProjects}</a>
            <a href="#education" className="hover:text-cyan-400 transition-colors">{currentT.navEdu}</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">{currentT.navContact}</a>
          </nav>

          <div className="flex items-center gap-4">
            <button onClick={() => setLang(lang === 'en' ? 'ar' : 'en')} className="px-3 py-1.5 rounded-xl border border-slate-800 bg-slate-900/90 text-cyan-400 text-xs font-bold hover:border-cyan-500/50 transition-all">
              🌐 {lang === 'en' ? 'AR' : 'EN'}
            </button>
            <a href="#contact" className="hidden sm:inline-flex px-5 py-2.5 rounded-xl bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-700 hover:border-cyan-500/50 text-xs font-semibold text-white shadow-md transition-all">
              {currentT.letstalk}
            </a>
          </div>
        </div>
      </header>

      {/* 2. Hero Section */}
      <section id="about-hero" className="max-w-7xl mx-auto px-6 pt-36 pb-20 flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10">
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
            <a 
              href={`${import.meta.env.BASE_URL}Saja_Alwahedi_CV.pdf`}
              target="_blank" 
              rel="noopener noreferrer"
              download="Saja_Alwahedi_CV.pdf" 
              className="px-7 py-3.5 rounded-xl border border-slate-800 bg-slate-900/50 text-slate-300 font-semibold text-sm hover:border-cyan-500/50 transition-all text-center inline-block"
            >
              {currentT.downloadCv}
            </a>
          </div>
        </div>

        {/* بطاقة الصورة الشخصية */}
        <div className="w-full lg:w-5/12 flex justify-center">
          <div className="relative group scroll-animate opacity-0 translate-y-10 transition-all duration-700">
            <div className="absolute -inset-2 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-[2.5rem] blur-xl opacity-30 group-hover:opacity-60 transition duration-500"></div>
            
            <div className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-[2rem] border border-slate-800 bg-gradient-to-b from-slate-900 to-[#0b0e14] overflow-hidden p-3 shadow-2xl">
              <img src={profileImg} alt="Saja Alwahedi" className="w-full h-full object-cover object-top rounded-2xl" />
              
              <div className="absolute top-6 left-6 px-3 py-1.5 rounded-xl backdrop-blur-md bg-slate-950/80 border border-slate-800/80 text-[11px]">
                <div className="text-slate-400 text-[9px] uppercase tracking-wider font-mono">Stack</div>
                <div className="font-bold text-cyan-400">React · Tailwind</div>
              </div>

              <div className="absolute top-1/2 right-4 -translate-y-1/2 px-3 py-1.5 rounded-xl backdrop-blur-md bg-slate-950/80 border border-slate-800/80 text-[11px]">
                <div className="text-slate-400 text-[9px] uppercase tracking-wider font-mono">Focus</div>
                <div className="font-bold text-cyan-400">UI / UX Design</div>
              </div>

              <div className="absolute bottom-6 left-6 right-6 p-3.5 rounded-xl backdrop-blur-md bg-slate-950/90 border border-slate-800/80 flex items-center justify-between text-xs">
                <div>
                  <div className="text-[10px] text-cyan-400 font-bold">Saja Alwahedi</div>
                  <div className="text-[10px] text-slate-400">Gaza, Palestine</div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] text-slate-400">Open to</div>
                  <div className="font-bold text-emerald-400">Remote · Global</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. قسم الـ About (بطاقات: 2 فوق و2 تحت على الجوال وعلى اللابتوب بفضل استخدام grid-cols-2 دائماً) */}
      <section id="about-section" className="max-w-7xl mx-auto px-6 py-24 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider bg-slate-900 border border-slate-800 text-cyan-400 mb-6 scroll-animate opacity-0 translate-y-10 transition-all duration-700">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
          {currentT.aboutTag}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 scroll-animate opacity-0 translate-y-10 transition-all duration-700">
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-8 leading-[1.2]">
              {currentT.aboutTitle}
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mb-6 leading-relaxed">
              {currentT.aboutDesc1}
            </p>
            <p className="text-slate-400 text-sm sm:text-base mb-10 leading-relaxed">
              {currentT.aboutDesc2}
            </p>

            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-xs font-medium text-slate-300">🎓 Computer Science Student</span>
              <span className="px-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-xs font-medium text-slate-300">💻 Front-End Developer</span>
              <span className="px-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-xs font-medium text-slate-300">✨ UI Integration Specialist</span>
            </div>
          </div>

          {/* هنا تم ضبط الـ grid ليصبح grid-cols-2 دائماً (2 فوق و2 تحت على الجوال واللابتوب) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4 scroll-animate opacity-0 translate-y-10 transition-all duration-700">
            <div className="p-5 sm:p-7 rounded-3xl border border-slate-800/80 bg-slate-900/40 flex flex-col justify-between h-40 sm:h-48">
              <span className="text-cyan-400 text-base sm:text-lg">❖</span>
              <div>
                <div className="text-2xl sm:text-4xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-1">3+</div>
                <div className="text-[11px] sm:text-xs text-slate-400 font-medium">Years Experience</div>
              </div>
            </div>
            <div className="p-5 sm:p-7 rounded-3xl border border-slate-800/80 bg-slate-900/40 flex flex-col justify-between h-40 sm:h-48">
              <span className="text-cyan-400 text-base sm:text-lg">❖</span>
              <div>
                <div className="text-2xl sm:text-4xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-1">15+</div>
                <div className="text-[11px] sm:text-xs text-slate-400 font-medium">Projects Completed</div>
              </div>
            </div>
            <div className="p-5 sm:p-7 rounded-3xl border border-slate-800/80 bg-slate-900/40 flex flex-col justify-between h-40 sm:h-48">
              <span className="text-cyan-400 text-base sm:text-lg">❖</span>
              <div>
                <div className="text-xl sm:text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-1">React</div>
                <div className="text-[11px] sm:text-xs text-slate-400 font-medium">Frontend Specialist</div>
              </div>
            </div>
            <div className="p-5 sm:p-7 rounded-3xl border border-slate-800/80 bg-slate-900/40 flex flex-col justify-between h-40 sm:h-48">
              <span className="text-cyan-400 text-base sm:text-lg">❖</span>
              <div>
                <div className="text-xl sm:text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-1">UI/UX</div>
                <div className="text-[11px] sm:text-xs text-slate-400 font-medium">Modern Interfaces</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. قسم المهارات */}
      <section id="skills" className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="mb-12 scroll-animate opacity-0 translate-y-10 transition-all duration-700">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-3 tracking-tight">{currentT.toolkitTitle}</h2>
          <p className="text-slate-400 text-sm sm:text-base">{currentT.toolkitSub}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCards.map((card, idx) => (
            <div key={idx} className="p-8 rounded-3xl border border-slate-800/80 bg-slate-900/40 hover:border-cyan-500/40 transition-all scroll-animate opacity-0 translate-y-10 duration-700 shadow-xl" style={{ transitionDelay: `${idx * 150}ms` }}>
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-800/80">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                    ❖
                  </div>
                  <h3 className="font-bold text-lg text-slate-100">{card.title}</h3>
                </div>
                <span className="text-xs font-mono text-slate-400 px-3 py-1 rounded-full bg-slate-800/60 border border-slate-700/50">
                  {card.count}
                </span>
              </div>

              <div className="space-y-6">
                {card.skills.map((skill, sIdx) => (
                  <div key={sIdx}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-slate-300 font-medium">{skill.name}</span>
                      <span className="font-mono text-slate-400 text-xs">{skill.level}</span>
                    </div>
                    <div className="w-full bg-slate-800/60 h-2 rounded-full overflow-hidden p-0.5 border border-slate-800">
                      <div className="bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-600 h-full rounded-full transition-all duration-1000" style={{ width: skill.level }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Experience & Education Section */}
      <section id="experience" className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="mb-12 scroll-animate opacity-0 translate-y-10 transition-all duration-700">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 tracking-tight">{currentT.trackTitle}</h2>
          <p className="text-slate-400 text-sm">{currentT.trackSub}</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          <div className="p-8 rounded-3xl border border-slate-800/80 bg-gradient-to-br from-slate-900/80 via-slate-900/40 to-[#0b0e14] scroll-animate opacity-0 translate-y-10 transition-all duration-700 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider bg-slate-900 border border-slate-800 text-cyan-400 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
              {lang === 'en' ? 'EXPERIENCE' : 'الخبرة المهنية'}
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold mb-8 tracking-tight text-white">
              {lang === 'en' ? 'Professional track.' : 'المسار المهني.'}
            </h2>

            <div className="p-7 rounded-3xl border border-slate-800/80 bg-[#0c0e15]/90 relative">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white text-xl shadow-lg shadow-cyan-500/20 shrink-0">
                  💻
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Front-End Developer</h3>
                  <p className="text-xs text-slate-400 font-medium">Independent & Freelance</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-2xl border border-slate-800/60 bg-slate-950/40">
                  <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
                    <span>⏳</span>
                    <span>{lang === 'en' ? 'Timeline' : 'الفترة الزمنية'}</span>
                  </div>
                  <div className="font-bold text-white text-sm">2024 — Present</div>
                </div>

                <div className="p-4 rounded-2xl border border-slate-800/60 bg-slate-950/40">
                  <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
                    <span>💼</span>
                    <span>{lang === 'en' ? 'Status' : 'الحالة'}</span>
                  </div>
                  <div className="font-bold text-emerald-400 text-sm">Active & Available</div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 pt-4">
                {lang === 'en' 
                  ? "Building responsive web apps, interactive user interfaces, and integrating modern design components." 
                  : "تطوير تطبيقات ويب متجاوبة، واجهات مستخدم تفاعلية، ودمج مكونات التصميم الحديثة."}
              </p>
            </div>
          </div>

          <div id="education" className="p-8 rounded-3xl border border-slate-800/80 bg-gradient-to-br from-slate-900/80 via-slate-900/40 to-[#0b0e14] scroll-animate opacity-0 translate-y-10 transition-all duration-700 delay-150 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider bg-slate-900 border border-slate-800 text-cyan-400 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
              {currentT.eduTag}
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold mb-8 tracking-tight text-white">{currentT.eduTitle}</h2>

            <div className="p-7 rounded-3xl border border-slate-800/80 bg-[#0c0e15]/90 relative">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white text-xl shadow-lg shadow-cyan-500/20 shrink-0">
                  🎓
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">{currentT.universityName}</h3>
                  <p className="text-xs text-slate-400 font-medium">{currentT.degreeName}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl border border-slate-800/60 bg-slate-950/40">
                  <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
                    <span>📅</span>
                    <span>{currentT.gradYearLabel}</span>
                  </div>
                  <div className="font-bold text-white text-sm">2026</div>
                </div>

                <div className="p-4 rounded-2xl border border-slate-800/60 bg-slate-950/40">
                  <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
                    <span>🏆</span>
                    <span>{currentT.gradeLabel}</span>
                  </div>
                  <div className="font-bold text-emerald-400 text-sm">{currentT.gradeValue}</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 6. Projects Section (هنا أيضاً يمكنك جعلها 2 فوق و2 تحت على اللابتوب باستخدام grid-cols-2 بدلاً من md:grid-cols-2) */}
      <section id="projects" className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="mb-12 scroll-animate opacity-0 translate-y-10 transition-all duration-700">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 tracking-tight">{currentT.projectsTitle}</h2>
          <p className="text-slate-400 text-sm">{currentT.projectsSub}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="p-7 rounded-3xl border border-slate-800/80 bg-slate-900/40 hover:border-cyan-500/50 transition-all flex flex-col justify-between group scroll-animate opacity-0 translate-y-10 duration-700" style={{ transitionDelay: `${idx * 150}ms` }}>
              <div>
                <div className="h-44 rounded-2xl bg-gradient-to-br from-slate-950 to-slate-900 border border-slate-800/60 mb-6 flex items-center justify-center relative overflow-hidden group-hover:border-cyan-500/30 transition-colors">
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
                  {currentT.github} 💻
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Contact Section */}
      <section id="contact" className="max-w-7xl mx-auto px-6 py-20 relative z-10 scroll-animate opacity-0 translate-y-10 transition-all duration-700">
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

      {/* 8. Footer */}
      <footer className="py-8 text-center border-t border-slate-900 text-xs text-slate-500 relative z-10">
        <p>{currentT.footer}</p>
      </footer>

    </div>
  );
}