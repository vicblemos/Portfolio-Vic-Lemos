import { useEffect, useState } from "react";
import { Link } from "wouter";
import { ArrowUpRight } from "lucide-react";
import heroPhoto from "@/assets/images/vitoria-hero.webp";
import { projects } from "@/data/projects";
import RevealDiv from "@/components/RevealDiv";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const skills = [
  { label: "Visual Identity", detail: "Logo Design, Typography Pairing and Color Palette Development" },
  { label: "Custom Illustration", detail: "Hand-crafted digital and analog illustration" },
  { label: "Business Materials", detail: "Packaging, Press Kits, Flyers and Event Materials" },
  { label: "Marketing Materials", detail: "Packaging, Writing, Press Kits, Flyers and Event Materials" },
  { label: "Social Media Assets", detail: "Content design, templates and brand kits" },
  { label: "Brand Guidelines", detail: "Comprehensive brand documentation and systems" },
];

const experiences = [
  {
    start: "June 2024",
    end: "February 2026",
    role: "Brand Designer",
    highlights: [
      "Collaborated closely with clients during the creative process, ensuring clear communication and alignment, achieving a 20% project approval rate without major revisions.",
      "Designed 20+ brand identities for clients in lifestyle, wellness, and healthcare sectors.",
      "Increased clients' online engagement by 30% through cohesive and consistent social media kits.",
    ],
  },
  {
    start: "October 2019",
    end: "January 2023",
    role: "Art + Graphic Designer",
    highlights: [
      "Designed logos and visual identities for local businesses, contributing to a 20% increase in brand recognition.",
      "Maintained material errors and reprints by over 95% through meticulous file reviews and attention to detail.",
      "Led the design process from brief to delivery, ensuring clear communication and full client alignment.",
    ],
  },
  {
    start: "July 2017",
    end: "March 2018",
    role: "Freelance Graphic Designer",
    highlights: [
      "Recognized by clients for effective creative process and problem-solving, contributing to higher customer satisfaction.",
      "Created 25–35 high-quality unique design assets using CorelDraw, Photoshop, and Illustrator.",
      "Maintained a high standard of quality, timely delivery, and consistent output across projects.",
    ],
  },
];

/**
 * IntroScreen — full-screen splash showing just the name on first load, then
 * fades out to reveal the site (same idea as claura.framer.ai's opening).
 * Skipped entirely for reduced-motion users, and only plays once per browser
 * session (sessionStorage) so it doesn't replay on every reload while testing.
 */
const IntroScreen = ({ onDone }: { onDone: () => void }) => {
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const holdTimer = setTimeout(() => setExiting(true), 1100);
    const doneTimer = setTimeout(onDone, 1100 + 800);
    return () => {
      clearTimeout(holdTimer);
      clearTimeout(doneTimer);
    };
  }, [onDone]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center transition-all duration-700 ease-out"
      style={{
        background: "#121111",
        opacity: exiting ? 0 : 1,
        transform: exiting ? "translateY(-4%)" : "translateY(0)",
        pointerEvents: exiting ? "none" : "auto",
        transitionTimingFunction: "cubic-bezier(0.65, 0, 0.35, 1)",
      }}
    >
      <h1
        className="intro-name"
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 700,
          fontSize: "clamp(1.75rem, 5vw, 3.25rem)",
          letterSpacing: "-0.02em",
          color: "#eeeeee",
          margin: 0,
        }}
      >
        Vitória Lemos
      </h1>
    </div>
  );
};

