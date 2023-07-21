import Image from "next/image";

export function About() {
    const currentYear = new Date().getFullYear();
    const experienceYears = currentYear - 2018;

    return (
        <section className="bg-sky-600 flex flex-col lg:flex-row items-center content-center p-8 md:p-16">
            <Image src="/svg/programmer.svg" className="max-w-xl w-1/2 lg:w-1/3" alt="Alexandre El Khoury | Software"
                   width={786} height={572}/>
            <p className="leading-8 lg:leading-10 text-center mt-8 lg:text-left lg:ml-16 text-lg sm:text-xl md:text-2xl">
                Hey there, I&apos;m Alex, a passionate and dedicated software engineer with 5+ years of expertise in the
                dynamic software industry. My journey in coding began at the age of 17, and since then, I&apos;ve honed
                my
                skills to specialize primarily in back-end development while also possessing a solid foundation in
                front-end development from my previous experience as a full-stack developer.
                <br/><br/>
                Throughout my career, I&apos;ve successfully designed, implemented, and maintained various
                cross-platform
                applications, APIs, and web interfaces, showcasing my versatility in crafting efficient and scalable
                solutions. Embracing new technologies is not just a part of my job; it&apos;s a passion that fuels my
                drive
                to create cutting-edge solutions. Known for my exceptional productivity, I
                consistently produce high-quality, clean code while maintaining efficiency and meeting tight deadlines.
                <br/><br/>
                Beyond the coding world, you&apos;ll find me embracing my other interests and hobbies. I&apos;m an avid
                gamer who
                finds joy in exploring virtual worlds and engaging in strategic challenges. My curiosity extends to the
                world of finance and trading, where I&apos;m always on the lookout for new opportunities. Moreover,
                I&apos;m
                deeply fascinated by the potential of web3 technologies and their impact on shaping the future of the
                internet. If you&apos;re looking for a proactive and forward-thinking software engineer, let&apos;s
                connect and
                discuss how we can collaborate to achieve remarkable outcomes. Together, we can create innovative
                solutions that leave a positive and lasting impact.
            </p>
        </section>
    )
}