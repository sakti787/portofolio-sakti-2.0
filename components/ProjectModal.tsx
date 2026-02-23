"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import type { Project } from "@/data/projects";

interface ProjectModalProps {
    project: Project | null;
    isOpen: boolean;
    onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
    if (!project) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4"
                    onClick={onClose}
                >
                    {/* Backdrop */}
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        onClick={(e) => e.stopPropagation()}
                        className="relative z-10 w-full max-w-2xl max-h-[85vh] overflow-y-auto glass-strong rounded-2xl shadow-2xl"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-20 w-8 h-8 rounded-lg glass flex items-center justify-center hover:bg-white/20 dark:hover:bg-white/10 transition-colors cursor-pointer"
                            aria-label="Close modal"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-4 h-4"
                            >
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button>

                        {/* Image */}
                        <div className="relative w-full aspect-video">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover rounded-t-2xl"
                                sizes="(max-width: 672px) 100vw, 672px"
                            />
                            {project.featured && (
                                <span className="absolute top-4 left-4 px-3 py-1 text-xs font-bold rounded-full bg-neon-cyan/90 text-gray-900 glow-cyan-sm">
                                    ⭐ Featured
                                </span>
                            )}
                        </div>

                        {/* Content */}
                        <div className="p-6 sm:p-8">
                            <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                            <p className="text-foreground/70 leading-relaxed mb-6">
                                {project.description}
                            </p>

                            {/* Tech Chips */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1 text-xs font-medium rounded-full glass text-foreground/80"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Action Buttons */}
                            {(project.liveUrl || project.sourceUrl) && (
                                <div className="flex flex-col sm:flex-row gap-3">
                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 px-6 py-3 rounded-xl bg-gradient-to-r from-neon-cyan to-neon-teal text-gray-900 font-semibold text-sm text-center glow-cyan-sm transition-all duration-300 hover:shadow-lg"
                                        >
                                            🔗 Live Demo
                                        </a>
                                    )}
                                    {project.sourceUrl && (
                                        <a
                                            href={project.sourceUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 px-6 py-3 rounded-xl glass neon-border-hover font-semibold text-sm text-center transition-all duration-300"
                                        >
                                            💻 Source Code
                                        </a>
                                    )}
                                </div>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
