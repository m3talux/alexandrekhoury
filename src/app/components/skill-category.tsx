import Image from "next/image";

export default function SkillCategory(skillCategory: ISkillCategory) {
    return (
        <div className="w-full xl:w-[250px] 2xl:w-[300px]">
            <div className="w-full text-sky-600 font-bold text-xl md:text-2xl xl:text-3xl">
                <h2>{`<${skillCategory.title}/>`}</h2>
            </div>
            <div className="flex flex-col mt-8 w-full text-left text-lg md:text-xl xl:text-2xl text-gray-700">
                {skillCategory.skills.map((skill, index) => (
                    <div key={skill.title} className={`flex flex-row items-center ${index > 0 ? 'mt-6' : ''}`}>
                        <Image src={skill.imageURL} className="w-[16px] md:w-[20px]" width={20} height={20} alt={skill.title}/>
                        <label className="ml-4">{skill.title}</label>
                    </div>
                ))}
            </div>
        </div>
    )
}