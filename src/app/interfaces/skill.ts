interface ISkill {
    imageURL: string;
    title: string;
}

interface ISkillCategory {
    title: string;
    imageURL: string;
    skills: ISkill[];
}