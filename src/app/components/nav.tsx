export default function Nav() {
    return (
        <nav className="h-24 w-screen px-8 md:px-32 py-8 flex justify-end items-center">
            <label className="text-gray-600 mr-8 hover:cursor-pointer hover:text-gray-900">Contact</label>
            <a href="/alexandre_el_khoury_cv_en.pdf" target="_blank"
               className="bg-sky-600 px-4 py-2 hover:cursor-pointer hover:font-bold rounded-xl">Download CV</a>
        </nav>
    )
}