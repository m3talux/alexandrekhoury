import Image from "next/image";

export default function Nav() {
    return (
        <nav className="h-24 w-screen px-8 md:px-32 py-8 flex justify-between items-center">
            <a href="/" title="Alexandre El Khoury | Home">
                <Image src="/svg/logo.svg" className="w-[48px] h-auto sm:w-[56px]" alt="Alexandre El Khouy | Logo"
                       width={56} height={56}/>
            </a>
            <div className="flex justify-center items-center">
                <a href="#contact" className="text-gray-600 mr-8 hover:cursor-pointer hover:text-gray-900" title="Let's Chat!">Contact</a>
                <a href="/files/alexandre_el_khoury_cv_en.pdf" target="_blank" title="Download My CV"
                   className="bg-sky-600 px-4 py-2 hover:cursor-pointer hover:font-bold rounded-xl">Download CV</a>
            </div>
        </nav>
    )
}