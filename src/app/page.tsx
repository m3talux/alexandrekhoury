import {Main} from "@/app/sections/main";
import Nav from "@/app/components/nav";
import {About} from "@/app/sections/about";
import Skills from "@/app/sections/skills";
import Experiences from "@/app/sections/experiences";
import Footer from "@/app/sections/footer";
import Quote from "@/app/sections/quote";

export default function Home() {
    return (
        <main className="overflow-hidden">
            <h1 className="hidden">Alexandre El Khoury | Software Engineer</h1>
            <Nav/>
            <div className="mt-8 md:mt-32"/>
            <Main/>
            <div className="mt-16 md:mt-32"/>
            <About/>
            <Skills/>
            <div className="mt-48"/>
            <Quote/>
            <div className="mt-32"/>
            <Experiences/>
            <div className="mt-32"/>
            <Footer/>
        </main>
    )
}
