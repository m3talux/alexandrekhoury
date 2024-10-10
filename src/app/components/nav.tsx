import Image from "next/image";

export default function Nav() {
    return (
        <nav className="w-screen px-8 md:px-32 py-6 flex justify-between items-center">
            <a href="/" title="Alexandre El Khoury | Home">
                <Image src="/svg/logo.svg" className="w-[48px] h-auto sm:w-[56px]" alt="Alexandre El Khouy | Logo"
                       width={56} height={56}/>
            </a>
            <div className="flex justify-center items-center">
                <a href="#contact" className="text-[var(--text-color)] mr-8 hover:cursor-pointer"
                   title="Let's Chat!">Contact</a>
                <a href="/files/alexandre_el_khoury_cv.pdf" target="_blank" title="Download My CV"
                   className="border-[var(--primary-color)] hover:bg-[var(--primary-color)] border-2 text-[var(--primary-color)] hover:text-white transition delay-100 ease-in-out px-4 py-2 hover:cursor-pointer rounded-full">Download
                    CV</a>
            </div>
        </nav>
    )
}