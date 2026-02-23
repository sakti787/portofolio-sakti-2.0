"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
        >
            {/* Decorative Blobs */}
            <div className="blob blob-1" />
            <div className="blob blob-2" />

            {/* Grid Pattern */}
            <div
                className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(34,211,238,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.3) 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                }}
            />

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    {/* Greeting Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1, duration: 0.4 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium mb-8"
                    >
                        <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
                        <span className="text-foreground/70">Available for work</span>
                    </motion.div>

                    {/* Headline */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-6">
                        Hi, I&apos;m{" "}
                        <span className="bg-gradient-to-r from-neon-cyan via-neon-teal to-neon-purple bg-clip-text text-transparent">
                            Sakti Indra Heradewa
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-lg sm:text-xl md:text-2xl text-foreground/60 font-medium mb-10 max-w-2xl mx-auto">
                        Frontend Developer / Web Developer
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-neon-cyan to-neon-teal text-gray-900 font-semibold text-sm glow-cyan transition-all duration-300 hover:shadow-lg w-full sm:w-auto text-center"
                        >
                            View Projects
                        </motion.a>
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="px-8 py-3.5 rounded-xl glass neon-border-hover font-semibold text-sm transition-all duration-300 w-full sm:w-auto text-center"
                        >
                            Contact Me
                        </motion.a>
                    </div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="flex items-center justify-center gap-8 sm:gap-12"
                    >
                        {[
                            { value: "3+", label: "Projects" },
                            { value: "5+", label: "Technologies" },
                            { value: "1+", label: "Years" },
                        ].map((stat) => (
                            <div key={stat.label} className="text-center">
                                <div className="text-2xl sm:text-3xl font-bold text-neon-cyan">
                                    {stat.value}
                                </div>
                                <div className="text-xs sm:text-sm text-foreground/50 mt-1">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </section>
    );
}
