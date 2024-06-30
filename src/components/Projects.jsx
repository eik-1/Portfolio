import React from "react"

import { CardContainer, CardBody, CardItem } from "./magicui/CardsHover"
import styles from "./Projects.module.css"
import { StoX, dBeats } from "../assets/projects"

const projects = [
    {
        title: "StoX",
        description: "Tokenizing Stocks Using Chainlink",
        imageSrc: StoX,
        demoLink: "https://stox-tokenize.vercel.app",
        githubLink: "https://github.com/eik-1/stox-foundry-contracts",
    },
    {
        title: "dBeats",
        description: "NFT Marketplace For Music",
        imageSrc: dBeats,
        demoLink: "https://google.com",
        githubLink: "https://apple.com",
    },
]

const ProjectsSection = () => {
    return (
        <div className={styles.projectsWrapper}>
            <h1 className={styles.sectionTitle}>Projects</h1>
            <div className={styles.projectsSection}>
                {projects.map((project, index) => (
                    <CardContainer key={index} className={styles.cardContainer}>
                        <CardBody className={styles.cardBody}>
                            <CardItem
                                translateZ="50"
                                className={styles.cardTitle}
                            >
                                {project.title}
                            </CardItem>
                            <CardItem
                                translateZ="60"
                                className={styles.cardDescription}
                            >
                                {project.description}
                            </CardItem>
                            <CardItem
                                translateZ="100"
                                className={styles.cardImage}
                            >
                                <img
                                    src={project.imageSrc}
                                    className={styles.image}
                                    alt="project thumbnail"
                                />
                            </CardItem>
                            <div className={styles.buttonContainer}>
                                <CardItem
                                    translateZ={20}
                                    as="a"
                                    href={project.demoLink}
                                    target="__blank"
                                    className={styles.demoButton}
                                >
                                    Live Demo
                                </CardItem>
                                <CardItem
                                    translateZ={20}
                                    as="a"
                                    href={project.githubLink}
                                    target="__blank"
                                    className={styles.githubButton}
                                >
                                    GitHub
                                </CardItem>
                            </div>
                        </CardBody>
                    </CardContainer>
                ))}
            </div>
        </div>
    )
}

export default ProjectsSection
