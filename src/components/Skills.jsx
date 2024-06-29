import React, { useEffect, useRef, useState } from "react"
import IconCloud from "./magicui/IconCloud"
import TypingAnimation from "./magicui/TypingAnimation"
import styles from "./Skills.module.css"

const slugs = [
    "chainlink",
    "counterstrike",
    "ethers",
    "nodedotjs",
    "express",
    "firebase",
    "css3",
    "docker",
    "git",
    "ipfs",
    "nextdotjs",
    "solidity",
    "rust",
    "alchemy",
    "react",
    "typescript",
    "javascript",
    "supabase",
    "tailwind",
]

const skills = [
    "solidity",
    "rust",
    "typescript",
    "chainlink",
    "wagmi",
    "ipfs",
    "react",
    "supabase",
    "docker",
    "git",
    "counterstrike",
]

const OtherSkills = () => {
    const [isVisible, setIsVisible] = useState(false)
    const skillsRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.unobserve(entry.target)
                }
            },
            {
                threshold: 0.1,
            },
        )

        if (skillsRef.current) {
            observer.observe(skillsRef.current)
        }

        return () => {
            if (skillsRef.current) {
                observer.unobserve(skillsRef.current)
            }
        }
    }, [])

    return (
        <div className={styles.wrapper} ref={skillsRef}>
            <h1 className={styles.heading}>Skills</h1>
            <div className={styles.skills}>
                <div className={styles.skillsText}>
                    {skills.map((skill) => (
                        <TypingAnimation
                            key={skill}
                            className="text-2xl font-bold text-[#06D001] font-space"
                            text={`- ${skill}`}
                            isVisible={isVisible}
                        />
                    ))}
                </div>
                <div className={styles.skillsGlobe}>
                    <IconCloud iconSlugs={slugs} />
                </div>
            </div>
        </div>
    )
}

export default OtherSkills
