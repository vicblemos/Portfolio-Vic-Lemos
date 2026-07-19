// Shared project data — used by the Home grid and each project's own case-study page.
//
// Each project has three kinds of images:
//   - img        → cover photo shown on the Home "Work" grid
//   - heroImage  → floating mockup shown in the vertical block at the top of the
//                  project page (these are transparent-background PNGs, rendered
//                  with object-contain so nothing gets cropped)
//   - gallery    → the full case-study sequence, rendered as one continuous
//                  flush strip on the project page (Behance-style)

import guaccaCover from "@/assets/images/projects/guacca/cover.webp";
import guaccaHero from "@/assets/images/projects/guacca/hero.webp";
import guacca01 from "@/assets/images/projects/guacca/gallery/01.webp";
import guacca02 from "@/assets/images/projects/guacca/gallery/02.webp";
import guacca03 from "@/assets/images/projects/guacca/gallery/03.webp";
import guacca04 from "@/assets/images/projects/guacca/gallery/04.webp";
import guacca05 from "@/assets/images/projects/guacca/gallery/05.webp";
import guacca06 from "@/assets/images/projects/guacca/gallery/06.webp";
import guacca07 from "@/assets/images/projects/guacca/gallery/07.webp";
import guacca08 from "@/assets/images/projects/guacca/gallery/08.webp";

import smooshCover from "@/assets/images/projects/smoosh/cover.webp";
import smooshHero from "@/assets/images/projects/smoosh/hero.webp";
import smoosh01 from "@/assets/images/projects/smoosh/gallery/01.webp";
import smoosh02 from "@/assets/images/projects/smoosh/gallery/02.webp";
import smoosh03 from "@/assets/images/projects/smoosh/gallery/03.webp";
import smoosh04 from "@/assets/images/projects/smoosh/gallery/04.webp";
import smoosh05 from "@/assets/images/projects/smoosh/gallery/05.webp";
import smoosh06 from "@/assets/images/projects/smoosh/gallery/06.webp";
import smoosh07 from "@/assets/images/projects/smoosh/gallery/07.webp";
import smoosh08 from "@/assets/images/projects/smoosh/gallery/08.webp";
import smoosh09 from "@/assets/images/projects/smoosh/gallery/09.webp";
import smoosh10 from "@/assets/images/projects/smoosh/gallery/10.webp";
import smoosh11 from "@/assets/images/projects/smoosh/gallery/11.webp";
import smoosh12 from "@/assets/images/projects/smoosh/gallery/12.webp";
import smoosh13 from "@/assets/images/projects/smoosh/gallery/13.webp";
import smoosh14 from "@/assets/images/projects/smoosh/gallery/14.webp";
import smoosh15 from "@/assets/images/projects/smoosh/gallery/15.webp";
import smoosh16 from "@/assets/images/projects/smoosh/gallery/16.webp";

import patiCover from "@/assets/images/projects/pati-por-elas/cover.webp";
import patiHero from "@/assets/images/projects/pati-por-elas/hero.webp";
import pati01 from "@/assets/images/projects/pati-por-elas/gallery/01.webp";
import pati02 from "@/assets/images/projects/pati-por-elas/gallery/02.webp";
import pati03 from "@/assets/images/projects/pati-por-elas/gallery/03.webp";
import pati04 from "@/assets/images/projects/pati-por-elas/gallery/04.webp";
import pati05 from "@/assets/images/projects/pati-por-elas/gallery/05.webp";
import pati06 from "@/assets/images/projects/pati-por-elas/gallery/06.webp";
import pati07 from "@/assets/images/projects/pati-por-elas/gallery/07.webp";
import pati08 from "@/assets/images/projects/pati-por-elas/gallery/08.webp";
import pati09 from "@/assets/images/projects/pati-por-elas/gallery/09.webp";
import pati10 from "@/assets/images/projects/pati-por-elas/gallery/10.webp";
import pati11 from "@/assets/images/projects/pati-por-elas/gallery/11.webp";

