# Astik Das — Personal Portfolio Website

An editorial-style, production-quality personal portfolio website crafted for **Astik Das** (Cybersecurity Enthusiast & Software Developer, 1st-Year BTech Computer Science student).

Inspired by the reference aesthetic: warm ivory background (`#F7F5EF`), oversized typography, professional portrait frame, physical notebook-style interactive title card with spiral rings, arched interactive doors vault, subtle ambient light cord, and generous whitespace.

---

## 📸 Key Design & Interactive Features

1. **Warm Editorial Palette**:
   - Primary Cream: `#F7F5EF` (dark mode / evening mode: `#121312` obsidian olive).
   - Charcoal Typography: `#1B1B1B` with subtle brass (`#C5A059`) and sage green (`#527960`) accents.
   - Subtle paper-texture simulation with crisp micro-interactions.

2. **The Interactive Notebook Card**:
   - Spiral metallic ring binding at top with punched holes and physical paper depth.
   - Stacked paper layers with physical tilt (-1.5°).
   - Click or hover to flip through role pages (`01 / 04`, `02 / 04`, etc.) with physical card turning animations and Web Audio click sounds.

3. **Interactive Project Vault ("Magic happens behind the doors")**:
   - 3 color-coded arched doors with brass nameplates and keyholes:
     - **Door 1 (Deep Navy)**: TraceHawk (Network Traffic & Attack Stories)
     - **Door 2 (Emerald Forest)**: CodeHaters (Full-Stack Next.js 16 & FastAPI Platform)
     - **Door 3 (Umber Brown)**: DSA Journey (Algorithmic C++ Practice)
   - Selecting a door opens the room stage with architecture specs and terminal view.

4. **Interactive Hanging Lamp Cord**:
   - Hanging golden brass pull-tassel at the top right.
   - Click or drag down to pull the cord with spring physics, triggering a subtle click sound and toggling between daylight cream and evening dark mode.

5. **Live Editorial Clock**:
   - Shows live formatted local time in the header (`Local time 2:00pm • 3 Nov 2026`).

6. **Professional Portrait with "My Ability Card"**:
   - Framed portrait with atmospheric glow and "My ability card" button.
   - Click reveals technical specs and educational overview in an interactive drawer.

7. **Fully Accessible & Reduced-Motion Aware**:
   - Automatically respects `prefers-reduced-motion: reduce`.
   - Accessible keyboard focus states, semantic HTML, and zero fabricated credentials.

---

## 📁 Project Folder Structure

```
portfolio1/
├── index.html                   # HTML template with Google Fonts & metadata
├── package.json                 # Project dependencies & scripts
├── postcss.config.js            # PostCSS configuration
├── tailwind.config.js           # Tailored palette, fonts & shadows
├── tsconfig.json                # TypeScript compiler configuration
├── tsconfig.node.json           # Node TypeScript configuration
├── vite.config.ts               # Vite bundler configuration
├── public/
│   ├── favicon.svg              # Minimalist AD monogram favicon
│   ├── astik-portrait-opt.jpg   # Optimized professional portrait
│   └── portrait-placeholder.svg # Minimalist vector silhouette placeholder
└── src/
    ├── main.tsx                 # App mount entry point
    ├── App.tsx                  # Root component & theme provider
    ├── index.css                # Global Tailwind directives & paper textures
    ├── types/
    │   └── index.ts             # Project, Skill, & Achievement interfaces
    ├── data/
    │   └── portfolioData.ts     # Single source of truth for text & projects
    ├── utils/
    │   └── sound.ts             # Web Audio API tactile feedback
    └── components/
        ├── common/
        │   ├── AvailabilityBadge.tsx # "Open to opportunities" pulsing pill
        │   ├── CustomCursor.tsx      # Smooth follower cursor
        │   └── LampPullCord.tsx      # Hanging golden cord theme toggle
        ├── hero/
        │   ├── NotebookCard.tsx      # Spiral-bound animated title card
        │   └── PortraitFrame.tsx     # Framed portrait + ability card
        ├── layout/
        │   ├── Navbar.tsx            # Minimal editorial nav + live clock
        │   └── Footer.tsx            # Editorial footer & back to top
        └── sections/
            ├── Hero.tsx              # Oversized typography & actions
            ├── About.tsx             # Two-column student narrative
            ├── ProjectVault.tsx      # Arched doors interactive showcase
            ├── Projects.tsx          # Full project index & code links
            ├── Skills.tsx            # Honest categorized skills (no % bars)
            ├── Achievements.tsx      # Certifications, hackathons & DSA
            └── Contact.tsx           # Contact links, email copy & form
```

---

## 🚀 Getting Started

### 1. Prerequisites
Ensure you have **Node.js (v18+)** installed on your system.

### 2. Start the Development Server
```bash
npm run dev
```
Open ][http://localhost:5173(http://localhost:5173) in your browser.

### 3. Build for Production
```bash
npm run build
```
This produces an optimized production bundle inside the `dist/` directory.

### 4. Preview Production Build Locally
```bash
npm run preview
```

---

## 🎨 How to Customize

### 1. Replacing Your Portrait
- Place your photo file into the `public/` directory (e.g. `public/astik-portrait-opt.jpg`).
- The portfolio automatically displays it with smooth image fallback to the vector silhouette.
- You can also toggle between the photograph and the vector silhouette directly using the button beneath the portrait frame.

### 2. Updating Project Links & Content
All project details, GitHub URLs, and descriptions live in a clean file:
👉 **`src/data/portfolioData.ts`**

To change the GitHub repo for TraceHawk, Tic-Tac-Toe, or DSA Journey:
```typescript
{
  id: 'tracehawk',
  title: 'TraceHawk',
  githubUrl: 'https://github.com/astikdas11/your-repo-name',
  liveUrl: 'https://your-demo-url.com', // or omit if no live URL
  ...
}
```

### 3. Updating Your Email & Socials
In `src/data/portfolioData.ts`:
```typescript
socials: {
  github: 'https://github.com/astikdas11',
  linkedin: 'https://www.linkedin.com/in/astik-das-253145310/',
  email: 'your.real.email@gmail.com'
}
```

### 4. Adding Real Achievements & Certifications
In `src/data/portfolioData.ts`, edit the `ACHIEVEMENTS` array:
```typescript
{
  id: 'ach-1',
  category: 'Cybersecurity',
  title: 'CompTIA Security+ / TryHackMe Top 5%',
  issuerOrEvent: 'TryHackMe',
  dateOrStatus: 'Completed 2026',
  description: 'Your achievement details...',
  badgeText: 'Certification',
  isPlaceholder: false
}
```

---

## 🌐 Deployment Instructions

### Deploy to Vercel (Recommended — 2 minutes)
1. Push your repository to GitHub (`https://github.com/astikdas11/portfolio`).
2. Go to [vercel.com](https://vercel.com) and log in with GitHub.
3. Click **"New Project"** and import `portfolio`.
4. Vercel automatically detects **Vite**:
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Click **"Deploy"** — your live website is ready!

### Deploy to GitHub Pages
1. In `vite.config.ts`, add the base path:
   ```typescript
   export default defineConfig({
     base: '/portfolio/', // Replace with your GitHub repository name
     plugins: [react()]
   });
   ```
2. Build the project:
   ```bash
   npm run build
   ```
3. Deploy the `dist` folder to the `gh-pages` branch or configure GitHub Actions under **Settings > Pages > GitHub Actions (Static HTML/Vite)**.

