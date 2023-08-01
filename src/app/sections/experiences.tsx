'use client'

import React, {useState} from "react";
import experiences from "@/app/content/experiences.json"
import Experience from "@/app/components/experience";

export default function Experiences() {
    const [index, setIndex] = useState(0);

    return (
        <section className="p-2 lg:p-8 text-white my-32">
            <div
                className="w-full h-[80px] bg-sky-950 rounded-t-3xl flex flex-row justify-between items-center px-8 border-b-[1px] border-gray-900 border-opacity-30">
                <h2 className="text-xl lg:text-3xl font-bold">My Experience</h2>
                <div className="flex flex-row justify-center items-center">
                    <div className="w-4 h-4 lg:w-6 lg:h-6 rounded-full bg-yellow-600 mr-4"/>
                    <div className="w-4 h-4 lg:w-6 lg:h-6 rounded-full bg-green-600 mr-4"/>
                    <div className="w-4 h-4 lg:w-6 lg:h-6 rounded-full bg-red-600"/>
                </div>
            </div>
            <div className="min-h-[1100px] w-full bg-sky-950 rounded-b-3xl flex flex-col xl:flex-row">
                <div
                    className="flex xl:flex-col overflow-auto min-w-[200px] flex-row h-full w-full xl:w-[200px] border-r-0 lg:border-r-[1px] border-gray-900 border-opacity-30">
                    {
                        experiences.map((exp: IExperience, i: number) => (
                                <div key={i} onClick={() => setIndex(i)}
                                     className={`px-4 py-4 lg:py-8 text-md lg:text-xl hover:cursor-pointer hover:bg-sky-900 ${index == i ? 'bg-sky-900' : ''}`}>{exp.companyTitle}
                                </div>
                            )
                        )
                    }
                </div>
                <div className="flex-1 p-8 mb-16">
                    <Experience companyTitle={experiences[index].companyTitle}
                                companyImg={experiences[index].companyImg}
                                companyURL={experiences[index].companyURL}
                                title={experiences[index].title}
                                period={experiences[index].period}
                                type={experiences[index].type}
                                location={experiences[index].location}
                                achievements={experiences[index].achievements}
                                kpis={experiences[index].kpis}/>
                </div>
            </div>
        </section>
    )
}