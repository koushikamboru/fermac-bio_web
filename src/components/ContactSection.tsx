"use client";

import React, { useState } from 'react';
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
  
  async function handleSubmit(e: React.FormEvent) {
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
      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        setStatusMessage('Thank you — your message has been sent.');
        setForm({ firstName: '', lastName: '', email: '', company: '', subject: '', message: '' });
        setErrors({});
      } else {
        setStatusMessage((data && (data as any).error) || 'Unable to send message.');
      }
    } catch (err) {
      setStatusMessage('Network error. Please try again later.');
    } finally {
      setSubmitting(false);
    }
  }
  return (
    <section className="relative w-full min-h-[520px] md:min-h-[620px] lg:min-h-[700px] flex items-start mt-20">
      {/* Rectangle 8: background image */}
      <div className="absolute inset-0 -z-20">
        <Image src="/hcontact.svg" alt="Contact background" fill className="object-cover" priority />
      </div>

      {/* Rectangle 9: dark overlay */}
      <div className="absolute inset-0 -z-10" style={{ background: 'rgba(0,24,31,0.72)' }} />

      {/* Centered container converted to responsive layout: info (left) and form (right) */}
      <div className="w-full max-w-[1100px] mx-auto px-4 py-10 md:py-16 z-10">
        <div className="mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 md:items-stretch mb-6 min-h-[420px]">
            {/* Left: info + manufacturing */}
            <div className="flex flex-col h-full space-y-3 md:space-y-4 text-white md:pt-2 md:pr-4">
              <div className="text-white mb-4 md:mb-6">
                <div className="font-semibold text-2xl md:text-2xl lg:text-3xl">Contact Information</div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 flex items-center justify-center flex-shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#FFFFFF" /></svg>
                </div>
                <div>
                  <div className="font-semibold text-base md:text-lg">Corporate Headquarters</div>
                  <div className="text-sm md:text-base text-white/90">FBPL Biotechnology Complex Sector 18, Pharmaceutical Park, Hyderabad, Telangana 500032, India</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-9 h-9 flex items-center justify-center flex-shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.24.2 2.45.57 3.57a1 1 0 01-.24 1.01l-2.21 2.21z" fill="#FFFFFF" /></svg>
                </div>
                <div>
                  <div className="font-semibold text-base md:text-lg">Phone Numbers</div>
                  <div className="text-sm md:text-base text-white/90">Main: +91 40 2345 6789<br/>Sales: +91 40 2345 6790<br/>Support: +91 40 2345 6791</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-9 h-9 flex items-center justify-center flex-shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><rect x="3" y="5" width="18" height="14" rx="2" stroke="#FFFFFF" strokeWidth="1.5" /></svg>
                </div>
                <div>
                  <div className="font-semibold text-base md:text-lg">Email Addresses</div>
                  <div className="text-sm md:text-base text-white/90">General: info@fbpl.com<br/>Sales: sales@fbpl.com<br/>Support: support@fbpl.com</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-9 h-9 flex items-center justify-center flex-shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#FFFFFF" strokeWidth="1.5" /><path d="M12 7v6l4 2" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
                <div>
                  <div className="font-semibold text-base md:text-lg">Business Hours</div>
                  <div className="text-sm md:text-base text-white/90">Mon–Fri: 9:00 AM – 6:00 PM IST<br/>Sat: 9:00 AM – 1:00 PM IST<br/>Sun: Closed</div>
                </div>
              </div>

              <div className="mt-4">
                <div className="bg-[#E9F6F8] rounded-lg p-4 sm:p-6">
                  <div className="font-semibold text-lg md:text-xl text-[#282828]">Manufacturing Facility</div>
                  <p className="mt-2 text-sm md:text-base text-[#474747]">Our state-of-the-art manufacturing facility is located in the Genome Valley, Hyderabad, spanning over 50 acres with advanced fermentation units and quality control laboratories.</p>
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div className="h-full">
              <div className="bg-white/6 border border-white/20 rounded-lg p-4 sm:p-6 md:p-6 backdrop-blur-sm text-white h-full flex flex-col">
                <h3 className="text-center font-semibold mb-4 lowercase text-lg sm:text-xl md:text-2xl">send us a message</h3>
                <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4 flex-1">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                    <div>
                      <label className="block text-sm md:text-base mb-1">First Name *</label>
                      <input value={form.firstName} onChange={(e)=>setForm({...form, firstName: e.target.value})} className="w-full rounded-md border border-white/30 bg-transparent px-3 md:px-4 py-2 md:py-3 placeholder-white/60 outline-none text-sm md:text-base" placeholder="Enter your First Name" />
                    </div>
                    <div>
                      <label className="block text-sm md:text-base mb-1">Last Name *</label>
                      <input value={form.lastName} onChange={(e)=>setForm({...form, lastName: e.target.value})} className="w-full rounded-md border border-white/30 bg-transparent px-3 md:px-4 py-2 md:py-3 placeholder-white/60 outline-none text-sm md:text-base" placeholder="Enter your Last Name" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm md:text-base mb-1">Email Address *</label>
                    <input type="email" value={form.email} onChange={(e)=>setForm({...form, email: e.target.value})} className="w-full rounded-md border border-white/30 bg-transparent px-3 md:px-4 py-2 md:py-3 placeholder-white/60 outline-none text-sm md:text-base" placeholder="Enter your Email" />
                  </div>

                  <div>
                    <label className="block text-sm md:text-base mb-1">Company *</label>
                    <input value={form.company} onChange={(e)=>setForm({...form, company: e.target.value})} className="w-full rounded-md border border-white/30 bg-transparent px-3 md:px-4 py-2 md:py-3 placeholder-white/60 outline-none text-sm md:text-base" placeholder="Enter your Company" />
                  </div>

                  <div>
                    <label className="block text-sm md:text-base mb-1">Subject *</label>
                    <input value={form.subject} onChange={(e)=>setForm({...form, subject: e.target.value})} className="w-full rounded-md border border-white/30 bg-transparent px-3 md:px-4 py-2 md:py-3 placeholder-white/60 outline-none text-sm md:text-base" placeholder="Enter message Subject" />
                  </div>

                  <div>
                    <label className="block text-sm md:text-base mb-1">Message *</label>
                    <textarea value={form.message} onChange={(e)=>setForm({...form, message: e.target.value})} rows={5} className="w-full rounded-md border border-white/30 bg-transparent px-3 md:px-4 py-2 md:py-3 placeholder-white/60 outline-none text-sm md:text-base" placeholder="Enter your message here..." />
                  </div>

                  <div className="pt-1">
                    <button type="submit" disabled={submitting} className="w-full bg-white text-teal-900 py-3 md:py-4 rounded-md font-semibold text-sm md:text-base">{submitting ? 'Sending...' : 'Submit'}</button>
                  </div>

                  {statusMessage && (<div className="text-center pt-2"><span className="text-white text-sm md:text-base">{statusMessage}</span></div>)}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
