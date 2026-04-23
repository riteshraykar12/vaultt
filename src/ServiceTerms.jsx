import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const ServiceTerms = () => {
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
          Terms of <span className="font-drama italic text-accent font-light">Service.</span>
        </h1>
        
        <div className="bg-surface p-8 lg:p-12 rounded-[2rem] border border-muted/30 shadow-2xl text-white/80 space-y-8 font-mono text-sm leading-relaxed">
          <p className="font-bold text-white">Last Updated: April 2026</p>
          
          <section>
            <h2 className="text-xl font-sans font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
            <p>
              These Terms of Service ("Terms") constitute a legally binding agreement between you ("Client," "you," or "your") and vaultt. studios ("Company," "we," "our," or "us"), a digital agency registered and operating under the laws of India. By accessing our website, engaging our services, or entering into any contractual agreement with us, you acknowledge that you have read, understood, and agree to be bound by these Terms in their entirety.
            </p>
            <p className="mt-4">
              If you do not agree with any provision of these Terms, you must discontinue use of our website and services immediately. We reserve the right to modify these Terms at any time, and such modifications shall be effective immediately upon posting. Your continued use of our services constitutes acceptance of the revised Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-sans font-bold text-foreground mb-4">2. Scope of Services</h2>
            <p>vaultt. studios provides digital agency services including, but not limited to, website development, social media management, content creation, AI automation integration, search engine optimization, and digital marketing strategy. The specific scope, deliverables, timelines, and fees for any engagement shall be defined in a separate Statement of Work (SOW) or Service Agreement mutually agreed upon by both parties.</p>
            <p className="mt-4">We reserve the right to subcontract or delegate portions of the work to qualified third-party professionals or partners, provided that the quality and confidentiality standards outlined herein are maintained at all times.</p>
          </section>

          <section>
            <h2 className="text-xl font-sans font-bold text-foreground mb-4">3. Client Obligations</h2>
            <p>The Client agrees to:</p>
            <ul className="list-disc pl-5 mt-4 space-y-2">
              <li>Provide accurate, complete, and timely information, materials, and feedback necessary for the successful execution of the project.</li>
              <li>Ensure that all content, data, trademarks, and materials provided to vaultt. studios do not infringe upon any third-party intellectual property rights.</li>
              <li>Adhere to the agreed-upon payment schedule as outlined in the respective SOW or invoice.</li>
              <li>Designate a single point of contact authorized to provide approvals and make decisions on behalf of the Client's organization.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-sans font-bold text-foreground mb-4">4. Payment Terms</h2>
            <p>All fees for services rendered shall be as specified in the applicable SOW or proposal. Unless otherwise agreed upon in writing:</p>
            <ul className="list-disc pl-5 mt-4 space-y-2">
              <li>An advance payment of 50% of the total project value is required before commencement of work.</li>
              <li>The remaining balance shall be payable upon project completion and prior to final delivery of assets.</li>
              <li>Invoices not settled within 15 calendar days of issuance may be subject to a late fee of 1.5% per month on the outstanding balance.</li>
              <li>All prices are quoted in Indian Rupees (INR) unless explicitly stated otherwise, and are exclusive of applicable taxes including GST.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-sans font-bold text-foreground mb-4">5. Intellectual Property</h2>
            <p>Upon receipt of full and final payment, all original work product created specifically for the Client under a signed SOW shall be assigned to the Client. vaultt. studios retains the right to utilize generic frameworks, templates, code libraries, and methodologies developed independently or prior to the engagement. We further reserve the right to showcase completed projects in our portfolio and marketing materials unless a written non-disclosure agreement (NDA) specifies otherwise.</p>
          </section>

          <section>
            <h2 className="text-xl font-sans font-bold text-foreground mb-4">6. Confidentiality</h2>
            <p>Both parties agree to maintain the confidentiality of all proprietary information, trade secrets, business strategies, and sensitive data exchanged during the course of the engagement. This obligation shall survive the termination of the business relationship for a period of two (2) years. Confidential information shall not include any information that is publicly available, independently developed, or lawfully obtained from a third party.</p>
          </section>

          <section>
            <h2 className="text-xl font-sans font-bold text-foreground mb-4">7. Limitation of Liability</h2>
            <p>To the maximum extent permitted by applicable law, vaultt. studios shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or in connection with the services provided, including but not limited to loss of profits, data, business opportunities, or goodwill. Our total cumulative liability for any claims arising under these Terms shall not exceed the total fees paid by the Client for the specific service giving rise to such claim.</p>
          </section>

          <section>
            <h2 className="text-xl font-sans font-bold text-foreground mb-4">8. Termination</h2>
            <p>Either party may terminate a service engagement by providing thirty (30) days' written notice. In the event of early termination by the Client, the Client shall be responsible for payment of all work completed up to the date of termination, along with any non-recoverable third-party costs incurred. vaultt. studios reserves the right to terminate services immediately if the Client breaches any material provision of these Terms or the applicable SOW.</p>
          </section>

          <section>
            <h2 className="text-xl font-sans font-bold text-foreground mb-4">9. Governing Law & Dispute Resolution</h2>
            <p>These Terms shall be governed by and construed in accordance with the laws of India, specifically the Indian Contract Act, 1872, and the Information Technology Act, 2000. Any dispute arising out of or in connection with these Terms shall first be attempted to be resolved through good-faith negotiation. If unresolved within thirty (30) days, the dispute shall be referred to binding arbitration in Mumbai, Maharashtra, in accordance with the Arbitration and Conciliation Act, 1996. The language of arbitration shall be English.</p>
          </section>

          <section>
            <h2 className="text-xl font-sans font-bold text-foreground mb-4">10. Contact Information</h2>
            <p>For any questions, concerns, or notices relating to these Terms, please contact us at:</p>
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

export default ServiceTerms;
