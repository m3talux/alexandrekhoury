'use client'

import React, {useState} from "react";
import KPICard from "@/app/components/kpi";

export default function Experience() {
    const [index, setIndex] = useState(0);

    const renderExp = (i: number) => {
        switch (i) {
            case 0:
                return <Kardinal/>
            case 1:
                return <PolarStork/>
            case 2:
                return <Inntrend/>
            case 3:
                return <Apps2You/>
        }
    }

    return (
        <section className="p-2 lg:p-8">
            <div
                className="w-full h-[80px] bg-sky-950 rounded-t-3xl flex flex-row justify-between items-center px-8 border-b-[1px] border-gray-900 border-opacity-30">
                <h2 className="text-xl lg:text-3xl font-bold">My Experience</h2>
                <div className="flex flex-row justify-center items-center">
                    <div className="w-6 h-6 rounded-full bg-yellow-600 mr-4"/>
                    <div className="w-6 h-6 rounded-full bg-green-600 mr-4"/>
                    <div className="w-6 h-6 rounded-full bg-red-600"/>
                </div>
            </div>
            <div className="min-h-[1100px] w-full bg-sky-950 rounded-b-3xl flex flex-col lg:flex-row">
                <SidePanel index={index} setIndex={setIndex}/>
                <div className="flex-1 p-8 mb-16">
                    {
                        renderExp(index)
                    }
                </div>
            </div>
        </section>
    )
}

function SidePanel({index, setIndex}: any) {
    return (
        <div
            className="flex lg:flex-col overflow-auto flex-row h-full w-full lg:w-[200px] border-r-0 lg:border-r-[1px] border-gray-900 border-opacity-30">
            <div onClick={() => setIndex(0)}
                 className={`px-4 py-4 lg:py-8 text-md lg:text-xl hover:cursor-pointer hover:bg-sky-900 ${index == 0 ? 'bg-sky-900' : ''}`}>Kardinal
            </div>
            <div onClick={() => setIndex(1)}
                 className={`px-4 py-4 lg:py-8 text-md lg:text-xl hover:cursor-pointer hover:bg-sky-900 ${index == 1 ? 'bg-sky-900' : ''}`}>Polarstork
            </div>
            <div onClick={() => setIndex(2)}
                 className={`px-4 py-4 lg:py-8 text-md lg:text-xl hover:cursor-pointer hover:bg-sky-900 ${index == 2 ? 'bg-sky-900' : ''}`}>InnTrend
            </div>
            <div onClick={() => setIndex(3)}
                 className={`px-4 py-4 lg:py-8 text-md lg:text-xl hover:cursor-pointer hover:bg-sky-900 ${index == 3 ? 'bg-sky-900' : ''}`}>Apps2you
            </div>
        </div>
    )
}

