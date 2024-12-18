'use client'

import projects from "@/data/projects.json"
import Image from "next/image";

export default function Projects() {
    return (
        <section
            className="px-4 md:px-8 py-16 my-32 bg-[url('/svg/pattern-randomized.svg')] flex flex-col items-center">
            <h2 className="text-center text-[var(--text-color)] font-bold text-3xl">Some projects I worked on...</h2>
            <div className="mt-16 ml-8 mr-8 inline-flex flex-row flex-wrap gap-8 justify-center w-full max-w-[1000px]">
                {
                    projects.map((project, i) => (
                        <div
                            key={i}
                            className={`w-full md:w-[300px] p-4 shadow-md rounded-md flex flex-col justify-between items-center bg-white ${project.archived ? '' : 'cursor-pointer transform transition duration-300 hover:scale-105'} relative`}
                            onClick={() => !project.archived && window.open(project.url, '_blank')}
                        >
                            <span/>
                            <Image width={project.imageWidth} height="50" src={project.image} alt={project.name}
                                   className="h-auto"/>
                            <div className="mt-2 flex flex-col items-center">
                                <h3 className="text-md font-bold">{project.position}</h3>
                                <div className="mt-2 inline-flex flex-row flex-wrap gap-2">
                                    {project.technologies.map((icon, i) => (
                                        <Image key={i} src={icon} alt={icon} width="12" height="12"/>
                                    ))}
                                </div>
                            </div>
                            {
                                project.archived && <div
                                    className="absolute top-1 right-1 bg-orange-400 py-1 px-2 text-white text-xs rounded-md">Archived</div>
                            }
                        </div>
                    ))
                }
            </div>
        </section>
    )
}