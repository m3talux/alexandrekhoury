import Header from "@/app/cv/components/header";
import {Raleway} from "next/font/google";
import Summary from "@/app/cv/components/summary";
import CvExperience from "@/app/cv/components/experience";
import Languages from "@/app/cv/components/languages";
import CvSkills from "@/app/cv/components/skills";
import Education from "@/app/cv/components/education";
import Highlights from "@/app/cv/components/highlights";

const raleway = Raleway({weight: '500', subsets: ['latin']})

export default function Home() {
    return (
        <main className={raleway.className}>
            <div className="p-4 w-[794px] h-[1123px]">
                <h1 className="hidden">Alexandre El Khoury | Sr. Software Engineer</h1>
                <Header/>
                <div className="mt-4"/>
                <Summary/>
                <div className="mt-4 flex flex-row space-x-14">
                    <div>
                        <CvExperience/>
                        <div className="mt-4"/>
                        <Education/>
                    </div>
                    <div className="min-w-[160px]">
                        <Languages/>
                        <div className="mt-4"/>
                        <CvSkills/>
                        <div className="mt-4"/>
                        <Highlights/>
                    </div>
                </div>
            </div>
        </main>
    )
}