function Kardinal() {
    return (
        <div>
            <a href="https://kardinal.ai/" target="_blank">
                <img src="/images/kardinal.png" width={200} alt="Kardinal | https://kardinal.ai"/>
            </a>
            <div className="flex flex-row mt-16 items-start lg:items-center text-md lg:text-xl">
                <h3 className="font-bold mr-4">Position:</h3>
                <label>Golang Backend Engineer</label>
            </div>
            <div className="flex flex-row mt-4 items-start lg:items-center text-md lg:text-xl">
                <h3 className="font-bold mr-4">Period:</h3>
                <label>March, 2021 - Current</label>
            </div>
            <div className="flex flex-row mt-4 items-start lg:items-center text-md lg:text-xl">
                <h3 className="font-bold mr-4">Type:</h3>
                <label>Full-Time</label>
            </div>
            <div className="mt-16 text-xl px-2 lg:px-8">
                <ul className="text-sm md:text-lg list-disc">
                    <li>
                        <p>
                            Developed and maintained internal libraries: Took ownership of crucial internal
                            libraries including a RabbitMQ client, Cucumber testing in Go, and a module
                            bootstraping tool. Ensured their stability, reliability, and availability for
                            seamless integration across projects.
                        </p>
                    </li>
                    <li className="mt-8">
                        <p>
                            Created and managed multiple microservices in Go: Designed, implemented, and maintained
                            various microservices, including APIs, tooling services, and Key Performance Indicators
                            (KPIs) tracking. Leveraged Go&apos;s strengths to build efficient and scalable solutions.
                        </p>
                    </li>
                    <li className="mt-8">
                        <p>
                            Enhanced performance of a critical API: Identified performance bottlenecks in a critical API
                            and successfully optimized its performance, resulting in a remarkable 70% improvement. This
                            optimization positively impacted the overall system&apos;s responsiveness and user
                            experience.
                        </p>
                    </li>
                    <li className="mt-8">
                        <p>
                            Revamped module architecture for scalability and maintainability: Recognizing the need for
                            scalability and maintainability, I challenged and reevaluated the existing module
                            architecture. Proposed and implemented improvements to ensure flexibility, modularity, and
                            ease of future enhancements.
                        </p>
                    </li>
                    <li className="mt-8">
                        <p>
                            Provided critical analysis and benchmarking: Actively participated in technology
                            discussions, challenging and questioning technological choices when necessary. Conducted
                            in-depth benchmarks and analysis, presenting statistical data to support my recommendations
                            for better technological selections.
                        </p>
                    </li>
                </ul>
            </div>
            <div className="flex flex-col lg:flex-row mt-16">
                <KPICard title="Libraries" kpi="5" description="Created & Maintained" margin={true}/>
                <KPICard title="Microservices" kpi="12" description="Created & Maintained" margin={true}/>
                <KPICard title="APIs" kpi="+100" description="Developed" margin={false}/>
            </div>
        </div>
    )
}

function PolarStork() {
    return (
        <div>
            <a href="https://polarstork.com/" target="_blank">
                <img src="/svg/polarstork.svg" width={200} alt="Polarstork | https://polarstork.com"/>
            </a>
            <div className="flex flex-row mt-16 items-start lg:items-center text-md lg:text-xl">
                <h3 className="font-bold mr-4">Position:</h3>
                <label>Full Stack Software Engineer</label>
            </div>
            <div className="flex flex-row mt-4 items-start lg:items-center text-md lg:text-xl">
                <h3 className="font-bold mr-4">Period:</h3>
                <label>May, 2019 - April 2021</label>
            </div>
            <div className="flex flex-row mt-4 items-start lg:items-center text-md lg:text-xl">
                <h3 className="font-bold mr-4">Type:</h3>
                <label>Full-Time</label>
            </div>
            <div className="mt-16 text-xl px-2 lg:px-8">
                <ul className="text-sm md:text-lg list-disc">
                    <li>
                        <p>
                            Stack and Architecture decision making: Played an active role in the decision-making process
                            for selecting appropriate technology stacks and defining the system architecture. Utilized
                            my expertise to evaluate options and make informed decisions that aligned with project
                            requirements and goals.
                        </p>
                    </li>
                    <li className="mt-8">
                        <p>
                            Championed the adoption of new frameworks and technologies: Introduced Flutter as a
                            potential solution upon joining the team and successfully influenced its adoption as the
                            primary framework. This decision positively impacted development efficiency, codebase
                            maintainability, and cross-platform capabilities.
                        </p>
                    </li>
                    <li className="mt-8">
                        <p>
                            Developed full-stack web and mobile applications: Collaborated on the development of
                            numerous web and mobile applications across diverse industries, including food, virtual
                            reality (VR), education, and health. Contributed to the entire software development life
                            cycle, from concept and design to implementation and deployment.
                        </p>
                    </li>
                    <li className="mt-8">
                        <p>
                            Assumed the role of Technical Lead in a VoIP mobile application: Led a team in the
                            development of a VoIP mobile application, serving as a charity project dedicated to
                            supporting the Lebanese Red Cross during the pandemic. Oversaw the technical aspects of the
                            project, provided guidance to team members, and ensured the successful delivery of the
                            application.
                        </p>
                    </li>
                </ul>
            </div>
            <div className="flex flex-col lg:flex-row mt-16">
                <KPICard title="Projects" kpi="7" description="Contributor" margin={true}/>
                <KPICard title="Projects" kpi="2" description="Lead" margin={true}/>
                <KPICard title="Technologies" kpi="2" description="Used" margin={false}/>
            </div>
        </div>
    )
}

