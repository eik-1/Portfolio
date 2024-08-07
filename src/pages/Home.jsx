import React from "react"

import Hero from "../components/Hero"
import Techstack from "../components/Techstack"
import Skills from "../components/Skills"
import ArticleSection from "../components/ArticleSection"
import RecentProjects from "../components/RecentProjects"

function Home() {
    return (
        <div>
            <Hero />
            <Techstack />
            <Skills />
            <RecentProjects />
            <ArticleSection />
        </div>
    )
}

export default Home
