import Image from "next/image";

export function About() {
    const currentDate = new Date();
    const january2017 = new Date('2017-01-01');

    // @ts-ignore
    const experienceInMilliseconds = currentDate - january2017;
    const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25;

    const experienceYears = Math.round(experienceInMilliseconds / millisecondsInYear);


    return (
        <section id="about"
                 className="bg-[var(--primary-color)] flex flex-col lg:flex-row items-center content-center p-8 md:p-16">
            <Image src="/svg/programmer.svg" className="max-w-xl w-1/2 lg:w-1/3" alt="Alexandre El Khoury | Software"
                   width={786} height={572}/>
            <p className="!leading-8 text-white text-center mt-8 lg:mt-0 lg:text-left lg:ml-16 text-md sm:text-lg md:text-xl">
                I&apos;m a highly motivated and results-oriented software engineer with {experienceYears}+ years of
                experience crafting
                robust and scalable back-end systems. My full-stack background empowers me to approach software
                development with a holistic perspective, ensuring efficient and effective solutions.
                <br/><br/>
                Currently, I excel as a Go Backend Engineer at Kardinal, where I spearhead the development and
                maintenance of critical internal libraries and microservices. I&apos;m passionate about optimizing
                performance, as evidenced by my 70% improvement in a key API. I also enjoy contributing to the
                open-source community and actively participate in shaping our tech stack through data-driven analysis
                and benchmarking.
                <br/><br/>
                Beyond coding, I&apos;m a proactive learner, constantly exploring new technologies and frameworks,
                particularly in the exciting realm of Web3. I believe in fostering collaborative and supportive teams,
                and I approach every challenge with optimism and a focus on delivering high-quality results.
            </p>
        </section>
    )
}