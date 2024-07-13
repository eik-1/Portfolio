import React from "react"
import { ArrowUpRight } from "lucide-react"

import { PinContainer } from "./magicui/PinContainer"
import { projects } from "./data/projects"
import styles from "./RecentProjects.module.css"

const RecentProjects = () => {
    return (
        <div className={styles.projectsWrapper}>
            <h1 className={styles.sectionTitle}>
                <span className={styles.titleWord}>Recent</span>{" "}
                <span className={styles.titleWord}>Projects</span>
            </h1>
            <div className={styles.projectsSection}>
                {projects.map((item) => (
                    <div className={styles.projectItem} key={item.id}>
                        <PinContainer title={item.link} href={item.link}>
                            <div className={styles.imageContainer}>
                                {/* <div className={styles.backgroundImage}>
                                    <img src="/bg.png" alt="bgimg" />
                                </div> */}
                                <img
                                    src={item.img}
                                    alt="cover"
                                    className={styles.coverImage}
                                />
                            </div>
                            <h1 className={styles.projectTitle}>
                                {item.title}
                            </h1>
                            <p className={styles.projectDescription}>
                                {item.des}
                            </p>
                            <div className={styles.projectFooter}>
                                <div className={styles.iconList}>
                                    {item.iconLists.map((icon, index) => (
                                        <div
                                            key={index}
                                            className={styles.iconWrapper}
                                            style={{
                                                transform: `translateX(-${5 * index + 2}px)`,
                                            }}
                                        >
                                            <img
                                                src={icon}
                                                alt={`icon${index + 1}`}
                                                className={styles.icon}
                                            />
                                        </div>
                                    ))}
                                </div>
                                <div className={styles.githubLink}>
                                    <a
                                        href={item.github}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <span className={styles.linkText}>
                                            Github
                                        </span>
                                    </a>
                                    <ArrowUpRight
                                        className={styles.arrowIcon}
                                    />
                                </div>
                            </div>
                        </PinContainer>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RecentProjects
