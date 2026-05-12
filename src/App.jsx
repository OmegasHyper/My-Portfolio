import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {SquareCode, GitPullRequestArrow, Mail, FileUser, MoveUpRight} from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);

// ── Data ──────────────────────────────────────────────────────────────────────
const NAV_LINKS = ["About", "Skills", "Projects", "Contact"];

const PROJECTS = [
  {
    num: "01", title: "Signal Viewer",
    desc: "Interactive web-based viewer for visualizing time-domain signals with real-time zooming and updates.",
    tags: ["Next.js", "FastAPI", "Tailwind"],
    link: "https://github.com/OmegasHyper/DSP-Signal-Viewer.git",
  },
  {
    num: "02", title: "Signal Equalizer",
    desc: "Real-time web equalizer enabling frequency band adjustment and precise signal shaping.",
    tags: ["Next.js", "FastAPI", "Tailwind"],
    link: "https://github.com/OmegasHyper/DSP-Signal-Equalizer.git",
  },
  {
    num: "03", title: "News Website",
    desc: "Multi-page news platform covering general and Premier League sports news.",
    tags: ["HTML", "JavaScript", "CSS"],
    link: "https://github.com/OmegasHyper/News-Task-Depi-Team4.git",
  },
  {
    num: "04", title: "Tower Defense Game",
    desc: "PyGame tower defense implementing core algorithms and data structures in Python.",
    tags: ["Python", "PyGame", "Algorithms"],
    link: "https://github.com/OmegasHyper/Castle_Defense",
  },
  {
    num: "05", title: "DeepXDE Research",
    desc: "Physics-Informed Neural Networks solving biomedical ODEs for Diabetes Glucose Tolerance analysis.",
    tags: ["Python", "DeepXDE", "ML"],
    link: "https://github.com/Jiro75/Diabetes-Mellitus-Prediction-Using-DL.git",
  },
  {
    num: "06", title: "2D Beamforming Simulator",
    desc: "A full-stack educational simulator that demonstrates how phased arrays form and steer beams by controlling the phase and amplitude of multiple array elements.",
    tags: ["Next.js", "Tailwind", "Recharts", "FastAPI", "NumPy"],
    link: "https://github.com/OmegasHyper/task04-beamforming-sbeg205_spring26_task4_team10.git",
  },
  {
    num: "07", title: "Fourier Transform Mixer & Properties Emphasizer",
    desc: "A web-based interactive platform for exploring Fourier Transform concepts on 2D signals (images) through two main modes: FT Magnitude/Phase Mixer and FT Properties Emphasizer.",
    tags: ["Next.js", "Tailwind", "FastAPI", "NumPy"],
    link: "https://github.com/OmegasHyper/task03-ft-mixer-and-properties-emphasizer-sbeg2025_spring2026_team10.git",
  },
  {
    num: "08", title: "BloodLink",
    desc: "A web-based Real-time Blood Bank Management system for managing blood inventory, donor networks, emergency requests, and automated donor-to-patient matching.",
    tags: ["Next.js", "Tailwind", "NestJS", "PostgreSQL"],
    link: "https://github.com/hamdy-fathi/BloodLink.git",
  },
  {
    num: "09", title: "Hospital Information System — Smart Medical Device Monitoring",
    desc: "A comprehensive, full-stack Hospital Information System (HIS) with real-time IoT device monitoring, 3D visualization, role-based authentication, patient and staff management, billing, reports, and biomedical engineering analytics.",
    tags: ["Next.js", "GSAP", "Recharts", "Three.js", "NestJS", "PostgreSQL", "Socket.IO"],
    link: "https://github.com/hamdy-fathi/incubator-his-showcase.git",
  },
];

const SKILLS = [
  { name: "React / Next.js",      level: 95 },
  { name: "JavaScript (ES6+)",    level: 90 },
  { name: "Tailwind CSS",         level: 90 },
  { name: "Git & GitHub",         level: 85 },
  { name: "GSAP / Framer Motion", level: 80 },
  { name: "Python",               level: 80 },
  { name: "FastAPI",              level: 80 },
];

const FLOAT_WORDS = [
  { text: "React",         x: "8%",  y: "18%", size: 13 },
  { text: "useEffect()",  x: "78%", y: "22%", size: 11 },
  { text: "const =>",     x: "68%", y: "68%", size: 12 },
  { text: "GSAP",         x: "14%", y: "72%", size: 15 },
  { text: "CSS Grid",     x: "48%", y: "82%", size: 11 },
  { text: "async/await",  x: "82%", y: "52%", size: 11 },
  { text: "<Component/>", x: "4%",  y: "48%", size: 12 },
  { text: "useState()",   x: "52%", y: "12%", size: 11 },
  { text: "npm install",  x: "30%", y: "90%", size: 10 },
  { text: "TypeScript",   x: "38%", y: "58%", size: 11 },
];

