import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Check, CheckCircle2, ChevronRight, Activity, Terminal, Calendar, Code, Hexagon, Menu, X, Plus, Minus, ChevronDown } from 'lucide-react';
import ConsultationForm from './ConsultationForm';
import PrivacyPolicy from './Legal';
import ServiceTerms from './ServiceTerms';
import ComingSoon from './ComingSoon';
import ServiceDetail from './ServiceDetail';
import FoundersStory from './FoundersStory';

gsap.registerPlugin(ScrollTrigger);

// --- NAVBAR ---
const Navbar = () => {
  const navRef = useRef(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        start: 'top -100',
        end: 99999,
        toggleClass: { className: 'scrolled', targets: navRef.current },
        onUpdate: (self) => {
          if (self.isActive) {
            gsap.to(navRef.current, { backgroundColor: 'rgba(28, 31, 38, 0.05)', borderColor: 'rgba(58, 68, 86, 0.3)', backdropFilter: 'blur(16px)', duration: 0.3 });
          } else {
            gsap.to(navRef.current, { backgroundColor: 'transparent', borderColor: 'transparent', backdropFilter: 'blur(0px)', duration: 0.3 });
          }
        }
      });
    }, navRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <nav ref={navRef} className="fixed top-6 left-1/2 -translate-x-1/2 z-50 px-8 py-4 rounded-full border border-transparent transition-all flex items-center justify-between w-[90%] max-w-5xl text-foreground">
        <div className="font-sans font-bold text-xl tracking-tight text-accent">vaultt.</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#services" className="hover:-translate-y-px transition-transform text-white hover:text-foreground">Services</a>
          <a href="#method" className="hover:-translate-y-px transition-transform text-white hover:text-foreground">Method</a>
          <a href="#proof" className="hover:-translate-y-px transition-transform text-white hover:text-foreground">Testimonials</a>
          <a href="#pricing" className="hover:-translate-y-px transition-transform text-white hover:text-foreground">Pricing</a>
          <a href="#faq" className="hover:-translate-y-px transition-transform text-white hover:text-foreground">FAQ</a>
          <Link to="/consultation" className="btn-magnetic bg-accent text-background px-6 py-2.5 rounded-full hover:-translate-y-px transition-all">
            <span>Book Consultation</span>
          </Link>
        </div>

        {/* Mobile Hamburger Icon */}
        <button
          className="md:hidden text-white hover:text-accent transition-colors"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu size={28} />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-background/95 backdrop-blur-2xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col justify-center items-center ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto translate-x-0' : 'opacity-0 pointer-events-none translate-x-[100%]'
          }`}
      >
        <button
          className="absolute top-8 right-8 text-white hover:text-accent transition-colors"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <X size={36} />
        </button>

        <div className="flex flex-col items-center gap-10 text-3xl font-sans font-bold text-white">
          <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-accent transition-colors">Services</a>
          <a href="#method" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-accent transition-colors">Method</a>
          <a href="#proof" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-accent transition-colors">Testimonials</a>
          <a href="#pricing" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-accent transition-colors">Pricing</a>
          <a href="#faq" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-accent transition-colors">FAQ</a>
          <Link to="/consultation" onClick={() => setIsMobileMenuOpen(false)} className="mt-4 bg-accent text-background px-8 py-4 rounded-2xl hover:scale-[1.03] transition-transform text-xl uppercase tracking-wider text-black">
            Book Consultation
          </Link>
        </div>
      </div>
    </>
  );
};

// --- HERO ---
const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-anim', {
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: 'power3.out',
        delay: 0.2
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative h-[100dvh] flex items-end pb-24 lg:pb-32 px-6 lg:px-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="rgba(58, 68, 86, 0.4)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-4xl">
        <h1 className="hero-anim text-5xl lg:text-7xl font-sans font-bold leading-tight mb-4">
          Digital presence meets
          <br />
          <span className="font-drama italic text-7xl lg:text-9xl font-light text-accent block mt-2">Absolute precision.</span>
        </h1>
        <p className="hero-anim text-lg lg:text-xl text-white font-mono max-w-2xl mt-8 mb-10">
          Website Development. Social Media Management. Content Writing.
        </p>
        <Link to="/consultation" className="hero-anim btn-magnetic bg-accent text-background px-8 py-4 text-lg">
          <span>Book a Consultation</span>
        </Link>
      </div>
    </section>
  );
};

// --- FEATURES ---
const ShufflerCard = () => {
  const [items, setItems] = useState([
    { id: 1, text: "Custom Architecture" },
    { id: 2, text: "Performant Code" },
    { id: 3, text: "Responsive Design" }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setItems(prev => {
        const newItems = [...prev];
        const last = newItems.pop();
        newItems.unshift(last);
        return newItems;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-surface rounded-[2rem] p-8 border border-muted/30 shadow-2xl relative h-80 flex flex-col">
      <div className="flex items-center gap-3 mb-6 text-accent">
        <Code size={24} />
        <h3 className="font-sans font-bold text-xl text-foreground">Website Development</h3>
      </div>
      <p className="text-white text-sm mb-auto">Scalable digital infrastructure built for conversion and speed.</p>

      <div className="relative h-32 mt-6">
        {items.map((item, i) => {
          const isTop = i === 0;
          return (
            <div
              key={item.id}
              className={`absolute left-0 right-0 p-4 rounded-xl border border-muted/50 transition-all duration-700`}
              style={{
                top: `${i * 12}px`,
                backgroundColor: isTop ? '#1C1F26' : '#2D3545',
                transform: `scale(${1 - i * 0.05})`,
                zIndex: 10 - i,
                opacity: 1 - i * 0.2
              }}
            >
              <span className="font-mono text-sm text-foreground">{item.text}</span>
            </div>
          );
        })}
      </div>
      <Link to="/services/website-development" className="mt-6 inline-flex items-center gap-2 text-accent font-mono text-xs hover:gap-3 transition-all">
        LEARN MORE <ArrowRight size={14} />
      </Link>
    </div>
  );
};

const TypewriterCard = () => {
  const [text, setText] = useState("");
  const lines = [
    "> ANALYZING TRENDS...",
    "> ENGAGEMENT SPIKE DETECTED.",
    "> PUBLISHING CONTENT...",
    "> MONITORING METRICS."
  ];
  const [lineIdx, setLineIdx] = useState(0);

  useEffect(() => {
    let charIdx = 0;
    const currentLine = lines[lineIdx];
    setText("");

    const typeInterval = setInterval(() => {
      if (charIdx <= currentLine.length) {
        setText(currentLine.slice(0, charIdx));
        charIdx++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setLineIdx((prev) => (prev + 1) % lines.length);
        }, 2000);
      }
    }, 50);

    return () => clearInterval(typeInterval);
  }, [lineIdx]);

  return (
    <div className="bg-surface rounded-[2rem] p-8 border border-muted/30 shadow-2xl relative h-80 flex flex-col">
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center gap-3 text-accent">
          <Activity size={24} />
          <h3 className="font-sans font-bold text-xl text-foreground">Social Media</h3>
        </div>
        <div className="flex items-center gap-2 bg-background px-3 py-1 rounded-full border border-muted/50">
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="font-mono text-[10px] text-white">LIVE</span>
        </div>
      </div>
      <p className="text-white text-sm mb-auto">Data-driven management designed to amplify reach and resonance.</p>

      <div className="mt-6 bg-background rounded-xl p-4 font-mono text-xs text-accent h-24 flex items-center">
        <p>
          {text}
          <span className="inline-block w-2 h-3 bg-accent ml-1 animate-pulse" />
        </p>
      </div>
      <Link to="/services/social-media" className="mt-6 inline-flex items-center gap-2 text-accent font-mono text-xs hover:gap-3 transition-all">
        LEARN MORE <ArrowRight size={14} />
      </Link>
    </div>
  );
};

const SchedulerCard = () => {
  const cursorRef = useRef(null);
  const [activeDay, setActiveDay] = useState(3);
  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

      tl.to(cursorRef.current, { x: 120, y: 30, duration: 1, ease: 'power2.inOut' })
        .to(cursorRef.current, { scale: 0.8, duration: 0.1 })
        .call(() => setActiveDay(4))
        .to(cursorRef.current, { scale: 1, duration: 0.1 })
        .to(cursorRef.current, { x: 220, y: 100, duration: 1, ease: 'power2.inOut', delay: 0.5 })
        .to(cursorRef.current, { scale: 0.8, duration: 0.1 })
        .to(cursorRef.current, { scale: 1, duration: 0.1 })
        .to(cursorRef.current, { opacity: 0, duration: 0.3 })
        .set(cursorRef.current, { x: 0, y: 0, opacity: 1, scale: 1 })
        .call(() => setActiveDay(3));
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-surface rounded-[2rem] p-8 border border-muted/30 shadow-2xl relative h-80 flex flex-col">
      <div className="flex items-center gap-3 mb-6 text-accent">
        <Terminal size={24} />
        <h3 className="font-sans font-bold text-xl text-foreground">Content Writing</h3>
      </div>
      <p className="text-white text-sm mb-auto">Strategic narratives scheduled precisely to capture attention.</p>

      <div className="mt-6 relative border border-muted/50 rounded-xl p-4 bg-background">
        <div className="grid grid-cols-7 gap-2 mb-4 relative z-10">
          {days.map((d, i) => (
            <div key={i} className={`h-8 rounded-md flex items-center justify-center font-mono text-xs transition-colors ${activeDay === i ? 'bg-accent text-background' : 'bg-surface text-white'}`}>
              {d}
            </div>
          ))}
        </div>
        <div className="flex justify-end">
          <div className="bg-surface text-white text-[10px] font-mono px-3 py-1 rounded">SAVE</div>
        </div>

        {/* Animated Cursor */}
        <div ref={cursorRef} className="absolute top-2 left-2 z-20 pointer-events-none">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.5 3.21V20.8C5.5 21.45 6.27 21.8 6.76 21.36L11.44 17.15H17.5C18.05 17.15 18.5 16.7 18.5 16.15V3.21C18.5 2.66 18.05 2.21 17.5 2.21H6.5C5.95 2.21 5.5 2.66 5.5 3.21Z" fill="#F8E84F" />
            <path d="M5.5 3.21V20.8C5.5 21.45 6.27 21.8 6.76 21.36L11.44 17.15H17.5C18.05 17.15 18.5 16.7 18.5 16.15V3.21C18.5 2.66 18.05 2.21 17.5 2.21H6.5C5.95 2.21 5.5 2.66 5.5 3.21Z" stroke="white" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <Link to="/services/content-writing" className="mt-6 inline-flex items-center gap-2 text-accent font-mono text-xs hover:gap-3 transition-all">
        LEARN MORE <ArrowRight size={14} />
      </Link>
    </div>
  );
};

const AiAutomationCard = () => {
  const nodesRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(nodesRef.current, {
        opacity: 0.1,
        scale: 0.5,
        duration: 1,
        stagger: {
          each: 0.1,
          from: "random",
          yoyo: true,
          repeat: -1
        },
        ease: 'power2.inOut'
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-surface rounded-[2rem] p-8 border border-muted/30 shadow-2xl relative h-80 flex flex-col">
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center gap-3 text-accent">
          <Hexagon size={24} />
          <h3 className="font-sans font-bold text-xl text-foreground">AI Automation</h3>
        </div>
        <div className="flex items-center gap-2 bg-background px-3 py-1 rounded-full border border-accent/30">
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="font-mono text-[10px] text-accent">AUTONOMOUS</span>
        </div>
      </div>
      <p className="text-white text-sm mb-auto">Intelligent agentic systems deployed to eliminate manual redundancy and exponentially scale your operational bandwidth.</p>

      <div className="mt-6 relative border border-muted/50 rounded-xl p-4 bg-background h-32 overflow-hidden flex items-center justify-center">
        <svg className="absolute inset-0 w-full h-full opacity-20" preserveAspectRatio="none">
          <path d="M 20 20 L 50 50 L 80 20 M 20 80 L 50 50 L 80 80" fill="none" stroke="#F8E84F" strokeWidth="1" strokeDasharray="4,4" className="animate-[pulse_3s_infinite]" />
        </svg>
        <div className="grid grid-cols-5 gap-4 w-full h-full relative z-10 place-items-center">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              ref={el => nodesRef.current[i] = el}
              className="w-2 h-2 rounded-full bg-accent shadow-[0_0_8px_rgba(248,232,79,0.8)]"
            />
          ))}
        </div>
      </div>
      <Link to="/services/ai-automation" className="mt-6 inline-flex items-center gap-2 text-accent font-mono text-xs hover:gap-3 transition-all">
        LEARN MORE <ArrowRight size={14} />
      </Link>
    </div>
  );
};

const Features = () => {
  return (
    <section id="services" className="py-32 px-6 lg:px-20 relative z-10 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-sans font-bold mb-16">Functional Artifacts</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ShufflerCard />
          <TypewriterCard />
          <SchedulerCard />
          <AiAutomationCard />
        </div>
      </div>
    </section>
  );
};

// --- ABOUT ---
const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-anim', {
        scrollTrigger: {
          trigger: aboutRef.current,
          start: 'top 80%',
        },
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out'
      });
    }, aboutRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={aboutRef} className="py-32 px-6 lg:px-20 bg-background relative z-10 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="about-anim inline-block bg-accent/10 border border-accent/30 rounded-full px-4 py-1.5 mb-8">
          <span className="font-mono text-xs text-accent uppercase tracking-[0.2em]">The Mission</span>
        </div>
        <h2 className="about-anim text-4xl lg:text-7xl font-sans font-bold leading-tight mb-10">
          We don't just build websites.
          <br />
          <span className="font-drama italic text-accent font-light">We engineer impact.</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-end">
          <p className="about-anim text-lg lg:text-xl text-white/70 font-mono leading-relaxed">
            vaultt. was founded on the principle that digital presence should be a digital instrument. Every pixel, every line of code, and every automation is a deliberate move towards your growth. We focus on technical precision and creative obsession.
          </p>
          <div className="about-anim">
            <Link to="/founders-story" className="inline-flex items-center gap-3 text-accent hover:gap-5 transition-all font-mono text-sm uppercase tracking-[0.1em]">
              READ THE FOUNDER'S STORY <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- TESTIMONIALS (Static Grid) ---
const Testimonials = () => {
  const reviews = [
    {
      name: "Team VeloCT",
      role: "VeloCT Arena",
      text: "Working with Vaultt Agency has completely upgraded how our brand looks and feels. As a gaming café, aesthetics and engagement matter a lot and they absolutely nailed both. From our social media presence to visual branding, everything now resonates with our audience. We've seen a noticeable increase in footfall and online engagement. Highly recommended for anyone looking to stand out in a competitive space."
    },
    {
      name: "Adv. Ashwini Vernekar",
      role: "Legal Consultant",
      text: "Vaultt Agency brought a level of clarity and professionalism to my brand that truly reflects the nature of legal services. Their approach was structured, detail oriented, and aligned perfectly with my requirements. From content to design, everything was handled with precision. I now have a strong and credible online presence that builds trust with my clients."
    },
    {
      name: "Mrs. Mrunalini Raykar",
      role: "HR Consultant",
      text: "Vaultt Agency understands how to communicate value in a simple yet powerful way. As an HR consultant, it was important for me to present my services clearly and professionally and they delivered exactly that. Their content strategy and design approach helped me connect better with my audience. It's been a smooth and impactful collaboration."
    }
  ];

  return (
    <section id="proof" className="py-32 px-6 lg:px-20 bg-[#111317] relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <span className="font-mono text-accent text-xs tracking-[0.3em] uppercase block mb-4">Social Proof</span>
          <h2 className="text-4xl lg:text-6xl font-sans font-bold text-foreground">
            Wall of <span className="font-drama italic text-accent font-light">Proof.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {reviews.map((rev, i) => (
            <div key={i} className="bg-surface rounded-[2.5rem] p-8 md:p-12 border border-muted/30 flex flex-col justify-between shadow-2xl relative group hover:border-accent/30 transition-all hover:-translate-y-2">
              <div className="absolute top-8 right-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <CheckCircle2 size={40} className="text-accent" />
              </div>
              <p className="text-lg md:text-xl font-sans font-medium text-white italic leading-relaxed mb-12">
                "{rev.text}"
              </p>
              <div>
                <h4 className="font-sans font-bold text-xl text-accent mb-1">{rev.name}</h4>
                <p className="font-mono text-[10px] text-white/50 uppercase tracking-[0.2em]">{rev.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
;

// --- PROTOCOL ---
const ProtocolCard = ({ index, title, description, Icon }) => {
  return (
    <div className="protocol-card h-screen flex items-center justify-center sticky top-0 bg-background origin-top border-t border-muted/20 will-change-transform">
      <div className="max-w-4xl w-full grid md:grid-cols-2 gap-12 px-6">
        <div className="flex flex-col justify-center">
          <div className="font-mono text-accent text-sm mb-6 flex items-center gap-4">
            <span className="w-8 h-px bg-accent"></span>
            STEP {index.toString().padStart(2, '0')}
          </div>
          <h3 className="text-4xl lg:text-5xl font-sans font-bold mb-6">{title}</h3>
          <p className="text-white text-lg">{description}</p>
        </div>
        <div className="bg-surface rounded-[3rem] aspect-square flex items-center justify-center p-12 border border-muted/30">
          <Icon className="w-full h-full text-accent opacity-80 animate-pulse" strokeWidth={1} />
        </div>
      </div>
    </div>
  );
};

const Protocol = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.protocol-card');

      cards.forEach((card, i) => {
        if (i === cards.length - 1) return;

        ScrollTrigger.create({
          trigger: card,
          start: 'top top',
          endTrigger: '.protocol-end',
          end: 'bottom bottom',
          pin: true,
          pinSpacing: false,
        });

        gsap.to(card, {
          scrollTrigger: {
            trigger: cards[i + 1],
            start: 'top bottom',
            end: 'top top',
            scrub: true,
          },
          scale: 0.9,
          opacity: 0.3,
          // Removed heavy blur filter to guarantee 60fps; scale + opacity are fully GPU accelerated
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="method" ref={containerRef} className="relative z-10 bg-background pb-32">
      <ProtocolCard
        index={1}
        title="Discovery & Audit"
        description="We analyze your existing footprint, uncovering inefficiencies and plotting the optimal trajectory for growth."
        Icon={Hexagon}
      />
      <ProtocolCard
        index={2}
        title="Strategic Implementation"
        description="Execution with surgical precision. Code is written, content is drafted, and systems are aligned to your exact specifications."
        Icon={Code}
      />
      <ProtocolCard
        index={3}
        title="Growth & Scaling"
        description="Post-launch, we deploy continuous telemetry to iterate, refine, and exponentially scale your operations."
        Icon={Activity}
      />
      <div className="protocol-end"></div>
    </section>
  );
};

// --- PRICING ---
const PricingCard = ({ title, price, subtitle, features, isPopular, buttonText, packageName }) => {
  return (
    <div className={`relative bg-surface rounded-[2rem] p-8 border ${isPopular ? 'border-accent shadow-2xl shadow-accent/10 z-10 scale-105 md:scale-110' : 'border-muted/30 shadow-2xl'} flex flex-col h-full transition-transform hover:-translate-y-2 hover:shadow-[0_16px_32px_rgba(28,31,38,0.4),0_12px_0_#1C1F26]`}>
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-background font-bold text-xs px-4 py-1.5 rounded-full font-sans uppercase tracking-wider">
          Most Popular
        </div>
      )}
      <div className="mb-6">
        <h3 className="font-sans font-bold text-xl text-foreground mb-2">{title}</h3>
        <div className="font-sans font-bold text-4xl text-white mb-2">{price}</div>
        <p className="text-sm font-mono text-white">{subtitle}</p>
      </div>

      <div className="w-full h-px bg-muted/30 mb-6"></div>

      <ul className="flex-1 space-y-4 mb-8">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <CheckCircle2 size={18} className="text-accent shrink-0 mt-0.5" />
            <span className="text-sm font-mono text-white/90 leading-tight">{feature}</span>
          </li>
        ))}
      </ul>

      <Link to={`/consultation?pkg=${encodeURIComponent(packageName || title)}`} className={`mt-auto btn-magnetic flex items-center justify-center w-full px-6 py-4 rounded-xl font-sans font-bold uppercase tracking-wider transition-all hover:scale-[1.03] active:scale-[0.98] ${isPopular ? 'bg-accent text-background hover:brightness-95 shadow-[0_4px_12px_rgba(0,0,0,0.15),0_6px_0_#1C1F26]' : 'bg-background text-white hover:text-accent border border-muted/50'}`}>
        <span>{buttonText}</span>
      </Link>
    </div>
  );
};

