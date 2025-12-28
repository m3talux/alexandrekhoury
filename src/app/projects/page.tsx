import Nav from "@/app/components/nav";
import Footer from "@/app/sections/footer";
import projects from "@/data/projects.json";
import Image from "next/image";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Projects | Alexandre El Khoury',
    description: 'Portfolio of projects by Alexandre El Khoury - including Jointly, WeProject, and other software development work.',
}

const featuredProjects = [
    {
        name: "Jointly",
        description: "A joint finance app designed specifically for Lebanon, helping users manage shared finances with ease. Built to address the unique financial challenges faced by Lebanese users, Jointly simplifies expense tracking, bill splitting, and financial collaboration between partners, roommates, or family members.",
        url: "https://jointly-app.com",
        role: "Founder & Lead Developer",
        tags: ["React Native", "Node.js", "PostgreSQL", "Finance", "Mobile App"],
        featured: true,
    },
    {
        name: "WeProject",
        description: "A comprehensive wedding planning manager for couples to organize and manage their perfect day. From guest lists and seating arrangements to vendor management and budget tracking, WeProject provides all the tools couples need to plan their wedding stress-free.",
        url: "https://app.theweproject.com",
        role: "Founder & Lead Developer",
        tags: ["Next.js", "TypeScript", "PostgreSQL", "SaaS", "Wedding Planning"],
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
                            <div className="grid lg:grid-cols-2 gap-8">
                                {featuredProjects.map((project) => (
                                    <a
                                        key={project.name}
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group block p-8 rounded-2xl bg-muted hover:shadow-xl transition-all duration-300 border border-transparent hover:border-accent/30"
                                    >
                                        <div className="flex items-start justify-between mb-4">
                                            <div>
                                                <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent mb-3">
                                                    Featured
                                                </span>
                                                <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
                                                    {project.name}
                                                </h3>
                                            </div>
                                            <svg className="w-6 h-6 text-muted-foreground group-hover:text-accent transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                                            </svg>
                                        </div>
                                        <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                                        <p className="text-sm text-accent font-medium mb-4">{project.role}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="px-3 py-1 text-xs font-medium rounded-full bg-background text-muted-foreground"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </a>
                                ))}
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
