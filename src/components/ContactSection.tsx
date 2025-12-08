"use client";

import { useState } from 'react';
import Image from 'next/image';

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  subject: string;
  message: string;
};

export default function ContactSection() {
  const [form, setForm] = useState<FormState>({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitting, setSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  return (
    <section className="relative min-h-[calc(100vh-80px)] pt-28 pb-16 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image src="/contactpg.png" alt="Contact background" fill className="object-cover" priority />
        <div className="absolute inset-0 " />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white">Get In Touch</h1>
          <p className="text-white/80 mt-2">Ready to partner with us or learn more about our biotechnology solutions? We’d love to hear from you.</p>
        </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left: Contact Info Blocks */}
          <div className="space-y-6 text-white">
            <div className="p-0">
              <div className="flex items-center gap-3 mb-2">
                <svg className="w-5 h-5 text-teal-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16.5 9.5l-4.5 4.5-2.5-2.5" /></svg>
                <h3 className="font-semibold">Corporate Headquarters</h3>
              </div>
              <p className="text-sm text-white">FBPL Biotechnology Complex Sector 18, Pharmaceutical Park, Hyderabad, Telangana 500032, India</p>
            </div>
            <div className="p-0">
              <div className="flex items-center gap-3 mb-2">
                <svg className="w-5 h-5 text-teal-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28l1.5 4.5-2.3 1.15a11 11 0 005.52 5.52l1.15-2.3 4.5 1.5V19a2 2 0 01-2 2h-1C9.7 21 3 14.3 3 6V5z" /></svg>
                <h3 className="font-semibold">Phone Numbers</h3>
              </div>
              <p className="text-sm text-white">Main: +91 40 2345 6789</p>
              <p className="text-sm text-white">Sales: +91 40 2345 6790</p>
              <p className="text-sm text-white">Support: +91 40 2345 6791</p>
            </div>
            <div className="p-0">
              <div className="flex items-center gap-3 mb-2">
                <svg className="w-5 h-5 text-teal-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <h3 className="font-semibold">Email Addresses</h3>
              </div>
              <p className="text-sm text-white">General: info@fermacbio.com</p>
              <p className="text-sm text-white">Sales: sales@fermacbio.com</p>
              <p className="text-sm text-white">Support: support@fermacbio.com</p>
            </div>
            <div className="p-0">
              <div className="flex items-center gap-3 mb-2">
                <svg className="w-5 h-5 text-teal-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v8m8-8v8M4 8v8" /></svg>
                <h3 className="font-semibold">Business Hours</h3>
              </div>
              <p className="text-sm text-white">Mon–Fri: 9:00 AM – 6:00 PM IST</p>
              <p className="text-sm text-white">Sat: 9:00 AM – 1:00 PM IST</p>
              <p className="text-sm text-white">Sun: Closed</p>
            </div>
            <div className="bg-white text-teal-900 rounded-xl p-6 shadow-lg mt-6 max-w-[20rem]">
              <h3 className="font-semibold mb-2">Manufacturing Facility</h3>
              <p className="text-sm">Our state‑of‑the‑art manufacturing facility is located in the Genome Valley, Hyderabad, spanning over 50 acres with advanced fermentation units and quality control laboratories.</p>
            </div>
          </div>

          {/* Right: Form on glass panel */}
          <div className="relative">
            <div className="border border-white/60 rounded-2xl p-6 sm:p-8 backdrop-blur-md bg-white/8 text-white">
              <h3 className="text-lg font-semibold mb-4 text-center">send us a message</h3>
              <form
                className="space-y-4"
              onSubmit={async (e) => {
                e.preventDefault();
                setStatusMessage(null);
                const newErrors: Partial<FormState> = {};
                if (!form.firstName.trim()) newErrors.firstName = 'Required';
                if (!form.lastName.trim()) newErrors.lastName = 'Required';
                if (!form.email.trim()) newErrors.email = 'Required';
                else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/.test(form.email)) newErrors.email = 'Invalid email';
                if (!form.company.trim()) newErrors.company = 'Required';
                if (!form.subject.trim()) newErrors.subject = 'Required';
                if (!form.message.trim()) newErrors.message = 'Required';
                setErrors(newErrors);
                if (Object.keys(newErrors).length > 0) return;

                try {
                  setSubmitting(true);
                  const res = await fetch('/api/contact', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(form),
                  });
                  const data = await res.json();
                  if (res.ok) {
                    setStatusMessage('Thank you — your message has been sent.');
                    setForm({ firstName: '', lastName: '', email: '', company: '', subject: '', message: '' });
                    setErrors({});
                  } else {
                    setStatusMessage(data?.error || 'Unable to send message.');
                  }
                } catch (err) {
                  setStatusMessage('Network error. Please try again later.');
                } finally {
                  setSubmitting(false);
                }
              }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-1 text-white">First Name *</label>
                  <input
                    value={form.firstName}
                    onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                      className={`w-full bg-transparent border rounded-lg px-4 py-3 text-white placeholder-white/70 outline-none focus:ring-2 focus:ring-cyan-400 ${errors.firstName ? 'border-red-400' : 'border-white/40'}`}
                    placeholder="Enter your First Name"
                    aria-invalid={!!errors.firstName}
                  />
                  {errors.firstName && <p className="text-xs text-red-200 mt-1">{errors.firstName}</p>}
                </div>
                <div>
                  <label className="block text-sm mb-1 text-white">Last Name *</label>
                  <input
                    value={form.lastName}
                    onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                    className={`w-full bg-transparent border rounded-lg px-4 py-3 text-white placeholder-white/70 outline-none focus:ring-2 focus:ring-cyan-400 ${errors.lastName ? 'border-red-400' : 'border-white/40'}`}
                    placeholder="Enter your Last Name"
                    aria-invalid={!!errors.lastName}
                  />
                  {errors.lastName && <p className="text-xs text-red-200 mt-1">{errors.lastName}</p>}
                </div>
              </div>
              <div>
                <label className="block text-sm mb-1 text-white">Email Address *</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={`w-full bg-transparent border rounded-lg px-4 py-3 text-white placeholder-white/70 outline-none focus:ring-2 focus:ring-cyan-400 ${errors.email ? 'border-red-400' : 'border-white/40'}`}
                  placeholder="Enter your Email"
                  aria-invalid={!!errors.email}
                />
                {errors.email && <p className="text-xs text-red-200 mt-1">{errors.email}</p>}
              </div>
              <div>
                <label className="block text-sm mb-1 text-white">Company *</label>
                <input
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  className={`w-full bg-transparent border rounded-lg px-4 py-3 text-white placeholder-white/70 outline-none focus:ring-2 focus:ring-cyan-400 ${errors.company ? 'border-red-400' : 'border-white/40'}`}
                  placeholder="Enter your Company"
                  aria-invalid={!!errors.company}
                />
                {errors.company && <p className="text-xs text-red-200 mt-1">{errors.company}</p>}
              </div>
              <div>
                <label className="block text-sm mb-1 text-white">Subject *</label>
                <input
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className={`w-full bg-transparent border rounded-lg px-4 py-3 text-white placeholder-white/70 outline-none focus:ring-2 focus:ring-cyan-400 ${errors.subject ? 'border-red-400' : 'border-white/40'}`}
                  placeholder="Enter message Subject"
                  aria-invalid={!!errors.subject}
                />
                {errors.subject && <p className="text-xs text-red-200 mt-1">{errors.subject}</p>}
              </div>
              <div>
                <label className="block text-sm mb-1 text-white">Message *</label>
                <textarea
                  rows={6}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`w-full bg-transparent border rounded-lg px-4 py-3 text-white placeholder-white/70 outline-none focus:ring-2 focus:ring-cyan-400 ${errors.message ? 'border-red-400' : 'border-white/40'}`}
                  placeholder="Enter your message here..."
                  aria-invalid={!!errors.message}
                />
                {errors.message && <p className="text-xs text-red-200 mt-1">{errors.message}</p>}
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-white text-teal-900 hover:bg-teal-50 font-semibold py-3 rounded-lg disabled:opacity-60"
              >
                {submitting ? 'Sending...' : 'Submit'}
              </button>

              {statusMessage && <p className="text-center text-sm mt-2 text-white/90">{statusMessage}</p>}
            </form>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
