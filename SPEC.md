# BGT Rent - Company Profile Website Specification

## 1. Concept & Vision

Website company profile profesional untuk **BGT Rent** (PT. BUMIRAYA GREEN TECH) - perusahaan rental kendaraan yang melayani kebutuhan Industry dan Non-Industry di jalur Surabaya-Jakarta. Website ini memancarkan kesan terpercaya, modern, dan profesional dengan fokus pada konversi via WhatsApp. Desain menggunakan warna putih dan hijau teal yang selaras dengan logo perusahaan.

## 2. Design Language

### Aesthetic Direction
Corporate modern dengan sentuhan profesional Indonesia. Clean, trustworthy, dan approachable - seperti perusahaan rental yang bisa diandalkan untuk operasional jangka panjang.

### Color Palette
```
Primary Green (Teal):    #10B981 (Emerald Green)
Primary Dark:           #065F46 (Deep Teal)
Secondary:              #34D399 (Light Teal)
Accent:                 #059669 (Forest Green)
Background Primary:     #FFFFFF (Pure White)
Background Secondary:    #F0FDF4 (Mint Cream)
Background Alt:         #ECFDF5 (Light Mint)
Text Primary:            #111827 (Almost Black)
Text Secondary:          #374151 (Gray)
Text Muted:              #6B7280 (Medium Gray)
Border:                  #E5E7EB (Light Gray)
Success:                 #10B981 (Green)
```

### Typography
- **Headings**: Inter (Google Fonts) - Bold, clean, professional
- **Body**: Inter - Regular weight for readability
- **Fallback**: system-ui, -apple-system, sans-serif

### Spatial System
- Base unit: 4px
- Section padding: 80px (desktop), 48px (mobile)
- Container max-width: 1200px
- Card padding: 24px
- Gap between elements: 16px-32px

### Motion Philosophy
- Subtle fade-in on scroll (opacity 0→1, 600ms ease-out)
- Hover transitions: 200ms ease
- Button hover: scale(1.02) + shadow elevation
- Staggered animations for lists: 100ms delay between items

### Visual Assets
- Logo: From provided URL (minimax-algeng-chat-tts-us.oss-us-east-1.aliyuncs.com)
- Icons: Lucide React (consistent, clean line icons)
- Decorative: Subtle gradient overlays, geometric shapes

## 3. Layout & Structure

### Page Structure
```
├── Hero (Full viewport, gradient overlay)
├── Tentang Kami (Light background)
├── Filosofi (Alternating background)
├── Layanan (Cards grid layout)
├── Armada (Visual showcase)
├── Harga Fleksibel (CTA-focused)
├── Visi & Misi (Two-column)
├── Rencana Pengembangan (Timeline)
├── Produk (Highlight cards)
├── Pelanggan Kami (Logo showcase)
├── Mengapa BGT Rent (Feature grid)
├── FAQ (Accordion)
├── Kontak (Map + Info)
└── Footer (Full info)
```

### Responsive Strategy
- Mobile-first approach
- Breakpoints: 640px (sm), 768px (md), 1024px (lg), 1280px (xl)
- Navigation: Hamburger menu on mobile
- Grid: 1 col mobile → 2 col tablet → 3-4 col desktop

## 4. Features & Interactions

### Navigation
- Sticky header with blur backdrop
- Smooth scroll to sections
- Active section highlighting
- Mobile hamburger menu with slide-in panel

### WhatsApp Integration
- Floating WhatsApp button (bottom-right)
- Multiple CTA buttons throughout page
- Pre-filled message templates
- Direct link: https://wa.me/6282131941609

### Scroll Animations
- Intersection Observer for reveal animations
- Fade-in-up on section entry
- Staggered animation for card grids

### FAQ Accordion
- Click to expand/collapse
- Smooth height animation
- Only one open at a time

## 5. Component Inventory

### Header
- Logo (left)
- Navigation links (center)
- CTA button (right)
- States: default, scrolled (blur background), mobile (hamburger)

### Hero Section
- Full viewport height
- Background: gradient overlay on image/pattern
- Headline, subheadline, highlights
- Two CTA buttons

### Section Headers
- Badge/label (optional)
- Main title (h2)
- Subtitle/description
- Consistent spacing

### Service Cards
- Icon
- Title
- Description
- Hover: lift + shadow

### Fleet Cards
- Vehicle image placeholder
- Vehicle name
- Description
- CTA link

### Customer Logos
- Company name
- Subtle styling (grayscale → color on hover)

### FAQ Item
- Question (clickable)
- Answer (collapsible)
- Icon indicator (+/-)

### Contact Form/Info
- Company info cards
- WhatsApp button
- Google Maps embed/link

### Footer
- Logo
- Quick links
- Contact info
- Social links
- Copyright

## 6. Technical Approach

### Framework
- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Lucide React** for icons

### Project Structure
```
BGTRent/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── TentangKami.tsx
│   ├── Filosofi.tsx
│   ├── Layanan.tsx
│   ├── Armada.tsx
│   ├── HargaFleksibel.tsx
│   ├── VisiMisi.tsx
│   ├── Rencana.tsx
│   ├── Produk.tsx
│   ├── Pelanggan.tsx
│   ├── MengapaBGT.tsx
│   ├── FAQ.tsx
│   ├── Kontak.tsx
│   ├── Footer.tsx
│   ├── WhatsAppFloat.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── SectionHeader.tsx
│       └── Card.tsx
├── lib/
│   └── constants.ts
├── public/
│   └── (assets)
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

### SEO Implementation
- Metadata API for page SEO
- Open Graph tags
- JSON-LD structured data (LocalBusiness)
- Semantic HTML throughout

### Performance
- Image optimization with next/image
- Font optimization with next/font
- Lazy loading for below-fold content
- Minimal JavaScript bundle
