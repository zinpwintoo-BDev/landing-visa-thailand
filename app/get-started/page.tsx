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
            <Link href="/pricing" className="text-gray-300 hover:text-white transition-colors">
              Pricing
            </Link>
            <Link href="/#about" className="text-gray-300 hover:text-white transition-colors">
              About
            </Link>
            <Link
              href="/get-started"
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
              <Link href="/pricing" className="text-gray-300 hover:text-white transition-colors">
                Pricing
              </Link>
              <Link href="/#about" className="text-gray-300 hover:text-white transition-colors">
                About
              </Link>
              <Link
                href="/get-started"
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

// Application Form
function ApplicationForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Info
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    nationality: "",
    dateOfBirth: "",

    // Visa Details
    visaType: "",
    purpose: "",
    arrivalDate: "",
    duration: "",

    // Additional Info
    currentLocation: "",
    passportNumber: "",
    passportExpiry: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Application submitted successfully! We will contact you within 24 hours.");
  };

  return (
    <div className="max-w-3xl mx-auto">
      {/* Progress Steps */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          {[1, 2, 3].map((num) => (
            <div key={num} className="flex items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${
                  step >= num
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                    : "bg-white/10 text-gray-400"
                }`}
              >
                {num}
              </div>
              {num < 3 && (
                <div
                  className={`w-24 sm:w-32 h-1 mx-2 ${
                    step > num ? "bg-gradient-to-r from-purple-500 to-pink-500" : "bg-white/10"
                  }`}
                />
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-2 text-sm">
          <span className={step >= 1 ? "text-purple-400" : "text-gray-500"}>Personal Info</span>
          <span className={step >= 2 ? "text-purple-400" : "text-gray-500"}>Visa Details</span>
          <span className={step >= 3 ? "text-purple-400" : "text-gray-500"}>Additional Info</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="bg-white/5 rounded-2xl p-6 md:p-8 border border-white/10">
        {/* Step 1: Personal Information */}
        {step === 1 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white mb-6">Personal Information</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">First Name *</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-500"
                  placeholder="John"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Last Name *</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-500"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Email Address *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-500"
                placeholder="john@example.com"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-500"
                  placeholder="+1 234 567 8900"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Nationality *</label>
                <select
                  name="nationality"
                  value={formData.nationality}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                >
                  <option value="" className="bg-[#0a0a0f]">Select nationality</option>
                  <option value="US" className="bg-[#0a0a0f]">United States</option>
                  <option value="UK" className="bg-[#0a0a0f]">United Kingdom</option>
                  <option value="AU" className="bg-[#0a0a0f]">Australia</option>
                  <option value="CA" className="bg-[#0a0a0f]">Canada</option>
                  <option value="DE" className="bg-[#0a0a0f]">Germany</option>
                  <option value="FR" className="bg-[#0a0a0f]">France</option>
                  <option value="JP" className="bg-[#0a0a0f]">Japan</option>
                  <option value="KR" className="bg-[#0a0a0f]">South Korea</option>
                  <option value="CN" className="bg-[#0a0a0f]">China</option>
                  <option value="IN" className="bg-[#0a0a0f]">India</option>
                  <option value="OTHER" className="bg-[#0a0a0f]">Other</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Date of Birth *</label>
              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
              />
            </div>
          </div>
        )}

        {/* Step 2: Visa Details */}
        {step === 2 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white mb-6">Visa Details</h2>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Visa Type *</label>
              <select
                name="visaType"
                value={formData.visaType}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
              >
                <option value="" className="bg-[#0a0a0f]">Select visa type</option>
                <option value="DTV" className="bg-[#0a0a0f]">DTV Visa (Digital Nomad) - ฿18,000</option>
                <option value="NON-B" className="bg-[#0a0a0f]">Non-B Work Visa - ฿22,000</option>
                <option value="SMART" className="bg-[#0a0a0f]">SMART Visa - ฿38,000</option>
                <option value="LTR" className="bg-[#0a0a0f]">LTR Visa - ฿45,000</option>
                <option value="TOURIST" className="bg-[#0a0a0f]">Tourist Extension - ฿3,500</option>
                <option value="RETIREMENT" className="bg-[#0a0a0f]">Retirement Visa - ฿15,000</option>
                <option value="EDUCATION" className="bg-[#0a0a0f]">Education Visa - ฿12,000</option>
                <option value="MARRIAGE" className="bg-[#0a0a0f]">Marriage Visa - ฿18,000</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Purpose of Visit *</label>
              <select
                name="purpose"
                value={formData.purpose}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
              >
                <option value="" className="bg-[#0a0a0f]">Select purpose</option>
                <option value="remote-work" className="bg-[#0a0a0f]">Remote Work / Digital Nomad</option>
                <option value="employment" className="bg-[#0a0a0f]">Employment in Thailand</option>
                <option value="business" className="bg-[#0a0a0f]">Business / Investment</option>
                <option value="retirement" className="bg-[#0a0a0f]">Retirement</option>
                <option value="education" className="bg-[#0a0a0f]">Education / Study</option>
                <option value="family" className="bg-[#0a0a0f]">Family / Marriage</option>
                <option value="tourism" className="bg-[#0a0a0f]">Extended Tourism</option>
                <option value="other" className="bg-[#0a0a0f]">Other</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Planned Arrival Date *</label>
                <input
                  type="date"
                  name="arrivalDate"
                  value={formData.arrivalDate}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Intended Duration *</label>
                <select
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                >
                  <option value="" className="bg-[#0a0a0f]">Select duration</option>
                  <option value="1-3months" className="bg-[#0a0a0f]">1-3 months</option>
                  <option value="3-6months" className="bg-[#0a0a0f]">3-6 months</option>
                  <option value="6-12months" className="bg-[#0a0a0f]">6-12 months</option>
                  <option value="1-2years" className="bg-[#0a0a0f]">1-2 years</option>
                  <option value="2-5years" className="bg-[#0a0a0f]">2-5 years</option>
                  <option value="5+years" className="bg-[#0a0a0f]">5+ years</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Additional Information */}
        {step === 3 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white mb-6">Additional Information</h2>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Current Location *</label>
              <input
                type="text"
                name="currentLocation"
                value={formData.currentLocation}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-500"
                placeholder="City, Country"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Passport Number *</label>
                <input
                  type="text"
                  name="passportNumber"
                  value={formData.passportNumber}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-500"
                  placeholder="AB1234567"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Passport Expiry Date *</label>
                <input
                  type="date"
                  name="passportExpiry"
                  value={formData.passportExpiry}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Additional Message (Optional)</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-500 resize-none"
                placeholder="Any additional information or questions..."
              />
            </div>

            <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
              <div className="flex items-start">
                <input
                  type="checkbox"
                  required
                  className="mt-1 mr-3"
                />
                <p className="text-sm text-gray-300">
                  I agree to the <a href="#" className="text-purple-400 hover:underline">Terms of Service</a> and <a href="#" className="text-purple-400 hover:underline">Privacy Policy</a>. I understand that my information will be used to process my visa application.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          {step > 1 ? (
            <button
              type="button"
              onClick={prevStep}
              className="px-6 py-3 bg-white/10 text-white rounded-full font-semibold hover:bg-white/20 transition-colors border border-white/10"
            >
              Previous
            </button>
          ) : (
            <div></div>
          )}

          {step < 3 ? (
            <button
              type="button"
              onClick={nextStep}
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg shadow-purple-500/25"
            >
              Next Step
            </button>
          ) : (
            <button
              type="submit"
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg shadow-purple-500/25"
            >
              Submit Application
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

// Features/Benefits
function WhyChooseUs() {
  const benefits = [
    {
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Fast Processing",
      description: "Get your visa in as little as 3-5 business days",
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "99%+ Approval Rate",
      description: "Expert review ensures maximum success",
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "24/7 Support",
      description: "We're here whenever you need us",
    },
  ];

  return (
    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
      {benefits.map((benefit, index) => (
        <div key={index} className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-500/20 text-purple-400 mb-4">
            {benefit.icon}
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
          <p className="text-gray-400 text-sm">{benefit.description}</p>
        </div>
      ))}
    </div>
  );
}

// Footer
function Footer() {
  return (
    <footer className="bg-[#0a0a0f] border-t border-white/10 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-xl font-bold">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">ISSA</span>
              <span className="text-white"> Compass</span>
            </Link>
          </div>
          <div className="flex space-x-6">
            <Link href="/" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
              Home
            </Link>
            <Link href="/pricing" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
              Pricing
            </Link>
            <Link href="/#contact" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
              Contact
            </Link>
          </div>
        </div>
        <div className="border-t border-white/10 mt-6 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 ISSA Compass. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

// Main Get Started Page
export default function GetStartedPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] pt-16">
      <Navigation />

      {/* Hero */}
      <section className="pt-12 pb-8 md:pt-16 md:pb-12 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-white/5 border border-white/10">
            <span className="text-sm text-gray-300">Start Your Journey</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Apply for Your <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Thailand Visa</span>
          </h1>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Complete the form below and our team will guide you through the entire visa process. We'll contact you within 24 hours.
          </p>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ApplicationForm />
          <WhyChooseUs />
        </div>
      </section>

      <Footer />
    </div>
  );
}
