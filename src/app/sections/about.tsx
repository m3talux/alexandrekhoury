import Image from "next/image";

export function About() {
    const currentYear = new Date().getFullYear();
    const experienceYears = currentYear - 2018;

    return (
        <section className="bg-sky-600 flex flex-col lg:flex-row items-center content-center p-8 md:p-16">
            <Image src="/svg/programmer.svg" className="max-w-xl w-1/2 lg:w-1/3" alt="Alexandre El Khoury | Software"
                   width={786} height={572}/>
            <p className="leading-8 lg:leading-10 text-center mt-8 lg:text-left lg:ml-16 text-lg sm:text-xl md:text-2xl">
                Experienced software engineer with over {experienceYears} years of expertise in the software industry,
                specializing
                primarily in back-end development. Skilled in cross-platform development and possessing a solid
                foundation in front-end development due to previous experience as a full-stack developer. A passion for
                coding since the age of 17, with a consistent track record of adapting rapidly to changes and embracing
                new technologies. Known for exceptional productivity, consistently delivering high-quality work while
                maintaining efficiency and producing clean code.
            </p>
        </section>
    )
}