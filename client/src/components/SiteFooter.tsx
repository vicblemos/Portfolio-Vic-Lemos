import { Instagram, Linkedin, Mail } from "lucide-react";
import RevealDiv from "@/components/RevealDiv";

const navItems = ["Work", "Skills", "Experience", "Contact"];

/**
 * SiteFooter — the "Let's Talk?" contact CTA + dark footer, shared by the
 * home page and every project detail page. See SiteHeader for a note on why
 * the nav links here are plain #anchor hrefs rather than wouter <Link>s.
 */
export default function SiteFooter() {
  return (
    <>
      {/* ─── CONTACT CTA ─── */}
      <section id="contact" className="py-28 md:py-36 overflow-hidden" style={{ background: "#eeeeee" }}>
        <RevealDiv className="container flex flex-col items-center text-center">
          <p
            className="mb-5"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.65rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "#94908a",
            }}
          >
            Get In Touch
          </p>
          <h2
            className="mb-6"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              fontSize: "clamp(2.5rem, 7vw, 4.25rem)",
              color: "#121111",
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              margin: 0,
            }}
          >
            Let's <em style={{ fontStyle: "italic", fontWeight: 500 }}>Talk?</em>
          </h2>
          <p
            className="mb-10 max-w-[46ch]"
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 300,
              fontSize: "1.05rem",
              color: "#121111",
              lineHeight: 1.7,
            }}
          >
            I'm always open to new projects and opportunities. Reach out and let's talk about your next idea.
          </p>

          <a
            href="mailto:hey.vitorialemos@gmail.com"
            className="cta-link hover-fade inline-flex items-center gap-3 px-8 py-4 mb-10 rounded-full"
            style={{
              background: "#121111",
              color: "#eeeeee",
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            <Mail size={15} strokeWidth={1.75} />
            hey.vitorialemos@gmail.com
          </a>

          {/* Social links */}
          <div className="flex items-center gap-3 mb-14">
            <a
              href="https://www.linkedin.com/in/vitoriablemos/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover-fade w-11 h-11 flex items-center justify-center border rounded-full"
              style={{ borderColor: "#94908a", color: "#121111" }}
            >
              <Linkedin size={17} strokeWidth={1.75} />
            </a>
            <a
              href="https://www.instagram.com/hey.vicdesign/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover-fade w-11 h-11 flex items-center justify-center border rounded-full"
              style={{ borderColor: "#94908a", color: "#121111" }}
            >
              <Instagram size={17} strokeWidth={1.75} />
            </a>
          </div>

          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.7rem",
              letterSpacing: "0.05em",
              color: "#94908a",
              lineHeight: 1.9,
            }}
          >
            <p style={{ margin: 0 }}>Based in Porto, Portugal</p>
            <p style={{ margin: 0 }}>Available for remote &amp; on-site projects</p>
          </div>
        </RevealDiv>
      </section>

      {/* ─── FOOTER ─── */}
      <footer style={{ background: "#121111" }}>
        <div className="container py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
            {/* Brand */}
            <div className="md:col-span-5">
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="flex items-center justify-center w-9 h-9 border shrink-0 rounded-xl"
                  style={{
                    borderColor: "#3a3733",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.65rem",
                    letterSpacing: "0.05em",
                    color: "#eeeeee",
                  }}
                >
                  VL
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 600,
                    fontSize: "1.05rem",
                    color: "#eeeeee",
                    letterSpacing: "-0.01em",
                  }}
                >
                  Vitória Lemos
                </span>
              </div>
              <p
                className="max-w-[32ch]"
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 300,
                  fontSize: "0.85rem",
                  color: "#94908a",
                  lineHeight: 1.7,
                }}
              >
                Graphic Designer focused on branding and visual design.
              </p>
            </div>

            {/* Quick links */}
            <div className="md:col-span-3">
              <p
                className="mb-5"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#eeeeee",
                }}
              >
                Quick Links
              </p>
              <ul className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="hover-fade"
                      style={{ fontFamily: "var(--font-body)", fontWeight: 300, fontSize: "0.85rem", color: "#dad6d0" }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="md:col-span-4">
              <p
                className="mb-5"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#eeeeee",
                }}
              >
                Contact
              </p>
              <ul className="flex flex-col gap-3">
                <li>
                  <a
                    href="mailto:hey.vitorialemos@gmail.com"
                    className="hover-fade"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 300, fontSize: "0.85rem", color: "#dad6d0" }}
                  >
                    hey.vitorialemos@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+351926650308"
                    className="hover-fade"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 300, fontSize: "0.85rem", color: "#dad6d0" }}
                  >
                    +351 926 650 308
                  </a>
                </li>
                <li style={{ fontFamily: "var(--font-body)", fontWeight: 300, fontSize: "0.85rem", color: "#dad6d0" }}>
                  Porto, Portugal
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t" style={{ borderColor: "#2a2826" }}>
          <div className="container py-6 flex justify-center">
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.65rem",
                letterSpacing: "0.05em",
                color: "#65615c",
              }}
            >
              © 2026 Vitória Lemos. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