const Pricing = () => {
  return (
    <section id="pricing" className="py-32 px-6 lg:px-12 relative z-10 bg-background overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-sans font-bold mb-6">Investment Vectors<span className="text-accent">.</span></h2>
          <p className="text-white font-mono max-w-xl mx-auto">Select the blueprint that matches your operational scale.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 items-center">
          <PricingCard
            title="💼 Starter Pack"
            packageName="Starter Pack"
            price="₹4,999"
            subtitle="Perfect for beginners & small businesses"
            features={[
              "Landing Page (1 Page)",
              "Basic Website Setup",
              "Social Media Account Setup",
              "1 Month Content Calendar",
              "2 Strategy Calls"
            ]}
            buttonText="Get Started"
          />
          <PricingCard
            title="⭐ Social Growth Pack"
            packageName="Social Growth Pack"
            price="₹12,999"
            subtitle="For brands ready to build presence"
            isPopular={true}
            features={[
              "Content Calendar",
              "12 15 Posts (Static + Reels)",
              "Video Editing",
              "Carousel Design",
              "Copywriting (Captions + Hooks)",
              "Trend Research",
              "Profile Optimization",
              "Monthly Report"
            ]}
            buttonText="Get Started"
          />
          <PricingCard
            title="📈 Growth & Automation"
            packageName="Growth & Automation Pack"
            price="₹28,999"
            subtitle="Complete system for scaling businesses"
            features={[
              "WhatsApp Automation",
              "Instagram + Facebook Automation",
              "Google Business Optimization",
              "Landing Pages (2 3)",
              "Website Chatbot Integration",
              "Lead Funnel Setup",
              "Basic SEO Setup"
            ]}
            buttonText="Get Started"
          />
          <PricingCard
            title="🧩 Custom Pack"
            packageName="Custom Pack"
            price="Custom"
            subtitle="Tailored solution made just for your business needs"
            features={[
              "Requirements-Based Planning",
              "1 on 1 Strategy Consultation",
              "Custom Website / Funnel Development",
              "Personalized Content Strategy",
              "Platform-Specific Growth Plan",
              "Automation Setup (as needed)",
              "Flexible Deliverables",
              "Ongoing Support & Optimization"
            ]}
            buttonText="Get Your Custom Plan"
          />
        </div>
      </div>
    </section>
  );
};

