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
        I&#39;m a highly motivated and results-driven software engineer with {experienceYears}+ years of experience
        building robust, scalable back-end systems. My full-stack background enables me to approach software development
        with a holistic perspective, ensuring efficient, reliable, and maintainable solutions.
        <br/><br/>
        Currently, I thrive as a Senior Software Engineer at Weaviate, where I take ownership of end-to-end feature
        development across backend and frontend systems. I focus on delivering performant, resilient cloud
        infrastructure—handling database backup reliability, incident response, and cross-team collaboration to ensure
        seamless product delivery. I also drive the integration of AI-powered tools and workflows to boost developer
        productivity and efficiency.
        <br/><br/>
        Beyond code, I&#39;m a proactive learner and passionate about innovation—constantly exploring new technologies,
        frameworks, and AI-assisted workflows. I believe in building collaborative, supportive engineering cultures
        and approach every challenge with curiosity, adaptability, and a focus on high-quality results.
      </p>
    </section>
  )
}