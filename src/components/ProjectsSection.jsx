import React, { useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { Link } from "react-router-dom"

import styles from "./ProjectsSection.module.css"
import { projects } from "./data/projects"

function ProjectCard({ project }) {
    const [isHovered, setIsHovered] = useState(false)
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    const handleMouseMove = (e) => {
        setMousePosition({
            x: e.clientX + 20,
            y: e.clientY + 20,
        })
    }

    return (
        <div className={styles.projectCard}>
            <motion.div
                className={styles.projectImageCard}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onMouseMove={handleMouseMove}
            >
                <Link to={`project/${project.title.toLowerCase()}`}>
                    <img
                        src={project.img}
                        alt={project.title}
                        className={styles.projectImage}
                    />
                    {isHovered && (
                        <motion.div
                            className={styles.exploreButton}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            style={{
                                left: mousePosition.x,
                                top: mousePosition.y,
                            }}
                        >
                            <div className={styles.explore}>
                                EXPLORE
                                <ArrowUpRight className={styles.arrowIcon} />
                            </div>
                        </motion.div>
                    )}
                </Link>
            </motion.div>
            <div className={styles.projectInfo}>
                <h2 className={styles.projectTitle}>{project.title}</h2>
                <p className={styles.projectDescription}>{project.des}</p>
            </div>
        </div>
    )
}

function RecentProjects() {
    const { scrollYProgress } = useScroll()
    const backgroundColor = useTransform(
        scrollYProgress,
        [0, 0.1, 0.2],
        ["rgb(237, 238, 242)", "rgb(237, 238, 242)", "rgb(237, 238, 242)"],
    )
    const opacity = useTransform(scrollYProgress, [0.1, 0.2], [0, 1])

    return (
        <motion.div
            className={styles.projectsWrapper}
            style={{ backgroundColor, opacity }}
        >
            <motion.h1
                className={styles.sectionTitle}
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <span>Projects</span>
            </motion.h1>
            <motion.div
                className={styles.projectsGrid}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </motion.div>
        </motion.div>
    )
}

export default RecentProjects
