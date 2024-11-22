import skills from "@/data/skills.json"
import SkillCategory from "@/app/components/skill-category";
import Image from "next/image";

export default function Skills() {
    return (
        <section className="relative flex flex-col justify-center items-center py-32">
            <Image src="/svg/progressive-app.svg" alt="Software Skills" width={300} height={300}/>
            <div className="flex w-screen justify-center">
                <div
                    className="flex xl:flex-row mx-8 xl:mx-0 w-screen xl:w-max flex-col justify-center items-start bg-white p-8 rounded-2xl shadow-md">
                    {
                        skills.map((skillCategory, index) => (
                            <div key={index} className="w-full flex flex-col xl:flex-row h-full">
                                <SkillCategory key={index} title={skillCategory.title} imageURL={skillCategory.imageURL} skills={skillCategory.skills}/>
                                <div
                                    className={index < skills.length - 1 ? 'h-[1px] xl:h-full xl:w-[1px] bg-gray-600 bg-opacity-10 my-8 xl:mr-8 xl:my-0' : ''}/>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}