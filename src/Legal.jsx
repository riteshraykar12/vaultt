import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const PrivacyPolicy = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-background relative selection:bg-accent selection:text-background py-20 px-6">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <Link to="/" className="inline-flex items-center gap-2 text-white hover:text-foreground transition-colors mb-12 text-sm font-mono">
          <ArrowLeft size={16} />
          RETURN TO BASE
        </Link>
        
        <h1 className="text-4xl lg:text-6xl font-sans font-bold text-foreground leading-tight mb-8">
          Privacy <span className="font-drama italic text-accent font-light">Policy.</span>
        </h1>
        
        <div className="bg-surface p-8 lg:p-12 rounded-[2rem] border border-muted/30 shadow-2xl text-white/80 space-y-8 font-mono text-sm leading-relaxed">
          <p className="font-bold text-white">Last Updated: April 2026</p>
          
          <section>
            <h2 className="text-xl font-sans font-bold text-foreground mb-4">1. Introduction</h2>
            <p>
              Welcome to vaultt. studios ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy governs the manner in which we collect, use, maintain, and disclose information collected from users of our website and services.
            </p>
            <p className="mt-4">
              This policy is designed to comply with the stringent requirements of the Indian Information Technology Act, 2000, the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, and the European Union's General Data Protection Regulation (GDPR). By accessing our digital infrastructure, you consent to the data practices described in this document.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-sans font-bold text-foreground mb-4">2. Telemetry & Data Collection</h2>
            <p>We collect information that you voluntarily provide to us when expressing an interest in obtaining information about us or our products and services. The personal information that we collect depends on the context of your interactions with us and the choices you make.</p>
            <ul className="list-disc pl-5 mt-4 space-y-2">
              <li><strong>Personal Identifiable Information (PII):</strong> Full name, email address, phone number, and physical coordinates.</li>
              <li><strong>Automated Telemetry:</strong> We automatically collect certain information when you visit, use, or navigate our platform. This includes device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, and geographical location.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-sans font-bold text-foreground mb-4">3. Utilization of Information</h2>
            <p>We process your information for purposes based on legitimate business interests, the fulfillment of our contract with you, compliance with our legal obligations, and/or your consent. Specifically, we use the collected data to:</p>
            <ul className="list-disc pl-5 mt-4 space-y-2">
              <li>Facilitate account creation and logon processes.</li>
              <li>Fulfill and manage your orders, requests, and digital agency services.</li>
              <li>Send administrative information, technical notices, and security alerts.</li>
              <li>Protect our services and infrastructure from malicious actors.</li>
              <li>Analyze usage trends to improve our platform's user experience.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-sans font-bold text-foreground mb-4">4. GDPR Compliance & European Rights</h2>
            <p>If you are a resident of the European Economic Area (EEA), you possess specific data protection rights under the GDPR. vaultt. studios ensures that:</p>
            <ul className="list-disc pl-5 mt-4 space-y-2">
              <li><strong>Right to Access:</strong> You can request copies of your personal data.</li>
              <li><strong>Right to Rectification:</strong> You can request that we correct any information you believe is inaccurate.</li>
              <li><strong>Right to Erasure (Right to be Forgotten):</strong> You have the right to request that we erase your personal data under certain conditions.</li>
              <li><strong>Right to Restrict Processing:</strong> You have the right to request that we restrict the processing of your personal data.</li>
              <li><strong>Right to Data Portability:</strong> You have the right to request the transfer of your data to another organization.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-sans font-bold text-foreground mb-4">5. Compliance with Indian IT Laws</h2>
            <p>In accordance with the IT Act, 2000 and the SPDI Rules, 2011, vaultt. studios implements comprehensive, reasonable security practices and procedures to protect sensitive personal data. We ensure that:</p>
            <ul className="list-disc pl-5 mt-4 space-y-2">
              <li>Data is collected for a lawful purpose connected with a function or activity of our agency.</li>
              <li>Users have the right to review the information they have provided and ensure that any personal information or sensitive personal data found to be inaccurate is corrected.</li>
              <li>Users have the option to withdraw their consent at any time in writing.</li>
              <li>Grievances and discrepancies regarding processing of information will be addressed in a timely manner by our designated Grievance Officer.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-sans font-bold text-foreground mb-4">6. Information Disclosure & Sharing</h2>
            <p>We do not sell, trade, or rent your personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information with our business partners, trusted affiliates, and advertisers. We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process.</p>
          </section>

          <section>
            <h2 className="text-xl font-sans font-bold text-foreground mb-4">7. Security Protocols</h2>
            <p>We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure. Although we will do our best to protect your personal information, transmission of personal information to and from our services is at your own risk. You should only access the services within a secure environment.</p>
          </section>

          <section>
            <h2 className="text-xl font-sans font-bold text-foreground mb-4">8. Cookies and Tracking Technologies</h2>
            <p>We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our operational policies.</p>
          </section>

          <section>
            <h2 className="text-xl font-sans font-bold text-foreground mb-4">9. Contact Coordinates</h2>
            <p>If you have questions or comments about this policy, or if you wish to exercise your legal rights regarding your data, you may email our Data Protection Officer at:</p>
            <div className="mt-4 bg-background p-6 rounded-xl border border-muted/50 inline-block text-white">
              <p><strong>vaultt. studios</strong></p>
              <p>Thane, Mumbai, Maharashtra, India</p>
              <p className="mt-2">Email: <a href="mailto:contact@vaultt-agency.com" className="text-accent hover:underline">contact@vaultt-agency.com</a></p>
              <p>Phone: <a href="tel:+918928787548" className="text-accent hover:underline">+91 89287 87548</a></p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
