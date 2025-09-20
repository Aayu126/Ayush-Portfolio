# 🚀 Ayush Vijay Chavan - Portfolio Website

> A modern, responsive portfolio website showcasing my frontend development skills and projects.

[![React](https://img.shields.io/badge/React-18.3.1-blue?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-5.4.19-646CFF?logo=vite)](https://vitejs.dev/)

## 👋 About

Welcome to my personal portfolio website! I'm Ayush Vijay Chavan, a passionate Frontend Developer and UI/UX Designer from Mumbai, Maharashtra, India. This portfolio showcases my skills, projects, and experience in modern web development.

### 🎯 Key Features

- **Modern Design**: Clean, professional, and responsive design
- **Interactive UI**: Smooth animations and transitions
- **Contact Form**: Integrated EmailJS for direct communication with auto-reply functionality
- **Project Showcase**: Detailed project presentations with technologies and features
- **Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Fast Performance**: Built with Vite for optimal loading speeds
- **Accessibility**: Following web accessibility standards

## 🛠️ Tech Stack

### Frontend
- **React** 18.3.1 - UI library for building user interfaces
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and development server
- **React Router DOM** - Client-side routing

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful and accessible UI components
- **Radix UI** - Low-level UI primitives
- **Lucide React** - Beautiful & consistent icons
- **Custom CSS Variables** - Consistent theming system

### Additional Libraries
- **EmailJS** - Contact form email functionality
- **React Hook Form** - Form handling and validation
- **TanStack Query** - Data fetching and caching
- **Framer Motion** - Smooth animations (via Tailwind)
- **Class Variance Authority** - Component styling variants

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/              # Reusable UI components (shadcn/ui)
│   ├── About.tsx        # About section
│   ├── Contact.tsx      # Contact form with EmailJS
│   ├── Footer.tsx       # Footer section
│   ├── Hero.tsx         # Hero/Landing section
│   ├── Navigation.tsx   # Navigation bar
│   ├── Projects.tsx     # Projects showcase
│   ├── Services.tsx     # Services offered
│   └── Skills.tsx       # Technical skills
├── pages/
│   ├── Index.tsx        # Main portfolio page
│   └── NotFound.tsx     # 404 page
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
└── assets/              # Static assets
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Aayu126/Ayush-Portfolio.git
   cd Ayush-Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Build for development
npm run build:dev

# Preview production build
npm run preview

# Lint code
npm run lint
```

## ✨ Features & Sections

### 🏠 Hero Section
- Professional introduction with profile picture
- Call-to-action buttons
- Social media links (GitHub, LinkedIn, Email)
- Smooth scroll navigation

### 👨‍💻 About Section
- Personal introduction and background
- Professional experience highlights
- Career journey and aspirations

### 🛠️ Skills Section
- Technical skills categorized by expertise
- Frontend technologies and frameworks
- Design tools and methodologies

### 💼 Projects Section
- **Hotel & Restaurant Management System**
  - Comprehensive booking and menu management
  - Technologies: HTML5, CSS3, JavaScript, React
  - Status: Completed

- **EduMind - Course Platform**
  - Online learning platform concept
  - Technologies: React, Tailwind CSS, Figma
  - Status: In Development

### 🎯 Services Section
- Frontend Development
- UI/UX Design
- Responsive Web Design
- Performance Optimization

### 📧 Contact Section
- Interactive contact form with validation
- EmailJS integration for direct messaging
- Auto-reply functionality
- Contact information and social links

## 📧 Email Configuration

The contact form uses EmailJS for email functionality. To set up:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Set up your email service
3. Create email templates:
   - Main template: `template_2pc1gkb`
   - Auto-reply template: `template_auto_reply`
4. Update the configuration in `Contact.tsx`

For detailed setup instructions, see `EMAIL_SETUP_GUIDE.md`

## 🎨 Design System

### Color Palette
- **Primary Orange**: `#FF6B35` (portfolio-orange)
- **Primary Blue**: `#4A90E2` (portfolio-blue)  
- **Primary Purple**: `#8B5A9F` (portfolio-purple)
- **Gray Scale**: Various shades for text and backgrounds

### Typography
- Clean, modern font stack
- Responsive typography scaling
- Proper contrast ratios for accessibility

### Components
- Consistent spacing and sizing
- Hover effects and transitions
- Responsive design patterns

## 📱 Responsive Design

- **Mobile First**: Designed for mobile devices first
- **Breakpoints**: 
  - Mobile: `< 640px`
  - Tablet: `640px - 1024px`
  - Desktop: `> 1024px`
- **Touch Friendly**: Optimized for touch interactions

## 🔧 Development

### Code Style
- **ESLint** for code linting
- **TypeScript** for type safety
- **Prettier** compatible formatting
- Consistent component structure

### Best Practices
- Component-based architecture
- Custom hooks for reusable logic
- Proper error handling
- Accessibility considerations
- Performance optimization

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deployment Options
- **Vercel** (Recommended)
- **Netlify**
- **GitHub Pages**
- **Any static hosting service**

### Environment Variables
No environment variables required for basic functionality.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Contact

**Ayush Vijay Chavan**
- **Email**: [ayushchavan1980@gmail.com](mailto:ayushchavan1980@gmail.com)
- **LinkedIn**: [ayush-chavan-b2557335b](https://linkedin.com/in/ayush-chavan-b2557335b)
- **GitHub**: [Aayu126](https://github.com/Aayu126)
- **Location**: Mumbai, Maharashtra, India
- **Phone**: +91 8421663088

## 🤝 Contributing

While this is a personal portfolio, suggestions and feedback are always welcome!

1. Fork the project
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📝 Changelog

### Version 1.0.0
- Initial portfolio release
- Complete responsive design
- EmailJS contact form integration
- Project showcase implementation
- Modern UI/UX design

---

<div align="center">
  <p>Built with ❤️ by <strong>Ayush Vijay Chavan</strong></p>
  <p>⭐ Star this repo if you found it helpful!</p>
</div>
