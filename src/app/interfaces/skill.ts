interface ISkill {
    imageURL: string;
    title: string;
}

interface ISkillCategory {
    title: string;
    skills: ISkill[];
}