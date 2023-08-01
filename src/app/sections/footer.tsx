import Socials from "@/app/components/socials";

export default function Footer() {
    const today = new Date()

    return (
        <footer className="min-h-[200px] bg-[var(--primary-color)] flex flex-col p-8 justify-center items-center rounded-t-3xl">
            <h2 className="text-white text-xl md:text-2xl font-bold mb-8">Let&apos;s Connect</h2>
            <Socials/>
            <p className="text-sm mt-8 text-white">Copyright {today.getFullYear()}. All rights reserved.</p>
        </footer>
    )
}