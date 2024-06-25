import React from "react"
import { VelocityScroll } from "./magicui/VelocityScroll"
import styles from "./Skills.module.css"

const Skills = () => {
    const skills = [
        { name: "JAVASCRIPT", color: "text-yellow-400" },
        { name: "SOLIDITY", color: "text-white" },
        { name: "FOUNDRY", color: "text-orange-500" },
        { name: "REACT", color: "text-cyan-400" },
        { name: "NEXT.JS", color: "text-green-400" },
    ]

    return (
        <section className={styles.skillsSection}>
            <h2 className={styles.title}>My Skillset</h2>
            {skills.map((skill, index) => (
                <VelocityScroll
                    key={skill.name}
                    direction={index % 2 === 0 ? "left" : "right"}
                    className={styles.marqueeWrapper}
                    highlightColor={skill.color}
                >
                    {`${skill.name}.${skill.name}.${skill.name}.${skill.name}.${skill.name}`}
                </VelocityScroll>
            ))}
        </section>
    )
}

export default Skills
