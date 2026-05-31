import { useState } from "react";
import { Eye, CreditCard, ChevronDown, ChevronUp, Mail } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section } from "@/components/site/primitives";
import { Link } from "@tanstack/react-router";

function SectionBlock({
  id, num, title, children,
}: { id: string; num: string; title: string; children: React.ReactNode }) {
  return (
    <div id={id} className="scroll-mt-28 pt-6 first:pt-0">
      <div className="flex items-start gap-4">
        <span
          className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[11px] font-extrabold text-white"
          style={{ background: "linear-gradient(135deg, oklch(0.55 0.22 264), oklch(0.72 0.14 211))" }}
        >
          {num}
        </span>
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-bold">{title}</h3>
          <div className="mt-3 text-sm text-muted-foreground leading-relaxed space-y-3">
            {children}
          </div>
        </div>
      </div>
      <div className="mt-6 border-b border-border" />
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-1.5 pl-1">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: "oklch(0.72 0.14 211)" }} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function GroupCard({
  id, icon: Icon, label, color, children,
}: { id: string; icon: typeof Eye; label: string; color: string; children: React.ReactNode }) {
  return (
    <div id={id} className="scroll-mt-24 rounded-3xl bg-surface border border-border p-7 lg:p-9">
      <div className="flex items-center gap-3 mb-8">
        <div
          className="h-10 w-10 rounded-2xl flex items-center justify-center shadow-[var(--shadow-glow)]"
          style={{ background: `linear-gradient(135deg, oklch(0.55 0.22 264), ${color})` }}
        >
          <Icon className="h-5 w-5 text-white" />
        </div>
        <h2 className="text-2xl font-extrabold">{label}</h2>
      </div>
      {children}
    </div>
  );
}

const privacyToc = [
  "Information We Collect",
  "How We Use Your Information",
  "How We Share Your Information",
  "Cookies & Tracking Technologies",
  "Data Security",
  "Data Retention",
  "Your Rights",
  "International Data Transfers",
  "Third-Party Links",
  "Changes to This Policy",
  "Contact Us",
];

const paymentPrivacyToc = [
  "Payment Data Collection",
  "Use of Payment Data",
  "Security of Payment Data",
  "Third-Party Processors",
  "Your Rights",
];

