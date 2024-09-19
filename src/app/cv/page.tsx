import Header from "@/app/cv/components/header";
import {Raleway} from "next/font/google";
import Summary from "@/app/cv/components/summary";
import CvExperience from "@/app/cv/components/experience";

const raleway = Raleway({weight: '500', subsets: ['latin']})

export default function Home() {
    return (
        <main className={raleway.className}>
            <div className="w-screen flex flex-col items-center">
                <div className="p-8 w-[794px] h-[1123px] border-2 border-gray-200 border-dashed">
                    <h1 className="hidden">Alexandre El Khoury | Sr. Software Engineer</h1>
                    <Header/>
                    <div className="mt-4"/>
                    <Summary/>
                    <div className="mt-4"/>
                    <CvExperience/>
                </div>
            </div>
        </main>
    )
}
