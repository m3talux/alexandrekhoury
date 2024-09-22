import Title from "@/app/cv/components/title";
import skills from "@/app/content/skills.json"

export default function CvSkills() {
    return (
        <div>
            <Title text="skills"/>
            {
                skills.map((skill, index) =>
                    <div key={index}>
                        <h4 className="text-sm mt-2">{skill.title}</h4>
                        <ul className="list-disc list-inside ml-2 mt-1">
                            {skill.skills.map((s, pIndex) => (
                                <li key={pIndex} className="text-[var(--text-color)] text-xs mt-1">{s.title}</li>
                            ))}
                        </ul>
                    </div>
                )
            }
        </div>
    )
}