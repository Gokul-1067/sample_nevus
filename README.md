# Nevus Infocom (NI) — Complete Corporate Website Demo

**System Integration & Technology Solutions • More Than 22 Years of Experience • Serving Across South India**

A modern, responsive, frontend-only corporate website demonstration created for **Nevus Infocom (NI)**. This demo showcases the company's real-world technology capabilities, domain experience, and integration standards without placeholder text, fake testimonials, or e-commerce gimmicks.

---

## 🚀 How to Run the Website Locally

This is a zero-dependency static frontend site. It requires no database, no build tools, and no backend server.

### Option 1: Python Built-In HTTP Server (Recommended)
Open a terminal in this project folder and run:

```bash
python -m http.server 8080
```

Then visit [http://localhost:8080](http://localhost:8080) in any modern browser.

### Option 2: Direct File Inspection
You can also open `index.html` directly in any web browser (Google Chrome, Microsoft Edge, Safari, Firefox). All local SVG assets and relative CSS/JS paths resolve locally.

---

## 🏢 Company Profile & Source of Truth

- **Company Name:** Nevus Infocom (NI)
- **Experience:** Over 22 years of field experience in technology solutions
- **Business Type:** System integration & technology solutions
- **Service Footprint:** Across South India (Karnataka, Tamil Nadu, Kerala, Andhra Pradesh & Telangana)
- **Core Business Domains:**
  1. CCTV & video surveillance integration
  2. Structured networking infrastructure
  3. EPABX & voice communication systems
  4. Biometric access and attendance systems
  5. Audio & video surveillance-related solutions
  6. Digital signage solutions
  7. Turnkey installation, integration, support, and servicing of relevant systems
- **Key Differentiator:** Disciplined software & system backup practices (configuration snapshots, firmware baselines, and disaster recovery readiness).
- **Target Audience:** Schools and colleges, small and medium enterprises (SMBs), government departments, private corporations, and healthcare institutions.
- **Business Model:** Solutions & integration partner, **NOT** an online hardware retailer or consumer shop.

---

## 📄 Site Structure & Pages

| Page | File | Description |
|---|---|---|
| **Home** | `index.html` | High-impact hero with 22+ years milestone, integrated architecture graphic, credibility highlights, 6 service overviews, equipment showcase, target sectors, backup continuity feature, installation gallery preview, and consultation CTA. |
| **About Us** | `about.html` | Corporate background, 22+ years evolution, 4-stage integration methodology, full system topology diagram, South India operational reach, and core distinctions. |
| **Services** | `services.html` | In-depth breakdown of all 6 core integration disciplines: scope of work, practical problems addressed, target organisations, and equipment synergy. |
| **Products & Tech** | `products.html` | Showcase of 8 equipment categories NI integrates (cameras, NVRs, biometrics, EPABX, switches, Wi-Fi, racks, AV gear). Includes interactive category filter and explicit notice that NI is an integration partner, not a retail store. |
| **Gallery** | `gallery.html` | Illustrative installation environments across 6 technical categories (control rooms, server racks, biometric portals, PBX desks, atrium displays, backup vaults) with interactive category filter and full-screen lightbox modal. |
| **Trust & Readiness** | `testimonials.html` | Rigorous corporate governance page detailing client confidentiality, 3-step project handover protocol, and an elegant configurable container for formal client sign-offs (strictly avoiding fabricated reviews). |
| **Careers** | `careers.html` | Welcoming overview of field engineering in South India, 4 representative career pathways (surveillance, cabling, EPABX, maintenance), and an interactive frontend demo talent interest form. |
| **Contact** | `contact.html` | Configurable operational contact channels across South India, an interactive multi-field consultation enquiry form with frontend validation and non-misleading demo feedback modal, plus an integration FAQ accordion. |

---

## 🎨 Visual Identity & Design System

- **Color Palette:**
  - **Midnight & Deep Navy (`#070D18`, `#0B1528`, `#101E38`)**: Authority, stability, and corporate technical credibility.
  - **High-Tech Accents (`#0062FF`, `#00E5BE`, `#388BFD`)**: Modern signal cyan and precision tech blue.
  - **Crisp Architectural Neutrals (`#FFFFFF`, `#F8FAFC`, `#F1F5F9`, `#E2E8F0`)**: Clean contrast and editorial legibility.
- **Bespoke NI Logo Mark:**
  - Original vector logo (`images/logo.svg`, `images/logo-light.svg`, and `images/favicon.svg`) featuring a custom geometric monogram with interconnected signal nodes and clear corporate wordmark.
- **Bespoke Visual Vector Diagrams:**
  - Dedicated, high-detail SVG architecture drawings and equipment diagrams for every service category and technology domain. Zero external image dependencies required to render smoothly.
- **Micro-Interactions & Motion:**
  - Sticky glassmorphic navigation header (`backdrop-filter: blur(14px)`).
  - Scroll-triggered reveal animations via `IntersectionObserver`.
  - Accessible mobile drawer with focus management and ARIA states.
  - Interactive category filtering tabs on Products and Gallery pages.
  - Interactive image lightbox viewer with keyboard `Escape` navigation.
  - Interactive FAQ accordion on Contact page.
  - Validated enquiry form with a clear demonstration confirmation dialog.
  - Full support for `prefers-reduced-motion: reduce`.

---

## 🧪 Testing & Verification

- **Links & Asset Verification:** Verified via automated script. All internal links between pages point to existing files with zero broken references.
- **Zero Placeholders:** No `Lorem Ipsum`, no "coming soon" blocks, and no fabricated client quotes or logos.
- **Frontend-Only Compliance:** Zero backend or server-side requirements; operates cleanly in any modern web browser.

