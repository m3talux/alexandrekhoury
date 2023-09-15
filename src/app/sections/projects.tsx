import projects from "@/app/content/projects.json"
import Image from "next/image";

export default function Projects() {
    return (
        <section className="p-8 my-32">
            <h2 className="text-center text-[var(--text-color)] font-bold text-3xl">Projects I worked on</h2>
            <div className="mt-16 ml-8 mr-8 inline-flex flex-row flex-wrap gap-8 justify-center">
                {
                    projects.map((project: IProject, i: number) => (
                        <a key={i} className="w-[300px] p-8 shadow-md rounded-md flex flex-col justify-center items-center transform
                                transition duration-500 hover:scale-105" href={project.projectUrl} target="_blank">
                            <Image width="100" height="50" src={project.projectImage} alt={project.projectName} className="h-auto"/>
                            <h3 className="mt-4 text-md font-bold">{project.position}</h3>
                            <div className="mt-4 inline-flex flex-row flex-wrap gap-2">
                                {
                                    project.technologies.map((icon: string, i: number) => (
                                        <Image key={i} src={icon} alt={icon} width="12" height="12"/>
                                    ))
                                }
                            </div>
                            <p className="mt-4 text-sm text-center">{project.summary}</p>
                        </a>
                    ))
                }
            </div>
        </section>
    )
}