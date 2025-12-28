'use client'

import {useState} from 'react'
import {downloadCV} from './cv-pdf'

interface DownloadCVButtonProps {
    variant?: 'primary' | 'secondary' | 'icon'
    className?: string
}

export function DownloadCVButton({variant = 'secondary', className = ''}: DownloadCVButtonProps) {
    const [isGenerating, setIsGenerating] = useState(false)

    const handleDownload = async () => {
        setIsGenerating(true)
        try {
            await downloadCV()
        } catch (error) {
            console.error('Failed to generate CV:', error)
        } finally {
            setIsGenerating(false)
        }
    }

    if (variant === 'icon') {
        return (
            <button
                onClick={handleDownload}
                disabled={isGenerating}
                className={`text-muted-foreground hover:text-accent transition-colors disabled:opacity-50 ${className}`}
                aria-label="Download CV"
            >
                {isGenerating ? (
                    <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                    </svg>
                ) : (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                    </svg>
                )}
            </button>
        )
    }

    const baseStyles = "inline-flex items-center justify-center font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
    const variantStyles = variant === 'primary'
        ? "px-6 py-3 rounded-lg bg-accent text-accent-foreground hover:bg-accent-600"
        : "px-6 py-3 rounded-lg border border-border text-foreground hover:bg-muted"

    return (
        <button
            onClick={handleDownload}
            disabled={isGenerating}
            className={`${baseStyles} ${variantStyles} ${className}`}
        >
            {isGenerating ? (
                <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                    </svg>
                    Generating...
                </>
            ) : (
                <>
                    <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                    </svg>
                    Download CV
                </>
            )}
        </button>
    )
}
