import React from "react"
import { VelocityScroll } from "./magicui/VelocityScroll"
import styles from "./Skills.module.css"

const Skills = () => {
    const skills = [
        { name: "JAVASCRIPT", color: "text-yellow-400", velocity: 5 },
        { name: "SOLIDITY", color: "text-white", velocity: -5 },
        { name: "FOUNDRY", color: "text-orange-500", velocity: 5 },
        { name: "REACT", color: "text-cyan-400", velocity: -5 },
        { name: "NEXT.JS", color: "text-green-400", velocity: 5 },
    ]

    return (
        <section className={styles.skillsSection}>
            <h2 className={styles.title}>My Techstack</h2>
            {skills.map((skill) => (
                <VelocityScroll
                    key={skill.name}
                    text={`${skill.name} • `.repeat(10)}
                    baseVelocity={skill.velocity}
                    className={`${styles.marquee} ${skill.color}`}
                />
            ))}
        </section>
    )
}

export default Skills
