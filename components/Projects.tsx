"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import type { Project } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

export default function Projects() {
    const [search, setSearch] = useState("");
    const [featuredOnly, setFeaturedOnly] = useState(false);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const filteredProjects = useMemo(() => {
        let result = [...projects];

        // Filter by search
        if (search.trim()) {
            const query = search.toLowerCase().trim();
            result = result.filter(
                (p) =>
                    p.title.toLowerCase().includes(query) ||
                    p.technologies.some((t) => t.toLowerCase().includes(query))
            );
        }

        // Filter featured only
        if (featuredOnly) {
            result = result.filter((p) => p.featured);
        }

        // No sorting — keep original order from data/projects.ts

        return result;
    }, [search, featuredOnly]);

    return (
        <section id="projects" className="relative py-24 sm:py-32">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                        My{" "}
                        <span className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
                            Projects
                        </span>
                    </h2>
                    <p className="text-foreground/60 max-w-xl mx-auto">
                        A selection of projects I&apos;ve worked on, showcasing my skills in web development.
                    </p>
                </motion.div>

                {/* Filters */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="flex flex-col sm:flex-row items-center gap-4 mb-10"
                >
                    {/* Search */}
                    <div className="relative flex-1 w-full sm:max-w-md">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/40"
                        >
                            <circle cx="11" cy="11" r="8" />
                            <line x1="21" y1="21" x2="16.65" y2="16.65" />
                        </svg>
                        <input
                            type="text"
                            placeholder="Search projects or technologies..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 rounded-xl glass neon-border-hover text-sm bg-transparent outline-none focus:ring-2 focus:ring-neon-cyan/30 transition-all duration-200 placeholder:text-foreground/30"
                        />
                    </div>

                    {/* Featured Toggle */}
                    <button
                        onClick={() => setFeaturedOnly(!featuredOnly)}
                        className={`px-5 py-3 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer ${featuredOnly
                            ? "bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/30 glow-cyan-sm"
                            : "glass neon-border-hover text-foreground/70"
                            }`}
                    >
                        ⭐ Featured only
                    </button>
                </motion.div>

                {/* Project Grid */}
                {filteredProjects.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredProjects.map((project, index) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                index={index}
                                onReadMore={setSelectedProject}
                            />
                        ))}
                    </div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-16"
                    >
                        <p className="text-foreground/40 text-lg">No projects found matching your search.</p>
                    </motion.div>
                )}
            </div>

            {/* Modal */}
            <ProjectModal
                project={selectedProject}
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </section>
    );
}
