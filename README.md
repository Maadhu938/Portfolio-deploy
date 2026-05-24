# Maadhu Avati - Premium Portfolio

A high-performance, Bento Grid style portfolio built with **Next.js 16 (Turbopack)** and **React 19**, focused on showcase engineering excellence, AI systems, and refined digital interfaces.

🌐 **Live Site:** [maadhuavati.in](https://maadhuavati.in)

---

## ✨ Features

- **Premium Bento Grid** - Modern high-contrast architectural layout
- **Theme Toggle** - Persistence-based Light/Dark mode with high-contrast utility overrides
- **Real-time Animations** - Interactive scroll-reveal and hover states powered by `framer-motion`
- **Mobile Optimized** - Fully responsive logic with fluid typography and adaptive grid-stacking
- **Performance Focused** - Lazy-loading for all technical icons and dynamic component splitting
- **Vercel Native** - Optimized for high-speed global delivery via Vercel Edge Network

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 16** | Turbopack-enabled React framework |
| **React 19** | Latest UI foundation |
| **Tailwind CSS 4** | Utility-first styling with custom theme blocks |
| **Framer Motion** | Physics-based scroll and entrance animations |
| **Lucide & Devicons** | Technical iconography with fallback logic |
| **Vercel** | Production hosting and edge deployment |

---

## 📁 Project Structure

```
portfolio/
├── public/                 # Static assets (robots, sitemap)
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Provider-wrapped root layout
│   │   ├── page.tsx        # Dynamic entry point (Lazy loading)
│   │   └── globals.css     # Tailwind v4 theme & Noise overlay
│   ├── components/
│   │   ├── Navbar.tsx      # Theme-aware responsive navigation
│   │   ├── Hero.tsx        # High-impact identity block
│   │   ├── ProjectsSection.tsx # Unit-based project grid
│   │   ├── SkillsSection.tsx # Tech stack with adaptive icons
│   │   ├── AboutSection.tsx # Minimalist visual quote block
│   │   ├── ContactSection.tsx # "Ready to Execute" CTA
│   │   └── Icons.tsx       # Custom SVG Definitions (PlayStore, LinkedIn, etc.)
│   └── data/
│       └── projects.ts     # Source of truth for all content
├── next.config.ts          # Build optimization settings
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Maadhu938/Portfolio-deploy.git
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

---

## 👨‍💻 Author

**Maadhu Avati** — Full-Stack Engineer based in Bangalore, India.

- GitHub: [@Maadhu938](https://github.com/Maadhu938)
- LinkedIn: [Maadhu Avati](https://www.linkedin.com/in/maadhu-avati-525435279)
- Instagram: [@maadhu_839](https://instagram.com/maadhu_839)
- Email: maadhuavati7@gmail.com

---

Engineered for precision. Built with Next.js 16.