function Inntrend() {
    return (
        <div>
            <a href="https://www.facebook.com/inntrends/" target="_blank">
                <img src="/images/inntrend.jpeg" width={200} alt="InnTrend | https://www.facebook.com/inntrends"/>
            </a>
            <div className="flex flex-row mt-16 items-start lg:items-center text-md lg:text-xl">
                <h3 className="font-bold mr-4">Position:</h3>
                <label>Full Stack Software Developer</label>
            </div>
            <div className="flex flex-row mt-4 items-start lg:items-center text-md lg:text-xl">
                <h3 className="font-bold mr-4">Period:</h3>
                <label>November, 2017 - January 2019</label>
            </div>
            <div className="flex flex-row mt-4 items-start lg:items-center text-md lg:text-xl">
                <h3 className="font-bold mr-4">Type:</h3>
                <label>Contract</label>
            </div>
            <div className="mt-16 text-xl px-2 lg:px-8">
                <ul className="text-sm md:text-lg list-disc">
                    <li>
                        <p>
                            Sole developer for the project: Acted as the sole developer on the team, working alongside
                            three individuals responsible for the business side of the project. Successfully managed the
                            entire software development process, taking ownership of both the backend and frontend
                            components.
                        </p>
                    </li>
                    <li className="mt-8">
                        <p>
                            Developed and maintained the API with Spring Boot: Utilized the Spring Boot framework to
                            design, develop, and maintain the backend API of the Quality Management platform.
                            Implemented robust and efficient solutions, ensuring smooth communication between the
                            frontend and backend components.
                        </p>
                    </li>
                    <li className="mt-8">
                        <p>
                            Developed and maintained the web application in Angular 6: Leveraged Angular 6 to build and
                            maintain the web application interface for the Quality Management platform. Developed
                            responsive and user-friendly features, enhancing the overall user experience and interface
                            design.
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

function Apps2You() {
    return (
        <div>
            <a href="https://www.apps2you.com/" target="_blank">
                <img src="/images/apps2you.png" width={200} alt="Apps2You | https://www.apps2you.com"/>
            </a>
            <div className="flex flex-row mt-16 items-start lg:items-center text-md lg:text-xl">
                <h3 className="font-bold mr-4">Position:</h3>
                <label>Android Developer</label>
            </div>
            <div className="flex flex-row mt-4 items-start lg:items-center text-md lg:text-xl">
                <h3 className="font-bold mr-4">Period:</h3>
                <label>August, 2016 - September 2016</label>
            </div>
            <div className="flex flex-row mt-4 items-start lg:items-center text-md lg:text-xl">
                <h3 className="font-bold mr-4">Type:</h3>
                <label>Internship</label>
            </div>
            <div className="mt-16 text-xl px-2 lg:px-8">
                <ul className="text-sm md:text-lg list-disc">
                    <li>
                        <p>
                            Acquired a solid foundation in Android Development: Delved into the core concepts and
                            principles essential to Android application development. Demonstrated a commitment to
                            learning and mastering the intricacies of the Android ecosystem.
                        </p>
                    </li>
                    <li className="mt-8">
                        <p>
                            Gained expertise in Android Application Life Cycles: Immerse myself in understanding the
                            intricate life cycles of Android applications. This encompassed comprehensive knowledge of
                            the sequence of events and behaviors exhibited by applications throughout their existence,
                            ensuring optimal performance and responsiveness.
                        </p>
                    </li>
                    <li className="mt-8">
                        <p>
                            Proficiently implemented various data persistence techniques: Demonstrated proficiency in
                            diverse approaches to persisting data in Android applications. Acquired in-depth knowledge
                            of the various mechanisms and frameworks available for efficient data storage and retrieval,
                            resulting in robust and reliable applications.
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    )
}