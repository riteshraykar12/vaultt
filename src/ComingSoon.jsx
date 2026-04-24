import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const ComingSoon = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-background relative selection:bg-accent selection:text-background flex flex-col items-center justify-center px-6">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="relative z-10 text-center max-w-xl">
        <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-8">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor" className="text-accent">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </div>
        
        <h1 className="text-5xl lg:text-7xl font-sans font-bold text-foreground leading-tight mb-6">
          Coming <span className="font-drama italic text-accent font-light">Soon.</span>
        </h1>
        <p className="text-white font-mono text-sm mb-12 max-w-sm mx-auto">
          Our X (formerly Twitter) profile is currently under construction. Stay tuned for updates.
        </p>
        
        <Link to="/" className="btn-magnetic bg-accent text-background px-8 py-3 text-sm">
          <span>Return to Base</span>
        </Link>
      </div>
    </main>
  );
};

export default ComingSoon;
