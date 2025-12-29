'use client'

import Link from "next/link";
import {usePathname} from "next/navigation";
import {ThemeToggle} from "./theme-toggle";
import {useState} from "react";
import {Logo} from "./logo";

const navLinks = [
    {href: '/', label: 'Home'},
    {href: '/about', label: 'About'},
    {href: '/experience', label: 'Experience'},
    {href: '/projects', label: 'Projects'},
    {href: '/contact', label: 'Contact'},
]

export default function Nav() {
    const pathname = usePathname()
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                        <Logo className="w-8 h-8"/>
                        <span className="text-lg font-semibold text-foreground hidden sm:block">Alexandre El Khoury</span>
                    </Link>

                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                                    pathname === link.href
                                        ? 'text-accent bg-accent/10'
                                        : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                                }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div className="ml-2 pl-2 border-l border-border">
                            <ThemeToggle/>
                        </div>
                    </div>

                    <div className="flex md:hidden items-center gap-2">
                        <ThemeToggle/>
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="p-2 rounded-lg hover:bg-muted transition-colors"
                            aria-label="Toggle menu"
                        >
                            <svg className="w-6 h-6 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {mobileMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {mobileMenuOpen && (
                    <div className="md:hidden py-4 border-t border-border">
                        <div className="flex flex-col gap-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                                        pathname === link.href
                                            ? 'text-accent bg-accent/10'
                                            : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                                    }`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}