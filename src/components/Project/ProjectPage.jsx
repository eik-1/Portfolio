import React from "react"
import { useParams } from "react-router-dom"
import { ArrowUpRight, Globe } from "lucide-react"

import { projects } from "../data/projects"
import styles from "./ProjectPage.module.css"
import { Chainlink } from "../../assets"

function ProjectPage() {
    const { title } = useParams()
    const project = projects.find(
        (p) => p.title.toLowerCase() === title.toLowerCase(),
    )

    if (!project) {
        return <div className={styles.notFound}>Project not found</div>
    }

    return (
        <div className={styles.projectPage}>
            <div className={styles.projectHeader}>
                <img
                    src={project.img}
                    alt={project.title}
                    className={styles.projectImage}
                />
                <div className={styles.projectInfo}>
                    <h1 className={styles.projectTitle}>{project.title}</h1>
                    <p className={styles.projectDescription}>{project.des}</p>
                    <hr className={styles.divider} />
                    <div className={styles.iconList}>
                        <div className={styles.iconWrapper}>
                            <img
                                src={Chainlink}
                                alt="Chainlink"
                                className={styles.chainlinkIcon}
                            />
                            <span className={styles.iconTooltip}>
                                Chainlink
                            </span>
                        </div>
                        {project.iconLists.map(({ Icon, name }, index) => (
                            <div key={index} className={styles.iconWrapper}>
                                <Icon size={24} />
                                <span className={styles.iconTooltip}>
                                    {name}
                                </span>
                            </div>
                        ))}
                    </div>
                    <div className={styles.buttonContainer}>
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.button}
                        >
                            LIVE <ArrowUpRight size={24} />
                        </a>
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.buttonGithub}
                        >
                            GITHUB <Globe size={22} />
                        </a>
                    </div>
                </div>
            </div>
            <hr className={styles.divider} />
            <div className={styles.projectContent}>
                <p className={styles.paragraph}>{project.paragraph1}</p>
                <p className={styles.paragraph}>{project.paragraph2}</p>
            </div>
        </div>
    )
}

export default ProjectPage
