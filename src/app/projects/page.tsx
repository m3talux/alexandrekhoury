import Nav from "@/app/components/nav";
import Footer from "@/app/sections/footer";
import projects from "@/data/projects.json";
import Image from "next/image";
import type {Metadata} from "next";
import {JointlyPreview, WeProjectPreview} from "@/app/components/project-previews";

export const metadata: Metadata = {
    title: 'Projects | Alexandre El Khoury',
    description: 'Portfolio of projects by Alexandre El Khoury - including Jointly, WeProject, and other software development work.',
}

const featuredProjects = [
    {
        name: "Jointly",
        description: "Multi-currency finance app for couples in Lebanon. Track expenses across USD, EUR, LBP, and AED, manage joint accounts, get real-time financial health insights, and build wealth together. Features smart categorization, recurring transactions, and data export.",
        url: "https://jointly-app.com",
        role: "Founder & Lead Developer",
        tags: ["Next.js", "React", "PostgreSQL", "Finance", "PWA"],
        featured: true,
    },
    {
        name: "WeProject",
        description: "Wedding planning SaaS platform for couples. Manage guest lists with RSVP tracking, create seating arrangements with drag-and-drop, track budgets and expenses, organize to-do lists with timelines, and collaborate with your partner in real-time.",
        url: "https://app.theweproject.co",
        role: "Founder & Lead Developer",
        tags: ["Next.js", "TypeScript", "PostgreSQL", "SaaS", "MobX"],
        featured: true,
    },
]

export default function ProjectsPage() {
    const activeProjects = projects.filter(p => !p.archived)
    const archivedProjects = projects.filter(p => p.archived)

    return (
        <div className="min-h-screen flex flex-col">
            <Nav/>
            <main className="flex-1">
                <section className="py-16 sm:py-24">
                    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <p className="text-accent font-medium mb-2">Portfolio</p>
                            <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
                                Projects & Work
                            </h1>
                            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                                A collection of projects I&apos;ve built and contributed to throughout my career.
                            </p>
                        </div>

                        <div className="mb-20">
                            <h2 className="text-sm font-medium text-accent uppercase tracking-wider mb-8">Featured Projects</h2>
                            <div className="space-y-12">
                                <a
                                    href="https://jointly-app.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group block rounded-2xl bg-muted hover:shadow-xl transition-all duration-300 border border-transparent hover:border-accent/30 overflow-hidden"
                                >
                                    <div className="grid lg:grid-cols-2">
                                        <div className="p-8">
                                            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-emerald-500/10 text-emerald-500 mb-3">
                                                Finance App
                                            </span>
                                            <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors mb-4">
                                                Jointly
                                            </h3>
                                            <p className="text-muted-foreground mb-4 leading-relaxed">
                                                Multi-currency finance app for couples in Lebanon. Track expenses across USD, EUR, LBP, and AED, manage joint accounts, get real-time financial health insights, and build wealth together.
                                            </p>
                                            <p className="text-sm text-accent font-medium mb-4">Founder & Lead Developer</p>
                                            <div className="flex flex-wrap gap-2">
                                                {["Go", "MongoDB", "Next.js", "GCP"].map((tag) => (
                                                    <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full bg-background text-muted-foreground">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="p-6 bg-gradient-to-br from-emerald-950/50 to-background flex items-center justify-center">
                                            <JointlyPreview />
                                        </div>
                                    </div>
                                </a>

                                <a
                                    href="https://app.theweproject.co"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group block rounded-2xl bg-muted hover:shadow-xl transition-all duration-300 border border-transparent hover:border-accent/30 overflow-hidden"
                                >
                                    <div className="grid lg:grid-cols-2">
                                        <div className="p-8 lg:order-2">
                                            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-rose-500/10 text-rose-500 mb-3">
                                                Wedding Planning SaaS
                                            </span>
                                            <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors mb-4">
                                                WeProject
                                            </h3>
                                            <p className="text-muted-foreground mb-4 leading-relaxed">
                                                Wedding planning platform for couples. Manage guest lists with RSVP tracking, create seating arrangements with drag-and-drop, track budgets, and collaborate with your partner in real-time.
                                            </p>
                                            <p className="text-sm text-accent font-medium mb-4">Founder & Lead Developer</p>
                                            <div className="flex flex-wrap gap-2">
                                                {["Go", "MongoDB", "Next.js", "GCP"].map((tag) => (
                                                    <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full bg-background text-muted-foreground">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="p-6 bg-gradient-to-br from-rose-950/50 to-background flex items-center justify-center lg:order-1">
                                            <WeProjectPreview />
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="mb-20">
                            <h2 className="text-sm font-medium text-accent uppercase tracking-wider mb-8">Client & Contract Work</h2>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {activeProjects.map((project) => (
                                    <a
                                        key={project.name}
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group block p-6 rounded-xl bg-muted hover:shadow-lg transition-all duration-300"
                                    >
                                        <div className="flex items-center justify-between mb-4">
                                            <Image
                                                src={project.image}
                                                alt={project.name}
                                                width={project.imageWidth}
                                                height={50}
                                                className="h-8 w-auto object-contain"
                                            />
                                            <svg className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                                            </svg>
                                        </div>
                                        <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors mb-1">
                                            {project.name}
                                        </h3>
                                        <p className="text-sm text-accent mb-3">{project.position}</p>
                                        <p className="text-sm text-muted-foreground line-clamp-2">{project.summary}</p>
                                        <div className="mt-4 flex flex-wrap gap-1.5">
                                            {project.technologies.slice(0, 4).map((tech, i) => (
                                                <Image
                                                    key={i}
                                                    src={tech}
                                                    alt=""
                                                    width={16}
                                                    height={16}
                                                    className="w-4 h-4"
                                                />
                                            ))}
                                            {project.technologies.length > 4 && (
                                                <span className="text-xs text-muted-foreground">+{project.technologies.length - 4}</span>
                                            )}
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {archivedProjects.length > 0 && (
                            <div>
                                <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-8">Archived Projects</h2>
                                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                    {archivedProjects.map((project) => (
                                        <div
                                            key={project.name}
                                            className="p-4 rounded-lg bg-muted/50 opacity-75"
                                        >
                                            <div className="flex items-center gap-3 mb-2">
                                                <Image
                                                    src={project.image}
                                                    alt={project.name}
                                                    width={project.imageWidth}
                                                    height={30}
                                                    className="h-6 w-auto object-contain grayscale"
                                                />
                                            </div>
                                            <h3 className="font-medium text-foreground text-sm">{project.name}</h3>
                                            <p className="text-xs text-muted-foreground">{project.position}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
    )
}
