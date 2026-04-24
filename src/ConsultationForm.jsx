import React, { useEffect, useRef, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { gsap } from 'gsap';
import { ArrowLeft, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { z } from 'zod';

const SCRIPT_URL = import.meta.env.VITE_SCRIPT_URL;

const ConsultationForm = () => {
  const formRef = useRef(null);
  const [searchParams] = useSearchParams();
  const selectedPackage = searchParams.get('pkg');
  
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error
  const [submitted, setSubmitted] = useState(false);
  const mountTime = useRef(Date.now());
  const [errors, setErrors] = useState({});

  const consultationSchema = z.object({
    fullName: z.string().min(2, "Name too short").max(100, "Name too long"),
    contactNumber: z.string().min(10, "Invalid number").max(20, "Number too long"),
    email: z.string().email("Invalid email address"),
    message: z.string().min(10, "Message too short").max(2000, "Message too long"),
  });

  useEffect(() => {
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      gsap.from('.form-element', {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out'
      });
    }, formRef);
    return () => ctx.revert();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault(); 
    setErrors({});

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    // 1. Honeypot check
    if (data.website) {
      console.warn('Bot detected via honeypot.');
      setStatus('success'); // Silently fail to the bot
      return;
    }

    // 2. Timing check (if submitted in < 3 seconds)
    if (Date.now() - mountTime.current < 3000) {
      console.warn('Bot detected via timing.');
      setStatus('success');
      return;
    }

    // 3. Throttling check (max 1 submission per 60 seconds)
    const lastSubmission = localStorage.getItem('vaultt_last_submission');
    if (lastSubmission && Date.now() - parseInt(lastSubmission) < 60000) {
      alert("Please wait 60 seconds before submitting again.");
      return;
    }

    // 4. Robust Schema Validation
    const result = consultationSchema.safeParse(data);
    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      setErrors(fieldErrors);
      setStatus('error');
      return;
    }

    // Inject the exact local time the button was clicked
    const timeInput = document.getElementById('submissionTime');
    if (timeInput) {
      timeInput.value = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }

    // Ensure package is explicitly set in the DOM before native submit
    const packageInput = document.getElementById('submissionPackage');
    if (packageInput) {
      packageInput.value = selectedPackage || 'None';
    }

    // Update UI and record submission time
    setStatus('submitting');
    setSubmitted(true);
    localStorage.setItem('vaultt_last_submission', Date.now().toString());

    // Trigger the native HTML form submission to the iframe
    e.target.submit();
  };

  const handleIframeLoad = () => {
    if (submitted) {
      setStatus('success');
    }
  };

  return (
    <main ref={formRef} className="min-h-screen bg-background relative selection:bg-accent selection:text-background flex flex-col items-center justify-center py-20 px-6">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Hidden iframe to silently handle the Google Apps Script redirect and avoid CORS */}
      <iframe
        name="hidden_iframe"
        id="hidden_iframe"
        style={{ display: 'none' }}
        onLoad={handleIframeLoad}
      ></iframe>

      <div className="w-full max-w-2xl relative z-10">
        <div className="form-element mb-12">
          <Link to="/#contact" className="inline-flex items-center gap-2 text-white hover:text-foreground transition-colors mb-8 text-sm font-mono">
            <ArrowLeft size={16} />
            RETURN TO BASE
          </Link>
          <h1 className="text-4xl lg:text-6xl font-sans font-bold text-foreground leading-tight">
            Initiate <span className="font-drama italic text-accent font-light">Contact.</span>
          </h1>
          <p className="text-white mt-4 font-mono text-sm max-w-lg">
            Please provide your details below. Our team will review your telemetry and respond within 24 hours.
          </p>
          
          <div className="bg-surface/50 backdrop-blur-md rounded-2xl border border-muted/30 p-6 mt-8 flex flex-col md:flex-row justify-between gap-6 md:gap-12 text-sm font-mono text-white shadow-lg">
            <div className="flex flex-col gap-1">
              <span className="text-accent text-[10px] tracking-widest uppercase">Direct Line</span>
              <a href="tel:+918928787548" className="hover:text-foreground transition-colors">+91 89287 87548</a>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-accent text-[10px] tracking-widest uppercase">Network</span>
              <a href="mailto:contact@vaultt-agency.com" className="hover:text-foreground transition-colors">contact@vaultt-agency.com</a>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-accent text-[10px] tracking-widest uppercase">Coordinates</span>
              <span>Thane, Mumbai</span>
            </div>
          </div>
        </div>

        {status === 'success' ? (
          <div className="form-element bg-surface p-12 rounded-[2rem] border border-muted/30 shadow-2xl flex flex-col items-center text-center gap-6">
            <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 mb-2">
              <CheckCircle2 size={40} />
            </div>
            <h2 className="text-3xl font-sans font-bold text-foreground">Transmission Successful</h2>
            <p className="text-white font-mono text-sm">
              Your inquiry has been securely logged in our systems. We will establish contact shortly.
            </p>
            <Link to="/#contact" className="btn-magnetic bg-accent text-background px-8 py-3 mt-6 text-sm mb-4">
              <span>Return to Base</span>
            </Link>
            
            <div className="w-full h-px bg-muted/20 my-4"></div>
            
            <p className="text-white/60 font-mono text-xs mb-4 uppercase tracking-widest">
              Until then, follow us on:
            </p>
            <div className="flex items-center gap-4">
              <a href="/coming-soon" className="w-10 h-10 rounded-full bg-background border border-muted/50 flex items-center justify-center text-white hover:text-accent hover:border-accent hover:-translate-y-1 transition-all" aria-label="X (Twitter)">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/vaultt.studios/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-background border border-muted/50 flex items-center justify-center text-white hover:text-accent hover:border-accent hover:-translate-y-1 transition-all" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="https://www.facebook.com/vaultt.studios" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-background border border-muted/50 flex items-center justify-center text-white hover:text-accent hover:border-accent hover:-translate-y-1 transition-all" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/vaultt-studios/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-background border border-muted/50 flex items-center justify-center text-white hover:text-accent hover:border-accent hover:-translate-y-1 transition-all" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
        ) : (
          <form
            action={SCRIPT_URL}
            method="POST"
            target="hidden_iframe"
            onSubmit={handleSubmit}
            className="bg-surface p-8 lg:p-12 rounded-[2rem] border border-muted/30 shadow-2xl flex flex-col gap-6"
          >
            {status === 'error' && (
              <div className="form-element flex items-center gap-3 bg-red-500/10 text-red-500 p-4 rounded-xl text-sm font-mono border border-red-500/20">
                <AlertCircle size={20} />
                <p>{Object.keys(errors).length > 0 ? "Please correct the errors in the form." : "System error during transmission. Please try again."}</p>
              </div>
            )}

            {/* Captures exact local time of submission */}
            <input type="hidden" id="submissionTime" name="time" value="" />
            
            {/* Captures selected package - ALWAYS present so the column doesn't break */}
            <input type="hidden" id="submissionPackage" name="package" value="" />

            {/* Honeypot field - hidden from users, but bots will fill it */}
            <div style={{ display: 'none' }} aria-hidden="true">
              <input type="text" name="website" tabIndex="-1" autoComplete="off" />
            </div>

            {selectedPackage && (
              <div className="form-element bg-accent/10 border border-accent/20 text-accent px-4 py-3 rounded-xl font-mono text-sm inline-flex self-start mb-2">
                Looking for:&nbsp;<span className="font-bold">{selectedPackage}</span>
              </div>
            )}

            <div className="form-element flex flex-col gap-2">
              <label htmlFor="fullName" className="text-sm font-mono text-white uppercase tracking-wider">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                className="bg-background border border-muted/50 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-accent transition-colors font-mono text-sm"
                placeholder="Jane Doe"
                required
                readOnly={status === 'submitting'}
                onChange={() => setErrors(prev => ({ ...prev, fullName: null }))}
              />
              {errors.fullName && <span className="text-red-500 text-[10px] font-mono mt-1 uppercase">{errors.fullName[0]}</span>}
            </div>

            <div className="form-element flex flex-col gap-2">
              <label htmlFor="contactNumber" className="text-sm font-mono text-white uppercase tracking-wider">Contact Number</label>
              <input
                type="tel"
                id="contactNumber"
                name="contactNumber"
                className="bg-background border border-muted/50 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-accent transition-colors font-mono text-sm"
                placeholder="+1 (555) 000-0000"
                required
                readOnly={status === 'submitting'}
                onChange={() => setErrors(prev => ({ ...prev, contactNumber: null }))}
              />
              {errors.contactNumber && <span className="text-red-500 text-[10px] font-mono mt-1 uppercase">{errors.contactNumber[0]}</span>}
            </div>

            <div className="form-element flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-mono text-white uppercase tracking-wider">E-mail Address</label>
              <input
                type="email"
                id="email"
                name="email"
                className="bg-background border border-muted/50 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-accent transition-colors font-mono text-sm"
                placeholder="jane@example.com"
                required
                readOnly={status === 'submitting'}
                onChange={() => setErrors(prev => ({ ...prev, email: null }))}
              />
              {errors.email && <span className="text-red-500 text-[10px] font-mono mt-1 uppercase">{errors.email[0]}</span>}
            </div>

            <div className="form-element flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-mono text-white uppercase tracking-wider">Descriptive Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="bg-background border border-muted/50 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-accent transition-colors resize-none font-mono text-sm"
                placeholder="Tell us about your project, goals, and timeline..."
                required
                readOnly={status === 'submitting'}
                onChange={() => setErrors(prev => ({ ...prev, message: null }))}
              ></textarea>
              {errors.message && <span className="text-red-500 text-[10px] font-mono mt-1 uppercase">{errors.message[0]}</span>}
            </div>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="form-element btn-magnetic bg-accent text-background px-8 py-4 text-lg mt-4 w-full disabled:opacity-70 flex justify-center items-center gap-3"
            >
              {status === 'submitting' ? (
                <>
                  <Loader2 className="animate-spin" size={24} />
                  <span>Transmitting...</span>
                </>
              ) : (
                <span>Submit Request</span>
              )}
            </button>
          </form>
        )}
      </div>
    </main>
  );
};

export default ConsultationForm;
