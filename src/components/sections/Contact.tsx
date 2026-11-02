import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Copy, Check, Send, Sparkles, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import confetti from 'canvas-confetti';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const fireConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#C5A059', '#1B1B1B', '#527960', '#F7F5EF']
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    const name = formData.name.trim();
    const email = formData.email.trim();
    const subject = formData.subject.trim();
    const message = formData.message.trim();

    if (!name || !email || !message) return;

    setLoading(true);

    const endpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT;
    const web3formsKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    try {
      if (web3formsKey) {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify({
            access_key: web3formsKey,
            name,
            email,
            subject: subject || 'Portfolio Contact Inquiry',
            message,
            from_name: 'Astik Das Portfolio'
          })
        });

        if (!response.ok) {
          throw new Error('Delivery service responded with an error.');
        }
      } else if (endpoint) {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify({ name, email, subject, message })
        });

        if (!response.ok) {
          throw new Error('Message dispatch endpoint returned an error.');
        }
      } else {
        // Fallback simulation delay when no third-party endpoint is configured
        await new Promise((resolve) => setTimeout(resolve, 600));
      }

      setLoading(false);
      setSubmitted(true);
      fireConfetti();
    } catch {
      setLoading(false);
      setErrorMessage(
        'Unable to deliver message automatically right now. Please reach out directly via your preferred email client.'
      );
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Top Eyebrow */}
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-brass-500 mb-6">
          <Sparkles className="w-4 h-4 text-brass-500" />
          <span>05 • Get In Touch</span>
        </div>

        {/* Oversized Editorial Headline */}
        <div className="max-w-3xl mb-16">
          <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-extrabold text-charcoal-850 dark:text-cream-100 tracking-tight leading-[1.08]">
            Have an interesting project in mind?{' '}
            <span className="font-serif italic font-normal text-charcoal-500 dark:text-cream-300">
              Let&apos;s talk.
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-charcoal-600 dark:text-cream-300 font-sans leading-relaxed">
            Whether you&apos;re looking for an eager cybersecurity intern, want to collaborate on open-source network tools, or just want to discuss software architecture—my inbox is always open.
          </p>
        </div>

        {/* Contact Layout: Left Social Cards + Right Interactive Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Links & Info */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Card with 1-Click Copy */}
            <div className="p-8 rounded-3xl bg-cream-50 dark:bg-charcoal-850 border border-cream-300 dark:border-charcoal-700 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-charcoal-400 dark:text-cream-500">
                  Electronic Mail
                </span>
                <Mail className="w-4 h-4 text-brass-500" />
              </div>
              <div className="font-mono text-sm sm:text-base font-semibold text-charcoal-850 dark:text-cream-100 break-all select-all">
                {PERSONAL_INFO.socials.email}
              </div>
              <div className="mt-4 pt-4 border-t border-cream-200 dark:border-charcoal-700 flex items-center justify-between">
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-charcoal-700 dark:text-cream-200 hover:text-brass-600 dark:hover:text-brass-400 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-500">Copied to clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy email address</span>
                    </>
                  )}
                </button>
                <a
                  href={`mailto:${PERSONAL_INFO.socials.email}`}
                  className="text-xs font-mono text-charcoal-400 dark:text-cream-500 hover:underline"
                >
                  Open client ↗
                </a>
              </div>
            </div>

            {/* Social Network Links */}
            <div className="space-y-3">
              {/* GitHub Link */}
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-cream-50 dark:bg-charcoal-850 border border-cream-300 dark:border-charcoal-700 hover:border-charcoal-850 dark:hover:border-cream-100 flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cream-200 dark:bg-charcoal-800 flex items-center justify-center text-charcoal-850 dark:text-cream-100 group-hover:bg-charcoal-850 group-hover:text-cream-100 dark:group-hover:bg-cream-100 dark:group-hover:text-charcoal-900 transition-colors">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-editorial font-bold text-sm text-charcoal-850 dark:text-cream-100">
                      GitHub
                    </div>
                    <div className="text-xs font-mono text-charcoal-500 dark:text-cream-400">
                      github.com/astikdas11
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-charcoal-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* LinkedIn Link */}
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-cream-50 dark:bg-charcoal-850 border border-cream-300 dark:border-charcoal-700 hover:border-charcoal-850 dark:hover:border-cream-100 flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cream-200 dark:bg-charcoal-800 flex items-center justify-center text-charcoal-850 dark:text-cream-100 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-editorial font-bold text-sm text-charcoal-850 dark:text-cream-100">
                      LinkedIn
                    </div>
                    <div className="text-xs font-mono text-charcoal-500 dark:text-cream-400">
                      linkedin.com/in/astik-das
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-charcoal-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Availability context note */}
            <div className="p-4 rounded-2xl bg-cream-200/50 dark:bg-charcoal-800/50 border border-cream-300 dark:border-charcoal-700 text-xs font-mono text-charcoal-600 dark:text-cream-400">
              <span className="font-semibold text-charcoal-850 dark:text-cream-100">Location: </span>
              {PERSONAL_INFO.location}
            </div>

          </div>

          {/* Right Column: Interactive Direct Message Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-cream-50 dark:bg-charcoal-850 border border-cream-300 dark:border-charcoal-700 shadow-sm relative">
              <h3 className="font-editorial text-2xl font-bold text-charcoal-850 dark:text-cream-100 tracking-tight mb-2">
                Send a message directly
              </h3>
              <p className="text-xs font-mono text-charcoal-500 dark:text-cream-400 mb-8">
                Fill in the details below and I&apos;ll get back to you promptly.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 text-center space-y-3"
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-md">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="font-editorial text-xl font-bold text-emerald-900 dark:text-emerald-200">
                    Message Dispatched!
                  </h4>
                  <p className="text-xs sm:text-sm text-emerald-700 dark:text-emerald-300 font-sans max-w-sm mx-auto">
                    Thank you for reaching out, {formData.name}. I look forward to connecting with you.
                  </p>
                  <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', subject: '', message: '' });
                      }}
                      className="px-4 py-2 rounded-full bg-emerald-600 text-white text-xs font-mono hover:bg-emerald-700 transition-colors"
                    >
                      Send another note
                    </button>
                    <a
                      href={`mailto:${PERSONAL_INFO.socials.email}?subject=${encodeURIComponent(
                        formData.subject || 'Portfolio Inquiry'
                      )}&body=${encodeURIComponent(
                        `Hi Astik,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
                      )}`}
                      className="px-4 py-2 rounded-full bg-cream-200 dark:bg-charcoal-700 text-charcoal-800 dark:text-cream-200 text-xs font-mono hover:bg-cream-300 dark:hover:bg-charcoal-600 transition-colors"
                    >
                      Open in mail client ↗
                    </a>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {errorMessage && (
                    <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-300 dark:border-amber-800 text-xs font-mono text-amber-800 dark:text-amber-200 space-y-2">
                      <p>{errorMessage}</p>
                      <a
                        href={`mailto:${PERSONAL_INFO.socials.email}?subject=${encodeURIComponent(
                          formData.subject || 'Portfolio Inquiry'
                        )}&body=${encodeURIComponent(
                          `Hi Astik,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
                        )}`}
                        className="inline-flex items-center gap-1 font-semibold underline hover:text-amber-900 dark:hover:text-amber-100"
                      >
                        Click to open in your email client instead ↗
                      </a>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label 
                        htmlFor="contact-name"
                        className="block text-xs font-mono uppercase tracking-wider text-charcoal-600 dark:text-cream-400 mb-2"
                      >
                        Your Name *
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        maxLength={100}
                        autoComplete="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Rivera"
                        className="w-full px-4 py-3 rounded-2xl bg-cream-100 dark:bg-charcoal-800 border border-cream-300 dark:border-charcoal-700 text-charcoal-850 dark:text-cream-100 text-sm focus:outline-none focus:ring-2 focus:ring-charcoal-850 dark:focus:ring-cream-100 transition-all font-sans"
                      />
                    </div>

                    <div>
                      <label 
                        htmlFor="contact-email"
                        className="block text-xs font-mono uppercase tracking-wider text-charcoal-600 dark:text-cream-400 mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        maxLength={100}
                        autoComplete="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@example.com"
                        className="w-full px-4 py-3 rounded-2xl bg-cream-100 dark:bg-charcoal-800 border border-cream-300 dark:border-charcoal-700 text-charcoal-850 dark:text-cream-100 text-sm focus:outline-none focus:ring-2 focus:ring-charcoal-850 dark:focus:ring-cream-100 transition-all font-sans"
                      />
                    </div>
                  </div>

                  <div>
                    <label 
                      htmlFor="contact-subject"
                      className="block text-xs font-mono uppercase tracking-wider text-charcoal-600 dark:text-cream-400 mb-2"
                    >
                      Topic / Subject
                    </label>
                    <input
                      id="contact-subject"
                      name="subject"
                      type="text"
                      maxLength={150}
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Internship opportunity / TraceHawk discussion"
                      className="w-full px-4 py-3 rounded-2xl bg-cream-100 dark:bg-charcoal-800 border border-cream-300 dark:border-charcoal-700 text-charcoal-850 dark:text-cream-100 text-sm focus:outline-none focus:ring-2 focus:ring-charcoal-850 dark:focus:ring-cream-100 transition-all font-sans"
                    />
                  </div>

                  <div>
                    <label 
                      htmlFor="contact-message"
                      className="block text-xs font-mono uppercase tracking-wider text-charcoal-600 dark:text-cream-400 mb-2"
                    >
                      Your Message *
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      maxLength={3000}
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your project, idea, or how we might collaborate..."
                      className="w-full px-4 py-3 rounded-2xl bg-cream-100 dark:bg-charcoal-800 border border-cream-300 dark:border-charcoal-700 text-charcoal-850 dark:text-cream-100 text-sm focus:outline-none focus:ring-2 focus:ring-charcoal-850 dark:focus:ring-cream-100 transition-all font-sans resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-charcoal-850 dark:bg-cream-100 hover:bg-black dark:hover:bg-white text-cream-100 dark:text-charcoal-900 font-sans font-semibold text-sm shadow-md hover:shadow-xl transition-all flex items-center justify-center gap-2 group disabled:opacity-50"
                  >
                    <span>{loading ? 'Sending message...' : 'Send Message'}</span>
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

