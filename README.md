# Ashish Meena — Portfolio

A modern, animated portfolio built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, **GSAP**, and **Three.js/React Three Fiber**.

## ✨ Features

- **Modern Tech Stack**: Next.js 14 App Router, TypeScript, Tailwind CSS
- **Rich Animations**: Framer Motion for page transitions, GSAP for scroll-triggered animations
- **3D Background**: Interactive Three.js particle fields, neural networks, and data flow visualizations
- **Responsive Design**: Mobile-first, works beautifully on all devices
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation, reduced motion support
- **Performance Optimized**: Code splitting, image optimization, lazy loading
- **Dark Theme**: Elegant dark mode with custom color system

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles & Tailwind imports
│   ├── layout.tsx           # Root layout with fonts & metadata
│   └── page.tsx             # Main page composing all sections
├── components/
│   ├── ui/                  # Reusable UI components (Button, Card, Input, etc.)
│   ├── sections/            # Page sections (Hero, About, Experience, etc.)
│   ├── background/          # Three.js background effects
│   ├── Navigation.tsx       # Responsive navigation with theme toggle
│   └── Footer.tsx           # Footer with social links
├── lib/
│   ├── utils.ts             # Utility functions (cn, formatting, etc.)
│   └── data.ts              # Portfolio data (experience, projects, skills, etc.)
├── hooks/
│   └── useScroll.ts         # Custom hooks for scroll, intersection observer
└── types/
    └── index.ts             # TypeScript type definitions
```

## 🎨 Customization

### Colors
Edit `tailwind.config.ts` to customize the color palette:
- `bg.*` — Background colors
- `accent.*` — Accent colors (primary, secondary, tertiary, warning, error)
- `text.*` — Text colors
- `border.*` — Border colors

### Fonts
Fonts are loaded via `next/font` in `layout.tsx`:
- **Display**: Syne (headlines)
- **Sans**: Space Grotesk (body text)
- **Mono**: JetBrains Mono (code)

### Content
Update `src/lib/data.ts` with your information:
- `navItems` — Navigation links
- `socialLinks` — Social media links
- `experiences` — Work experience
- `projects` — Portfolio projects
- `skills` — Technical skills with proficiency
- `achievements` — Awards, competitions, leadership
- `education` — Education details
- `stats` — Hero section statistics

### Animations
- **Framer Motion**: Page transitions, hover effects, scroll animations
- **GSAP**: Complex scroll-triggered animations (add via `gsap` and `ScrollTrigger`)
- **Three.js**: Background particle systems in `src/components/background/BackgroundEffects.tsx`

## 📦 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify
```bash
# Build command: npm run build
# Output directory: .next
```

### Docker
```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
EXPOSE 3000
CMD ["node", "server.js"]
```

Add `output: 'standalone'` to `next.config.js` for Docker deployment.

## 🔧 Configuration

### Environment Variables
Create `.env.local` for local development:
```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX  # Google Analytics (optional)
```

### Analytics
Add Google Analytics or other analytics in `layout.tsx` or use `@vercel/analytics`.

## 🎯 Performance Tips

1. **Images**: Use `next/image` for optimized images
2. **Fonts**: `next/font` self-hosts fonts for zero layout shift
3. **Code Splitting**: Dynamic imports for heavy components
4. **Three.js**: Reduce particle count on mobile via `useMediaQuery`
5. **Bundle Analysis**: Run `npm run build && npx @next/bundle-analyzer`

## 📱 Responsive Breakpoints

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## ♿ Accessibility

- Semantic HTML5 elements
- ARIA labels and roles
- Focus management
- Color contrast ratios (WCAG AA)
- Reduced motion support
- Keyboard navigation

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 3 |
| Animations | Framer Motion 11, GSAP 3 |
| 3D Graphics | Three.js, React Three Fiber, Drei |
| Icons | Lucide React |
| Syntax Highlighting | React Syntax Highlighter |
| Type Animation | React Type Animation |

## 📄 License

MIT License — feel free to use this as a template for your own portfolio!

## 🤝 Contributing

Found a bug or have a suggestion? Open an issue or submit a PR!

---

Built with ❤️ by [Ashish Meena](https://github.com/Ashish0555)