import { useState, useEffect, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Phone, Mail, Globe, MapPin, Building2, Send,
  CheckCircle2, AlertCircle, Loader2, X,
} from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import { company, businessTypes } from '@/data/content';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001';

type FormState = {
  name: string;
  businessName: string;
  phone: string;
  email: string;
  businessType: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialForm: FormState = {
  name: '',
  businessName: '',
  phone: '',
  email: '',
  businessType: '',
  message: '',
};

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [submittedName, setSubmittedName] = useState<string>('');

  // Auto-dismiss success popup after 8 seconds
  useEffect(() => {
    if (showSuccessPopup) {
      const timer = setTimeout(() => setShowSuccessPopup(false), 8000);
      return () => clearTimeout(timer);
    }
  }, [showSuccessPopup]);

  // Prevent body scroll when popup is open
  useEffect(() => {
    if (showSuccessPopup) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [showSuccessPopup]);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.businessName.trim()) newErrors.businessName = 'Business name is required';
    if (!form.phone.trim()) {
      newErrors.phone = 'Phone is required';
    } else if (!/^[+\d][\d\s()-]{7,20}$/.test(form.phone.trim())) {
      newErrors.phone = 'Enter a valid phone number';
    }
    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      newErrors.email = 'Enter a valid email';
    }
    if (!form.businessType) newErrors.businessType = 'Select a business type';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!validate()) return;

    setStatus('loading');

    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name.trim(),
          businessName: form.businessName.trim(),
          phone: form.phone.trim(),
          email: form.email.trim(),
          businessType: form.businessType,
          message: form.message.trim() || null,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        if (data.errors && Array.isArray(data.errors)) {
          setErrorMessage(data.errors.join(', '));
        } else {
          setErrorMessage(data.message || 'Something went wrong. Please try again.');
        }
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
        return;
      }

      // Success — show popup
      setSubmittedName(form.name.trim().split(' ')[0] || 'there');
      setStatus('success');
      setForm(initialForm);
      setShowSuccessPopup(true);
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      console.error('Contact form submission error:', err);
      setErrorMessage('Network error. Please check your connection and try again.');
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const contactInfo = [
    { icon: Building2, label: 'Company', value: company.legalName },
    { icon: Phone, label: 'Phone', value: company.phone, href: `tel:${company.phoneRaw}` },
    { icon: Mail, label: 'Email', value: company.email, href: `mailto:${company.email}` },
    { icon: Globe, label: 'Website', value: company.website, href: company.website },
    { icon: MapPin, label: 'Address', value: company.address },
  ];

  return (
    <>
      {/* ===== SUCCESS POPUP MODAL ===== */}
      <AnimatePresence>
        {showSuccessPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-navy/60 backdrop-blur-sm"
            onClick={() => setShowSuccessPopup(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 text-center overflow-hidden"
            >
              {/* Close button */}
              <button
                onClick={() => setShowSuccessPopup(false)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center text-gray-400 hover:text-navy hover:bg-gray-100 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Decorative gold rings */}
              <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-gold/10 pointer-events-none" />
              <div className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-gold/5 pointer-events-none" />

              {/* Icon */}
              <div className="relative mx-auto w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg shadow-green-500/30 mb-5">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring', damping: 12 }}
                >
                  <CheckCircle2 className="w-11 h-11 text-white" strokeWidth={2.5} />
                </motion.div>
              </div>

              {/* Message */}
              <h3 className="text-2xl font-heading font-bold text-navy mb-2">
                Thank You{submittedName ? `, ${submittedName}` : ''}! 🎉
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-1">
                Your demo request has been submitted successfully.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Our team will reach out to you <span className="font-semibold text-navy">within 24 hours</span> to schedule your personalized demo.
              </p>

              {/* Info box */}
              <div className="bg-gold/10 border border-gold/30 rounded-xl p-4 mb-6 text-left">
                <p className="text-xs text-navy-700 leading-relaxed">
                  <span className="font-bold text-navy">📞 Need immediate assistance?</span>
                  <br />
                  Call us at{' '}
                  <a href={`tel:${company.phoneRaw}`} className="font-semibold text-crimson hover:underline">
                    {company.phone}
                  </a>
                </p>
              </div>

              {/* Action button */}
              <Button
                onClick={() => setShowSuccessPopup(false)}
                size="lg"
                className="w-full"
              >
                Got it, thanks!
              </Button>

              {/* Auto-dismiss hint */}
              <p className="text-xs text-gray-400 mt-4">
                This message will auto-close in a few seconds
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ===== MAIN SECTION ===== */}
      <section id="contact" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Get In Touch"
            title="Request a Demo"
            subtitle="Ready to transform your jewellery business? Fill out the form below and our team will get back to you within 24 hours."
          />

          <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left — Contact info + map */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="bg-navy-gradient rounded-2xl p-6 lg:p-8 text-white shadow-card">
                <h3 className="text-xl font-heading font-bold mb-6">Contact Details</h3>
                <ul className="space-y-5">
                  {contactInfo.map((item) => (
                    <li key={item.label} className="flex gap-4">
                      <div className="w-10 h-10 rounded-xl bg-gold-gradient flex items-center justify-center shrink-0">
                        <item.icon className="w-5 h-5 text-navy" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs text-navy-200 uppercase tracking-wide font-semibold">{item.label}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-sm text-white hover:text-gold transition-colors break-words"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm text-white break-words">{item.value}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Google Map embed */}
              <div className="rounded-2xl overflow-hidden shadow-card border border-gray-100 h-64">
                <iframe
                  title="iiQBets Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.123!2d77.6243!3d13.0329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAxJzU4LjQiTiA3N8KwMzcnMjcuNSJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>

            {/* Right — Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <form
                onSubmit={handleSubmit}
                className="bg-light rounded-2xl p-6 lg:p-8 shadow-card border border-gray-100 space-y-4"
                noValidate
              >
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-heading font-semibold text-navy mb-1.5">
                    Name <span className="text-crimson">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border bg-white text-navy text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gold transition-colors ${
                      errors.name ? 'border-crimson' : 'border-gray-200 focus:border-gold'
                    }`}
                    placeholder="Your full name"
                  />
                  {errors.name && <p className="text-xs text-crimson mt-1">{errors.name}</p>}
                </div>

                {/* Business Name */}
                <div>
                  <label htmlFor="businessName" className="block text-sm font-heading font-semibold text-navy mb-1.5">
                    Business Name <span className="text-crimson">*</span>
                  </label>
                  <input
                    type="text"
                    id="businessName"
                    name="businessName"
                    value={form.businessName}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border bg-white text-navy text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gold transition-colors ${
                      errors.businessName ? 'border-crimson' : 'border-gray-200 focus:border-gold'
                    }`}
                    placeholder="Your jewellery business name"
                  />
                  {errors.businessName && <p className="text-xs text-crimson mt-1">{errors.businessName}</p>}
                </div>

                {/* Phone + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-heading font-semibold text-navy mb-1.5">
                      Phone <span className="text-crimson">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border bg-white text-navy text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gold transition-colors ${
                        errors.phone ? 'border-crimson' : 'border-gray-200 focus:border-gold'
                      }`}
                      placeholder="+91 98765 43210"
                    />
                    {errors.phone && <p className="text-xs text-crimson mt-1">{errors.phone}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-heading font-semibold text-navy mb-1.5">
                      Email <span className="text-crimson">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border bg-white text-navy text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gold transition-colors ${
                        errors.email ? 'border-crimson' : 'border-gray-200 focus:border-gold'
                      }`}
                      placeholder="you@business.com"
                    />
                    {errors.email && <p className="text-xs text-crimson mt-1">{errors.email}</p>}
                  </div>
                </div>

                {/* Business Type */}
                <div>
                  <label htmlFor="businessType" className="block text-sm font-heading font-semibold text-navy mb-1.5">
                    Business Type <span className="text-crimson">*</span>
                  </label>
                  <select
                    id="businessType"
                    name="businessType"
                    value={form.businessType}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border bg-white text-navy text-sm focus:outline-none focus:ring-2 focus:ring-gold transition-colors ${
                      errors.businessType ? 'border-crimson' : 'border-gray-200 focus:border-gold'
                    } ${!form.businessType ? 'text-gray-400' : ''}`}
                  >
                    <option value="">Select your business type</option>
                    {businessTypes.map((type) => (
                      <option key={type} value={type} className="text-navy">
                        {type}
                      </option>
                    ))}
                  </select>
                  {errors.businessType && <p className="text-xs text-crimson mt-1">{errors.businessType}</p>}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-heading font-semibold text-navy mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-navy text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold transition-colors resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" /> Submitting...
                    </>
                  ) : (
                    <>
                      Request a Demo <Send className="w-5 h-5" />
                    </>
                  )}
                </Button>

                {/* Inline success banner (small) */}
                {status === 'success' && !showSuccessPopup && (
                  <div className="flex items-center gap-2 text-green-600 bg-green-50 rounded-xl p-3 text-sm font-semibold">
                    <CheckCircle2 className="w-5 h-5 shrink-0" />
                    Thank you! Your demo request has been submitted.
                  </div>
                )}

                {/* Error banner */}
                {status === 'error' && (
                  <div className="flex items-center gap-2 text-crimson bg-crimson-50 rounded-xl p-3 text-sm font-semibold">
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    {errorMessage || `Something went wrong. Please try again or call us directly at ${company.phone}.`}
                  </div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}