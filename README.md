# MKTECH — Technology for a Better Tomorrow

> **"Turning real-world problems into practical digital solutions."**

MKTECH is a pre-seed technology startup building practical digital solutions for businesses and communities across real-world sectors:
- **Real Estate** (Digital business processes, property workflows, and buyer engagement)
- **Quick Commerce** (Hub and dispatch coordination, inventory synchronization)
- **Boutique & Retail** (Showroom digital presence, interactive catalogs, customer touchpoints)
- **Food Processing** (Batch tracking, quality assurance checklists, digital compliance records)
- **Farmer & Village Problem Solving** (Grassroots digital tools, community issue registry, rural access)

---

## 1. Brand Identity & Visual Language

- **Primary Blue:** `#1554A3`
- **Deep Navy:** `#0B1F3A`
- **Dark Grey:** `#4A4F55`
- **Light Background:** `#F6F9FC`
- **White:** `#FFFFFF`

Designed in adherence to high-standard frontend craftsmanship:
- Zero-pill metadata discipline
- Clear typographic hierarchy
- Full responsive support (360px mobile to 1920px widescreen)
- WCAG AA accessibility, visible focus rings, and `prefers-reduced-motion` compliance
- High-fidelity interactive SVG technology topology visual

---

## 2. Architecture & File Structure

```
├── server.ts                    # Express full-stack entry point & Vite middleware
├── src/
│   ├── main.tsx                 # Client application entry point
│   ├── App.tsx                  # Client router, SEO document title sync, layout wrapper
│   ├── index.css                # Tailwind CSS v4 styling & color definitions
│   ├── content/                 # Centralized content architecture
│   │   ├── site.ts              # Company branding, contacts, social links, navigation
│   │   ├── solutions.ts         # 6 core solution disciplines and capabilities
│   │   ├── industries.ts        # 5 client domains with focus areas and opportunities
│   │   ├── projects.ts          # Structured project and case study registry
│   │   ├── team.ts              # Founder Mahesh bio & 5-member team structure
│   │   ├── blog.ts              # Insights articles and categories
│   │   └── faq.ts               # Frequently asked questions & engagement guidelines
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx       # 3-zone Top Bar Contract with mobile drawer
│   │   │   └── Footer.tsx       # Corporate footer with domain highlights and legal links
│   │   ├── ui/
│   │   │   ├── BrandLogo.tsx    # Official MKTECH vector brand mark
│   │   │   ├── Buttons.tsx      # Standardized single-line buttons
│   │   │   ├── SectionHeading.tsx # Clean editorial headings (no code comments)
│   │   │   ├── AbstractTechVisual.tsx # Interactive technology ecosystem diagram
│   │   │   ├── ProcessLine.tsx  # 6-stage delivery methodology (01 Discover to 06 Evolve)
│   │   │   ├── ProjectCard.tsx  # Project cards with expandable technical scope
│   │   │   ├── IndustryCard.tsx # Focus domain cards with hover interactions
│   │   │   ├── SolutionCard.tsx # Solution capability cards
│   │   │   ├── FAQAccordion.tsx # Accessible FAQ accordion
│   │   │   ├── Breadcrumbs.tsx  # Clean unboxed breadcrumb navigation
│   │   │   ├── TestimonialsReadiness.tsx # Case study & verification governance
│   │   │   ├── CtaSection.tsx   # Reusable conversion banners
│   │   │   └── ErrorBoundary.tsx # Graceful 500 error handling
│   │   └── forms/
│   │       └── ContactForm.tsx  # Validated contact form with honeypot bot trap
│   └── pages/
│       ├── HomePage.tsx
│       ├── AboutPage.tsx
│       ├── SolutionsPage.tsx
│       ├── IndustriesPage.tsx
│       ├── ProjectsPage.tsx
│       ├── TechnologyPage.tsx
│       ├── InsightsPage.tsx
│       ├── ContactPage.tsx
│       ├── PrivacyPolicyPage.tsx
│       ├── TermsPage.tsx
│       └── NotFoundPage.tsx
├── public/
│   ├── robots.txt               # Search engine indexing directives
│   └── sitemap.xml              # XML Sitemap covering all 10 core routes
└── metadata.json                # AI Studio application metadata
```

---

## 3. Environment Variables Configuration

Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

| Variable | Description | Default |
| :--- | :--- | :--- |
| `PORT` | Local server port | `3000` |
| `CONTACT_EMAIL` | Target email receiving submitted website inquiries | `contact@mktech.in` |
| `EMAIL_PROVIDER_API_KEY` | Transactional email provider key (e.g., Resend / SendGrid / Postmark) | `""` (Logs to server securely if unset) |
| `VITE_CONTACT_EMAIL` | Public email displayed across UI | `contact@mktech.in` |
| `VITE_CONTACT_PHONE` | Public phone desk displayed across UI | `+91 (Enquiry Desk)` |
| `VITE_COMPANY_ADDRESS` | Registered company location | `Rajasthan, India` |
| `VITE_GA_TRACKING_ID` | Optional Google Analytics measurement ID | `""` |

---

## 4. Setting Up Email Dispatch (Optional)

If you wish to route form submissions directly to an email inbox:
1. Sign up for a transactional provider such as **Resend** (`https://resend.com`) or **Postmark**.
2. Add your API key to `EMAIL_PROVIDER_API_KEY` in `.env`.
3. Set `CONTACT_EMAIL="founder@mktech.in"`.
4. In `server.ts`, uncomment the dispatch payload. If left empty, all inquiries are defensively validated, logged to the server audit trail, and stored with timestamps.

---

## 5. Development & Production Run

### Local Development
```bash
npm run dev
```
Starts the full-stack server on port `3000` with hot server routing and Vite middleware.

### Production Build
```bash
npm run build
npm start
```

### Static Build (for Vercel / Netlify / Cloudflare Pages)
```bash
npm run build
```
The output will be placed in the `/dist` directory.
