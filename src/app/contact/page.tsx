'use client'

import Nav from "@/app/components/nav";
import Footer from "@/app/sections/footer";
import {useState} from "react";
import * as emailJSClient from "emailjs-com";
import {DownloadCVButton} from "@/app/components/download-cv-button";

export default function ContactPage() {
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [isError, setIsError] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setIsError(false)

        emailJSClient.send("service_qjduk0g", "template_gsrqqyt", {
            from_name: `${firstname} ${lastname}`,
            from_email: email,
            message: message,
        }, '9j0MO5H3id3oUTxV8').then(
            () => {
                setIsSuccess(true)
                setFirstname('')
                setLastname('')
                setEmail('')
                setMessage('')
                setLoading(false)
                setTimeout(() => setIsSuccess(false), 5000)
            },
            () => {
                setIsError(true)
                setLoading(false)
            }
        )
    }

    return (
        <div className="min-h-screen flex flex-col">
            <Nav/>
            <main className="flex-1">
                <section className="py-16 sm:py-24">
                    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <p className="text-accent font-medium mb-2">Get in Touch</p>
                            <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
                                Let&apos;s Connect
                            </h1>
                            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                                I&apos;m always open to discussing new opportunities, interesting projects,
                                or just having a chat about technology.
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-5 gap-12">
                            <div className="lg:col-span-2 space-y-8">
                                <div>
                                    <h2 className="text-sm font-medium text-accent uppercase tracking-wider mb-4">Contact Info</h2>
                                    <div className="space-y-4">
                                        <a
                                            href="mailto:alexandre.elkhoury@outlook.com"
                                            className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors"
                                        >
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                            </svg>
                                            <span className="text-sm">alexandre.elkhoury@outlook.com</span>
                                        </a>
                                        <div className="flex items-center gap-3 text-muted-foreground">
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                                            </svg>
                                            <span className="text-sm">Paris, France</span>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-sm font-medium text-accent uppercase tracking-wider mb-4">Social</h2>
                                    <div className="flex gap-4">
                                        <a
                                            href="https://www.linkedin.com/in/alexandre-el-khoury/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 rounded-lg bg-muted text-muted-foreground hover:text-accent hover:bg-accent/10 transition-colors"
                                        >
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                            </svg>
                                        </a>
                                        <a
                                            href="https://github.com/m3talux"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 rounded-lg bg-muted text-muted-foreground hover:text-accent hover:bg-accent/10 transition-colors"
                                        >
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                            </svg>
                                        </a>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-sm font-medium text-accent uppercase tracking-wider mb-4">Resume</h2>
                                    <DownloadCVButton variant="secondary" className="text-sm px-4 py-2"/>
                                </div>
                            </div>

                            <div className="lg:col-span-3">
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid sm:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="first_name" className="block text-sm font-medium text-foreground mb-2">
                                                First name
                                            </label>
                                            <input
                                                type="text"
                                                id="first_name"
                                                value={firstname}
                                                onChange={(e) => setFirstname(e.target.value)}
                                                disabled={loading}
                                                required
                                                className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                                                placeholder="John"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="last_name" className="block text-sm font-medium text-foreground mb-2">
                                                Last name
                                            </label>
                                            <input
                                                type="text"
                                                id="last_name"
                                                value={lastname}
                                                onChange={(e) => setLastname(e.target.value)}
                                                disabled={loading}
                                                required
                                                className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                                                placeholder="Doe"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                                            Email address
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            disabled={loading}
                                            required
                                            className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                                            placeholder="john.doe@company.com"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            rows={6}
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            disabled={loading}
                                            required
                                            className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors resize-none"
                                            placeholder="Tell me about your project or opportunity..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 rounded-lg bg-accent text-accent-foreground font-medium hover:bg-accent-600 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {loading ? (
                                            <>
                                                <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                                                </svg>
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                Send Message
                                                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                                                </svg>
                                            </>
                                        )}
                                    </button>

                                    {isSuccess && (
                                        <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400">
                                            <div className="flex items-center gap-2">
                                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                                                </svg>
                                                <span className="font-medium">Message sent successfully!</span>
                                            </div>
                                            <p className="mt-1 text-sm opacity-80">Thank you for reaching out. I&apos;ll get back to you soon.</p>
                                        </div>
                                    )}

                                    {isError && (
                                        <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400">
                                            <div className="flex items-center gap-2">
                                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                                                </svg>
                                                <span className="font-medium">Failed to send message</span>
                                            </div>
                                            <p className="mt-1 text-sm opacity-80">Please try again in a moment or reach out via email directly.</p>
                                        </div>
                                    )}
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
    )
}
