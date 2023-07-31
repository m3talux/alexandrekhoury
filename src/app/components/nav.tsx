import Image from "next/image";

export default function Nav() {
    return (
        <nav className="h-24 w-screen px-8 md:px-32 py-8 flex justify-between items-center">
            <a href="/" title="Alexandre El Khoury | Home">
                <Image src="/svg/logo.svg" className="w-[48px] h-auto sm:w-[56px]" alt="Alexandre El Khouy | Logo"
                       width={56} height={56}/>
            </a>
            <div className="flex justify-center items-center">
                <a href="#contact" className="text-[var(--text-color)] mr-8 hover:cursor-pointer hover:font-bold"
                   title="Let's Chat!">Contact</a>
                <a href="/files/alexandre_el_khoury_cv_en.pdf" target="_blank" title="Download My CV"
                   className="bg-[var(--primary-color)] text-white px-4 py-2 hover:cursor-pointer hover:font-bold rounded-lg">Download CV</a>
            </div>
        </nav>
    )
}