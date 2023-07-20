import skills from "@/app/content/skills.json"
import SkillCategory from "@/app/components/skill-category";

export default function Skills() {
    return (
        <section className="relative">
            <div className="bg-sky-600 h-64 absolute top-0 left-0 right-0 -z-10"/>
            <div className="flex w-screen justify-center pt-16">
                <div
                    className="flex xl:flex-row mx-8 xl:mx-0 w-screen xl:w-max flex-col justify-center items-start bg-white p-8 rounded-3xl shadow-xl">
                    {
                        skills.map((skillCategory, index) => (
                            <div key={index} className="w-full flex flex-col xl:flex-row h-full">
                                <SkillCategory key={index} title={skillCategory.title} skills={skillCategory.skills}/>
                                <div
                                    className={index < skills.length - 1 ? 'h-[1px] xl:h-full xl:w-[1px] bg-gray-900 bg-opacity-10 my-8 xl:mr-8 xl:my-0' : ''}/>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}