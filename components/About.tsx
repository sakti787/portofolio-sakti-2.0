"use client";

import { motion } from "framer-motion";

const skills = [
    'Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Shadcn UI', 'Framer Motion',
    'Recharts', 'Zustand', 'Laravel', 'PHP', 'Supabase', 'PostgreSQL',
    'PL/pgSQL', 'MySQL', 'RESTful API', 'Proxmox VE', 'Linux Containers (LXC)',
    'Nginx', 'Cloudflare Tunnel', 'PM2', 'Vercel', 'Git', 'NVM'
];

export default function About() {
    return (
        <section id="about" className="relative py-24 sm:py-32">
            {/* Subtle blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-neon-purple/5 blur-[120px] pointer-events-none" />

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
                        About{" "}
                        <span className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
                            Me
                        </span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-12 items-start">
                    {/* Avatar */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="flex justify-center md:justify-start"
                    >
                        <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 p-1 glow-cyan-sm">
                            <div className="w-full h-full rounded-full glass flex items-center justify-center text-5xl sm:text-6xl">
                                👨‍💻
                            </div>
                        </div>
                    </motion.div>

                    {/* Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <p className="text-foreground/70 leading-relaxed text-base sm:text-lg mb-8">
                            Saya seorang Frontend Developer yang passionate dalam membangun
                            website modern dan interaktif. Dengan pengalaman dalam berbagai
                            teknologi web, saya fokus pada pembuatan UI/UX yang elegan,
                            performa tinggi, dan responsif. Saya selalu antusias mempelajari
                            teknologi baru dan menerapkan best practices dalam setiap proyek.
                        </p>

                        {/* Skills Grid */}
                        <div>
                            <h3 className="text-sm font-semibold text-foreground/50 uppercase tracking-wider mb-4">
                                Skills & Technologies
                            </h3>
                            <div className="flex flex-wrap gap-2.5">
                                {skills.map((skill, i) => (
                                    <motion.span
                                        key={skill}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: i * 0.04 }}
                                        className="px-4 py-2 rounded-xl glass neon-border-hover text-sm font-medium text-foreground/80 transition-all duration-200"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