// --- FAQ ---
const FAQItem = ({ question, answer, isOpen, onClick }) => {
  const contentRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      gsap.to(contentRef.current, { height: 'auto', opacity: 1, duration: 0.5, ease: 'power2.out' });
    } else {
      gsap.to(contentRef.current, { height: 0, opacity: 0, duration: 0.3, ease: 'power2.in' });
    }
  }, [isOpen]);

  return (
    <div className="border-b border-muted/20 py-4">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between text-left py-4 hover:text-accent transition-colors"
      >
        <span className="font-sans font-bold text-xl lg:text-2xl text-foreground">{question}</span>
        {isOpen ? <Minus size={20} className="text-accent shrink-0" /> : <Plus size={20} className="text-white shrink-0" />}
      </button>
      <div ref={contentRef} className="overflow-hidden h-0 opacity-0">
        <p className="font-mono text-white/70 text-base lg:text-lg pb-6 leading-relaxed max-w-4xl">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const faqRef = useRef(null);

  const faqs = [
    {
      question: "What does vaultt. actually do?",
      answer: "We are a creative technology agency that builds growth infrastructure. We combine bespoke web development, data backed social media management, and intelligent automation into one unified engine to scale your brand."
    },
    {
      question: "How long does a typical project take?",
      answer: "A custom conversion machine (website) typically takes 2 4 weeks. Social media systems are ongoing monthly deployments, and AI automation workflows can be implemented within 10 14 days depending on complexity."
    },
    {
      question: "Do you use templates for websites?",
      answer: "Never. Every website we build is hand coded from scratch using modern frameworks like React and Next.js. This ensures absolute precision, 100/100 performance scores, and a unique identity that cannot be replicated with a template."
    },
    {
      question: "What industries do you specialize in?",
      answer: "We work with high growth startups, luxury lifestyle brands, e commerce founders, and professional service providers who value technical excellence and want to stand out in a crowded digital landscape."
    },
    {
      question: "How do you measure social media success?",
      answer: "We look beyond vanity metrics. We measure 'Attention Velocity' depth of engagement, reach growth, and most importantly, how many of those interactions convert into revenue or leads for your business."
    },
    {
      question: "Can you automate my existing business workflows?",
      answer: "Absolutely. We conduct a 'Workflow Audit' to find manual bottlenecks and deploy agentic AI systems that handle lead follow ups, scheduling, data entry, and customer support autonomously."
    },
    {
      question: "What tech stack do you use?",
      answer: "Our core stack includes React, Next.js, Node.js, and GSAP for animations. For automation, we utilize OpenAI, Make.com, and Zapier. We choose tools that offer the highest degree of scalability and performance."
    },
    {
      question: "Do you offer post launch support?",
      answer: "Yes. Every project includes a transition period with full training. We also offer monthly 'Growth Partnerships' where we continuously optimize your systems, run A/B tests, and scale your infrastructure as you grow."
    },
    {
      question: "Why is bespoke code better than WordPress?",
      answer: "Speed and security. Bespoke code is up to 10x faster, has zero bloat, and is nearly impossible to hack compared to open source platforms. It also allows for 'Absolute Design Freedom' where your vision isn't limited by a plugin's settings."
    },
    {
      question: "How do we get started?",
      answer: "The process begins with a Strategic Consultation. We'll audit your current digital footprint and map out a growth blueprint tailored to your operational scale. Click 'Book Consultation' to initiate the protocol."
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.faq-anim', {
        scrollTrigger: {
          trigger: faqRef.current,
          start: 'top 80%',
        },
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'power3.out'
      });
    }, faqRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="faq" ref={faqRef} className="py-32 px-6 lg:px-20 bg-background relative z-10">
      <div className="max-w-5xl mx-auto">
        <div className="faq-anim mb-16">
          <span className="font-mono text-accent text-xs tracking-[0.3em] uppercase block mb-4">Intelligence Query</span>
          <h2 className="text-4xl lg:text-6xl font-sans font-bold text-foreground">
            Common <span className="font-drama italic text-accent font-light">Questions.</span>
          </h2>
        </div>
        <div className="faq-anim">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// --- CTA ---