const STATS = [
  { value: 6,   suffix: "+", label: "Projects Built" },
  { value: 2,   suffix: "+", label: "Years Coding" },
  { value: 8,   suffix: "+", label: "Tech Skills" },
  { value: 100, suffix: "%", label: "Dedication" },
];

// ── Helpers ───────────────────────────────────────────────────────────────────
function SplitChars({ text, className }) {
  return (
    <span className={className} aria-label={text}>
      {text.split("").map((ch, i) => (
        <span key={i} className="char" style={{ display: "inline-block", whiteSpace: ch === " " ? "pre" : "normal" }}>
          {ch}
        </span>
      ))}
    </span>
  );
}

// ── App ───────────────────────────────────────────────────────────────────────
export default function App() {
  const [activeSection, setActiveSection] = useState("About");
  const [menuOpen, setMenuOpen]           = useState(false);

  // refs
  const cursorRingRef  = useRef(null);
  const cursorDotRef   = useRef(null);
  const aboutRef       = useRef(null);
  const skillsRef      = useRef(null);
  const projectsRef    = useRef(null);
  const contactRef     = useRef(null);

  // Custom cursor
  useEffect(() => {
    const ring = cursorRingRef.current;
    const dot  = cursorDotRef.current;
    const onMove = (e) => {
      gsap.to(ring, { x: e.clientX - 20, y: e.clientY - 20, duration: 0.35, ease: "power2.out" });
      gsap.to(dot,  { x: e.clientX - 4,  y: e.clientY - 4,  duration: 0.1  });
    };
    const grow   = () => gsap.to(ring, { scale: 1.6, duration: 0.2 });
    const shrink = () => gsap.to(ring, { scale: 1,   duration: 0.2 });
    window.addEventListener("mousemove", onMove);
    document.querySelectorAll("a,button").forEach(el => {
      el.addEventListener("mouseenter", grow);
      el.addEventListener("mouseleave", shrink);
    });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  // Hero entrance animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Floating words
      gsap.utils.toArray(".floating-word").forEach((el, i) => {
        gsap.to(el, {
          y: "random(-18,18)", x: "random(-10,10)",
          duration: gsap.utils.random(3, 6),
          repeat: -1, yoyo: true, ease: "sine.inOut", delay: i * 0.15,
        });
      });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".navbar",        { y: -80, opacity: 0, duration: 0.7 })
        .from(".hero-tag",      { y: 24,  opacity: 0, duration: 0.5 }, "-=0.25")
        .from(".hero-name .char", {
          y: 90, opacity: 0, stagger: 0.025, duration: 0.65, ease: "back.out(1.5)",
        }, "-=0.2")
        .from(".hero-role",     { y: 20, opacity: 0, duration: 0.5 }, "-=0.3")
        .from(".hero-desc",     { y: 20, opacity: 0, duration: 0.5 }, "-=0.3")
        .from(".hero-cta > *",  { y: 18, opacity: 0, stagger: 0.12, duration: 0.45 }, "-=0.25")
        .from(".hero-image-side", { scale: 0.55, opacity: 0, duration: 0.8, ease: "back.out(1.7)" }, "-=0.9");
    });

    return () => ctx.revert();
  }, []);

  // Scroll animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section headings
      gsap.utils.toArray(".section-title").forEach(el => {
        gsap.from(el, {
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
          y: 35, opacity: 0, duration: 0.65, ease: "power3.out",
        });
      });

      // About
      const aboutEl = aboutRef.current;
      ScrollTrigger.create({
        trigger: aboutEl, start: "top 80%", once: true,
        onEnter: () => {
          gsap.from(aboutEl.querySelectorAll(".about-text"), {
            y: 30, opacity: 0, stagger: 0.12, duration: 0.6, ease: "power3.out",
          });
          gsap.from(aboutEl.querySelectorAll(".about-tag"), {
            y: 15, opacity: 0, stagger: 0.06, duration: 0.4, ease: "power3.out", delay: 0.3,
          });
          gsap.from(aboutEl.querySelectorAll(".stat-card"), {
            y: 50, opacity: 0, stagger: 0.12, duration: 0.6, ease: "power3.out", delay: 0.15,
          });
          aboutEl.querySelectorAll(".counter").forEach(el => {
            const target = parseInt(el.dataset.target);
            const suffix = el.dataset.suffix || "";
            gsap.to({ val: 0 }, {
              val: target, duration: 2, ease: "power2.out", delay: 0.4,
              onUpdate() { el.textContent = Math.round(this.targets()[0].val) + suffix; },
            });
          });
        },
      });

      // Skills
      const skillsEl = skillsRef.current;
      ScrollTrigger.create({
        trigger: skillsEl, start: "top 80%", once: true,
        onEnter: () => {
          gsap.from(skillsEl.querySelectorAll(".skill-item"), {
            x: -50, opacity: 0, stagger: 0.08, duration: 0.55, ease: "power3.out",
          });
          gsap.utils.toArray(skillsEl.querySelectorAll(".skill-bar")).forEach(bar => {
            gsap.to(bar, { width: `${bar.dataset.level}%`, duration: 1.4, ease: "power2.out", delay: 0.5 });
          });
        },
      });

      // Projects
      const projEl = projectsRef.current;
      ScrollTrigger.create({
        trigger: projEl, start: "top 80%", once: true,
        onEnter: () => {
          gsap.from(projEl.querySelectorAll(".project-card"), {
            y: 70, opacity: 0, stagger: 0.1, duration: 0.65, ease: "power3.out",
          });
        },
      });

      // Contact
      const contactEl = contactRef.current;
      ScrollTrigger.create({
        trigger: contactEl, start: "top 85%", once: true,
        onEnter: () => {
          gsap.from(contactEl.querySelectorAll(".contact-item"), {
            y: 35, opacity: 0, stagger: 0.1, duration: 0.55, ease: "power3.out",
          });
          gsap.from(contactEl.querySelector(".contact-sub"), {
            y: 20, opacity: 0, duration: 0.55, ease: "power3.out",
          });
        },
      });
    });

    return () => ctx.revert();
  }, []);

  // Active section observer
  useEffect(() => {
    const ids = ["about", "skills", "projects", "contact"];
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && setActiveSection(
        e.target.id.charAt(0).toUpperCase() + e.target.id.slice(1)
      )),
      { threshold: 0.3 }
    );
    ids.forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      {/* Cursor */}
      <div ref={cursorRingRef} className="cursor-ring" />
      <div ref={cursorDotRef}  className="cursor-dot"  />

      <div className="portfolio-root">

        {/* ── Navbar ── */}
        <nav className="navbar">
          <div className="nav-logo">
            <span className="logo-bracket">&lt;</span>
            <span className="logo-name">Mohamed</span>
            <span className="logo-bracket">/&gt;</span>
          </div>
          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            {NAV_LINKS.map(link => (
              <button
                key={link}
                className={`nav-link ${activeSection === link ? "active" : ""}`}
                onClick={() => scrollTo(link)}
              >
                {link}
              </button>
            ))}
            <a href="/Mohamed-Abdelrazek-CV.pdf" download className="nav-cta flex items-center gap-1">
              Resume <MoveUpRight size={18}/>
            </a>
          </div>
          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            <span /><span /><span />
          </button>
        </nav>

        {/* ── Hero ── */}
        <section className="hero-section">
          <div className="hero-grid" aria-hidden="true" />

          {/* Floating keywords */}
          <div className="hero-float-bg" aria-hidden="true">
            {FLOAT_WORDS.map((w, i) => (
              <span
                key={i} className="floating-word"
                style={{ left: w.x, top: w.y, fontSize: w.size }}
              >
                {w.text}
              </span>
            ))}
          </div>

          <div className="hero-content">
            {/* Text side */}
            <div className="hero-text-side">
              <div className="hero-tag">
                <SquareCode size={16} />
                Frontend Developer
              </div>

              <h1 className="hero-name">
                <SplitChars text="Mohamed"     className="block" />
                <SplitChars text="Abdelrazek"  className="block text-accent" />
              </h1>

              <p className="hero-role">
                Building <span className="text-accent">pixel-perfect</span> interfaces
                <br />with React &amp; modern web tech
              </p>

              <p className="hero-desc">
                Biomedical Engineering student at Cairo University, passionate about
                crafting performant, animated, and accessible web experiences.
              </p>

              <div className="hero-cta">
                <button onClick={() => scrollTo("Projects")} className="btn-primary">
                  View My Work
                </button>
                <button onClick={() => scrollTo("Contact")} className="btn-secondary">
                  Get In Touch
                </button>
              </div>
            </div>

            {/* Image side */}
            <div className="hero-image-side">
              <div className="avatar-wrapper">
                <div className="avatar-ring"   aria-hidden="true" />
                <div className="avatar-ring-2" aria-hidden="true" />
                <a
                  href="https://www.linkedin.com/in/mohamed-abdelrazek-a3b342298/"
                  target="_blank" rel="noopener noreferrer"
                >
                  <img
                    src="/imgs/My-image.jpg"
                    alt="Mohamed Abdelrazek"
                    className="avatar-img"
                  />
                </a>
              </div>
            </div>
          </div>

          
        </section>

        {/* ── About ── */}
        <section id="about" ref={aboutRef} className="section about-section">
          <div className="section-inner">
            <div className="section-header">
              <span className="section-number">// 01</span>
              <h2 className="section-title">About Me</h2>
            </div>
            <div className="about-grid">
              <div>
                <p className="about-text">
                  I'm a <strong>Frontend Developer</strong> specializing in the React ecosystem.
                  My Biomedical Engineering background gives me a unique analytical perspective
                  when building complex, data-driven interfaces.
                </p>
                <p className="about-text">
                  I love turning design concepts into smooth, interactive experiences using
                  <strong> GSAP</strong>, <strong>Framer Motion</strong>, and modern CSS.
                  Currently growing into a full-stack engineer.
                </p>
                <div className="about-tags">
                  {["React", "Next.js", "GSAP", "Tailwind", "FastAPI", "Python", "TypeScript"].map(t => (
                    <span key={t} className="about-tag">{t}</span>
                  ))}
                </div>
              </div>
              <div className="stats-grid">
                {STATS.map(s => (
                  <div key={s.label} className="stat-card">
                    <div className="stat-value">
                      <span
                        className="counter"
                        data-target={s.value}
                        data-suffix={s.suffix}
                      >
                        0{s.suffix}
                      </span>
                    </div>
                    <div className="stat-label">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Skills ── */}
        <section id="skills" ref={skillsRef} className="section">
          <div className="section-inner">
            <div className="section-header">
              <span className="section-number">// 02</span>
              <h2 className="section-title">Skills</h2>
            </div>
            <div className="skills-grid">
              {SKILLS.map(skill => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percent">{skill.level}%</span>
                  </div>
                  <div className="skill-track">
                    <div className="skill-bar" data-level={skill.level} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Projects ── */}
        <section id="projects" ref={projectsRef} className="section projects-section">
          <div className="section-inner">
            <div className="section-header">
              <span className="section-number">// 03</span>
              <h2 className="section-title">Projects</h2>
            </div>
            <div className="projects-grid">
              {PROJECTS.map(p => (
                <div key={p.num} className="project-card">
                  <div className="project-num">{p.num}</div>
                  <h3 className="project-title">{p.title}</h3>
                  <p className="project-desc">{p.desc}</p>
                  <div className="project-tags">
                    {p.tags.map(t => (
                      <span key={t} className="project-tag">{t}</span>
                    ))}
                  </div>
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    View Project →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Contact ── */}
        <section id="contact" ref={contactRef} className="section contact-section">
          <div className="section-inner">
            <div className="section-header" style={{ textAlign: "center" }}>
              <span className="section-number">// 04</span>
              <h2 className="section-title">Let's Connect</h2>
            </div>
            <div className="contact-inner">
              <p className="contact-sub">
                I'm open to frontend roles, collaborations, and internship opportunities.
                Let's build something great together.
              </p>
              <div className="contact-links">
                <a href="mailto:mohamed.abdelrazek.rezk@gmail.com" className="contact-item email">
                  <Mail size={16} />
                  Email Me
                </a>
                <a href="https://github.com/OmegasHyper" target="_blank" rel="noopener noreferrer" className="contact-item github">
                  <GitPullRequestArrow size={16} />
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/mohamed-abdelrazek-a3b342298/" target="_blank" rel="noopener noreferrer" className="contact-item linkedin">
                  <FaLinkedinIn size={16} />
                  LinkedIn
                </a>
                <a href="/Mohamed-Abdelrazek-CV.pdf" download className="contact-item resume">
                  <FileUser size={16} />
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Footer ── */}
        <footer className="footer">
          &lt;Built with React + GSAP by Mohamed Abdelrazek /&gt;
        </footer>

      </div>
    </>
  );
}
