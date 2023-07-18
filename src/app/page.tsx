import {Main} from "@/app/sections/main";
import Nav from "@/app/components/nav";
import {About} from "@/app/sections/about";
import Skills from "@/app/sections/skills";

export default function Home() {
    return (
        <main className="overflow-hidden">
            <Nav/>
            <div className="mt-8 md:mt-32"/>
            <Main/>
            <div className="mt-8 md:mt-32"/>
            <About/>
            <Skills/>
        </main>
    )
}
