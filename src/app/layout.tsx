import './globals.css'
import type {Metadata} from 'next'
import {Jura} from 'next/font/google'

const inter = Jura({weight: '500', subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Alexandre El Khoury | Software Engineer',
    description: 'Experienced software engineer with 5+ years of expertise in back-end development. Skilled in cross-platform and front-end development. Passionate about coding since age 17, adaptable to new technologies. Exceptionally productive, delivering high-quality and clean code efficiently.',
    authors: [
        {
            name: 'Alexandre El Khoury',
        }
    ],
    openGraph: {
        type: 'website',
        url: '/',
        locale: 'en-US',
        title: 'Alexandre El Khoury | Software Engineer',
        description: 'Experienced software engineer with 5+ years of expertise in back-end development. Skilled in cross-platform and front-end development. Passionate about coding since age 17, adaptable to new technologies. Exceptionally productive, delivering high-quality and clean code efficiently.',
        images: [
            {
                url: '/avatar.svg',
                alt: 'Alexandre El Khoury | Software Engineer',
            },
        ],
    },
    twitter: {
        title: 'Alexandre El Khoury | Software Engineer',
        description: 'Experienced software engineer with 5+ years of expertise in back-end development. Skilled in cross-platform and front-end development. Passionate about coding since age 17, adaptable to new technologies. Exceptionally productive, delivering high-quality and clean code efficiently.',
        images: [
            {
                url: '/avatar.svg',
                alt: 'Alexandre El Khoury | Software Engineer',
            },
        ],
    }
}

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className={inter.className}>{children}</body>
        </html>
    )
}
