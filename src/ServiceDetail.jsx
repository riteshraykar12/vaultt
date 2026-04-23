import React, { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowLeft, ArrowRight, Code, Activity, Terminal, Hexagon, Zap, Globe, Layers, BarChart3, Cpu, Users, TrendingUp, Shield, Clock, CheckCircle2, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// --- SERVICE DATA ---
const serviceData = {
  'website-development': {
    icon: Code,
    title: 'Website Development',
    tagline: 'Engineered for conversion.',
    heroLine1: 'Architecture is the',
    heroLine2: 'Foundation.',
    description: 'We build scalable digital infrastructure not templates. Every line of code is purposeful, every interaction designed to convert visitors into clients.',
    stats: [
      { value: '99.9%', label: 'Uptime Guarantee' },
      { value: '<1.2s', label: 'Avg. Load Time' },
      { value: '3x', label: 'Conversion Lift' },
      { value: '100%', label: 'Responsive' },
    ],
    process: [
      { step: '01', title: 'Discovery & Wireframing', desc: 'Deep dive into your brand DNA, user personas, and conversion goals. We map every interaction before writing a single line of code.', icon: Layers },
      { step: '02', title: 'UI/UX Design', desc: 'Pixel-perfect mockups with micro-interaction specifications. Every hover state, every transition — pre-visualized.', icon: Sparkles },
      { step: '03', title: 'Development Sprint', desc: 'React, Next.js, or custom stack built with modern frameworks, optimized for Core Web Vitals and SEO from day one.', icon: Code },
      { step: '04', title: 'QA & Launch', desc: 'Cross-browser testing, performance audits, accessibility compliance. Then: deployment to blazing-fast edge infrastructure.', icon: Shield },
    ],
    deliverables: [
      'Custom React / Next.js Application',
      'Mobile First Responsive Design',
      'SEO & Core Web Vitals Optimization',
      'CMS Integration (if needed)',
      'Analytics & Conversion Tracking',
      'SSL, CDN & Edge Deployment',
      '30-Day Post-Launch Support',
      'Performance Monitoring Dashboard',
    ],
    techStack: ['React', 'Next.js', 'Node.js', 'Tailwind CSS', 'Vercel', 'PostgreSQL'],
  },
  'social-media': {
    icon: Activity,
    title: 'Social Media Management',
    tagline: 'Data driven amplification.',
    heroLine1: 'Engagement is the',
    heroLine2: 'Currency.',
    description: 'We don\'t just post we deploy strategic content systems that generate measurable growth, audience loyalty, and brand authority across every platform.',
    stats: [
      { value: '280%', label: 'Avg. Reach Growth' },
      { value: '4.8x', label: 'Engagement Rate' },
      { value: '12 15', label: 'Posts / Month' },
      { value: '24/7', label: 'Monitoring' },
    ],
    process: [
      { step: '01', title: 'Audience Intelligence', desc: 'We analyze your target demographics, competitor strategies, and platform algorithms to build a precision content map.', icon: Users },
      { step: '02', title: 'Content Production', desc: 'Static posts, reels, carousels, stories each asset crafted with platform native best practices and brand consistency.', icon: Sparkles },
      { step: '03', title: 'Strategic Publishing', desc: 'Timed to algorithmic peaks. A/B tested hooks. Hashtag engineering. Every post is a calculated move.', icon: Clock },
      { step: '04', title: 'Analytics & Iteration', desc: 'Monthly performance reports with actionable insights. We double down on what works and pivot from what doesn\'t.', icon: BarChart3 },
    ],
    deliverables: [
      'Monthly Content Calendar',
      '12 15 Posts (Static + Reels)',
      'Carousel & Story Design',
      'Copywriting (Captions + Hooks)',
      'Hashtag & Trend Research',
      'Profile Optimization',
      'Community Management',
      'Monthly Analytics Report',
    ],
    techStack: ['Instagram', 'Facebook', 'LinkedIn', 'X (Twitter)', 'Meta Suite', 'Canva Pro'],
  },
  'content-writing': {
    icon: Terminal,
    title: 'Content Writing',
    tagline: 'Words that convert.',
    heroLine1: 'Narrative is the',
    heroLine2: 'Weapon.',
    description: 'Strategic content that captures attention, builds trust, and moves your audience to action. Every word earns its place.',
    stats: [
      { value: '67%', label: 'More Engagement' },
      { value: '3x', label: 'SEO Traffic Lift' },
      { value: '100%', label: 'Original Content' },
      { value: '<48h', label: 'Turnaround' },
    ],
    process: [
      { step: '01', title: 'Brand Voice Mapping', desc: 'We decode your tone, personality, and audience language to create a voice guide that ensures every piece sounds unmistakably you.', icon: Users },
      { step: '02', title: 'Content Strategy', desc: 'Keyword research, topic clustering, and editorial calendar — engineered for SEO dominance and audience relevance.', icon: TrendingUp },
      { step: '03', title: 'Writing & Editing', desc: 'Long-form blogs, website copy, email sequences, ad copy written by humans, refined through multiple editorial passes.', icon: Terminal },
      { step: '04', title: 'Publish & Measure', desc: 'Strategic scheduling with performance tracking. We measure read time, bounce rate, and conversion to continuously optimize.', icon: BarChart3 },
    ],
    deliverables: [
      'Website Copy & Landing Pages',
      'Blog Posts & Articles (SEO Optimized)',
      'Email Marketing Sequences',
      'Social Media Captions',
      'Ad Copy (Meta, Google)',
      'Brand Voice Guidelines',
      'Content Calendar',
      'Performance Reports',
    ],
    techStack: ['SEMrush', 'Ahrefs', 'Grammarly', 'Google Analytics', 'Notion', 'Hemingway'],
  },
  'ai-automation': {
    icon: Hexagon,
    title: 'AI Automation',
    tagline: 'Eliminate redundancy.',
    heroLine1: 'Intelligence beyond',
    heroLine2: 'Manual.',
    description: 'Agentic AI systems deployed to automate repetitive tasks, streamline operations, and exponentially scale your bandwidth without adding headcount.',
    stats: [
      { value: '80%', label: 'Task Automation' },
      { value: '10x', label: 'Efficiency Gain' },
      { value: '0', label: 'Manual Errors' },
      { value: '∞', label: 'Scalability' },
    ],
    process: [
      { step: '01', title: 'Workflow Audit', desc: 'We map your entire operational workflow to identify bottlenecks, repetitive tasks, and automation opportunities.', icon: Layers },
      { step: '02', title: 'System Design', desc: 'Custom AI agent architecture — integrating LLMs, APIs, and triggers tailored to your specific business logic.', icon: Cpu },
      { step: '03', title: 'Build & Deploy', desc: 'From WhatsApp bots to CRM automations, lead funnels to chatbots built, tested, and deployed to production.', icon: Zap },
      { step: '04', title: 'Monitor & Scale', desc: 'Real-time dashboards, error handling, and continuous optimization. Your systems get smarter over time.', icon: TrendingUp },
    ],
    deliverables: [
      'WhatsApp & Instagram Automation',
      'Website Chatbot Integration',
      'Lead Funnel Automation',
      'CRM Pipeline Setup',
      'Email Sequence Automation',
      'Custom API Integrations',
      'Real Time Analytics Dashboard',
      'Ongoing Maintenance & Support',
    ],
    techStack: ['OpenAI', 'Make.com', 'Zapier', 'Twilio', 'Python', 'n8n'],
  },
};

// --- ANIMATED STAT ---
const AnimatedStat = ({ value, label, index }) => {
  const ref = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(ref.current, {
        scrollTrigger: { trigger: ref.current, start: 'top 85%' },
        y: 30, opacity: 0, duration: 0.8, delay: index * 0.12, ease: 'power3.out',
      });
    }, ref);
    return () => ctx.revert();
  }, [index]);

  return (
    <div ref={ref} className="text-center p-6 bg-surface rounded-[1.5rem] border border-muted/30">
      <div className="text-4xl lg:text-5xl font-sans font-bold text-accent mb-2">{value}</div>
      <div className="font-mono text-xs text-white uppercase tracking-wider">{label}</div>
    </div>
  );
};

