import Socials from "@/app/components/socials";

export default function Footer() {
    const today = new Date()

    return (
        <footer className="min-h-[200px] bg-sky-600 flex flex-col p-8 justify-center items-center">
            <h2 className="text-xl md:text-2xl font-bold mb-8">Let&apos;s Connect</h2>
            <Socials/>
            <p className="mt-8">Copyright {today.getFullYear()}. All rights reserved.</p>
        </footer>
    )
}