const CTA = () => {
  return (
    <section id="contact" className="py-32 px-6 bg-surface border-y border-muted/20 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-5xl lg:text-7xl font-sans font-bold mb-8">Ready to initiate?</h2>
        <p className="text-xl text-white font-mono mb-12">System standing by for your inquiry.</p>
        <Link to="/consultation" className="btn-magnetic bg-accent text-background px-10 py-5 text-xl">
          <span>Book a Consultation</span>
        </Link>
      </div>
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
    </section>
  );
};

// --- FOOTER ---
const Footer = () => {
  return (
    <footer className="bg-[#111317] pt-20 pb-10 px-6 lg:px-20 rounded-t-[4rem] -mt-8 relative z-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 border-b border-muted/20 pb-12">
        <div className="md:col-span-2">
          <h2 className="font-sans font-bold text-3xl tracking-tight mb-4 text-foreground">vaultt.</h2>
          <p className="text-white font-mono text-sm max-w-sm mb-6">
            A digital agency focused on uncompromised quality and technical precision.
          </p>
          <div className="flex items-center gap-4">
            <a href="/coming-soon" className="w-10 h-10 rounded-full bg-surface border border-muted/50 flex items-center justify-center text-white hover:text-accent hover:border-accent hover:-translate-y-1 transition-all" aria-label="X (Twitter)">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/vaultt.studios/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-surface border border-muted/50 flex items-center justify-center text-white hover:text-accent hover:border-accent hover:-translate-y-1 transition-all" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="https://www.facebook.com/vaultt.studios" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-surface border border-muted/50 flex items-center justify-center text-white hover:text-accent hover:border-accent hover:-translate-y-1 transition-all" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/vaultt-studios/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-surface border border-muted/50 flex items-center justify-center text-white hover:text-accent hover:border-accent hover:-translate-y-1 transition-all" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-mono text-accent text-sm mb-6">INDEX</h4>
          <ul className="space-y-3 text-white text-sm font-medium">
            <li><a href="#services" className="hover:text-foreground transition-colors">Services</a></li>
            <li><a href="#method" className="hover:text-foreground transition-colors">Method</a></li>
            <li><a href="#proof" className="hover:text-foreground transition-colors">Testimonials</a></li>
            <li><a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a></li>
            <li><a href="#faq" className="hover:text-foreground transition-colors">FAQ</a></li>
            <li><Link to="/founders-story" className="hover:text-foreground transition-colors">Founder's Story</Link></li>
            <li><Link to="/consultation" className="hover:text-foreground transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-mono text-accent text-sm mb-6">LEGAL</h4>
          <ul className="space-y-3 text-white text-sm font-medium">
            <li><a href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
            <li><a href="/terms" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between mt-8">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <p className="text-white text-xs font-mono mb-4 md:mb-0">© {new Date().getFullYear()} vaultt. All systems operational.</p>
          <div className="hidden md:block w-px h-3 bg-muted/40" />
          <p className="text-white/40 text-[10px] font-mono uppercase tracking-widest">Founder's Story</p>
        </div>
        <div className="flex items-center gap-3 bg-surface px-4 py-2 rounded-full border border-muted/30">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="font-mono text-xs text-white">SYSTEM OPERATIONAL</span>
        </div>
      </div>
    </footer>
  );
};

const Home = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        // Small timeout to allow GSAP and layout to stabilize
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <main className="min-h-screen bg-background relative selection:bg-accent selection:text-background">
      <Navbar />
      <Hero />
      <Features />
      <Protocol />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/consultation" element={<ConsultationForm />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<ServiceTerms />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/founders-story" element={<FoundersStory />} />
      </Routes>
    </Router>
  );
}

export default App;