// --- PROCESS STEP ---
const ProcessStep = ({ step, title, desc, icon: Icon, index }) => {
  const ref = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(ref.current, {
        scrollTrigger: { trigger: ref.current, start: 'top 85%' },
        y: 40, opacity: 0, duration: 0.9, delay: index * 0.15, ease: 'power3.out',
      });
    }, ref);
    return () => ctx.revert();
  }, [index]);

  return (
    <div ref={ref} className="relative flex gap-6 lg:gap-8 group">
      {/* Timeline connector */}
      <div className="flex flex-col items-center shrink-0">
        <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/30 flex items-center justify-center group-hover:bg-accent/20 group-hover:border-accent/50 transition-all duration-500">
          <Icon size={22} className="text-accent" />
        </div>
        {index < 3 && <div className="w-px flex-1 bg-gradient-to-b from-accent/30 to-transparent mt-3" />}
      </div>
      <div className="pb-12">
        <div className="font-mono text-accent text-xs mb-2 tracking-widest">STEP {step}</div>
        <h3 className="text-xl lg:text-2xl font-sans font-bold text-foreground mb-3">{title}</h3>
        <p className="text-white/80 text-sm lg:text-base leading-relaxed max-w-lg">{desc}</p>
      </div>
    </div>
  );
};

// --- PULSE RING ANIMATION ---
const PulseRings = () => {
  const ref = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.pulse-ring', {
        scale: 2.5, opacity: 0, duration: 2.5, stagger: { each: 0.6, repeat: -1 }, ease: 'power2.out',
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
      {[0, 1, 2].map(i => (
        <div key={i} className="pulse-ring absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-accent/20" />
      ))}
    </div>
  );
};