export function PrivacyPage() {
  const [tocOpen, setTocOpen] = useState(false);

  return (
    <SiteLayout>

      {/* ── Hero Banner ── */}
      <section className="relative overflow-hidden gradient-deep-bg text-white">
        <div className="absolute inset-0 grid-overlay opacity-20" />
        <div className="blob top-0 -left-40 h-[500px] w-[500px] bg-[oklch(0.55_0.22_264)] opacity-30" />
        <div className="blob bottom-0 -right-40 h-[500px] w-[500px] bg-[oklch(0.72_0.14_211)] opacity-25" />

        <div className="relative mx-auto max-w-4xl px-6 lg:px-8 pt-32 pb-24 text-center">
          <div
            className="inline-flex items-center gap-2 rounded-full text-xs font-semibold mb-7 px-4 py-2"
            style={{ background: "oklch(1 0 0 / 0.10)", border: "1px solid oklch(1 0 0 / 0.22)", backdropFilter: "blur(12px)" }}
          >
            <Eye className="h-3.5 w-3.5 flex-shrink-0" style={{ color: "oklch(0.71 0.16 162)" }} />
            <span style={{ color: "oklch(0.90 0.08 162)" }}>Legal</span>
          </div>

          <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight tracking-tight">
            Privacy{" "}
            <span className="text-gradient-light">Policy</span>
          </h1>

          <p className="mt-5 text-base lg:text-lg text-white/70 max-w-xl mx-auto leading-relaxed">
            We value your privacy and are committed to protecting your personal information.
            This policy explains how we collect, use, and safeguard your data.
          </p>

          <div className="mt-6 inline-flex items-center gap-2 text-xs text-white/50">
            <span className="h-1 w-4 rounded-full" style={{ background: "oklch(0.72 0.14 211)" }} />
            Effective date: May 2026 · Registered Company: SK Labs
          </div>
        </div>

        <div className="absolute bottom-0 inset-x-0 h-16 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, transparent, oklch(var(--background)))" }} />
      </section>

      {/* ── Content ── */}
      <Section className="py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-12">

          {/* ── Sidebar TOC ── */}
          <aside className="lg:col-span-3">
            <button
              className="lg:hidden w-full flex items-center justify-between rounded-2xl glass px-5 py-4 text-sm font-semibold mb-4"
              onClick={() => setTocOpen(o => !o)}
            >
              Table of Contents
              {tocOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </button>

            <div className={`glass rounded-2xl p-6 lg:sticky lg:top-28 ${tocOpen ? "block" : "hidden lg:block"}`}>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gradient-light mb-5">Contents</p>
              <nav className="space-y-5">
                <div>
                  <a href="#privacy" className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/80 hover:text-white transition-colors">
                    <Eye className="h-3.5 w-3.5 shrink-0" style={{ color: "oklch(0.72 0.14 211)" }} />
                    Privacy Policy
                  </a>
                  <ul className="mt-2 pl-5 space-y-1">
                    {privacyToc.map((item, idx) => (
                      <li key={idx}>
                        <a
                          href={`#privacy-${idx + 1}`}
                          className="text-xs text-white/50 hover:text-white/80 transition-colors block py-0.5 leading-snug"
                        >
                          {idx + 1}. {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <a href="#payment-privacy" className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/80 hover:text-white transition-colors">
                    <CreditCard className="h-3.5 w-3.5 shrink-0" style={{ color: "oklch(0.71 0.16 162)" }} />
                    Payment Privacy
                  </a>
                  <ul className="mt-2 pl-5 space-y-1">
                    {paymentPrivacyToc.map((item, idx) => (
                      <li key={idx}>
                        <a
                          href={`#payment-privacy-${idx + 1}`}
                          className="text-xs text-white/50 hover:text-white/80 transition-colors block py-0.5 leading-snug"
                        >
                          {idx + 1}. {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </nav>
            </div>
          </aside>

          {/* ── Main Content ── */}
          <div className="lg:col-span-9 space-y-10">

            {/* Privacy Policy */}
            <GroupCard id="privacy" icon={Eye} label="Privacy Policy" color="oklch(0.72_0.14_211)">
              <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
                Welcome to <strong className="text-foreground">G Talent Pro</strong>. We value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.
              </p>

              <div className="space-y-0">
                <SectionBlock id="privacy-1" num="1" title="Information We Collect">
                  <p className="font-medium text-foreground">1.1 Personal Information</p>
                  <p>We may collect personal information that you provide to us, including but not limited to:</p>
                  <BulletList items={[
                    "Name", "Email address", "Phone number", "Address", "Date of birth",
                    "Educational background", "Employment history", "Resume or CV", "Job preferences",
                  ]} />
                  <p className="font-medium text-foreground pt-2">1.2 Non-Personal Information</p>
                  <p>We may collect non-personal information about you when you interact with our website, including:</p>
                  <BulletList items={[
                    "IP address", "Browser type", "Operating system", "Referring URLs",
                    "Pages viewed", "Time spent on pages", "Cookies and similar tracking technologies",
                  ]} />
                </SectionBlock>

                <SectionBlock id="privacy-2" num="2" title="How We Use Your Information">
                  <p>We may use the information we collect for various purposes, including:</p>
                  <BulletList items={[
                    "To provide, operate, and maintain our website and services.",
                    "To process and manage your account and job applications.",
                    "To communicate with you, including sending job alerts and updates.",
                    "To improve our website and services based on user feedback.",
                    "To personalize your experience on our website.",
                    "To analyze trends and gather statistical data.",
                    "To comply with legal obligations and protect our rights.",
                  ]} />
                </SectionBlock>

                <SectionBlock id="privacy-3" num="3" title="How We Share Your Information">
                  <p>We may share your information in the following circumstances:</p>
                  <BulletList items={[
                    "With Employers: We share your resume and application details with employers when you apply for a job through our portal.",
                    "With Campus: If you register as a student during your college graduation, your details will be visible to the placement cell for placement opportunities. After you complete your college, access to your profile will be limited to the campus placement cell.",
                    "With Service Providers: We share information with third-party service providers who perform services on our behalf, including analytics and customer support, under NDA. All these providers focus solely on job and skill development services.",
                    "For Legal Reasons: We may disclose your information if required by law or in response to valid legal requests by public authorities.",
                    "With Your Consent: We may share your information with third parties if you give us explicit consent to do so.",
                  ]} />
                </SectionBlock>

                <SectionBlock id="privacy-4" num="4" title="Cookies & Tracking Technologies">
                  <p>We use cookies and similar tracking technologies to enhance your experience on our website. Cookies are small data files that are stored on your device. You can control the use of cookies through your browser settings.</p>
                </SectionBlock>

                <SectionBlock id="privacy-5" num="5" title="Data Security">
                  <p>We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.</p>
                </SectionBlock>

                <SectionBlock id="privacy-6" num="6" title="Data Retention">
                  <p>We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.</p>
                </SectionBlock>

                <SectionBlock id="privacy-7" num="7" title="Your Rights">
                  <p>Depending on your location, you may have the following rights regarding your personal information:</p>
                  <BulletList items={[
                    "Access: You have the right to request access to your personal information that we hold.",
                    "Correction: You have the right to request correction of any inaccurate or incomplete information.",
                    "Deletion: You have the right to request deletion of your personal information, subject to certain exceptions.",
                    "Objection: You have the right to object to the processing of your personal information.",
                    "Restriction: You have the right to request restriction of processing of your personal information.",
                    "Portability: You have the right to request the transfer of your personal information to another organization.",
                  ]} />
                  <p>To exercise these rights, please contact us at <a href="mailto:info@gtalentpro.com" className="text-[oklch(0.72_0.14_211)] hover:underline">info@gtalentpro.com</a>.</p>
                </SectionBlock>

                <SectionBlock id="privacy-8" num="8" title="International Data Transfers">
                  <p>We may transfer your personal information to countries outside your own, including to servers and databases located in other countries. These countries may have different data protection laws than your own. By using our services, you consent to the transfer of your information to countries outside your country of residence.</p>
                </SectionBlock>

                <SectionBlock id="privacy-9" num="9" title="Third-Party Links">
                  <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these websites. We encourage you to read the privacy policies of any third-party websites you visit.</p>
                </SectionBlock>

                <SectionBlock id="privacy-10" num="10" title="Changes to This Policy">
                  <p>We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new Privacy Policy on our website and updating the effective date. Your continued use of our services after changes are made constitutes your acceptance of the new Privacy Policy.</p>
                </SectionBlock>

                <SectionBlock id="privacy-11" num="11" title="Contact Us">
                  <p>If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
                  <div className="flex flex-col gap-1 mt-2">
                    <span>Email: <a href="mailto:info@gtalentpro.com" className="text-[oklch(0.72_0.14_211)] hover:underline">info@gtalentpro.com</a></span>
                    <span>Web: <a href="https://gtalentpro.com" className="text-[oklch(0.72_0.14_211)] hover:underline">gtalentpro.com</a></span>
                    <span>Contact: <Link to="/contact" className="text-[oklch(0.72_0.14_211)] hover:underline">Contact Us page</Link></span>
                  </div>
                </SectionBlock>
              </div>
            </GroupCard>

            {/* Payment Gateway Privacy */}
            <GroupCard id="payment-privacy" icon={CreditCard} label="Payment Gateway Privacy Policy" color="oklch(0.71_0.16_162)">
              <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
                This section describes how we handle personal and financial data specifically in connection with payment processing on G Talent Pro.
              </p>

              <div className="space-y-0">
                <SectionBlock id="payment-privacy-1" num="1" title="Payment Data Collection">
                  <p>When you make a payment on G Talent Pro, we collect only the information necessary to process your transaction. We do not store your full card details on our servers — all sensitive payment data is handled directly by our third-party payment processors.</p>
                </SectionBlock>

                <SectionBlock id="payment-privacy-2" num="2" title="Use of Payment Data">
                  <p>Payment information is used solely to:</p>
                  <BulletList items={[
                    "Process and confirm your transactions.",
                    "Issue receipts and maintain billing records.",
                    "Comply with financial regulations and tax obligations.",
                    "Detect and prevent fraud.",
                  ]} />
                </SectionBlock>

                <SectionBlock id="payment-privacy-3" num="3" title="Security of Payment Data">
                  <p>We implement appropriate technical and organizational measures to protect your payment information. However, you acknowledge that no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.</p>
                </SectionBlock>

                <SectionBlock id="payment-privacy-4" num="4" title="Third-Party Processors">
                  <p>We use third-party payment processors to handle financial transactions. These processors are bound by their own privacy policies and security standards. We encourage you to review their policies. We only share your payment information with these processors to the extent necessary to complete your transaction.</p>
                </SectionBlock>

                <SectionBlock id="payment-privacy-5" num="5" title="Your Rights">
                  <p>You have the right to request access to, correction of, or deletion of any payment-related personal data we hold about you, subject to applicable law. To exercise these rights, contact us at <a href="mailto:info@gtalentpro.com" className="text-[oklch(0.72_0.14_211)] hover:underline">info@gtalentpro.com</a>.</p>
                </SectionBlock>
              </div>
            </GroupCard>

            {/* Contact CTA */}
            <div className="rounded-3xl gradient-hero-bg text-white p-8 lg:p-10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="h-12 w-12 shrink-0 rounded-2xl flex items-center justify-center" style={{ background: "oklch(1 0 0 / 0.15)" }}>
                <Mail className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold">Questions about your privacy?</h3>
                <p className="mt-1 text-sm text-white/75">
                  We take your privacy seriously. Reach us at{" "}
                  <a href="mailto:info@gtalentpro.com" className="underline text-white hover:text-white/90">
                    info@gtalentpro.com
                  </a>{" "}
                  or visit our{" "}
                  <Link to="/contact" className="underline text-white hover:text-white/90">Contact page</Link>.
                </p>
              </div>
            </div>

          </div>
        </div>
      </Section>

    </SiteLayout>
  );
}
