import KPICard from "@/app/components/kpi";

export default function Experience(experience: IExperience) {
    return (
        <div>
            <a href={experience.companyURL} target="_blank">
                <img src={`${experience.companyImg}`} width={200} alt={experience.companyURL}/>
            </a>
            <div className="flex flex-row mt-16 items-start lg:items-center text-md lg:text-xl">
                <h3 className="font-bold mr-4">Position:</h3>
                <label>{experience.title}</label>
            </div>
            <div className="flex flex-row mt-4 items-start lg:items-center text-md lg:text-xl">
                <h3 className="font-bold mr-4">Period:</h3>
                <label>{experience.period}</label>
            </div>
            <div className="flex flex-row mt-4 items-start lg:items-center text-md lg:text-xl">
                <h3 className="font-bold mr-4">Type:</h3>
                <label>{experience.type}</label>
            </div>
            <div className="flex flex-row mt-4 items-start lg:items-center text-md lg:text-xl">
                <h3 className="font-bold mr-4">Location:</h3>
                <label>{experience.location}</label>
            </div>
            <div className="mt-16 text-xl px-2 lg:px-8">
                <ul className="text-sm lg:text-lg list-disc">
                    {experience.achievements.map((achievement, index) => (
                        <li className={`${index > 0 ? 'mt-8' : ''}`} key={index}>
                            <p>{achievement}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex flex-col lg:flex-row mt-16">
                {experience.kpis.map((kpi, index) => (
                    <KPICard
                        key={index}
                        title={kpi.title}
                        kpi={kpi.kpi}
                        description={kpi.description}
                        margin={index !== experience.kpis.length - 1}
                    />
                ))}
            </div>
        </div>
    );
}