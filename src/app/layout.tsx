import './globals.css'
import type {Metadata} from 'next'
import {Jura} from 'next/font/google'
import Script from "next/script";
import {SpeedInsights} from "@vercel/speed-insights/next"

const jura = Jura({weight: '500', subsets: ['latin']})

export const metadata: Metadata = {
    metadataBase: new URL('https://alexandrekhoury.com'),
    title: 'Alexandre El Khoury | Sr. Software Engineer',
    description: 'Experienced software engineer | Back-end, cross-platform & front-end dev | Passionate, adaptable & highly productive with clean code.',
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
        title: 'Alexandre El Khoury | Sr. Software Engineer',
        description: 'Experienced software engineer with over 8 years of expertise in back-end development. Skilled in cross-platform and front-end development. Passionate about coding since age 17, adaptable to new technologies. Exceptionally productive, delivering high-quality and clean code efficiently.',
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
        title: 'Alexandre El Khoury | Software Engineer',
        description: 'Experienced software engineer with over 8 years of expertise in back-end development. Skilled in cross-platform and front-end development. Passionate about coding since age 17, adaptable to new technologies. Exceptionally productive, delivering high-quality and clean code efficiently.',
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
    const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

    return (
        <html lang="en">
        <SpeedInsights/>
        <body className={jura.className}>{children}</body>
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} strategy="afterInteractive"/>
        <Script id="google-analytics" strategy="afterInteractive">
            {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){window.dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}');
            `}
        </Script>
        </html>
    )
}
