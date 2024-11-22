import Title from "@/app/cv/components/title";
import experiences from "@/data/experiences.json";

export default function CvExperience() {
    return (
        <div>
            <Title text="experience"/>
            <div>
                {
                    experiences.map((exp, index) =>
                        (
                            <div key={index} className="mb-4">
                                <h3 className="text-[var(--text-color)] text-md tracking-wider">{exp.title}</h3>
                                <h4 className="text-blue-500 text-sm font-bold tracking-wider">{exp.companyTitle}</h4>
                                <p className="text-[var(--text-color)] text-xs">{exp.location} | {exp.period}</p>
                                <ul className="list-disc ml-6 mt-2 list-outside">
                                    {exp.achievements.map((point, pIndex) => (
                                        <li key={pIndex}
                                            className="text-[var(--text-color)] text-xs mt-1 text-justify">{point}</li>
                                    ))}
                                </ul>
                            </div>
                        ))
                }
            </div>
        </div>
    )
}