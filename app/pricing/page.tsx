"use client";

import { useState } from "react";
import Link from "next/link";

// Navigation Component
function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                ISSA
              </span>
              <span className="text-white"> Compass</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/#visas" className="text-gray-300 hover:text-white transition-colors">
              Visas
            </Link>
            <Link href="/#features" className="text-gray-300 hover:text-white transition-colors">
              Features
            </Link>
            <Link href="/pricing" className="text-purple-400 font-medium">
              Pricing
            </Link>
            <Link href="/#about" className="text-gray-300 hover:text-white transition-colors">
              About
            </Link>
            <Link
              href="/#contact"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg shadow-purple-500/25"
            >
              Get Started
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col space-y-4">
              <Link href="/#visas" className="text-gray-300 hover:text-white transition-colors">
                Visas
              </Link>
              <Link href="/#features" className="text-gray-300 hover:text-white transition-colors">
                Features
              </Link>
              <Link href="/pricing" className="text-purple-400 font-medium">
                Pricing
              </Link>
              <Link href="/#about" className="text-gray-300 hover:text-white transition-colors">
                About
              </Link>
              <Link
                href="/#contact"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-center hover:from-purple-600 hover:to-pink-600 transition-all"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

// Pricing Toggle
function PricingToggle({ isAnnual, setIsAnnual }: { isAnnual: boolean; setIsAnnual: (value: boolean) => void }) {
  return (
    <div className="flex items-center justify-center space-x-4 mb-12">
      <span className={`text-lg ${!isAnnual ? "text-white font-semibold" : "text-gray-500"}`}>
        Standard
      </span>
      <button
        onClick={() => setIsAnnual(!isAnnual)}
        className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${
          isAnnual ? "bg-gradient-to-r from-purple-500 to-pink-500" : "bg-white/20"
        }`}
      >
        <span
          className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
            isAnnual ? "translate-x-7" : "translate-x-1"
          }`}
        />
      </button>
      <span className={`text-lg ${isAnnual ? "text-white font-semibold" : "text-gray-500"}`}>
        Premium <span className="text-green-400 text-sm">Save 20%</span>
      </span>
    </div>
  );
}

// Pricing Card
interface PricingCardProps {
  name: string;
  description: string;
  price: string;
  originalPrice?: string;
  currency: string;
  features: string[];
  highlighted?: boolean;
  badge?: string;
  processingTime: string;
}

function PricingCard({
  name,
  description,
  price,
  originalPrice,
  currency,
  features,
  highlighted,
  badge,
  processingTime,
}: PricingCardProps) {
  return (
    <div
      className={`relative rounded-2xl p-6 md:p-8 transition-all hover:scale-105 ${
        highlighted
          ? "bg-gradient-to-b from-purple-500/20 to-pink-500/20 border-2 border-purple-500/50"
          : "bg-white/5 border border-white/10"
      }`}
    >
      {badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
            {badge}
          </span>
        </div>
      )}

      <div className="text-center">
        <h3 className="text-2xl font-bold text-white">{name}</h3>
        <p className="mt-2 text-sm text-gray-400">{description}</p>
      </div>

      <div className="mt-6 text-center">
        {originalPrice && (
          <span className="text-lg line-through text-gray-500">
            {currency}{originalPrice}
          </span>
        )}
        <div className="flex items-baseline justify-center">
          <span className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            {currency}{price}
          </span>
        </div>
        <p className="text-sm mt-2 text-gray-400">
          Processing: {processingTime}
        </p>
      </div>

      <ul className="mt-8 space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <svg
              className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0 text-purple-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-sm text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>

      <button
        className={`mt-8 w-full py-3 rounded-full font-semibold transition-all ${
          highlighted
            ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 shadow-lg shadow-purple-500/25"
            : "bg-white/10 text-white hover:bg-white/20 border border-white/10"
        }`}
      >
        Get Started
      </button>
    </div>
  );
}

