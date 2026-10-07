# Jewellery Business Management Software — iiQBets

A modern, responsive single-page marketing website for iiQBets' Jewellery Business Management Software (ERP + Order Management + Retailers Application).

## Tech Stack

- **React** (functional components + hooks)
- **Vite** (build tool & dev server)
- **TypeScript**
- **Tailwind CSS** (custom brand theme)
- **Framer Motion** (scroll animations & micro-interactions)
- **Recharts** (dashboard charts)
- **Lucide React** (icons)
- **Supabase** (demo request form submissions)

## Setup

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── ui/
│   │   ├── Button.tsx           # Reusable button (primary, outline, gold, ghost)
│   │   ├── SectionHeading.tsx   # Reusable section heading with animation
│   │   └── FeatureCard.tsx      # Reusable feature card with hover lift
│   ├── Navbar.tsx               # Sticky navbar with scroll-spy + mobile menu
│   ├── Hero.tsx                 # Hero with laptop + phone mockups (Recharts)
│   ├── Features.tsx             # 12 feature cards grid
│   ├── DashboardPreview.tsx     # Full dashboard mockup with sidebar + charts
│   ├── WhyChoose.tsx            # 5 reasons cards
│   ├── IdealFor.tsx             # Icon tiles for target businesses
│   ├── Benefits.tsx             # 6 animated benefit cards
│   ├── CTA.tsx                  # Navy/gold CTA banner
│   ├── Contact.tsx              # Contact info + validated demo form
│   ├── Footer.tsx               # Footer with links, contact, socials
│   └── FloatingButtons.tsx      # WhatsApp, Call, Back-to-top
├── data/
│   └── content.ts               # All section content & data
├── lib/
│   └── supabase.ts              # Supabase client
├── App.tsx                      # Main app composition
├── main.tsx                     # Entry point
└── index.css                    # Tailwind + custom utilities
```

## Brand Colors

| Color   | Hex       | Usage                    |
|---------|-----------|--------------------------|
| Navy    | `#0B1F4B` | Primary, backgrounds     |
| Crimson | `#D62828` | CTAs, accents            |
| Gold    | `#F4B400` | Highlights, premium feel |
| Light   | `#F5F7FA` | Section backgrounds      |

## Features

- Fully responsive (mobile-first)
- Scroll-spy active nav links
- Staggered scroll animations (Framer Motion)
- Interactive dashboard & phone mockups (Recharts, no images)
- Validated demo request form with success/error states
- Demo requests saved to Supabase
- Floating WhatsApp / Call buttons
- Back-to-top button
- SEO meta tags & semantic HTML
- Accessible with keyboard navigation
