import {Main} from "@/app/sections/main";
import Nav from "@/app/components/nav";
import {About} from "@/app/sections/about";
import Skills from "@/app/sections/skills";
import Experiences from "@/app/sections/experiences";
import Footer from "@/app/sections/footer";
import Quote from "@/app/sections/quote";
import Contact from "@/app/sections/contact";
import Projects from "@/app/sections/projects";

export default function Home() {
    return (
        <main className="overflow-hidden">
            <h1 className="hidden">Alexandre El Khoury | Software Engineer</h1>
            <Nav/>
            <Main/>
            <About/>
            <Skills/>
            <Quote/>
            <Experiences/>
            <Projects/>
            <Contact/>
            <Footer/>
        </main>
    )
}
