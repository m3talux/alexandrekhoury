import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import Script from "next/script";
import {SpeedInsights} from "@vercel/speed-insights/next"
import {ThemeProvider} from "@/app/components/theme-provider"

const inter = Inter({subsets: ['latin'], variable: '--font-inter'})

export const metadata: Metadata = {
    metadataBase: new URL('https://alexandrekhoury.com'),
    title: {
        default: 'Alexandre El Khoury | Senior Software Engineer',
        template: '%s | Alexandre El Khoury'
    },
    description: 'Senior Software Engineer with 8+ years of experience building scalable backend systems. Expert in Go, TypeScript, and cloud infrastructure. Currently at Weaviate.',
    keywords: ['Software Engineer', 'Backend Developer', 'Go', 'TypeScript', 'Full Stack', 'Cloud Infrastructure', 'Paris', 'France'],
    manifest: '/site.webmanifest',
    icons: [
        {
            url: '/apple-touch-icon.png',
            rel: 'apple-touch-icon',
            sizes: '180x180'
        },
        {
            url: '/favicon-32x32.png',
            rel: 'icon',
            sizes: '32x32',
            type: 'image/png'
        },
        {
            url: '/favicon-16x16.png',
            rel: 'icon',
            sizes: '16x16',
            type: 'image/png'
        },
        {
            url: '/safari-pinned-tab.svg',
            rel: 'mask-icon',
            // @ts-ignore
            color: '#028ac7',
        }
    ],
    authors: [
        {
            name: 'Alexandre El Khoury',
        }
    ],
    openGraph: {
        type: 'website',
        url: 'https://alexandrekhoury.com',
        locale: 'en_US',
        siteName: 'Alexandre El Khoury',
        title: 'Alexandre El Khoury | Senior Software Engineer',
        description: 'Senior Software Engineer with 8+ years of experience building scalable backend systems. Expert in Go, TypeScript, and cloud infrastructure. Currently at Weaviate.',
        images: [
            {
                url: '/images/og-image.png',
                alt: 'Alexandre El Khoury | Sr. Software Engineer',

            },
        ],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        }
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Alexandre El Khoury | Senior Software Engineer',
        description: 'Senior Software Engineer with 8+ years of experience building scalable backend systems. Expert in Go, TypeScript, and cloud infrastructure.',
        images: [
            {
                url: '/images/og-image.png',
                alt: 'Alexandre El Khoury | Sr. Software Engineer',
            },
        ],
    },
    other: {
        'msapplication-TileColor': '#028ac7',
        'yandex-verification': 'd235f2fc4d601d71',
        'msvalidate.01': 'E79B7A44CA3DEA8C9A02400CB1037580'
    }
}

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
        <ThemeProvider>
            {children}
        </ThemeProvider>
        <SpeedInsights/>
        </body>
        <Script src={`https://www.googletagmanager.com/gtag/js?id=G-29C9W2YKSB`} strategy="afterInteractive"/>
        <Script id="google-analytics" strategy="afterInteractive">
            {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){window.dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-29C9W2YKSB');
            `}
        </Script>
        </html>
    )
}
