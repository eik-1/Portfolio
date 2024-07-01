import React from "react"

import Hero from "../components/Hero"
import Techstack from "../components/Techstack"
import Skills from "../components/Skills"
import Projects from "../components/Projects"
import ArticleSection from "../components/ArticleSection"

function Home() {
    return (
        <div>
            <Hero />
            <Techstack />
            <Skills />
            <Projects />
            <ArticleSection />
        </div>
    )
}

export default Home
