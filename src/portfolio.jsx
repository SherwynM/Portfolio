import React, { useState, useEffect, useRef } from 'react';

// SVG Icon Components
const Icons = {
  Sun: ({ size = 24, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" />
    </svg>
  ),
  Moon: ({ size = 24, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  ),
  Github: ({ size = 24, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  ),
  Linkedin: ({ size = 24, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" />
    </svg>
  ),
  Mail: ({ size = 24, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  ),
  ExternalLink: ({ size = 24, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M15 3h6v6" /><path d="M10 14 21 3" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </svg>
  ),
  ChevronDown: ({ size = 24, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  ),
  Brain: ({ size = 24, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" /><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" /><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" /><path d="M12 18v-5" />
    </svg>
  ),
  Code: ({ size = 24, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  Database: ({ size = 24, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5V19A9 3 0 0 0 21 19V5" /><path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  ),
  Languages: ({ size = 24, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="m5 8 6 6" /><path d="m4 14 6-6 2-3" /><path d="M2 5h12" /><path d="M7 2h1" /><path d="m22 22-5-10-5 10" /><path d="M14 18h6" />
    </svg>
  ),
  Briefcase: ({ size = 24, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /><rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  ),
  GraduationCap: ({ size = 24, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" /><path d="M22 10v6" /><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
    </svg>
  ),
  Music: ({ size = 24, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" />
    </svg>
  ),
  Award: ({ size = 24, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="8" r="6" /><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  ),
  ArrowRight: ({ size = 24, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
    </svg>
  ),
  ArrowUp: ({ size = 24, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 19V5" /><path d="m5 12 7-7 7 7" />
    </svg>
  ),
  Search: ({ size = 24, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
    </svg>
  ),
  Eye: ({ size = 24, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" />
    </svg>
  ),
  Zap: ({ size = 24, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
    </svg>
  ),
  BookOpen: ({ size = 24, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  ),
  Bike: ({ size = 24, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="18.5" cy="17.5" r="3.5" /><circle cx="5.5" cy="17.5" r="3.5" /><circle cx="15" cy="5" r="1" /><path d="M12 17.5V14l-3-3 4-3 2 3h2" />
    </svg>
  ),
  MessageSquare: ({ size = 24, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  )
};

// Custom hook for intersection observer animations
const useInView = (threshold = 0.1) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isInView];
};

// Animated section wrapper
const AnimatedSection = ({ children, className = '', delay = 0 }) => {
  const [ref, isInView] = useInView(0.1);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className}`}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(40px)',
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
};

// Navigation Component
const Navigation = ({ darkMode, setDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = ['Experience', 'Projects', 'Skills', 'Certifications', 'About', 'Contact'];

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  // Hamburger Icon
  const MenuIcon = ({ isOpen }) => (
    <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {isOpen ? (
        <>
          <path d="M18 6L6 18" />
          <path d="M6 6l12 12" />
        </>
      ) : (
        <>
          <path d="M4 6h16" />
          <path d="M4 12h16" />
          <path d="M4 18h16" />
        </>
      )}
    </svg>
  );

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: scrolled || mobileMenuOpen
          ? (darkMode ? 'rgba(15, 23, 42, 0.95)' : 'rgba(255, 255, 255, 0.95)')
          : 'transparent',
        backdropFilter: scrolled || mobileMenuOpen ? 'blur(12px)' : 'none',
        boxShadow: scrolled
          ? (darkMode ? '0 4px 6px rgba(0, 0, 0, 0.3)' : '0 4px 6px rgba(0, 0, 0, 0.1)')
          : 'none'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" onClick={scrollToTop} className="group flex items-center gap-2 cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg transform group-hover:scale-110 transition-transform duration-300">
              S
            </div>
            <span className="font-semibold hidden sm:block" style={{ color: darkMode ? '#ffffff' : '#0f172a' }}>Sherwyn</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={(e) => scrollToSection(e, link.toLowerCase())}
                className="hover:text-cyan-500 transition-colors duration-300 text-sm font-medium relative group cursor-pointer"
                style={{ color: darkMode ? '#cbd5e1' : '#475569' }}
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-500 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2.5 rounded-xl transition-all duration-300 hover:scale-110 cursor-pointer"
              style={{ backgroundColor: darkMode ? '#1e293b' : '#f1f5f9' }}
              aria-label="Toggle theme"
            >
              {darkMode ? <Icons.Sun size={18} className="text-amber-400" /> : <Icons.Moon size={18} className="text-slate-600" />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-xl transition-all duration-300 cursor-pointer"
              style={{ 
                backgroundColor: darkMode ? '#1e293b' : '#f1f5f9', 
                color: darkMode ? '#ffffff' : '#0f172a' 
              }}
              aria-label="Toggle menu"
            >
              <MenuIcon isOpen={mobileMenuOpen} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out`}
        style={{
          maxHeight: mobileMenuOpen ? '400px' : '0',
          opacity: mobileMenuOpen ? 1 : 0,
          backgroundColor: darkMode ? 'rgba(15, 23, 42, 0.98)' : 'rgba(255, 255, 255, 0.98)'
        }}
      >
        <div className="px-4 py-4 space-y-1">
          {navLinks.map((link, index) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={(e) => scrollToSection(e, link.toLowerCase())}
              className="block py-3 px-4 rounded-xl text-base font-medium transition-all duration-300 hover:bg-cyan-500/10 hover:text-cyan-500"
              style={{ 
                color: darkMode ? '#cbd5e1' : '#475569',
                transitionDelay: `${index * 50}ms`
              }}
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

// Hero Section
const HeroSection = ({ darkMode }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-1/4 -left-32 w-96 h-96 rounded-full blur-3xl"
          style={{
            backgroundColor: darkMode ? 'rgba(6, 182, 212, 0.1)' : 'rgba(6, 182, 212, 0.2)',
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
          }}
        />
        <div
          className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full blur-3xl"
          style={{
            backgroundColor: darkMode ? 'rgba(59, 130, 246, 0.1)' : 'rgba(59, 130, 246, 0.2)',
            transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6 sm:space-y-8">


            {/* Main headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight" style={{ color: darkMode ? '#ffffff' : '#0f172a' }}>
              I build ML systems that{' '}
              <span className="relative">
                <span className="relative z-10 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                  understand
                </span>
                <span className="absolute bottom-1 sm:bottom-2 left-0 w-full h-2 sm:h-3 -z-0 skew-x-3" style={{ backgroundColor: darkMode ? 'rgba(34, 211, 238, 0.2)' : 'rgba(6, 182, 212, 0.2)' }} />
              </span>{' '}
              human language
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl leading-relaxed max-w-xl" style={{ color: darkMode ? '#cbd5e1' : '#475569' }}>
              Data Scientist specializing in <span className="font-medium" style={{ color: darkMode ? '#22d3ee' : '#0891b2' }}>NLP & Search Relevance</span>.
              I've processed <span className="font-semibold" style={{ color: darkMode ? '#ffffff' : '#0f172a' }}>10,000+ queries</span> for Apple's
              ecosystem and built production ML models that solve real problems.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 sm:gap-4 pt-4">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer text-sm sm:text-base"
                style={{
                  backgroundColor: darkMode ? '#ffffff' : '#0f172a',
                  color: darkMode ? '#0f172a' : '#ffffff'
                }}
              >
                View Projects
                <Icons.ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 border-2 rounded-xl sm:rounded-2xl font-semibold hover:border-cyan-500 transition-all duration-300 cursor-pointer text-sm sm:text-base"
                style={{
                  borderColor: darkMode ? '#334155' : '#e2e8f0',
                  color: darkMode ? '#ffffff' : '#0f172a'
                }}
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Visual element */}
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square">
              {/* Floating cards */}
              <div className="absolute top-10 left-10 p-4 rounded-2xl shadow-xl animate-float" style={{ backgroundColor: darkMode ? '#1e293b' : '#ffffff' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                    <Icons.Brain size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-medium" style={{ color: darkMode ? '#ffffff' : '#0f172a' }}>NLP Models</div>
                    <div className="text-xs" style={{ color: darkMode ? '#64748b' : '#64748b' }}>DistilBERT, NLTK</div>
                  </div>
                </div>
              </div>

              <div className="absolute top-32 right-0 p-4 rounded-2xl shadow-xl animate-float-delayed" style={{ backgroundColor: darkMode ? '#1e293b' : '#ffffff' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                    <Icons.Search size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-medium" style={{ color: darkMode ? '#ffffff' : '#0f172a' }}>Search Relevance</div>
                    <div className="text-xs" style={{ color: darkMode ? '#64748b' : '#64748b' }}>Apple Ecosystem</div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-32 left-0 p-4 rounded-2xl shadow-xl animate-float-slow" style={{ backgroundColor: darkMode ? '#1e293b' : '#ffffff' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    <Icons.Eye size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-medium" style={{ color: darkMode ? '#ffffff' : '#0f172a' }}>Computer Vision</div>
                    <div className="text-xs" style={{ color: darkMode ? '#64748b' : '#64748b' }}>YOLO, OpenCV</div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-10 right-10 p-4 rounded-2xl shadow-xl animate-float-delayed" style={{ backgroundColor: darkMode ? '#1e293b' : '#ffffff' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                    <Icons.Zap size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-medium" style={{ color: darkMode ? '#ffffff' : '#0f172a' }}>ML Pipeline</div>
                    <div className="text-xs" style={{ color: darkMode ? '#64748b' : '#64748b' }}>Scikit-learn</div>
                  </div>
                </div>
              </div>

              {/* Center element */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full backdrop-blur-sm border border-cyan-500/30 flex items-center justify-center" style={{ background: darkMode ? 'linear-gradient(to bottom right, rgba(6, 182, 212, 0.1), rgba(59, 130, 246, 0.1))' : 'linear-gradient(to bottom right, rgba(6, 182, 212, 0.2), rgba(59, 130, 246, 0.2))' }}>
                <div className="text-6xl font-bold bg-gradient-to-br from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                  DS
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 5s ease-in-out infinite 0.5s; }
        .animate-float-slow { animation: float-slow 7s ease-in-out infinite 1s; }
      `}</style>
    </section>
  );
};

// Experience Section
const ExperienceSection = ({ darkMode }) => {
  const experiences = [
    {
      company: 'SEEK Research Solutions',
      role: 'Research Analyst Intern',
      period: 'Recent',
      logo: '🍎',
      color: 'from-slate-700 to-slate-900',
      client: 'Apple Inc.',
      highlights: [
        'Processed 10,000+ search queries for Apple\'s ecosystem including Siri, Apple Music, and App Store',
        'Implemented query classification to improve search result accuracy across multilingual inputs',
        'Developed spelling correction algorithms handling diverse query patterns',
        'Rated content relevance ensuring high-quality user experiences at scale'
      ],
      skills: ['NLP', 'Search Relevance', 'Query Classification', 'Multilingual Processing']
    },
    {
      company: 'Open Weaver',
      role: 'Data Science Intern',
      period: '2023',
      logo: '🔬',
      color: 'from-emerald-500 to-teal-600',
      highlights: [
        'Built cancer detection ML model using medical imaging data with high accuracy',
        'Developed fake news detection system using NLP classification techniques',
        'Created object recognition pipeline using computer vision algorithms',
        'Deployed models for real-world inference and evaluation'
      ],
      skills: ['Machine Learning', 'Computer Vision', 'Classification', 'Model Deployment']
    },
    {
      company: 'Noam Academy',
      role: 'AI Intern',
      period: '2022',
      logo: '🤖',
      color: 'from-purple-500 to-pink-600',
      highlights: [
        'Architected and built an English → German translation chatbot',
        'Implemented neural machine translation pipeline for real-time inference',
        'Optimized model performance for conversational UX'
      ],
      skills: ['NLP', 'Machine Translation', 'Chatbot Development', 'Neural Networks']
    }
  ];

  return (
    <section id="experience" className="py-20 sm:py-32" style={{ backgroundColor: darkMode ? 'rgba(15, 23, 42, 0.5)' : 'rgba(248, 250, 252, 0.5)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <div className="text-center mb-12 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-600 text-sm font-medium mb-6">
              <Icons.Briefcase size={16} />
              Work Experience
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" style={{ color: darkMode ? '#ffffff' : '#0f172a' }}>
              Where I've Made Impact
            </h2>
            <p className="text-base sm:text-lg max-w-2xl mx-auto" style={{ color: darkMode ? '#cbd5e1' : '#475569' }}>
              Real industry experience working on production systems at scale
            </p>
          </div>
        </AnimatedSection>

        <div className="space-y-6 sm:space-y-8">
          {experiences.map((exp, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <div
                className="group relative rounded-2xl sm:rounded-3xl p-6 sm:p-8 border hover:border-cyan-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10"
                style={{
                  backgroundColor: darkMode ? 'rgba(30, 41, 59, 0.5)' : '#ffffff',
                  borderColor: darkMode ? '#334155' : '#e2e8f0'
                }}
              >
                <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${exp.color} rounded-l-2xl sm:rounded-l-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
                  <div className="lg:w-1/3 space-y-3 sm:space-y-4">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br ${exp.color} flex items-center justify-center text-xl sm:text-2xl shadow-lg`}>
                        {exp.logo}
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold" style={{ color: darkMode ? '#ffffff' : '#0f172a' }}>{exp.company}</h3>
                        <p className="text-cyan-600 font-medium text-sm sm:text-base">{exp.role}</p>
                      </div>
                    </div>
                    <div className="text-sm" style={{ color: darkMode ? '#94a3b8' : '#64748b' }}>{exp.period}</div>
                    {exp.client && (
                      <div
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium"
                        style={{
                          backgroundColor: darkMode ? '#334155' : '#f1f5f9',
                          color: darkMode ? '#cbd5e1' : '#475569'
                        }}
                      >
                        Client: {exp.client}
                      </div>
                    )}
                  </div>

                  <div className="lg:w-2/3 space-y-4 sm:space-y-6">
                    <ul className="space-y-2 sm:space-y-3">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="flex gap-3 text-sm sm:text-base" style={{ color: darkMode ? '#cbd5e1' : '#475569' }}>
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 sm:mt-2.5 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm"
                          style={{
                            backgroundColor: darkMode ? '#334155' : '#f1f5f9',
                            color: darkMode ? '#cbd5e1' : '#475569'
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

// Projects Section
const ProjectsSection = ({ darkMode }) => {
  const projects = [
    {
      title: 'Real-Time Drowsiness Detection',
      icon: <Icons.Eye size={24} />,
      color: 'from-rose-500 to-pink-600',
      problem: 'Driver fatigue causes thousands of accidents yearly. Traditional monitoring systems lack real-time capability.',
      approach: 'Built a computer vision pipeline using YOLO for face detection and OpenCV for eye-tracking with frame-by-frame analysis.',
      result: 'Real-time alert system that detects drowsiness and triggers audio/visual warnings before accidents occur.',
      tech: ['YOLO', 'OpenCV', 'Python', 'Computer Vision', 'Real-time Processing'],
      github: '#',
      featured: true
    },
    {
      title: 'News Categorization Engine',
      icon: <Icons.BookOpen size={24} />,
      color: 'from-cyan-500 to-blue-600',
      problem: 'Information overload makes it hard to filter relevant news. Manual categorization doesn\'t scale.',
      approach: 'Fine-tuned DistilBERT for multi-class classification. Built automated RSS pipeline with MySQL storage.',
      result: 'Automated categorization system processing news feeds with high accuracy, enabling efficient content discovery.',
      tech: ['DistilBERT', 'NLP', 'RSS', 'MySQL', 'Python', 'Transformers'],
      github: '#',
      featured: true
    },
    {
      title: 'Bike Rental Demand Prediction',
      icon: <Icons.Bike size={24} />,
      color: 'from-emerald-500 to-teal-600',
      problem: 'Bike-sharing services struggle with inventory allocation due to unpredictable demand patterns.',
      approach: 'Engineered features from weather, time, and seasonal data. Built stacking ensemble combining multiple regressors.',
      result: 'Achieved R² = 0.885, enabling accurate demand forecasting for optimal bike distribution.',
      tech: ['Scikit-learn', 'Stacking Ensemble', 'Feature Engineering', 'Regression', 'Python'],
      github: '#'
    },
    {
      title: 'Book Recommendation System',
      icon: <Icons.MessageSquare size={24} />,
      color: 'from-purple-500 to-violet-600',
      problem: 'Readers face choice paralysis with millions of available books. Generic recommendations miss personal preferences.',
      approach: 'Implemented collaborative filtering and content-based algorithms. Built Flask web interface for real-time recommendations.',
      result: 'Personalized recommendation engine deployed as interactive web application.',
      tech: ['Flask', 'Collaborative Filtering', 'Python', 'ML', 'Web App'],
      github: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <div className="text-center mb-12 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-600 text-sm font-medium mb-6">
              <Icons.Code size={16} />
              Featured Work
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" style={{ color: darkMode ? '#ffffff' : '#0f172a' }}>
              Projects That Solve Problems
            </h2>
            <p className="text-base sm:text-lg max-w-2xl mx-auto" style={{ color: darkMode ? '#cbd5e1' : '#475569' }}>
              End-to-end ML solutions from problem definition to deployment
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <div
                className="group relative h-full rounded-2xl sm:rounded-3xl border overflow-hidden hover:border-transparent transition-all duration-500 hover:shadow-2xl"
                style={{
                  backgroundColor: darkMode ? 'rgba(30, 41, 59, 0.5)' : '#ffffff',
                  borderColor: darkMode ? '#334155' : '#e2e8f0'
                }}
              >
                <div className={`h-1 w-full bg-gradient-to-r ${project.color}`} />

                <div className="p-5 sm:p-8 space-y-4 sm:space-y-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center text-white shadow-lg`}>
                        {project.icon}
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold group-hover:text-cyan-500 transition-colors duration-300" style={{ color: darkMode ? '#ffffff' : '#0f172a' }}>
                          {project.title}
                        </h3>
                        {project.featured && (
                          <span className="text-xs text-cyan-600 font-medium">Featured</span>
                        )}
                      </div>
                    </div>
                    <a
                      href={project.github}
                      onClick={(e) => {
                        if (project.github !== '#') {
                          e.preventDefault();
                          window.open(project.github, '_blank', 'noopener,noreferrer');
                        }
                      }}
                      className="p-2 rounded-xl hover:bg-cyan-500 hover:text-white transition-all duration-300 cursor-pointer"
                      style={{
                        backgroundColor: darkMode ? '#334155' : '#f1f5f9',
                        color: darkMode ? '#cbd5e1' : '#475569'
                      }}
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Icons.Github size={18} />
                    </a>
                  </div>

                  <div className="space-y-3 sm:space-y-4">
                    <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl" style={{ backgroundColor: darkMode ? 'rgba(244, 63, 94, 0.1)' : '#fff1f2', border: `1px solid ${darkMode ? 'rgba(244, 63, 94, 0.2)' : '#fecdd3'}` }}>
                      <div className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: darkMode ? '#fb7185' : '#e11d48' }}>Problem</div>
                      <p className="text-xs sm:text-sm" style={{ color: darkMode ? '#cbd5e1' : '#475569' }}>{project.problem}</p>
                    </div>

                    <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl" style={{ backgroundColor: darkMode ? 'rgba(6, 182, 212, 0.1)' : '#ecfeff', border: `1px solid ${darkMode ? 'rgba(6, 182, 212, 0.2)' : '#a5f3fc'}` }}>
                      <div className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: darkMode ? '#22d3ee' : '#0891b2' }}>Approach</div>
                      <p className="text-xs sm:text-sm" style={{ color: darkMode ? '#cbd5e1' : '#475569' }}>{project.approach}</p>
                    </div>

                    <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl" style={{ backgroundColor: darkMode ? 'rgba(16, 185, 129, 0.1)' : '#ecfdf5', border: `1px solid ${darkMode ? 'rgba(16, 185, 129, 0.2)' : '#a7f3d0'}` }}>
                      <div className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: darkMode ? '#34d399' : '#059669' }}>Result</div>
                      <p className="text-xs sm:text-sm" style={{ color: darkMode ? '#cbd5e1' : '#475569' }}>{project.result}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg text-xs font-medium"
                        style={{
                          backgroundColor: darkMode ? '#334155' : '#f1f5f9',
                          color: darkMode ? '#cbd5e1' : '#475569'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

       
      </div>
    </section>
  );
};

// Skills Section
const SkillsSection = ({ darkMode }) => {
  const skillCategories = [
    {
      title: 'Machine Learning',
      icon: <Icons.Brain size={24} />,
      color: 'from-purple-500 to-pink-500',
      skills: ['Supervised Learning', 'Classification', 'Regression', 'Ensemble Methods', 'Model Evaluation', 'Feature Engineering']
    },
    {
      title: 'NLP & Text',
      icon: <Icons.Languages size={24} />,
      color: 'from-cyan-500 to-blue-500',
      skills: ['DistilBERT', 'NLTK', 'Text Classification', 'Query Processing', 'Sentiment Analysis', 'Tokenization']
    },
    {
      title: 'Computer Vision',
      icon: <Icons.Eye size={24} />,
      color: 'from-emerald-500 to-teal-500',
      skills: ['YOLO', 'OpenCV', 'Object Detection', 'Image Processing', 'Real-time Analysis', 'Face Detection']
    },
    {
      title: 'Tools & Frameworks',
      icon: <Icons.Code size={24} />,
      color: 'from-orange-500 to-red-500',
      skills: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Flask', 'MySQL']
    },
    {
      title: 'Languages',
      icon: <Icons.Database size={24} />,
      color: 'from-slate-600 to-slate-800',
      skills: ['Python', 'SQL', 'Java', 'JavaScript']
    }
  ];

  return (
    <section id="skills" className="py-20 sm:py-32" style={{ backgroundColor: darkMode ? 'rgba(15, 23, 42, 0.5)' : 'rgba(248, 250, 252, 0.5)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <div className="text-center mb-12 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-600 text-sm font-medium mb-6">
              <Icons.Zap size={16} />
              Technical Arsenal
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" style={{ color: darkMode ? '#ffffff' : '#0f172a' }}>
              Skills & Technologies
            </h2>
            <p className="text-base sm:text-lg max-w-2xl mx-auto" style={{ color: darkMode ? '#cbd5e1' : '#475569' }}>
              Tools I use to turn data into intelligent solutions
            </p>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {skillCategories.map((category, index) => (
            <AnimatedSection key={index} delay={index * 80}>
              <div
                className="group relative rounded-2xl sm:rounded-3xl p-5 sm:p-6 border hover:border-cyan-500/50 transition-all duration-500 hover:shadow-xl"
                style={{
                  backgroundColor: darkMode ? 'rgba(30, 41, 59, 0.5)' : '#ffffff',
                  borderColor: darkMode ? '#334155' : '#e2e8f0'
                }}
              >
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold" style={{ color: darkMode ? '#ffffff' : '#0f172a' }}>{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg text-xs sm:text-sm hover:bg-cyan-500/20 transition-colors duration-300 cursor-default"
                      style={{
                        backgroundColor: darkMode ? 'rgba(51, 65, 85, 0.7)' : '#f1f5f9',
                        color: darkMode ? '#cbd5e1' : '#475569'
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

// Certifications Section
const CertificationsSection = ({ darkMode }) => {
  const certifications = [
    {
      title: 'Data Analytics and Visualization Job Simulation',
      issuer: 'Accenture North America',
      icon: '📊',
      color: 'from-purple-500 to-indigo-600',
      href: 'https://www.theforage.com/completion-certificates/Accenture%20North%20America/hzmoNKtzvAzXsEqx8_Accenture%20North%20America_NkSjMXZHdXF9CTXFA_1715701659614_completion_certificate.pdf',
      description: 'Completed job simulation focusing on advising a hypothetical social media client as a Data Analyst.'
    },
    {
      title: 'On The Ground Marketing Job Simulation',
      issuer: 'Red Bull',
      icon: '🚀',
      color: 'from-red-500 to-orange-500',
      href: 'https://www.theforage.com/completion-certificates/Red%20Bull/s6RNpxzBkpREvE4xk_Red%20Bull_NkSjMXZHdXF9CTXFA_1715701663518_completion_certificate.pdf',
      description: 'Completed job simulation involving marketing strategy and consumer engagement analysis.'
    }
  ];

  return (
    <section id="certifications" className="py-20 sm:py-32" style={{ backgroundColor: darkMode ? 'rgba(15, 23, 42, 0.5)' : 'rgba(248, 250, 252, 0.5)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <div className="text-center mb-12 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-600 text-sm font-medium mb-6">
              <Icons.Award size={16} />
              Certifications
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" style={{ color: darkMode ? '#ffffff' : '#0f172a' }}>
              Professional Credentials
            </h2>
            <p className="text-base sm:text-lg max-w-2xl mx-auto" style={{ color: darkMode ? '#cbd5e1' : '#475569' }}>
              Industry-recognized certifications validating practical skills
            </p>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {certifications.map((cert, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <a
                href={cert.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full rounded-2xl sm:rounded-3xl p-6 sm:p-8 border transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-1"
                style={{
                  backgroundColor: darkMode ? 'rgba(30, 41, 59, 0.5)' : '#ffffff',
                  borderColor: darkMode ? '#334155' : '#e2e8f0'
                }}
              >
                <div className="flex items-start gap-4 sm:gap-6">
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${cert.color} flex items-center justify-center text-2xl sm:text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {cert.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-cyan-500 transition-colors duration-300" style={{ color: darkMode ? '#ffffff' : '#0f172a' }}>
                      {cert.title}
                    </h3>
                    <p className="text-cyan-600 font-medium text-sm sm:text-base mb-3">
                      {cert.issuer}
                    </p>
                    <p className="text-sm sm:text-base" style={{ color: darkMode ? '#94a3b8' : '#64748b' }}>
                      {cert.description}
                    </p>
                    <div className="mt-4 inline-flex items-center gap-2 text-cyan-600 text-sm font-medium group-hover:gap-3 transition-all duration-300">
                      View Certificate
                      <Icons.ExternalLink size={16} />
                    </div>
                  </div>
                </div>
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

// About Section
const AboutSection = ({ darkMode }) => {
  return (
    <section id="about" className="py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <AnimatedSection>
            <div className="relative">
              <div className="relative max-w-[200px] sm:max-w-[240px] mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl" />
                <div className="relative rounded-xl shadow-xl shadow-cyan-500/10 overflow-hidden p-5 sm:p-6" style={{ backgroundColor: darkMode ? '#1e293b' : '#ffffff' }}>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white text-2xl sm:text-3xl font-bold mb-3 shadow-lg">
                      S
                    </div>
                    <h3 className="text-base sm:text-lg font-bold mb-1" style={{ color: darkMode ? '#ffffff' : '#0f172a' }}>Sherwyn T.D. Misquitta</h3>
                    <p className="text-cyan-600 font-medium text-sm">Data Scientist</p>
                  </div>
                </div>

                <div className="absolute -top-2 -right-2 p-2 rounded-xl shadow-lg animate-float" style={{ backgroundColor: darkMode ? '#1e293b' : '#ffffff' }}>
                  <Icons.Music size={16} className="text-purple-500" />
                </div>
                <div className="absolute -bottom-2 -left-2 p-2 rounded-xl shadow-lg animate-float-delayed" style={{ backgroundColor: darkMode ? '#1e293b' : '#ffffff' }}>
                  <Icons.Award size={16} className="text-amber-500" />
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="space-y-6 sm:space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-600 text-sm font-medium mb-6">
                  <Icons.GraduationCap size={16} />
                  About Me
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" style={{ color: darkMode ? '#ffffff' : '#0f172a' }}>
                  Beyond the Code
                </h2>
              </div>

              <div className="space-y-4 sm:space-y-6 text-base sm:text-lg leading-relaxed" style={{ color: darkMode ? '#cbd5e1' : '#475569' }}>
           

                <p>
                  Outside of data, you'll find me exploring music production or leading teams —
                  experiences that taught me collaboration and creative problem-solving translate
                  directly to better technical work.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 sm:gap-4 pt-4">
                <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 rounded-xl" style={{ backgroundColor: darkMode ? 'rgba(168, 85, 247, 0.2)' : 'rgba(243, 232, 255, 1)', color: darkMode ? '#c4b5fd' : '#7c3aed' }}>
                  <Icons.Music size={18} />
                  <span className="text-sm font-medium">Music Enthusiast</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 rounded-xl" style={{ backgroundColor: darkMode ? 'rgba(245, 158, 11, 0.2)' : 'rgba(254, 243, 199, 1)', color: darkMode ? '#fcd34d' : '#b45309' }}>
                  <Icons.Award size={18} />
                  <span className="text-sm font-medium">Team Leader</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(-5deg); }
        }
        .animate-float { animation: float 4s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 5s ease-in-out infinite 0.5s; }
      `}</style>
    </section>
  );
};

// Contact Section
const ContactSection = ({ darkMode }) => {
  const contacts = [
    
    {
      icon: <Icons.Linkedin size={24} />,
      label: 'LinkedIn',
      value: 'Connect on LinkedIn',
      href: 'https://linkedin.com/in/sherwynmisquitta',
      color: 'from-blue-500 to-cyan-500',
      isExternal: true
    },
    {
      icon: <Icons.Github size={24} />,
      label: 'GitHub',
      value: 'View my repositories',
      href: 'https://github.com/sherwynmisquitta',
      color: 'from-slate-700 to-slate-900',
      isExternal: true
    },
    {
      icon: <Icons.Code size={24} />,
      label: 'Kaggle',
      value: 'See my notebooks',
      href: 'https://www.kaggle.com/sherwynmisquitta',
      color: 'from-cyan-500 to-teal-500',
      isExternal: true
    }
  ];

  const handleClick = (e, contact) => {
    if (contact.isExternal) {
      e.preventDefault();
      window.open(contact.href, '_blank', 'noopener,noreferrer');
    }
    // For mailto: links, let the browser handle it naturally (no preventDefault)
  };

  return (
    <section id="contact" className="py-20 sm:py-32" style={{ backgroundColor: darkMode ? 'rgba(15, 23, 42, 0.5)' : 'rgba(248, 250, 252, 0.5)' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-600 text-sm font-medium mb-6">
              <Icons.Mail size={16} />
              Get in Touch
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" style={{ color: darkMode ? '#ffffff' : '#0f172a' }}>
              Let's Build Something
            </h2>
            <p className="text-base sm:text-lg max-w-xl mx-auto" style={{ color: darkMode ? '#cbd5e1' : '#475569' }}>
              Open to Data Science roles, ML engineering positions, and interesting collaborations.
              Let's talk about how I can add value to your team.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {contacts.map((contact, index) => (
              <a
                key={index}
                href={contact.href}
                onClick={(e) => handleClick(e, contact)}
                className="group relative rounded-2xl sm:rounded-3xl p-5 sm:p-6 border hover:border-transparent transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-1 text-center cursor-pointer"
                style={{
                  backgroundColor: darkMode ? 'rgba(30, 41, 59, 0.5)' : '#ffffff',
                  borderColor: darkMode ? '#334155' : '#e2e8f0'
                }}
              >
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br ${contact.color} flex items-center justify-center text-white shadow-lg mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {contact.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold mb-1" style={{ color: darkMode ? '#ffffff' : '#0f172a' }}>{contact.label}</h3>
                <p className="text-sm break-all" style={{ color: darkMode ? '#94a3b8' : '#64748b' }}>{contact.value}</p>
              </a>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

// Footer
const Footer = ({ darkMode }) => {
  return (
    <footer className="py-12" style={{ borderTop: `1px solid ${darkMode ? '#1e293b' : '#e2e8f0'}` }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold">
            S
          </div>
          <span style={{ color: darkMode ? '#94a3b8' : '#475569' }}>
            © 2026 Sherwyn T.D. Misquitta
          </span>
        </div>
      </div>
    </footer>
  );
};

// Back to Top Button
const BackToTop = ({ darkMode }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 500);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 cursor-pointer ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
      style={{
        backgroundColor: darkMode ? '#1e293b' : '#ffffff',
        border: `1px solid ${darkMode ? '#334155' : '#e2e8f0'}`,
        color: darkMode ? '#22d3ee' : '#0891b2'
      }}
      aria-label="Back to top"
    >
      <Icons.ArrowUp size={20} />
    </button>
  );
};

// Main App Component
export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDark);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div
        className="min-h-screen transition-colors duration-500"
        style={{
          backgroundColor: darkMode ? '#020617' : '#ffffff',
          color: darkMode ? '#ffffff' : '#0f172a'
        }}
      >
        <Navigation darkMode={darkMode} setDarkMode={setDarkMode} />
        <HeroSection darkMode={darkMode} />
        <ExperienceSection darkMode={darkMode} />
        <ProjectsSection darkMode={darkMode} />
        <SkillsSection darkMode={darkMode} />
        <CertificationsSection darkMode={darkMode} />
        <AboutSection darkMode={darkMode} />
        <ContactSection darkMode={darkMode} />
        <Footer darkMode={darkMode} />
        <BackToTop darkMode={darkMode} />
      </div>
    </div>
  );
}