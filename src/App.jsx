import React, { useState, useEffect } from 'react';
import profileImg from './assets/profile.png';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [lang, setLang] = useState('en');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  // النصوص والترجمات (عربي / إنجليزي)
  const t = {
    en: {
      navAbout: "About", navSkills: "Skills", navProjects: "Projects", navExp: "Experience", navContact: "Contact",
      badge: "Available for Opportunities ✨",
      greeting: "Hello, I'm ",
      title: "Junior Front-End Developer | React.js | JavaScript",
      bio: "Computer Science graduate and a Front-End developer specializing in building modern, responsive, and interactive web applications using React.js and Tailwind CSS, with hands-on experience in API integration and RTL/LTR support.",
      viewProjects: "View Projects",
      skillsTitle: "Technical Skills",
      projectsTitle: "Featured Projects",
      projectsSub: "A collection of web applications and interfaces developed with live preview and source code links.",
      liveDemo: "Live Demo 🚀",
      code: "Source Code 💻",
      expTitle: "Work Experience",
      eduTitle: "Education & Certifications",
      expRole: "Front-End Developer Intern",
      expCompany: "Tech Code | Gaza (120 training hours)",
      expDesc: [
        "Built responsive and reusable UI components using modern web technologies.",
        "Applied Git & GitHub for project management and collaborative development.",
        "Optimized interface performance and ensured cross-device responsiveness."
      ],
      edu1Title: "B.Sc. in Computer Science",
      edu1Uni: "Al-Azhar University – Gaza",
      edu1Time: "August 2022 – July 2026",
      edu2Title: "Front-End Web Development Certificate (120 hours)",
      edu2Inst: "Code Tech in collaboration with Engineers Syndicate Training Center",
      edu2Time: "November 2025 – January 2026",
      contactTitle: "Get In Touch",
      contactSub: "I'm always excited to connect and collaborate on new front-end projects.",
      emailLabel: "Email", phoneLabel: "Phone", locLabel: "Location",
      footer: "Designed & Developed by Saja Alwahedi © "
    },
    ar: {
      navAbout: "عني", navSkills: "المهارات", navProjects: "المشاريع", navExp: "الخبرة", navContact: "تواصل معي",
      badge: "متاحة للفرص المهنية ✨",
      greeting: "مرحباً، أنا ",
      title: "مطورة واجهات أمامية | React.js | JavaScript",
      bio: "خريجة علوم حاسوب ومطورة واجهات أمامية متخصصة في بناء تطبيقات ويب عصرية، متجاوبة، وتفاعلية باستخدام React.js و Tailwind CSS مع خبرة عملية في دمج APIs ودعم واجهات RTL/LTR.",
      viewProjects: "عرض المشاريع",
      skillsTitle: "المهارات التقنية",
      projectsTitle: "أبرز المشاريع",
      projectsSub: "مجموعة من التطبيقات والواجهات التي قمت ببرمجتها مع روابط الاستعراض الحي والكود المصدري.",
      liveDemo: "معاينة مباشرة 🚀",
      code: "كود المشروع 💻",
      expTitle: "الخبرة العملية",
      eduTitle: "التعليم والشهادات",
      expRole: "متدربة تطوير واجهات أمامية",
      expCompany: "Tech Code | غزة (120 ساعة تدريبية)",
      expDesc: [
        "بناء واجهات ومكونات UI متجاوبة وقابلة للإعادة باستخدام تقنيات الويب الحديثة.",
        "تطبيق Git & GitHub في إدارة المشاريع والتطوير الجماعي.",
        "تحسين أداء الواجهات والتأكد من توافقها مع مختلف الشاشات والأجهزة."
      ],
      edu1Title: "بكالوريوس علوم الحاسوب",
      edu1Uni: "جامعة الأزهر – غزة",
      edu1Time: "أغسطس 2022 – يوليو 2026",
      edu2Title: "شهادة تطوير الويب Front-End (120 ساعة)",
      edu2Inst: "Code Tech بالتعاون مع مركز تدريب نقابة المهندسين",
      edu2Time: "نوفمبر 2025 – يناير 2026",
      contactTitle: "تواصل معي",
      contactSub: "يسعدني التواصل والتعاون في مشاريع فرونت إند جديدة.",
      emailLabel: "البريد الإلكتروني", phoneLabel: "الهاتف", locLabel: "الموقع",
      footer: "تصميم وتطوير بواسطة سجى الوحيدي © "
    }
  };

  const currentT = t[lang];

  // بيانات الملف الشخصي
  const profile = {
    name: "سجى الوحيدي",
    nameEn: "Saja Alwahedi",
    email: "sajaraed302@gmail.com",
    phone: "+970 56 897 8513",
    github: "https://github.com/sajaraed",
    linkedin: "https://linkedin.com/in/saja-alwahedi-558b05353",
  };

  // المهارات التقنية مقسمة لفئات
  const skills = {
    "Frontend": ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "HTML5", "CSS3", "Responsive Design"],
    "Programming": ["Java", "Python", "C++"],
    "APIs & Web Tools": ["REST APIs", "Open-Meteo API", "Leaflet.js", "Vite"],
    "Databases & Version Control": ["Git", "GitHub", "VS Code", "SQL", "Oracle Database"]
  };

  // المشاريع
  const projects = [
    {
      title: "Glass Weather Dashboard",
      tech: ["HTML5", "Tailwind CSS v4", "JavaScript", "Open-Meteo API", "Leaflet.js"],
      desc: lang === 'en' ? "A modern weather dashboard featuring Glassmorphism design, dark/light themes, interactive maps, time formatting, and RTL/LTR support." : "لوحة تحكم للطقس بتصميم عصري (Glassmorphism) وتدعم السمات الداكنة/الفاتحة، مع دمج خرائط تفاعلية وتحديد التوقيت ودعم العربية والإنجليزية (RTL/LTR).",
      demo: "https://sajaraed.github.io/glass-weather-dashboard/",
      github: "https://github.com/sajaraed/glass-weather-dashboard"
    },
    {
      title: "Coffee & Desserts Store App",
      tech: ["React.js", "Tailwind CSS", "JavaScript", "LocalStorage"],
      desc: lang === 'en' ? "An integrated e-commerce app for coffee and desserts built with React.js, featuring an interactive shopping cart, product filtering, and LocalStorage with RTL/LTR support." : "تطبيق متجر إلكتروني متكامل للقهوة والحلويات باستخدام React.js يتضمن سلة تسوق تفاعلية، فلترة المنتجات، وحفظ البيانات محلياً مع دعم RTL/LTR.",
      demo: "https://sajaraed.github.io/coffee-app/",
      github: "https://github.com/sajaraed/coffee-app"
    },
    {
      title: "BS Luxury Hotel Website",
      tech: ["HTML5", "Tailwind CSS", "JavaScript"],
      desc: lang === 'en' ? "An interactive luxury hotel website featuring high responsiveness, scroll animations, and smooth mobile browsing." : "موقع إلكتروني تفاعلي لفندق فاخر بتصميم عالي التجاوب مع مؤثرات حركية وتصفح سلس للموبايل والأجهزة المختلفة.",
      demo: "https://sajaraed.github.io/hotel-bs/",
      github: "https://github.com/sajaraed/hotel-bs"
    },
    {
      title: "Interactive Notes App",
      tech: ["HTML5", "CSS3", "JavaScript (ES6+)", "LocalStorage"],
      desc: lang === 'en' ? "An interactive note and task management app using Masonry Grid layout with filtering options, dark mode, and multi-language support." : "تطبيق تفاعلي لإدارة الملاحظات والمهام بأسلوب Masonry Grid مع خيارات الفلترة والدعم الكامل للوضع الليلي واللغة العربية.",
      demo: "https://sajaraed.github.io/notes-app/",
      github: "https://github.com/sajaraed/notes-app"
    }
  ];

  return (
    <div className={darkMode ? "bg-slate-950 text-slate-100 min-h-screen selection:bg-cyan-500 selection:text-white overflow-x-hidden" : "bg-slate-50 text-slate-700 min-h-screen selection:bg-cyan-500 selection:text-white overflow-x-hidden"} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      
      {/* 1. شريط التنقل العلوي (Navbar) */}
      <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b transition-colors ${darkMode ? 'bg-slate-900/85 border-slate-800/80 shadow-lg shadow-slate-950/20' : 'bg-slate-100/85 border-slate-200/80 shadow-sm'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          
          <div className="font-bold text-base sm:text-lg md:text-xl flex items-center gap-2">
            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent truncate max-w-[180px] sm:max-w-none">
              {profile.nameEn}
            </span>
            <span className={`text-[10px] sm:text-xs px-2 py-0.5 rounded-full border font-mono tracking-wider hidden xs:inline-block ${darkMode ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30' : 'bg-cyan-500/10 text-cyan-600 border-cyan-500/20'}`}>
              &lt;dev&gt;
            </span>
          </div>

          {/* روابط القائمة بالشاشات الكبيرة */}
          <div className="hidden md:flex items-center gap-x-6 lg:gap-x-8 text-sm font-medium">
            <a href="#about" className="hover:text-cyan-500 transition-colors">{currentT.navAbout}</a>
            <a href="#skills" className="hover:text-cyan-500 transition-colors">{currentT.navSkills}</a>
            <a href="#projects" className="hover:text-cyan-500 transition-colors">{currentT.navProjects}</a>
            <a href="#experience" className="hover:text-cyan-500 transition-colors">{currentT.navExp}</a>
            <a href="#contact" className="hover:text-cyan-500 transition-colors">{currentT.navContact}</a>
          </div>

          {/* أزرار التحكم (اللغة، الوضع الليلي) */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button onClick={() => setLang(lang === 'en' ? 'ar' : 'en')} className={`px-2.5 sm:px-3 py-1.5 rounded-xl border text-xs font-bold ${darkMode ? 'border-slate-700 bg-slate-800/90 text-cyan-400' : 'border-slate-300 bg-white text-cyan-600'} hover:scale-105 transition-all shadow-xs`}>
              🌐 {lang === 'en' ? 'AR' : 'EN'}
            </button>
            <button onClick={() => setDarkMode(!darkMode)} className={`p-2 rounded-xl border text-xs sm:text-sm ${darkMode ? 'border-slate-700 bg-slate-800/90 text-yellow-400' : 'border-slate-300 bg-white text-amber-500'} hover:scale-105 transition-all shadow-xs`}>
              {darkMode ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </nav>

      {/* 2. قسم المقدمة (Hero Section) */}
      <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 pb-16 sm:pb-24 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        <div className="w-full lg:w-7/12 text-center lg:text-start scroll-animate opacity-0 translate-y-10 transition-all duration-700">
          <div className={`inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold border mb-6 shadow-xs ${darkMode ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20' : 'bg-cyan-500/10 text-cyan-700 border-cyan-200'}`}>
            {currentT.badge}
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight tracking-tight">
            {currentT.greeting} <span className="bg-gradient-to-r from-cyan-500 via-teal-500 to-blue-600 bg-clip-text text-transparent">{lang === 'en' ? profile.nameEn : profile.name}</span>
          </h1>
          <h2 className={`text-base sm:text-lg lg:text-xl font-medium mb-6 font-mono ${darkMode ? 'text-cyan-400/90' : 'text-cyan-700'}`}>
            {currentT.title}
          </h2>
          <p className={`text-sm sm:text-base lg:text-lg leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            {currentT.bio}
          </p>
          <div className="flex flex-wrap gap-3.5 justify-center lg:justify-start items-center">
            <a href="#projects" className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:opacity-90 transition-all shadow-lg shadow-cyan-500/20 text-center text-sm">
              {currentT.viewProjects}
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className={`px-5 py-3 rounded-xl border font-semibold transition-all text-sm ${darkMode ? 'border-slate-800 bg-slate-900/80 text-slate-200 hover:border-cyan-500/50' : 'border-slate-300 bg-white text-slate-700 hover:border-cyan-500 shadow-xs'}`}>
              GitHub ↗
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className={`px-5 py-3 rounded-xl border font-semibold transition-all text-sm ${darkMode ? 'border-slate-800 bg-slate-900/80 text-slate-200 hover:border-cyan-500/50' : 'border-slate-300 bg-white text-slate-700 hover:border-cyan-500 shadow-xs'}`}>
              LinkedIn ↗
            </a>
          </div>
        </div>

        {/* الصورة الشخصية */}
        <div className="w-full lg:w-5/12 flex justify-center items-center">
          <div className="relative group scroll-animate opacity-0 translate-y-10 transition-all duration-700">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl blur opacity-30 group-hover:opacity-75 transition duration-500"></div>
            <div className={`relative w-64 h-64 sm:w-72 sm:h-72 rounded-3xl border overflow-hidden flex items-center justify-center ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-2xl'}`}>
              <img src={profileImg} alt="Saja Alwahedi" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. قسم المهارات (Skills Section) */}
      <section id="skills" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-10 sm:mb-12 text-center scroll-animate opacity-0 translate-y-10 transition-all duration-700 tracking-tight">
          {currentT.skillsTitle}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(skills).map(([category, items], idx) => (
            <div key={idx} className={`p-6 rounded-3xl border scroll-animate opacity-0 translate-y-10 transition-all duration-700 ${darkMode ? 'bg-slate-900/40 border-slate-800/80 hover:border-cyan-500/40' : 'bg-white/80 border-slate-200 shadow-md shadow-slate-100 hover:border-cyan-500/50'}`} style={{ transitionDelay: `${idx * 150}ms` }}>
              <h3 className={`font-bold mb-4 text-base border-b pb-2 ${darkMode ? 'text-cyan-400 border-slate-800/60' : 'text-cyan-700 border-slate-100'}`}>{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill, sIdx) => (
                  <span key={sIdx} className={`text-xs px-3 py-1.5 rounded-xl border font-medium ${darkMode ? 'bg-slate-800/60 border-slate-700/60 text-slate-200' : 'bg-slate-50 border-slate-200 text-slate-600'}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. قسم المشاريع (Projects Section) */}
      <section id="projects" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center mb-12 sm:mb-16 scroll-animate opacity-0 translate-y-10 transition-all duration-700">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 tracking-tight">{currentT.projectsTitle}</h2>
          <p className={`max-w-xl mx-auto text-xs sm:text-sm md:text-base leading-relaxed px-4 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>{currentT.projectsSub}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className={`p-6 sm:p-7 rounded-3xl border flex flex-col justify-between scroll-animate opacity-0 translate-y-10 transition-all duration-700 group ${darkMode ? 'bg-slate-900/40 border-slate-800/80 hover:border-cyan-500/60 hover:shadow-2xl hover:shadow-cyan-950/30' : 'bg-white/90 border-slate-200 shadow-lg shadow-slate-100 hover:border-cyan-500/50 hover:shadow-xl'}`} style={{ transitionDelay: `${idx * 150}ms` }}>
              <div>
                <h3 className={`text-lg sm:text-xl font-bold mb-3 group-hover:translate-x-1 transition-transform ${darkMode ? 'text-cyan-400' : 'text-cyan-700'}`}>{project.title}</h3>
                <p className={`text-xs sm:text-sm mb-5 leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{project.desc}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t, tIdx) => (
                    <span key={tIdx} className={`text-[11px] sm:text-xs px-2.5 py-1 rounded-lg font-mono border ${darkMode ? 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20' : 'bg-cyan-50 text-cyan-700 border-cyan-200/60'}`}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className={`flex flex-wrap items-center gap-3 sm:gap-4 pt-4 border-t ${darkMode ? 'border-slate-800/80' : 'border-slate-100'}`}>
                <a href={project.demo} target="_blank" rel="noreferrer" className="text-xs font-semibold px-4 sm:px-4.5 py-2.5 rounded-xl bg-cyan-500 text-white hover:bg-cyan-600 transition-all shadow-md shadow-cyan-500/20 text-center">
                  {currentT.liveDemo}
                </a>
                <a href={project.github} target="_blank" rel="noreferrer" className={`text-xs font-semibold px-4 sm:px-4.5 py-2.5 rounded-xl border text-center transition-all ${darkMode ? 'border-slate-700/80 hover:border-cyan-400 text-slate-300' : 'border-slate-300 hover:border-cyan-500 text-slate-700 bg-white'}`}>
                  {currentT.code}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. الخبرة والتعليم (Experience & Education) */}
      <section id="experience" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
          
          {/* الخبرة العملية */}
          <div className="scroll-animate opacity-0 translate-y-10 transition-all duration-700">
            <h2 className="text-xl sm:text-2xl font-bold mb-6 flex items-center gap-2.5 tracking-tight">
              <span>💼</span> {currentT.expTitle}
            </h2>
            <div className={`p-6 sm:p-7 rounded-3xl border ${darkMode ? 'bg-slate-900/40 border-slate-800/80' : 'bg-white/80 border-slate-200 shadow-lg shadow-slate-100'}`}>
              <h3 className={`font-bold text-base sm:text-lg ${darkMode ? 'text-cyan-400' : 'text-cyan-700'}`}>{currentT.expRole}</h3>
              <p className="text-xs font-medium text-slate-400 mb-5 font-mono">{currentT.expCompany}</p>
              <ul className={`space-y-3 text-xs sm:text-sm ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                {currentT.expDesc.map((desc, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                    <span className="text-cyan-500 mt-1 shrink-0">▸</span>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* التعليم والشهادات */}
          <div className="scroll-animate opacity-0 translate-y-10 transition-all duration-700 delay-200">
            <h2 className="text-xl sm:text-2xl font-bold mb-6 flex items-center gap-2.5 tracking-tight">
              <span>🎓</span> {currentT.eduTitle}
            </h2>
            <div className="space-y-5">
              
              {/* شهادة البكالوريوس مع المعدل */}
              <div className={`p-6 rounded-3xl border ${darkMode ? 'bg-slate-900/40 border-slate-800/80' : 'bg-white/80 border-slate-200 shadow-lg shadow-slate-100'}`}>
                <h3 className={`font-bold text-sm sm:text-base ${darkMode ? 'text-cyan-400' : 'text-cyan-700'}`}>{currentT.edu1Title}</h3>
                <p className="text-xs text-slate-500 mt-1">{currentT.edu1Uni}</p>
                
                {/* إضافة المعدل هنا */}
                <div className="mt-3 flex items-center gap-2">
                  <span className={`text-[10px] sm:text-xs px-2.5 py-1 rounded-full font-medium ${darkMode ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-emerald-50 text-emerald-700 border border-emerald-200'}`}>
                    {lang === 'ar' ? 'جيد جداً (85.77%)' : 'Very Good (85.77%)'}
                  </span>
                </div>

                <div className="flex flex-wrap justify-end items-center mt-3 text-xs font-semibold text-slate-400">
                  <span>{currentT.edu1Time}</span>
                </div>
              </div>

              {/* شهادة التدريب */}
              <div className={`p-6 rounded-3xl border ${darkMode ? 'bg-slate-900/40 border-slate-800/80' : 'bg-white/80 border-slate-200 shadow-lg shadow-slate-100'}`}>
                <h3 className={`font-bold text-sm sm:text-base ${darkMode ? 'text-cyan-400' : 'text-cyan-700'}`}>{currentT.edu2Title}</h3>
                <p className="text-xs text-slate-500 mt-1">{currentT.edu2Inst}</p>
                <div className="flex justify-end items-center mt-4 text-xs font-semibold text-slate-400">
                  <span>{currentT.edu2Time}</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 6. قسم التواصل (Contact Section) */}
      <section id="contact" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center scroll-animate opacity-0 translate-y-10 transition-all duration-700">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3 tracking-tight">{currentT.contactTitle}</h2>
        <p className={`text-xs sm:text-sm md:text-base mb-10 sm:mb-12 max-w-lg mx-auto leading-relaxed px-4 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>{currentT.contactSub}</p>
        <div className="grid grid-cols-3 gap-3 sm:gap-6">
          <div className={`p-3 sm:p-6 rounded-2xl sm:rounded-3xl border flex flex-col items-center justify-center transition-all ${darkMode ? 'bg-slate-900/40 border-slate-800/80 hover:border-cyan-500/40' : 'bg-white/90 border-slate-200 shadow-sm hover:border-cyan-500/40'}`}>
            <span className="text-lg sm:text-2xl mb-1 sm:mb-3">✉️</span>
            <h4 className="font-bold text-[11px] sm:text-sm mb-0.5 sm:mb-1">{currentT.emailLabel}</h4>
            <a href={`mailto:${profile.email}`} className="text-[10px] sm:text-xs text-cyan-600 hover:underline break-all">{profile.email}</a>
          </div>
          <div className={`p-3 sm:p-6 rounded-2xl sm:rounded-3xl border flex flex-col items-center justify-center transition-all ${darkMode ? 'bg-slate-900/40 border-slate-800/80 hover:border-cyan-500/40' : 'bg-white/90 border-slate-200 shadow-sm hover:border-cyan-500/40'}`}>
            <span className="text-lg sm:text-2xl mb-1 sm:mb-3">📱</span>
            <h4 className="font-bold text-[11px] sm:text-sm mb-0.5 sm:mb-1">{currentT.phoneLabel}</h4>
            <a href={`tel:${profile.phone}`} className="text-[10px] sm:text-xs text-cyan-600 hover:underline">{profile.phone}</a>
          </div>
          <div className={`p-3 sm:p-6 rounded-2xl sm:rounded-3xl border flex flex-col items-center justify-center transition-all ${darkMode ? 'bg-slate-900/40 border-slate-800/80 hover:border-cyan-500/40' : 'bg-white/90 border-slate-200 shadow-sm hover:border-cyan-500/40'}`}>
            <span className="text-lg sm:text-2xl mb-1 sm:mb-3">📍</span>
            <h4 className="font-bold text-[11px] sm:text-sm mb-0.5 sm:mb-1">{currentT.locLabel}</h4>
            <span className="text-[10px] sm:text-xs text-slate-500">Gaza, Palestine</span>
          </div>
        </div>
      </section>

      {/* 7. التذييل (Footer) */}
      <footer className={`py-8 text-center border-t text-xs px-4 ${darkMode ? 'bg-slate-950 border-slate-900 text-slate-500' : 'bg-slate-100 border-slate-200 text-slate-500'}`}>
        <p>{currentT.footer} {new Date().getFullYear()}</p>
      </footer>

    </div>
  );
}