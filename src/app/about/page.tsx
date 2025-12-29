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
    const experienceYears = Math.ceil(experienceInMilliseconds / millisecondsInYear);

    return (
        <div className="min-h-screen flex flex-col">
            <Nav/>
            <main className="flex-1">
                <section className="py-16 sm:py-24">
                    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-3 gap-12">
                            <div className="lg:col-span-1">
                                <div className="sticky top-24">
                                    <div className="aspect-square rounded-2xl overflow-hidden mb-6">
                                        <Image
                                            src="/images/profile.jpeg"
                                            alt="Alexandre El Khoury"
                                            width={400}
                                            height={400}
                                            className="w-full h-full object-cover"
                                            priority
                                        />
                                    </div>
                                    <h1 className="text-2xl font-bold text-foreground">Alexandre El Khoury</h1>
                                    <p className="text-accent font-medium mt-1">Senior Software Engineer</p>
                                    <p className="text-muted-foreground mt-2">Paris, France</p>
                                    
                                    <div className="mt-6 grid grid-cols-2 gap-3">
                                        <div className="p-3 rounded-lg bg-muted text-center">
                                            <p className="text-2xl font-bold text-accent">{experienceYears}</p>
                                            <p className="text-xs text-muted-foreground">Years Experience</p>
                                        </div>
                                        <div className="p-3 rounded-lg bg-muted text-center">
                                            <p className="text-2xl font-bold text-accent">2</p>
                                            <p className="text-xs text-muted-foreground">Founded Products</p>
                                        </div>
                                    </div>
                                    
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
                                    
                                    <div className="mt-8">
                                        <DownloadCVButton variant="secondary"/>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:col-span-2 space-y-12">
                                {/* My Story */}
                                <div>
                                    <h2 className="text-sm font-medium text-accent uppercase tracking-wider mb-4">My Story</h2>
                                    <div className="prose prose-lg max-w-none space-y-4">
                                        <p className="text-foreground leading-relaxed">
                                            I wasn&apos;t great at school, but if there&apos;s one thing I excelled at, it was fiddling around with computers. 
                                            At 14, inspired by hacker movies, I started learning about cybersecurity—which gave me a deep understanding of 
                                            how systems work at a young age.
                                        </p>
                                        <p className="text-muted-foreground leading-relaxed">
                                            It wasn&apos;t until my first year of university that I discovered my true passion: <span className="text-foreground font-medium">building software</span>. 
                                            I combined it with my love for gaming and, at 19, published my first Unity mobile game on both the App Store and Google Play. 
                                            That moment of seeing something I created in the hands of users was transformative. I never stopped coding and learning since.
                                        </p>
                                        <p className="text-muted-foreground leading-relaxed">
                                            Today, with {experienceYears} years of experience across Quality Management, Food Tech, Supply Chain, and now AI Databases at Weaviate, 
                                            I&apos;ve built a career around creating robust, scalable systems. But what drives me most is building products that solve real problems—
                                            which is why I founded <span className="text-foreground font-medium">Jointly</span> and <span className="text-foreground font-medium">WeProject</span> on the side.
                                        </p>
                                    </div>
                                </div>

                                {/* Philosophy */}
                                <div>
                                    <h2 className="text-sm font-medium text-accent uppercase tracking-wider mb-4">My Philosophy</h2>
                                    <div className="p-6 rounded-xl bg-muted border-l-4 border-accent">
                                        <p className="text-foreground leading-relaxed italic">
                                            &ldquo;I&apos;m not a special or unique engineer, and I&apos;m too humble to consider myself one of the best. 
                                            But what makes me different is that I&apos;m a dreamer and a builder. I treat whatever I work on as my own product, 
                                            always looking for ways to add my personal touch and impact. We&apos;re building the future, and I want to be part of it.&rdquo;
                                        </p>
                                    </div>
                                </div>

                                {/* What I Value */}
                                <div>
                                    <h2 className="text-sm font-medium text-accent uppercase tracking-wider mb-6">What I Value</h2>
                                    <div className="grid sm:grid-cols-2 gap-6">
                                        <div className="p-6 rounded-xl bg-muted">
                                            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                                                <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>
                                                </svg>
                                            </div>
                                            <h3 className="font-semibold text-foreground mb-2">User-First Thinking</h3>
                                            <p className="text-sm text-muted-foreground">
                                                I always ask: &ldquo;How would this help me and others? Does this solution make life easier?&rdquo; 
                                                Every feature should serve a real purpose.
                                            </p>
                                        </div>
                                        <div className="p-6 rounded-xl bg-muted">
                                            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                                                <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                                                </svg>
                                            </div>
                                            <h3 className="font-semibold text-foreground mb-2">Elevating Teams</h3>
                                            <p className="text-sm text-muted-foreground">
                                                My proudest achievement isn&apos;t a metric—it&apos;s the impact I&apos;ve had on teams. 
                                                I push for excellence and motivate others to try new things and grow.
                                            </p>
                                        </div>
                                        <div className="p-6 rounded-xl bg-muted">
                                            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                                                <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                                                </svg>
                                            </div>
                                            <h3 className="font-semibold text-foreground mb-2">Trend Hunter</h3>
                                            <p className="text-sm text-muted-foreground">
                                                I&apos;m constantly exploring new technologies, frameworks, and AI-assisted workflows. 
                                                Staying ahead of the curve is part of who I am.
                                            </p>
                                        </div>
                                        <div className="p-6 rounded-xl bg-muted">
                                            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                                                <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
                                                </svg>
                                            </div>
                                            <h3 className="font-semibold text-foreground mb-2">Part of the Solution</h3>
                                            <p className="text-sm text-muted-foreground">
                                                I don&apos;t just do what I&apos;m asked—I make myself part of the solution, 
                                                thinking about long-term impact on both users and the team.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Why I Build Products */}
                                <div>
                                    <h2 className="text-sm font-medium text-accent uppercase tracking-wider mb-6">Why I Build Products</h2>
                                    <div className="space-y-6">
                                        <div className="p-6 rounded-xl bg-gradient-to-br from-emerald-500/10 to-transparent border border-emerald-500/20">
                                            <div className="flex items-start gap-4">
                                                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center shrink-0">
                                                    <span className="text-xl">💰</span>
                                                </div>
                                                <div>
                                                    <h3 className="font-semibold text-foreground mb-2">Jointly</h3>
                                                    <p className="text-sm text-muted-foreground">
                                                        Born from my own need to manage finances with my fiancée (now wife) in Lebanon—a cash-based economy 
                                                        with multiple currencies where Excel sheets and mainstream apps just didn&apos;t cut it. What started as a 
                                                        personal tool evolved into a full-featured finance app with insights, AI features, and courses 
                                                        promoting healthy financial habits.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-6 rounded-xl bg-gradient-to-br from-rose-500/10 to-transparent border border-rose-500/20">
                                            <div className="flex items-start gap-4">
                                                <div className="w-12 h-12 rounded-xl bg-rose-500/20 flex items-center justify-center shrink-0">
                                                    <span className="text-xl">💒</span>
                                                </div>
                                                <div>
                                                    <h3 className="font-semibold text-foreground mb-2">WeProject</h3>
                                                    <p className="text-sm text-muted-foreground">
                                                        While planning my own wedding, I found myself juggling multiple apps—one for guests, another for 
                                                        the website, Excel for budgeting and gifts. I built WeProject as a challenge to create everything 
                                                        I needed in one place. When I showed it to a friend, he convinced me others would need it too.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Beyond Code */}
                                <div>
                                    <h2 className="text-sm font-medium text-accent uppercase tracking-wider mb-6">Beyond Code</h2>
                                    <div className="grid sm:grid-cols-3 gap-4">
                                        <div className="p-5 rounded-xl bg-muted text-center">
                                            <div className="w-12 h-12 rounded-full bg-yellow-500/10 flex items-center justify-center mx-auto mb-3">
                                                <svg className="w-6 h-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                                </svg>
                                            </div>
                                            <h3 className="font-semibold text-foreground mb-1">Finance Enthusiast</h3>
                                            <p className="text-xs text-muted-foreground">
                                                Passionate about investments, money flows, and wealth building strategies
                                            </p>
                                        </div>
                                        <div className="p-5 rounded-xl bg-muted text-center">
                                            <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center mx-auto mb-3">
                                                <svg className="w-6 h-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                                                </svg>
                                            </div>
                                            <h3 className="font-semibold text-foreground mb-1">3 Years Trading</h3>
                                            <p className="text-xs text-muted-foreground">
                                                Crypto trading taught me discipline, patience, and financial responsibility
                                            </p>
                                        </div>
                                        <div className="p-5 rounded-xl bg-muted text-center">
                                            <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-3">
                                                <svg className="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                                </svg>
                                            </div>
                                            <h3 className="font-semibold text-foreground mb-1">Tennis Player</h3>
                                            <p className="text-xs text-muted-foreground">
                                                Lifelong player and fan. Roger Federer taught me lessons beyond the court
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Technical Skills */}
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
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
    )
}
