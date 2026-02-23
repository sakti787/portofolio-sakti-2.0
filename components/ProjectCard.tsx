"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
    project: Project;
    index: number;
    onReadMore: (project: Project) => void;
}

export default function ProjectCard({ project, index, onReadMore }: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="group glass rounded-2xl overflow-hidden neon-border-hover transition-all duration-300 hover:shadow-xl flex flex-col"
        >
            {/* Image */}
            <div className="relative w-full aspect-video overflow-hidden">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Featured Badge */}
                {project.featured && (
                    <span className="absolute top-3 left-3 px-3 py-1 text-xs font-bold rounded-full bg-neon-cyan/90 text-gray-900 glow-cyan-sm z-10">
                        ⭐ Featured
                    </span>
                )}
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-bold mb-2 group-hover:text-neon-cyan transition-colors duration-200">
                    {project.title}
                </h3>
                <p className="text-sm text-foreground/60 line-clamp-2 mb-4 flex-1">
                    {project.description}
                </p>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                        <span
                            key={tech}
                            className="px-2.5 py-0.5 text-[11px] font-medium rounded-full glass text-foreground/70"
                        >
                            {tech}
                        </span>
                    ))}
                    {project.technologies.length > 4 && (
                        <span className="px-2.5 py-0.5 text-[11px] font-medium rounded-full glass text-foreground/50">
                            +{project.technologies.length - 4}
                        </span>
                    )}
                </div>

                {/* Buttons */}
                {(project.liveUrl || project.sourceUrl) && (
                    <div className="flex gap-2 mt-auto">
                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 px-3 py-2 rounded-lg bg-gradient-to-r from-neon-cyan to-neon-teal text-gray-900 font-semibold text-xs text-center transition-all duration-300 hover:shadow-md"
                            >
                                Live Demo
                            </a>
                        )}
                        {project.sourceUrl && (
                            <a
                                href={project.sourceUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 px-3 py-2 rounded-lg glass neon-border-hover font-semibold text-xs text-center transition-all duration-300"
                            >
                                Source Code
                            </a>
                        )}
                    </div>
                )}
                <button
                    onClick={() => onReadMore(project)}
                    className="mt-2 w-full px-3 py-2 rounded-lg text-xs font-medium text-neon-cyan hover:bg-neon-cyan/10 transition-all duration-200 cursor-pointer"
                >
                    Read more →
                </button>
            </div>
        </motion.div>
    );
}
