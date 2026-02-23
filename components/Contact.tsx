"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const quickLinks = [
    {
        label: "Email",
        href: "sakti787@gmail.com",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
        ),
    },
    {
        label: "Instagram",
        href: "https://instagram.com/saktii787",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
        ),
    },
    {
        label: "GitHub",
        href: "https://github.com/sakti787",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
        ),
    },
    {
        label: "LinkedIn",
        href: "https://linkedin.com/in/sakti787",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
            </svg>
        ),
    },
];

export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [toast, setToast] = useState(false);
    const [errors, setErrors] = useState<Record<string, boolean>>({});

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Validation
        const newErrors: Record<string, boolean> = {};
        if (!form.name.trim()) newErrors.name = true;
        if (!form.email.trim()) newErrors.email = true;
        if (!form.message.trim()) newErrors.message = true;

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setErrors({});

        // Build mailto link
        const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
        const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
        window.open(`mailto:sakti787@gmail.com?subject=${subject}&body=${body}`, "_self");

        setToast(true);
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setToast(false), 3000);
    };

    return (
        <section id="contact" className="relative py-24 sm:py-32">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-neon-cyan/5 blur-[100px] pointer-events-none" />

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                        Get in{" "}
                        <span className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
                            Touch
                        </span>
                    </h2>
                    <p className="text-foreground/60 max-w-xl mx-auto">
                        Feel free to reach out for collaborations, questions, or just to say hi!
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-sm font-semibold text-foreground/50 uppercase tracking-wider mb-6">
                            Quick Links
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {quickLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 px-5 py-4 rounded-xl glass neon-border-hover transition-all duration-200 group"
                                >
                                    <span className="text-neon-cyan group-hover:glow-text-cyan transition-all duration-200">
                                        {link.icon}
                                    </span>
                                    <span className="text-sm font-medium text-foreground/70 group-hover:text-foreground transition-colors">
                                        {link.label}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <h3 className="text-sm font-semibold text-foreground/50 uppercase tracking-wider mb-6">
                            Send a Message
                        </h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <input
                                    type="text"
                                    placeholder="Your Name *"
                                    value={form.name}
                                    onChange={(e) => {
                                        setForm({ ...form, name: e.target.value });
                                        if (errors.name) setErrors({ ...errors, name: false });
                                    }}
                                    className={`w-full px-4 py-3 rounded-xl glass text-sm bg-transparent outline-none transition-all duration-200 placeholder:text-foreground/30 focus:ring-2 focus:ring-neon-cyan/30 ${errors.name ? "ring-2 ring-red-400/50" : "neon-border-hover"
                                        }`}
                                />
                                {errors.name && (
                                    <p className="text-red-400 text-xs mt-1">Name is required</p>
                                )}
                            </div>
                            <div>
                                <input
                                    type="email"
                                    placeholder="Your Email *"
                                    value={form.email}
                                    onChange={(e) => {
                                        setForm({ ...form, email: e.target.value });
                                        if (errors.email) setErrors({ ...errors, email: false });
                                    }}
                                    className={`w-full px-4 py-3 rounded-xl glass text-sm bg-transparent outline-none transition-all duration-200 placeholder:text-foreground/30 focus:ring-2 focus:ring-neon-cyan/30 ${errors.email ? "ring-2 ring-red-400/50" : "neon-border-hover"
                                        }`}
                                />
                                {errors.email && (
                                    <p className="text-red-400 text-xs mt-1">Email is required</p>
                                )}
                            </div>
                            <div>
                                <textarea
                                    placeholder="Your Message *"
                                    rows={5}
                                    value={form.message}
                                    onChange={(e) => {
                                        setForm({ ...form, message: e.target.value });
                                        if (errors.message) setErrors({ ...errors, message: false });
                                    }}
                                    className={`w-full px-4 py-3 rounded-xl glass text-sm bg-transparent outline-none transition-all duration-200 placeholder:text-foreground/30 focus:ring-2 focus:ring-neon-cyan/30 resize-none ${errors.message ? "ring-2 ring-red-400/50" : "neon-border-hover"
                                        }`}
                                />
                                {errors.message && (
                                    <p className="text-red-400 text-xs mt-1">Message is required</p>
                                )}
                            </div>
                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full px-6 py-3.5 rounded-xl bg-gradient-to-r from-neon-cyan to-neon-teal text-gray-900 font-semibold text-sm glow-cyan transition-all duration-300 hover:shadow-lg cursor-pointer"
                            >
                                Send Message
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>

            {/* Toast */}
            <AnimatePresence>
                {toast && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        className="fixed bottom-6 right-6 z-[200] px-6 py-4 rounded-xl glass-strong glow-cyan-sm shadow-2xl flex items-center gap-3"
                    >
                        <span className="text-neon-cyan text-lg">✓</span>
                        <span className="text-sm font-medium">Message prepared! Thank you.</span>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
