"use client";

import React, { useState, useEffect, useRef } from "react";

type Language = "en" | "ar";

interface Skill {
  name: string;
  level: number;
}

interface SkillCard {
  title: { en: string; ar: string };
  skills: Skill[];
}

interface Project {
  title: string;
  desc: { en: string; ar: string };
  tech: string[];
  demo: string;
  github: string;
}

/* ------------------------------------------------------------------ */
/*  Reveal: scroll animation using Tailwind classes only (no CSS file) */
/* ------------------------------------------------------------------ */
function Reveal({
  children,
  className = "",
  delay = 0,
  id,
}: {
  children: React.ReactNode | ((visible: boolean) => React.ReactNode);
  className?: string;
  delay?: number;
  id?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -30px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      id={id}
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out motion-reduce:transition-none ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8 motion-reduce:opacity-100 motion-reduce:translate-y-0"
      } ${className}`}
    >
      {typeof children === "function" ? children(visible) : children}
    </div>
  );
}

export default function Home() {
  const [lang, setLang] = useState<Language>("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const isAr = lang === "ar";

  /* smooth scrolling without touching globals.css */
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  /* keep <html> in sync with the selected language */
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = isAr ? "rtl" : "ltr";
  }, [lang, isAr]);

  /* close mobile menu with Escape / when resizing to desktop */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    const onResize = () => window.innerWidth >= 1024 && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const t = {
    en: {
      navAbout: "About",
      navSkills: "Skills",
      navExp: "Experience",
      navProjects: "Projects",
      navEdu: "Education",
      navContact: "Contact",
      letstalk: "Let's talk",
      menu: "Menu",
      badge: "Available for freelance & full-time roles",
      greeting: "Hello, I'm Saja.",
      roleLine1: "Front-End",
      roleLine2: "Developer",
      roleLine3: "& UI Enthusiast",
      bio: "I build responsive user interfaces, interactive web applications, and modern digital experiences using React.js, Next.js, Tailwind CSS, and modern web technologies.",
      viewProjects: "View Projects",
      downloadCv: "Download CV",

      aboutTag: "ABOUT",
      aboutTitle: "Engineering ideas into real, intelligent products.",
      aboutDesc1:
        "I'm a Computer Science student and front-end focused developer based in Gaza, shipping responsive user interfaces that pair clean modern architecture with smooth interactive experiences. I care about clean code, intuitive UI/UX design, and web apps that quietly do the right thing for the people using it.",
      aboutDesc2:
        "Over the last few years I've built platforms for local projects, student applications and freelance clients — from interactive dashboards to full web stores — and I love turning a vague brief into a measurable result.",
      pillStudent: "🎓 Computer Science Student",
      pillDev: "💻 Front-End Developer",
      stats: [
        { value: "3+", label: "Years Experience" },
        { value: "15+", label: "Projects Completed" },
        { value: "Next.js", label: "Frontend Specialist" },
        { value: "UI/UX", label: "Modern Interfaces" },
      ],

      toolkitTitle: "A practical, modern toolkit.",
      toolkitSub:
        "The technologies I reach for to design, ship and scale reliable software.",
      skillsWord: "skills",
      trackTitle: "A short, focused track record.",
      trackSub: "Shipping real systems for real teams.",
      experiences: [
        {
          tag: "INTERNSHIP",
          title: "Front-End Developer Intern",
          org: "Tech Code — Gaza | 120 Hours",
          points: [
            "Developed responsive web pages and reusable UI components.",
            "Implemented responsive layouts for all devices.",
            "Applied Git and GitHub for version control.",
            "Collaborated on front-end tasks and UI improvements.",
          ],
        },
        {
          tag: "FIELD TRAINING",
          title: "Front-End Developer Trainee",
          org: "Code Tech — Field Training | 120 Hours",
          points: [
            "Completed 120 hours of supervised training through Al-Azhar University.",
            "Practiced front-end development using HTML, CSS, and React.js.",
            "Worked on building and improving web layouts and user interfaces.",
          ],
        },
      ],

      eduTag: "EDUCATION",
      eduTitle: "Academic foundation.",
      universityName: "Al-Azhar University – Gaza",
      degreeName: "B.Sc. in Computer Science",
      gradeLabel: "Grade",
      gradeValue: "Very Good — 85.77%",

      projectsTitle: "Featured projects.",
      projectsSub: "A few systems I've designed, built and shipped end-to-end.",
      liveDemo: "Live Demo",
      github: "GitHub",
      letBuild: "Let's build something.",
      letBuildSub:
        "Have a project, role or idea in mind? I'd love to hear about it.",
      formName: "Name",
      formEmail: "Email",
      formMessage: "Message",
      sendMsg: "Send message",
      sentMsg: "Your email app should open now. Thanks for reaching out!",
      footer: "© 2026 Saja Alwahedi. All Rights Reserved.",
    },
    ar: {
      navAbout: "عني",
      navSkills: "المهارات",
      navExp: "الخبرة",
      navProjects: "المشاريع",
      navEdu: "التعليم",
      navContact: "تواصل معي",
      letstalk: "دعنا نتحدث",
      menu: "القائمة",
      badge: "متاحة للأعمال الحرّة والوظائف الدائمة",
      greeting: "مرحباً، أنا سجى.",
      roleLine1: "مطورة واجهات",
      roleLine2: "أمامية",
      roleLine3: "ومصممة ويب",
      bio: "أقوم ببناء واجهات مستخدم متجاوبة، وتطبيقات ويب تفاعلية وعصرية باستخدام React.js و Next.js و Tailwind CSS وأحدث تقنيات الويب.",
      viewProjects: "عرض المشاريع",
      downloadCv: "تحميل السيرة الذاتية",

      aboutTag: "عني",
      aboutTitle: "تحويل الأفكار إلى منتجات حقيقية وذكية.",
      aboutDesc1:
        "أنا طالبة علوم حاسوب ومطورة واجهات أمامية مقيمة في غزة، أقوم بتطوير واجهات مستخدم متجاوبة تجمع بين التصميم العصري والأداء السلس. أهتم بكتابة كود نظيف، تصميم تجربة مستخدم بديهية، وتطبيقات ويب تقدم أفضل قيمة للمستخدمين.",
      aboutDesc2:
        "خلال السنوات الأخيرة، قمت ببناء منصات ومشاريع متعددة — بدءاً من لوحات التحكم التفاعلية وصولاً إلى المتاجر الإلكترونية — وأسعى دائماً لتحويل الأفكار البسيطة إلى نتائج مبهرة وملموسة.",
      pillStudent: "🎓 طالبة علوم حاسوب",
      pillDev: "💻 مطورة واجهات أمامية",
      stats: [
        { value: "+3", label: "سنوات خبرة" },
        { value: "+15", label: "مشروع منجز" },
        { value: "Next.js", label: "تخصص الواجهات" },
        { value: "UI/UX", label: "واجهات عصرية" },
      ],

      toolkitTitle: "أدوات عملية وعصرية.",
      toolkitSub:
        "التقنيات التي أستخدمها لتصميم وتطوير برمجيات موثوقة وعالية الأداء.",
      skillsWord: "مهارات",
      trackTitle: "مسيرة مهنية مركزة.",
      trackSub: "تطوير أنظمة وتطبيقات حقيقية لفرق عمل متميزة.",
      experiences: [
        {
          tag: "تدريب عملي",
          title: "متدربة مطورة واجهات أمامية",
          org: "Tech Code — غزة | 120 ساعة",
          points: [
            "تطوير صفحات ويب متجاوبة ومكونات واجهة قابلة لإعادة الاستخدام.",
            "تنفيذ تصاميم متجاوبة تعمل على جميع الأجهزة.",
            "استخدام Git وGitHub لإدارة الإصدارات.",
            "التعاون في مهام الواجهات الأمامية وتحسين تجربة المستخدم.",
          ],
        },
        {
          tag: "تدريب ميداني",
          title: "متدربة تطوير واجهات أمامية",
          org: "Code Tech — تدريب ميداني | 120 ساعة",
          points: [
            "إتمام 120 ساعة تدريبية بإشراف جامعة الأزهر.",
            "التدرب على تطوير الواجهات باستخدام HTML وCSS وReact.js.",
            "العمل على بناء وتحسين تخطيطات الويب وواجهات المستخدم.",
          ],
        },
      ],

      eduTag: "التعليم",
      eduTitle: "الأساس الأكاديمي.",
      universityName: "جامعة الأزهر – غزة",
      degreeName: "بكالوريوس في علوم الحاسوب",
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
      sentMsg: "سيفتح تطبيق البريد الآن. شكراً لتواصلك!",
      footer: "© 2026 سجى الوحيدي. جميع الحقوق محفوظة.",
    },
  };

  const currentT = t[lang];

  const navItems = [
    { href: "#about-section", label: currentT.navAbout },
    { href: "#skills", label: currentT.navSkills },
    { href: "#experience", label: currentT.navExp },
    { href: "#projects", label: currentT.navProjects },
    { href: "#education", label: currentT.navEdu },
    { href: "#contact", label: currentT.navContact },
  ];

  const skillCards: SkillCard[] = [
    {
      title: { en: "Frontend", ar: "الواجهات الأمامية" },
      skills: [
        { name: "React.js", level: 96 },
        { name: "Next.js", level: 90 },
        { name: "TypeScript", level: 95 },
        { name: "Tailwind CSS", level: 95 },
        { name: "JavaScript", level: 94 },
        { name: "HTML5", level: 97 },
        { name: "CSS3", level: 95 },
      ],
    },
    {
      title: { en: "Programming", ar: "البرمجة" },
      skills: [
        { name: "Java", level: 88 },
        { name: "C++", level: 85 },
        { name: "Python", level: 80 },
        { name: "Algorithms", level: 82 },
      ],
    },
    {
      title: { en: "Tools", ar: "الأدوات" },
      skills: [
        { name: "Git", level: 92 },
        { name: "GitHub", level: 92 },
        { name: "Vite", level: 90 },
        { name: "VS Code", level: 95 },
      ],
    },
    {
      title: { en: "APIs & DB", ar: "واجهات برمجية وقواعد بيانات" },
      skills: [
        { name: "REST APIs", level: 88 },
        { name: "LocalStorage", level: 95 },
        { name: "SQL", level: 85 },
        { name: "Responsive UI", level: 95 },
      ],
    },
  ];

  const projects: Project[] = [
    {
      title: "Nest Furniture",
      desc: {
        en: "A high-performance Luxury Minimalist furniture e-commerce web application built with Next.js, TypeScript, and Tailwind CSS. Features full bilingual Arabic/English (RTL/LTR) support, interactive product filtering, shopping cart drawer, and a seamless mobile-first UX.",
        ar: "تطبيق متجر إلكتروني فاخر وعصري للأثاث مبني باستخدام Next.js وTypeScript وTailwind CSS، يدعم اللغتين العربية والإنجليزية (RTL/LTR) بالكامل مع فلترة تفاعلية للمنتجات وسلة تسوق جانبية.",
      },
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      demo: "https://nest-furniture-yx1z.vercel.app/",
      github: "https://github.com/sajaraed/nest-furniture",
    },
    {
      title: "Glass Weather Dashboard",
      desc: {
        en: "A modern weather dashboard featuring Glassmorphism design, dark/light themes, and interactive maps.",
        ar: "لوحة تحكم للطقس بتصميم زجاجي عصري مع خرائط تفاعلية ودعم كامل للوضع الداكن.",
      },
      tech: ["HTML5", "Tailwind CSS", "JavaScript", "Leaflet API"],
      demo: "https://sajaraed.github.io/glass-weather-dashboard/",
      github: "https://github.com/sajaraed/glass-weather-dashboard",
    },
    {
      title: "Coffee & Desserts Store App",
      desc: {
        en: "An integrated e-commerce app built with React.js featuring interactive shopping cart and product filtering.",
        ar: "تطبيق متجر إلكتروني متكامل للقهوة والحلويات باستخدام React.js وسلة تسوق تفاعلية.",
      },
      tech: ["React.js", "Tailwind CSS", "JavaScript"],
      demo: "https://sajaraed.github.io/coffee-app/",
      github: "https://github.com/sajaraed/coffee-app",
    },
    {
      title: "BS Luxury Hotel Website",
      desc: {
        en: "An interactive luxury hotel website featuring high responsiveness and smooth scroll animations.",
        ar: "موقع فندق فاخر تفاعلي بتصميم عالي التجاوب مع مؤثرات حركية سلسة.",
      },
      tech: ["React.js", "TypeScript", "Tailwind CSS"],
      demo: "https://sajaraed.github.io/hotel-bs/",
      github: "https://github.com/sajaraed/hotel-bs",
    },
    {
      title: "Interactive Notes App",
      desc: {
        en: "A task and note management app using Masonry Grid layout with filtering and local storage.",
        ar: "تطبيق لإدارة الملاحظات والمهام بأسلوب Masonry Grid مع خيارات الفلترة والتخزين المحلي.",
      },
      tech: ["HTML5", "CSS3", "JavaScript"],
      demo: "https://sajaraed.github.io/notes-app/",
      github: "https://github.com/sajaraed/notes-app",
    },
    {
      title: "Digital Wedding Invitation",
      desc: {
        en: "An elegant and interactive digital wedding invitation card built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion, featuring smooth envelope-opening animations and RSVP.",
        ar: "بطاقة دعوة زفاف رقمية أنيقة وتفاعلية باستخدام React وTypeScript، مع حركات فتح الظرف وخاصية تأكيد الحضور.",
      },
      tech: ["React.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      demo: "https://sajaraed.github.io/wedding-invitation-card/",
      github: "https://github.com/sajaraed/wedding-invitation-card",
    },
  ];

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`
    );
    window.location.href = `mailto:sajaraed302@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  };

  const inputCls =
    "w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-slate-800 bg-slate-950/60 text-slate-200 text-sm focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30 focus:outline-none transition-colors";

  const sectionCls =
    "max-w-7xl mx-auto px-3 sm:px-6 py-12 sm:py-20 relative z-10 scroll-mt-20 sm:scroll-mt-24";

  const pillCls =
    "inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-mono uppercase tracking-wider bg-slate-900 border border-slate-800 text-cyan-400";

  const cardGradient =
    "bg-gradient-to-br from-slate-900/80 via-slate-900/40 to-[#0b0e14]";

  return (
    <div
      className="bg-[#090a0f] text-slate-100 min-h-screen selection:bg-cyan-500 selection:text-white font-sans overflow-x-hidden relative"
      dir={isAr ? "rtl" : "ltr"}
    >
      {/* background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293d15_1px,transparent_1px),linear-gradient(to_bottom,#1f293d15_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      {/* ============================ HEADER ============================ */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#090a0f]/85 backdrop-blur-xl border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 h-16 sm:h-20 flex items-center justify-between gap-2">
          <a
            href="#about-hero"
            className="flex items-center gap-2 sm:gap-3 shrink-0"
            onClick={() => setMenuOpen(false)}
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-base sm:text-lg shadow-lg shadow-cyan-500/20 text-white">
              S
            </div>
            <span className="font-bold text-base sm:text-lg tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              Saja<span className="text-cyan-400">.dev</span>
            </span>
          </a>

          {/* desktop nav — unchanged */}
          <nav className="hidden lg:flex items-center gap-8 text-sm text-slate-400 font-medium">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-cyan-400 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => setLang(isAr ? "en" : "ar")}
              aria-label="Switch language"
              className="px-2.5 sm:px-3 py-1.5 rounded-xl border border-slate-800 bg-slate-900/90 text-cyan-400 text-[11px] sm:text-xs font-bold hover:border-cyan-500/50 transition-all cursor-pointer"
            >
              🌐 {isAr ? "EN" : "AR"}
            </button>

            <a
              href="#contact"
              className="hidden sm:inline-flex px-5 py-2.5 rounded-xl bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-700 hover:border-cyan-500/50 text-xs font-semibold text-white shadow-md transition-all"
            >
              {currentT.letstalk}
            </a>

            {/* 3-lines button (mobile + tablet) */}
            <button
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={currentT.menu}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="lg:hidden w-9 h-9 sm:w-10 sm:h-10 rounded-xl border border-slate-800 bg-slate-900/90 flex flex-col items-center justify-center gap-[5px] cursor-pointer hover:border-cyan-500/50 transition-all"
            >
              <span
                className={`block w-5 h-0.5 bg-slate-200 rounded transition-transform duration-300 ${
                  menuOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-slate-200 rounded transition-opacity duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-slate-200 rounded transition-transform duration-300 ${
                  menuOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {/* mobile menu panel */}
        <div
          id="mobile-menu"
          className={`lg:hidden overflow-hidden transition-[max-height] duration-300 ease-out border-slate-800/60 ${
            menuOpen ? "max-h-[28rem] border-t" : "max-h-0"
          }`}
        >
          <nav className="px-3 sm:px-6 py-3 flex flex-col gap-1 bg-[#090a0f]/95">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-slate-300 text-sm font-medium hover:bg-slate-900 hover:text-cyan-400 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="sm:hidden mt-2 px-4 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold text-center"
            >
              {currentT.letstalk}
            </a>
          </nav>
        </div>
      </header>

      {/* ============================= HERO ============================= */}
      {/* same layout as laptop on every screen: text + photo side by side */}
      <section
        id="about-hero"
        className="max-w-7xl mx-auto px-3 sm:px-6 pt-24 sm:pt-36 pb-10 sm:pb-20 flex flex-row items-center justify-between gap-3 sm:gap-10 lg:gap-16 relative z-10"
      >
        <Reveal className="w-7/12">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-3 sm:mb-8">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-cyan-400 animate-pulse shrink-0" />
            <span>{currentT.badge}</span>
          </div>

          <h1 className="text-[1.7rem] min-[400px]:text-3xl sm:text-6xl lg:text-7xl font-extrabold mb-3 sm:mb-6 leading-[1.1] tracking-tight">
            {currentT.greeting}
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-500 bg-clip-text text-transparent">
              {currentT.roleLine1}
            </span>
            <br />
            <span className="text-slate-200">{currentT.roleLine2}</span>
            <br />
            <span className="text-slate-400 text-lg min-[400px]:text-xl sm:text-4xl lg:text-5xl">
              {currentT.roleLine3}
            </span>
          </h1>

          <p className="text-slate-400 text-[11px] min-[400px]:text-xs sm:text-lg mb-5 sm:mb-10 max-w-xl leading-relaxed">
            {currentT.bio}
          </p>

          <div className="flex flex-wrap gap-2 sm:gap-4">
            <a
              href="#projects"
              className="px-4 sm:px-7 py-2.5 sm:py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-xs sm:text-sm shadow-xl shadow-cyan-500/20 hover:opacity-90 transition-all text-center"
            >
              {currentT.viewProjects}
            </a>
            <a
              href="/SajaAlwahedi_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="SajaAlwahedi_CV.pdf"
              className="px-4 sm:px-7 py-2.5 sm:py-3.5 rounded-xl border border-slate-800 bg-slate-900/50 text-slate-300 font-semibold text-xs sm:text-sm hover:border-cyan-500/50 transition-all text-center"
            >
              {currentT.downloadCv}
            </a>
          </div>
        </Reveal>

        <Reveal className="w-5/12 flex justify-center" delay={150}>
          <div className="relative group w-full max-w-[280px] sm:max-w-sm">
            <div className="absolute -inset-1.5 sm:-inset-2 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-[1.5rem] sm:rounded-[2.5rem] blur-xl opacity-30 group-hover:opacity-60 transition duration-500" />
            <div className="relative w-full h-56 min-[400px]:h-64 sm:h-96 rounded-2xl sm:rounded-[2rem] border border-slate-800 bg-gradient-to-b from-slate-900 to-[#0b0e14] overflow-hidden p-1.5 sm:p-3 shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/me.png"
                alt="Saja Alwahedi"
                className="w-full h-full object-cover object-top rounded-xl sm:rounded-2xl"
              />
            </div>
          </div>
        </Reveal>
      </section>

      {/* ============================= ABOUT ============================ */}
      <section id="about-section" className={sectionCls}>
        <Reveal className="mb-5 sm:mb-6">
          <div className={pillCls}>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            {currentT.aboutTag}
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <Reveal className="lg:col-span-7">
            <h2 className="text-2xl sm:text-5xl font-extrabold tracking-tight mb-5 sm:mb-8 leading-[1.2]">
              {currentT.aboutTitle}
            </h2>
            <p className="text-slate-300 text-sm sm:text-lg mb-4 sm:mb-6 leading-relaxed">
              {currentT.aboutDesc1}
            </p>
            <p className="text-slate-400 text-xs sm:text-base mb-6 sm:mb-10 leading-relaxed">
              {currentT.aboutDesc2}
            </p>

            <div className="flex flex-wrap gap-2 sm:gap-3">
              <span className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-[11px] sm:text-xs font-medium text-slate-300">
                {currentT.pillStudent}
              </span>
              <span className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-[11px] sm:text-xs font-medium text-slate-300">
                {currentT.pillDev}
              </span>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-5" delay={150}>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {currentT.stats.map((s, i) => {
                const isLong = s.value.length > 4;
                return (
                  <div
                    key={i}
                    className="p-4 sm:p-7 rounded-2xl sm:rounded-3xl border border-slate-800/80 bg-slate-900/40 flex flex-col justify-between h-32 sm:h-48"
                  >
                    <span className="text-cyan-400 text-sm sm:text-lg">❖</span>
                    <div>
                      <div
                        className={`font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-1 ${
                          isLong
                            ? "text-lg sm:text-3xl"
                            : "text-2xl sm:text-4xl"
                        }`}
                      >
                        {s.value}
                      </div>
                      <div className="text-[11px] sm:text-xs text-slate-400 font-medium">
                        {s.label}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================= SKILLS =========================== */}
      <section id="skills" className={sectionCls}>
        <Reveal className="mb-6 sm:mb-12">
          <h2 className="text-2xl sm:text-4xl font-extrabold mb-2 sm:mb-3 tracking-tight">
            {currentT.toolkitTitle}
          </h2>
          <p className="text-slate-400 text-xs sm:text-base">
            {currentT.toolkitSub}
          </p>
        </Reveal>

        {/* 2 cards per row on every screen (same as laptop) */}
        <div className="grid grid-cols-2 gap-3 sm:gap-8 items-stretch">
          {skillCards.map((card, idx) => (
            <Reveal key={idx} className="h-full" delay={(idx % 2) * 120}>
              {(visible) => (
                <div className="h-full p-3 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-800/80 bg-slate-900/40 hover:border-cyan-500/40 transition-colors shadow-xl">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4 sm:mb-8 pb-3 sm:pb-4 border-b border-slate-800/80">
                    <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                      <div className="w-7 h-7 sm:w-10 sm:h-10 shrink-0 rounded-lg sm:rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 text-xs sm:text-base">
                        ❖
                      </div>
                      <h3 className="font-bold text-xs sm:text-lg text-slate-100 leading-tight">
                        {card.title[lang]}
                      </h3>
                    </div>
                    <span className="self-start sm:self-auto text-[10px] sm:text-xs font-mono text-slate-400 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-slate-800/60 border border-slate-700/50 whitespace-nowrap">
                      {card.skills.length} {currentT.skillsWord}
                    </span>
                  </div>

                  <div className="space-y-3 sm:space-y-5">
                    {card.skills.map((skill, sIdx) => (
                      <div key={sIdx}>
                        <div className="flex justify-between gap-1 text-[11px] sm:text-sm mb-1 sm:mb-2">
                          <span className="text-slate-300 font-medium">
                            {skill.name}
                          </span>
                          <span
                            className="font-mono text-slate-400 text-[10px] sm:text-xs"
                            dir="ltr"
                          >
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-slate-800/60 h-1.5 sm:h-2 rounded-full overflow-hidden p-0.5 border border-slate-800">
                          <div
                            className="bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-600 h-full rounded-full transition-[width] duration-1000 ease-out motion-reduce:transition-none"
                            style={{ width: visible ? `${skill.level}%` : "0%" }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </Reveal>
          ))}
        </div>
      </section>

      {/* ========================= EXPERIENCE + EDU ===================== */}
      <section id="experience" className={sectionCls}>
        <Reveal className="mb-6 sm:mb-12">
          <h2 className="text-xl sm:text-3xl font-bold mb-2 sm:mb-3 tracking-tight">
            {currentT.trackTitle}
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm">
            {currentT.trackSub}
          </p>
        </Reveal>

        {/* laptop: 3 cards in a row — mobile/tablet: 2 per row */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 items-stretch">
          {currentT.experiences.map((exp, i) => (
            <Reveal key={i} className="h-full" delay={i * 120}>
              <div
                className={`h-full p-3.5 sm:p-6 rounded-2xl sm:rounded-3xl border border-slate-800/80 ${cardGradient} shadow-2xl flex flex-col gap-3 sm:gap-4`}
              >
                <div>
                  <div className={`${pillCls} mb-2 sm:mb-3`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    {exp.tag}
                  </div>
                  <h3 className="text-sm sm:text-lg font-extrabold mb-1 tracking-tight text-white leading-snug">
                    {exp.title}
                  </h3>
                  <p className="text-cyan-400 text-[11px] sm:text-xs font-semibold">
                    {exp.org}
                  </p>
                </div>
                <ul className="space-y-1.5 sm:space-y-2 text-[11px] sm:text-xs text-slate-300 leading-relaxed border-t border-slate-800/80 pt-3 list-disc ps-4 marker:text-cyan-500">
                  {exp.points.map((p, pi) => (
                    <li key={pi}>{p}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}

          {/* Education: full row on mobile/tablet, 3rd column on laptop */}
          <Reveal
            id="education"
            className="h-full scroll-mt-24 col-span-2 lg:col-span-1"
            delay={240}
          >
            <div
              className={`h-full p-3.5 sm:p-6 rounded-2xl sm:rounded-3xl border border-slate-800/80 ${cardGradient} shadow-2xl flex flex-col gap-3 sm:gap-4`}
            >
              <div>
                <div className={`${pillCls} mb-2 sm:mb-3`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  {currentT.eduTag}
                </div>
                <h3 className="text-sm sm:text-lg font-extrabold mb-1 tracking-tight text-white">
                  {currentT.eduTitle}
                </h3>
                <p className="text-cyan-400 text-[11px] sm:text-xs font-semibold">
                  {currentT.universityName}
                </p>
              </div>

              <div className="border-t border-slate-800/80 pt-3 mt-auto">
                <p className="text-xs text-slate-300 mb-3">
                  {currentT.degreeName}
                </p>
                <div className="p-3 rounded-xl border border-slate-800/60 bg-slate-950/40 flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs text-slate-400">
                    {currentT.gradeLabel}
                  </span>
                  <span className="font-bold text-emerald-400 text-xs">
                    {currentT.gradeValue}
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================ PROJECTS ========================== */}
      <section id="projects" className={sectionCls}>
        <Reveal className="mb-6 sm:mb-12">
          <h2 className="text-xl sm:text-3xl font-bold mb-2 sm:mb-3 tracking-tight">
            {currentT.projectsTitle}
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm">
            {currentT.projectsSub}
          </p>
        </Reveal>

        {/* laptop: 3 per row — mobile/tablet: 2 per row */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8">
          {projects.map((project, idx) => (
            <Reveal key={idx} className="h-full" delay={(idx % 3) * 120}>
              <div className="h-full p-3 sm:p-6 lg:p-7 rounded-2xl sm:rounded-3xl border border-slate-800/80 bg-slate-900/40 hover:border-cyan-500/50 transition-colors flex flex-col justify-between group">
                <div>
                  <div className="h-20 sm:h-40 lg:h-44 rounded-xl sm:rounded-2xl bg-gradient-to-br from-slate-950 to-slate-900 border border-slate-800/60 mb-3 sm:mb-6 flex items-center justify-center group-hover:border-cyan-500/30 transition-colors">
                    <span className="text-base sm:text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent text-center px-1">
                      {project.title.split(" ")[0]}
                    </span>
                  </div>
                  <h3 className="text-xs sm:text-lg font-bold mb-1.5 sm:mb-2 text-cyan-400 leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-[11px] sm:text-sm mb-3 sm:mb-6 leading-relaxed">
                    {project.desc[lang]}
                  </p>
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-8" dir="ltr">
                    {project.tech.map((techItem, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] sm:text-[11px] px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-md sm:rounded-lg bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 font-mono"
                      >
                        {techItem}
                      </span>
                    ))}
                  </div>
                </div>

                {/* stacked on phones so neither button is ever cut off */}
                <div className="flex flex-col sm:flex-row items-stretch gap-2 sm:gap-3 pt-3 sm:pt-4 border-t border-slate-800/80">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-2 sm:py-2.5 px-2 rounded-lg sm:rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white text-[11px] sm:text-xs font-semibold text-center transition-all shadow-lg shadow-cyan-500/20"
                  >
                    {currentT.liveDemo} 🚀
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-2 sm:py-2.5 px-2 rounded-lg sm:rounded-xl border border-slate-800 bg-slate-900 hover:border-cyan-400 text-slate-300 text-[11px] sm:text-xs font-semibold text-center transition-all"
                  >
                    {currentT.github} 💻
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============================ CONTACT =========================== */}
      <section id="contact" className={sectionCls}>
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 p-5 sm:p-12 rounded-3xl border border-slate-800/80 bg-slate-900/30 backdrop-blur-md">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3">
                {currentT.letBuild}
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm mb-6 sm:mb-8 leading-relaxed">
                {currentT.letBuildSub}
              </p>

              <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm">
                <a
                  href="mailto:sajaraed302@gmail.com"
                  className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  <span className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shrink-0">
                    ✉️
                  </span>
                  <span className="break-all" dir="ltr">
                    sajaraed302@gmail.com
                  </span>
                </a>
                <a
                  href="tel:+970568978513"
                  className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  <span className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shrink-0">
                    📱
                  </span>
                  <span dir="ltr">+970 56 897 8513</span>
                </a>
                <div className="flex items-center gap-3 text-slate-300">
                  <span className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shrink-0">
                    📍
                  </span>
                  <span>{isAr ? "غزة، فلسطين" : "Gaza, Palestine"}</span>
                </div>
              </div>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-3 sm:space-y-4">
              <div>
                <label
                  htmlFor="f-name"
                  className="block text-xs font-medium text-slate-400 mb-1"
                >
                  {currentT.formName}
                </label>
                <input
                  id="f-name"
                  type="text"
                  required
                  autoComplete="name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={inputCls}
                />
              </div>
              <div>
                <label
                  htmlFor="f-email"
                  className="block text-xs font-medium text-slate-400 mb-1"
                >
                  {currentT.formEmail}
                </label>
                <input
                  id="f-email"
                  type="email"
                  required
                  autoComplete="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={inputCls}
                />
              </div>
              <div>
                <label
                  htmlFor="f-msg"
                  className="block text-xs font-medium text-slate-400 mb-1"
                >
                  {currentT.formMessage}
                </label>
                <textarea
                  id="f-msg"
                  rows={3}
                  required
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className={`${inputCls} resize-none`}
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 sm:py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-sm shadow-xl shadow-cyan-500/20 hover:opacity-90 transition-all cursor-pointer"
              >
                {currentT.sendMsg}
              </button>
              {sent && (
                <p role="status" className="text-xs sm:text-sm text-emerald-400">
                  {currentT.sentMsg}
                </p>
              )}
            </form>
          </div>
        </Reveal>
      </section>

      <footer className="max-w-7xl mx-auto px-3 sm:px-6 py-8 sm:py-10 border-t border-slate-800/80 text-center text-[11px] sm:text-xs text-slate-500 relative z-10">
        {currentT.footer}
      </footer>
    </div>
  );
}