export default function Home() {
  const [introDone, setIntroDone] = useState(() => {
    if (typeof window === "undefined") return true;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return true;
    return sessionStorage.getItem("vl-intro-seen") === "1";
  });

  useEffect(() => {
    document.body.style.overflow = introDone ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [introDone]);

  const handleIntroDone = () => {
    try {
      sessionStorage.setItem("vl-intro-seen", "1");
    } catch {
      // sessionStorage unavailable (private mode etc.) — no big deal, intro just replays
    }
    setIntroDone(true);
  };

  // If we land here via a plain #anchor (e.g. clicking "Work" in the header
  // from a project detail page — see hooks/useAppHashLocation.ts), scroll to
  // that section once this page's content actually exists in the DOM.
  useEffect(() => {
    const anchor = window.location.hash.slice(1);
    if (["work", "skills", "experience", "contact"].includes(anchor)) {
      requestAnimationFrame(() => {
        document.getElementById(anchor)?.scrollIntoView({ behavior: "smooth" });
      });
    }
  }, []);

  return (
    <>
      {!introDone && <IntroScreen onDone={handleIntroDone} />}
      <div className="min-h-screen" style={{ background: "#eeeeee", color: "#121111" }}>
      <SiteHeader />

      {/* ─── HERO ─── */}
      <section
        className="relative min-h-screen overflow-hidden pt-32 pb-24 flex items-center"
        style={{
          background: "#121111",
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 95%)",
        }}
      >
        {/* Hero text — left side */}
        <div className="relative z-10 container py-20 lg:py-28">
          <div className="max-w-[560px] lg:max-w-[52%]">
            {/* Label */}
            <p
              className="mb-6 md:mb-8"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.7rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#dad6d0",
              }}
            >
              Creative Designer
            </p>

            {/* Main title */}
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "clamp(2.4rem, 5.5vw, 60px)",
                letterSpacing: "-0.02em",
                color: "#eeeeee",
                margin: 0,
                lineHeight: 1.05,
              }}
            >
              Vitória Lemos
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "clamp(2.4rem, 5.5vw, 60px)",
                letterSpacing: "-0.02em",
                color: "#eeeeee",
                fontStyle: "normal",
                margin: "0 0 28px 0",
                lineHeight: 1.05,
              }}
            >
              Graphic Design
            </p>

            {/* Bio */}
            <p
              className="mb-10 md:mb-12"
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 400,
                fontSize: "1rem",
                color: "#eeeeee",
                lineHeight: "1.7",
                maxWidth: "340px",
              }}
            >
              I'm a Graphic Designer with over 10 years of experience creating visual identities, digital designs, and marketing materials for brands across diverse industries.
            </p>

            {/* CTA */}
            <a
              href="#work"
              className="cta-link hover-fade inline-flex items-center gap-2 px-6 py-3 border rounded-full"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.65rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#eeeeee",
                borderColor: "#dad6d0",
              }}
            >
              View Work
              <span className="cta-arrow">→</span>
            </a>
          </div>
        </div>

        {/* Hero image — right side */}
        <div
          className="absolute right-0 top-0 w-full sm:w-1/2 lg:w-[38%] h-full opacity-20 sm:opacity-100"
          style={{ background: "linear-gradient(135deg, #2a2826 0%, #121111 60%)" }}
        >
          <img
            src={heroPhoto}
            alt="Vitória Lemos, designer gráfica, em um retrato editorial"
            className="w-full h-full object-cover"
            style={{
              maskImage: "linear-gradient(to left, black 60%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to left, black 60%, transparent 100%)",
            }}
          />
        </div>
      </section>

      {/* ─── ABOUT / STATEMENT ─── */}
      <section className="py-24 md:py-32 lg:py-40 overflow-hidden" style={{ background: "#eeeeee" }}>
        <div className="container">
          <div className="grid grid-cols-12 gap-8 items-start">
            {/* Center: main statement */}
            <RevealDiv className="col-span-12 lg:col-span-7">
              <h2
                className="leading-tight mb-10 max-w-[26ch]"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 500,
                  fontSize: "clamp(1.75rem, 3.8vw, 40px)",
                  color: "#121111",
                  letterSpacing: "-0.02em",
                }}
              >
                With end-to-end branding expertise, I've supported{" "}
                <span style={{ color: "#94908a" }}>120+ brands</span>
              </h2>
              <p
                className="leading-relaxed mb-6 max-w-[36ch]"
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 300,
                  fontSize: "1rem",
                  color: "#121111",
                }}
              >
                Timely delivering in fast-paced environments, with clear understanding and alignment with project goals, and a client-focused approach.
              </p>
              <div className="rule mt-4" style={{ borderTopColor: "#dad6d0", maxWidth: "340px" }} />
            </RevealDiv>
          </div>
        </div>
      </section>

      {/* ─── SKILLS ─── */}
      <section id="skills" className="py-24 md:py-32 lg:py-36 overflow-hidden" style={{ background: "#94908a" }}>
        <div className="container">
          <div className="grid grid-cols-12 gap-8 items-start">
            {/* Label */}
            <div className="col-span-12 lg:col-span-2 flex lg:flex-col items-center lg:items-start gap-4 mb-8 lg:mb-0">
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.5rem",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  color: "#eeeeee",
                  writingMode: "vertical-rl",
                  transform: "rotate(180deg)",
                  fontWeight: 700,
                }}
              >
                My Skills
              </div>
              <div className="h-px flex-1 lg:h-16 lg:w-px" style={{ background: "#eeeeee" }} />
            </div>

            {/* Skills list */}
            <div className="col-span-12 lg:col-span-10">
              {skills.map((skill, i) => (
                <RevealDiv key={skill.label} delay={i * 60}>
                  <div
                    className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-8 py-6 border-b"
                    style={{ borderColor: "#eeeeee" }}
                  >
                    <div
                      className="shrink-0"
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.6rem",
                        letterSpacing: "0.15em",
                        color: "#eeeeee",
                        paddingTop: "3px",
                        minWidth: "2rem",
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="flex-1">
                      <p
                        className="mb-1"
                        style={{
                          fontFamily: "var(--font-display)",
                          fontWeight: 700,
                          fontSize: "1.15rem",
                          color: "#eeeeee",
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {skill.label}
                      </p>
                      <p
                        style={{
                          fontFamily: "var(--font-body)",
                          fontWeight: 300,
                          fontSize: "0.85rem",
                          color: "#eeeeee",
                        }}
                      >
                        {skill.detail}
                      </p>
                    </div>
                  </div>
                </RevealDiv>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── WORKS ─── */}
      <section id="work" className="py-24 md:py-32 lg:py-40 overflow-hidden" style={{ background: "#eeeeee" }}>
        <div className="container">
          {/* Section header */}
          <RevealDiv className="mb-20">
            <div className="flex items-end gap-6 mb-3">
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.6rem",
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "#dad6d0",
                }}
              >
                Selected Projects
              </p>
            </div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 500,
                fontSize: "clamp(2.25rem, 5.5vw, 60px)",
                color: "#121111",
                letterSpacing: "-0.03em",
                lineHeight: 1,
                margin: 0,
              }}
            >
              Works That
              <br />
              <em style={{ fontWeight: 500, color: "#121111", fontStyle: "normal" }}>I've Made</em>
            </h2>
          </RevealDiv>

          {/* Projects */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8 md:gap-x-8 md:gap-y-10">
            {projects.map((project, i) => (
              <RevealDiv key={project.slug} delay={i * 80}>
                <Link href={`/project/${project.slug}`} className="group block cursor-pointer">
                  {/* Image */}
                  <div
                    className="project-card relative overflow-hidden w-full rounded-2xl"
                    style={{ aspectRatio: "4 / 3", background: "#dad6d0" }}
                  >
                    <img
                      src={project.img}
                      alt={`${project.title} — ${project.category}`}
                      className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:blur-[2px]"
                    />
                  </div>

                  {/* Info block below the image — always visible, not a hover overlay */}
                  <div className="mt-4 p-6 rounded-2xl" style={{ background: "#e4e0d8" }}>
                    <div className="flex items-baseline gap-3 mb-3">
                      <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.1em", color: "#94908a" }}>
                        {project.num}
                      </p>
                      <p
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.6rem",
                          letterSpacing: "0.15em",
                          textTransform: "uppercase",
                          color: "#94908a",
                        }}
                      >
                        {project.category}
                      </p>
                    </div>

                    <div className="flex items-end justify-between gap-4">
                      <div className="min-w-0">
                        <h4
                          style={{
                            fontFamily: "var(--font-display)",
                            fontWeight: 700,
                            fontSize: "1.2rem",
                            color: "#121111",
                            letterSpacing: "-0.02em",
                            lineHeight: 1.15,
                            margin: "0 0 8px 0",
                          }}
                        >
                          {project.title}
                        </h4>
                        <p
                          style={{
                            fontFamily: "var(--font-body)",
                            fontWeight: 300,
                            fontSize: "0.85rem",
                            color: "#3a3733",
                            lineHeight: 1.55,
                          }}
                        >
                          {project.description}
                        </p>
                      </div>

                      <span
                        className="hover-fade shrink-0 flex items-center justify-center w-10 h-10 rounded-full"
                        style={{ background: "#121111", color: "#eeeeee" }}
                      >
                        <ArrowUpRight size={17} strokeWidth={1.75} />
                      </span>
                    </div>
                  </div>
                </Link>
              </RevealDiv>
            ))}
          </div>
        </div>
      </section>

      {/* ─── EXPERIENCE ─── */}
      <section id="experience" className="py-24 md:py-32 lg:py-40 overflow-hidden" style={{ background: "#121111" }}>
        <div className="container">
          {/* Section header */}
          <RevealDiv className="mb-16">
            <p
              className="mb-3"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.6rem",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "#94908a",
              }}
            >
              Professional Journey
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 500,
                fontSize: "clamp(2.25rem, 5.5vw, 60px)",
                color: "#eeeeee",
                letterSpacing: "-0.03em",
                lineHeight: 1,
                margin: 0,
              }}
            >
              Work
              <br />
              <em style={{ fontWeight: 500, color: "#eeeeee", fontStyle: "normal" }}>Experience</em>
            </h2>
          </RevealDiv>

          {/* Timeline */}
          <div className="space-y-0">
            {experiences.map((exp, i) => (
              <RevealDiv key={exp.role} delay={i * 100}>
                <div
                  className="grid grid-cols-12 gap-6 lg:gap-12 py-10 border-b"
                  style={{ borderColor: "#dad6d0" }}
                >
                  {/* Dates */}
                  <div className="col-span-12 lg:col-span-3">
                    <p
                      className="mb-1"
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.65rem",
                        letterSpacing: "0.1em",
                        color: "#94908a",
                      }}
                    >
                      {exp.start}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.65rem",
                        letterSpacing: "0.1em",
                        color: "#eeeeee",
                      }}
                    >
                      {exp.end}
                    </p>
                  </div>

                  {/* Content */}
                  <div className="col-span-12 lg:col-span-9">
                    <h3
                      className="mb-5"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 700,
                        fontSize: "clamp(1.2rem, 2.5vw, 1.7rem)",
                        color: "#eeeeee",
                        letterSpacing: "-0.01em",
                        margin: 0,
                      }}
                    >
                      {exp.role}
                    </h3>
                    <ul className="space-y-3">
                      {exp.highlights.map((h, j) => (
                        <li
                          key={j}
                          className="flex gap-3 items-start"
                          style={{
                            fontFamily: "var(--font-body)",
                            fontWeight: 300,
                            fontSize: "0.9rem",
                            color: "#eeeeee",
                            lineHeight: 1.6,
                          }}
                        >
                          <span
                            className="shrink-0 mt-2 block w-1 h-1 rounded-full"
                            style={{ background: "#94908a" }}
                          />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </RevealDiv>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
      </div>
    </>
  );
}
