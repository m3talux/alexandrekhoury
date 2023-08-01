import Image from "next/image";

export default function SkillCategory(skillCategory: ISkillCategory) {
    return (
        <div className="w-full xl:w-[250px] 2xl:w-[300px] text-center">
            <div className="w-full text-[var(--text-color)] flex flex-col items-center font-bold text-lg md:text-xl xl:text-2xl">
                <h2>{skillCategory.title}</h2>
                <Image src={skillCategory.imageURL} alt={skillCategory.title} className="mt-4" width={42} height={42}/>
            </div>
            <div
                className="flex flex-col mt-12 w-full text-md xl:text-lg text-[var(--text-color)]">
                {skillCategory.skills.map((skill, index) => (
                    <div key={skill.title} className={`flex flex-row justify-center items-center ${index > 0 ? 'mt-6' : ''}`}>
                        <Image src={skill.imageURL} className="w-[16px] md:w-[20px]" width={20} height={20}
                               alt={skill.title}/>
                        <label className="ml-4">{skill.title}</label>
                    </div>
                ))}
            </div>
        </div>
    )
}