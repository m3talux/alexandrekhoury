import Nav from "@/app/components/nav";
import Footer from "@/app/sections/footer";
import Link from "next/link";
import Image from "next/image";

const featuredProjects = [
    {
        name: "Jointly",
        description: "A joint finance app designed for Lebanon, helping users manage shared finances with ease.",
        url: "https://jointly-app.com",
        role: "Founder & Developer",
        tags: ["Finance", "Mobile App", "Lebanon"],
    },
    {
        name: "WeProject",
        description: "A comprehensive wedding planning manager for couples to organize and manage their perfect day.",
        url: "https://app.theweproject.com",
        role: "Founder & Developer",
        tags: ["Wedding", "Planning", "SaaS"],
    },
]

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col">
            <Nav/>
            <main className="flex-1">
                <section className="relative py-24 sm:py-32 lg:py-40">
                    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl">
                            <p className="text-accent font-medium mb-4">Senior Software Engineer</p>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
                                Building robust, scalable software solutions
                            </h1>
                            <p className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed">
                                8+ years of experience crafting backend systems, cloud infrastructure, and full-stack applications.
                                Currently at Weaviate, driving AI-powered workflows and reliable cloud services.
                            </p>
                            <div className="mt-10 flex flex-wrap gap-4">
                                <Link
                                    href="/projects"
                                    className="inline-flex items-center px-6 py-3 rounded-lg bg-accent text-accent-foreground font-medium hover:bg-accent-600 transition-colors"
                                >
                                    View My Work
                                    <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                                    </svg>
                                </Link>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center px-6 py-3 rounded-lg border border-border text-foreground font-medium hover:bg-muted transition-colors"
                                >
                                    Get in Touch
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-24 bg-muted">
                    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12">
                            <div>
                                <p className="text-accent font-medium mb-2">Featured Projects</p>
                                <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                                    Recent Work
                                </h2>
                            </div>
                            <Link
                                href="/projects"
                                className="mt-4 sm:mt-0 text-accent hover:text-accent-600 font-medium inline-flex items-center"
                            >
                                View all projects
                                <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                                </svg>
                            </Link>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {featuredProjects.map((project) => (
                                <a
                                    key={project.name}
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group block p-6 sm:p-8 rounded-2xl bg-background border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300"
                                >
                                    <div className="flex items-start justify-between mb-4">
                                        <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                                            {project.name}
                                        </h3>
                                        <svg className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                                        </svg>
                                    </div>
                                    <p className="text-muted-foreground mb-4">{project.description}</p>
                                    <p className="text-sm text-accent font-medium mb-3">{project.role}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-3 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-24">
                    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <p className="text-accent font-medium mb-2">About Me</p>
                                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                                    Passionate about building great software
                                </h2>
                                <p className="text-muted-foreground leading-relaxed mb-6">
                                    I&apos;m a results-driven software engineer with deep expertise in backend development,
                                    cloud infrastructure, and full-stack applications. My focus is on delivering performant,
                                    reliable, and maintainable solutions.
                                </p>
                                <p className="text-muted-foreground leading-relaxed mb-8">
                                    Currently at Weaviate, I take ownership of end-to-end feature development,
                                    incident response, and cross-team collaboration. I&apos;m passionate about
                                    AI-powered tools and continuously exploring new technologies.
                                </p>
                                <Link
                                    href="/about"
                                    className="inline-flex items-center text-accent hover:text-accent-600 font-medium"
                                >
                                    Learn more about me
                                    <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                                    </svg>
                                </Link>
                            </div>
                            <div className="relative">
                                <div className="aspect-square rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                                    <div className="text-center p-8">
                                        <div className="w-32 h-32 mx-auto rounded-full bg-muted border-4 border-background shadow-lg flex items-center justify-center mb-4">
                                            <span className="text-4xl font-bold text-accent">AK</span>
                                        </div>
                                        <p className="text-sm text-muted-foreground">
                                            Add your professional photo here
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-24 bg-muted">
                    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                            Let&apos;s work together
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                            I&apos;m always open to discussing new opportunities, interesting projects,
                            or just having a chat about technology.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center px-8 py-4 rounded-lg bg-accent text-accent-foreground font-medium hover:bg-accent-600 transition-colors"
                        >
                            Get in Touch
                            <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                            </svg>
                        </Link>
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
    )
}
