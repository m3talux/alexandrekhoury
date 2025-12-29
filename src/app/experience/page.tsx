import Nav from "@/app/components/nav";
import Footer from "@/app/sections/footer";
import experiences from "@/data/experiences.json";
import Image from "next/image";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Experience | Alexandre El Khoury',
    description: 'Professional experience and career journey of Alexandre El Khoury - Senior Software Engineer.',
}

export default function ExperiencePage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Nav/>
            <main className="flex-1">
                <section className="py-16 sm:py-24">
                    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <p className="text-accent font-medium mb-2">Career Journey</p>
                            <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
                                Professional Experience
                            </h1>
                            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                                A timeline of my professional growth and the companies I&apos;ve had the privilege to work with.
                            </p>
                        </div>

                        <div className="relative">
                            {/* Timeline line - left on mobile, center on desktop */}
                            <div className="absolute left-[18px] md:left-1/2 top-0 bottom-0 w-1 bg-accent md:-translate-x-0.5"/>

                            <div className="space-y-8">
                                {experiences.map((exp, index) => (
                                    <div
                                        key={index}
                                        className="relative grid md:grid-cols-2 gap-8"
                                    >
                                        {/* Timeline dot */}
                                        <div className="absolute left-2 md:left-1/2 w-5 h-5 bg-accent rounded-full border-4 border-background shadow-lg md:-translate-x-2.5 top-6 z-10"/>
                                        
                                        {/* Content - alternates sides on desktop */}
                                        <div className={`pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pr-12 md:col-start-1' : 'md:pl-12 md:col-start-2'}`}>
                                            <div className="p-5 rounded-xl bg-muted hover:shadow-lg transition-shadow">
                                                <div className="flex items-start gap-4 mb-4">
                                                    <a
                                                        href={exp.companyURL}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="shrink-0"
                                                    >
                                                        <Image
                                                            src={exp.companyImg}
                                                            alt={exp.companyTitle}
                                                            width={48}
                                                            height={48}
                                                            className="w-12 h-12 object-contain rounded-lg bg-background p-1"
                                                        />
                                                    </a>
                                                    <div className="min-w-0">
                                                        <h3 className="font-semibold text-foreground">{exp.title}</h3>
                                                        <a
                                                            href={exp.companyURL}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="text-accent hover:underline"
                                                        >
                                                            {exp.companyTitle}
                                                        </a>
                                                    </div>
                                                </div>

                                                <div className="flex flex-wrap gap-2 text-sm text-muted-foreground mb-4">
                                                    <span className="flex items-center gap-1">
                                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                                                        </svg>
                                                        {exp.period}
                                                    </span>
                                                    <span className="flex items-center gap-1">
                                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                                                        </svg>
                                                        {exp.location}
                                                    </span>
                                                    {index === 0 && (
                                                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-accent/10 text-accent">
                                                            Current
                                                        </span>
                                                    )}
                                                </div>

                                                <ul className="space-y-2">
                                                    {exp.achievements.map((achievement, i) => (
                                                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                            <svg className="w-4 h-4 text-accent shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                                                            </svg>
                                                            {achievement}
                                                        </li>
                                                    ))}
                                                </ul>

                                                {exp.kpis && exp.kpis.length > 0 && (
                                                    <div className="mt-6 pt-4 border-t border-border">
                                                        <div className="grid grid-cols-3 gap-4">
                                                            {exp.kpis.map((kpi, i) => (
                                                                <div key={i} className="text-center">
                                                                    <p className="text-2xl font-bold text-accent">{kpi.kpi}</p>
                                                                    <p className="text-xs text-muted-foreground">{kpi.title}</p>
                                                                    <p className="text-xs text-muted-foreground">{kpi.description}</p>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
    )
}
