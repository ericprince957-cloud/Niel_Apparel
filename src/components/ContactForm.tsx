import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FormData {
  name: string;
  email: string;
  message: string;
  agreed: boolean;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
  agreed?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
    agreed: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    if (!formData.agreed) {
      newErrors.agreed = 'You must agree to the Privacy Policy & Terms';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // In production, this would send to a backend or email service
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '', agreed: false });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked! : value,
    }));
    // Clear error on change
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  if (submitted) {
    return (
      <section id="contact" className="py-20 md:py-28 bg-black" aria-labelledby="contact-heading">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <CheckCircle className="w-16 h-16 text-gold mx-auto mb-6" aria-hidden="true" />
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-white mb-4">
            Message Sent!
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Thank you for reaching out. We'll get back to you within 24 hours.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="px-8 py-4 bg-gold text-black font-semibold rounded-sm hover:bg-gold-light transition-colors"
          >
            Send Another Message
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-black" aria-labelledby="contact-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div>
            <p className="text-gold font-medium tracking-[0.2em] uppercase text-sm mb-3">Get in Touch</p>
            <h2 id="contact-heading" className="font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Let's Create<br />
              <span className="text-gold">Something Beautiful</span>
            </h2>
            <div className="w-16 h-0.5 bg-gold mb-8" aria-hidden="true"></div>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Have a custom design in mind? Want to discuss your next outfit? 
              Reach out and let's bring your vision to life.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                  <Send className="w-4 h-4 text-gold" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-white/50 text-xs uppercase tracking-wider">WhatsApp</p>
                  <a href="https://wa.me/2347052656722" className="text-white hover:text-gold transition-colors" target="_blank" rel="noopener noreferrer">
                    +234 705 265 6722
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                  <Send className="w-4 h-4 text-gold" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-white/50 text-xs uppercase tracking-wider">Email</p>
                  <a href="mailto:info@nielsapparel.com" className="text-white hover:text-gold transition-colors">
                    info@nielsapparel.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 border border-white/10 rounded-sm p-6 md:p-8">
            <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
              <div className="space-y-5">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-white/80 text-sm font-medium mb-2">
                    Full Name <span className="text-gold" aria-hidden="true">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-white/5 border rounded-sm text-white placeholder-white/30 focus:outline-none focus:border-gold transition-colors ${
                      errors.name ? 'border-red-500' : 'border-white/20'
                    }`}
                    placeholder="Enter your full name"
                    required
                    aria-required="true"
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && (
                    <p id="name-error" className="text-red-400 text-xs mt-1" role="alert">{errors.name}</p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-white/80 text-sm font-medium mb-2">
                    Email Address <span className="text-gold" aria-hidden="true">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-white/5 border rounded-sm text-white placeholder-white/30 focus:outline-none focus:border-gold transition-colors ${
                      errors.email ? 'border-red-500' : 'border-white/20'
                    }`}
                    placeholder="your@email.com"
                    required
                    aria-required="true"
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && (
                    <p id="email-error" className="text-red-400 text-xs mt-1" role="alert">{errors.email}</p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-white/80 text-sm font-medium mb-2">
                    Message <span className="text-gold" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className={`w-full px-4 py-3 bg-white/5 border rounded-sm text-white placeholder-white/30 focus:outline-none focus:border-gold transition-colors resize-none ${
                      errors.message ? 'border-red-500' : 'border-white/20'
                    }`}
                    placeholder="Tell us about your design ideas..."
                    required
                    aria-required="true"
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    aria-invalid={!!errors.message}
                  />
                  {errors.message && (
                    <p id="message-error" className="text-red-400 text-xs mt-1" role="alert">{errors.message}</p>
                  )}
                </div>

                {/* Privacy Agreement Checkbox */}
                <div>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="agreed"
                      checked={formData.agreed}
                      onChange={handleChange}
                      className="mt-1 w-4 h-4 accent-gold rounded"
                      required
                      aria-required="true"
                      aria-describedby={errors.agreed ? 'agreed-error' : undefined}
                    />
                    <span className="text-white/60 text-sm">
                      I agree to the{' '}
                      <Link to="/privacy-policy" className="text-gold hover:underline" target="_blank">Privacy Policy</Link>
                      {' '}&{' '}
                      <Link to="/terms" className="text-gold hover:underline" target="_blank">Terms & Conditions</Link>
                      <span className="text-gold" aria-hidden="true"> *</span>
                    </span>
                  </label>
                  {errors.agreed && (
                    <p id="agreed-error" className="text-red-400 text-xs mt-1" role="alert">{errors.agreed}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gold text-black font-semibold rounded-sm hover:bg-gold-light transition-colors duration-200 text-sm tracking-wide flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" aria-hidden="true" />
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
