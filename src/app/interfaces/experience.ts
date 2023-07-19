interface IExperience {
    companyTitle: string
    companyImg: string
    companyURL: string
    title: string
    period: string
    type: string
    location: string
    achievements: string[]
    kpis: IKpi[]
}

interface IKpi {
    title: string
    kpi: string
    description: string
}