import hubuddhaCover from "@/assets/images/projects/hubuddha/cover.webp";
import hubuddhaHero from "@/assets/images/projects/hubuddha/hero.webp";
import hubuddha01 from "@/assets/images/projects/hubuddha/gallery/01.webp";
import hubuddha02 from "@/assets/images/projects/hubuddha/gallery/02.webp";
import hubuddha03 from "@/assets/images/projects/hubuddha/gallery/03.webp";
import hubuddha04 from "@/assets/images/projects/hubuddha/gallery/04.webp";
import hubuddha05 from "@/assets/images/projects/hubuddha/gallery/05.webp";
import hubuddha06 from "@/assets/images/projects/hubuddha/gallery/06.webp";
import hubuddha07 from "@/assets/images/projects/hubuddha/gallery/07.webp";
import hubuddha08 from "@/assets/images/projects/hubuddha/gallery/08.webp";
import hubuddha09 from "@/assets/images/projects/hubuddha/gallery/09.webp";
import hubuddha10 from "@/assets/images/projects/hubuddha/gallery/10.webp";
import hubuddha11 from "@/assets/images/projects/hubuddha/gallery/11.webp";

import mariaCover from "@/assets/images/projects/maria-severina/cover.webp";
import mariaHero from "@/assets/images/projects/maria-severina/hero.webp";
import maria01 from "@/assets/images/projects/maria-severina/gallery/01.webp";
import maria02 from "@/assets/images/projects/maria-severina/gallery/02.webp";
import maria03 from "@/assets/images/projects/maria-severina/gallery/03.webp";
import maria04 from "@/assets/images/projects/maria-severina/gallery/04.webp";
import maria05 from "@/assets/images/projects/maria-severina/gallery/05.webp";

export type Project = {
  slug: string;
  num: string;
  title: string;
  category: string;
  description: string;
  img: string;
  heroImage: string;
  gallery: string[];
  tags: string[];
  client?: string;
  year?: string;
};

export const projects: Project[] = [
  {
    slug: "guacca",
    num: "01",
    title: "Guacca",
    category: "Brand Identity",
    description:
      "Contemporary Mexican restaurant, covering strategic alignment, logo design, color and font pairings, custom illustrations, and brand materials.",
    img: guaccaCover,
    heroImage: guaccaHero,
    gallery: [guacca01, guacca02, guacca03, guacca04, guacca05, guacca06, guacca07, guacca08],
    tags: ["Logo Design", "Brand Strategy", "Illustration"],
    client: "Guacca",
  },
  {
    slug: "smoosh",
    num: "02",
    title: "Smoosh",
    category: "Brand Identity",
    description:
      "Brand concept development and design for a healthy smoothie bar in Malibu, including branding, brand voice, brand values, website and apps, menus, and content materials.",
    img: smooshCover,
    heroImage: smooshHero,
    gallery: [
      smoosh01, smoosh02, smoosh03, smoosh04, smoosh05, smoosh06, smoosh07, smoosh08,
      smoosh09, smoosh10, smoosh11, smoosh12, smoosh13, smoosh14, smoosh15, smoosh16,
    ],
    tags: ["Brand Identity", "UI Design", "Packaging"],
    client: "Smoosh",
  },
  {
    slug: "pati-por-elas",
    num: "03",
    title: "Pati Por Elas",
    category: "Brand Strategy",
    description:
      "Brand strategy and visual identity for a vibrant and elegant female wellness brand, including concept, strategic alignment, art direction, custom illustration, and marketing materials.",
    img: patiCover,
    heroImage: patiHero,
    gallery: [pati01, pati02, pati03, pati04, pati05, pati06, pati07, pati08, pati09, pati10, pati11],
    tags: ["Brand Strategy", "Illustration", "Art Direction"],
    client: "Pati Por Elas",
  },
  {
    slug: "hubuddha",
    num: "04",
    title: "Hubuddha",
    category: "Logo Design",
    description:
      "Logo design for a young and soulful shop in Ubud, Bali. The project included concept, strategic alignment, use of logo concepts, color pairing, and audits.",
    img: hubuddhaCover,
    heroImage: hubuddhaHero,
    gallery: [
      hubuddha01, hubuddha02, hubuddha03, hubuddha04, hubuddha05, hubuddha06,
      hubuddha07, hubuddha08, hubuddha09, hubuddha10, hubuddha11,
    ],
    tags: ["Logo Design", "Color Pairing", "Brand Audit"],
    client: "Hubuddha",
  },
  {
    slug: "maria-severina",
    num: "05",
    title: "Maria Severina",
    category: "Visual Alignment",
    description:
      "Visual alignment and illustrations development for a cozy Brazilian restaurant, ensuring colors, fonts, and menu layouts reflected the brand's personality and attracted the right clientele.",
    img: mariaCover,
    heroImage: mariaHero,
    gallery: [maria01, maria02, maria03, maria04, maria05],
    tags: ["Illustration", "Menu Design", "Brand Alignment"],
    client: "Maria Severina",
  },
];