// --- MAIN PAGE ---
const ServiceDetail = () => {
  const { slug } = useParams();
  const service = serviceData[slug];
  const heroRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    if (!service) return;
    const ctx = gsap.context(() => {
      gsap.from('.svc-hero-anim', {
        y: 50, opacity: 0, duration: 1.1, stagger: 0.12, ease: 'power3.out', delay: 0.15,
      });
      gsap.from('.svc-fade-up', {
        scrollTrigger: { trigger: contentRef.current, start: 'top 80%' },
        y: 30, opacity: 0, duration: 0.9, stagger: 0.1, ease: 'power3.out',
      });
    }, heroRef);
    return () => ctx.revert();
  }, [service]);

  if (!service) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-sans font-bold text-foreground mb-4">Service not found</h1>
          <Link to="/" className="text-accent font-mono text-sm hover:underline">← Back to Home</Link>
        </div>
      </div>
    );
  }

  const ServiceIcon = service.icon;

  return (
    <main ref={heroRef} className="min-h-screen bg-background relative selection:bg-accent selection:text-background overflow-x-hidden">
      {/* --- BACK NAV --- */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-full bg-background/60 backdrop-blur-xl border border-muted/30 flex items-center justify-between w-[90%] max-w-5xl">
        <Link to="/" className="flex items-center gap-2 text-white hover:text-accent transition-colors font-mono text-sm">
          <ArrowLeft size={16} /> <span className="hidden sm:inline">vaultt.</span>
        </Link>
        <span className="font-mono text-xs text-white/60 uppercase tracking-widest">{service.title}</span>
        <Link to="/consultation" className="btn-magnetic bg-accent text-background px-5 py-2 rounded-full text-sm font-medium">
          <span>Get Started</span>
        </Link>
      </nav>

      {/* --- HERO --- */}
      <section className="relative min-h-[85dvh] flex items-end pb-20 lg:pb-28 px-6 lg:px-20 overflow-hidden">
        {/* Grid background */}
        <div className="absolute inset-0 z-0">
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="svc-grid" width="48" height="48" patternUnits="userSpaceOnUse">
                <path d="M 48 0 L 0 0 0 48" fill="none" stroke="rgba(58, 68, 86, 0.3)" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#svc-grid)" />
          </svg>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        </div>

        {/* Floating icon */}
        <div className="absolute top-32 right-12 lg:right-32 opacity-[0.04] pointer-events-none">
          <ServiceIcon size={400} strokeWidth={0.5} />
        </div>

        <PulseRings />

        <div className="relative z-10 max-w-5xl w-full">
          <div className="svc-hero-anim flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center">
              <ServiceIcon size={22} className="text-accent" />
            </div>
            <span className="font-mono text-xs text-accent uppercase tracking-[0.2em]">{service.tagline}</span>
          </div>
          <h1 className="svc-hero-anim text-4xl sm:text-5xl lg:text-7xl font-sans font-bold leading-tight mb-4">
            {service.heroLine1}
            <br />
            <span className="font-drama italic text-6xl sm:text-7xl lg:text-9xl font-light text-accent block mt-2">{service.heroLine2}</span>
          </h1>
          <p className="svc-hero-anim text-base lg:text-lg text-white/80 font-mono max-w-2xl mt-8">{service.description}</p>
        </div>
      </section>

      {/* --- STATS --- */}
      <section className="py-20 px-6 lg:px-20 bg-background relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {service.stats.map((stat, i) => (
              <AnimatedStat key={i} {...stat} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* --- PROCESS --- */}
      <section ref={contentRef} className="py-24 px-6 lg:px-20 bg-[#111317] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dot-grid" width="32" height="32" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="rgba(248,232,79,0.4)" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dot-grid)" />
          </svg>
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="svc-fade-up mb-16">
            <span className="font-mono text-accent text-xs tracking-[0.3em] uppercase block mb-4">Our Process</span>
            <h2 className="text-3xl lg:text-5xl font-sans font-bold text-foreground">
              How we <span className="font-drama italic text-accent font-light">deliver.</span>
            </h2>
          </div>
          <div className="svc-fade-up">
            {service.process.map((p, i) => (
              <ProcessStep key={i} {...p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* --- DELIVERABLES --- */}
      <section className="py-24 px-6 lg:px-20 bg-background relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <span className="font-mono text-accent text-xs tracking-[0.3em] uppercase block mb-4">What You Get</span>
              <h2 className="text-3xl lg:text-4xl font-sans font-bold text-foreground mb-6">
                Deliverables<span className="text-accent">.</span>
              </h2>
              <p className="text-white/70 text-sm lg:text-base leading-relaxed mb-8">
                Every engagement comes with a full suite of deliverables no hidden costs, no ambiguity. Here's exactly what's included.
              </p>

              {/* Tech stack pills */}
              <div className="flex flex-wrap gap-2">
                {service.techStack.map((tech, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent font-mono text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <ul className="space-y-4">
                {service.deliverables.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 group">
                    <CheckCircle2 size={18} className="text-accent shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <span className="text-sm lg:text-base text-white/90 font-mono leading-tight">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="py-28 px-6 bg-surface border-y border-muted/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl lg:text-6xl font-sans font-bold mb-6 text-foreground">
            Ready to build<span className="text-accent">?</span>
          </h2>
          <p className="text-lg text-white/80 font-mono mb-10 max-w-xl mx-auto">
            Let's discuss how {service.title.toLowerCase()} can accelerate your growth.
          </p>
          <Link to="/consultation" className="btn-magnetic bg-accent text-background px-10 py-5 text-lg">
            <span>Book a Consultation</span>
          </Link>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-[#111317] py-12 px-6 text-center">
        <Link to="/" className="font-sans font-bold text-xl text-accent hover:opacity-80 transition-opacity">vaultt.</Link>
        <p className="font-mono text-xs text-white/40 mt-3">© {new Date().getFullYear()} vaultt. All systems operational.</p>
      </footer>
    </main>
  );
};

export default ServiceDetail;
