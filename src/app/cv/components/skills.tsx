import skills from "@/app/content/skills.json"
import Image from "next/image";

export default function CvSkills() {
    return (
        <div className="flex justify-center">
            <div
                className="flex flex-row mx-0 w-full justify-around items-start">
                {
                    skills.map((skillCategory, index) => (
                        <CvSkillCategory key={index} title={skillCategory.title} imageURL={skillCategory.imageURL}
                                         skills={skillCategory.skills}/>
                    ))
                }
            </div>
        </div>
    )
}

function CvSkillCategory(skillCategory: ISkillCategory) {
    return (
        <div className="">
            <h2 className="text-lg">{skillCategory.title}</h2>
            <div
                className="flex flex-col mt-4 w-full text-[var(--text-color)]">
                {skillCategory.skills.map((skill, index) => (
                    <div key={skill.title}
                         className={`flex flex-row justify-center xl:justify-start items-center ${index > 0 ? 'mt-4' : ''}`}>
                        <Image src={skill.imageURL} className="w-[16px] md:w-[20px]" width={10} height={10}
                               alt={skill.title} loading="eager"/>
                        <label className="ml-4 text-xs">{skill.title}</label>
                    </div>
                ))}
            </div>
        </div>
    )
}