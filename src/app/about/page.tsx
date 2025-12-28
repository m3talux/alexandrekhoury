'use client'

import Nav from "@/app/components/nav";
import Footer from "@/app/sections/footer";
import skills from "@/data/skills.json";
import Image from "next/image";
import {DownloadCVButton} from "@/app/components/download-cv-button";

export default function AboutPage() {
    const currentDate = new Date();
    const january2017 = new Date('2017-01-01');
    const experienceInMilliseconds = currentDate.getTime() - january2017.getTime();
    const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25;
    const experienceYears = Math.round(experienceInMilliseconds / millisecondsInYear);

    return (
        <div className="min-h-screen flex flex-col">
            <Nav/>
            <main className="flex-1">
                <section className="py-16 sm:py-24">
                    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-3 gap-12">
                            <div className="lg:col-span-1">
                                <div className="sticky top-24">
                                    <div className="aspect-square rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mb-6">
                                        <div className="w-32 h-32 rounded-full bg-muted border-4 border-background shadow-lg flex items-center justify-center">
                                            <span className="text-4xl font-bold text-accent">AK</span>
                                        </div>
                                    </div>
                                    <h1 className="text-2xl font-bold text-foreground">Alexandre El Khoury</h1>
                                    <p className="text-accent font-medium mt-1">Senior Software Engineer</p>
                                    <p className="text-muted-foreground mt-2">Paris, France</p>
                                    <div className="mt-6 flex gap-4">
                                        <a
                                            href="https://www.linkedin.com/in/alexandre-el-khoury/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-muted-foreground hover:text-accent transition-colors"
                                        >
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                            </svg>
                                        </a>
                                        <a
                                            href="https://github.com/m3talux"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-muted-foreground hover:text-accent transition-colors"
                                        >
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:col-span-2 space-y-12">
                                <div>
                                    <h2 className="text-sm font-medium text-accent uppercase tracking-wider mb-4">About</h2>
                                    <div className="prose prose-lg max-w-none">
                                        <p className="text-foreground leading-relaxed">
                                            I&apos;m a highly motivated and results-driven software engineer with {experienceYears}+ years of experience
                                            building robust, scalable back-end systems. My full-stack background enables me to approach software development
                                            with a holistic perspective, ensuring efficient, reliable, and maintainable solutions.
                                        </p>
                                        <p className="text-muted-foreground leading-relaxed mt-4">
                                            Currently, I thrive as a Senior Software Engineer at Weaviate, where I take ownership of end-to-end feature
                                            development across backend and frontend systems. I focus on delivering performant, resilient cloud
                                            infrastructure—handling database backup reliability, incident response, and cross-team collaboration to ensure
                                            seamless product delivery.
                                        </p>
                                        <p className="text-muted-foreground leading-relaxed mt-4">
                                            I also drive the integration of AI-powered tools and workflows to boost developer
                                            productivity and efficiency. Beyond code, I&apos;m a proactive learner and passionate about innovation—constantly
                                            exploring new technologies, frameworks, and AI-assisted workflows.
                                        </p>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-sm font-medium text-accent uppercase tracking-wider mb-6">What I Value</h2>
                                    <div className="grid sm:grid-cols-2 gap-6">
                                        <div className="p-6 rounded-xl bg-muted">
                                            <h3 className="font-semibold text-foreground mb-2">Quality & Reliability</h3>
                                            <p className="text-sm text-muted-foreground">
                                                I believe in building software that works reliably under pressure. Clean code, thorough testing, and robust architecture are non-negotiables.
                                            </p>
                                        </div>
                                        <div className="p-6 rounded-xl bg-muted">
                                            <h3 className="font-semibold text-foreground mb-2">Continuous Learning</h3>
                                            <p className="text-sm text-muted-foreground">
                                                Technology evolves rapidly. I stay curious, embrace new tools and methodologies, and constantly refine my craft.
                                            </p>
                                        </div>
                                        <div className="p-6 rounded-xl bg-muted">
                                            <h3 className="font-semibold text-foreground mb-2">Collaboration</h3>
                                            <p className="text-sm text-muted-foreground">
                                                Great software is built by great teams. I value open communication, knowledge sharing, and supporting fellow engineers.
                                            </p>
                                        </div>
                                        <div className="p-6 rounded-xl bg-muted">
                                            <h3 className="font-semibold text-foreground mb-2">Impact-Driven</h3>
                                            <p className="text-sm text-muted-foreground">
                                                I focus on delivering real value. Every line of code should serve a purpose and contribute to solving meaningful problems.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-sm font-medium text-accent uppercase tracking-wider mb-6">Technical Skills</h2>
                                    <div className="space-y-8">
                                        {skills.map((category) => (
                                            <div key={category.title}>
                                                <h3 className="font-semibold text-foreground mb-4">{category.title}</h3>
                                                <div className="flex flex-wrap gap-3">
                                                    {category.skills.map((skill) => (
                                                        <div
                                                            key={skill.title}
                                                            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted hover:bg-accent/10 transition-colors"
                                                        >
                                                            <Image
                                                                src={skill.imageURL}
                                                                alt={skill.title}
                                                                width={20}
                                                                height={20}
                                                                className="w-5 h-5"
                                                            />
                                                            <span className="text-sm text-foreground">{skill.title}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-sm font-medium text-accent uppercase tracking-wider mb-4">Download CV</h2>
                                    <DownloadCVButton variant="secondary"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
    )
}