// Main Pricing Section
function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);

  const standardPricing = [
    {
      name: "Tourist Extension",
      description: "Extend your stay in Thailand",
      price: "3,500",
      currency: "฿",
      processingTime: "1-2 days",
      features: [
        "30-day extension",
        "Document preparation",
        "Immigration appointment",
        "Basic support",
        "Email assistance",
      ],
    },
    {
      name: "DTV Visa",
      description: "Digital Nomad Visa",
      price: "18,000",
      originalPrice: "25,000",
      currency: "฿",
      processingTime: "5-7 days",
      highlighted: true,
      badge: "Most Popular",
      features: [
        "5-year validity",
        "Multiple entries",
        "Work remotely legally",
        "Full document review",
        "Priority processing",
        "Dedicated support",
        "Free consultation",
      ],
    },
    {
      name: "Non-B Work Visa",
      description: "Employment Visa",
      price: "22,000",
      originalPrice: "30,000",
      currency: "฿",
      processingTime: "7-10 days",
      features: [
        "Work permit assistance",
        "Company documentation",
        "BOI/Labor Dept liaison",
        "Extension support",
        "Legal consultation",
        "Dedicated manager",
      ],
    },
  ];

  const premiumPricing = [
    {
      name: "Tourist Extension",
      description: "Extend your stay in Thailand",
      price: "2,800",
      originalPrice: "3,500",
      currency: "฿",
      processingTime: "Same day",
      features: [
        "30-day extension",
        "Document preparation",
        "VIP immigration queue",
        "Priority support",
        "WhatsApp assistance",
        "Airport pickup option",
      ],
    },
    {
      name: "DTV Visa",
      description: "Digital Nomad Visa",
      price: "14,400",
      originalPrice: "18,000",
      currency: "฿",
      processingTime: "3-5 days",
      highlighted: true,
      badge: "Best Value",
      features: [
        "5-year validity",
        "Multiple entries",
        "Work remotely legally",
        "Express processing",
        "VIP document review",
        "24/7 dedicated support",
        "Free 2 consultations",
        "Re-entry permit included",
      ],
    },
    {
      name: "Non-B Work Visa",
      description: "Employment Visa",
      price: "17,600",
      originalPrice: "22,000",
      currency: "฿",
      processingTime: "5-7 days",
      features: [
        "Work permit included",
        "Full company setup help",
        "Direct BOI liaison",
        "1-year extension included",
        "Premium legal support",
        "Dedicated account manager",
        "Monthly compliance check",
      ],
    },
  ];

  const pricing = isAnnual ? premiumPricing : standardPricing;

  return (
    <section className="py-16 md:py-24 bg-[#0d0d12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Simple, Transparent Pricing</h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Choose the package that fits your needs. All prices include government fees and our service charges.
          </p>
        </div>

        <PricingToggle isAnnual={isAnnual} setIsAnnual={setIsAnnual} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {pricing.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Additional Services Section
function AdditionalServices() {
  const services = [
    {
      name: "SMART Visa",
      price: "38,000",
      originalPrice: "50,000",
      description: "For high-skilled professionals & entrepreneurs",
      duration: "Up to 4 years",
    },
    {
      name: "LTR Visa",
      price: "45,000",
      originalPrice: "60,000",
      description: "Long-term residence with tax benefits",
      duration: "10 years",
    },
    {
      name: "Elite Visa",
      price: "Contact us",
      description: "Thailand Elite membership visa",
      duration: "5-20 years",
    },
    {
      name: "Retirement Visa",
      price: "15,000",
      originalPrice: "20,000",
      description: "For retirees 50 years and above",
      duration: "1 year renewable",
    },
    {
      name: "Education Visa",
      price: "12,000",
      originalPrice: "15,000",
      description: "For students and learners",
      duration: "1 year renewable",
    },
    {
      name: "Marriage Visa",
      price: "18,000",
      originalPrice: "22,000",
      description: "For spouses of Thai nationals",
      duration: "1 year renewable",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Additional Visa Services</h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Specialized visa options for different needs and circumstances.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all border border-white/10 hover:border-purple-500/50"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                <span className="text-xs bg-purple-500/20 text-purple-400 px-2 py-1 rounded-full">
                  {service.duration}
                </span>
              </div>
              <p className="text-gray-400 text-sm mb-4">{service.description}</p>
              <div className="flex items-baseline">
                {service.originalPrice && (
                  <span className="text-gray-500 line-through text-sm mr-2">฿{service.originalPrice}</span>
                )}
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {service.price.startsWith("Contact") ? service.price : `฿${service.price}`}
                </span>
              </div>
              <button className="mt-4 w-full py-2 border border-purple-500/50 text-purple-400 rounded-lg font-medium hover:bg-purple-500/20 transition-colors">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Add-on Services
function AddOnServices() {
  const addons = [
    { name: "Re-entry Permit (Single)", price: "1,500" },
    { name: "Re-entry Permit (Multiple)", price: "4,000" },
    { name: "90-Day Report", price: "500" },
    { name: "TM30 Notification", price: "800" },
    { name: "Work Permit Renewal", price: "8,000" },
    { name: "Visa Extension", price: "3,500" },
    { name: "Document Translation (per page)", price: "500" },
    { name: "Notarization Service", price: "1,500" },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#0d0d12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Add-on Services</h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Additional services to keep your visa and work permit compliant.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white/5 rounded-2xl overflow-hidden border border-white/10">
            <div className="divide-y divide-white/10">
              {addons.map((addon, index) => (
                <div key={index} className="flex justify-between items-center p-4 md:p-6 hover:bg-white/5 transition-colors">
                  <span className="text-gray-300 font-medium">{addon.name}</span>
                  <span className="text-purple-400 font-semibold">฿{addon.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// FAQ Section
function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What documents do I need to apply for a DTV visa?",
      answer:
        "For the DTV (Digital Nomad) visa, you typically need: valid passport (6+ months validity), proof of remote work or freelance income, bank statements showing sufficient funds, health insurance, and completed application forms. Our team will guide you through the exact requirements based on your situation.",
    },
    {
      question: "How long does the visa processing take?",
      answer:
        "Processing times vary by visa type. Tourist extensions take 1-2 days, DTV visas take 5-7 business days, and Work visas take 7-10 business days. Premium packages offer expedited processing with faster turnaround times.",
    },
    {
      question: "Are government fees included in the price?",
      answer:
        "Yes, all our prices include Thai government fees, application fees, and our service charges. There are no hidden costs. The price you see is the total price you pay.",
    },
    {
      question: "Can I extend my visa after it expires?",
      answer:
        "Yes, most visas can be extended before they expire. We offer extension services for all visa types. It's important to apply for extension before your current visa expires to avoid overstay penalties.",
    },
    {
      question: "Do you offer refunds if my visa is denied?",
      answer:
        "We have a 99%+ approval rate because we thoroughly review all applications before submission. If your visa is denied due to our error, we offer a full refund of our service fee. Government fees are non-refundable as per Thai immigration policy.",
    },
    {
      question: "Can I work in Thailand with a DTV visa?",
      answer:
        "Yes, the DTV (Destination Thailand Visa) allows you to work remotely for foreign companies or as a freelancer. However, you cannot be employed by a Thai company - for that, you need a Non-B Work visa with a work permit.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#0a0a0f]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Frequently Asked Questions</h2>
          <p className="mt-4 text-lg text-gray-400">
            Everything you need to know about our visa services.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-white/10 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center p-4 md:p-6 text-left bg-white/5 hover:bg-white/10 transition-colors"
              >
                <span className="font-medium text-white">{faq.question}</span>
                <svg
                  className={`h-5 w-5 text-purple-400 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-4 md:px-6 pb-4 md:pb-6 bg-white/5">
                  <p className="text-gray-400">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// CTA Section
function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-[#0d0d12] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Need a Custom Package?</h2>
        <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
          Contact us for corporate solutions, bulk applications, or special requirements. We'll create a tailored package just for you.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/#contact"
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg shadow-purple-500/25"
          >
            Get Custom Quote
          </a>
          <a
            href="tel:+6621234567"
            className="bg-white/5 text-white px-8 py-4 rounded-full text-lg font-semibold border border-white/10 hover:bg-white/10 transition-all"
          >
            Call Us Now
          </a>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="bg-[#0a0a0f] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">ISSA</span>
              <span className="text-white"> Compass</span>
            </Link>
          </div>
          <div className="flex space-x-6">
            <Link href="/" className="text-gray-400 hover:text-purple-400 transition-colors">
              Home
            </Link>
            <Link href="/#visas" className="text-gray-400 hover:text-purple-400 transition-colors">
              Visas
            </Link>
            <Link href="/pricing" className="text-gray-400 hover:text-purple-400 transition-colors">
              Pricing
            </Link>
            <Link href="/#contact" className="text-gray-400 hover:text-purple-400 transition-colors">
              Contact
            </Link>
          </div>
        </div>
        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 ISAA Compass. All rights reserved. | Prices in Thai Baht (฿)
          </p>
        </div>
      </div>
    </footer>
  );
}

// Main Pricing Page
export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] pt-16">
      <Navigation />

      {/* Hero */}
      <section className="pt-12 pb-8 md:pt-16 md:pb-12 bg-[#0a0a0f] relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-white/5 border border-white/10">
            <span className="text-sm text-gray-300">Transparent Pricing</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Visa Pricing & Packages
          </h1>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Transparent pricing with no hidden fees. All packages include government fees and full support.
          </p>
        </div>
      </section>

      <PricingSection />
      <AdditionalServices />
      <AddOnServices />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}
