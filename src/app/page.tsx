import Nav from "@/app/components/nav";
import Footer from "@/app/sections/footer";
import Link from "next/link";
import Image from "next/image";

const featuredProjects = [
    {
        name: "Jointly",
        description: "Multi-currency finance app for couples in Lebanon. Track expenses, manage joint accounts, and get real-time insights with support for USD, EUR, LBP, and AED.",
        url: "https://jointly-app.com",
        role: "Founder & Developer",
        tags: ["Go", "MongoDB", "Next.js"],
    },
    {
        name: "WeProject",
        description: "Wedding planning SaaS platform. Manage guests, budgets, seating arrangements, and to-do lists all in one place. Built for couples planning their perfect day.",
        url: "https://app.theweproject.co",
        role: "Founder & Developer",
        tags: ["Go", "MongoDB", "GCP"],
    },
]

const techStack = [
    {name: "Go", icon: "/svg/go.svg"},
    {name: "Next.js", icon: "/svg/next.svg"},
    {name: "React", icon: "/svg/react.svg"},
    {name: "MongoDB", icon: "/svg/mongodb.svg"},
    {name: "Docker", icon: "/svg/docker.svg"},
    {name: "Kubernetes", icon: "/svg/kubernetes.svg"},
    {name: "AWS", icon: "/svg/aws.svg"},
]

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col">
            <Nav/>
            <main className="flex-1">
                <section className="relative py-20 sm:py-28 lg:py-32">
                    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-5 gap-12 items-center">
                            <div className="lg:col-span-3">
                                <p className="text-accent font-medium mb-4">Senior Software Engineer @ Weaviate</p>
                                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
                                    Hi, I&apos;m Alexandre
                                </h1>
                                <p className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed">
                                    I build robust, scalable backend systems and full-stack applications. With 9 years of experience,
                                    I specialize in Go, TypeScript, and cloud infrastructure—delivering performant solutions that scale.
                                </p>
                                <div className="mt-8 flex flex-wrap gap-4">
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
                                <div className="mt-10 pt-8 border-t border-border">
                                    <p className="text-sm text-muted-foreground mb-4">Technologies I work with</p>
                                    <div className="flex flex-wrap gap-4">
                                        {techStack.map((tech) => (
                                            <div key={tech.name} className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-muted">
                                                <Image src={tech.icon} alt={tech.name} width={20} height={20} className="w-5 h-5"/>
                                                <span className="text-sm text-foreground">{tech.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="lg:col-span-2 flex justify-center">
                                <div className="relative">
                                    <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden shadow-2xl">
                                        <Image
                                            src="/images/profile.jpeg"
                                            alt="Alexandre El Khoury"
                                            width={320}
                                            height={320}
                                            className="w-full h-full object-cover"
                                            priority
                                        />
                                    </div>
                                    <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-xl bg-accent/10 -z-10"/>
                                    <div className="absolute -top-4 -left-4 w-16 h-16 rounded-lg bg-accent/20 -z-10"/>
                                </div>
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

                <section className="py-20">
                    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <p className="text-accent font-medium mb-2">What I Do</p>
                            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                                End-to-End Software Development
                            </h2>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="p-6 rounded-xl bg-muted">
                                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"/>
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-foreground mb-2">Backend Systems</h3>
                                <p className="text-muted-foreground text-sm">
                                    Building scalable microservices, APIs, and distributed systems with Go, Node.js, and cloud-native technologies.
                                </p>
                            </div>
                            <div className="p-6 rounded-xl bg-muted">
                                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/>
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-foreground mb-2">Cloud Infrastructure</h3>
                                <p className="text-muted-foreground text-sm">
                                    Designing and maintaining resilient cloud services on AWS and GCP with Kubernetes, Docker, and Terraform.
                                </p>
                            </div>
                            <div className="p-6 rounded-xl bg-muted">
                                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-foreground mb-2">Full-Stack Apps</h3>
                                <p className="text-muted-foreground text-sm">
                                    Creating modern web and mobile applications with React, Next.js, and Flutter—from concept to deployment.
                                </p>
                            </div>
                        </div>
                        <div className="mt-12 text-center">
                            <Link
                                href="/about"
                                className="inline-flex items-center text-accent hover:text-accent-600 font-medium"
                            >
                                Learn more about my background
                                <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                                </svg>
                            </Link>
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
