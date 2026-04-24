import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowLeft, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const FoundersStory = () => {
  const pageRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance
      gsap.from('.fs-hero-anim', {
        y: 50,
        opacity: 0,
        duration: 1.2,
        stagger: 0.12,
        ease: 'power3.out',
        delay: 0.2,
      });

      // Scroll-triggered sections
      gsap.utils.toArray('.fs-section').forEach((section) => {
        gsap.from(section, {
          scrollTrigger: {
            trigger: section,
            start: 'top 82%',
          },
          y: 40,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
        });
      });

      // Parallax on the accent line
      gsap.utils.toArray('.fs-accent-line').forEach((line) => {
        gsap.from(line, {
          scrollTrigger: {
            trigger: line,
            start: 'top 85%',
          },
          scaleX: 0,
          transformOrigin: 'left center',
          duration: 0.8,
          ease: 'power2.out',
        });
      });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={pageRef}
      className="min-h-screen bg-background relative selection:bg-accent selection:text-background overflow-x-hidden"
    >
      {/* --- NAVBAR --- */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-full bg-background/60 backdrop-blur-xl border border-muted/30 flex items-center justify-between w-[90%] max-w-5xl">
        <Link
          to="/#about"
          className="flex items-center gap-2 text-white hover:text-accent transition-colors font-mono text-sm"
        >
          <ArrowLeft size={16} /> <span className="hidden sm:inline">vaultt.</span>
        </Link>
        <span className="font-mono text-xs text-white/60 uppercase tracking-widest">
          Founder's Story
        </span>
        <Link
          to="/consultation"
          className="btn-magnetic bg-accent text-background px-5 py-2 rounded-full text-sm font-medium"
        >
          <span>Let's Talk</span>
        </Link>
      </nav>

      {/* --- HERO --- */}
      <section className="relative min-h-[75dvh] flex items-end pb-20 lg:pb-28 px-6 lg:px-20 overflow-hidden">
        {/* Grid background */}
        <div className="absolute inset-0 z-0">
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="fs-grid"
                width="48"
                height="48"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 48 0 L 0 0 0 48"
                  fill="none"
                  stroke="rgba(58, 68, 86, 0.25)"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#fs-grid)" />
          </svg>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-3xl">
          <div className="fs-hero-anim inline-block bg-accent/10 border border-accent/30 rounded-full px-4 py-1.5 mb-8">
            <span className="font-mono text-xs text-accent uppercase tracking-[0.2em]">
              Origin Story
            </span>
          </div>
          <h1 className="fs-hero-anim text-4xl sm:text-5xl lg:text-7xl font-sans font-bold leading-tight mb-6">
            The Vaultt Story.
            <br />
            <span className="font-drama italic text-5xl sm:text-6xl lg:text-8xl font-light text-accent block mt-2">
              Beyond the Agency.
            </span>
          </h1>
          <p className="fs-hero-anim text-base lg:text-lg text-white/70 font-mono max-w-2xl">
            Vaultt didn’t start as an agency. It started as a frustration. A frustration with how most businesses were being “helped” online pretty designs with no conversions, content with no strategy, and marketing that looked good but did nothing.
          </p>
        </div>
      </section>

      {/* --- NARRATIVE --- */}
      <article className="relative z-10 pb-32">
        {/* Section: The Frustration */}
        <section className="py-20 px-6 lg:px-20">
          <div className="max-w-3xl mx-auto">
            <div className="fs-section">
              <div className="fs-accent-line w-16 h-px bg-accent mb-8" />
              <div className="space-y-6 text-white/75 text-base lg:text-lg leading-relaxed font-sans">
                <p>
                  We saw founders burning money on services that didn’t move the needle.
                  Websites that existed… but didn’t sell.
                  Social media pages that posted… but didn’t grow.
                  Content that filled space… but didn’t build authority.
                </p>
                <p className="text-foreground font-medium text-xl lg:text-2xl italic">
                  That gap became the starting point.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 1: In the Beginning */}
        <section className="py-20 px-6 lg:px-20">
          <div className="max-w-3xl mx-auto">
            <div className="fs-section">
              <div className="fs-accent-line w-16 h-px bg-accent mb-8" />
              <h2 className="text-2xl lg:text-4xl font-sans font-bold text-foreground mb-8">
                In the Beginning
              </h2>
              <div className="space-y-6 text-white/75 text-base lg:text-lg leading-relaxed font-sans">
                <p>
                  Vaultt was built with a simple belief: <span className="text-accent">execution matters more than advice.</span>
                </p>
                <p>
                  Not just strategy decks. Not just ideas. But real systems that drive growth.
                  In the early days, we worked closely with small businesses and startups understanding their bottlenecks, fixing their foundations, and building digital assets that actually performed.
                </p>
                <p>
                  We didn’t aim to be the biggest agency. We aimed to be the most effective one.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: The Shift */}
        <section className="py-20 px-6 lg:px-20">
          <div className="max-w-3xl mx-auto">
            <div className="fs-section">
              <div className="fs-accent-line w-16 h-px bg-accent mb-8" />
              <h2 className="text-2xl lg:text-4xl font-sans font-bold text-foreground mb-8">
                The Shift
              </h2>
              <div className="space-y-6 text-white/75 text-base lg:text-lg leading-relaxed font-sans">
                <p>
                  As we worked with more brands, one pattern became clear: Most businesses don’t fail because of lack of effort. They fail because of scattered execution.
                </p>
                <p>
                  Too many tools. Too many freelancers. Too many disconnected strategies.
                </p>
                <p>
                  So Vaultt evolved. From a service provider to a growth partner. From doing tasks to building systems.
                  We started combining Website development, Content strategy, Social media execution, and Automation into one unified growth engine.
                </p>
                <p className="text-accent font-medium italic">
                  Because growth isn’t one service. It’s a system.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: What We Do Today */}
        <section className="py-20 px-6 lg:px-20">
          <div className="max-w-3xl mx-auto">
            <div className="fs-section">
              <div className="fs-accent-line w-16 h-px bg-accent mb-8" />
              <h2 className="text-2xl lg:text-4xl font-sans font-bold text-foreground mb-8">
                What We Do Today
              </h2>
              <div className="space-y-6 text-white/75 text-base lg:text-lg leading-relaxed font-sans">
                <p>
                  Today, Vaultt works with brands that want more than visibility. They want results.
                </p>
                <p>
                  We don’t just build websites. We build conversion machines.
                  We don’t just post content. We build attention ecosystems.
                  We don’t just run campaigns. We create scalable growth frameworks.
                </p>
                <p className="text-foreground font-semibold">
                  Every project we take on is built around one goal: turning attention into revenue.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: How We Work */}
        <section className="py-20 px-6 lg:px-20">
          <div className="max-w-3xl mx-auto">
            <div className="fs-section">
              <div className="fs-accent-line w-16 h-px bg-accent mb-8" />
              <h2 className="text-2xl lg:text-4xl font-sans font-bold text-foreground mb-8">
                How We Work
              </h2>
              <div className="grid md:grid-cols-2 gap-8 text-white/75 font-sans">
                <div className="space-y-4">
                  <div className="text-accent font-mono text-sm uppercase tracking-wider">01 Data backed</div>
                  <p className="text-sm lg:text-base">Every decision has a reason and is supported by telemetry.</p>
                </div>
                <div className="space-y-4">
                  <div className="text-accent font-mono text-sm uppercase tracking-wider">02 Minimal & Powerful</div>
                  <p className="text-sm lg:text-base">No unnecessary complexity. Just what works.</p>
                </div>
                <div className="space-y-4">
                  <div className="text-accent font-mono text-sm uppercase tracking-wider">03 Execution first</div>
                  <p className="text-sm lg:text-base">Speed over perfection. We ship and iterate.</p>
                </div>
                <div className="space-y-4">
                  <div className="text-accent font-mono text-sm uppercase tracking-wider">04 Scalable by Design</div>
                  <p className="text-sm lg:text-base">Built to grow with your business from day one.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Why Vaultt Exists */}
        <section className="py-20 px-6 lg:px-20">
          <div className="max-w-3xl mx-auto">
            <div className="fs-section">
              <div className="fs-accent-line w-16 h-px bg-accent mb-8" />
              <h2 className="text-2xl lg:text-4xl font-sans font-bold text-foreground mb-8">
                Why Vaultt Exists
              </h2>
              <div className="space-y-6 text-white/75 text-base lg:text-lg leading-relaxed font-sans">
                <p>
                  Vaultt exists for founders who are serious about growth. The ones who are tired of random marketing efforts, want a clear growth path, and value execution over noise.
                </p>
                <p className="text-foreground font-medium italic">
                  We’re not for everyone. And that’s intentional.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6 & 7: Vision & Future */}
        <section className="py-20 px-6 lg:px-20">
          <div className="max-w-3xl mx-auto">
            <div className="fs-section">
              <div className="fs-accent-line w-16 h-px bg-accent mb-8" />
              <h2 className="text-2xl lg:text-4xl font-sans font-bold text-foreground mb-8">
                The Vision
              </h2>
              <div className="space-y-6 text-white/75 text-base lg:text-lg leading-relaxed font-sans">
                <p>
                  We’re building Vaultt to become more than an agency. A system. A growth infrastructure. A vault of scalable digital assets. A place where businesses don’t just operate they compound.
                </p>
                <p>
                  As businesses evolve, so will Vaultt integrating deeper automation, smarter systems, and stronger growth frameworks. The goal isn’t short term wins. It’s building brands that sustain, scale, and dominate.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --- MANIFESTO --- */}
        <section className="py-28 lg:py-40 px-6 lg:px-20 bg-[#111317] relative overflow-hidden mt-12">
          {/* Background texture */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
            <svg
              className="w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern
                  id="fs-dots"
                  width="24"
                  height="24"
                  patternUnits="userSpaceOnUse"
                >
                  <circle cx="2" cy="2" r="1" fill="rgba(248,232,79,0.5)" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#fs-dots)" />
            </svg>
          </div>

          <div className="max-w-4xl mx-auto relative z-10 text-center fs-section">
            <div className="inline-block bg-accent/10 border border-accent/30 rounded-full px-4 py-1.5 mb-10">
              <span className="font-mono text-xs text-accent uppercase tracking-[0.2em]">
                Closing
              </span>
            </div>
            <blockquote className="text-2xl sm:text-3xl lg:text-5xl font-drama italic text-foreground leading-snug mb-12">
              "If you’re building something real<br />
              <span className="text-accent">Vaultt is built for you.</span>"
            </blockquote>
            <Link
              to="/consultation"
              className="btn-magnetic bg-accent text-background px-10 py-5 text-lg inline-flex items-center gap-3"
            >
              <span>Initiate Partnership</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </section>
      </article>

      {/* --- FOOTER --- */}
      <footer className="bg-[#111317] py-12 px-6 text-center border-t border-muted/20">
        <Link
          to="/#about"
          className="font-sans font-bold text-xl text-accent hover:opacity-80 transition-opacity"
        >
          vaultt.
        </Link>
        <p className="font-mono text-xs text-white/60 mt-4 mb-2 uppercase tracking-widest">
          Founder's Story
        </p>
        <p className="font-mono text-xs text-white/40">
          © {new Date().getFullYear()} vaultt. All systems operational.
        </p>
      </footer>
    </main>
  );
};

export default FoundersStory;
