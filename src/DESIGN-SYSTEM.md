# Prashiskshan Design System

## Overview

This document outlines the complete design system for the Prashiskshan platform, including visual design principles, component usage, and brand guidelines.

## 🎨 Brand Colors

### Primary Colors
```css
Blue Primary: #3B82F6 (rgb(59, 130, 246))
Purple Primary: #9333EA (rgb(147, 51, 234))
Green Accent: #10B981 (rgb(16, 185, 129))
```

### Gradients
```css
Hero Gradient (Light): from-blue-50 via-white to-purple-50
Hero Gradient (Dark): from-gray-900 via-gray-800 to-gray-900
Overlay Gradient: from-blue-600/90 to-purple-600/90
```

## 📐 Layout & Spacing

### Container Widths
- **Maximum Content Width**: 1280px (max-w-7xl)
- **Form Containers**: 448px (max-w-md)
- **Text Containers**: 672px (max-w-2xl)

### Spacing Scale
- **Extra Small**: 0.5rem (8px)
- **Small**: 1rem (16px)
- **Medium**: 1.5rem (24px)
- **Large**: 2rem (32px)
- **Extra Large**: 3rem (48px)
- **Section Padding**: 5rem (80px)

## 🖼️ Images & Visual Assets

### Hero Images
All images are sourced from Unsplash and optimized for web:

1. **Students Collaboration** (Hero)
   - URL: `https://images.unsplash.com/photo-1758270705317-3ef6142d306f`
   - Usage: Homepage hero section
   - Aspect: 16:9

2. **Team Meeting** (About)
   - URL: `https://images.unsplash.com/photo-1676275773827-f6554c1ef62a`
   - Usage: About section
   - Aspect: 16:9

3. **Developer Workspace** (Features)
   - URL: `https://images.unsplash.com/photo-1566915896913-549d796d2166`
   - Usage: Features showcase
   - Aspect: 16:9

4. **Education Technology** (Features)
   - URL: `https://images.unsplash.com/photo-1645363308298-3a949c8bfd86`
   - Usage: Features showcase
   - Aspect: 16:9

5. **Tech Internship Workspace** (Login)
   - URL: `https://images.unsplash.com/photo-1622258418550-46a51f29f084`
   - Usage: Login page left panel
   - Aspect: Cover

6. **Professional Business Meeting** (Register)
   - URL: `https://images.unsplash.com/photo-1642522029691-029b5a432954`
   - Usage: Register page left panel
   - Aspect: Cover

### Image Treatment
All images use:
- Gradient overlays for text legibility
- Rounded corners (border-radius: 1rem)
- Shadow effects for depth
- Lazy loading for performance

## 🎭 Visual Effects

### Shadows
```css
Small: shadow-md
Medium: shadow-lg
Large: shadow-xl
Extra Large: shadow-2xl
```

### Hover Effects
- **Cards**: `hover:shadow-lg transition-shadow`
- **Buttons**: `hover:bg-opacity-90 transition-all`
- **Images**: `hover:scale-105 transition-transform duration-300`

### Animations
- **Fade In**: Opacity 0 → 1 over 0.5s
- **Slide In**: TranslateX -20px → 0 over 0.6s
- **Float**: Continuous Y-axis movement
- **Transitions**: 0.3s ease for theme changes

## 🔤 Typography

### Font Families
- **Primary**: System fonts (sans-serif)
- **Weights**: 400 (normal), 500 (medium), 600 (semibold), 700 (bold)

### Font Sizes
```css
h1: 2.25rem (36px) - Hero headings
h2: 1.875rem (30px) - Section headings
h3: 1.5rem (24px) - Subsection headings
h4: 1.25rem (20px) - Card headings
p: 1rem (16px) - Body text
small: 0.875rem (14px) - Meta text
```

### Line Heights
- **Headings**: 1.5
- **Body**: 1.5
- **Compact**: 1.2

## 🧩 Component Library

### Cards
Three types of cards used throughout:

1. **Standard Card**
   ```tsx
   <Card className="p-6 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
   ```

2. **Gradient Card** (Stakeholders)
   ```tsx
   <Card className="p-8 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20">
   ```

3. **Feature Card**
   ```tsx
   <Card className="p-6 hover:shadow-lg transition-all hover:-translate-y-1">
   ```

### Buttons
Four button variants:

1. **Primary**
   ```tsx
   <Button>Get Started</Button>
   ```

2. **Outline**
   ```tsx
   <Button variant="outline">Learn More</Button>
   ```

3. **Ghost**
   ```tsx
   <Button variant="ghost">Cancel</Button>
   ```

4. **Destructive**
   ```tsx
   <Button variant="destructive">Delete</Button>
   ```

### Badges
```tsx
<div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full">
  <Icon className="w-4 h-4" />
  <span>Badge Text</span>
</div>
```

### Icons
Size guidelines:
- **Small**: w-4 h-4 (16px)
- **Medium**: w-5 h-5 (20px)
- **Large**: w-6 h-6 (24px)
- **Extra Large**: w-8 h-8 (32px)
- **Hero**: w-10 h-10 or w-12 h-12 (40-48px)

## 🌓 Dark Mode

### Implementation
- Toggle using `dark` class on `<html>` element
- All colors have dark mode variants
- Smooth transitions (0.3s) between modes

### Color Mappings
| Element | Light | Dark |
|---------|-------|------|
| Background | #FFFFFF | oklch(0.145 0 0) |
| Text | oklch(0.145 0 0) | oklch(0.985 0 0) |
| Border | rgba(0,0,0,0.1) | oklch(0.269 0 0) |
| Card | #FFFFFF | oklch(0.145 0 0) |
| Muted | #ECECF0 | oklch(0.269 0 0) |

