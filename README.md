# Astik Das — Personal Portfolio Website

An editorial-style, production-quality personal portfolio website crafted for **Astik Das** (Cybersecurity Enthusiast & Software Developer, 1st-Year BTech Computer Science student).

Preserves the warm ivory aesthetic (`#F7F5EF`), dark mode studio theme (`#121312`), oversized typography, portrait frame with ability card, physical notebook card with spiral rings, arched interactive doors vault, hanging lamp pull cord, and high-performance micro-interactions.

---

## 🛠 Tech Stack

- **Framework**: React 18 + Vite 5 (TypeScript)
- **Styling**: Tailwind CSS 3 (Custom Editorial Palette & Typography)
- **Animations**: Framer Motion 11
- **Icons**: Lucide React
- **Audio Feedback**: Web Audio API (tactile page flips & pull clicks, zero external media dependencies)
- **Form Forwarding**: Web3Forms / Formspree / Mailto fallback
- **Production Headers**: Content Security Policy, X-Frame-Options, X-Content-Type-Options, Referrer-Policy

---

## 📁 Project Structure

```
myPortfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml           # Automated GitHub Pages CI/CD workflow
├── public/
│   ├── astik-portrait-opt.jpg   # Optimized portrait
│   ├── favicon.svg              # Minimalist AD monogram favicon
│   ├── og-image.png             # 1200x630 social preview card
│   ├── portrait-placeholder.svg # Editorial vector silhouette fallback
│   ├── robots.txt               # Search engine crawler directives
│   └── sitemap.xml              # XML Sitemap for search indexing
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── AvailabilityBadge.tsx # "Open to opportunities" pulsing pill
│   │   │   ├── CustomCursor.tsx      # Smooth follower cursor (reduced-motion aware)
│   │   │   └── LampPullCord.tsx      # Hanging golden cord theme toggle
│   │   ├── hero/
│   │   │   ├── NotebookCard.tsx      # Spiral-bound animated title card
│   │   │   └── PortraitFrame.tsx     # Framed portrait + ability card
│   │   ├── layout/
│   │   │   ├── Footer.tsx            # Editorial footer & back to top
│   │   │   └── Navbar.tsx            # Minimal editorial nav + live clock
│   │   └── sections/
│   │       ├── About.tsx             # Two-column student narrative
│   │       ├── Achievements.tsx      # Certifications, hackathons & DSA milestones
│   │       ├── Contact.tsx           # Contact cards & interactive form
│   │       ├── Hero.tsx              # Oversized typography & actions
│   │       ├── Projects.tsx          # Full project index & code links
│   │       └── ProjectVault.tsx      # Arched doors interactive showcase
│   ├── data/
│   │   └── portfolioData.ts     # Single source of truth for text & projects
│   ├── types/
│   │   └── index.ts             # TypeScript definitions
│   ├── utils/
│   │   └── sound.ts             # Web Audio API tactile feedback
│   ├── App.tsx                  # Root component & theme provider
│   ├── index.css                # Global Tailwind directives & paper textures
│   ├── main.tsx                 # App mount entry point
│   └── vite-env.d.ts            # Vite client & environment variable declarations
├── .env.example                 # Example environment variables
├── .gitignore                   # Clean Git ignore rules
├── index.html                   # HTML template with non-blocking fonts & OG metadata
├── package.json                 # Project dependencies & scripts
├── tailwind.config.js           # Tailored palette, fonts & shadows
├── tsconfig.json                # Strict TypeScript configuration
├── vercel.json                  # Production security headers & SPA rewrites
└── vite.config.ts               # Bundler configuration & vendor chunk splitting
```

---

## 🚀 Getting Started

### 1. Prerequisites
Ensure you have **Node.js (v18+)** and **npm** installed.

### 2. Installation
```bash
npm install
```

### 3. Environment Setup (Optional)
To receive messages submitted via the contact form straight to your email without maintaining a backend server:
```bash
cp .env.example .env
```
Fill in your free Web3Forms access key (from [web3forms.com](https://web3forms.com)) or your Formspree endpoint:
```env
VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here
```
*(If left blank, the form simulates submission with confetti and provides visitors a direct 1-click fallback to their email client).*

### 4. Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 5. Production Build & Verification
```bash
# Type check and build optimized bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 🌐 Production Deployment

### Option A: Vercel (Recommended — Fastest & Zero Configuration)
1. Push your repository to GitHub (`https://github.com/astikdas11/myPortfolio`).
2. Log in to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import `myPortfolio`.
4. Vercel automatically detects Vite:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. (Optional) Add your `VITE_WEB3FORMS_ACCESS_KEY` under **Environment Variables**.
6. Click **Deploy**. The included `vercel.json` will automatically apply SPA fallbacks and HTTP security headers (CSP, HSTS, X-Content-Type-Options, Referrer-Policy).

### Option B: GitHub Pages (Automated via GitHub Actions)
A production-ready workflow is already configured in `.github/workflows/deploy.yml`.
1. Go to your GitHub repository: `https://github.com/astikdas11/myPortfolio`.
2. Navigate to **Settings > Pages**.
3. Under **Build and deployment > Source**, select **GitHub Actions**.
4. Push a commit to the `main` branch. GitHub Actions will automatically install, type-check, build, and publish your portfolio at `https://astikdas11.github.io/myPortfolio/`.

---

## 🛡 Security Review Scope & Notice

- **Scope**: Application review of static frontend assets, input validation, external link sanitization (`rel="noopener noreferrer"`), environment variable separation, and security response headers.
- **Headers Configured**: `Content-Security-Policy`, `X-Content-Type-Options`, `X-Frame-Options: DENY`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy`.
- **Notice**: No static website can be guaranteed 100% invulnerable to all threats. Always keep dependencies updated via `npm audit` and avoid placing private keys or secrets into client-side code.
