import React from "react"

import Hero from "../components/Hero"
import Techstack from "../components/Techstack"
import ArticleSection from "../components/ArticleSection"
import ProjectsSection from "../components/ProjectsSection"

function Home() {
    return (
        <div>
            <Hero />
            <Techstack />
            <ProjectsSection />
            {/* <ArticleSection /> */}
        </div>
    )
}

export default Home