## 📱 Responsive Design

### Breakpoints
```css
sm: 640px   - Mobile landscape
md: 768px   - Tablet
lg: 1024px  - Desktop
xl: 1280px  - Large desktop
2xl: 1536px - Extra large desktop
```

### Grid Layouts
- **Mobile**: 1 column
- **Tablet**: 2 columns
- **Desktop**: 3-4 columns

### Navigation
- **Mobile**: Hamburger menu
- **Desktop**: Horizontal nav bar

## 🎯 Page Layouts

### Home Page Structure
```
├── Navigation (sticky)
├── Hero Section (with image)
│   ├── Heading
│   ├── Description
│   ├── CTA Buttons
│   └── Hero Image (desktop only)
├── Impact Metrics (4 columns)
├── About Section (2 columns with image)
├── Stakeholders Section (3 cards)
├── Features Section (showcases + grid)
├── CTA Section (gradient background)
└── Footer (4 columns)
```

### Login/Register Pages
```
├── Left Panel (image with overlay) - Desktop only
│   ├── Brand info
│   ├── Feature highlights
│   └── Visual elements
└── Right Panel (form)
    ├── Logo
    ├── Heading
    ├── Form fields
    ├── Social login
    └── Navigation links
```

### Dashboard Structure
```
├── Sidebar (collapsible)
├── Header (with search & notifications)
└── Main Content Area
    ├── Overview Cards
    ├── Charts/Analytics
    └── Data Tables
```

## 🎨 Design Patterns

### Hero Sections
- Large heading (h1)
- Descriptive paragraph
- Primary + Secondary CTA
- Hero image (desktop)
- Floating stats cards

### Feature Showcases
- Icon + Heading + Description
- Hover effects
- Consistent spacing
- Icon backgrounds with subtle colors

### Forms
- Labels above inputs
- Icons in input fields
- Clear error states
- Loading states
- Help text below fields

### Data Display
- Cards for grouped information
- Tables for structured data
- Charts for analytics
- Badges for status

## ✅ Accessibility

### Standards
- WCAG 2.1 AA compliant
- Semantic HTML elements
- ARIA labels where needed
- Keyboard navigation support
- Focus indicators

### Color Contrast
- Text on background: 4.5:1 minimum
- Large text: 3:1 minimum
- Interactive elements: Clear hover/focus states

### Screen Readers
- Alt text for all images
- Descriptive link text
- Proper heading hierarchy
- Form labels

## 📊 Performance

### Image Optimization
- WebP format support
- Lazy loading
- Responsive images
- CDN delivery (Unsplash)

### Code Optimization
- Code splitting
- Tree shaking
- Minification
- Gzip compression

## 🎭 Motion & Animation

### Principles
- **Purposeful**: Animations should guide attention
- **Quick**: Under 300ms for interactions
- **Smooth**: Ease-out for entering, ease-in for exiting
- **Subtle**: Don't distract from content

### Animation Usage
```css
/* Fade in on page load */
.animate-fade-in {
  animation: fadeIn 0.5s ease-out;
}

/* Cards entering view */
.card-enter {
  animation: slideIn 0.6s ease-out;
}

/* Floating elements */
.float {
  animation: float 3s ease-in-out infinite;
}
```

## 🔧 Component Usage Examples

### Hero with Image
```tsx
<section className="grid lg:grid-cols-2 gap-12">
  <div>
    <h1>Heading</h1>
    <p>Description</p>
    <Button>CTA</Button>
  </div>
  <div className="relative rounded-2xl overflow-hidden">
    <ImageWithFallback src="..." alt="..." />
    <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20" />
  </div>
</section>
```

### Feature Card
```tsx
<Card className="p-6 hover:shadow-lg transition-all hover:-translate-y-1">
  <div className="bg-blue-100 dark:bg-blue-900/30 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
    <Icon className="w-8 h-8 text-blue-600" />
  </div>
  <h3>Feature Title</h3>
  <p>Feature description</p>
</Card>
```

### Badge
```tsx
<div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full">
  <Sparkles className="w-4 h-4 text-blue-600" />
  <span className="text-blue-700 dark:text-blue-300">Badge Text</span>
</div>
```

## 📝 Content Guidelines

### Headings
- Clear and descriptive
- Action-oriented when possible
- Front-load important words

### Body Copy
- Concise and scannable
- Active voice
- Benefit-focused

### CTAs
- Action verbs
- Clear value proposition
- Contrasting colors

## 🎯 Brand Voice

### Tone
- **Professional** yet **approachable**
- **Educational** yet **inspiring**
- **Technical** yet **accessible**

### Messaging
- Focus on student success
- Emphasize industry connections
- Highlight NEP 2020 compliance
- Showcase real-world experience

## 🌟 Visual Hierarchy

### Priority Levels
1. **Primary**: Hero heading, main CTA
2. **Secondary**: Section headings, secondary CTAs
3. **Tertiary**: Body text, metadata
4. **Quaternary**: Footer, fine print

### Size Relationships
- Hero heading: 2.5x body text
- Section heading: 2x body text
- Subsection heading: 1.5x body text
- Body text: 1x (base)

## 🎨 Glassmorphism

Used for overlays and special elements:
```css
.glass {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
```

## 📱 Mobile-First Approach

All components are designed mobile-first, then enhanced for larger screens:
1. Design for 375px width (iPhone SE)
2. Test on 768px (iPad)
3. Optimize for 1024px+ (desktop)

---

**Design System Version**: 1.0.0
**Last Updated**: October 2, 2025
**Maintained by**: Prashiskshan Design Team