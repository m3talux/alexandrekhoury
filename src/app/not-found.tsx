import Link from "next/link";
import Nav from "@/app/components/nav";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col">
            <Nav/>
            <main className="flex-1 flex flex-col items-center justify-center px-4">
                <div className="text-center">
                    <p className="text-accent font-medium mb-2">404</p>
                    <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
                        Page not found
                    </h1>
                    <p className="text-lg text-muted-foreground mb-8 max-w-md">
                        Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
                    </p>
                    <Link
                        href="/"
                        className="inline-flex items-center px-6 py-3 rounded-lg bg-accent text-accent-foreground font-medium hover:bg-accent-600 transition-colors"
                    >
                        <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                        </svg>
                        Back to Home
                    </Link>
                </div>
            </main>
        </div>
    )
}