import {Main} from "@/app/sections/main";
import Nav from "@/app/components/nav";
import {About} from "@/app/sections/about";
import Skills from "@/app/sections/skills";
import Experiences from "@/app/sections/experiences";

export default function Home() {
    return (
        <main className="overflow-hidden">
            <Nav/>
            <div className="mt-8 md:mt-32"/>
            <Main/>
            <div className="mt-8 md:mt-32"/>
            <About/>
            <Skills/>
            <div className="mt-8 md:mt-32"/>
            <Experiences/>
        </main>
    )
}
