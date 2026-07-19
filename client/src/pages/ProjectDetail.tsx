import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight } from "lucide-react";
import RevealDiv from "@/components/RevealDiv";
import SiteFooter from "@/components/SiteFooter";
import { projects } from "@/data/projects";

/**
 * Minimal project-page header — Claura-style: back link / centered wordmark /
 * empty third column for balance, no CTA button, not fixed (so the project
 * content starts right away as soon as you scroll, rather than living under
 * a tall dark hero like the home page).
 */
function ProjectHeader() {
  return (
    <header className="pt-8 pb-4 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-3 items-center">
        <a
          href="#work"
          className="hover-fade inline-flex items-center gap-2 w-fit"
          style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#121111" }}
        >
          <ArrowLeft size={13} strokeWidth={1.75} />
          Back to Work
        </a>
        <Link
          href="/"
          className="hover-fade justify-self-center"
          style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.05rem", color: "#121111", letterSpacing: "-0.01em" }}
        >
          Vitória Lemos
        </Link>
        <span />
      </div>
    </header>
  );
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const index = projects.findIndex((p) => p.slug === slug);
  const project = index >= 0 ? projects[index] : undefined;

  // Start at the top of each project page (wouter doesn't restore scroll
  // position for us, and we don't want the Work page's scroll carried over).
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col" style={{ background: "#eeeeee", color: "#121111" }}>
        <ProjectHeader />
        <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", letterSpacing: "0.1em", color: "#94908a" }}>
            404
          </p>
          <h1
            className="mt-4 mb-8"
            style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
          >
            Project not found
          </h1>
          <Link href="/" className="cta-link hover-fade inline-flex items-center gap-2 px-6 py-3 border rounded-full" style={{ borderColor: "#121111", fontFamily: "var(--font-mono)", fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>
            ← Back to Work
          </Link>
        </div>
        <SiteFooter />
      </div>
    );
  }

  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  return (
    <div className="min-h-screen" style={{ color: "#121111" }}>
      {/* Header + intro share one background tone, visually distinct from the
          project presentation below */}
      <div style={{ background: "#e7e3db" }}>
        <ProjectHeader />

        {/* ─── INTRO: text (left) + hero mockup (right), vertically centered ─── */}
        <section className="pt-4 pb-20 md:pb-28">
          <div className="container grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Text column */}
            <RevealDiv className="lg:col-span-7">
              <div className="flex items-baseline gap-3 mb-5">
                <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", letterSpacing: "0.1em", color: "#94908a" }}>
                  {project.num}
                </p>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#94908a" }}>
                  {project.category}
                </p>
              </div>

              <h1
                className="mb-6"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "clamp(2.25rem, 5.5vw, 3.75rem)",
                  color: "#121111",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.02,
                  margin: "0 0 24px 0",
                }}
              >
                {project.title}
              </h1>

              <p
                className="mb-8 max-w-[52ch]"
                style={{ fontFamily: "var(--font-body)", fontWeight: 300, fontSize: "1.1rem", color: "#121111", lineHeight: 1.75 }}
              >
                {project.description}
              </p>

              {/* Services — pill tags, Claura-style */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3.5 py-1.5 rounded-full"
                    style={{ background: "#dcd7cd", fontFamily: "var(--font-body)", fontWeight: 400, fontSize: "0.8rem", color: "#121111" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </RevealDiv>

            {/* Hero mockup — transparent PNG, floats directly on the page background, no box */}
            <RevealDiv className="lg:col-span-5" delay={100}>
              <img
                src={project.heroImage}
                alt={`${project.title} — ${project.category}`}
                className="w-full h-auto object-contain"
              />
            </RevealDiv>
          </div>
        </section>
      </div>

      {/* Project presentation — slightly lighter tone than the header/intro above */}
      <div style={{ background: "#eeeeee" }}>

      {/* ─── GALLERY ───
          Behance-style continuous case study: images read as one flowing
          sequence, so they render together (no staggered reveal-on-scroll —
          that made the strip look like it was loading late/broken), no gap
          between them, same width throughout, capped narrower than the
          site's main container so it doesn't blow up on large screens.
          Natural aspect ratio (no cropping) since some of these are
          informational (menus, pricing) where cropping would cut off
          content. Individual images stay square-cornered so the sequence
          reads as one continuous strip — only the very first image is
          rounded on top and the very last one on the bottom, to bookend
          the block. */}
      {project.gallery.length > 0 && (
        <section className="pt-14 pb-20 md:pt-20 md:pb-28">
          <div className="max-w-[900px] mx-auto flex flex-col">
            {project.gallery.map((src, i) => (
              <img
                key={src}
                src={src}
                alt={`${project.title} — case study image ${i + 1}`}
                className={`w-full h-auto block ${i === 0 ? "rounded-t-2xl" : ""} ${
                  i === project.gallery.length - 1 ? "rounded-b-2xl" : ""
                }`}
                loading={i < 2 ? "eager" : "lazy"}
              />
            ))}
          </div>
        </section>
      )}

      {/* ─── PREV / NEXT ─── */}
      <section className="border-t" style={{ borderColor: "#dad6d0" }}>
        <div className="container grid grid-cols-2">
          <Link
            href={`/project/${prev.slug}`}
            className="group hover-fade flex flex-col items-start gap-2 py-10 pr-6 border-r"
            style={{ borderColor: "#dad6d0" }}
          >
            <span className="flex items-center gap-2" style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#94908a" }}>
              <ArrowLeft size={12} strokeWidth={1.75} />
              Previous
            </span>
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "clamp(1rem, 2.5vw, 1.4rem)", color: "#121111" }}>
              {prev.title}
            </span>
          </Link>
          <Link
            href={`/project/${next.slug}`}
            className="group hover-fade flex flex-col items-end gap-2 py-10 pl-6 text-right"
          >
            <span className="flex items-center gap-2" style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#94908a" }}>
              Next
              <ArrowRight size={12} strokeWidth={1.75} />
            </span>
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "clamp(1rem, 2.5vw, 1.4rem)", color: "#121111" }}>
              {next.title}
            </span>
          </Link>
        </div>
      </section>
      </div>

      <SiteFooter />
    </div>
  );
}
