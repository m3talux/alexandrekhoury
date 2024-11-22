'use client'

import experiences from "@/data/experiences.json"
import Image from "next/image";

export default function Experiences() {
    return (
        <section className="px-4 xl:px-16 my-32 w-full flex flex-col items-center">
            <h2 className="text-center text-[var(--text-color)] font-bold text-3xl">Discover my journey</h2>
            <div className="mt-32 max-w-[1400px]">
                {
                    experiences.map((e, i) =>
                        (
                            <div
                                className={`flex ${i % 2 != 0 ? 'flex-col xl:flex-row-reverse' : 'flex-col xl:flex-row'} items-center ${i < experiences.length - 1 ? 'mb-32' : 'mb-0'} w-full`}
                                key={i}>
                                <div className="flex flex-col items-center xl:w-[800px]">
                                    <a href={e.companyURL} target="_blank">
                                        <Image className="object-center xl:w-[400px] max-w-[400px] w-[200px]"
                                               src={e.companyImg}
                                               alt={e.companyTitle}
                                               width={500}
                                               height={100}/>
                                    </a>
                                    <h3 className="mt-8 font-bold text-center">{e.title}</h3>
                                    <div className="mt-2 flex flex-row items-center">
                                        <p>{e.period}</p>
                                        {
                                            i == 0 && <span className="ml-4 relative flex h-3 w-3">
                                        <span
                                            className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--primary-color)] opacity-75"></span>
                                        <span
                                            className="relative inline-flex rounded-full h-3 w-3 bg-[var(--primary-color)]"></span>
                                    </span>
                                        }
                                    </div>
                                    {
                                        e.kpis.length > 0 && <KpisContainer kpis={e.kpis}/>
                                    }
                                </div>
                                <ExperienceAchievements achievements={e.achievements} index={i}/>
                            </div>
                        ))
                }
            </div>
        </section>
    )
}

interface IKpisContainerProps {
    kpis: IKpi[]
}

function KpisContainer({kpis}: IKpisContainerProps) {
    return (
        <div
            className="mt-8 border-gray-200 border-[1px] w-[300px] rounded-xl px-8 py-4">
            {
                kpis.map((k, i) => (
                    <div
                        className={`${i < kpis.length - 1 ? 'mb-4' : 'mb-0'} flex flex-row items-center justify-between`}
                        key={i}>
                        <div className="flex flex-col justify-center items-start">
                            <label>{k.title}</label>
                            <p className="text-xs">{k.description}</p>
                        </div>
                        <h4 className="ml-4 text-3xl text-[var(--primary-color)]">{k.kpi}</h4>
                    </div>
                ))
            }
        </div>
    )
}

interface IExperienceAchievementsProps {
    achievements: string[]
    index: number
}

function ExperienceAchievements({achievements, index}: IExperienceAchievementsProps) {
    return (
        <ul
            className={`${index % 2 != 0 ? 'xl:mr-32' : 'xl:ml-32'} xl:mt-0 mt-8 text-[var(--accent-color)] grow bg-gray-50 p-12 xl:p-16 rounded-2xl shadow-lg shadow-gray-200 list-disc`}>
            {
                achievements.map((a, i) => (
                        <li className={`${i < achievements.length - 1 ? 'mb-4' : 'mb-0'} text-sm xl:text-base`}
                            key={i}>{a}</li>
                    )
                )
            }
        </ul>
    )
}
