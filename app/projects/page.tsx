"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, Sparkles, Filter } from "lucide-react";

const projects = [
  {
    title: "StudyFlow – Personal Study Planner",
    stack: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    focus: "Front-end fundamentals and responsive layout.",
    bullets: [
      "Built a responsive layout that works across mobile and desktop.",
      "Handled task creation, prioritization, and filtering with vanilla JavaScript.",
      "Persisted tasks locally so data survives page reloads.",
    ],
    category: "Frontend",
    status: "Completed",
    github: "#",
    live: "#",
  },
  {
    title: "CampusConnect – Mini Community Board",
    stack: ["React", "CSS Modules", "Mock JSON API"],
    focus: "Component-based UI and data fetching in React.",
    bullets: [
      "Designed reusable components for posts, tags, and search.",
      "Managed state for creating and filtering posts.",
      "Integrated a mock API to simulate real data flows.",
    ],
    category: "React",
    status: "In Progress",
    github: "#",
    live: "#",
  },
  {
    title: "DevPortfolio v2 – This Portfolio",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    focus: "Production-ready portfolio with modern tooling.",
    bullets: [
      "Built a fast, SEO-friendly site with file-based routing.",
      "Used reusable components for sections and project cards.",
      "Prepared for simple deployment and continuous delivery on Vercel.",
    ],
    category: "Full Stack",
    status: "Completed",
    github: "#",
    live: "#",
  },
];

const categories = ["All", "Frontend", "React", "Full Stack"];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="relative min-h-screen">
      {/* Animated background */}
      <div className="fixed inset-0 bg-gradient-to-br from-violet-50/50 via-white/50 to-cyan-50/50 dark:from-gray-900/50 dark:via-gray-950/50 dark:to-gray-900/50" />
      
      <div className="relative z-10">
        {/* Header (global Navbar comes from layout.tsx) */}
        <div className="pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-12">
              <div>
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-violet-100 to-fuchsia-100 dark:from-violet-900/30 dark:to-fuchsia-900/30 border border-violet-200 dark:border-violet-800 mb-6">
                  <Sparkles className="w-4 h-4 text-violet-600 dark:text-violet-400" />
                  <span className="text-sm font-medium text-violet-700 dark:text-violet-300">
                    Featured Work
                  </span>
                </div>
                
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-500 animate-gradient">
                    Projects
                  </span>
                </h1>
                
                <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl">
                  A collection of my work that showcases my growth as a developer, from foundational web projects to modern full-stack applications.
                </p>
              </div>

              <div className="flex items-center gap-4">
                <Filter className="w-5 h-5 text-gray-400" />
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                        selectedCategory === category
                          ? "bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-lg shadow-violet-500/30"
                          : "bg-white/50 dark:bg-gray-900/50 text-gray-600 dark:text-gray-400 hover:bg-violet-50 dark:hover:bg-violet-900/30 hover:text-violet-700 dark:hover:text-violet-300"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="pb-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-8">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.title}
                  className="group relative overflow-hidden rounded-3xl border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm hover-3d transition-all duration-500"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Status badge */}
                  <div className="absolute top-6 right-6 z-10">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === "Completed"
                        ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800"
                        : "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 border border-yellow-200 dark:border-yellow-800"
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  <div className="p-8">
                    <div className="flex items-start justify-between gap-6 mb-8">
                      <div>
                        <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-2xl flex items-center justify-center text-white font-bold text-2xl mb-6 group-hover:rotate-12 transition-transform">
                          0{index + 1}
                        </div>
                        
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                          {project.title}
                        </h2>
                        
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                          {project.focus}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 text-sm font-medium rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-violet-800 hover:bg-violet-200 dark:hover:bg-violet-800/50 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <ul className="space-y-4 mb-8">
                      {project.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                          <div className="w-6 h-6 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <div className="w-2 h-2 bg-white rounded-full" />
                          </div>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex items-center gap-4 pt-6 border-t border-gray-200 dark:border-gray-800">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                      >
                        <Github className="w-5 h-5" />
                        <span className="text-sm font-medium">Code</span>
                      </a>
                      
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                        <span className="text-sm font-medium">Live Demo</span>
                      </a>
                    </div>
                  </div>
                  
                  {/* Hover gradient effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-500/0 via-fuchsia-500/0 to-cyan-500/0 group-hover:from-violet-500/5 group-hover:via-fuchsia-500/5 group-hover:to-cyan-500/5 transition-all duration-500 pointer-events-none" />
                </div>
              ))}
            </div>
            
            {/* Empty state */}
            {filteredProjects.length === 0 && (
              <div className="text-center py-20">
                <div className="w-24 h-24 bg-gradient-to-br from-violet-100 to-fuchsia-100 dark:from-violet-900/30 dark:to-fuchsia-900/30 rounded-3xl flex items-center justify-center mx-auto mb-6">
                  <Filter className="w-12 h-12 text-violet-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  No projects found
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Try selecting a different category to see more projects.
                </p>
                <button
                  onClick={() => setSelectedCategory("All")}
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-medium hover:shadow-lg hover:shadow-violet-500/30 transition-all"
                >
                  View All Projects
                </button>
              </div>
            )}
            
            {/* Stats */}
            <div className="mt-20 p-8 rounded-3xl bg-gradient-to-br from-violet-500/5 via-fuchsia-500/5 to-cyan-500/5 border border-violet-200/50 dark:border-gray-800">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600 mb-2">
                    {projects.length}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600 mb-2">
                    {projects.filter(p => p.status === "Completed").length}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600 mb-2">
                    4+
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">Technologies</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600 mb-2">
                    100%
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">Passion</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}