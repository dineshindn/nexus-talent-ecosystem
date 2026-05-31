import { useState } from "react";
import { Shield, CreditCard, Truck, RotateCcw, ChevronDown, ChevronUp, Mail } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section } from "@/components/site/primitives";
import { Link } from "@tanstack/react-router";

type Group = "tos" | "payment" | "shipping" | "returns";

const groups: { id: Group; icon: typeof Shield; label: string; color: string }[] = [
  { id: "tos",      icon: Shield,     label: "Terms of Service",        color: "oklch(0.72_0.14_211)" },
  { id: "payment",  icon: CreditCard, label: "Payment Gateway Terms",   color: "oklch(0.71_0.16_162)" },
  { id: "shipping", icon: Truck,      label: "Shipping & Delivery",     color: "oklch(0.72_0.14_211)" },
  { id: "returns",  icon: RotateCcw,  label: "Return Policy",           color: "oklch(0.71_0.16_162)" },
];

const tosToc = [
  "Acceptance of Terms", "Changes to Terms", "Eligibility",
  "Account Registration", "Information You Provide", "User Conduct",
  "Job Posting & Applications", "Intellectual Property", "Privacy",
  "Disclaimers", "Limitation of Liability", "Indemnification",
  "Termination", "Governing Law", "Dispute Resolution", "Contact Information",
];
const paymentToc = [
  "Acceptance of Terms", "Payment Processing", "Authorized Use",
  "Fees & Charges", "Refunds & Disputes", "Data Security",
  "Limitation of Liability", "Indemnification", "Termination",
  "Governing Law", "Dispute Resolution",
];
const shippingToc = ["Digital Products", "Delivery Method", "Delivery Time"];
const returnsToc  = ["Digital Products", "Exceptional Circumstances", "Contact Us"];

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
  id, icon: Icon, label, color, toc, children,
}: { id: Group; icon: typeof Shield; label: string; color: string; toc: string[]; children: React.ReactNode }) {
  return (
    <div id={id} className="scroll-mt-24 rounded-3xl bg-surface border border-border p-7 lg:p-9 space-y-0">
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

export function TermsPage() {
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
            <Shield className="h-3.5 w-3.5 flex-shrink-0" style={{ color: "oklch(0.71 0.16 162)" }} />
            <span style={{ color: "oklch(0.90 0.08 162)" }}>Legal</span>
          </div>

          <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight tracking-tight">
            Terms &amp;{" "}
            <span className="text-gradient-light">Conditions</span>
          </h1>

          <p className="mt-5 text-base lg:text-lg text-white/70 max-w-xl mx-auto leading-relaxed">
            Please read these terms carefully before using G Talent Pro. By accessing our
            platform you agree to be bound by the following terms.
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
            {/* Mobile toggle */}
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
                {groups.map(({ id, icon: Icon, label, color }) => (
                  <div key={id}>
                    <a
                      href={`#${id}`}
                      className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/80 hover:text-white transition-colors"
                    >
                      <Icon className="h-3.5 w-3.5 shrink-0" style={{ color }} />
                      {label}
                    </a>
                    <ul className="mt-2 pl-5 space-y-1">
                      {(id === "tos" ? tosToc : id === "payment" ? paymentToc : id === "shipping" ? shippingToc : returnsToc)
                        .map((item, idx) => (
                          <li key={idx}>
                            <a
                              href={`#${id}-${idx + 1}`}
                              className="text-xs text-white/50 hover:text-white/80 transition-colors block py-0.5 leading-snug"
                            >
                              {idx + 1}. {item}
                            </a>
                          </li>
                        ))}
                    </ul>
                  </div>
                ))}
              </nav>
            </div>
          </aside>

          {/* ── Main Content ── */}
          <div className="lg:col-span-9 space-y-10">

            {/* Terms of Service */}
            <GroupCard id="tos" icon={Shield} label="Terms of Service" color="oklch(0.72_0.14_211)" toc={tosToc}>
              <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
                Welcome to <strong className="text-foreground">G Talent Pro</strong>. G Talent Pro is a registered trademark and the registered company name is <strong className="text-foreground">SK Labs</strong>. These Terms of Service govern your use of our website and services. By accessing or using G Talent Pro you agree to comply with these Terms.
              </p>

              <div className="space-y-0">
                <SectionBlock id="tos-1" num="1" title="Acceptance of Terms">
                  <p>By accessing and using G Talent Pro you agree to be bound by these Terms, our Privacy Policy, and all applicable laws and regulations. If you do not agree to these Terms, please do not use our services.</p>
                </SectionBlock>

                <SectionBlock id="tos-2" num="2" title="Changes to Terms">
                  <p>We reserve the right to modify these Terms at any time. We will notify you of significant changes by posting a notice on our website or sending an email to the address associated with your account. Your continued use of the website after changes are made constitutes your acceptance of the new Terms.</p>
                </SectionBlock>

                <SectionBlock id="tos-3" num="3" title="Eligibility">
                  <p>To use G Talent Pro Jobs, you must be at least 18 years old or the age of majority in your jurisdiction. By using our services, you represent and warrant that you meet these requirements.</p>
                  <p>If you're a school student, you are allowed to create your profile for any education-related project and apply for approved short-term learning on technologies with our own learning modules or through our Training partners. The registration for students on career assessment tests or counselling is applicable and eligible for students above 10 years.</p>
                </SectionBlock>

                <SectionBlock id="tos-4" num="4" title="Account Registration">
                  <p>To access certain features of our website, you may need to register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete. You are responsible for safeguarding your password and for all activities that occur under your account.</p>
                </SectionBlock>

                <SectionBlock id="tos-5" num="5" title="Information You Provide Voluntarily">
                  <p>As a job search portal, certain parts of our website may ask you to voluntarily provide personal information related to your career. G Talent Pro is a modern career platform designed to help you achieve your dream job and address unemployment. We may ask you to provide contact details, work experience, and other career-related information as part of your online profile.</p>
                  <p>Our platform does not require any financial information. Your profile is stored to facilitate connections with various employers for better opportunities. You have full transparency and control over who accesses your profile. The profile you create acts as your global profile to search for opportunities nationally.</p>
                  <p className="font-medium text-foreground">Important notice regarding payments:</p>
                  <p>Do not make any offline payments to representatives through any means. Our paid services are only offered through a subscription model. The company is not responsible for any offline payments made to individuals. We maintain a high level of transparency, displaying all your transactions in your profile.</p>
                </SectionBlock>

                <SectionBlock id="tos-6" num="6" title="User Conduct">
                  <p>You agree not to:</p>
                  <BulletList items={[
                    "Use our services for any unlawful purpose.",
                    "Impersonate any person or entity, or falsely state your affiliation.",
                    "Post, upload, or distribute any content that is offensive, defamatory, obscene, or otherwise objectionable.",
                    "Use any automated system, including 'robots,' 'spiders,' or 'offline readers,' to access our services.",
                    "Attempt to interfere with, compromise the system integrity or security.",
                    "Collect or harvest any personally identifiable information, including account names, from the website.",
                  ]} />
                </SectionBlock>

                <SectionBlock id="tos-7" num="7" title="Job Posting & Applications">
                  <p>Employers and job seekers must adhere to the following guidelines:</p>
                  <BulletList items={[
                    "Job postings must be accurate and not misleading.",
                    "Employers must not discriminate based on race, gender, religion, age, or any other protected characteristic.",
                    "Job seekers must provide truthful and accurate information in their profiles and applications.",
                  ]} />
                </SectionBlock>

                <SectionBlock id="tos-8" num="8" title="Intellectual Property">
                  <p>All content on G Talent Pro including text, graphics, logos, images, and software, is the property of G Talent Pro or its content suppliers and is protected by international copyright laws. You may not reproduce, distribute, or create derivative works from this content without our express written permission.</p>
                </SectionBlock>

                <SectionBlock id="tos-9" num="9" title="Privacy">
                  <p>Your use of our services is also governed by our{" "}
                    <Link to="/privacy" className="underline text-[oklch(0.72_0.14_211)] hover:text-[oklch(0.80_0.12_211)] transition-colors">
                      Privacy Policy
                    </Link>
                    . By using G Talent Pro you consent to the practices described in the Privacy Policy.
                  </p>
                </SectionBlock>

                <SectionBlock id="tos-10" num="10" title="Disclaimers">
                  <p>Our services are provided "as is" without warranties of any kind, either express or implied. We do not warrant that the services will be uninterrupted or error-free, and we will not be liable for any interruptions or errors.</p>
                </SectionBlock>

                <SectionBlock id="tos-11" num="11" title="Limitation of Liability">
                  <p>In no event shall G Talent Pro, its directors, employees, or agents be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your use of our services.</p>
                </SectionBlock>

                <SectionBlock id="tos-12" num="12" title="Indemnification">
                  <p>You agree to indemnify and hold harmless G Talent Pro, its affiliates, and their respective officers, directors, employees, and agents from any claims, liabilities, damages, losses, and expenses, including without limitation reasonable attorney's fees, arising out of or in connection with your use of our services or violation of these Terms.</p>
                </SectionBlock>

                <SectionBlock id="tos-13" num="13" title="Termination">
                  <p>We may terminate or suspend your account and access to our services at our sole discretion, without prior notice or liability, for any reason, including but not limited to a breach of these Terms.</p>
                </SectionBlock>

                <SectionBlock id="tos-14" num="14" title="Governing Law">
                  <p>These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law principles.</p>
                </SectionBlock>

                <SectionBlock id="tos-15" num="15" title="Dispute Resolution">
                  <p>Any disputes arising out of or relating to these Terms or our services shall be resolved through binding arbitration, and judgment on the award rendered by the arbitrator may be entered in any court having jurisdiction thereof.</p>
                </SectionBlock>

                <SectionBlock id="tos-16" num="16" title="Contact Information">
                  <p>If you have any questions about these Terms, please contact us at{" "}
                    <a href="mailto:info@gtalentpro.com" className="text-[oklch(0.72_0.14_211)] hover:underline">
                      info@gtalentpro.com
                    </a>.
                  </p>
                </SectionBlock>
              </div>
            </GroupCard>

            {/* Payment Gateway Terms */}
            <GroupCard id="payment" icon={CreditCard} label="Payment Gateway Terms" color="oklch(0.71_0.16_162)" toc={paymentToc}>
              <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
                By using the payment gateway services on G Talent Pro, you agree to comply with these Terms of Service. G Talent Pro is a registered trademark and the registered company name is <strong className="text-foreground">SK Labs</strong>.
              </p>

              <div className="space-y-0">
                <SectionBlock id="payment-1" num="1" title="Acceptance of Terms">
                  <p>By using the payment gateway services on G Talent Pro, you agree to comply with these Terms of Service. If you do not agree to these Terms, please do not use our payment services.</p>
                </SectionBlock>

                <SectionBlock id="payment-2" num="2" title="Payment Processing">
                  <p>We use third-party payment processors to handle financial transactions on our website. By submitting your payment information, you grant us the right to provide this information to these third parties for the purpose of completing transactions.</p>
                </SectionBlock>

                <SectionBlock id="payment-3" num="3" title="Authorized Use">
                  <p>You agree to use our payment services only for lawful purposes. You agree not to use our services:</p>
                  <BulletList items={[
                    "For any fraudulent or illegal activities.",
                    "To impersonate any person or entity.",
                    "To interfere with or disrupt the integrity or performance of the payment gateway.",
                  ]} />
                </SectionBlock>

                <SectionBlock id="payment-4" num="4" title="Fees & Charges">
                  <p>All fees and charges associated with your transactions will be clearly stated at the point of sale. You agree to pay all fees and charges incurred, including any applicable taxes.</p>
                </SectionBlock>

                <SectionBlock id="payment-5" num="5" title="Refunds & Disputes">
                  <p>G Talent Pro is responsible only after the successful transaction of any paid services. If the transaction failed and was not processed completely due to the third-party gateway, the respective provider is responsible. Refund policies will be determined by the specific service or product provider.</p>
                  <p>If you have any disputes regarding a transaction, you should contact the provider directly. We are not responsible for resolving disputes between you and the provider.</p>
                </SectionBlock>

                <SectionBlock id="payment-6" num="6" title="Data Security">
                  <p>We implement appropriate technical and organizational measures to protect your payment information. However, you acknowledge that no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.</p>
                </SectionBlock>

                <SectionBlock id="payment-7" num="7" title="Limitation of Liability">
                  <p>To the maximum extent permitted by law, G Talent Pro and its affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues resulting from your use or inability to use our payment services.</p>
                </SectionBlock>

                <SectionBlock id="payment-8" num="8" title="Indemnification">
                  <p>You agree to indemnify and hold harmless G Talent Pro, its affiliates, and their respective officers, directors, employees, and agents from any claims, liabilities, damages, losses, and expenses arising out of or in connection with your use of our payment services or violation of these Terms.</p>
                </SectionBlock>

                <SectionBlock id="payment-9" num="9" title="Termination">
                  <p>We may terminate or suspend your access to our payment services at our sole discretion, without prior notice or liability, for any reason, including but not limited to a breach of these Terms.</p>
                </SectionBlock>

                <SectionBlock id="payment-10" num="10" title="Governing Law">
                  <p>These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law principles.</p>
                </SectionBlock>

                <SectionBlock id="payment-11" num="11" title="Dispute Resolution">
                  <p>Any disputes arising out of or relating to these Terms or our payment services shall be resolved through binding arbitration, and judgment on the award rendered by the arbitrator may be entered in any court having jurisdiction thereof.</p>
                </SectionBlock>
              </div>
            </GroupCard>

            {/* Shipping & Delivery */}
            <GroupCard id="shipping" icon={Truck} label="Shipping & Delivery" color="oklch(0.72_0.14_211)" toc={shippingToc}>
              <div className="space-y-0">
                <SectionBlock id="shipping-1" num="1" title="Digital Products">
                  <p>All resume templates and upskilling courses are delivered digitally. Upon successful payment, users will receive access to the purchased content immediately.</p>
                </SectionBlock>

                <SectionBlock id="shipping-2" num="2" title="Delivery Method">
                  <p>Access to digital products will be provided through the Platform. Users can download resume templates and access course materials from their accounts.</p>
                </SectionBlock>

                <SectionBlock id="shipping-3" num="3" title="Delivery Time">
                  <p>Digital products are available for access immediately upon payment confirmation. There are no shipping times as all products are delivered electronically.</p>
                </SectionBlock>
              </div>
            </GroupCard>

            {/* Return Policy */}
            <GroupCard id="returns" icon={RotateCcw} label="Return Policy" color="oklch(0.71_0.16_162)" toc={returnsToc}>
              <div className="space-y-0">
                <SectionBlock id="returns-1" num="1" title="Digital Products">
                  <p>Due to the nature of digital products, we do not offer refunds once the product has been accessed or downloaded. Please ensure that the product meets your needs before making a purchase.</p>
                </SectionBlock>

                <SectionBlock id="returns-2" num="2" title="Exceptional Circumstances">
                  <p>In exceptional circumstances, such as a technical error on our part, we may consider refund requests. Please contact our support team within 14 days of purchase for assistance.</p>
                </SectionBlock>

                <SectionBlock id="returns-3" num="3" title="Contact Us">
                  <p>For any issues or questions regarding our shipping and delivery or return policy, please contact us at:</p>
                  <div className="flex flex-col gap-1 mt-2">
                    <span>Email: <a href="mailto:info@gtalentpro.com" className="text-[oklch(0.72_0.14_211)] hover:underline">info@gtalentpro.com</a></span>
                    <span>Web: <a href="https://gtalentpro.com" className="text-[oklch(0.72_0.14_211)] hover:underline">gtalentpro.com</a></span>
                    <span>Contact: <Link to="/contact" className="text-[oklch(0.72_0.14_211)] hover:underline">Contact Us page</Link></span>
                  </div>
                </SectionBlock>
              </div>
            </GroupCard>

            {/* Contact CTA */}
            <div className="rounded-3xl gradient-hero-bg text-white p-8 lg:p-10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="h-12 w-12 shrink-0 rounded-2xl flex items-center justify-center" style={{ background: "oklch(1 0 0 / 0.15)" }}>
                <Mail className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold">Have questions about these terms?</h3>
                <p className="mt-1 text-sm text-white/75">
                  Our team is happy to clarify anything. Reach out at{" "}
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
